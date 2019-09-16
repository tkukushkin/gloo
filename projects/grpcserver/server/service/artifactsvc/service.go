package artifactsvc

import (
	"context"

	"github.com/solo-io/solo-projects/projects/grpcserver/server/internal/client"

	"github.com/solo-io/solo-projects/pkg/license"

	"github.com/solo-io/solo-projects/projects/grpcserver/server/service/svccodes"

	gloov1 "github.com/solo-io/gloo/projects/gloo/pkg/api/v1"
	"github.com/solo-io/go-utils/contextutils"
	"github.com/solo-io/solo-kit/pkg/api/v1/clients"
	"github.com/solo-io/solo-kit/pkg/api/v1/resources/core"
	v1 "github.com/solo-io/solo-projects/projects/grpcserver/api/v1"
	"go.uber.org/zap"
)

type artifactGrpcService struct {
	ctx           context.Context
	clientCache   client.ClientCache
	licenseClient license.Client
}

func NewArtifactGrpcService(ctx context.Context, clientCache client.ClientCache, licenseClient license.Client) v1.ArtifactApiServer {
	return &artifactGrpcService{
		ctx:           ctx,
		clientCache:   clientCache,
		licenseClient: licenseClient,
	}
}

func (s *artifactGrpcService) GetArtifact(ctx context.Context, request *v1.GetArtifactRequest) (*v1.GetArtifactResponse, error) {
	artifact, err := s.readArtifact(request.GetRef())
	if err != nil {
		wrapped := FailedToReadArtifactError(err, request.GetRef())
		contextutils.LoggerFrom(s.ctx).Errorw(wrapped.Error(), zap.Error(err), zap.Any("request", request))
		return nil, wrapped
	}

	return &v1.GetArtifactResponse{Artifact: artifact}, nil
}

func (s *artifactGrpcService) ListArtifacts(ctx context.Context, request *v1.ListArtifactsRequest) (*v1.ListArtifactsResponse, error) {
	var artifactList gloov1.ArtifactList
	for _, ns := range request.GetNamespaces() {
		artifacts, err := s.clientCache.GetArtifactClient().List(ns, clients.ListOpts{Ctx: s.ctx})
		if err != nil {
			wrapped := FailedToListArtifactsError(err, ns)
			contextutils.LoggerFrom(s.ctx).Errorw(wrapped.Error(), zap.Error(err), zap.Any("request", request))
			return nil, wrapped
		}
		artifactList = append(artifactList, artifacts...)
	}
	return &v1.ListArtifactsResponse{Artifacts: artifactList}, nil
}

func (s *artifactGrpcService) CreateArtifact(ctx context.Context, request *v1.CreateArtifactRequest) (*v1.CreateArtifactResponse, error) {
	if err := svccodes.CheckLicenseForGlooUiMutations(ctx, s.licenseClient); err != nil {
		return nil, err
	}
	var (
		artifact *gloov1.Artifact
		ref      *core.ResourceRef
	)

	if request.GetArtifact() == nil {
		ref = request.GetRef()
		artifact = &gloov1.Artifact{
			Metadata: core.Metadata{
				Namespace: ref.GetNamespace(),
				Name:      ref.GetName(),
			},
			Data: request.GetData(),
		}
	} else {
		artifact = request.GetArtifact()
		metadataRef := artifact.GetMetadata().Ref()
		ref = &metadataRef
	}

	written, err := s.writeArtifact(artifact, false)
	if err != nil {
		wrapped := FailedToCreateArtifactError(err, ref)
		contextutils.LoggerFrom(s.ctx).Errorw(wrapped.Error(), zap.Error(err), zap.Any("request", request))
		return nil, wrapped
	}
	return &v1.CreateArtifactResponse{Artifact: written}, nil
}

func (s *artifactGrpcService) UpdateArtifact(ctx context.Context, request *v1.UpdateArtifactRequest) (*v1.UpdateArtifactResponse, error) {
	if err := svccodes.CheckLicenseForGlooUiMutations(ctx, s.licenseClient); err != nil {
		return nil, err
	}
	var (
		artifactToWrite *gloov1.Artifact
		ref             *core.ResourceRef
		err             error
	)

	if request.GetArtifact() == nil {
		ref = request.GetRef()

		artifactToWrite, err = s.readArtifact(ref)
		if err != nil {
			wrapped := FailedToUpdateArtifactError(err, ref)
			contextutils.LoggerFrom(s.ctx).Errorw(wrapped.Error(), zap.Error(err), zap.Any("request", request))
			return nil, wrapped
		}
		artifactToWrite.Data = request.GetData()
	} else {
		metadataRef := request.GetArtifact().GetMetadata().Ref()
		ref = &metadataRef
		artifactToWrite = request.GetArtifact()
	}

	written, err := s.writeArtifact(artifactToWrite, true)
	if err != nil {
		wrapped := FailedToUpdateArtifactError(err, ref)
		contextutils.LoggerFrom(s.ctx).Errorw(wrapped.Error(), zap.Error(err), zap.Any("request", request))
		return nil, wrapped
	}

	return &v1.UpdateArtifactResponse{Artifact: written}, nil

}

func (s *artifactGrpcService) DeleteArtifact(ctx context.Context, request *v1.DeleteArtifactRequest) (*v1.DeleteArtifactResponse, error) {
	if err := svccodes.CheckLicenseForGlooUiMutations(ctx, s.licenseClient); err != nil {
		return nil, err
	}
	err := s.clientCache.GetArtifactClient().Delete(request.GetRef().GetNamespace(), request.GetRef().GetName(), clients.DeleteOpts{Ctx: s.ctx})
	if err != nil {
		wrapped := FailedToDeleteArtifactError(err, request.GetRef())
		contextutils.LoggerFrom(s.ctx).Errorw(wrapped.Error(), zap.Error(err), zap.Any("request", request))
		return nil, wrapped
	}
	return &v1.DeleteArtifactResponse{}, nil
}

func (s *artifactGrpcService) readArtifact(ref *core.ResourceRef) (*gloov1.Artifact, error) {
	return s.clientCache.GetArtifactClient().Read(ref.GetNamespace(), ref.GetName(), clients.ReadOpts{Ctx: s.ctx})
}

func (s *artifactGrpcService) writeArtifact(artifact *gloov1.Artifact, shouldOverWrite bool) (*gloov1.Artifact, error) {
	return s.clientCache.GetArtifactClient().Write(artifact, clients.WriteOpts{Ctx: s.ctx, OverwriteExisting: shouldOverWrite})
}
