package main

import (
	"context"
	"os"

	"github.com/solo-io/go-utils/contextutils"
	client "github.com/solo-io/skv2/pkg/multicluster"
	"github.com/solo-io/skv2/pkg/multicluster/watch"
	enterprisev1 "github.com/solo-io/solo-apis/pkg/api/enterprise.gloo.solo.io/v1"
	gatewayv1 "github.com/solo-io/solo-apis/pkg/api/gateway.solo.io/v1"
	gloov1 "github.com/solo-io/solo-apis/pkg/api/gloo.solo.io/v1"
	ratelimitv1alpha1 "github.com/solo-io/solo-apis/pkg/api/ratelimit.solo.io/v1alpha1"
	"github.com/solo-io/solo-projects/pkg/license"
	"github.com/solo-io/solo-projects/projects/gloo-fed/internal/settings"
	fedenterprisev1 "github.com/solo-io/solo-projects/projects/gloo-fed/pkg/api/fed.enterprise.gloo.solo.io/v1"
	enterprisefed "github.com/solo-io/solo-projects/projects/gloo-fed/pkg/api/fed.enterprise.gloo.solo.io/v1/federation"
	fedgatewayv1 "github.com/solo-io/solo-projects/projects/gloo-fed/pkg/api/fed.gateway.solo.io/v1"
	gatewayfed "github.com/solo-io/solo-projects/projects/gloo-fed/pkg/api/fed.gateway.solo.io/v1/federation"
	fedgloov1 "github.com/solo-io/solo-projects/projects/gloo-fed/pkg/api/fed.gloo.solo.io/v1"
	gloofed "github.com/solo-io/solo-projects/projects/gloo-fed/pkg/api/fed.gloo.solo.io/v1/federation"
	fedratelimitv1alpha1 "github.com/solo-io/solo-projects/projects/gloo-fed/pkg/api/fed.ratelimit.solo.io/v1alpha1"
	ratelimitfed "github.com/solo-io/solo-projects/projects/gloo-fed/pkg/api/fed.ratelimit.solo.io/v1alpha1/federation"
	fed_bootstrap "github.com/solo-io/solo-projects/projects/gloo-fed/pkg/bootstrap"
	"github.com/solo-io/solo-projects/projects/gloo-fed/pkg/discovery"
	"github.com/solo-io/solo-projects/projects/gloo-fed/pkg/federation/placement"
	"github.com/solo-io/solo-projects/projects/gloo-fed/pkg/fields"
	"github.com/solo-io/solo-projects/projects/gloo-fed/pkg/multicluster"
	"github.com/solo-io/solo-projects/projects/gloo-fed/pkg/routing/failover"
	"github.com/solo-io/solo-projects/projects/gloo/pkg/bootstrap"
	"go.uber.org/zap"
	_ "k8s.io/client-go/plugin/pkg/client/auth"
	"sigs.k8s.io/controller-runtime/pkg/manager"
)

func main() {
	rootCtx := bootstrap.CreateRootContext(context.Background(), "gloo-fed")
	logger := contextutils.LoggerFrom(rootCtx)

	cfg := settings.New()

	licensedFeatureProvider := license.NewLicensedFeatureProvider()
	licensedFeatureProvider.ValidateAndSetLicense(os.Getenv(license.EnvName))

	federationFeatureState := licensedFeatureProvider.GetStateForLicensedFeature(license.Enterprise)
	if !federationFeatureState.Enabled {
		contextutils.LoggerFrom(rootCtx).Fatalw("Federation is disabled", zap.String("reason", federationFeatureState.Reason))
	}

	mgr := fed_bootstrap.MustLocalManager(rootCtx)

	if err := fields.AddGlooInstanceIndexer(rootCtx, mgr); err != nil {
		logger.Fatalw("A fatal error occurred while adding cluster indexer to GlooInstance", zap.Error(err))
	}

	clusterWatcher := watch.NewClusterWatcher(rootCtx, manager.Options{
		Scheme: fed_bootstrap.MustRemoteScheme(rootCtx),
	})
	clusterSet := multicluster.NewClusterSet()
	clusterWatcher.RegisterClusterHandler(clusterSet)

	fedGlooClusterHandler := gloofed.NewClusterHandler(rootCtx, fedgloov1.NewClientset(mgr.GetClient()), placement.NewFactory(cfg.PodName))
	clusterWatcher.RegisterClusterHandler(fedGlooClusterHandler)

	fedGatewayClusterHandler := gatewayfed.NewClusterHandler(rootCtx, fedgatewayv1.NewClientset(mgr.GetClient()), placement.NewFactory(cfg.PodName))
	clusterWatcher.RegisterClusterHandler(fedGatewayClusterHandler)

	fedEnterpriseGlooClusterHandler := enterprisefed.NewClusterHandler(rootCtx, fedenterprisev1.NewClientset(mgr.GetClient()), placement.NewFactory(cfg.PodName))
	clusterWatcher.RegisterClusterHandler(fedEnterpriseGlooClusterHandler)

	fedRatelimitClusterHandler := ratelimitfed.NewClusterHandler(rootCtx, fedratelimitv1alpha1.NewClientset(mgr.GetClient()), placement.NewFactory(cfg.PodName))
	clusterWatcher.RegisterClusterHandler(fedRatelimitClusterHandler)

	mcClient := client.NewClient(clusterWatcher)
	discovery.InitializeDiscovery(rootCtx, cfg, mgr, mcClient, clusterWatcher)

	if err := failover.InitializeFailover(rootCtx, mgr, mcClient, clusterWatcher); err != nil {
		logger.Fatalw("A fatal error occurred while setting up failover reconciler", zap.Error(err))
	}

	if err := gatewayfed.Initialize(rootCtx, cfg.PodName, mgr, gatewayv1.NewMulticlusterClientset(mcClient), clusterSet); err != nil {
		logger.Fatalw("A fatal error occurred while setting up gateway resource federation", zap.Error(err))
	}

	if err := gloofed.Initialize(rootCtx, cfg.PodName, mgr, gloov1.NewMulticlusterClientset(mcClient), clusterSet); err != nil {
		logger.Fatalw("A fatal error occurred while setting up gloo resource federation", zap.Error(err))
	}

	if err := enterprisefed.Initialize(rootCtx, cfg.PodName, mgr, enterprisev1.NewMulticlusterClientset(mcClient), clusterSet); err != nil {
		logger.Fatalw("A fatal error occurred while setting up gloo enterprise resource federation", zap.Error(err))
	}

	if err := ratelimitfed.Initialize(rootCtx, cfg.PodName, mgr, ratelimitv1alpha1.NewMulticlusterClientset(mcClient), clusterSet); err != nil {
		logger.Fatalw("A fatal error occurred while setting up ratelimit resource federation", zap.Error(err))
	}

	if err := clusterWatcher.Run(mgr); err != nil {
		logger.Fatalw("A fatal error occurred while starting the cluster watcher", zap.Error(err))
	}

	if err := mgr.Start(rootCtx); err != nil {
		logger.Errorw("An error occurred", zap.Error(err))
	}
	logger.Infow("Shutting down, root context cancelled.")
}
