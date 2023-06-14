package e2e

import (
	"context"
	"fmt"

	"github.com/golang/protobuf/ptypes/duration"

	ratelimit2 "github.com/solo-io/gloo/projects/gloo/pkg/api/v1/enterprise/options/ratelimit"
	"github.com/solo-io/solo-projects/test/services/ratelimit"

	"github.com/solo-io/gloo/test/services/envoy"

	"github.com/solo-io/gloo/test/services"
	"github.com/solo-io/gloo/test/testutils"
	glooe_services "github.com/solo-io/solo-projects/test/services"

	"github.com/solo-io/solo-kit/pkg/api/v1/resources/core"

	"github.com/onsi/ginkgo/v2"

	. "github.com/onsi/gomega"
	v1 "github.com/solo-io/gloo/projects/gateway/pkg/api/v1"
	gatewaydefaults "github.com/solo-io/gloo/projects/gateway/pkg/defaults"
	gloov1 "github.com/solo-io/gloo/projects/gloo/pkg/api/v1"
	"github.com/solo-io/gloo/projects/gloo/pkg/api/v1/gloosnapshot"
	"github.com/solo-io/gloo/projects/gloo/pkg/defaults"
	"github.com/solo-io/gloo/test/helpers"
	"github.com/solo-io/gloo/test/v1helpers"
	"github.com/solo-io/solo-kit/pkg/api/v1/clients"
	"github.com/solo-io/solo-kit/pkg/api/v1/resources"
)

// This file is (almost) a mirror of the Open Source implementation of TestContext
// In the future, we would like to consolidate these two implementations, but for now
// we want to keep them separate to avoid breaking changes to the Open Source implementation

const (
	WriteNamespace            = defaults.GlooSystem
	DefaultVirtualServiceName = "vs-test"
	DefaultRouteName          = "route-test"
	DefaultGatewayName        = gatewaydefaults.GatewayProxyName
	DefaultProxyName          = gatewaydefaults.GatewayProxyName
	// DefaultHost defines the Host header that should be used to route traffic to the
	// default VirtualService that the TestContext creates
	// To make our tests more explicit we define VirtualServices with an explicit set
	// of domains (which match the `Host` header of a request), and DefaultHost
	// is the domain we use by default
	DefaultHost = "test.com"
)

var (
	envoyRole = fmt.Sprintf("%v~%v", WriteNamespace, DefaultProxyName)
)

type TestContextFactory struct {
	EnvoyFactory     envoy.Factory
	RateLimitFactory *ratelimit.Factory
}

func (f *TestContextFactory) NewTestContext(testRequirements ...testutils.Requirement) *TestContext {
	// Skip or Fail tests which do not satisfy the provided requirements
	testutils.ValidateRequirementsAndNotifyGinkgo(testRequirements...)

	return &TestContext{
		envoyInstance:         f.EnvoyFactory.NewInstance(),
		testUpstreamGenerator: v1helpers.NewTestHttpUpstream,
	}
}

func (f *TestContextFactory) NewTestContextWithRateLimit(testRequirements ...testutils.Requirement) *TestContextWithRateLimit {
	testContext := f.NewTestContext(testRequirements...)

	return &TestContextWithRateLimit{
		TestContext:       testContext,
		rateLimitInstance: f.RateLimitFactory.NewInstance(testContext.EnvoyInstance().GlooAddr),
	}
}

// TestContext represents the aggregate set of configuration needed to run a single e2e test
// It is intended to remove some boilerplate setup/teardown of tests out of the test themselves
// to ensure that tests are easier to read and maintain since they only contain the resource changes
// that we are validating
type TestContext struct {
	ctx           context.Context
	cancel        context.CancelFunc
	envoyInstance *envoy.Instance

	runOptions  *services.RunOptions
	testClients services.TestClients

	testUpstream          *v1helpers.TestUpstream
	testUpstreamGenerator func(ctx context.Context, addr string) *v1helpers.TestUpstream

	resourcesToCreate *gloosnapshot.ApiSnapshot
}

func (c *TestContext) BeforeEach() {
	ginkgo.By("TestContext.BeforeEach: Setting up default configuration")
	c.ctx, c.cancel = context.WithCancel(context.Background())

	c.testUpstream = c.testUpstreamGenerator(c.ctx, c.EnvoyInstance().LocalAddr())

	c.runOptions = &services.RunOptions{
		NsToWrite: WriteNamespace,
		NsToWatch: []string{"default", WriteNamespace},
		WhatToRun: services.What{
			DisableGateway: false,
			DisableFds:     true,
			DisableUds:     true,
		},
	}

	vsToTestUpstream := helpers.NewVirtualServiceBuilder().
		WithName(DefaultVirtualServiceName).
		WithNamespace(WriteNamespace).
		WithDomain(DefaultHost).
		WithRoutePrefixMatcher(DefaultRouteName, "/").
		WithRouteActionToUpstream(DefaultRouteName, c.testUpstream.Upstream).
		Build()

	// The set of resources that these tests will generate
	// Individual tests may modify these resources, but we provide the default resources
	// required to form a Proxy and handle requests
	c.resourcesToCreate = &gloosnapshot.ApiSnapshot{
		Gateways: v1.GatewayList{
			gatewaydefaults.DefaultGateway(WriteNamespace),
		},
		VirtualServices: v1.VirtualServiceList{
			vsToTestUpstream,
		},
		Upstreams: gloov1.UpstreamList{
			c.testUpstream.Upstream,
		},
	}
}

func (c *TestContext) AfterEach() {
	ginkgo.By("TestContext.AfterEach: Stopping Envoy and cancelling test context")
	// Stop Envoy
	c.envoyInstance.Clean()

	c.cancel()
}

func (c *TestContext) JustBeforeEach() {
	ginkgo.By("TestContext.JustBeforeEach: Running Gloo and Envoy, writing resource snapshot to storage")

	// Run Gloo
	c.testClients = glooe_services.RunGlooGatewayUdsFds(c.Ctx(), c.runOptions)

	// Run Envoy
	err := c.envoyInstance.RunWithRole(envoyRole, c.testClients.GlooPort)
	ExpectWithOffset(1, err).NotTo(HaveOccurred())

	// Create Resources
	err = c.testClients.WriteSnapshot(c.ctx, c.resourcesToCreate)
	ExpectWithOffset(1, err).NotTo(HaveOccurred())

	// Wait for a proxy to be accepted
	c.EventuallyProxyAccepted()
}

func (c *TestContext) JustAfterEach() {
	// We do not need to clean up the Snapshot that was written in the JustBeforeEach
	// That is because each test uses its own InMemoryCache
}

// SetRunSettings can be used to modify the runtime Settings object for a test
// This should be called after the TestContext.BeforeEach (when the default settings are applied)
// and before the TestContext.JustBeforeEach (when the settings are consumed)
func (c *TestContext) SetRunSettings(settings *gloov1.Settings) {
	c.runOptions.Settings = settings
}

// SetRunServices can be used to modify the services (gloo, fds, uds) which will run for a test
// This should be called after the TestContext.BeforeEach (when the default services are applied)
// and before the TestContext.JustBeforeEach (when the services are run)
func (c *TestContext) SetRunServices(services services.What) {
	c.runOptions.WhatToRun = services
}

// Ctx returns the Context maintained by the TestContext
// The Context is cancelled during the AfterEach portion of tests
func (c *TestContext) Ctx() context.Context {
	return c.ctx
}

// ResourcesToCreate returns the ApiSnapshot of resources the TestContext maintains
// This snapshot is what is written to storage during the JustBeforeEach portion
// We return a reference to the object, so that individual tests can modify the snapshot
// before we write it to storage
func (c *TestContext) ResourcesToCreate() *gloosnapshot.ApiSnapshot {
	return c.resourcesToCreate
}

// EnvoyInstance returns the wrapper for the running instance of Envoy that this test is using
// It contains utility methods to easily inspect the live configuration and statistics for the instance
func (c *TestContext) EnvoyInstance() *envoy.Instance {
	return c.envoyInstance
}

// TestUpstream returns the TestUpstream object that the TestContext built
// A TestUpstream is used to run an echo server and define the Gloo Upstream object to route to it
func (c *TestContext) TestUpstream() *v1helpers.TestUpstream {
	return c.testUpstream
}

// TestClients returns the set of resource clients that can be used to perform CRUD operations
// on resources used by these tests
// Instead of using the resource clients directly, we recommend placing resources on the
// ResourcesToCreate object, and letting the TestContext handle the lifecycle of those objects
func (c *TestContext) TestClients() services.TestClients {
	return c.testClients
}

// ReadDefaultProxy returns the Proxy object that will be generated by the resources in the TestContext
func (c *TestContext) ReadDefaultProxy() (*gloov1.Proxy, error) {
	return c.testClients.ProxyClient.Read(WriteNamespace, DefaultProxyName, clients.ReadOpts{Ctx: c.ctx})
}

// PatchDefaultVirtualService mutates the existing VirtualService generated by the TestContext
func (c *TestContext) PatchDefaultVirtualService(mutator func(*v1.VirtualService) *v1.VirtualService) {
	err := helpers.PatchResourceWithOffset(
		1,
		c.ctx,
		&core.ResourceRef{
			Name:      DefaultVirtualServiceName,
			Namespace: WriteNamespace,
		},
		func(resource resources.Resource) resources.Resource {
			return mutator(resource.(*v1.VirtualService))
		},
		c.testClients.VirtualServiceClient.BaseClient(),
	)
	ExpectWithOffset(1, err).NotTo(HaveOccurred())
}

// PatchDefaultGateway mutates the existing Gateway generated by the TestContext
func (c *TestContext) PatchDefaultGateway(mutator func(*v1.Gateway) *v1.Gateway) {
	err := helpers.PatchResourceWithOffset(
		1,
		c.ctx,
		&core.ResourceRef{
			Name:      DefaultGatewayName,
			Namespace: WriteNamespace,
		},
		func(resource resources.Resource) resources.Resource {
			return mutator(resource.(*v1.Gateway))
		},
		c.testClients.GatewayClient.BaseClient(),
	)
	ExpectWithOffset(1, err).NotTo(HaveOccurred())
}

// PatchDefaultUpstream mutates the existing Upstream generated by the TestContext
func (c *TestContext) PatchDefaultUpstream(mutator func(*gloov1.Upstream) *gloov1.Upstream) {
	usRef := c.testUpstream.Upstream.GetMetadata().Ref()
	err := helpers.PatchResourceWithOffset(
		1,
		c.ctx,
		usRef,
		func(resource resources.Resource) resources.Resource {
			return mutator(resource.(*gloov1.Upstream))
		},
		c.testClients.UpstreamClient.BaseClient(),
	)
	ExpectWithOffset(1, err).NotTo(HaveOccurred())
}

// EventuallyProxyAccepted is useful for tests that rely on changing an existing configuration.
func (c *TestContext) EventuallyProxyAccepted() {
	// Wait for a proxy to be accepted
	helpers.EventuallyResourceAccepted(func() (resources.InputResource, error) {
		return c.testClients.ProxyClient.Read(WriteNamespace, DefaultProxyName, clients.ReadOpts{Ctx: c.ctx})
	})
}

// GetHttpRequestBuilder returns an HttpRequestBuilder to easily build http requests used in e2e tests
func (c *TestContext) GetHttpRequestBuilder() *testutils.HttpRequestBuilder {
	return testutils.DefaultRequestBuilder().
		WithScheme("http").
		WithHostname("localhost").
		WithContentType("application/octet-stream").
		WithPort(defaults.HttpPort). // When running Envoy locally, we port-forward this port to accept http traffic locally
		WithHost(DefaultHost)        // The default Virtual Service routes traffic only with a particular Host header
}

// GetHttpsRequestBuilder returns an HttpRequestBuilder to easily build https requests used in e2e tests
func (c *TestContext) GetHttpsRequestBuilder() *testutils.HttpRequestBuilder {
	return testutils.DefaultRequestBuilder().
		WithScheme("https").
		WithHostname("localhost").
		WithContentType("application/octet-stream").
		WithPort(defaults.HttpsPort). // When running Envoy locally, we port-forward this port to accept https traffic locally
		WithHost(DefaultHost)         // The default Virtual Service routes traffic only with a particular Host header
}

// TestContextWithRateLimit represents the aggregate set of configuration needed to run a single e2e test
// using an external auth service
type TestContextWithRateLimit struct {
	*TestContext

	rateLimitInstance *ratelimit.Instance
}

func (r *TestContextWithRateLimit) BeforeEach() {
	r.TestContext.BeforeEach()

	serverUpstream := r.RateLimitInstance().GetServerUpstream()

	// Define some default values for the RateLimitServer Settings
	r.TestContext.SetRunSettings(&gloov1.Settings{
		RatelimitServer: &ratelimit2.Settings{
			RatelimitServerRef: serverUpstream.GetMetadata().Ref(),
			DenyOnFail:         true, // ensures ConsistentlyNotRateLimited() calls will not pass unless server is healthy
			RequestTimeout: &duration.Duration{
				Seconds: 2,
			},
		},
	})

	r.resourcesToCreate.Upstreams = append(r.resourcesToCreate.Upstreams, serverUpstream)
}

func (r *TestContextWithRateLimit) JustBeforeEach() {
	r.TestContext.JustBeforeEach()

	// The RateLimitService will only report healthy once it connects to Gloo
	// Therefore we must run this after starting Gloo in the testContext.JustBeforeEach
	r.runRateLimitService()
}

func (r *TestContextWithRateLimit) UpdateRateLimitSettings(mutator func(*ratelimit2.Settings) *ratelimit2.Settings) {
	r.SetRunSettings(&gloov1.Settings{
		RatelimitServer: mutator(r.runOptions.Settings.RatelimitServer),
	})
}

// RateLimitInstance returns an Instance of the RateLimit Service
func (r *TestContextWithRateLimit) RateLimitInstance() *ratelimit.Instance {
	return r.rateLimitInstance
}

// runRateLimitService starts running the RateLimit Service
func (r *TestContextWithRateLimit) runRateLimitService() {
	ginkgo.By("TestContextWithRateLimit: Running RateLimit")

	// The EnvoyInstance is similar to the RateLimitService, in that it receives its configuration from Gloo via xDS.
	// As a result, we ensure the RateLimitService uses the same port for connecting to Gloo
	ExpectWithOffset(1, r.EnvoyInstance().Port).NotTo(BeZero(), "EnvoyInstance.Port must be set before running RateLimitService")

	go func(testCtx context.Context) {
		defer ginkgo.GinkgoRecover()

		r.rateLimitInstance.RunWithXds(testCtx, r.EnvoyInstance().Port)
	}(r.Ctx())

	r.rateLimitInstance.EventuallyIsHealthy()
}
