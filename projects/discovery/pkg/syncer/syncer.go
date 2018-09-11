package syncer

import (
	"context"

	"github.com/solo-io/solo-kit/pkg/api/v1/clients"
	"github.com/solo-io/solo-kit/pkg/api/v1/reporter"
	"github.com/solo-io/solo-kit/pkg/api/v1/resources/core"
	"github.com/solo-io/solo-kit/pkg/errors"
	"github.com/solo-io/solo-kit/pkg/utils/contextutils"
	"github.com/solo-io/solo-kit/projects/gloo/pkg/api/v1"
	"github.com/solo-io/solo-kit/projects/sqoop/pkg/engine/router"
	"github.com/solo-io/solo-kit/projects/sqoop/pkg/translator"
	"github.com/vektah/gqlgen/neelance/schema"
)

type Syncer struct {
	writeNamespace     string
	reporter           reporter.Reporter
	writeErrs          chan error
	upstreamClient     v1.UpstreamClient
	upstreamReconciler v1.UpstreamReconciler
}

func NewSyncer(writeNamespace string,
	reporter reporter.Reporter,
	writeErrs chan error,
	upstreampClient v1.UpstreamClient) v1.DiscoverySyncer {
	s := &Syncer{
		writeNamespace:     writeNamespace,
		reporter:           reporter,
		writeErrs:          writeErrs,
		upstreamClient:     upstreampClient,
		upstreamReconciler: v1.NewUpstreamReconciler(upstreampClient),
	}
	return s
}

func (s *Syncer) Sync(ctx context.Context, snap *v1.DiscoverySnapshot) error {
	ctx = contextutils.WithLogger(ctx, "syncer")

	logger := contextutils.LoggerFrom(ctx)
	logger.Infof("begin sync %v (%v upstreams)",
		snap.Hash(),
		len(snap.Upstreams),
	)
	defer logger.Infof("end sync %v", snap.Hash())
	logger.Debugf("%v", snap)

	resourceErrs := make(reporter.ResourceErrors)

	proxy := translator.Translate(s.writeNamespace, snap, resourceErrs)
	if err := s.reporter.WriteReports(ctx, resourceErrs); err != nil {
		return errors.Wrapf(err, "writing reports")
	}
	if err := resourceErrs.Validate(); err != nil {
		logger.Errorf("snapshot %v was rejected due to invalid config: %v", err)
		return nil
	}
	logger.Debugf("creating proxy %v", proxy.Metadata.Ref())
	if err := s.proxyReconciler.Reconcile(s.writeNamespace, v1.ProxyList{proxy}, nil, clients.ListOpts{}); err != nil {
		return err
	}

	var endpoints []*router.Endpoint
	var resolverMapsToGenerate v1.ResolverMapList
	var schemasToUpdate v1.SchemaList
	for _, schema := range snap.Schemas.List() {
		if schema.ResolverMap.Name == "" {
			newMeta := core.Metadata{
				Name:        schema.Metadata.Name,
				Namespace:   schema.Metadata.Namespace,
				Annotations: map[string]string{"created_for": schema.Metadata.Name},
			}
			parsedSchema, err := parseSchemaString(schema)
			if err != nil {
				resourceErrs.AddError(schema, errors.Wrapf(err, "failed to parse schema"))
				continue
			}

			rm := translator.GenerateResolverMapSkeleton(newMeta, parsedSchema)

			resolverMapsToGenerate = append(resolverMapsToGenerate, rm)
			schemasToUpdate = append(schemasToUpdate, schema)

			// nothing to do for this schema yet, need to receive some resolvers
			continue
		}
		resourceErrs.Accept(schema)

		resolverMap, err := snap.ResolverMaps.List().Find(schema.ResolverMap.Strings())
		if err != nil {
			resourceErrs.AddError(schema, errors.Wrapf(err, "finding resolvermap for schema"))
			continue
		}

		resourceErrs.Accept(resolverMap)

		endpoint, schemaErr, resolverErr := s.engine.CreateGraphqlEndpoint(schema, resolverMap)
		if schemaErr != nil {
			resourceErrs.AddError(schema, schemaErr)
		}
		if resolverErr != nil {
			resourceErrs.AddError(resolverMap, resolverErr)
		}
		if schemaErr != nil || resolverErr != nil {
			continue
		}
		endpoints = append(endpoints, endpoint)
	}
	s.router.UpdateEndpoints(endpoints)
	for _, rm := range resolverMapsToGenerate {
		if _, err := s.resolverMapClient.Write(rm, clients.WriteOpts{}); err != nil {
			return errors.Wrapf(err, "writing generated resolver maps to storage")
		}
	}

	// start propagating for new set of resources
	// TODO(ilackarms): reinstate propagator
	return nil // s.propagator.PropagateStatuses(snap, proxy, clients.WatchOpts{Ctx: ctx})

}

func parseSchemaString(sch *v1.Schema) (*schema.Schema, error) {
	parsedSchema := schema.New()
	return parsedSchema, parsedSchema.Parse(sch.InlineSchema)
}
