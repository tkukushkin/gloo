package setup

import (
	"context"
	"fmt"
	"net/http"

	"github.com/solo-io/solo-kit/pkg/api/v1/clients"
	"github.com/solo-io/solo-kit/pkg/api/v1/clients/factory"
	"github.com/solo-io/solo-kit/pkg/api/v1/reporter"
	"github.com/solo-io/solo-kit/pkg/errors"
	"github.com/solo-io/solo-kit/pkg/namespacing"
	"github.com/solo-io/solo-kit/pkg/namespacing/static"
	"github.com/solo-io/solo-kit/pkg/utils/contextutils"
	"github.com/solo-io/solo-kit/pkg/utils/errutils"
	"github.com/solo-io/solo-kit/pkg/utils/kubeutils"
	gloov1 "github.com/solo-io/solo-kit/projects/gloo/pkg/api/v1"
	"github.com/solo-io/solo-kit/projects/gloo/pkg/defaults"
	"github.com/solo-io/solo-kit/projects/sqoop/pkg/api/v1"
	"github.com/solo-io/solo-kit/projects/sqoop/pkg/engine"
	"github.com/solo-io/solo-kit/projects/sqoop/pkg/engine/router"
	"github.com/solo-io/solo-kit/projects/sqoop/pkg/syncer"
	"github.com/solo-io/solo-kit/projects/sqoop/pkg/todo"
	"github.com/solo-io/solo-kit/samples"
)

type Opts struct {
	WriteNamespace string
	Schemas        factory.ResourceClientFactory
	ResolverMaps   factory.ResourceClientFactory
	Proxies        factory.ResourceClientFactory
	WatchOpts      clients.WatchOpts
	DevMode        bool
	SampleData     bool

	Namespacer namespacing.Namespacer

	SidecarAddr string

	// TODO(ilackarms): remove Upstreams here if not needed, right now only used for sample data
	Upstreams factory.ResourceClientFactory
}

func DefaultKubernetesConstructOpts() (Opts, error) {
	cfg, err := kubeutils.GetConfig("", "")
	if err != nil {
		return Opts{}, err
	}
	// clientset, err := kubernetes.NewForConfig(cfg)
	// if err != nil {
	// 	return Opts{}, err
	// }
	ctx := contextutils.WithLogger(context.Background(), "gateway")
	return Opts{
		WriteNamespace: defaults.GlooSystem,
		Schemas: &factory.KubeResourceClientFactory{
			Crd: v1.SchemaCrd,
			Cfg: cfg,
		},
		ResolverMaps: &factory.KubeResourceClientFactory{
			Crd: v1.ResolverMapCrd,
			Cfg: cfg,
		},
		Proxies: &factory.KubeResourceClientFactory{
			Crd: gloov1.ProxyCrd,
			Cfg: cfg,
		},
		Upstreams: &factory.KubeResourceClientFactory{
			Crd: gloov1.UpstreamCrd,
			Cfg: cfg,
		},
		Namespacer: static.NewNamespacer([]string{"default", defaults.GlooSystem}),
		WatchOpts: clients.WatchOpts{
			Ctx:         ctx,
			RefreshRate: defaults.RefreshRate,
		},
		DevMode:     false,
		SidecarAddr: fmt.Sprintf("%v:%v", "127.0.0.1", TODO.SqoopSidecarBindPort),
	}, nil
}

func Setup(opts Opts) error {
	// TODO: Ilackarms: move this to multi-eventloop
	namespaces, errs, err := opts.Namespacer.Namespaces(opts.WatchOpts)
	if err != nil {
		return err
	}
	for {
		select {
		case err := <-errs:
			return err
		case watchNamespaces := <-namespaces:
			err := setupForNamespaces(watchNamespaces, opts)
			if err != nil {
				return err
			}
		}
	}
}

func setupForNamespaces(watchNamespaces []string, opts Opts) error {
	opts.WatchOpts = opts.WatchOpts.WithDefaults()
	opts.WatchOpts.Ctx = contextutils.WithLogger(opts.WatchOpts.Ctx, "sqoop")

	// TODO(ilackarms): this piece (initalizing clients) should really be generated by solo-kit
	proxyClient, err := gloov1.NewProxyClient(opts.Proxies)
	if err != nil {
		return err
	}
	if err := proxyClient.Register(); err != nil {
		return err
	}
	proxyReconciler := gloov1.NewProxyReconciler(proxyClient)

	schemaClient, err := v1.NewSchemaClient(opts.Schemas)
	if err != nil {
		return err
	}
	if err := schemaClient.Register(); err != nil {
		return err
	}

	resolverMapClient, err := v1.NewResolverMapClient(opts.ResolverMaps)
	if err != nil {
		return err
	}
	if err := resolverMapClient.Register(); err != nil {
		return err
	}

	if opts.SampleData {
		if err := addSampleData(opts, schemaClient, resolverMapClient); err != nil {
			return err
		}
	}

	// TODO(ilackarms): Default Resource stuff. (might be a concern for solo-kit)
	// if _, err := gatewayClient.Write(defaults.DefaultGateway(opts.WriteNamespace), clients.WriteOpts{
	// 	Ctx: opts.WatchOpts.Ctx,
	// }); err != nil && !errors.IsExist(err) {
	// 	return err
	// }

	emitter := v1.NewApiEmitter(resolverMapClient, schemaClient)

	rpt := reporter.NewReporter("sqoop", resolverMapClient.BaseClient(), schemaClient.BaseClient())
	writeErrs := make(chan error)
	/*
		proxyReconciler:   proxyReconciler,
		engine:            engine,
		router:            router,
	*/
	eng := engine.NewEngine(opts.SidecarAddr)

	rtr := router.NewRouter()

	sync := syncer.NewGraphQLSyncer(opts.WriteNamespace, rpt, writeErrs, proxyReconciler, resolverMapClient, eng, rtr)

	go func() {
		contextutils.LoggerFrom(opts.WatchOpts.Ctx).Fatalf("failed starting sqoop server: %v",
			http.ListenAndServe(fmt.Sprintf(":%v", TODO.SqoopServerBindPort), rtr))
	}()

	eventLoop := v1.NewApiEventLoop(emitter, sync)
	eventLoopErrs, err := eventLoop.Run(watchNamespaces, opts.WatchOpts)
	if err != nil {
		return err
	}
	go errutils.AggregateErrs(opts.WatchOpts.Ctx, writeErrs, eventLoopErrs, "event_loop")

	logger := contextutils.LoggerFrom(opts.WatchOpts.Ctx)

	for {
		select {
		case err := <-writeErrs:
			logger.Errorf("error: %v", err)
		case <-opts.WatchOpts.Ctx.Done():
			close(writeErrs)
			return nil
		}
	}
}

func addSampleData(opts Opts, schemaClient v1.SchemaClient, resolverMapClient v1.ResolverMapClient) error {
	upstreamClient, err := gloov1.NewUpstreamClient(opts.Upstreams)
	if err != nil {
		return err
	}
	schemas, resolverMaps, upstreams := samples.Schemas(), samples.ResolverMaps(), samples.Upstreams()
	for _, item := range upstreams {
		if _, err := upstreamClient.Write(item, clients.WriteOpts{}); err != nil && !errors.IsExist(err) {
			return err
		}
	}
	for _, item := range schemas {
		if _, err := schemaClient.Write(item, clients.WriteOpts{}); err != nil && !errors.IsExist(err) {
			return err
		}
	}
	for _, item := range resolverMaps {
		if _, err := resolverMapClient.Write(item, clients.WriteOpts{}); err != nil && !errors.IsExist(err) {
			return err
		}
	}
	return nil
}
