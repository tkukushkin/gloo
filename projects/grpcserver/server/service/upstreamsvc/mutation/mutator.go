package mutation

import (
	"context"

	"github.com/solo-io/solo-projects/projects/grpcserver/server/internal/client"

	gloov1 "github.com/solo-io/gloo/projects/gloo/pkg/api/v1"
	"github.com/solo-io/solo-kit/pkg/api/v1/clients"
	"github.com/solo-io/solo-kit/pkg/api/v1/resources/core"
)

type Mutation func(upstream *gloov1.Upstream) error

//go:generate mockgen -destination mocks/mutator_mock.go -package mocks github.com/solo-io/solo-projects/projects/grpcserver/server/service/upstreamsvc/mutation Mutator

//TODO: (Graham) We don't really need the whole mutator abstraction with the new gloov1.Upstream input field- should remove this when we clean up the old fields
type Mutator interface {
	// Deprecated
	Create(ctx context.Context, ref *core.ResourceRef, f Mutation) (*gloov1.Upstream, error)
	// Deprecated
	Update(ctx context.Context, ref *core.ResourceRef, f Mutation) (*gloov1.Upstream, error)

	CreateUpstream(ctx context.Context, upstream *gloov1.Upstream) (*gloov1.Upstream, error)
	UpdateUpstream(ctx context.Context, upstream *gloov1.Upstream) (*gloov1.Upstream, error)
}

type mutator struct {
	clientCache client.ClientCache
}

var _ Mutator = &mutator{}

func NewMutator(clientCache client.ClientCache) Mutator {
	return &mutator{
		clientCache: clientCache,
	}
}

func (m *mutator) Create(ctx context.Context, ref *core.ResourceRef, f Mutation) (*gloov1.Upstream, error) {
	upstream := &gloov1.Upstream{
		Metadata: core.Metadata{
			Namespace: ref.GetNamespace(),
			Name:      ref.GetName(),
		},
	}
	return m.mutateAndWrite(ctx, upstream, f, false)
}

func (m *mutator) CreateUpstream(ctx context.Context, upstream *gloov1.Upstream) (*gloov1.Upstream, error) {
	return m.write(ctx, upstream, false)
}

func (m *mutator) UpdateUpstream(ctx context.Context, upstream *gloov1.Upstream) (*gloov1.Upstream, error) {
	return m.write(ctx, upstream, true)
}

func (m *mutator) Update(ctx context.Context, ref *core.ResourceRef, f Mutation) (*gloov1.Upstream, error) {
	virtualService, err := m.clientCache.GetUpstreamClient().Read(ref.GetNamespace(), ref.GetName(), clients.ReadOpts{Ctx: ctx})
	if err != nil {
		return nil, err
	}
	return m.mutateAndWrite(ctx, virtualService, f, true)
}

func (m *mutator) mutateAndWrite(ctx context.Context, upstream *gloov1.Upstream, f Mutation, overwrite bool) (*gloov1.Upstream, error) {
	if err := f(upstream); err != nil {
		return nil, err
	}
	return m.write(ctx, upstream, overwrite)
}

func (m *mutator) write(ctx context.Context, upstream *gloov1.Upstream, overwrite bool) (*gloov1.Upstream, error) {
	// TODO why are we resetting its status before writing it?
	upstream.Status = core.Status{}

	return m.clientCache.GetUpstreamClient().Write(upstream, clients.WriteOpts{Ctx: ctx, OverwriteExisting: overwrite})
}
