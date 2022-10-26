// Code generated by solo-kit. DO NOT EDIT.

package v1

import (
	"log"
	"sort"

	"github.com/solo-io/solo-kit/pkg/api/v1/clients/kube/crd"
	"github.com/solo-io/solo-kit/pkg/api/v1/resources"
	"github.com/solo-io/solo-kit/pkg/api/v1/resources/core"
	"github.com/solo-io/solo-kit/pkg/errors"
	"github.com/solo-io/solo-kit/pkg/utils/statusutils"
	"k8s.io/apimachinery/pkg/runtime"
	"k8s.io/apimachinery/pkg/runtime/schema"
)

var (
	// Compile-time assertion
	_ resources.InputResource = new(Gateway)
)

func NewGatewayHashableResource() resources.HashableResource {
	return new(Gateway)
}

func NewGateway(namespace, name string) *Gateway {
	gateway := &Gateway{}
	gateway.SetMetadata(&core.Metadata{
		Name:      name,
		Namespace: namespace,
	})
	return gateway
}

func (r *Gateway) SetMetadata(meta *core.Metadata) {
	r.Metadata = meta
}

// Deprecated
func (r *Gateway) SetStatus(status *core.Status) {
	statusutils.SetSingleStatusInNamespacedStatuses(r, status)
}

// Deprecated
func (r *Gateway) GetStatus() *core.Status {
	if r != nil {
		return statusutils.GetSingleStatusInNamespacedStatuses(r)
	}
	return nil
}

func (r *Gateway) SetNamespacedStatuses(namespacedStatuses *core.NamespacedStatuses) {
	r.NamespacedStatuses = namespacedStatuses
}

func (r *Gateway) MustHash() uint64 {
	hashVal, err := r.Hash(nil)
	if err != nil {
		log.Panicf("error while hashing: (%s) this should never happen", err)
	}
	return hashVal
}

func (r *Gateway) GroupVersionKind() schema.GroupVersionKind {
	return GatewayGVK
}

type GatewayList []*Gateway

func (list GatewayList) Find(namespace, name string) (*Gateway, error) {
	for _, gateway := range list {
		if gateway.GetMetadata().Name == name && gateway.GetMetadata().Namespace == namespace {
			return gateway, nil
		}
	}
	return nil, errors.Errorf("list did not find gateway %v.%v", namespace, name)
}

func (list GatewayList) AsResources() resources.ResourceList {
	var ress resources.ResourceList
	for _, gateway := range list {
		ress = append(ress, gateway)
	}
	return ress
}

func (list GatewayList) AsInputResources() resources.InputResourceList {
	var ress resources.InputResourceList
	for _, gateway := range list {
		ress = append(ress, gateway)
	}
	return ress
}

func (list GatewayList) Names() []string {
	var names []string
	for _, gateway := range list {
		names = append(names, gateway.GetMetadata().Name)
	}
	return names
}

func (list GatewayList) NamespacesDotNames() []string {
	var names []string
	for _, gateway := range list {
		names = append(names, gateway.GetMetadata().Namespace+"."+gateway.GetMetadata().Name)
	}
	return names
}

func (list GatewayList) Sort() GatewayList {
	sort.SliceStable(list, func(i, j int) bool {
		return list[i].GetMetadata().Less(list[j].GetMetadata())
	})
	return list
}

func (list GatewayList) Clone() GatewayList {
	var gatewayList GatewayList
	for _, gateway := range list {
		gatewayList = append(gatewayList, resources.Clone(gateway).(*Gateway))
	}
	return gatewayList
}

func (list GatewayList) Each(f func(element *Gateway)) {
	for _, gateway := range list {
		f(gateway)
	}
}

func (list GatewayList) EachResource(f func(element resources.Resource)) {
	for _, gateway := range list {
		f(gateway)
	}
}

func (list GatewayList) AsInterfaces() []interface{} {
	var asInterfaces []interface{}
	list.Each(func(element *Gateway) {
		asInterfaces = append(asInterfaces, element)
	})
	return asInterfaces
}

// Kubernetes Adapter for Gateway

func (o *Gateway) GetObjectKind() schema.ObjectKind {
	t := GatewayCrd.TypeMeta()
	return &t
}

func (o *Gateway) DeepCopyObject() runtime.Object {
	return resources.Clone(o).(*Gateway)
}

func (o *Gateway) DeepCopyInto(out *Gateway) {
	clone := resources.Clone(o).(*Gateway)
	*out = *clone
}

var (
	GatewayCrd = crd.NewCrd(
		"gateways",
		GatewayGVK.Group,
		GatewayGVK.Version,
		GatewayGVK.Kind,
		"gw",
		false,
		&Gateway{})
)

var (
	GatewayGVK = schema.GroupVersionKind{
		Version: "v1",
		Group:   "gateway.solo.io",
		Kind:    "Gateway",
	}
)
