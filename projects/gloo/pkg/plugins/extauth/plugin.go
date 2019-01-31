package extauth

import (
	"fmt"

	"github.com/pkg/errors"
	"github.com/solo-io/solo-kit/pkg/api/v1/resources/core"
	"github.com/solo-io/solo-projects/projects/gloo/pkg/api/v1/plugins/extauth"

	envoycore "github.com/envoyproxy/go-control-plane/envoy/api/v2/core"

	envoyroute "github.com/envoyproxy/go-control-plane/envoy/api/v2/route"
	envoyauth "github.com/envoyproxy/go-control-plane/envoy/config/filter/http/ext_authz/v2"
	"github.com/envoyproxy/go-control-plane/pkg/util"

	envoyhttp "github.com/envoyproxy/go-control-plane/envoy/config/filter/network/http_connection_manager/v2"
	"github.com/gogo/protobuf/types"
	"github.com/solo-io/solo-kit/pkg/utils/protoutils"

	v1 "github.com/solo-io/gloo/projects/gloo/pkg/api/v1"
	"github.com/solo-io/gloo/projects/gloo/pkg/plugins"
	"github.com/solo-io/gloo/projects/gloo/pkg/plugins/utils"
	"github.com/solo-io/gloo/projects/gloo/pkg/translator"
)

//go:generate protoc -I$GOPATH/src/github.com/lyft/protoc-gen-validate -I. -I$GOPATH/src/github.com/gogo/protobuf/protobuf --gogo_out=Mgoogle/protobuf/struct.proto=github.com/gogo/protobuf/types,Mgoogle/protobuf/duration.proto=github.com/gogo/protobuf/types:${GOPATH}/src/ sanitize.proto

const (
	ExtensionName         = "extauth"
	ContextExtensionVhost = "virtual_host"
)

const (
	SanitizeFilterName  = "io.solo.filters.http.sanitize"
	sanitizeFilterStage = plugins.PreInAuth
	ExtAuthFilterName   = "envoy.ext_authz"
	// rate limiting should happen after auth
	filterStage = plugins.InAuth
)

type Plugin struct {
	upstreamRef *core.ResourceRef
}

var _ plugins.Plugin = new(Plugin)

func NewPlugin() *Plugin {
	return &Plugin{}
}

type tmpPluginContainer struct {
	params plugins.InitParams
}

func (t *tmpPluginContainer) GetExtensions() *v1.Extensions {
	return t.params.ExtensionsSettings
}

func (p *Plugin) Init(params plugins.InitParams) error {

	var settings extauth.Settings
	p.upstreamRef = nil
	err := utils.UnmarshalExtension(&tmpPluginContainer{params}, ExtensionName, &settings)
	if err != nil {
		p.upstreamRef = nil
	}

	p.upstreamRef = settings.ExtauthzServerRef

	return nil
}

func (p *Plugin) ProcessRoute(params plugins.Params, in *v1.Route, out *envoyroute.Route) error {
	var extauth extauth.RouteExtension
	err := utils.UnmarshalExtension(in.RoutePlugins, ExtensionName, &extauth)
	if err != nil {
		if err == utils.NotFoundError {
			return nil
		}
		return errors.Wrapf(err, "Error converting proto any to extauth plugin")
	}

	if extauth.Disable {
		return markRouteNoAuth(out)
	}
	return nil
}

func (p *Plugin) ProcessVirtualHost(params plugins.Params, in *v1.VirtualHost, out *envoyroute.VirtualHost) error {
	var extauth extauth.VhostExtension
	err := utils.UnmarshalExtension(in.VirtualHostPlugins, ExtensionName, &extauth)
	if err != nil {
		if err == utils.NotFoundError {

			return markVhostNoAuth(out)
		}
		return errors.Wrapf(err, "Error converting proto any to extauth plugin")
	}

	if p.upstreamRef == nil {
		return fmt.Errorf("no ext auth server configured")
	}

	markName(out)

	_, err = TranslateUserConfigToExtAuthServerConfig(out.Name, params.Snapshot, extauth)
	if err != nil {
		return err
	}

	return nil
}

func TranslateUserConfigToExtAuthServerConfig(name string, snap *v1.ApiSnapshot, vhostextauth extauth.VhostExtension) (*extauth.ExtAuthConfig, error) {
	extauthConfig := &extauth.ExtAuthConfig{
		Vhost: name,
	}
	switch config := vhostextauth.AuthConfig.(type) {
	case *extauth.VhostExtension_BasicAuth:
		extauthConfig.AuthConfig = &extauth.ExtAuthConfig_BasicAuth{
			BasicAuth: config.BasicAuth,
		}
	case *extauth.VhostExtension_Oauth:
		secret, err := snap.Secrets.List().Find(config.Oauth.ClientSecretRef.Namespace, config.Oauth.ClientSecretRef.Name)
		if err != nil {
			return nil, err
		}

		var clientSecret extauth.OauthSecret
		err = utils.ExtensionToProto(secret.GetExtension(), ExtensionName, &clientSecret)
		if err != nil {
			return nil, err
		}

		extauthConfig.AuthConfig = &extauth.ExtAuthConfig_Oauth{
			Oauth: &extauth.ExtAuthConfig_OAuthConfig{
				AppUrl:       config.Oauth.AppUrl,
				ClientId:     config.Oauth.ClientId,
				ClientSecret: clientSecret.ClientSecret,
				IssuerUrl:    config.Oauth.IssuerUrl,
				CallbackPath: config.Oauth.CallbackPath,
			},
		}
	default:
		return nil, fmt.Errorf("unknown ext auth configuration")

	}

	return extauthConfig, nil
}

func markName(out *envoyroute.VirtualHost) error {
	config := &envoyauth.ExtAuthzPerRoute{
		Override: &envoyauth.ExtAuthzPerRoute_CheckSettings{
			CheckSettings: &envoyauth.CheckSettings{
				ContextExtensions: map[string]string{
					ContextExtensionVhost: out.Name,
				},
			},
		},
	}
	if out.PerFilterConfig == nil {
		out.PerFilterConfig = make(map[string]*types.Struct)
	}
	return setPerRouteConfig(out, config)
}

func markVhostNoAuth(out *envoyroute.VirtualHost) error {
	if out.PerFilterConfig == nil {
		out.PerFilterConfig = make(map[string]*types.Struct)
	}
	return markNoAuth(out)
}

func markRouteNoAuth(out *envoyroute.Route) error {
	if out.PerFilterConfig == nil {
		out.PerFilterConfig = make(map[string]*types.Struct)
	}
	return markNoAuth(out)
}

func markNoAuth(out perFilterConfigable) error {
	config := &envoyauth.ExtAuthzPerRoute{
		Override: &envoyauth.ExtAuthzPerRoute_Disabled{
			Disabled: true,
		},
	}
	return setPerRouteConfig(out, config)
}

type perFilterConfigable interface {
	GetPerFilterConfig() map[string]*types.Struct
}

func setPerRouteConfig(out perFilterConfigable, config *envoyauth.ExtAuthzPerRoute) error {
	configStruct, err := util.MessageToStruct(config)
	if err != nil {
		return err
	}
	out.GetPerFilterConfig()[ExtAuthFilterName] = configStruct
	return nil
}

func (p *Plugin) HttpFilters(params plugins.Params, listener *v1.HttpListener) ([]plugins.StagedHttpFilter, error) {
	// add sanitize filter here
	sanitizeConf, err := protoutils.MarshalStruct(&Sanitize{
		HeadersToRemove: []string{"TODO"},
	})
	if err != nil {
		return nil, err
	}
	filters := []plugins.StagedHttpFilter{
		{
			HttpFilter: &envoyhttp.HttpFilter{Name: SanitizeFilterName,
				ConfigType: &envoyhttp.HttpFilter_Config{Config: sanitizeConf}},
			Stage: sanitizeFilterStage,
		},
	}

	// always sanitize headers.
	if p.upstreamRef == nil {
		return filters, nil
	}
	conf, err := protoutils.MarshalStruct(p.generateEnvoyConfigForFilter())
	if err != nil {
		return nil, err
	}
	filters = append(filters, plugins.StagedHttpFilter{
		HttpFilter: &envoyhttp.HttpFilter{Name: ExtAuthFilterName,
			ConfigType: &envoyhttp.HttpFilter_Config{Config: conf}},
		Stage: filterStage,
	})
	return filters, nil
}

func (p *Plugin) generateEnvoyConfigForFilter() *envoyauth.ExtAuthz {
	var svc *envoycore.GrpcService
	svc = &envoycore.GrpcService{TargetSpecifier: &envoycore.GrpcService_EnvoyGrpc_{
		EnvoyGrpc: &envoycore.GrpcService_EnvoyGrpc{
			ClusterName: translator.UpstreamToClusterName(*p.upstreamRef),
		},
	}}

	return &envoyauth.ExtAuthz{
		Services: &envoyauth.ExtAuthz_GrpcService{
			GrpcService: svc,
		},
	}
}
