// Code generated by protoc-gen-solo-kit. DO NOT EDIT.

package v1

import (
	"context"
	"sync"
	"time"

	. "github.com/onsi/ginkgo"
	. "github.com/onsi/gomega"
	"github.com/solo-io/solo-kit/pkg/api/v1/clients"
	"github.com/solo-io/solo-kit/pkg/api/v1/clients/factory"
	"github.com/solo-io/solo-kit/pkg/api/v1/clients/memory"
)

var _ = Describe("ApiEventLoop", func() {
	var (
		namespace string
		emitter   ApiEmitter
		err       error
	)

	BeforeEach(func() {

		changeSetClientFactory := &factory.MemoryResourceClientFactory{
			Cache: memory.NewInMemoryResourceCache(),
		}
		changeSetClient, err := NewChangeSetClient(changeSetClientFactory)
		Expect(err).NotTo(HaveOccurred())

		emitter = NewApiEmitter(changeSetClient)
	})
	It("runs sync function on a new snapshot", func() {
		_, err = emitter.ChangeSet().Write(NewChangeSet(namespace, "jerry"), clients.WriteOpts{})
		Expect(err).NotTo(HaveOccurred())
		sync := &mockApiSyncer{}
		el := NewApiEventLoop(emitter, sync)
		_, err := el.Run([]string{namespace}, clients.WatchOpts{})
		Expect(err).NotTo(HaveOccurred())
		Eventually(sync.Synced, 5*time.Second).Should(BeTrue())
	})
})

type mockApiSyncer struct {
	synced bool
	mutex  sync.Mutex
}

func (s *mockApiSyncer) Synced() bool {
	s.mutex.Lock()
	defer s.mutex.Unlock()
	return s.synced
}

func (s *mockApiSyncer) Sync(ctx context.Context, snap *ApiSnapshot) error {
	s.mutex.Lock()
	s.synced = true
	s.mutex.Unlock()
	return nil
}
