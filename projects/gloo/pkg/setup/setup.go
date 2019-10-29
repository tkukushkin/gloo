package setup

import (
	"context"
	"os"

	"github.com/solo-io/gloo/pkg/utils/usage"
	"github.com/solo-io/gloo/projects/metrics/pkg/metricsservice"
	"github.com/solo-io/go-utils/contextutils"
	"github.com/solo-io/reporting-client/pkg/client"
	"go.uber.org/zap"

	"github.com/solo-io/solo-projects/projects/gloo/pkg/plugins/dlp"
	"github.com/solo-io/solo-projects/projects/gloo/pkg/plugins/waf"
	extauthExt "github.com/solo-io/solo-projects/projects/gloo/pkg/syncer/extauth"
	ratelimitExt "github.com/solo-io/solo-projects/projects/gloo/pkg/syncer/ratelimit"

	"github.com/solo-io/gloo/pkg/utils/setuputils"
	"github.com/solo-io/gloo/projects/gloo/pkg/plugins"
	"github.com/solo-io/gloo/projects/gloo/pkg/syncer"
	nackdetector "github.com/solo-io/solo-projects/projects/gloo/pkg/nack_detector"
	"github.com/solo-io/solo-projects/projects/gloo/pkg/plugins/extauth"
	"github.com/solo-io/solo-projects/projects/gloo/pkg/plugins/jwt"
	"github.com/solo-io/solo-projects/projects/gloo/pkg/plugins/ratelimit"
	"github.com/solo-io/solo-projects/projects/gloo/pkg/plugins/rbac"
)

const (
	licenseKey = "license"
)

func Main() error {
	enterpriseUsageReader, err := NewEnterpriseUsageReader()
	if err != nil {
		contextutils.LoggerFrom(context.Background()).Warnw("Could not create enterprise usage reporter", zap.Error(err))
	}

	cancellableCtx, _ := context.WithCancel(context.Background())

	return setuputils.Main(setuputils.SetupOpts{
		SetupFunc:     syncer.NewSetupFuncWithExtensions(GetGlooEeExtensions(cancellableCtx)),
		ExitOnError:   true,
		LoggingPrefix: "gloo-ee",
		UsageReporter: enterpriseUsageReader,
		CustomCtx:     cancellableCtx,
	})
}

func GetGlooEeExtensions(ctx context.Context) syncer.Extensions {
	return syncer.Extensions{
		XdsCallbacks: nackdetector.NewNackDetector(ctx, nackdetector.StateChangedCallback(nackdetector.NewStatsGen(ctx).Stat)),
		SyncerExtensions: []syncer.TranslatorSyncerExtensionFactory{
			ratelimitExt.NewTranslatorSyncerExtension,
			func(context.Context, syncer.TranslatorSyncerExtensionParams) (syncer.TranslatorSyncerExtension, error) {
				return extauthExt.NewTranslatorSyncerExtension(), nil
			},
		},
		PluginExtensions: []plugins.Plugin{
			ratelimit.NewPlugin(),
			extauth.NewPlugin(),
			rbac.NewPlugin(),
			jwt.NewPlugin(),
			waf.NewPlugin(),
			dlp.NewPlugin(),
		},
	}
}

type enterpriseUsageReader struct {
	defaultPayloadReader client.UsagePayloadReader
}

func (e *enterpriseUsageReader) GetPayload() (map[string]string, error) {
	defaultPayload, err := e.defaultPayloadReader.GetPayload()
	if err != nil {
		return nil, err
	}

	enterprisePayload := map[string]string{}

	defaultPayload[licenseKey] = os.Getenv("GLOO_LICENSE_KEY")

	return enterprisePayload, nil
}

func NewEnterpriseUsageReader() (client.UsagePayloadReader, error) {
	metricsStorage, err := metricsservice.NewDefaultConfigMapStorage(os.Getenv("POD_NAMESPACE"))
	if err != nil {
		return nil, err
	}

	defaultPayloadReader := usage.DefaultUsageReader{MetricsStorage: metricsStorage}

	return &enterpriseUsageReader{
		defaultPayloadReader: &defaultPayloadReader,
	}, nil
}

var _ client.UsagePayloadReader = &enterpriseUsageReader{}
