# Overview

This directory contains the Kubernetes Gateway API conformance tests. The conformance_test.go
has been manually vendored from the upstream kuberentes-sigs/gateway-api repository to make it
easier to maintain and run the tests.

## Updating the conformance test

When the upstream conformance test is updated, the vendored version in this directory should be updated as well. Similarly, when Gloo adopts newer k8s.io/gateway-api versions, we should be sure to update the conformance test to match the new version.

To do this, copy the updated conformance_test.go file from the upstream repository to this directory. For example:

```bash
cp $(go list -json -m sigs.k8s.io/gateway-api | jq -r '.Dir')/conformance/conformance_test.go > test/conformance/conformance_test.go
```
