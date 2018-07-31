package file_test

import (
	. "github.com/onsi/ginkgo"
	. "github.com/onsi/gomega"

	. "github.com/solo-io/solo-kit/pkg/api/v1/thirdparty/file"

	"io/ioutil"
	"os"

	"github.com/solo-io/solo-kit/pkg/api/v1/thirdparty"
	"github.com/solo-io/solo-kit/test/helpers"
)

var _ = Describe("File ThirdPartyResource Clients", func() {
	var (
		tmpDir string
		//artifacts thirdparty.ThirdPartyResourceClient
		artifacts, secrets thirdparty.ThirdPartyResourceClient
	)
	BeforeEach(func() {
		var err error
		tmpDir, err = ioutil.TempDir("", "resource_test")
		Expect(err).NotTo(HaveOccurred())
		artifacts = NewArtifactClient(tmpDir)
		secrets = NewSecretClient(tmpDir)
	})
	AfterEach(func() {
		os.RemoveAll(tmpDir)
	})
	It("CRUDs secrets", func() {
		helpers.TestThirdPartyClient("", secrets, &thirdparty.Secret{})
	})
	It("CRUDs artifacts", func() {
		helpers.TestThirdPartyClient("", artifacts, &thirdparty.Artifact{})
	})
})
