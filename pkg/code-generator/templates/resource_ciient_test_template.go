package templates

import (
	"text/template"
)

var ResourceClientTestTemplate = template.Must(template.New("resource_client_test").Funcs(funcs).Parse(`package {{ .Project.PackageName }}

import (
	"time"

	. "github.com/onsi/ginkgo"
	. "github.com/onsi/gomega"
	"github.com/solo-io/solo-kit/pkg/api/v1/clients/factory"
	"github.com/solo-io/solo-kit/test/helpers"
	"github.com/solo-io/solo-kit/pkg/api/v1/clients"
	"github.com/solo-io/solo-kit/pkg/api/v1/resources"
	"github.com/solo-io/solo-kit/pkg/errors"
	"github.com/solo-io/solo-kit/pkg/api/v1/resources/core"
	"github.com/solo-io/solo-kit/test/tests/typed"
)

var _ = Describe("{{ .Name }}Client", func() {
	var (
		namespace string
	)
	for _, test := range []typed.ResourceClientTester{
		&typed.KubeRcTester{Crd: {{ .Name }}Crd},
		&typed.ConsulRcTester{},
		&typed.FileRcTester{},
		&typed.MemoryRcTester{},
	{{- if .HasData }}
		&typed.VaultRcTester{},
		&typed.KubeSecretRcTester{},
		&typed.KubeConfigMapRcTester{},
	{{- end}}
	} {
		Context("resource client backed by "+test.Description(), func() {
			var (
				client {{ .Name }}Client
				err    error
			)
			BeforeEach(func() {
				namespace = helpers.RandString(6)
				factoryOpts := test.Setup(namespace)
				client, err = New{{ .Name }}Client(factory.NewResourceClientFactory(factoryOpts))
				Expect(err).NotTo(HaveOccurred())
			})
			AfterEach(func() {
				test.Teardown(namespace)
			})
			It("CRUDs {{ .Name }}s", func() {
				{{ .Name }}ClientTest(namespace, client)
			})
		})
	}
})

func {{ .Name }}ClientTest(namespace string, client {{ .Name }}Client) {
	err := client.Register()
	Expect(err).NotTo(HaveOccurred())

	name := "foo"
	input := New{{ .Name }}(namespace, name)
	input.Metadata.Namespace = namespace
	r1, err := client.Write(input, clients.WriteOpts{})
	Expect(err).NotTo(HaveOccurred())

	_, err = client.Write(input, clients.WriteOpts{})
	Expect(err).To(HaveOccurred())
	Expect(errors.IsExist(err)).To(BeTrue())

	Expect(r1).To(BeAssignableToTypeOf(&{{ .Name }}{}))
	Expect(r1.GetMetadata().Name).To(Equal(name))
	Expect(r1.GetMetadata().Namespace).To(Equal(namespace))
	Expect(r1.Metadata.ResourceVersion).NotTo(Equal(input.Metadata.ResourceVersion))
	Expect(r1.Metadata.Ref()).To(Equal(input.Metadata.Ref()))
	{{- range .Fields }}
		{{- if (not (eq .Name "metadata")) }}
	Expect(r1.{{ upper_camel .Name }}).To(Equal(input.{{ upper_camel .Name }}))
		{{- end }}
	{{- end }}

	_, err = client.Write(input, clients.WriteOpts{
		OverwriteExisting: true,
	})
	Expect(err).To(HaveOccurred())

	input.Metadata.ResourceVersion = r1.GetMetadata().ResourceVersion
	r1, err = client.Write(input, clients.WriteOpts{
		OverwriteExisting: true,
	})
	Expect(err).NotTo(HaveOccurred())

	read, err := client.Read(namespace, name, clients.ReadOpts{})
	Expect(err).NotTo(HaveOccurred())
	Expect(read).To(Equal(r1))

	_, err = client.Read("doesntexist", name, clients.ReadOpts{})
	Expect(err).To(HaveOccurred())
	Expect(errors.IsNotExist(err)).To(BeTrue())

	name = "boo"
	input = &{{ .Name }}{}

	input.Metadata = core.Metadata{
		Name:      name,
		Namespace: namespace,
	}

	r2, err := client.Write(input, clients.WriteOpts{})
	Expect(err).NotTo(HaveOccurred())

	list, err := client.List(namespace, clients.ListOpts{})
	Expect(err).NotTo(HaveOccurred())
	Expect(list).To(ContainElement(r1))
	Expect(list).To(ContainElement(r2))

	err = client.Delete(namespace, "adsfw", clients.DeleteOpts{})
	Expect(err).To(HaveOccurred())
	Expect(errors.IsNotExist(err)).To(BeTrue())

	err = client.Delete(namespace, "adsfw", clients.DeleteOpts{
		IgnoreNotExist: true,
	})
	Expect(err).NotTo(HaveOccurred())

	err = client.Delete(namespace, r2.GetMetadata().Name, clients.DeleteOpts{})
	Expect(err).NotTo(HaveOccurred())
	list, err = client.List(namespace, clients.ListOpts{})
	Expect(err).NotTo(HaveOccurred())
	Expect(list).To(ContainElement(r1))
	Expect(list).NotTo(ContainElement(r2))

	w, errs, err := client.Watch(namespace, clients.WatchOpts{
		RefreshRate: time.Hour,
	})
	Expect(err).NotTo(HaveOccurred())

	var r3 resources.Resource
	wait := make(chan struct{})
	go func() {
		defer close(wait)
		defer GinkgoRecover()

		resources.UpdateMetadata(r2, func(meta *core.Metadata) {
			meta.ResourceVersion = ""
		})
		r2, err = client.Write(r2, clients.WriteOpts{})
		Expect(err).NotTo(HaveOccurred())

		name = "goo"
		input = &{{ .Name }}{}
		Expect(err).NotTo(HaveOccurred())
		input.Metadata = core.Metadata{
			Name:      name,
			Namespace: namespace,
		}

		r3, err = client.Write(input, clients.WriteOpts{})
		Expect(err).NotTo(HaveOccurred())
	}()
	<-wait

	select {
	case err := <-errs:
		Expect(err).NotTo(HaveOccurred())
	case list = <-w:
	case <-time.After(time.Millisecond * 5):
		Fail("expected a message in channel")
	}

drain:
	for {
		select {
		case list = <-w:
		case err := <-errs:
			Expect(err).NotTo(HaveOccurred())
		case <-time.After(time.Millisecond * 500):
			break drain
		}
	}

	Expect(list).To(ContainElement(r1))
	Expect(list).To(ContainElement(r2))
	Expect(list).To(ContainElement(r3))
}
`))
