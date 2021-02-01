package failover

import (
	"context"
	"fmt"
	"net"

	envoy_config_cluster_v3 "github.com/envoyproxy/go-control-plane/envoy/config/cluster/v3"
	envoy_config_core_v3 "github.com/envoyproxy/go-control-plane/envoy/config/core/v3"
	envoy_config_endpoint_v3 "github.com/envoyproxy/go-control-plane/envoy/config/endpoint/v3"
	"github.com/envoyproxy/go-control-plane/pkg/wellknown"
	structpb "github.com/golang/protobuf/ptypes/struct"
	"github.com/golang/protobuf/ptypes/wrappers"
	"github.com/rotisserie/eris"
	gloov1 "github.com/solo-io/gloo/projects/gloo/pkg/api/v1"
	"github.com/solo-io/gloo/projects/gloo/pkg/plugins"
	"github.com/solo-io/gloo/projects/gloo/pkg/plugins/consul"
	"github.com/solo-io/gloo/projects/gloo/pkg/plugins/failover"
	"github.com/solo-io/gloo/projects/gloo/pkg/translator"
	"github.com/solo-io/gloo/projects/gloo/pkg/utils"
	"github.com/solo-io/gloo/projects/gloo/pkg/xds"
	"github.com/solo-io/solo-kit/pkg/api/v1/resources/core"
)

//go:generate mockgen -destination mocks/mock_utils.go github.com/solo-io/gloo/projects/gloo/pkg/utils SslConfigTranslator

const (
	TransportSocketMatchKey = "envoy.transport_socket_match"
)

var (
	NoHealthCheckError = eris.New("No health checks or outlier detection present, " +
		"at least one is required to enable failover")

	NoIpAddrError = func(dnsName string) error {
		return eris.Errorf("DNS service returned an address that couldn't be parsed as an IP (%s)", dnsName)
	}

	WeightedDnsError = eris.New("Weights cannot be supplied alongside a DNS host in a prioritized locality")

	_ plugins.Plugin         = new(failoverPluginImpl)
	_ plugins.UpstreamPlugin = new(failoverPluginImpl)
	_ plugins.EndpointPlugin = new(failoverPluginImpl)
	_ plugins.Upgradable     = new(failoverPluginImpl)
)

func NewFailoverPlugin(translator utils.SslConfigTranslator, dnsResolver consul.DnsResolver) plugins.Plugin {
	return &failoverPluginImpl{
		sslConfigTranslator: translator,
		endpoints:           map[string][]*envoy_config_endpoint_v3.LocalityLbEndpoints{},
		dnsResolver:         dnsResolver,
	}
}

type failoverPluginImpl struct {
	sslConfigTranslator utils.SslConfigTranslator
	endpoints           map[string][]*envoy_config_endpoint_v3.LocalityLbEndpoints
	dnsResolver         consul.DnsResolver
	settings            *gloov1.Settings
}

func (f *failoverPluginImpl) Init(params plugins.InitParams) error {
	f.settings = params.Settings
	return nil
}

func (p *failoverPluginImpl) PluginName() string {
	return failover.ExtensionName
}

func (p *failoverPluginImpl) IsUpgrade() bool {
	return true
}

func (f *failoverPluginImpl) ProcessUpstream(
	params plugins.Params,
	in *gloov1.Upstream,
	out *envoy_config_cluster_v3.Cluster,
) error {
	failoverCfg := in.GetFailover()
	if failoverCfg == nil {
		return nil
	}

	// If no health checks or outlier detection have been set on the Upstream,
	// throw an error as this will cause failover to fail in envoy.
	if len(in.GetHealthChecks()) == 0 && in.GetOutlierDetection() == nil {
		return NoHealthCheckError
	}

	// If the cluster type is static, then we should not resolve DNS
	endpoints, matches, err := f.buildLocalityLBEndpoints(
		params,
		failoverCfg,
		out.GetType() == envoy_config_cluster_v3.Cluster_STRICT_DNS,
	)
	if err != nil {
		return err
	}

	if out.GetType() == envoy_config_cluster_v3.Cluster_EDS {
		stringRef := translator.UpstreamToClusterName(&core.ResourceRef{
			Name:      in.GetMetadata().GetName(),
			Namespace: in.GetMetadata().GetNamespace(),
		})
		f.endpoints[stringRef] = endpoints
		// set cluster to EDS; locality weighted load-balancing only works via EDS https://www.envoyproxy.io/docs/envoy/latest/intro/arch_overview/upstream/load_balancing/locality_weight
		xds.SetEdsOnCluster(out, f.settings)
	} else {
		// Otherwise add the endpoints directly to the LoadAssignment of the Cluster
		out.LoadAssignment.Endpoints = append(out.LoadAssignment.Endpoints, endpoints...)
	}
	// append all of the upstream ssl transport socket matches to the existing
	out.TransportSocketMatches = append(out.TransportSocketMatches, matches...)

	return nil
}

func (f *failoverPluginImpl) ProcessEndpoints(
	_ plugins.Params,
	in *gloov1.Upstream,
	out *envoy_config_endpoint_v3.ClusterLoadAssignment,
) error {
	failoverCfg := in.GetFailover()
	if failoverCfg == nil {
		return nil
	}

	// If this is an eds cluster save the endpoints to the EDS `ClusterLoadAssignment`
	if len(f.endpoints) > 0 {
		stringRef := translator.UpstreamToClusterName(&core.ResourceRef{
			Name:      in.GetMetadata().GetName(),
			Namespace: in.GetMetadata().GetNamespace(),
		})
		out.Endpoints = append(out.Endpoints, f.endpoints[stringRef]...)
	}

	return nil
}

func (f *failoverPluginImpl) buildLocalityLBEndpoints(
	params plugins.Params,
	failoverCfg *gloov1.Failover,
	strictDns bool,
) ([]*envoy_config_endpoint_v3.LocalityLbEndpoints, []*envoy_config_cluster_v3.Cluster_TransportSocketMatch, error) {
	var transportSocketMatches []*envoy_config_cluster_v3.Cluster_TransportSocketMatch
	var localityLbEndpoints []*envoy_config_endpoint_v3.LocalityLbEndpoints
	for idx, priority := range failoverCfg.GetPrioritizedLocalities() {
		for _, localityEndpoints := range priority.GetLocalityEndpoints() {
			if err := ValidateGlooLocalityLbEndpoint(localityEndpoints); err != nil {
				return nil, nil, err
			}
			// Use index+1 for the priority because the priority of the primary endpoints is automatically set to 0,
			// and each corresponding failover endpoint has 1 greater
			envoyEndpoints, socketMatches, err := GlooLocalityLbEndpointToEnvoyLocalityLbEndpoint(
				params.Ctx,
				localityEndpoints,
				uint32(idx+1),
				f.sslConfigTranslator,
				params.Snapshot.Secrets,
				f.dnsResolver,
				strictDns,
			)
			if err != nil {
				return nil, nil, err
			}
			localityLbEndpoints = append(localityLbEndpoints, envoyEndpoints)
			transportSocketMatches = append(transportSocketMatches, socketMatches...)
		}
	}

	return localityLbEndpoints, transportSocketMatches, nil
}

/*
	Create a unique name based on the details available while creating `LbEndpoints`
	The priority comes from the index in the top most loop of the API.
	idx is derived from the index of the endpoint in the list of `LbEndpoint`s.
	These names are used for the `MetadataMatch` in the `Cluster_TransportSocketMatch`
	https://www.envoyproxy.io/docs/envoy/v1.14.1/api-v2/api/v2/cluster.proto#envoy-api-msg-cluster-transportsocketmatch
*/
func PrioritizedEndpointName(address string, port, priority uint32, idx int) string {
	return fmt.Sprintf("%s_%d_p%d_idx%d", address, port, priority, idx)
}

func GlooLocalityToEnvoyLocality(locality *gloov1.Locality) *envoy_config_core_v3.Locality {
	if locality == nil {
		return nil
	}
	return &envoy_config_core_v3.Locality{
		Region:  locality.GetRegion(),
		Zone:    locality.GetZone(),
		SubZone: locality.GetSubZone(),
	}
}

func ValidateGlooLocalityLbEndpoint(
	endpoints *gloov1.LocalityLbEndpoints,
) error {
	var weighted, hasDns bool

	for _, v := range endpoints.GetLbEndpoints() {
		addr := net.ParseIP(v.GetAddress())
		if addr == nil {
			hasDns = true
		}

		if v.GetLoadBalancingWeight() != nil {
			weighted = true
		}

		if weighted && hasDns {
			return WeightedDnsError
		}
	}
	return nil
}

func GlooLocalityLbEndpointToEnvoyLocalityLbEndpoint(
	ctx context.Context,
	endpoints *gloov1.LocalityLbEndpoints,
	priority uint32,
	translator utils.SslConfigTranslator,
	secrets []*gloov1.Secret,
	dnsResolver consul.DnsResolver,
	strictDns bool,
) (*envoy_config_endpoint_v3.LocalityLbEndpoints, []*envoy_config_cluster_v3.Cluster_TransportSocketMatch, error) {
	var lbEndpoints []*envoy_config_endpoint_v3.LbEndpoint
	var transportSocketMatches []*envoy_config_cluster_v3.Cluster_TransportSocketMatch
	// Generate an envoy `LbEndpoint` for each endpoint in the locality.
	for idx, v := range endpoints.GetLbEndpoints() {

		var resolvedIPLBEndpoints []*envoy_config_endpoint_v3.LbEndpoint
		addr := net.ParseIP(v.GetAddress())

		if addr != nil {
			resolvedIPLBEndpoints = append(resolvedIPLBEndpoints, buildLbEndpoint(
				addr.String(),
				v.GetPort(),
				v.GetLoadBalancingWeight(),
				addr.String(),
				v.GetHealthCheckConfig()),
			)
		} else {
			if strictDns {
				resolvedIPLBEndpoints = append(resolvedIPLBEndpoints, buildLbEndpoint(
					v.GetAddress(),
					v.GetPort(),
					v.GetLoadBalancingWeight(),
					v.GetAddress(),
					v.GetHealthCheckConfig()),
				)
			} else {
				// the address is not an IP, need to do a DnsLookup
				ips, err := dnsResolver.Resolve(ctx, v.GetAddress())
				if err != nil {
					return nil, nil, err
				}
				if len(ips) == 0 {
					return nil, nil, NoIpAddrError(v.GetAddress())
				}
				for i := range ips {
					resolvedIPLBEndpoints = append(resolvedIPLBEndpoints, buildLbEndpoint(
						ips[i].String(),
						v.GetPort(),
						nil,
						v.GetAddress(),
						v.GetHealthCheckConfig()),
					)
				}
			}
		}

		uniqueName := PrioritizedEndpointName(v.GetAddress(), v.GetPort(), priority, idx)
		// Create a unique metadata match for each endpoint to support unique Transport Sockets in the Cluster
		metadataMatch := &structpb.Struct{
			Fields: map[string]*structpb.Value{
				uniqueName: {
					Kind: &structpb.Value_BoolValue{
						BoolValue: true,
					},
				},
			},
		}

		if v.GetHealthCheckConfig() != nil {
			for i := range resolvedIPLBEndpoints {
				resolvedIPLBEndpoints[i].GetEndpoint().HealthCheckConfig = &envoy_config_endpoint_v3.Endpoint_HealthCheckConfig{
					PortValue: v.GetHealthCheckConfig().GetPortValue(),
					Hostname:  v.GetHealthCheckConfig().GetHostname(),
				}
			}
		}
		// If UpstreamSslConfig is set, resolve it.
		if v.GetUpstreamSslConfig() != nil {
			cfg, err := translator.ResolveUpstreamSslConfig(secrets, v.GetUpstreamSslConfig())
			if err != nil {
				return nil, nil, err
			}
			anyCfg, err := utils.MessageToAny(cfg)
			if err != nil {
				return nil, nil, err

			}
			transportSocketMatches = append(transportSocketMatches, &envoy_config_cluster_v3.Cluster_TransportSocketMatch{
				Name:  uniqueName,
				Match: metadataMatch,
				TransportSocket: &envoy_config_core_v3.TransportSocket{
					Name: wellknown.TransportSocketTls,
					ConfigType: &envoy_config_core_v3.TransportSocket_TypedConfig{
						TypedConfig: anyCfg,
					},
				},
			})
			// Set the match criteria for the transport socket match on the endpoint

			for i := range resolvedIPLBEndpoints {
				resolvedIPLBEndpoints[i].Metadata = &envoy_config_core_v3.Metadata{
					FilterMetadata: map[string]*structpb.Struct{
						TransportSocketMatchKey: metadataMatch,
					},
				}
			}
		}
		lbEndpoints = append(lbEndpoints, resolvedIPLBEndpoints...)
	}
	return &envoy_config_endpoint_v3.LocalityLbEndpoints{
		Locality:            GlooLocalityToEnvoyLocality(endpoints.GetLocality()),
		LbEndpoints:         lbEndpoints,
		LoadBalancingWeight: endpoints.GetLoadBalancingWeight(),
		Priority:            priority,
	}, transportSocketMatches, nil
}

func buildLbEndpoint(
	address string,
	port uint32,
	weight *wrappers.UInt32Value,
	hostname string,
	hcConfig *gloov1.LbEndpoint_HealthCheckConfig,
) *envoy_config_endpoint_v3.LbEndpoint {
	envoyHc := &envoy_config_endpoint_v3.Endpoint_HealthCheckConfig{
		Hostname: hostname,
	}
	if hcConfig != nil {
		envoyHc.Hostname = hcConfig.GetHostname()
		envoyHc.PortValue = hcConfig.GetPortValue()
	}

	return &envoy_config_endpoint_v3.LbEndpoint{
		HostIdentifier: &envoy_config_endpoint_v3.LbEndpoint_Endpoint{
			Endpoint: &envoy_config_endpoint_v3.Endpoint{
				Hostname:          hostname,
				HealthCheckConfig: envoyHc,
				Address: &envoy_config_core_v3.Address{
					Address: &envoy_config_core_v3.Address_SocketAddress{
						SocketAddress: &envoy_config_core_v3.SocketAddress{
							Address: address,
							PortSpecifier: &envoy_config_core_v3.SocketAddress_PortValue{
								PortValue: port,
							},
						},
					},
				},
			},
		},
		LoadBalancingWeight: weight,
	}
}
