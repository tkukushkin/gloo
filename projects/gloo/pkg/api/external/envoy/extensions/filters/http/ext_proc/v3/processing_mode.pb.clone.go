// Code generated by protoc-gen-ext. DO NOT EDIT.
// source: github.com/solo-io/gloo/projects/gloo/api/external/envoy/extensions/filters/http/ext_proc/v3/processing_mode.proto

package v3

import (
	"bytes"
	"encoding/binary"
	"errors"
	"fmt"
	"strings"

	"github.com/solo-io/protoc-gen-ext/pkg/clone"
	"google.golang.org/protobuf/proto"
)

// ensure the imports are used
var (
	_ = errors.New("")
	_ = fmt.Print
	_ = binary.LittleEndian
	_ = bytes.Compare
	_ = strings.Compare
	_ = clone.Cloner(nil)
	_ = proto.Message(nil)
)

// Clone function
func (m *ProcessingMode) Clone() proto.Message {
	var target *ProcessingMode
	if m == nil {
		return target
	}
	target = &ProcessingMode{}

	target.RequestHeaderMode = m.GetRequestHeaderMode()

	target.ResponseHeaderMode = m.GetResponseHeaderMode()

	target.RequestBodyMode = m.GetRequestBodyMode()

	target.ResponseBodyMode = m.GetResponseBodyMode()

	target.RequestTrailerMode = m.GetRequestTrailerMode()

	target.ResponseTrailerMode = m.GetResponseTrailerMode()

	return target
}
