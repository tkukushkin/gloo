// Code generated by protoc-gen-gogo. DO NOT EDIT.
// source: github.com/solo-io/solo-projects/projects/gloo/api/v1/plugins/ratelimit/ratelimit.proto

package ratelimit

import (
	bytes "bytes"
	fmt "fmt"
	math "math"

	_ "github.com/gogo/protobuf/gogoproto"
	proto "github.com/gogo/protobuf/proto"
	core "github.com/solo-io/solo-kit/pkg/api/v1/resources/core"
)

// Reference imports to suppress errors if they are not otherwise used.
var _ = proto.Marshal
var _ = fmt.Errorf
var _ = math.Inf

// This is a compile-time assertion to ensure that this generated file
// is compatible with the proto package it is being compiled against.
// A compilation error at this line likely means your copy of the
// proto package needs to be updated.
const _ = proto.GoGoProtoPackageIsVersion2 // please upgrade the proto package

type RateLimit_Unit int32

const (
	RateLimit_UNKNOWN RateLimit_Unit = 0
	RateLimit_SECOND  RateLimit_Unit = 1
	RateLimit_MINUTE  RateLimit_Unit = 2
	RateLimit_HOUR    RateLimit_Unit = 3
	RateLimit_DAY     RateLimit_Unit = 4
)

var RateLimit_Unit_name = map[int32]string{
	0: "UNKNOWN",
	1: "SECOND",
	2: "MINUTE",
	3: "HOUR",
	4: "DAY",
}

var RateLimit_Unit_value = map[string]int32{
	"UNKNOWN": 0,
	"SECOND":  1,
	"MINUTE":  2,
	"HOUR":    3,
	"DAY":     4,
}

func (x RateLimit_Unit) String() string {
	return proto.EnumName(RateLimit_Unit_name, int32(x))
}

func (RateLimit_Unit) EnumDescriptor() ([]byte, []int) {
	return fileDescriptor_e37a431d94e417ef, []int{0, 0}
}

type RateLimit struct {
	Unit                 RateLimit_Unit `protobuf:"varint,1,opt,name=unit,proto3,enum=ratelimit.plugins.gloo.solo.io.RateLimit_Unit" json:"unit,omitempty"`
	RequestsPerUnit      uint32         `protobuf:"varint,2,opt,name=requests_per_unit,json=requestsPerUnit,proto3" json:"requests_per_unit,omitempty"`
	XXX_NoUnkeyedLiteral struct{}       `json:"-"`
	XXX_unrecognized     []byte         `json:"-"`
	XXX_sizecache        int32          `json:"-"`
}

func (m *RateLimit) Reset()         { *m = RateLimit{} }
func (m *RateLimit) String() string { return proto.CompactTextString(m) }
func (*RateLimit) ProtoMessage()    {}
func (*RateLimit) Descriptor() ([]byte, []int) {
	return fileDescriptor_e37a431d94e417ef, []int{0}
}
func (m *RateLimit) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_RateLimit.Unmarshal(m, b)
}
func (m *RateLimit) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_RateLimit.Marshal(b, m, deterministic)
}
func (m *RateLimit) XXX_Merge(src proto.Message) {
	xxx_messageInfo_RateLimit.Merge(m, src)
}
func (m *RateLimit) XXX_Size() int {
	return xxx_messageInfo_RateLimit.Size(m)
}
func (m *RateLimit) XXX_DiscardUnknown() {
	xxx_messageInfo_RateLimit.DiscardUnknown(m)
}

var xxx_messageInfo_RateLimit proto.InternalMessageInfo

func (m *RateLimit) GetUnit() RateLimit_Unit {
	if m != nil {
		return m.Unit
	}
	return RateLimit_UNKNOWN
}

func (m *RateLimit) GetRequestsPerUnit() uint32 {
	if m != nil {
		return m.RequestsPerUnit
	}
	return 0
}

type IngressRateLimit struct {
	AuthorizedHeader     string     `protobuf:"bytes,1,opt,name=authorized_header,json=authorizedHeader,proto3" json:"authorized_header,omitempty"`
	AuthorizedLimits     *RateLimit `protobuf:"bytes,2,opt,name=authorized_limits,json=authorizedLimits,proto3" json:"authorized_limits,omitempty"`
	AnonymousLimits      *RateLimit `protobuf:"bytes,3,opt,name=anonymous_limits,json=anonymousLimits,proto3" json:"anonymous_limits,omitempty"`
	XXX_NoUnkeyedLiteral struct{}   `json:"-"`
	XXX_unrecognized     []byte     `json:"-"`
	XXX_sizecache        int32      `json:"-"`
}

func (m *IngressRateLimit) Reset()         { *m = IngressRateLimit{} }
func (m *IngressRateLimit) String() string { return proto.CompactTextString(m) }
func (*IngressRateLimit) ProtoMessage()    {}
func (*IngressRateLimit) Descriptor() ([]byte, []int) {
	return fileDescriptor_e37a431d94e417ef, []int{1}
}
func (m *IngressRateLimit) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_IngressRateLimit.Unmarshal(m, b)
}
func (m *IngressRateLimit) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_IngressRateLimit.Marshal(b, m, deterministic)
}
func (m *IngressRateLimit) XXX_Merge(src proto.Message) {
	xxx_messageInfo_IngressRateLimit.Merge(m, src)
}
func (m *IngressRateLimit) XXX_Size() int {
	return xxx_messageInfo_IngressRateLimit.Size(m)
}
func (m *IngressRateLimit) XXX_DiscardUnknown() {
	xxx_messageInfo_IngressRateLimit.DiscardUnknown(m)
}

var xxx_messageInfo_IngressRateLimit proto.InternalMessageInfo

func (m *IngressRateLimit) GetAuthorizedHeader() string {
	if m != nil {
		return m.AuthorizedHeader
	}
	return ""
}

func (m *IngressRateLimit) GetAuthorizedLimits() *RateLimit {
	if m != nil {
		return m.AuthorizedLimits
	}
	return nil
}

func (m *IngressRateLimit) GetAnonymousLimits() *RateLimit {
	if m != nil {
		return m.AnonymousLimits
	}
	return nil
}

type Settings struct {
	RatelimitServerRef   *core.ResourceRef `protobuf:"bytes,1,opt,name=ratelimit_server_ref,json=ratelimitServerRef,proto3" json:"ratelimit_server_ref,omitempty"`
	XXX_NoUnkeyedLiteral struct{}          `json:"-"`
	XXX_unrecognized     []byte            `json:"-"`
	XXX_sizecache        int32             `json:"-"`
}

func (m *Settings) Reset()         { *m = Settings{} }
func (m *Settings) String() string { return proto.CompactTextString(m) }
func (*Settings) ProtoMessage()    {}
func (*Settings) Descriptor() ([]byte, []int) {
	return fileDescriptor_e37a431d94e417ef, []int{2}
}
func (m *Settings) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_Settings.Unmarshal(m, b)
}
func (m *Settings) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_Settings.Marshal(b, m, deterministic)
}
func (m *Settings) XXX_Merge(src proto.Message) {
	xxx_messageInfo_Settings.Merge(m, src)
}
func (m *Settings) XXX_Size() int {
	return xxx_messageInfo_Settings.Size(m)
}
func (m *Settings) XXX_DiscardUnknown() {
	xxx_messageInfo_Settings.DiscardUnknown(m)
}

var xxx_messageInfo_Settings proto.InternalMessageInfo

func (m *Settings) GetRatelimitServerRef() *core.ResourceRef {
	if m != nil {
		return m.RatelimitServerRef
	}
	return nil
}

func init() {
	proto.RegisterEnum("ratelimit.plugins.gloo.solo.io.RateLimit_Unit", RateLimit_Unit_name, RateLimit_Unit_value)
	proto.RegisterType((*RateLimit)(nil), "ratelimit.plugins.gloo.solo.io.RateLimit")
	proto.RegisterType((*IngressRateLimit)(nil), "ratelimit.plugins.gloo.solo.io.IngressRateLimit")
	proto.RegisterType((*Settings)(nil), "ratelimit.plugins.gloo.solo.io.Settings")
}

func init() {
	proto.RegisterFile("github.com/solo-io/solo-projects/projects/gloo/api/v1/plugins/ratelimit/ratelimit.proto", fileDescriptor_e37a431d94e417ef)
}

var fileDescriptor_e37a431d94e417ef = []byte{
	// 419 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x94, 0x92, 0xcd, 0x6e, 0xd4, 0x30,
	0x14, 0x85, 0x49, 0x27, 0xea, 0x8f, 0x47, 0x50, 0xd7, 0xea, 0x02, 0xba, 0xa8, 0xaa, 0xac, 0xca,
	0x9f, 0x23, 0x86, 0x3d, 0x12, 0xa5, 0x95, 0x5a, 0x0d, 0x64, 0xc0, 0xd3, 0x30, 0x82, 0x4d, 0x94,
	0xa6, 0x37, 0x1e, 0xd3, 0x4c, 0x6e, 0xb0, 0x9d, 0x4a, 0xf0, 0x44, 0xbc, 0x03, 0x6f, 0xc3, 0x9e,
	0x77, 0x40, 0x71, 0x34, 0x49, 0x59, 0x0c, 0x62, 0x56, 0x3e, 0x3a, 0xf6, 0xf9, 0xae, 0x8f, 0x74,
	0xc9, 0x4c, 0x2a, 0x3b, 0xaf, 0xaf, 0x78, 0x86, 0x8b, 0xd0, 0x60, 0x81, 0xcf, 0x15, 0xb6, 0x67,
	0xa5, 0xf1, 0x0b, 0x64, 0xd6, 0x84, 0x9d, 0x90, 0x05, 0x62, 0x98, 0x56, 0x2a, 0xbc, 0x7d, 0x11,
	0x56, 0x45, 0x2d, 0x55, 0x69, 0x42, 0x9d, 0x5a, 0x28, 0xd4, 0x42, 0xd9, 0x5e, 0xf1, 0x4a, 0xa3,
	0x45, 0x76, 0x78, 0xc7, 0x68, 0x1f, 0xf3, 0x06, 0xc0, 0x1b, 0x38, 0x57, 0x78, 0xf0, 0x6c, 0xd5,
	0xe0, 0x1b, 0x65, 0x97, 0x53, 0x34, 0xe4, 0x2d, 0xed, 0x60, 0x5f, 0xa2, 0x44, 0x27, 0xc3, 0x46,
	0xb5, 0x6e, 0xf0, 0xd3, 0x23, 0x3b, 0x22, 0xb5, 0xf0, 0xb6, 0x19, 0xc3, 0x4e, 0x88, 0x5f, 0x97,
	0xca, 0x3e, 0xf4, 0x8e, 0xbc, 0xe3, 0x07, 0x23, 0xce, 0xff, 0xfd, 0x01, 0xde, 0x05, 0x79, 0x5c,
	0x2a, 0x2b, 0x5c, 0x96, 0x3d, 0x21, 0x7b, 0x1a, 0xbe, 0xd6, 0x60, 0xac, 0x49, 0x2a, 0xd0, 0x89,
	0x03, 0x6e, 0x1c, 0x79, 0xc7, 0xf7, 0xc5, 0xee, 0xf2, 0xe2, 0x3d, 0xe8, 0x26, 0x11, 0xbc, 0x22,
	0x7e, 0x73, 0xb2, 0x21, 0xd9, 0x8a, 0xa3, 0x71, 0x34, 0x99, 0x45, 0xf4, 0x1e, 0x23, 0x64, 0x73,
	0x7a, 0xf6, 0x66, 0x12, 0x9d, 0x52, 0xaf, 0xd1, 0xef, 0x2e, 0xa2, 0xf8, 0xf2, 0x8c, 0x6e, 0xb0,
	0x6d, 0xe2, 0x9f, 0x4f, 0x62, 0x41, 0x07, 0x6c, 0x8b, 0x0c, 0x4e, 0x5f, 0x7f, 0xa2, 0x7e, 0xf0,
	0xdb, 0x23, 0xf4, 0xa2, 0x94, 0x1a, 0x8c, 0xe9, 0x4b, 0x3c, 0x25, 0x7b, 0x69, 0x6d, 0xe7, 0xa8,
	0xd5, 0x77, 0xb8, 0x4e, 0xe6, 0x90, 0x5e, 0x83, 0x76, 0x8d, 0x76, 0x04, 0xed, 0x2f, 0xce, 0x9d,
	0xcf, 0x3e, 0xfe, 0xf5, 0xd8, 0x75, 0x35, 0xee, 0xb7, 0xc3, 0xd1, 0xe3, 0xff, 0xae, 0x7f, 0x97,
	0xeb, 0x0c, 0xc3, 0x2e, 0x09, 0x4d, 0x4b, 0x2c, 0xbf, 0x2d, 0xb0, 0x36, 0x4b, 0xec, 0x60, 0x5d,
	0xec, 0x6e, 0x87, 0x68, 0xa9, 0xc1, 0x8c, 0x6c, 0x4f, 0xc1, 0x5a, 0x55, 0x4a, 0xc3, 0xc6, 0x64,
	0xbf, 0x03, 0x25, 0x06, 0xf4, 0x2d, 0xe8, 0x44, 0x43, 0xee, 0x9a, 0x0e, 0x47, 0x8f, 0x78, 0x86,
	0x1a, 0x7a, 0x26, 0x18, 0xac, 0x75, 0x06, 0x02, 0x72, 0xc1, 0xba, 0xd8, 0xd4, 0xa5, 0x04, 0xe4,
	0x27, 0x1f, 0x7e, 0xfc, 0x3a, 0xf4, 0x3e, 0x8f, 0xd7, 0xdc, 0xe4, 0xea, 0x46, 0xae, 0xdc, 0xe6,
	0xab, 0x4d, 0xb7, 0x60, 0x2f, 0xff, 0x04, 0x00, 0x00, 0xff, 0xff, 0x55, 0xb6, 0x2f, 0xf6, 0x1f,
	0x03, 0x00, 0x00,
}

func (this *RateLimit) Equal(that interface{}) bool {
	if that == nil {
		return this == nil
	}

	that1, ok := that.(*RateLimit)
	if !ok {
		that2, ok := that.(RateLimit)
		if ok {
			that1 = &that2
		} else {
			return false
		}
	}
	if that1 == nil {
		return this == nil
	} else if this == nil {
		return false
	}
	if this.Unit != that1.Unit {
		return false
	}
	if this.RequestsPerUnit != that1.RequestsPerUnit {
		return false
	}
	if !bytes.Equal(this.XXX_unrecognized, that1.XXX_unrecognized) {
		return false
	}
	return true
}
func (this *IngressRateLimit) Equal(that interface{}) bool {
	if that == nil {
		return this == nil
	}

	that1, ok := that.(*IngressRateLimit)
	if !ok {
		that2, ok := that.(IngressRateLimit)
		if ok {
			that1 = &that2
		} else {
			return false
		}
	}
	if that1 == nil {
		return this == nil
	} else if this == nil {
		return false
	}
	if this.AuthorizedHeader != that1.AuthorizedHeader {
		return false
	}
	if !this.AuthorizedLimits.Equal(that1.AuthorizedLimits) {
		return false
	}
	if !this.AnonymousLimits.Equal(that1.AnonymousLimits) {
		return false
	}
	if !bytes.Equal(this.XXX_unrecognized, that1.XXX_unrecognized) {
		return false
	}
	return true
}
func (this *Settings) Equal(that interface{}) bool {
	if that == nil {
		return this == nil
	}

	that1, ok := that.(*Settings)
	if !ok {
		that2, ok := that.(Settings)
		if ok {
			that1 = &that2
		} else {
			return false
		}
	}
	if that1 == nil {
		return this == nil
	} else if this == nil {
		return false
	}
	if !this.RatelimitServerRef.Equal(that1.RatelimitServerRef) {
		return false
	}
	if !bytes.Equal(this.XXX_unrecognized, that1.XXX_unrecognized) {
		return false
	}
	return true
}
