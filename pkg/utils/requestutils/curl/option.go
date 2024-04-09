package curl

import (
	"net/http"
	"strings"
)

// Option represents an option for a curl request.
type Option func(config *requestConfig)

// VerboseOutput returns the Option to emit a verbose output for the  curl request
// https://curl.se/docs/manpage.html#-v
func VerboseOutput() Option {
	return func(config *requestConfig) {
		config.verbose = true
	}
}

// IgnoreServerCert returns the Option to ignore the server certificate in the curl request
// https://curl.se/docs/manpage.html#-k
func IgnoreServerCert() Option {
	return func(config *requestConfig) {
		config.ignoreServerCert = true
	}
}

// Silent returns the Option to enable silent mode for the curl request
// https://curl.se/docs/manpage.html#-s
func Silent() Option {
	return func(config *requestConfig) {
		config.silent = true
	}
}

// WithHeadersOnly returns the Option to only return headers with the curl response
// https://curl.se/docs/manpage.html#-I
func WithHeadersOnly() Option {
	return func(config *requestConfig) {
		config.headersOnly = true
	}
}

// WithConnectionTimeout returns the Option to set a connection timeout on the curl request
// https://curl.se/docs/manpage.html#--connect-timeout
// https://curl.se/docs/manpage.html#-m
func WithConnectionTimeout(seconds int) Option {
	return func(config *requestConfig) {
		config.connectionTimeout = seconds
	}
}

// WithMethod returns the Option to set the method for the curl request
// https://curl.se/docs/manpage.html#-X
func WithMethod(method string) Option {
	return func(config *requestConfig) {
		config.method = method
	}
}

// WithPort returns the Option to set the port for the curl request
func WithPort(port int) Option {
	return func(config *requestConfig) {
		config.port = port
	}
}

// WithHost returns the Option to set the host for the curl request
func WithHost(host string) Option {
	return func(config *requestConfig) {
		config.host = host
	}
}

// WithSni returns the Option to configure a custom address to connect to
// https://curl.se/docs/manpage.html#--resolve
func WithSni(sni string) Option {
	return func(config *requestConfig) {
		config.sni = sni
	}
}

// WithCaFile returns the Option to configure the certificate file used to verify the peer
// https://curl.se/docs/manpage.html#--cacert
func WithCaFile(caFile string) Option {
	return func(config *requestConfig) {
		config.caFile = caFile
	}
}

// WithPath returns the Option to configure the path of the curl request
// The provided path is expected to not contain a leading `/`,
// so if it is provided, it will be trimmed
func WithPath(path string) Option {
	return func(config *requestConfig) {
		config.path = strings.TrimPrefix(path, "/")
	}
}

// WithQueryParameters returns the Option to configure the query parameters of the curl request
func WithQueryParameters(parameters map[string]string) Option {
	return func(config *requestConfig) {
		config.queryParameters = parameters
	}
}

// WithRetries returns the Option to configure the retries for the curl request
func WithRetries(retry, retryDelay, retryMaxTime int) Option {
	return func(config *requestConfig) {
		config.retry = retry
		config.retryDelay = retryDelay
		config.retryMaxTime = retryMaxTime
	}
}

// WithoutRetries returns the Option to disable retries for the curl request
func WithoutRetries() Option {
	return func(config *requestConfig) {
		WithRetries(0, -1, 0)(config)
	}
}

// WithPostBody returns the Option to configure a curl request to execute a post request with the provided json body
func WithPostBody(body string) Option {
	return func(config *requestConfig) {
		WithMethod(http.MethodPost)(config)
		WithBody(body)(config)
		WithContentType("application/json")(config)
	}
}

// WithBody returns the Option to configure the body for a curl request
// https://curl.se/docs/manpage.html#-d
func WithBody(body string) Option {
	return func(config *requestConfig) {
		config.body = body
	}
}

// WithContentType returns the Option to configure the Content-Type header for the curl request
func WithContentType(contentType string) Option {
	return func(config *requestConfig) {
		WithHeader("Content-Type", contentType)(config)
	}
}

// WithHostHeader returns the Option to configure the Host header for the curl request
func WithHostHeader(host string) Option {
	return func(config *requestConfig) {
		WithHeader("Host", host)(config)
	}
}

// WithHeader returns the Option to configure a header for the curl request
// https://curl.se/docs/manpage.html#-H
func WithHeader(key, value string) Option {
	return func(config *requestConfig) {
		config.headers[key] = value
	}
}

// WithScheme returns the Option to configure the scheme for the curl request
func WithScheme(scheme string) Option {
	return func(config *requestConfig) {
		config.scheme = scheme
	}
}

// WithArgs allows developers to append arbitrary args to the curl request
// This should mainly be used for debugging purposes. If there is an argument that the current Option
// set doesn't yet support, it should be added explicitly, to make it easier for developers to utilize
func WithArgs(args []string) Option {
	return func(config *requestConfig) {
		config.additionalArgs = args
	}
}
