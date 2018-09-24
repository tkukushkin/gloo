package main

import (
	"flag"
	"os"
	"path/filepath"

	"github.com/solo-io/solo-kit/pkg/utils/log"
	"github.com/solo-io/solo-kit/projects/gateway/pkg/setup"
	gloosetup "github.com/solo-io/solo-kit/projects/gloo/pkg/setup"
)

func main() {
	dir := flag.String("dir", "gloo", "directory for config")
	flag.Parse()
	os.MkdirAll(filepath.Join(*dir, "settings"), 0755)
	if err := run(*dir); err != nil {
		log.Fatalf("err in main: %v", err.Error())
	}
}

func run(dir string) error {
	errs := make(chan error)
	go func() {
		errs <- runGloo(dir)
	}()
	go func() {
		errs <- runGateway(dir)
	}()
	return <-errs
}

func runGloo(dir string) error {
	return gloosetup.Main(dir)
}

func runGateway(dir string) error {
	return setup.Main(dir)
}
