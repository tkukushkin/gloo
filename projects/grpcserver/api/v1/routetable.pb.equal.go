// Code generated by protoc-gen-ext. DO NOT EDIT.
// source: github.com/solo-io/solo-projects/projects/grpcserver/api/v1/routetable.proto

package v1

import (
	"bytes"
	"encoding/binary"
	"errors"
	"fmt"
	"strings"

	"github.com/golang/protobuf/proto"
	equality "github.com/solo-io/protoc-gen-ext/pkg/equality"
)

// ensure the imports are used
var (
	_ = errors.New("")
	_ = fmt.Print
	_ = binary.LittleEndian
	_ = bytes.Compare
	_ = strings.Compare
	_ = equality.Equalizer(nil)
	_ = proto.Message(nil)
)

// Equal function
func (m *RouteTableDetails) Equal(that interface{}) bool {
	if that == nil {
		return m == nil
	}

	target, ok := that.(*RouteTableDetails)
	if !ok {
		that2, ok := that.(RouteTableDetails)
		if ok {
			target = &that2
		} else {
			return false
		}
	}
	if target == nil {
		return m == nil
	} else if m == nil {
		return false
	}

	if h, ok := interface{}(m.GetRouteTable()).(equality.Equalizer); ok {
		if !h.Equal(target.GetRouteTable()) {
			return false
		}
	} else {
		if !proto.Equal(m.GetRouteTable(), target.GetRouteTable()) {
			return false
		}
	}

	if h, ok := interface{}(m.GetRaw()).(equality.Equalizer); ok {
		if !h.Equal(target.GetRaw()) {
			return false
		}
	} else {
		if !proto.Equal(m.GetRaw(), target.GetRaw()) {
			return false
		}
	}

	return true
}

// Equal function
func (m *GetRouteTableRequest) Equal(that interface{}) bool {
	if that == nil {
		return m == nil
	}

	target, ok := that.(*GetRouteTableRequest)
	if !ok {
		that2, ok := that.(GetRouteTableRequest)
		if ok {
			target = &that2
		} else {
			return false
		}
	}
	if target == nil {
		return m == nil
	} else if m == nil {
		return false
	}

	if h, ok := interface{}(m.GetRef()).(equality.Equalizer); ok {
		if !h.Equal(target.GetRef()) {
			return false
		}
	} else {
		if !proto.Equal(m.GetRef(), target.GetRef()) {
			return false
		}
	}

	return true
}

// Equal function
func (m *GetRouteTableResponse) Equal(that interface{}) bool {
	if that == nil {
		return m == nil
	}

	target, ok := that.(*GetRouteTableResponse)
	if !ok {
		that2, ok := that.(GetRouteTableResponse)
		if ok {
			target = &that2
		} else {
			return false
		}
	}
	if target == nil {
		return m == nil
	} else if m == nil {
		return false
	}

	if h, ok := interface{}(m.GetRouteTableDetails()).(equality.Equalizer); ok {
		if !h.Equal(target.GetRouteTableDetails()) {
			return false
		}
	} else {
		if !proto.Equal(m.GetRouteTableDetails(), target.GetRouteTableDetails()) {
			return false
		}
	}

	return true
}

// Equal function
func (m *ListRouteTablesRequest) Equal(that interface{}) bool {
	if that == nil {
		return m == nil
	}

	target, ok := that.(*ListRouteTablesRequest)
	if !ok {
		that2, ok := that.(ListRouteTablesRequest)
		if ok {
			target = &that2
		} else {
			return false
		}
	}
	if target == nil {
		return m == nil
	} else if m == nil {
		return false
	}

	return true
}

// Equal function
func (m *ListRouteTablesResponse) Equal(that interface{}) bool {
	if that == nil {
		return m == nil
	}

	target, ok := that.(*ListRouteTablesResponse)
	if !ok {
		that2, ok := that.(ListRouteTablesResponse)
		if ok {
			target = &that2
		} else {
			return false
		}
	}
	if target == nil {
		return m == nil
	} else if m == nil {
		return false
	}

	if len(m.GetRouteTableDetails()) != len(target.GetRouteTableDetails()) {
		return false
	}
	for idx, v := range m.GetRouteTableDetails() {

		if h, ok := interface{}(v).(equality.Equalizer); ok {
			if !h.Equal(target.GetRouteTableDetails()[idx]) {
				return false
			}
		} else {
			if !proto.Equal(v, target.GetRouteTableDetails()[idx]) {
				return false
			}
		}

	}

	return true
}

// Equal function
func (m *CreateRouteTableRequest) Equal(that interface{}) bool {
	if that == nil {
		return m == nil
	}

	target, ok := that.(*CreateRouteTableRequest)
	if !ok {
		that2, ok := that.(CreateRouteTableRequest)
		if ok {
			target = &that2
		} else {
			return false
		}
	}
	if target == nil {
		return m == nil
	} else if m == nil {
		return false
	}

	if h, ok := interface{}(m.GetRouteTable()).(equality.Equalizer); ok {
		if !h.Equal(target.GetRouteTable()) {
			return false
		}
	} else {
		if !proto.Equal(m.GetRouteTable(), target.GetRouteTable()) {
			return false
		}
	}

	return true
}

// Equal function
func (m *CreateRouteTableResponse) Equal(that interface{}) bool {
	if that == nil {
		return m == nil
	}

	target, ok := that.(*CreateRouteTableResponse)
	if !ok {
		that2, ok := that.(CreateRouteTableResponse)
		if ok {
			target = &that2
		} else {
			return false
		}
	}
	if target == nil {
		return m == nil
	} else if m == nil {
		return false
	}

	if h, ok := interface{}(m.GetRouteTableDetails()).(equality.Equalizer); ok {
		if !h.Equal(target.GetRouteTableDetails()) {
			return false
		}
	} else {
		if !proto.Equal(m.GetRouteTableDetails(), target.GetRouteTableDetails()) {
			return false
		}
	}

	return true
}

// Equal function
func (m *UpdateRouteTableRequest) Equal(that interface{}) bool {
	if that == nil {
		return m == nil
	}

	target, ok := that.(*UpdateRouteTableRequest)
	if !ok {
		that2, ok := that.(UpdateRouteTableRequest)
		if ok {
			target = &that2
		} else {
			return false
		}
	}
	if target == nil {
		return m == nil
	} else if m == nil {
		return false
	}

	if h, ok := interface{}(m.GetRouteTable()).(equality.Equalizer); ok {
		if !h.Equal(target.GetRouteTable()) {
			return false
		}
	} else {
		if !proto.Equal(m.GetRouteTable(), target.GetRouteTable()) {
			return false
		}
	}

	return true
}

// Equal function
func (m *UpdateRouteTableYamlRequest) Equal(that interface{}) bool {
	if that == nil {
		return m == nil
	}

	target, ok := that.(*UpdateRouteTableYamlRequest)
	if !ok {
		that2, ok := that.(UpdateRouteTableYamlRequest)
		if ok {
			target = &that2
		} else {
			return false
		}
	}
	if target == nil {
		return m == nil
	} else if m == nil {
		return false
	}

	if h, ok := interface{}(m.GetEditedYamlData()).(equality.Equalizer); ok {
		if !h.Equal(target.GetEditedYamlData()) {
			return false
		}
	} else {
		if !proto.Equal(m.GetEditedYamlData(), target.GetEditedYamlData()) {
			return false
		}
	}

	return true
}

// Equal function
func (m *UpdateRouteTableResponse) Equal(that interface{}) bool {
	if that == nil {
		return m == nil
	}

	target, ok := that.(*UpdateRouteTableResponse)
	if !ok {
		that2, ok := that.(UpdateRouteTableResponse)
		if ok {
			target = &that2
		} else {
			return false
		}
	}
	if target == nil {
		return m == nil
	} else if m == nil {
		return false
	}

	if h, ok := interface{}(m.GetRouteTableDetails()).(equality.Equalizer); ok {
		if !h.Equal(target.GetRouteTableDetails()) {
			return false
		}
	} else {
		if !proto.Equal(m.GetRouteTableDetails(), target.GetRouteTableDetails()) {
			return false
		}
	}

	return true
}

// Equal function
func (m *DeleteRouteTableRequest) Equal(that interface{}) bool {
	if that == nil {
		return m == nil
	}

	target, ok := that.(*DeleteRouteTableRequest)
	if !ok {
		that2, ok := that.(DeleteRouteTableRequest)
		if ok {
			target = &that2
		} else {
			return false
		}
	}
	if target == nil {
		return m == nil
	} else if m == nil {
		return false
	}

	if h, ok := interface{}(m.GetRef()).(equality.Equalizer); ok {
		if !h.Equal(target.GetRef()) {
			return false
		}
	} else {
		if !proto.Equal(m.GetRef(), target.GetRef()) {
			return false
		}
	}

	return true
}

// Equal function
func (m *DeleteRouteTableResponse) Equal(that interface{}) bool {
	if that == nil {
		return m == nil
	}

	target, ok := that.(*DeleteRouteTableResponse)
	if !ok {
		that2, ok := that.(DeleteRouteTableResponse)
		if ok {
			target = &that2
		} else {
			return false
		}
	}
	if target == nil {
		return m == nil
	} else if m == nil {
		return false
	}

	return true
}
