package options

import (
	"sort"

	"github.com/solo-io/gloo/projects/gloo/cli/pkg/cmd/options"
	"github.com/solo-io/solo-kit/pkg/api/v1/resources/core"
	"github.com/solo-io/solo-projects/projects/gloo/pkg/api/v1/plugins/extauth"
	"github.com/solo-io/solo-projects/projects/gloo/pkg/api/v1/plugins/ratelimit"
)

type EditOptions struct {
	*options.Options
	ResourceVersion string
}

type ExtraOptions struct {
	RateLimit RateLimit
	OIDCAuth  OIDCAuth
}

var RateLimit_TimeUnits = func() []string {
	var vals []string
	for _, name := range ratelimit.RateLimit_Unit_name {
		vals = append(vals, name)
	}
	sort.Strings(vals)
	return vals
}()

type RateLimit struct {
	Enable              bool
	TimeUnit            string
	RequestsPerTimeUnit uint32
}

type Dashboard struct {
}

type OIDCAuth struct {
	Enable bool

	// Include all options from the vhost extension
	extauth.OAuth
}

type OIDCSettings struct {
	ExtAtuhServerUpstreamRef core.ResourceRef
}
