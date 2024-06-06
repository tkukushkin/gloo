package translator_test

import (
	"context"

	envoy_config_listener_v3 "github.com/envoyproxy/go-control-plane/envoy/config/listener/v3"
	routerv3 "github.com/envoyproxy/go-control-plane/envoy/extensions/filters/http/router/v3"
	envoy_http_connection_manager_v3 "github.com/envoyproxy/go-control-plane/envoy/extensions/filters/network/http_connection_manager/v3"
	"github.com/golang/protobuf/ptypes/wrappers"

	. "github.com/onsi/ginkgo/v2"
	. "github.com/onsi/gomega"
	gatewaydefaults "github.com/solo-io/gloo/projects/gateway/pkg/defaults"
	v1 "github.com/solo-io/gloo/projects/gloo/pkg/api/v1"
	gloov1snap "github.com/solo-io/gloo/projects/gloo/pkg/api/v1/gloosnapshot"
	"github.com/solo-io/gloo/projects/gloo/pkg/api/v1/options/hcm"
	routerV1 "github.com/solo-io/gloo/projects/gloo/pkg/api/v1/options/router"
	"github.com/solo-io/gloo/projects/gloo/pkg/defaults"
	"github.com/solo-io/gloo/projects/gloo/pkg/plugins"
	hcmplugin "github.com/solo-io/gloo/projects/gloo/pkg/plugins/hcm"
	"github.com/solo-io/gloo/projects/gloo/pkg/plugins/registry"
	"github.com/solo-io/gloo/projects/gloo/pkg/translator"
	sslutils "github.com/solo-io/gloo/projects/gloo/pkg/utils"
	gloovalidation "github.com/solo-io/gloo/projects/gloo/pkg/utils/validation"
	"github.com/solo-io/solo-kit/pkg/api/v1/resources/core"
)

var _ = Describe("Router filter test", func() {
	// These tests validate the router filter that's generated from the network_filters translator. It
	// would be ideal if that filter could be broken out into its own separate plugin, but for now
	// it's a bit shoehorned into the HTTP connection manager translator

	DescribeTable("Envoy router options generated by HttpConnectionManager translator",
		func(router *routerV1.Router, assertionHandler func(*routerv3.Router), additionalPlugins ...plugins.Plugin) {

			ctx, cancel := context.WithCancel(context.Background())
			defer cancel()

			// Create a pluginRegistry with a minimal number of plugins
			// This test is not concerned with the functionality of individual plugins
			filterPlugins := []plugins.Plugin{
				hcmplugin.NewPlugin(),
			}
			filterPlugins = append(filterPlugins, additionalPlugins...)
			pluginRegistry := registry.NewPluginRegistry(filterPlugins)

			// The translatorFactory expects each of the plugins to be initialized
			// Therefore, to test this component we pre-initialize the plugins
			for _, p := range pluginRegistry.GetPlugins() {
				p.Init(plugins.InitParams{
					Ctx:      ctx,
					Settings: &v1.Settings{},
				})
			}

			translatorFactory := translator.NewListenerSubsystemTranslatorFactory(pluginRegistry, sslutils.NewSslConfigTranslator())
			listener := &v1.Listener{
				Name:        "aggregate-listener",
				BindAddress: gatewaydefaults.GatewayBindAddress,
				BindPort:    defaults.HttpPort,
				ListenerType: &v1.Listener_HttpListener{
					HttpListener: &v1.HttpListener{
						VirtualHosts: []*v1.VirtualHost{{
							Name: "virtual-host",
						}},
						Options: &v1.HttpListenerOptions{
							HttpConnectionManagerSettings: &hcm.HttpConnectionManagerSettings{},
							Router:                        router,
						},
					},
				},
			}
			proxy := &v1.Proxy{
				Metadata: &core.Metadata{
					Name:      "proxy",
					Namespace: defaults.GlooSystem,
				},
				Listeners: []*v1.Listener{listener},
			}

			proxyReport := gloovalidation.MakeReport(proxy)
			listenerReport := proxyReport.GetListenerReports()[0] // 1 Listener -> 1 ListenerReport

			listenerTranslator, routeConfigurationTranslator := translatorFactory.GetHttpListenerTranslators(
				ctx,
				proxy,
				listener,
				listenerReport)

			params := plugins.Params{
				Ctx: ctx,
				Snapshot: &gloov1snap.ApiSnapshot{
					// To support ssl filter chain
					Secrets: v1.SecretList{createTLSSecret()},
				},
			}
			envoyListener := listenerTranslator.ComputeListener(params)
			_ = routeConfigurationTranslator.ComputeRouteConfiguration(params)

			// Validate that no Errors were encountered during translation
			Expect(gloovalidation.GetProxyError(proxyReport)).NotTo(HaveOccurred())

			By("configuring the envoy router from gloo settings")
			filterChain := envoyListener.GetFilterChains()[0]
			hcmFilter := filterChain.GetFilters()[0]
			_, err := sslutils.AnyToMessage(hcmFilter.GetConfigType().(*envoy_config_listener_v3.Filter_TypedConfig).TypedConfig)
			Expect(err).NotTo(HaveOccurred())

			hcm := &envoy_http_connection_manager_v3.HttpConnectionManager{}
			err = translator.ParseTypedConfig(hcmFilter, hcm)
			Expect(err).NotTo(HaveOccurred())
			Expect(hcm.HttpFilters).To(HaveLen(1))

			routeFilter := hcm.GetHttpFilters()[0]
			typedRouterFilter := routerv3.Router{}
			routeFilter.GetTypedConfig().UnmarshalTo(&typedRouterFilter)
			// Perform assertions on generated Envoy router filter
			assertionHandler(&typedRouterFilter)
		},

		Entry(
			"Set suppress_envoy_headers to true",
			&routerV1.Router{
				SuppressEnvoyHeaders: &wrappers.BoolValue{
					Value: true,
				},
			},
			func(typedRouterFilter *routerv3.Router) {
				Expect(typedRouterFilter.GetSuppressEnvoyHeaders()).To(BeTrue())
			},
		),
		Entry(
			"Set dynamic_stats to false",
			&routerV1.Router{
				DynamicStats: &wrappers.BoolValue{
					Value: false,
				},
			},
			func(typedRouterFilter *routerv3.Router) {
				Expect(typedRouterFilter.GetDynamicStats().GetValue()).To(BeFalse())
			},
		),

		Entry(
			"Leave envoy's dynamic_stats as nil if not specified in gloo",
			&routerV1.Router{},
			func(typedRouterFilter *routerv3.Router) {
				Expect(typedRouterFilter.GetDynamicStats()).To(BeNil())
			},
		),

		Entry(
			"Will add an upstream HTTP filter if a plugin is present",
			&routerV1.Router{},
			func(typedRouterFilter *routerv3.Router) {
				Expect(typedRouterFilter.GetUpstreamHttpFilters()).To(HaveLen(2))
				Expect(typedRouterFilter.GetUpstreamHttpFilters()[0].GetName()).To(Equal("fake-upstream-filter"))
				Expect(typedRouterFilter.GetUpstreamHttpFilters()[1].GetName()).To(Equal(translator.UpstreamCodeFilterName))
				// Expect(typedRouterFilter.GetDynamicStats()).To(BeNil())
			},
			&fakeUpstreamPlugin{},
		),
	)
})

type fakeUpstreamPlugin struct{}

// Name returns a unique identifier for a plugin
func (f *fakeUpstreamPlugin) Name() string                   { return "" }
func (f *fakeUpstreamPlugin) Init(params plugins.InitParams) {}
func (f *fakeUpstreamPlugin) UpstreamHttpFilters(params plugins.Params, listener *v1.HttpListener) ([]plugins.StagedUpstreamHttpFilter, error) {
	return []plugins.StagedUpstreamHttpFilter{
		{
			Filter: &envoy_http_connection_manager_v3.HttpFilter{
				Name: "fake-upstream-filter",
			},
			Stage: plugins.FilterStage[plugins.WellKnownUpstreamHTTPFilterStage]{
				RelativeTo: plugins.TransformationStage,
				Weight:     0,
			},
		},
	}, nil
}
