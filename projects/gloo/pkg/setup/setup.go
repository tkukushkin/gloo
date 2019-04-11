package setup

import (
	"context"
	"time"

	extauthExt "github.com/solo-io/solo-projects/projects/gloo/pkg/syncer/extauth"
	ratelimitExt "github.com/solo-io/solo-projects/projects/gloo/pkg/syncer/ratelimit"

	"github.com/solo-io/gloo/pkg/utils/setuputils"
	"github.com/solo-io/gloo/projects/gloo/pkg/plugins"
	"github.com/solo-io/gloo/projects/gloo/pkg/syncer"
	check "github.com/solo-io/go-checkpoint"
	"github.com/solo-io/solo-projects/pkg/version"
	nackdetector "github.com/solo-io/solo-projects/projects/gloo/pkg/nack_detector"
	"github.com/solo-io/solo-projects/projects/gloo/pkg/plugins/extauth"
	"github.com/solo-io/solo-projects/projects/gloo/pkg/plugins/ratelimit"
)

func Main() error {
	start := time.Now()
	check.CallCheck("gloo-ee", version.Version, start)
	return setuputils.Main(setuputils.SetupOpts{
		SetupFunc:     syncer.NewSetupFuncWithExtensions(GetGlooEeExtensions()),
		ExitOnError:   true,
		LoggingPrefix: "gloo-ee",
	})
}

func GetGlooEeExtensions() syncer.Extensions {
	ctx := context.Background()
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
		},
	}
}
