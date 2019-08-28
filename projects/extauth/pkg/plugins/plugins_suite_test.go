package plugins

import (
	"testing"

	. "github.com/onsi/ginkgo"
	. "github.com/onsi/gomega"
)

func TestPlugins(t *testing.T) {
	RegisterFailHandler(Fail)
	RunSpecs(t, "ExtAuth Plugin Loader Suite")
}
