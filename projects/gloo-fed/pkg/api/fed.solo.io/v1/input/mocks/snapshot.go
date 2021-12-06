// Code generated by MockGen. DO NOT EDIT.
// Source: ./snapshot.go

// Package mock_input is a generated GoMock package.
package mock_input

import (
	context "context"
	reflect "reflect"

	gomock "github.com/golang/mock/gomock"
	v1sets "github.com/solo-io/external-apis/pkg/api/k8s/apps/v1/sets"
	v1sets0 "github.com/solo-io/external-apis/pkg/api/k8s/core/v1/sets"
	multicluster "github.com/solo-io/skv2/pkg/multicluster"
	resource "github.com/solo-io/skv2/pkg/resource"
	v1sets1 "github.com/solo-io/solo-apis/pkg/api/enterprise.gloo.solo.io/v1/sets"
	v1sets2 "github.com/solo-io/solo-apis/pkg/api/gateway.solo.io/v1/sets"
	v1sets3 "github.com/solo-io/solo-apis/pkg/api/gloo.solo.io/v1/sets"
	v1alpha1sets "github.com/solo-io/solo-apis/pkg/api/ratelimit.solo.io/v1alpha1/sets"
	input "github.com/solo-io/solo-projects/projects/gloo-fed/pkg/api/fed.solo.io/v1/input"
	schema "k8s.io/apimachinery/pkg/runtime/schema"
	client "sigs.k8s.io/controller-runtime/pkg/client"
)

// MockSnapshot is a mock of Snapshot interface.
type MockSnapshot struct {
	ctrl     *gomock.Controller
	recorder *MockSnapshotMockRecorder
}

// MockSnapshotMockRecorder is the mock recorder for MockSnapshot.
type MockSnapshotMockRecorder struct {
	mock *MockSnapshot
}

// NewMockSnapshot creates a new mock instance.
func NewMockSnapshot(ctrl *gomock.Controller) *MockSnapshot {
	mock := &MockSnapshot{ctrl: ctrl}
	mock.recorder = &MockSnapshotMockRecorder{mock}
	return mock
}

// EXPECT returns an object that allows the caller to indicate expected use.
func (m *MockSnapshot) EXPECT() *MockSnapshotMockRecorder {
	return m.recorder
}

// AuthConfigs mocks base method.
func (m *MockSnapshot) AuthConfigs() v1sets1.AuthConfigSet {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "AuthConfigs")
	ret0, _ := ret[0].(v1sets1.AuthConfigSet)
	return ret0
}

// AuthConfigs indicates an expected call of AuthConfigs.
func (mr *MockSnapshotMockRecorder) AuthConfigs() *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "AuthConfigs", reflect.TypeOf((*MockSnapshot)(nil).AuthConfigs))
}

// Clone mocks base method.
func (m *MockSnapshot) Clone() input.Snapshot {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "Clone")
	ret0, _ := ret[0].(input.Snapshot)
	return ret0
}

// Clone indicates an expected call of Clone.
func (mr *MockSnapshotMockRecorder) Clone() *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "Clone", reflect.TypeOf((*MockSnapshot)(nil).Clone))
}

// DaemonSets mocks base method.
func (m *MockSnapshot) DaemonSets() v1sets.DaemonSetSet {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "DaemonSets")
	ret0, _ := ret[0].(v1sets.DaemonSetSet)
	return ret0
}

// DaemonSets indicates an expected call of DaemonSets.
func (mr *MockSnapshotMockRecorder) DaemonSets() *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "DaemonSets", reflect.TypeOf((*MockSnapshot)(nil).DaemonSets))
}

// Deployments mocks base method.
func (m *MockSnapshot) Deployments() v1sets.DeploymentSet {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "Deployments")
	ret0, _ := ret[0].(v1sets.DeploymentSet)
	return ret0
}

// Deployments indicates an expected call of Deployments.
func (mr *MockSnapshotMockRecorder) Deployments() *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "Deployments", reflect.TypeOf((*MockSnapshot)(nil).Deployments))
}

// ForEachObject mocks base method.
func (m *MockSnapshot) ForEachObject(handleObject func(string, schema.GroupVersionKind, resource.TypedObject)) {
	m.ctrl.T.Helper()
	m.ctrl.Call(m, "ForEachObject", handleObject)
}

// ForEachObject indicates an expected call of ForEachObject.
func (mr *MockSnapshotMockRecorder) ForEachObject(handleObject interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "ForEachObject", reflect.TypeOf((*MockSnapshot)(nil).ForEachObject), handleObject)
}

// Gateways mocks base method.
func (m *MockSnapshot) Gateways() v1sets2.GatewaySet {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "Gateways")
	ret0, _ := ret[0].(v1sets2.GatewaySet)
	return ret0
}

// Gateways indicates an expected call of Gateways.
func (mr *MockSnapshotMockRecorder) Gateways() *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "Gateways", reflect.TypeOf((*MockSnapshot)(nil).Gateways))
}

// Generic mocks base method.
func (m *MockSnapshot) Generic() resource.ClusterSnapshot {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "Generic")
	ret0, _ := ret[0].(resource.ClusterSnapshot)
	return ret0
}

// Generic indicates an expected call of Generic.
func (mr *MockSnapshotMockRecorder) Generic() *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "Generic", reflect.TypeOf((*MockSnapshot)(nil).Generic))
}

// MarshalJSON mocks base method.
func (m *MockSnapshot) MarshalJSON() ([]byte, error) {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "MarshalJSON")
	ret0, _ := ret[0].([]byte)
	ret1, _ := ret[1].(error)
	return ret0, ret1
}

// MarshalJSON indicates an expected call of MarshalJSON.
func (mr *MockSnapshotMockRecorder) MarshalJSON() *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "MarshalJSON", reflect.TypeOf((*MockSnapshot)(nil).MarshalJSON))
}

// Pods mocks base method.
func (m *MockSnapshot) Pods() v1sets0.PodSet {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "Pods")
	ret0, _ := ret[0].(v1sets0.PodSet)
	return ret0
}

// Pods indicates an expected call of Pods.
func (mr *MockSnapshotMockRecorder) Pods() *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "Pods", reflect.TypeOf((*MockSnapshot)(nil).Pods))
}

// Proxies mocks base method.
func (m *MockSnapshot) Proxies() v1sets3.ProxySet {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "Proxies")
	ret0, _ := ret[0].(v1sets3.ProxySet)
	return ret0
}

// Proxies indicates an expected call of Proxies.
func (mr *MockSnapshotMockRecorder) Proxies() *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "Proxies", reflect.TypeOf((*MockSnapshot)(nil).Proxies))
}

// RateLimitConfigs mocks base method.
func (m *MockSnapshot) RateLimitConfigs() v1alpha1sets.RateLimitConfigSet {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "RateLimitConfigs")
	ret0, _ := ret[0].(v1alpha1sets.RateLimitConfigSet)
	return ret0
}

// RateLimitConfigs indicates an expected call of RateLimitConfigs.
func (mr *MockSnapshotMockRecorder) RateLimitConfigs() *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "RateLimitConfigs", reflect.TypeOf((*MockSnapshot)(nil).RateLimitConfigs))
}

// RouteTables mocks base method.
func (m *MockSnapshot) RouteTables() v1sets2.RouteTableSet {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "RouteTables")
	ret0, _ := ret[0].(v1sets2.RouteTableSet)
	return ret0
}

// RouteTables indicates an expected call of RouteTables.
func (mr *MockSnapshotMockRecorder) RouteTables() *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "RouteTables", reflect.TypeOf((*MockSnapshot)(nil).RouteTables))
}

// Services mocks base method.
func (m *MockSnapshot) Services() v1sets0.ServiceSet {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "Services")
	ret0, _ := ret[0].(v1sets0.ServiceSet)
	return ret0
}

// Services indicates an expected call of Services.
func (mr *MockSnapshotMockRecorder) Services() *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "Services", reflect.TypeOf((*MockSnapshot)(nil).Services))
}

// Settings mocks base method.
func (m *MockSnapshot) Settings() v1sets3.SettingsSet {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "Settings")
	ret0, _ := ret[0].(v1sets3.SettingsSet)
	return ret0
}

// Settings indicates an expected call of Settings.
func (mr *MockSnapshotMockRecorder) Settings() *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "Settings", reflect.TypeOf((*MockSnapshot)(nil).Settings))
}

// SyncStatuses mocks base method.
func (m *MockSnapshot) SyncStatuses(ctx context.Context, c client.Client, opts input.SyncStatusOptions) error {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "SyncStatuses", ctx, c, opts)
	ret0, _ := ret[0].(error)
	return ret0
}

// SyncStatuses indicates an expected call of SyncStatuses.
func (mr *MockSnapshotMockRecorder) SyncStatuses(ctx, c, opts interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "SyncStatuses", reflect.TypeOf((*MockSnapshot)(nil).SyncStatuses), ctx, c, opts)
}

// SyncStatusesMultiCluster mocks base method.
func (m *MockSnapshot) SyncStatusesMultiCluster(ctx context.Context, mcClient multicluster.Client, opts input.SyncStatusOptions) error {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "SyncStatusesMultiCluster", ctx, mcClient, opts)
	ret0, _ := ret[0].(error)
	return ret0
}

// SyncStatusesMultiCluster indicates an expected call of SyncStatusesMultiCluster.
func (mr *MockSnapshotMockRecorder) SyncStatusesMultiCluster(ctx, mcClient, opts interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "SyncStatusesMultiCluster", reflect.TypeOf((*MockSnapshot)(nil).SyncStatusesMultiCluster), ctx, mcClient, opts)
}

// UpstreamGroups mocks base method.
func (m *MockSnapshot) UpstreamGroups() v1sets3.UpstreamGroupSet {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "UpstreamGroups")
	ret0, _ := ret[0].(v1sets3.UpstreamGroupSet)
	return ret0
}

// UpstreamGroups indicates an expected call of UpstreamGroups.
func (mr *MockSnapshotMockRecorder) UpstreamGroups() *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "UpstreamGroups", reflect.TypeOf((*MockSnapshot)(nil).UpstreamGroups))
}

// Upstreams mocks base method.
func (m *MockSnapshot) Upstreams() v1sets3.UpstreamSet {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "Upstreams")
	ret0, _ := ret[0].(v1sets3.UpstreamSet)
	return ret0
}

// Upstreams indicates an expected call of Upstreams.
func (mr *MockSnapshotMockRecorder) Upstreams() *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "Upstreams", reflect.TypeOf((*MockSnapshot)(nil).Upstreams))
}

// VirtualServices mocks base method.
func (m *MockSnapshot) VirtualServices() v1sets2.VirtualServiceSet {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "VirtualServices")
	ret0, _ := ret[0].(v1sets2.VirtualServiceSet)
	return ret0
}

// VirtualServices indicates an expected call of VirtualServices.
func (mr *MockSnapshotMockRecorder) VirtualServices() *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "VirtualServices", reflect.TypeOf((*MockSnapshot)(nil).VirtualServices))
}

// MockBuilder is a mock of Builder interface.
type MockBuilder struct {
	ctrl     *gomock.Controller
	recorder *MockBuilderMockRecorder
}

// MockBuilderMockRecorder is the mock recorder for MockBuilder.
type MockBuilderMockRecorder struct {
	mock *MockBuilder
}

// NewMockBuilder creates a new mock instance.
func NewMockBuilder(ctrl *gomock.Controller) *MockBuilder {
	mock := &MockBuilder{ctrl: ctrl}
	mock.recorder = &MockBuilderMockRecorder{mock}
	return mock
}

// EXPECT returns an object that allows the caller to indicate expected use.
func (m *MockBuilder) EXPECT() *MockBuilderMockRecorder {
	return m.recorder
}

// BuildSnapshot mocks base method.
func (m *MockBuilder) BuildSnapshot(ctx context.Context, name string, opts input.BuildOptions) (input.Snapshot, error) {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "BuildSnapshot", ctx, name, opts)
	ret0, _ := ret[0].(input.Snapshot)
	ret1, _ := ret[1].(error)
	return ret0, ret1
}

// BuildSnapshot indicates an expected call of BuildSnapshot.
func (mr *MockBuilderMockRecorder) BuildSnapshot(ctx, name, opts interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "BuildSnapshot", reflect.TypeOf((*MockBuilder)(nil).BuildSnapshot), ctx, name, opts)
}
