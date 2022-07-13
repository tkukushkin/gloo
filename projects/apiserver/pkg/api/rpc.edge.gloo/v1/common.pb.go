// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.28.0
// 	protoc        v3.6.1
// source: github.com/solo-io/solo-projects/projects/apiserver/api/rpc.edge.gloo/v1/common.proto

// defines common types shared across Gloo Edge component APIs

package v1

import (
	reflect "reflect"
	sync "sync"

	_ "github.com/solo-io/protoc-gen-ext/extproto"
	protoreflect "google.golang.org/protobuf/reflect/protoreflect"
	protoimpl "google.golang.org/protobuf/runtime/protoimpl"
)

const (
	// Verify that this generated code is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(20 - protoimpl.MinVersion)
	// Verify that runtime/protoimpl is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(protoimpl.MaxVersion - 20)
)

// The properties we can sort by.
type SortOptions_SortKey int32

const (
	SortOptions_NAME      SortOptions_SortKey = 0
	SortOptions_NAMESPACE SortOptions_SortKey = 1
	SortOptions_STATUS    SortOptions_SortKey = 2
)

// Enum value maps for SortOptions_SortKey.
var (
	SortOptions_SortKey_name = map[int32]string{
		0: "NAME",
		1: "NAMESPACE",
		2: "STATUS",
	}
	SortOptions_SortKey_value = map[string]int32{
		"NAME":      0,
		"NAMESPACE": 1,
		"STATUS":    2,
	}
)

func (x SortOptions_SortKey) Enum() *SortOptions_SortKey {
	p := new(SortOptions_SortKey)
	*p = x
	return p
}

func (x SortOptions_SortKey) String() string {
	return protoimpl.X.EnumStringOf(x.Descriptor(), protoreflect.EnumNumber(x))
}

func (SortOptions_SortKey) Descriptor() protoreflect.EnumDescriptor {
	return file_github_com_solo_io_solo_projects_projects_apiserver_api_rpc_edge_gloo_v1_common_proto_enumTypes[0].Descriptor()
}

func (SortOptions_SortKey) Type() protoreflect.EnumType {
	return &file_github_com_solo_io_solo_projects_projects_apiserver_api_rpc_edge_gloo_v1_common_proto_enumTypes[0]
}

func (x SortOptions_SortKey) Number() protoreflect.EnumNumber {
	return protoreflect.EnumNumber(x)
}

// Deprecated: Use SortOptions_SortKey.Descriptor instead.
func (SortOptions_SortKey) EnumDescriptor() ([]byte, []int) {
	return file_github_com_solo_io_solo_projects_projects_apiserver_api_rpc_edge_gloo_v1_common_proto_rawDescGZIP(), []int{4, 0}
}

// ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create.
// This is a boiled-down version of Kubernetes ObjectMeta which can be found at:
// https://github.com/kubernetes/apimachinery/blob/master/pkg/apis/meta/v1/generated.proto
type ObjectMeta struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// Name must be unique within a namespace. Is required when creating resources, although
	// some resources may allow a client to request the generation of an appropriate name
	// automatically. Name is primarily intended for creation idempotence and configuration
	// definition.
	// Cannot be updated.
	// More info: http://kubernetes.io/docs/user-guide/identifiers#names
	// +optional
	Name string `protobuf:"bytes,1,opt,name=name,proto3" json:"name,omitempty"`
	// Namespace defines the space within each name must be unique. An empty namespace is
	// equivalent to the "default" namespace, but "default" is the canonical representation.
	// Not all objects are required to be scoped to a namespace - the value of this field for
	// those objects will be empty.
	//
	// Must be a DNS_LABEL.
	// Cannot be updated.
	// More info: http://kubernetes.io/docs/user-guide/namespaces
	// +optional
	Namespace string `protobuf:"bytes,3,opt,name=namespace,proto3" json:"namespace,omitempty"`
	// UID is the unique in time and space value for this object. It is typically generated by
	// the server on successful creation of a resource and is not allowed to change on PUT
	// operations.
	//
	// Populated by the system.
	// Read-only.
	// More info: http://kubernetes.io/docs/user-guide/identifiers#uids
	// +optional
	Uid string `protobuf:"bytes,5,opt,name=uid,proto3" json:"uid,omitempty"`
	// An opaque value that represents the internal version of this object that can
	// be used by clients to determine when objects have changed. May be used for optimistic
	// concurrency, change detection, and the watch operation on a resource or set of resources.
	// Clients must treat these values as opaque and passed unmodified back to the server.
	// They may only be valid for a particular resource or set of resources.
	//
	// Populated by the system.
	// Read-only.
	// Value must be treated as opaque by clients and .
	// More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#concurrency-control-and-consistency
	// +optional
	ResourceVersion string `protobuf:"bytes,6,opt,name=resource_version,json=resourceVersion,proto3" json:"resource_version,omitempty"`
	// CreationTimestamp is a timestamp representing the server time when this object was
	// created. It is not guaranteed to be set in happens-before order across separate operations.
	// Clients may not set this value. It is represented in RFC3339 form and is in UTC.
	//
	// Populated by the system.
	// Read-only.
	// Null for lists.
	// More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
	// +optional
	CreationTimestamp *Time `protobuf:"bytes,8,opt,name=creation_timestamp,json=creationTimestamp,proto3" json:"creation_timestamp,omitempty"`
	// Map of string keys and values that can be used to organize and categorize
	// (scope and select) objects. May match selectors of replication controllers
	// and services.
	// More info: http://kubernetes.io/docs/user-guide/labels
	// +optional
	Labels map[string]string `protobuf:"bytes,11,rep,name=labels,proto3" json:"labels,omitempty" protobuf_key:"bytes,1,opt,name=key,proto3" protobuf_val:"bytes,2,opt,name=value,proto3"`
	// Annotations is an unstructured key value map stored with a resource that may be
	// set by external tools to store and retrieve arbitrary metadata. They are not
	// queryable and should be preserved when modifying objects.
	// More info: http://kubernetes.io/docs/user-guide/annotations
	// +optional
	Annotations map[string]string `protobuf:"bytes,12,rep,name=annotations,proto3" json:"annotations,omitempty" protobuf_key:"bytes,1,opt,name=key,proto3" protobuf_val:"bytes,2,opt,name=value,proto3"`
	// The name of the cluster which the object belongs to.
	// This is used to distinguish resources with same name and namespace in different clusters.
	// This field is not set anywhere right now and apiserver is going to ignore it if set in create or update request.
	// +optional
	ClusterName string `protobuf:"bytes,13,opt,name=cluster_name,json=clusterName,proto3" json:"cluster_name,omitempty"`
}

func (x *ObjectMeta) Reset() {
	*x = ObjectMeta{}
	if protoimpl.UnsafeEnabled {
		mi := &file_github_com_solo_io_solo_projects_projects_apiserver_api_rpc_edge_gloo_v1_common_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ObjectMeta) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ObjectMeta) ProtoMessage() {}

func (x *ObjectMeta) ProtoReflect() protoreflect.Message {
	mi := &file_github_com_solo_io_solo_projects_projects_apiserver_api_rpc_edge_gloo_v1_common_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ObjectMeta.ProtoReflect.Descriptor instead.
func (*ObjectMeta) Descriptor() ([]byte, []int) {
	return file_github_com_solo_io_solo_projects_projects_apiserver_api_rpc_edge_gloo_v1_common_proto_rawDescGZIP(), []int{0}
}

func (x *ObjectMeta) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

func (x *ObjectMeta) GetNamespace() string {
	if x != nil {
		return x.Namespace
	}
	return ""
}

func (x *ObjectMeta) GetUid() string {
	if x != nil {
		return x.Uid
	}
	return ""
}

func (x *ObjectMeta) GetResourceVersion() string {
	if x != nil {
		return x.ResourceVersion
	}
	return ""
}

func (x *ObjectMeta) GetCreationTimestamp() *Time {
	if x != nil {
		return x.CreationTimestamp
	}
	return nil
}

func (x *ObjectMeta) GetLabels() map[string]string {
	if x != nil {
		return x.Labels
	}
	return nil
}

func (x *ObjectMeta) GetAnnotations() map[string]string {
	if x != nil {
		return x.Annotations
	}
	return nil
}

func (x *ObjectMeta) GetClusterName() string {
	if x != nil {
		return x.ClusterName
	}
	return ""
}

// Time is a wrapper around time.Time which supports correct
// marshaling to YAML and JSON.  Wrappers are provided for many
// of the factory methods that the time package offers.
//
// +protobuf.options.marshal=false
// +protobuf.as=Timestamp
type Time struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// Represents seconds of UTC time since Unix epoch
	// 1970-01-01T00:00:00Z. Must be from 0001-01-01T00:00:00Z to
	// 9999-12-31T23:59:59Z inclusive.
	Seconds int64 `protobuf:"varint,1,opt,name=seconds,proto3" json:"seconds,omitempty"`
	// Non-negative fractions of a second at nanosecond resolution. Negative
	// second values with fractions must still have non-negative nanos values
	// that count forward in time. Must be from 0 to 999,999,999
	// inclusive. This field may be limited in precision depending on context.
	Nanos int32 `protobuf:"varint,2,opt,name=nanos,proto3" json:"nanos,omitempty"`
}

func (x *Time) Reset() {
	*x = Time{}
	if protoimpl.UnsafeEnabled {
		mi := &file_github_com_solo_io_solo_projects_projects_apiserver_api_rpc_edge_gloo_v1_common_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Time) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Time) ProtoMessage() {}

func (x *Time) ProtoReflect() protoreflect.Message {
	mi := &file_github_com_solo_io_solo_projects_projects_apiserver_api_rpc_edge_gloo_v1_common_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Time.ProtoReflect.Descriptor instead.
func (*Time) Descriptor() ([]byte, []int) {
	return file_github_com_solo_io_solo_projects_projects_apiserver_api_rpc_edge_gloo_v1_common_proto_rawDescGZIP(), []int{1}
}

func (x *Time) GetSeconds() int64 {
	if x != nil {
		return x.Seconds
	}
	return 0
}

func (x *Time) GetNanos() int32 {
	if x != nil {
		return x.Nanos
	}
	return 0
}

type ResourceYaml struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Yaml string `protobuf:"bytes,1,opt,name=yaml,proto3" json:"yaml,omitempty"`
}

func (x *ResourceYaml) Reset() {
	*x = ResourceYaml{}
	if protoimpl.UnsafeEnabled {
		mi := &file_github_com_solo_io_solo_projects_projects_apiserver_api_rpc_edge_gloo_v1_common_proto_msgTypes[2]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ResourceYaml) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ResourceYaml) ProtoMessage() {}

func (x *ResourceYaml) ProtoReflect() protoreflect.Message {
	mi := &file_github_com_solo_io_solo_projects_projects_apiserver_api_rpc_edge_gloo_v1_common_proto_msgTypes[2]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ResourceYaml.ProtoReflect.Descriptor instead.
func (*ResourceYaml) Descriptor() ([]byte, []int) {
	return file_github_com_solo_io_solo_projects_projects_apiserver_api_rpc_edge_gloo_v1_common_proto_rawDescGZIP(), []int{2}
}

func (x *ResourceYaml) GetYaml() string {
	if x != nil {
		return x.Yaml
	}
	return ""
}

type Pagination struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Limit  int32 `protobuf:"varint,1,opt,name=limit,proto3" json:"limit,omitempty"`
	Offset int32 `protobuf:"varint,2,opt,name=offset,proto3" json:"offset,omitempty"`
}

func (x *Pagination) Reset() {
	*x = Pagination{}
	if protoimpl.UnsafeEnabled {
		mi := &file_github_com_solo_io_solo_projects_projects_apiserver_api_rpc_edge_gloo_v1_common_proto_msgTypes[3]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Pagination) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Pagination) ProtoMessage() {}

func (x *Pagination) ProtoReflect() protoreflect.Message {
	mi := &file_github_com_solo_io_solo_projects_projects_apiserver_api_rpc_edge_gloo_v1_common_proto_msgTypes[3]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Pagination.ProtoReflect.Descriptor instead.
func (*Pagination) Descriptor() ([]byte, []int) {
	return file_github_com_solo_io_solo_projects_projects_apiserver_api_rpc_edge_gloo_v1_common_proto_rawDescGZIP(), []int{3}
}

func (x *Pagination) GetLimit() int32 {
	if x != nil {
		return x.Limit
	}
	return 0
}

func (x *Pagination) GetOffset() int32 {
	if x != nil {
		return x.Offset
	}
	return 0
}

type SortOptions struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// Whether to sort descending (true) or ascending (false).
	// Default: Sorts ascending.
	Descending bool `protobuf:"varint,1,opt,name=descending,proto3" json:"descending,omitempty"`
	// The property to sort by.
	// Default: Sorts by name.
	SortKey SortOptions_SortKey `protobuf:"varint,2,opt,name=sort_key,json=sortKey,proto3,enum=rpc.edge.gloo.solo.io.SortOptions_SortKey" json:"sort_key,omitempty"`
}

func (x *SortOptions) Reset() {
	*x = SortOptions{}
	if protoimpl.UnsafeEnabled {
		mi := &file_github_com_solo_io_solo_projects_projects_apiserver_api_rpc_edge_gloo_v1_common_proto_msgTypes[4]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *SortOptions) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*SortOptions) ProtoMessage() {}

func (x *SortOptions) ProtoReflect() protoreflect.Message {
	mi := &file_github_com_solo_io_solo_projects_projects_apiserver_api_rpc_edge_gloo_v1_common_proto_msgTypes[4]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use SortOptions.ProtoReflect.Descriptor instead.
func (*SortOptions) Descriptor() ([]byte, []int) {
	return file_github_com_solo_io_solo_projects_projects_apiserver_api_rpc_edge_gloo_v1_common_proto_rawDescGZIP(), []int{4}
}

func (x *SortOptions) GetDescending() bool {
	if x != nil {
		return x.Descending
	}
	return false
}

func (x *SortOptions) GetSortKey() SortOptions_SortKey {
	if x != nil {
		return x.SortKey
	}
	return SortOptions_NAME
}

type StatusFilter struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// This matches up to the {{...}}Status.State field for each gloo resource.
	State int32 `protobuf:"varint,1,opt,name=state,proto3" json:"state,omitempty"`
}

func (x *StatusFilter) Reset() {
	*x = StatusFilter{}
	if protoimpl.UnsafeEnabled {
		mi := &file_github_com_solo_io_solo_projects_projects_apiserver_api_rpc_edge_gloo_v1_common_proto_msgTypes[5]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *StatusFilter) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*StatusFilter) ProtoMessage() {}

func (x *StatusFilter) ProtoReflect() protoreflect.Message {
	mi := &file_github_com_solo_io_solo_projects_projects_apiserver_api_rpc_edge_gloo_v1_common_proto_msgTypes[5]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use StatusFilter.ProtoReflect.Descriptor instead.
func (*StatusFilter) Descriptor() ([]byte, []int) {
	return file_github_com_solo_io_solo_projects_projects_apiserver_api_rpc_edge_gloo_v1_common_proto_rawDescGZIP(), []int{5}
}

func (x *StatusFilter) GetState() int32 {
	if x != nil {
		return x.State
	}
	return 0
}

var File_github_com_solo_io_solo_projects_projects_apiserver_api_rpc_edge_gloo_v1_common_proto protoreflect.FileDescriptor

var file_github_com_solo_io_solo_projects_projects_apiserver_api_rpc_edge_gloo_v1_common_proto_rawDesc = []byte{
	0x0a, 0x55, 0x67, 0x69, 0x74, 0x68, 0x75, 0x62, 0x2e, 0x63, 0x6f, 0x6d, 0x2f, 0x73, 0x6f, 0x6c,
	0x6f, 0x2d, 0x69, 0x6f, 0x2f, 0x73, 0x6f, 0x6c, 0x6f, 0x2d, 0x70, 0x72, 0x6f, 0x6a, 0x65, 0x63,
	0x74, 0x73, 0x2f, 0x70, 0x72, 0x6f, 0x6a, 0x65, 0x63, 0x74, 0x73, 0x2f, 0x61, 0x70, 0x69, 0x73,
	0x65, 0x72, 0x76, 0x65, 0x72, 0x2f, 0x61, 0x70, 0x69, 0x2f, 0x72, 0x70, 0x63, 0x2e, 0x65, 0x64,
	0x67, 0x65, 0x2e, 0x67, 0x6c, 0x6f, 0x6f, 0x2f, 0x76, 0x31, 0x2f, 0x63, 0x6f, 0x6d, 0x6d, 0x6f,
	0x6e, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x15, 0x72, 0x70, 0x63, 0x2e, 0x65, 0x64, 0x67,
	0x65, 0x2e, 0x67, 0x6c, 0x6f, 0x6f, 0x2e, 0x73, 0x6f, 0x6c, 0x6f, 0x2e, 0x69, 0x6f, 0x1a, 0x12,
	0x65, 0x78, 0x74, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x2f, 0x65, 0x78, 0x74, 0x2e, 0x70, 0x72, 0x6f,
	0x74, 0x6f, 0x22, 0x82, 0x04, 0x0a, 0x0a, 0x4f, 0x62, 0x6a, 0x65, 0x63, 0x74, 0x4d, 0x65, 0x74,
	0x61, 0x12, 0x12, 0x0a, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52,
	0x04, 0x6e, 0x61, 0x6d, 0x65, 0x12, 0x1c, 0x0a, 0x09, 0x6e, 0x61, 0x6d, 0x65, 0x73, 0x70, 0x61,
	0x63, 0x65, 0x18, 0x03, 0x20, 0x01, 0x28, 0x09, 0x52, 0x09, 0x6e, 0x61, 0x6d, 0x65, 0x73, 0x70,
	0x61, 0x63, 0x65, 0x12, 0x10, 0x0a, 0x03, 0x75, 0x69, 0x64, 0x18, 0x05, 0x20, 0x01, 0x28, 0x09,
	0x52, 0x03, 0x75, 0x69, 0x64, 0x12, 0x29, 0x0a, 0x10, 0x72, 0x65, 0x73, 0x6f, 0x75, 0x72, 0x63,
	0x65, 0x5f, 0x76, 0x65, 0x72, 0x73, 0x69, 0x6f, 0x6e, 0x18, 0x06, 0x20, 0x01, 0x28, 0x09, 0x52,
	0x0f, 0x72, 0x65, 0x73, 0x6f, 0x75, 0x72, 0x63, 0x65, 0x56, 0x65, 0x72, 0x73, 0x69, 0x6f, 0x6e,
	0x12, 0x4a, 0x0a, 0x12, 0x63, 0x72, 0x65, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x5f, 0x74, 0x69, 0x6d,
	0x65, 0x73, 0x74, 0x61, 0x6d, 0x70, 0x18, 0x08, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x1b, 0x2e, 0x72,
	0x70, 0x63, 0x2e, 0x65, 0x64, 0x67, 0x65, 0x2e, 0x67, 0x6c, 0x6f, 0x6f, 0x2e, 0x73, 0x6f, 0x6c,
	0x6f, 0x2e, 0x69, 0x6f, 0x2e, 0x54, 0x69, 0x6d, 0x65, 0x52, 0x11, 0x63, 0x72, 0x65, 0x61, 0x74,
	0x69, 0x6f, 0x6e, 0x54, 0x69, 0x6d, 0x65, 0x73, 0x74, 0x61, 0x6d, 0x70, 0x12, 0x45, 0x0a, 0x06,
	0x6c, 0x61, 0x62, 0x65, 0x6c, 0x73, 0x18, 0x0b, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x2d, 0x2e, 0x72,
	0x70, 0x63, 0x2e, 0x65, 0x64, 0x67, 0x65, 0x2e, 0x67, 0x6c, 0x6f, 0x6f, 0x2e, 0x73, 0x6f, 0x6c,
	0x6f, 0x2e, 0x69, 0x6f, 0x2e, 0x4f, 0x62, 0x6a, 0x65, 0x63, 0x74, 0x4d, 0x65, 0x74, 0x61, 0x2e,
	0x4c, 0x61, 0x62, 0x65, 0x6c, 0x73, 0x45, 0x6e, 0x74, 0x72, 0x79, 0x52, 0x06, 0x6c, 0x61, 0x62,
	0x65, 0x6c, 0x73, 0x12, 0x54, 0x0a, 0x0b, 0x61, 0x6e, 0x6e, 0x6f, 0x74, 0x61, 0x74, 0x69, 0x6f,
	0x6e, 0x73, 0x18, 0x0c, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x32, 0x2e, 0x72, 0x70, 0x63, 0x2e, 0x65,
	0x64, 0x67, 0x65, 0x2e, 0x67, 0x6c, 0x6f, 0x6f, 0x2e, 0x73, 0x6f, 0x6c, 0x6f, 0x2e, 0x69, 0x6f,
	0x2e, 0x4f, 0x62, 0x6a, 0x65, 0x63, 0x74, 0x4d, 0x65, 0x74, 0x61, 0x2e, 0x41, 0x6e, 0x6e, 0x6f,
	0x74, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x73, 0x45, 0x6e, 0x74, 0x72, 0x79, 0x52, 0x0b, 0x61, 0x6e,
	0x6e, 0x6f, 0x74, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x73, 0x12, 0x21, 0x0a, 0x0c, 0x63, 0x6c, 0x75,
	0x73, 0x74, 0x65, 0x72, 0x5f, 0x6e, 0x61, 0x6d, 0x65, 0x18, 0x0d, 0x20, 0x01, 0x28, 0x09, 0x52,
	0x0b, 0x63, 0x6c, 0x75, 0x73, 0x74, 0x65, 0x72, 0x4e, 0x61, 0x6d, 0x65, 0x1a, 0x39, 0x0a, 0x0b,
	0x4c, 0x61, 0x62, 0x65, 0x6c, 0x73, 0x45, 0x6e, 0x74, 0x72, 0x79, 0x12, 0x10, 0x0a, 0x03, 0x6b,
	0x65, 0x79, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x03, 0x6b, 0x65, 0x79, 0x12, 0x14, 0x0a,
	0x05, 0x76, 0x61, 0x6c, 0x75, 0x65, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x05, 0x76, 0x61,
	0x6c, 0x75, 0x65, 0x3a, 0x02, 0x38, 0x01, 0x1a, 0x3e, 0x0a, 0x10, 0x41, 0x6e, 0x6e, 0x6f, 0x74,
	0x61, 0x74, 0x69, 0x6f, 0x6e, 0x73, 0x45, 0x6e, 0x74, 0x72, 0x79, 0x12, 0x10, 0x0a, 0x03, 0x6b,
	0x65, 0x79, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x03, 0x6b, 0x65, 0x79, 0x12, 0x14, 0x0a,
	0x05, 0x76, 0x61, 0x6c, 0x75, 0x65, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x05, 0x76, 0x61,
	0x6c, 0x75, 0x65, 0x3a, 0x02, 0x38, 0x01, 0x22, 0x36, 0x0a, 0x04, 0x54, 0x69, 0x6d, 0x65, 0x12,
	0x18, 0x0a, 0x07, 0x73, 0x65, 0x63, 0x6f, 0x6e, 0x64, 0x73, 0x18, 0x01, 0x20, 0x01, 0x28, 0x03,
	0x52, 0x07, 0x73, 0x65, 0x63, 0x6f, 0x6e, 0x64, 0x73, 0x12, 0x14, 0x0a, 0x05, 0x6e, 0x61, 0x6e,
	0x6f, 0x73, 0x18, 0x02, 0x20, 0x01, 0x28, 0x05, 0x52, 0x05, 0x6e, 0x61, 0x6e, 0x6f, 0x73, 0x22,
	0x22, 0x0a, 0x0c, 0x52, 0x65, 0x73, 0x6f, 0x75, 0x72, 0x63, 0x65, 0x59, 0x61, 0x6d, 0x6c, 0x12,
	0x12, 0x0a, 0x04, 0x79, 0x61, 0x6d, 0x6c, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x79,
	0x61, 0x6d, 0x6c, 0x22, 0x3a, 0x0a, 0x0a, 0x50, 0x61, 0x67, 0x69, 0x6e, 0x61, 0x74, 0x69, 0x6f,
	0x6e, 0x12, 0x14, 0x0a, 0x05, 0x6c, 0x69, 0x6d, 0x69, 0x74, 0x18, 0x01, 0x20, 0x01, 0x28, 0x05,
	0x52, 0x05, 0x6c, 0x69, 0x6d, 0x69, 0x74, 0x12, 0x16, 0x0a, 0x06, 0x6f, 0x66, 0x66, 0x73, 0x65,
	0x74, 0x18, 0x02, 0x20, 0x01, 0x28, 0x05, 0x52, 0x06, 0x6f, 0x66, 0x66, 0x73, 0x65, 0x74, 0x22,
	0xa4, 0x01, 0x0a, 0x0b, 0x53, 0x6f, 0x72, 0x74, 0x4f, 0x70, 0x74, 0x69, 0x6f, 0x6e, 0x73, 0x12,
	0x1e, 0x0a, 0x0a, 0x64, 0x65, 0x73, 0x63, 0x65, 0x6e, 0x64, 0x69, 0x6e, 0x67, 0x18, 0x01, 0x20,
	0x01, 0x28, 0x08, 0x52, 0x0a, 0x64, 0x65, 0x73, 0x63, 0x65, 0x6e, 0x64, 0x69, 0x6e, 0x67, 0x12,
	0x45, 0x0a, 0x08, 0x73, 0x6f, 0x72, 0x74, 0x5f, 0x6b, 0x65, 0x79, 0x18, 0x02, 0x20, 0x01, 0x28,
	0x0e, 0x32, 0x2a, 0x2e, 0x72, 0x70, 0x63, 0x2e, 0x65, 0x64, 0x67, 0x65, 0x2e, 0x67, 0x6c, 0x6f,
	0x6f, 0x2e, 0x73, 0x6f, 0x6c, 0x6f, 0x2e, 0x69, 0x6f, 0x2e, 0x53, 0x6f, 0x72, 0x74, 0x4f, 0x70,
	0x74, 0x69, 0x6f, 0x6e, 0x73, 0x2e, 0x53, 0x6f, 0x72, 0x74, 0x4b, 0x65, 0x79, 0x52, 0x07, 0x73,
	0x6f, 0x72, 0x74, 0x4b, 0x65, 0x79, 0x22, 0x2e, 0x0a, 0x07, 0x53, 0x6f, 0x72, 0x74, 0x4b, 0x65,
	0x79, 0x12, 0x08, 0x0a, 0x04, 0x4e, 0x41, 0x4d, 0x45, 0x10, 0x00, 0x12, 0x0d, 0x0a, 0x09, 0x4e,
	0x41, 0x4d, 0x45, 0x53, 0x50, 0x41, 0x43, 0x45, 0x10, 0x01, 0x12, 0x0a, 0x0a, 0x06, 0x53, 0x54,
	0x41, 0x54, 0x55, 0x53, 0x10, 0x02, 0x22, 0x24, 0x0a, 0x0c, 0x53, 0x74, 0x61, 0x74, 0x75, 0x73,
	0x46, 0x69, 0x6c, 0x74, 0x65, 0x72, 0x12, 0x14, 0x0a, 0x05, 0x73, 0x74, 0x61, 0x74, 0x65, 0x18,
	0x01, 0x20, 0x01, 0x28, 0x05, 0x52, 0x05, 0x73, 0x74, 0x61, 0x74, 0x65, 0x42, 0x56, 0x5a, 0x4c,
	0x67, 0x69, 0x74, 0x68, 0x75, 0x62, 0x2e, 0x63, 0x6f, 0x6d, 0x2f, 0x73, 0x6f, 0x6c, 0x6f, 0x2d,
	0x69, 0x6f, 0x2f, 0x73, 0x6f, 0x6c, 0x6f, 0x2d, 0x70, 0x72, 0x6f, 0x6a, 0x65, 0x63, 0x74, 0x73,
	0x2f, 0x70, 0x72, 0x6f, 0x6a, 0x65, 0x63, 0x74, 0x73, 0x2f, 0x61, 0x70, 0x69, 0x73, 0x65, 0x72,
	0x76, 0x65, 0x72, 0x2f, 0x70, 0x6b, 0x67, 0x2f, 0x61, 0x70, 0x69, 0x2f, 0x72, 0x70, 0x63, 0x2e,
	0x65, 0x64, 0x67, 0x65, 0x2e, 0x67, 0x6c, 0x6f, 0x6f, 0x2f, 0x76, 0x31, 0xc0, 0xf5, 0x04, 0x01,
	0xb8, 0xf5, 0x04, 0x01, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_github_com_solo_io_solo_projects_projects_apiserver_api_rpc_edge_gloo_v1_common_proto_rawDescOnce sync.Once
	file_github_com_solo_io_solo_projects_projects_apiserver_api_rpc_edge_gloo_v1_common_proto_rawDescData = file_github_com_solo_io_solo_projects_projects_apiserver_api_rpc_edge_gloo_v1_common_proto_rawDesc
)

func file_github_com_solo_io_solo_projects_projects_apiserver_api_rpc_edge_gloo_v1_common_proto_rawDescGZIP() []byte {
	file_github_com_solo_io_solo_projects_projects_apiserver_api_rpc_edge_gloo_v1_common_proto_rawDescOnce.Do(func() {
		file_github_com_solo_io_solo_projects_projects_apiserver_api_rpc_edge_gloo_v1_common_proto_rawDescData = protoimpl.X.CompressGZIP(file_github_com_solo_io_solo_projects_projects_apiserver_api_rpc_edge_gloo_v1_common_proto_rawDescData)
	})
	return file_github_com_solo_io_solo_projects_projects_apiserver_api_rpc_edge_gloo_v1_common_proto_rawDescData
}

var file_github_com_solo_io_solo_projects_projects_apiserver_api_rpc_edge_gloo_v1_common_proto_enumTypes = make([]protoimpl.EnumInfo, 1)
var file_github_com_solo_io_solo_projects_projects_apiserver_api_rpc_edge_gloo_v1_common_proto_msgTypes = make([]protoimpl.MessageInfo, 8)
var file_github_com_solo_io_solo_projects_projects_apiserver_api_rpc_edge_gloo_v1_common_proto_goTypes = []interface{}{
	(SortOptions_SortKey)(0), // 0: rpc.edge.gloo.solo.io.SortOptions.SortKey
	(*ObjectMeta)(nil),       // 1: rpc.edge.gloo.solo.io.ObjectMeta
	(*Time)(nil),             // 2: rpc.edge.gloo.solo.io.Time
	(*ResourceYaml)(nil),     // 3: rpc.edge.gloo.solo.io.ResourceYaml
	(*Pagination)(nil),       // 4: rpc.edge.gloo.solo.io.Pagination
	(*SortOptions)(nil),      // 5: rpc.edge.gloo.solo.io.SortOptions
	(*StatusFilter)(nil),     // 6: rpc.edge.gloo.solo.io.StatusFilter
	nil,                      // 7: rpc.edge.gloo.solo.io.ObjectMeta.LabelsEntry
	nil,                      // 8: rpc.edge.gloo.solo.io.ObjectMeta.AnnotationsEntry
}
var file_github_com_solo_io_solo_projects_projects_apiserver_api_rpc_edge_gloo_v1_common_proto_depIdxs = []int32{
	2, // 0: rpc.edge.gloo.solo.io.ObjectMeta.creation_timestamp:type_name -> rpc.edge.gloo.solo.io.Time
	7, // 1: rpc.edge.gloo.solo.io.ObjectMeta.labels:type_name -> rpc.edge.gloo.solo.io.ObjectMeta.LabelsEntry
	8, // 2: rpc.edge.gloo.solo.io.ObjectMeta.annotations:type_name -> rpc.edge.gloo.solo.io.ObjectMeta.AnnotationsEntry
	0, // 3: rpc.edge.gloo.solo.io.SortOptions.sort_key:type_name -> rpc.edge.gloo.solo.io.SortOptions.SortKey
	4, // [4:4] is the sub-list for method output_type
	4, // [4:4] is the sub-list for method input_type
	4, // [4:4] is the sub-list for extension type_name
	4, // [4:4] is the sub-list for extension extendee
	0, // [0:4] is the sub-list for field type_name
}

func init() {
	file_github_com_solo_io_solo_projects_projects_apiserver_api_rpc_edge_gloo_v1_common_proto_init()
}
func file_github_com_solo_io_solo_projects_projects_apiserver_api_rpc_edge_gloo_v1_common_proto_init() {
	if File_github_com_solo_io_solo_projects_projects_apiserver_api_rpc_edge_gloo_v1_common_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_github_com_solo_io_solo_projects_projects_apiserver_api_rpc_edge_gloo_v1_common_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*ObjectMeta); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_github_com_solo_io_solo_projects_projects_apiserver_api_rpc_edge_gloo_v1_common_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*Time); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_github_com_solo_io_solo_projects_projects_apiserver_api_rpc_edge_gloo_v1_common_proto_msgTypes[2].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*ResourceYaml); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_github_com_solo_io_solo_projects_projects_apiserver_api_rpc_edge_gloo_v1_common_proto_msgTypes[3].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*Pagination); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_github_com_solo_io_solo_projects_projects_apiserver_api_rpc_edge_gloo_v1_common_proto_msgTypes[4].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*SortOptions); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_github_com_solo_io_solo_projects_projects_apiserver_api_rpc_edge_gloo_v1_common_proto_msgTypes[5].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*StatusFilter); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
	}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_github_com_solo_io_solo_projects_projects_apiserver_api_rpc_edge_gloo_v1_common_proto_rawDesc,
			NumEnums:      1,
			NumMessages:   8,
			NumExtensions: 0,
			NumServices:   0,
		},
		GoTypes:           file_github_com_solo_io_solo_projects_projects_apiserver_api_rpc_edge_gloo_v1_common_proto_goTypes,
		DependencyIndexes: file_github_com_solo_io_solo_projects_projects_apiserver_api_rpc_edge_gloo_v1_common_proto_depIdxs,
		EnumInfos:         file_github_com_solo_io_solo_projects_projects_apiserver_api_rpc_edge_gloo_v1_common_proto_enumTypes,
		MessageInfos:      file_github_com_solo_io_solo_projects_projects_apiserver_api_rpc_edge_gloo_v1_common_proto_msgTypes,
	}.Build()
	File_github_com_solo_io_solo_projects_projects_apiserver_api_rpc_edge_gloo_v1_common_proto = out.File
	file_github_com_solo_io_solo_projects_projects_apiserver_api_rpc_edge_gloo_v1_common_proto_rawDesc = nil
	file_github_com_solo_io_solo_projects_projects_apiserver_api_rpc_edge_gloo_v1_common_proto_goTypes = nil
	file_github_com_solo_io_solo_projects_projects_apiserver_api_rpc_edge_gloo_v1_common_proto_depIdxs = nil
}
