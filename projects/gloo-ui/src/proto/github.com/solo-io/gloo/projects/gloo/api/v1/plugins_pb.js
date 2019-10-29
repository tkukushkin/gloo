/* eslint-disable */
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var google_protobuf_struct_pb = require('google-protobuf/google/protobuf/struct_pb.js');
var gogoproto_gogo_pb = require('../../../../../../gogo/protobuf/gogoproto/gogo_pb.js');
var github_com_solo$io_gloo_projects_gloo_api_v1_ssl_pb = require('../../../../../../../github.com/solo-io/gloo/projects/gloo/api/v1/ssl_pb.js');
var github_com_solo$io_gloo_projects_gloo_api_v1_extensions_pb = require('../../../../../../../github.com/solo-io/gloo/projects/gloo/api/v1/extensions_pb.js');
var github_com_solo$io_gloo_projects_gloo_api_v1_circuit_breaker_pb = require('../../../../../../../github.com/solo-io/gloo/projects/gloo/api/v1/circuit_breaker_pb.js');
var github_com_solo$io_gloo_projects_gloo_api_v1_load_balancer_pb = require('../../../../../../../github.com/solo-io/gloo/projects/gloo/api/v1/load_balancer_pb.js');
var github_com_solo$io_gloo_projects_gloo_api_v1_connection_pb = require('../../../../../../../github.com/solo-io/gloo/projects/gloo/api/v1/connection_pb.js');
var github_com_solo$io_gloo_projects_gloo_api_v1_plugins_aws_aws_pb = require('../../../../../../../github.com/solo-io/gloo/projects/gloo/api/v1/plugins/aws/aws_pb.js');
var github_com_solo$io_gloo_projects_gloo_api_v1_plugins_aws_ec2_aws_ec2_pb = require('../../../../../../../github.com/solo-io/gloo/projects/gloo/api/v1/plugins/aws/ec2/aws_ec2_pb.js');
var github_com_solo$io_gloo_projects_gloo_api_v1_plugins_cors_cors_pb = require('../../../../../../../github.com/solo-io/gloo/projects/gloo/api/v1/plugins/cors/cors_pb.js');
var github_com_solo$io_gloo_projects_gloo_api_v1_plugins_rest_rest_pb = require('../../../../../../../github.com/solo-io/gloo/projects/gloo/api/v1/plugins/rest/rest_pb.js');
var github_com_solo$io_gloo_projects_gloo_api_v1_plugins_grpc_grpc_pb = require('../../../../../../../github.com/solo-io/gloo/projects/gloo/api/v1/plugins/grpc/grpc_pb.js');
var github_com_solo$io_gloo_projects_gloo_api_v1_plugins_als_als_pb = require('../../../../../../../github.com/solo-io/gloo/projects/gloo/api/v1/plugins/als/als_pb.js');
var github_com_solo$io_gloo_projects_gloo_api_v1_plugins_grpc_web_grpc_web_pb = require('../../../../../../../github.com/solo-io/gloo/projects/gloo/api/v1/plugins/grpc_web/grpc_web_pb.js');
var github_com_solo$io_gloo_projects_gloo_api_v1_plugins_hcm_hcm_pb = require('../../../../../../../github.com/solo-io/gloo/projects/gloo/api/v1/plugins/hcm/hcm_pb.js');
var github_com_solo$io_gloo_projects_gloo_api_v1_plugins_lbhash_lbhash_pb = require('../../../../../../../github.com/solo-io/gloo/projects/gloo/api/v1/plugins/lbhash/lbhash_pb.js');
var github_com_solo$io_gloo_projects_gloo_api_v1_plugins_shadowing_shadowing_pb = require('../../../../../../../github.com/solo-io/gloo/projects/gloo/api/v1/plugins/shadowing/shadowing_pb.js');
var github_com_solo$io_gloo_projects_gloo_api_v1_plugins_tcp_tcp_pb = require('../../../../../../../github.com/solo-io/gloo/projects/gloo/api/v1/plugins/tcp/tcp_pb.js');
var github_com_solo$io_gloo_projects_gloo_api_v1_plugins_tracing_tracing_pb = require('../../../../../../../github.com/solo-io/gloo/projects/gloo/api/v1/plugins/tracing/tracing_pb.js');
var github_com_solo$io_gloo_projects_gloo_api_v1_plugins_azure_azure_pb = require('../../../../../../../github.com/solo-io/gloo/projects/gloo/api/v1/plugins/azure/azure_pb.js');
var github_com_solo$io_gloo_projects_gloo_api_v1_plugins_consul_consul_pb = require('../../../../../../../github.com/solo-io/gloo/projects/gloo/api/v1/plugins/consul/consul_pb.js');
var github_com_solo$io_gloo_projects_gloo_api_v1_plugins_kubernetes_kubernetes_pb = require('../../../../../../../github.com/solo-io/gloo/projects/gloo/api/v1/plugins/kubernetes/kubernetes_pb.js');
var github_com_solo$io_gloo_projects_gloo_api_v1_plugins_retries_retries_pb = require('../../../../../../../github.com/solo-io/gloo/projects/gloo/api/v1/plugins/retries/retries_pb.js');
var github_com_solo$io_gloo_projects_gloo_api_v1_plugins_static_static_pb = require('../../../../../../../github.com/solo-io/gloo/projects/gloo/api/v1/plugins/static/static_pb.js');
var github_com_solo$io_gloo_projects_gloo_api_v1_plugins_pipe_pipe_pb = require('../../../../../../../github.com/solo-io/gloo/projects/gloo/api/v1/plugins/pipe/pipe_pb.js');
var github_com_solo$io_gloo_projects_gloo_api_v1_plugins_stats_stats_pb = require('../../../../../../../github.com/solo-io/gloo/projects/gloo/api/v1/plugins/stats/stats_pb.js');
var github_com_solo$io_gloo_projects_gloo_api_v1_plugins_faultinjection_fault_pb = require('../../../../../../../github.com/solo-io/gloo/projects/gloo/api/v1/plugins/faultinjection/fault_pb.js');
var github_com_solo$io_gloo_projects_gloo_api_v1_plugins_headers_headers_pb = require('../../../../../../../github.com/solo-io/gloo/projects/gloo/api/v1/plugins/headers/headers_pb.js');
var github_com_solo$io_gloo_projects_gloo_api_v1_plugins_healthcheck_healthcheck_pb = require('../../../../../../../github.com/solo-io/gloo/projects/gloo/api/v1/plugins/healthcheck/healthcheck_pb.js');
var github_com_solo$io_gloo_projects_gloo_api_external_envoy_extensions_transformation_transformation_pb = require('../../../../../../../github.com/solo-io/gloo/projects/gloo/api/external/envoy/extensions/transformation/transformation_pb.js');
var github_com_solo$io_gloo_projects_gloo_api_v1_enterprise_plugins_extauth_v1_extauth_pb = require('../../../../../../../github.com/solo-io/gloo/projects/gloo/api/v1/enterprise/plugins/extauth/v1/extauth_pb.js');
var github_com_solo$io_gloo_projects_gloo_api_v1_enterprise_plugins_jwt_jwt_pb = require('../../../../../../../github.com/solo-io/gloo/projects/gloo/api/v1/enterprise/plugins/jwt/jwt_pb.js');
var github_com_solo$io_gloo_projects_gloo_api_v1_enterprise_plugins_ratelimit_ratelimit_pb = require('../../../../../../../github.com/solo-io/gloo/projects/gloo/api/v1/enterprise/plugins/ratelimit/ratelimit_pb.js');
var github_com_solo$io_gloo_projects_gloo_api_v1_enterprise_plugins_rbac_rbac_pb = require('../../../../../../../github.com/solo-io/gloo/projects/gloo/api/v1/enterprise/plugins/rbac/rbac_pb.js');
var github_com_solo$io_gloo_projects_gloo_api_v1_enterprise_plugins_waf_waf_pb = require('../../../../../../../github.com/solo-io/gloo/projects/gloo/api/v1/enterprise/plugins/waf/waf_pb.js');
var github_com_solo$io_gloo_projects_gloo_api_v1_enterprise_plugins_dlp_dlp_pb = require('../../../../../../../github.com/solo-io/gloo/projects/gloo/api/v1/enterprise/plugins/dlp/dlp_pb.js');
var github_com_solo$io_gloo_projects_gloo_api_external_envoy_api_v2_cluster_outlier_detection_pb = require('../../../../../../../github.com/solo-io/gloo/projects/gloo/api/external/envoy/api/v2/cluster/outlier_detection_pb.js');
var github_com_solo$io_gloo_projects_gloo_api_external_envoy_api_v2_core_health_check_pb = require('../../../../../../../github.com/solo-io/gloo/projects/gloo/api/external/envoy/api/v2/core/health_check_pb.js');
var google_protobuf_duration_pb = require('google-protobuf/google/protobuf/duration_pb.js');
var google_protobuf_wrappers_pb = require('google-protobuf/google/protobuf/wrappers_pb.js');
goog.exportSymbol('proto.gloo.solo.io.DestinationSpec', null, global);
goog.exportSymbol('proto.gloo.solo.io.HttpListenerPlugins', null, global);
goog.exportSymbol('proto.gloo.solo.io.ListenerPlugins', null, global);
goog.exportSymbol('proto.gloo.solo.io.RoutePlugins', null, global);
goog.exportSymbol('proto.gloo.solo.io.TcpListenerPlugins', null, global);
goog.exportSymbol('proto.gloo.solo.io.UpstreamSpec', null, global);
goog.exportSymbol('proto.gloo.solo.io.VirtualHostPlugins', null, global);
goog.exportSymbol('proto.gloo.solo.io.WeightedDestinationPlugins', null, global);

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.gloo.solo.io.ListenerPlugins = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.gloo.solo.io.ListenerPlugins, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.gloo.solo.io.ListenerPlugins.displayName = 'proto.gloo.solo.io.ListenerPlugins';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.gloo.solo.io.ListenerPlugins.prototype.toObject = function(opt_includeInstance) {
  return proto.gloo.solo.io.ListenerPlugins.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.gloo.solo.io.ListenerPlugins} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gloo.solo.io.ListenerPlugins.toObject = function(includeInstance, msg) {
  var f, obj = {
    accessLoggingService: (f = msg.getAccessLoggingService()) && github_com_solo$io_gloo_projects_gloo_api_v1_plugins_als_als_pb.AccessLoggingService.toObject(includeInstance, f),
    extensions: (f = msg.getExtensions()) && github_com_solo$io_gloo_projects_gloo_api_v1_extensions_pb.Extensions.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.gloo.solo.io.ListenerPlugins}
 */
proto.gloo.solo.io.ListenerPlugins.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.gloo.solo.io.ListenerPlugins;
  return proto.gloo.solo.io.ListenerPlugins.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.gloo.solo.io.ListenerPlugins} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.gloo.solo.io.ListenerPlugins}
 */
proto.gloo.solo.io.ListenerPlugins.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new github_com_solo$io_gloo_projects_gloo_api_v1_plugins_als_als_pb.AccessLoggingService;
      reader.readMessage(value,github_com_solo$io_gloo_projects_gloo_api_v1_plugins_als_als_pb.AccessLoggingService.deserializeBinaryFromReader);
      msg.setAccessLoggingService(value);
      break;
    case 2:
      var value = new github_com_solo$io_gloo_projects_gloo_api_v1_extensions_pb.Extensions;
      reader.readMessage(value,github_com_solo$io_gloo_projects_gloo_api_v1_extensions_pb.Extensions.deserializeBinaryFromReader);
      msg.setExtensions(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.gloo.solo.io.ListenerPlugins.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.gloo.solo.io.ListenerPlugins.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.gloo.solo.io.ListenerPlugins} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gloo.solo.io.ListenerPlugins.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAccessLoggingService();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      github_com_solo$io_gloo_projects_gloo_api_v1_plugins_als_als_pb.AccessLoggingService.serializeBinaryToWriter
    );
  }
  f = message.getExtensions();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      github_com_solo$io_gloo_projects_gloo_api_v1_extensions_pb.Extensions.serializeBinaryToWriter
    );
  }
};


/**
 * optional als.plugins.gloo.solo.io.AccessLoggingService access_logging_service = 1;
 * @return {?proto.als.plugins.gloo.solo.io.AccessLoggingService}
 */
proto.gloo.solo.io.ListenerPlugins.prototype.getAccessLoggingService = function() {
  return /** @type{?proto.als.plugins.gloo.solo.io.AccessLoggingService} */ (
    jspb.Message.getWrapperField(this, github_com_solo$io_gloo_projects_gloo_api_v1_plugins_als_als_pb.AccessLoggingService, 1));
};


/** @param {?proto.als.plugins.gloo.solo.io.AccessLoggingService|undefined} value */
proto.gloo.solo.io.ListenerPlugins.prototype.setAccessLoggingService = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.gloo.solo.io.ListenerPlugins.prototype.clearAccessLoggingService = function() {
  this.setAccessLoggingService(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.gloo.solo.io.ListenerPlugins.prototype.hasAccessLoggingService = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Extensions extensions = 2;
 * @return {?proto.gloo.solo.io.Extensions}
 */
proto.gloo.solo.io.ListenerPlugins.prototype.getExtensions = function() {
  return /** @type{?proto.gloo.solo.io.Extensions} */ (
    jspb.Message.getWrapperField(this, github_com_solo$io_gloo_projects_gloo_api_v1_extensions_pb.Extensions, 2));
};


/** @param {?proto.gloo.solo.io.Extensions|undefined} value */
proto.gloo.solo.io.ListenerPlugins.prototype.setExtensions = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.gloo.solo.io.ListenerPlugins.prototype.clearExtensions = function() {
  this.setExtensions(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.gloo.solo.io.ListenerPlugins.prototype.hasExtensions = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.gloo.solo.io.HttpListenerPlugins = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.gloo.solo.io.HttpListenerPlugins, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.gloo.solo.io.HttpListenerPlugins.displayName = 'proto.gloo.solo.io.HttpListenerPlugins';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.gloo.solo.io.HttpListenerPlugins.prototype.toObject = function(opt_includeInstance) {
  return proto.gloo.solo.io.HttpListenerPlugins.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.gloo.solo.io.HttpListenerPlugins} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gloo.solo.io.HttpListenerPlugins.toObject = function(includeInstance, msg) {
  var f, obj = {
    grpcWeb: (f = msg.getGrpcWeb()) && github_com_solo$io_gloo_projects_gloo_api_v1_plugins_grpc_web_grpc_web_pb.GrpcWeb.toObject(includeInstance, f),
    httpConnectionManagerSettings: (f = msg.getHttpConnectionManagerSettings()) && github_com_solo$io_gloo_projects_gloo_api_v1_plugins_hcm_hcm_pb.HttpConnectionManagerSettings.toObject(includeInstance, f),
    healthCheck: (f = msg.getHealthCheck()) && github_com_solo$io_gloo_projects_gloo_api_v1_plugins_healthcheck_healthcheck_pb.HealthCheck.toObject(includeInstance, f),
    extensions: (f = msg.getExtensions()) && github_com_solo$io_gloo_projects_gloo_api_v1_extensions_pb.Extensions.toObject(includeInstance, f),
    waf: (f = msg.getWaf()) && github_com_solo$io_gloo_projects_gloo_api_v1_enterprise_plugins_waf_waf_pb.Settings.toObject(includeInstance, f),
    dlp: (f = msg.getDlp()) && github_com_solo$io_gloo_projects_gloo_api_v1_enterprise_plugins_dlp_dlp_pb.FilterConfig.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.gloo.solo.io.HttpListenerPlugins}
 */
proto.gloo.solo.io.HttpListenerPlugins.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.gloo.solo.io.HttpListenerPlugins;
  return proto.gloo.solo.io.HttpListenerPlugins.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.gloo.solo.io.HttpListenerPlugins} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.gloo.solo.io.HttpListenerPlugins}
 */
proto.gloo.solo.io.HttpListenerPlugins.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new github_com_solo$io_gloo_projects_gloo_api_v1_plugins_grpc_web_grpc_web_pb.GrpcWeb;
      reader.readMessage(value,github_com_solo$io_gloo_projects_gloo_api_v1_plugins_grpc_web_grpc_web_pb.GrpcWeb.deserializeBinaryFromReader);
      msg.setGrpcWeb(value);
      break;
    case 2:
      var value = new github_com_solo$io_gloo_projects_gloo_api_v1_plugins_hcm_hcm_pb.HttpConnectionManagerSettings;
      reader.readMessage(value,github_com_solo$io_gloo_projects_gloo_api_v1_plugins_hcm_hcm_pb.HttpConnectionManagerSettings.deserializeBinaryFromReader);
      msg.setHttpConnectionManagerSettings(value);
      break;
    case 4:
      var value = new github_com_solo$io_gloo_projects_gloo_api_v1_plugins_healthcheck_healthcheck_pb.HealthCheck;
      reader.readMessage(value,github_com_solo$io_gloo_projects_gloo_api_v1_plugins_healthcheck_healthcheck_pb.HealthCheck.deserializeBinaryFromReader);
      msg.setHealthCheck(value);
      break;
    case 3:
      var value = new github_com_solo$io_gloo_projects_gloo_api_v1_extensions_pb.Extensions;
      reader.readMessage(value,github_com_solo$io_gloo_projects_gloo_api_v1_extensions_pb.Extensions.deserializeBinaryFromReader);
      msg.setExtensions(value);
      break;
    case 5:
      var value = new github_com_solo$io_gloo_projects_gloo_api_v1_enterprise_plugins_waf_waf_pb.Settings;
      reader.readMessage(value,github_com_solo$io_gloo_projects_gloo_api_v1_enterprise_plugins_waf_waf_pb.Settings.deserializeBinaryFromReader);
      msg.setWaf(value);
      break;
    case 6:
      var value = new github_com_solo$io_gloo_projects_gloo_api_v1_enterprise_plugins_dlp_dlp_pb.FilterConfig;
      reader.readMessage(value,github_com_solo$io_gloo_projects_gloo_api_v1_enterprise_plugins_dlp_dlp_pb.FilterConfig.deserializeBinaryFromReader);
      msg.setDlp(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.gloo.solo.io.HttpListenerPlugins.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.gloo.solo.io.HttpListenerPlugins.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.gloo.solo.io.HttpListenerPlugins} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gloo.solo.io.HttpListenerPlugins.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGrpcWeb();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      github_com_solo$io_gloo_projects_gloo_api_v1_plugins_grpc_web_grpc_web_pb.GrpcWeb.serializeBinaryToWriter
    );
  }
  f = message.getHttpConnectionManagerSettings();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      github_com_solo$io_gloo_projects_gloo_api_v1_plugins_hcm_hcm_pb.HttpConnectionManagerSettings.serializeBinaryToWriter
    );
  }
  f = message.getHealthCheck();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      github_com_solo$io_gloo_projects_gloo_api_v1_plugins_healthcheck_healthcheck_pb.HealthCheck.serializeBinaryToWriter
    );
  }
  f = message.getExtensions();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      github_com_solo$io_gloo_projects_gloo_api_v1_extensions_pb.Extensions.serializeBinaryToWriter
    );
  }
  f = message.getWaf();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      github_com_solo$io_gloo_projects_gloo_api_v1_enterprise_plugins_waf_waf_pb.Settings.serializeBinaryToWriter
    );
  }
  f = message.getDlp();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      github_com_solo$io_gloo_projects_gloo_api_v1_enterprise_plugins_dlp_dlp_pb.FilterConfig.serializeBinaryToWriter
    );
  }
};


/**
 * optional grpc_web.plugins.gloo.solo.io.GrpcWeb grpc_web = 1;
 * @return {?proto.grpc_web.plugins.gloo.solo.io.GrpcWeb}
 */
proto.gloo.solo.io.HttpListenerPlugins.prototype.getGrpcWeb = function() {
  return /** @type{?proto.grpc_web.plugins.gloo.solo.io.GrpcWeb} */ (
    jspb.Message.getWrapperField(this, github_com_solo$io_gloo_projects_gloo_api_v1_plugins_grpc_web_grpc_web_pb.GrpcWeb, 1));
};


/** @param {?proto.grpc_web.plugins.gloo.solo.io.GrpcWeb|undefined} value */
proto.gloo.solo.io.HttpListenerPlugins.prototype.setGrpcWeb = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.gloo.solo.io.HttpListenerPlugins.prototype.clearGrpcWeb = function() {
  this.setGrpcWeb(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.gloo.solo.io.HttpListenerPlugins.prototype.hasGrpcWeb = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional hcm.plugins.gloo.solo.io.HttpConnectionManagerSettings http_connection_manager_settings = 2;
 * @return {?proto.hcm.plugins.gloo.solo.io.HttpConnectionManagerSettings}
 */
proto.gloo.solo.io.HttpListenerPlugins.prototype.getHttpConnectionManagerSettings = function() {
  return /** @type{?proto.hcm.plugins.gloo.solo.io.HttpConnectionManagerSettings} */ (
    jspb.Message.getWrapperField(this, github_com_solo$io_gloo_projects_gloo_api_v1_plugins_hcm_hcm_pb.HttpConnectionManagerSettings, 2));
};


/** @param {?proto.hcm.plugins.gloo.solo.io.HttpConnectionManagerSettings|undefined} value */
proto.gloo.solo.io.HttpListenerPlugins.prototype.setHttpConnectionManagerSettings = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.gloo.solo.io.HttpListenerPlugins.prototype.clearHttpConnectionManagerSettings = function() {
  this.setHttpConnectionManagerSettings(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.gloo.solo.io.HttpListenerPlugins.prototype.hasHttpConnectionManagerSettings = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional healthcheck.plugins.gloo.solo.io.HealthCheck health_check = 4;
 * @return {?proto.healthcheck.plugins.gloo.solo.io.HealthCheck}
 */
proto.gloo.solo.io.HttpListenerPlugins.prototype.getHealthCheck = function() {
  return /** @type{?proto.healthcheck.plugins.gloo.solo.io.HealthCheck} */ (
    jspb.Message.getWrapperField(this, github_com_solo$io_gloo_projects_gloo_api_v1_plugins_healthcheck_healthcheck_pb.HealthCheck, 4));
};


/** @param {?proto.healthcheck.plugins.gloo.solo.io.HealthCheck|undefined} value */
proto.gloo.solo.io.HttpListenerPlugins.prototype.setHealthCheck = function(value) {
  jspb.Message.setWrapperField(this, 4, value);
};


proto.gloo.solo.io.HttpListenerPlugins.prototype.clearHealthCheck = function() {
  this.setHealthCheck(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.gloo.solo.io.HttpListenerPlugins.prototype.hasHealthCheck = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional Extensions extensions = 3;
 * @return {?proto.gloo.solo.io.Extensions}
 */
proto.gloo.solo.io.HttpListenerPlugins.prototype.getExtensions = function() {
  return /** @type{?proto.gloo.solo.io.Extensions} */ (
    jspb.Message.getWrapperField(this, github_com_solo$io_gloo_projects_gloo_api_v1_extensions_pb.Extensions, 3));
};


/** @param {?proto.gloo.solo.io.Extensions|undefined} value */
proto.gloo.solo.io.HttpListenerPlugins.prototype.setExtensions = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.gloo.solo.io.HttpListenerPlugins.prototype.clearExtensions = function() {
  this.setExtensions(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.gloo.solo.io.HttpListenerPlugins.prototype.hasExtensions = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional waf.plugins.gloo.solo.io.Settings waf = 5;
 * @return {?proto.waf.plugins.gloo.solo.io.Settings}
 */
proto.gloo.solo.io.HttpListenerPlugins.prototype.getWaf = function() {
  return /** @type{?proto.waf.plugins.gloo.solo.io.Settings} */ (
    jspb.Message.getWrapperField(this, github_com_solo$io_gloo_projects_gloo_api_v1_enterprise_plugins_waf_waf_pb.Settings, 5));
};


/** @param {?proto.waf.plugins.gloo.solo.io.Settings|undefined} value */
proto.gloo.solo.io.HttpListenerPlugins.prototype.setWaf = function(value) {
  jspb.Message.setWrapperField(this, 5, value);
};


proto.gloo.solo.io.HttpListenerPlugins.prototype.clearWaf = function() {
  this.setWaf(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.gloo.solo.io.HttpListenerPlugins.prototype.hasWaf = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional dlp.plugins.gloo.solo.io.FilterConfig dlp = 6;
 * @return {?proto.dlp.plugins.gloo.solo.io.FilterConfig}
 */
proto.gloo.solo.io.HttpListenerPlugins.prototype.getDlp = function() {
  return /** @type{?proto.dlp.plugins.gloo.solo.io.FilterConfig} */ (
    jspb.Message.getWrapperField(this, github_com_solo$io_gloo_projects_gloo_api_v1_enterprise_plugins_dlp_dlp_pb.FilterConfig, 6));
};


/** @param {?proto.dlp.plugins.gloo.solo.io.FilterConfig|undefined} value */
proto.gloo.solo.io.HttpListenerPlugins.prototype.setDlp = function(value) {
  jspb.Message.setWrapperField(this, 6, value);
};


proto.gloo.solo.io.HttpListenerPlugins.prototype.clearDlp = function() {
  this.setDlp(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.gloo.solo.io.HttpListenerPlugins.prototype.hasDlp = function() {
  return jspb.Message.getField(this, 6) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.gloo.solo.io.TcpListenerPlugins = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.gloo.solo.io.TcpListenerPlugins, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.gloo.solo.io.TcpListenerPlugins.displayName = 'proto.gloo.solo.io.TcpListenerPlugins';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.gloo.solo.io.TcpListenerPlugins.prototype.toObject = function(opt_includeInstance) {
  return proto.gloo.solo.io.TcpListenerPlugins.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.gloo.solo.io.TcpListenerPlugins} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gloo.solo.io.TcpListenerPlugins.toObject = function(includeInstance, msg) {
  var f, obj = {
    tcpProxySettings: (f = msg.getTcpProxySettings()) && github_com_solo$io_gloo_projects_gloo_api_v1_plugins_tcp_tcp_pb.TcpProxySettings.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.gloo.solo.io.TcpListenerPlugins}
 */
proto.gloo.solo.io.TcpListenerPlugins.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.gloo.solo.io.TcpListenerPlugins;
  return proto.gloo.solo.io.TcpListenerPlugins.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.gloo.solo.io.TcpListenerPlugins} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.gloo.solo.io.TcpListenerPlugins}
 */
proto.gloo.solo.io.TcpListenerPlugins.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 3:
      var value = new github_com_solo$io_gloo_projects_gloo_api_v1_plugins_tcp_tcp_pb.TcpProxySettings;
      reader.readMessage(value,github_com_solo$io_gloo_projects_gloo_api_v1_plugins_tcp_tcp_pb.TcpProxySettings.deserializeBinaryFromReader);
      msg.setTcpProxySettings(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.gloo.solo.io.TcpListenerPlugins.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.gloo.solo.io.TcpListenerPlugins.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.gloo.solo.io.TcpListenerPlugins} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gloo.solo.io.TcpListenerPlugins.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTcpProxySettings();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      github_com_solo$io_gloo_projects_gloo_api_v1_plugins_tcp_tcp_pb.TcpProxySettings.serializeBinaryToWriter
    );
  }
};


/**
 * optional tcp.plugins.gloo.solo.io.TcpProxySettings tcp_proxy_settings = 3;
 * @return {?proto.tcp.plugins.gloo.solo.io.TcpProxySettings}
 */
proto.gloo.solo.io.TcpListenerPlugins.prototype.getTcpProxySettings = function() {
  return /** @type{?proto.tcp.plugins.gloo.solo.io.TcpProxySettings} */ (
    jspb.Message.getWrapperField(this, github_com_solo$io_gloo_projects_gloo_api_v1_plugins_tcp_tcp_pb.TcpProxySettings, 3));
};


/** @param {?proto.tcp.plugins.gloo.solo.io.TcpProxySettings|undefined} value */
proto.gloo.solo.io.TcpListenerPlugins.prototype.setTcpProxySettings = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.gloo.solo.io.TcpListenerPlugins.prototype.clearTcpProxySettings = function() {
  this.setTcpProxySettings(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.gloo.solo.io.TcpListenerPlugins.prototype.hasTcpProxySettings = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.gloo.solo.io.VirtualHostPlugins = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.gloo.solo.io.VirtualHostPlugins, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.gloo.solo.io.VirtualHostPlugins.displayName = 'proto.gloo.solo.io.VirtualHostPlugins';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.gloo.solo.io.VirtualHostPlugins.prototype.toObject = function(opt_includeInstance) {
  return proto.gloo.solo.io.VirtualHostPlugins.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.gloo.solo.io.VirtualHostPlugins} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gloo.solo.io.VirtualHostPlugins.toObject = function(includeInstance, msg) {
  var f, obj = {
    extensions: (f = msg.getExtensions()) && github_com_solo$io_gloo_projects_gloo_api_v1_extensions_pb.Extensions.toObject(includeInstance, f),
    retries: (f = msg.getRetries()) && github_com_solo$io_gloo_projects_gloo_api_v1_plugins_retries_retries_pb.RetryPolicy.toObject(includeInstance, f),
    stats: (f = msg.getStats()) && github_com_solo$io_gloo_projects_gloo_api_v1_plugins_stats_stats_pb.Stats.toObject(includeInstance, f),
    headerManipulation: (f = msg.getHeaderManipulation()) && github_com_solo$io_gloo_projects_gloo_api_v1_plugins_headers_headers_pb.HeaderManipulation.toObject(includeInstance, f),
    cors: (f = msg.getCors()) && github_com_solo$io_gloo_projects_gloo_api_v1_plugins_cors_cors_pb.CorsPolicy.toObject(includeInstance, f),
    transformations: (f = msg.getTransformations()) && github_com_solo$io_gloo_projects_gloo_api_external_envoy_extensions_transformation_transformation_pb.RouteTransformations.toObject(includeInstance, f),
    ratelimitBasic: (f = msg.getRatelimitBasic()) && github_com_solo$io_gloo_projects_gloo_api_v1_enterprise_plugins_ratelimit_ratelimit_pb.IngressRateLimit.toObject(includeInstance, f),
    ratelimit: (f = msg.getRatelimit()) && github_com_solo$io_gloo_projects_gloo_api_v1_enterprise_plugins_ratelimit_ratelimit_pb.RateLimitVhostExtension.toObject(includeInstance, f),
    waf: (f = msg.getWaf()) && github_com_solo$io_gloo_projects_gloo_api_v1_enterprise_plugins_waf_waf_pb.Settings.toObject(includeInstance, f),
    jwt: (f = msg.getJwt()) && github_com_solo$io_gloo_projects_gloo_api_v1_enterprise_plugins_jwt_jwt_pb.VhostExtension.toObject(includeInstance, f),
    rbac: (f = msg.getRbac()) && github_com_solo$io_gloo_projects_gloo_api_v1_enterprise_plugins_rbac_rbac_pb.ExtensionSettings.toObject(includeInstance, f),
    extauth: (f = msg.getExtauth()) && github_com_solo$io_gloo_projects_gloo_api_v1_enterprise_plugins_extauth_v1_extauth_pb.ExtAuthExtension.toObject(includeInstance, f),
    dlp: (f = msg.getDlp()) && github_com_solo$io_gloo_projects_gloo_api_v1_enterprise_plugins_dlp_dlp_pb.Config.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.gloo.solo.io.VirtualHostPlugins}
 */
proto.gloo.solo.io.VirtualHostPlugins.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.gloo.solo.io.VirtualHostPlugins;
  return proto.gloo.solo.io.VirtualHostPlugins.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.gloo.solo.io.VirtualHostPlugins} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.gloo.solo.io.VirtualHostPlugins}
 */
proto.gloo.solo.io.VirtualHostPlugins.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new github_com_solo$io_gloo_projects_gloo_api_v1_extensions_pb.Extensions;
      reader.readMessage(value,github_com_solo$io_gloo_projects_gloo_api_v1_extensions_pb.Extensions.deserializeBinaryFromReader);
      msg.setExtensions(value);
      break;
    case 5:
      var value = new github_com_solo$io_gloo_projects_gloo_api_v1_plugins_retries_retries_pb.RetryPolicy;
      reader.readMessage(value,github_com_solo$io_gloo_projects_gloo_api_v1_plugins_retries_retries_pb.RetryPolicy.deserializeBinaryFromReader);
      msg.setRetries(value);
      break;
    case 10:
      var value = new github_com_solo$io_gloo_projects_gloo_api_v1_plugins_stats_stats_pb.Stats;
      reader.readMessage(value,github_com_solo$io_gloo_projects_gloo_api_v1_plugins_stats_stats_pb.Stats.deserializeBinaryFromReader);
      msg.setStats(value);
      break;
    case 2:
      var value = new github_com_solo$io_gloo_projects_gloo_api_v1_plugins_headers_headers_pb.HeaderManipulation;
      reader.readMessage(value,github_com_solo$io_gloo_projects_gloo_api_v1_plugins_headers_headers_pb.HeaderManipulation.deserializeBinaryFromReader);
      msg.setHeaderManipulation(value);
      break;
    case 3:
      var value = new github_com_solo$io_gloo_projects_gloo_api_v1_plugins_cors_cors_pb.CorsPolicy;
      reader.readMessage(value,github_com_solo$io_gloo_projects_gloo_api_v1_plugins_cors_cors_pb.CorsPolicy.deserializeBinaryFromReader);
      msg.setCors(value);
      break;
    case 4:
      var value = new github_com_solo$io_gloo_projects_gloo_api_external_envoy_extensions_transformation_transformation_pb.RouteTransformations;
      reader.readMessage(value,github_com_solo$io_gloo_projects_gloo_api_external_envoy_extensions_transformation_transformation_pb.RouteTransformations.deserializeBinaryFromReader);
      msg.setTransformations(value);
      break;
    case 6:
      var value = new github_com_solo$io_gloo_projects_gloo_api_v1_enterprise_plugins_ratelimit_ratelimit_pb.IngressRateLimit;
      reader.readMessage(value,github_com_solo$io_gloo_projects_gloo_api_v1_enterprise_plugins_ratelimit_ratelimit_pb.IngressRateLimit.deserializeBinaryFromReader);
      msg.setRatelimitBasic(value);
      break;
    case 7:
      var value = new github_com_solo$io_gloo_projects_gloo_api_v1_enterprise_plugins_ratelimit_ratelimit_pb.RateLimitVhostExtension;
      reader.readMessage(value,github_com_solo$io_gloo_projects_gloo_api_v1_enterprise_plugins_ratelimit_ratelimit_pb.RateLimitVhostExtension.deserializeBinaryFromReader);
      msg.setRatelimit(value);
      break;
    case 8:
      var value = new github_com_solo$io_gloo_projects_gloo_api_v1_enterprise_plugins_waf_waf_pb.Settings;
      reader.readMessage(value,github_com_solo$io_gloo_projects_gloo_api_v1_enterprise_plugins_waf_waf_pb.Settings.deserializeBinaryFromReader);
      msg.setWaf(value);
      break;
    case 9:
      var value = new github_com_solo$io_gloo_projects_gloo_api_v1_enterprise_plugins_jwt_jwt_pb.VhostExtension;
      reader.readMessage(value,github_com_solo$io_gloo_projects_gloo_api_v1_enterprise_plugins_jwt_jwt_pb.VhostExtension.deserializeBinaryFromReader);
      msg.setJwt(value);
      break;
    case 11:
      var value = new github_com_solo$io_gloo_projects_gloo_api_v1_enterprise_plugins_rbac_rbac_pb.ExtensionSettings;
      reader.readMessage(value,github_com_solo$io_gloo_projects_gloo_api_v1_enterprise_plugins_rbac_rbac_pb.ExtensionSettings.deserializeBinaryFromReader);
      msg.setRbac(value);
      break;
    case 12:
      var value = new github_com_solo$io_gloo_projects_gloo_api_v1_enterprise_plugins_extauth_v1_extauth_pb.ExtAuthExtension;
      reader.readMessage(value,github_com_solo$io_gloo_projects_gloo_api_v1_enterprise_plugins_extauth_v1_extauth_pb.ExtAuthExtension.deserializeBinaryFromReader);
      msg.setExtauth(value);
      break;
    case 13:
      var value = new github_com_solo$io_gloo_projects_gloo_api_v1_enterprise_plugins_dlp_dlp_pb.Config;
      reader.readMessage(value,github_com_solo$io_gloo_projects_gloo_api_v1_enterprise_plugins_dlp_dlp_pb.Config.deserializeBinaryFromReader);
      msg.setDlp(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.gloo.solo.io.VirtualHostPlugins.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.gloo.solo.io.VirtualHostPlugins.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.gloo.solo.io.VirtualHostPlugins} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gloo.solo.io.VirtualHostPlugins.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getExtensions();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      github_com_solo$io_gloo_projects_gloo_api_v1_extensions_pb.Extensions.serializeBinaryToWriter
    );
  }
  f = message.getRetries();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      github_com_solo$io_gloo_projects_gloo_api_v1_plugins_retries_retries_pb.RetryPolicy.serializeBinaryToWriter
    );
  }
  f = message.getStats();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      github_com_solo$io_gloo_projects_gloo_api_v1_plugins_stats_stats_pb.Stats.serializeBinaryToWriter
    );
  }
  f = message.getHeaderManipulation();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      github_com_solo$io_gloo_projects_gloo_api_v1_plugins_headers_headers_pb.HeaderManipulation.serializeBinaryToWriter
    );
  }
  f = message.getCors();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      github_com_solo$io_gloo_projects_gloo_api_v1_plugins_cors_cors_pb.CorsPolicy.serializeBinaryToWriter
    );
  }
  f = message.getTransformations();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      github_com_solo$io_gloo_projects_gloo_api_external_envoy_extensions_transformation_transformation_pb.RouteTransformations.serializeBinaryToWriter
    );
  }
  f = message.getRatelimitBasic();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      github_com_solo$io_gloo_projects_gloo_api_v1_enterprise_plugins_ratelimit_ratelimit_pb.IngressRateLimit.serializeBinaryToWriter
    );
  }
  f = message.getRatelimit();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      github_com_solo$io_gloo_projects_gloo_api_v1_enterprise_plugins_ratelimit_ratelimit_pb.RateLimitVhostExtension.serializeBinaryToWriter
    );
  }
  f = message.getWaf();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      github_com_solo$io_gloo_projects_gloo_api_v1_enterprise_plugins_waf_waf_pb.Settings.serializeBinaryToWriter
    );
  }
  f = message.getJwt();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      github_com_solo$io_gloo_projects_gloo_api_v1_enterprise_plugins_jwt_jwt_pb.VhostExtension.serializeBinaryToWriter
    );
  }
  f = message.getRbac();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      github_com_solo$io_gloo_projects_gloo_api_v1_enterprise_plugins_rbac_rbac_pb.ExtensionSettings.serializeBinaryToWriter
    );
  }
  f = message.getExtauth();
  if (f != null) {
    writer.writeMessage(
      12,
      f,
      github_com_solo$io_gloo_projects_gloo_api_v1_enterprise_plugins_extauth_v1_extauth_pb.ExtAuthExtension.serializeBinaryToWriter
    );
  }
  f = message.getDlp();
  if (f != null) {
    writer.writeMessage(
      13,
      f,
      github_com_solo$io_gloo_projects_gloo_api_v1_enterprise_plugins_dlp_dlp_pb.Config.serializeBinaryToWriter
    );
  }
};


/**
 * optional Extensions extensions = 1;
 * @return {?proto.gloo.solo.io.Extensions}
 */
proto.gloo.solo.io.VirtualHostPlugins.prototype.getExtensions = function() {
  return /** @type{?proto.gloo.solo.io.Extensions} */ (
    jspb.Message.getWrapperField(this, github_com_solo$io_gloo_projects_gloo_api_v1_extensions_pb.Extensions, 1));
};


/** @param {?proto.gloo.solo.io.Extensions|undefined} value */
proto.gloo.solo.io.VirtualHostPlugins.prototype.setExtensions = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.gloo.solo.io.VirtualHostPlugins.prototype.clearExtensions = function() {
  this.setExtensions(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.gloo.solo.io.VirtualHostPlugins.prototype.hasExtensions = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional retries.plugins.gloo.solo.io.RetryPolicy retries = 5;
 * @return {?proto.retries.plugins.gloo.solo.io.RetryPolicy}
 */
proto.gloo.solo.io.VirtualHostPlugins.prototype.getRetries = function() {
  return /** @type{?proto.retries.plugins.gloo.solo.io.RetryPolicy} */ (
    jspb.Message.getWrapperField(this, github_com_solo$io_gloo_projects_gloo_api_v1_plugins_retries_retries_pb.RetryPolicy, 5));
};


/** @param {?proto.retries.plugins.gloo.solo.io.RetryPolicy|undefined} value */
proto.gloo.solo.io.VirtualHostPlugins.prototype.setRetries = function(value) {
  jspb.Message.setWrapperField(this, 5, value);
};


proto.gloo.solo.io.VirtualHostPlugins.prototype.clearRetries = function() {
  this.setRetries(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.gloo.solo.io.VirtualHostPlugins.prototype.hasRetries = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional stats.plugins.gloo.solo.io.Stats stats = 10;
 * @return {?proto.stats.plugins.gloo.solo.io.Stats}
 */
proto.gloo.solo.io.VirtualHostPlugins.prototype.getStats = function() {
  return /** @type{?proto.stats.plugins.gloo.solo.io.Stats} */ (
    jspb.Message.getWrapperField(this, github_com_solo$io_gloo_projects_gloo_api_v1_plugins_stats_stats_pb.Stats, 10));
};


/** @param {?proto.stats.plugins.gloo.solo.io.Stats|undefined} value */
proto.gloo.solo.io.VirtualHostPlugins.prototype.setStats = function(value) {
  jspb.Message.setWrapperField(this, 10, value);
};


proto.gloo.solo.io.VirtualHostPlugins.prototype.clearStats = function() {
  this.setStats(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.gloo.solo.io.VirtualHostPlugins.prototype.hasStats = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional headers.plugins.gloo.solo.io.HeaderManipulation header_manipulation = 2;
 * @return {?proto.headers.plugins.gloo.solo.io.HeaderManipulation}
 */
proto.gloo.solo.io.VirtualHostPlugins.prototype.getHeaderManipulation = function() {
  return /** @type{?proto.headers.plugins.gloo.solo.io.HeaderManipulation} */ (
    jspb.Message.getWrapperField(this, github_com_solo$io_gloo_projects_gloo_api_v1_plugins_headers_headers_pb.HeaderManipulation, 2));
};


/** @param {?proto.headers.plugins.gloo.solo.io.HeaderManipulation|undefined} value */
proto.gloo.solo.io.VirtualHostPlugins.prototype.setHeaderManipulation = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.gloo.solo.io.VirtualHostPlugins.prototype.clearHeaderManipulation = function() {
  this.setHeaderManipulation(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.gloo.solo.io.VirtualHostPlugins.prototype.hasHeaderManipulation = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional cors.plugins.gloo.solo.io.CorsPolicy cors = 3;
 * @return {?proto.cors.plugins.gloo.solo.io.CorsPolicy}
 */
proto.gloo.solo.io.VirtualHostPlugins.prototype.getCors = function() {
  return /** @type{?proto.cors.plugins.gloo.solo.io.CorsPolicy} */ (
    jspb.Message.getWrapperField(this, github_com_solo$io_gloo_projects_gloo_api_v1_plugins_cors_cors_pb.CorsPolicy, 3));
};


/** @param {?proto.cors.plugins.gloo.solo.io.CorsPolicy|undefined} value */
proto.gloo.solo.io.VirtualHostPlugins.prototype.setCors = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.gloo.solo.io.VirtualHostPlugins.prototype.clearCors = function() {
  this.setCors(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.gloo.solo.io.VirtualHostPlugins.prototype.hasCors = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional envoy.api.v2.filter.http.RouteTransformations transformations = 4;
 * @return {?proto.envoy.api.v2.filter.http.RouteTransformations}
 */
proto.gloo.solo.io.VirtualHostPlugins.prototype.getTransformations = function() {
  return /** @type{?proto.envoy.api.v2.filter.http.RouteTransformations} */ (
    jspb.Message.getWrapperField(this, github_com_solo$io_gloo_projects_gloo_api_external_envoy_extensions_transformation_transformation_pb.RouteTransformations, 4));
};


/** @param {?proto.envoy.api.v2.filter.http.RouteTransformations|undefined} value */
proto.gloo.solo.io.VirtualHostPlugins.prototype.setTransformations = function(value) {
  jspb.Message.setWrapperField(this, 4, value);
};


proto.gloo.solo.io.VirtualHostPlugins.prototype.clearTransformations = function() {
  this.setTransformations(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.gloo.solo.io.VirtualHostPlugins.prototype.hasTransformations = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional ratelimit.plugins.gloo.solo.io.IngressRateLimit ratelimit_basic = 6;
 * @return {?proto.ratelimit.plugins.gloo.solo.io.IngressRateLimit}
 */
proto.gloo.solo.io.VirtualHostPlugins.prototype.getRatelimitBasic = function() {
  return /** @type{?proto.ratelimit.plugins.gloo.solo.io.IngressRateLimit} */ (
    jspb.Message.getWrapperField(this, github_com_solo$io_gloo_projects_gloo_api_v1_enterprise_plugins_ratelimit_ratelimit_pb.IngressRateLimit, 6));
};


/** @param {?proto.ratelimit.plugins.gloo.solo.io.IngressRateLimit|undefined} value */
proto.gloo.solo.io.VirtualHostPlugins.prototype.setRatelimitBasic = function(value) {
  jspb.Message.setWrapperField(this, 6, value);
};


proto.gloo.solo.io.VirtualHostPlugins.prototype.clearRatelimitBasic = function() {
  this.setRatelimitBasic(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.gloo.solo.io.VirtualHostPlugins.prototype.hasRatelimitBasic = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional ratelimit.plugins.gloo.solo.io.RateLimitVhostExtension ratelimit = 7;
 * @return {?proto.ratelimit.plugins.gloo.solo.io.RateLimitVhostExtension}
 */
proto.gloo.solo.io.VirtualHostPlugins.prototype.getRatelimit = function() {
  return /** @type{?proto.ratelimit.plugins.gloo.solo.io.RateLimitVhostExtension} */ (
    jspb.Message.getWrapperField(this, github_com_solo$io_gloo_projects_gloo_api_v1_enterprise_plugins_ratelimit_ratelimit_pb.RateLimitVhostExtension, 7));
};


/** @param {?proto.ratelimit.plugins.gloo.solo.io.RateLimitVhostExtension|undefined} value */
proto.gloo.solo.io.VirtualHostPlugins.prototype.setRatelimit = function(value) {
  jspb.Message.setWrapperField(this, 7, value);
};


proto.gloo.solo.io.VirtualHostPlugins.prototype.clearRatelimit = function() {
  this.setRatelimit(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.gloo.solo.io.VirtualHostPlugins.prototype.hasRatelimit = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional waf.plugins.gloo.solo.io.Settings waf = 8;
 * @return {?proto.waf.plugins.gloo.solo.io.Settings}
 */
proto.gloo.solo.io.VirtualHostPlugins.prototype.getWaf = function() {
  return /** @type{?proto.waf.plugins.gloo.solo.io.Settings} */ (
    jspb.Message.getWrapperField(this, github_com_solo$io_gloo_projects_gloo_api_v1_enterprise_plugins_waf_waf_pb.Settings, 8));
};


/** @param {?proto.waf.plugins.gloo.solo.io.Settings|undefined} value */
proto.gloo.solo.io.VirtualHostPlugins.prototype.setWaf = function(value) {
  jspb.Message.setWrapperField(this, 8, value);
};


proto.gloo.solo.io.VirtualHostPlugins.prototype.clearWaf = function() {
  this.setWaf(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.gloo.solo.io.VirtualHostPlugins.prototype.hasWaf = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional jwt.plugins.gloo.solo.io.VhostExtension jwt = 9;
 * @return {?proto.jwt.plugins.gloo.solo.io.VhostExtension}
 */
proto.gloo.solo.io.VirtualHostPlugins.prototype.getJwt = function() {
  return /** @type{?proto.jwt.plugins.gloo.solo.io.VhostExtension} */ (
    jspb.Message.getWrapperField(this, github_com_solo$io_gloo_projects_gloo_api_v1_enterprise_plugins_jwt_jwt_pb.VhostExtension, 9));
};


/** @param {?proto.jwt.plugins.gloo.solo.io.VhostExtension|undefined} value */
proto.gloo.solo.io.VirtualHostPlugins.prototype.setJwt = function(value) {
  jspb.Message.setWrapperField(this, 9, value);
};


proto.gloo.solo.io.VirtualHostPlugins.prototype.clearJwt = function() {
  this.setJwt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.gloo.solo.io.VirtualHostPlugins.prototype.hasJwt = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional rbac.plugins.gloo.solo.io.ExtensionSettings rbac = 11;
 * @return {?proto.rbac.plugins.gloo.solo.io.ExtensionSettings}
 */
proto.gloo.solo.io.VirtualHostPlugins.prototype.getRbac = function() {
  return /** @type{?proto.rbac.plugins.gloo.solo.io.ExtensionSettings} */ (
    jspb.Message.getWrapperField(this, github_com_solo$io_gloo_projects_gloo_api_v1_enterprise_plugins_rbac_rbac_pb.ExtensionSettings, 11));
};


/** @param {?proto.rbac.plugins.gloo.solo.io.ExtensionSettings|undefined} value */
proto.gloo.solo.io.VirtualHostPlugins.prototype.setRbac = function(value) {
  jspb.Message.setWrapperField(this, 11, value);
};


proto.gloo.solo.io.VirtualHostPlugins.prototype.clearRbac = function() {
  this.setRbac(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.gloo.solo.io.VirtualHostPlugins.prototype.hasRbac = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional enterprise.gloo.solo.io.ExtAuthExtension extauth = 12;
 * @return {?proto.enterprise.gloo.solo.io.ExtAuthExtension}
 */
proto.gloo.solo.io.VirtualHostPlugins.prototype.getExtauth = function() {
  return /** @type{?proto.enterprise.gloo.solo.io.ExtAuthExtension} */ (
    jspb.Message.getWrapperField(this, github_com_solo$io_gloo_projects_gloo_api_v1_enterprise_plugins_extauth_v1_extauth_pb.ExtAuthExtension, 12));
};


/** @param {?proto.enterprise.gloo.solo.io.ExtAuthExtension|undefined} value */
proto.gloo.solo.io.VirtualHostPlugins.prototype.setExtauth = function(value) {
  jspb.Message.setWrapperField(this, 12, value);
};


proto.gloo.solo.io.VirtualHostPlugins.prototype.clearExtauth = function() {
  this.setExtauth(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.gloo.solo.io.VirtualHostPlugins.prototype.hasExtauth = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional dlp.plugins.gloo.solo.io.Config dlp = 13;
 * @return {?proto.dlp.plugins.gloo.solo.io.Config}
 */
proto.gloo.solo.io.VirtualHostPlugins.prototype.getDlp = function() {
  return /** @type{?proto.dlp.plugins.gloo.solo.io.Config} */ (
    jspb.Message.getWrapperField(this, github_com_solo$io_gloo_projects_gloo_api_v1_enterprise_plugins_dlp_dlp_pb.Config, 13));
};


/** @param {?proto.dlp.plugins.gloo.solo.io.Config|undefined} value */
proto.gloo.solo.io.VirtualHostPlugins.prototype.setDlp = function(value) {
  jspb.Message.setWrapperField(this, 13, value);
};


proto.gloo.solo.io.VirtualHostPlugins.prototype.clearDlp = function() {
  this.setDlp(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.gloo.solo.io.VirtualHostPlugins.prototype.hasDlp = function() {
  return jspb.Message.getField(this, 13) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.gloo.solo.io.RoutePlugins = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.gloo.solo.io.RoutePlugins.oneofGroups_);
};
goog.inherits(proto.gloo.solo.io.RoutePlugins, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.gloo.solo.io.RoutePlugins.displayName = 'proto.gloo.solo.io.RoutePlugins';
}
/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.gloo.solo.io.RoutePlugins.oneofGroups_ = [[10,19]];

/**
 * @enum {number}
 */
proto.gloo.solo.io.RoutePlugins.HostRewriteTypeCase = {
  HOST_REWRITE_TYPE_NOT_SET: 0,
  HOST_REWRITE: 10,
  AUTO_HOST_REWRITE: 19
};

/**
 * @return {proto.gloo.solo.io.RoutePlugins.HostRewriteTypeCase}
 */
proto.gloo.solo.io.RoutePlugins.prototype.getHostRewriteTypeCase = function() {
  return /** @type {proto.gloo.solo.io.RoutePlugins.HostRewriteTypeCase} */(jspb.Message.computeOneofCase(this, proto.gloo.solo.io.RoutePlugins.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.gloo.solo.io.RoutePlugins.prototype.toObject = function(opt_includeInstance) {
  return proto.gloo.solo.io.RoutePlugins.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.gloo.solo.io.RoutePlugins} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gloo.solo.io.RoutePlugins.toObject = function(includeInstance, msg) {
  var f, obj = {
    transformations: (f = msg.getTransformations()) && github_com_solo$io_gloo_projects_gloo_api_external_envoy_extensions_transformation_transformation_pb.RouteTransformations.toObject(includeInstance, f),
    faults: (f = msg.getFaults()) && github_com_solo$io_gloo_projects_gloo_api_v1_plugins_faultinjection_fault_pb.RouteFaults.toObject(includeInstance, f),
    prefixRewrite: (f = msg.getPrefixRewrite()) && google_protobuf_wrappers_pb.StringValue.toObject(includeInstance, f),
    timeout: (f = msg.getTimeout()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f),
    retries: (f = msg.getRetries()) && github_com_solo$io_gloo_projects_gloo_api_v1_plugins_retries_retries_pb.RetryPolicy.toObject(includeInstance, f),
    extensions: (f = msg.getExtensions()) && github_com_solo$io_gloo_projects_gloo_api_v1_extensions_pb.Extensions.toObject(includeInstance, f),
    tracing: (f = msg.getTracing()) && github_com_solo$io_gloo_projects_gloo_api_v1_plugins_tracing_tracing_pb.RouteTracingSettings.toObject(includeInstance, f),
    shadowing: (f = msg.getShadowing()) && github_com_solo$io_gloo_projects_gloo_api_v1_plugins_shadowing_shadowing_pb.RouteShadowing.toObject(includeInstance, f),
    headerManipulation: (f = msg.getHeaderManipulation()) && github_com_solo$io_gloo_projects_gloo_api_v1_plugins_headers_headers_pb.HeaderManipulation.toObject(includeInstance, f),
    hostRewrite: jspb.Message.getFieldWithDefault(msg, 10, ""),
    autoHostRewrite: (f = msg.getAutoHostRewrite()) && google_protobuf_wrappers_pb.BoolValue.toObject(includeInstance, f),
    cors: (f = msg.getCors()) && github_com_solo$io_gloo_projects_gloo_api_v1_plugins_cors_cors_pb.CorsPolicy.toObject(includeInstance, f),
    lbHash: (f = msg.getLbHash()) && github_com_solo$io_gloo_projects_gloo_api_v1_plugins_lbhash_lbhash_pb.RouteActionHashConfig.toObject(includeInstance, f),
    ratelimitBasic: (f = msg.getRatelimitBasic()) && github_com_solo$io_gloo_projects_gloo_api_v1_enterprise_plugins_ratelimit_ratelimit_pb.IngressRateLimit.toObject(includeInstance, f),
    ratelimit: (f = msg.getRatelimit()) && github_com_solo$io_gloo_projects_gloo_api_v1_enterprise_plugins_ratelimit_ratelimit_pb.RateLimitRouteExtension.toObject(includeInstance, f),
    waf: (f = msg.getWaf()) && github_com_solo$io_gloo_projects_gloo_api_v1_enterprise_plugins_waf_waf_pb.Settings.toObject(includeInstance, f),
    jwt: (f = msg.getJwt()) && github_com_solo$io_gloo_projects_gloo_api_v1_enterprise_plugins_jwt_jwt_pb.RouteExtension.toObject(includeInstance, f),
    rbac: (f = msg.getRbac()) && github_com_solo$io_gloo_projects_gloo_api_v1_enterprise_plugins_rbac_rbac_pb.ExtensionSettings.toObject(includeInstance, f),
    extauth: (f = msg.getExtauth()) && github_com_solo$io_gloo_projects_gloo_api_v1_enterprise_plugins_extauth_v1_extauth_pb.ExtAuthExtension.toObject(includeInstance, f),
    dlp: (f = msg.getDlp()) && github_com_solo$io_gloo_projects_gloo_api_v1_enterprise_plugins_dlp_dlp_pb.Config.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.gloo.solo.io.RoutePlugins}
 */
proto.gloo.solo.io.RoutePlugins.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.gloo.solo.io.RoutePlugins;
  return proto.gloo.solo.io.RoutePlugins.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.gloo.solo.io.RoutePlugins} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.gloo.solo.io.RoutePlugins}
 */
proto.gloo.solo.io.RoutePlugins.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new github_com_solo$io_gloo_projects_gloo_api_external_envoy_extensions_transformation_transformation_pb.RouteTransformations;
      reader.readMessage(value,github_com_solo$io_gloo_projects_gloo_api_external_envoy_extensions_transformation_transformation_pb.RouteTransformations.deserializeBinaryFromReader);
      msg.setTransformations(value);
      break;
    case 2:
      var value = new github_com_solo$io_gloo_projects_gloo_api_v1_plugins_faultinjection_fault_pb.RouteFaults;
      reader.readMessage(value,github_com_solo$io_gloo_projects_gloo_api_v1_plugins_faultinjection_fault_pb.RouteFaults.deserializeBinaryFromReader);
      msg.setFaults(value);
      break;
    case 3:
      var value = new google_protobuf_wrappers_pb.StringValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader);
      msg.setPrefixRewrite(value);
      break;
    case 4:
      var value = new google_protobuf_duration_pb.Duration;
      reader.readMessage(value,google_protobuf_duration_pb.Duration.deserializeBinaryFromReader);
      msg.setTimeout(value);
      break;
    case 5:
      var value = new github_com_solo$io_gloo_projects_gloo_api_v1_plugins_retries_retries_pb.RetryPolicy;
      reader.readMessage(value,github_com_solo$io_gloo_projects_gloo_api_v1_plugins_retries_retries_pb.RetryPolicy.deserializeBinaryFromReader);
      msg.setRetries(value);
      break;
    case 6:
      var value = new github_com_solo$io_gloo_projects_gloo_api_v1_extensions_pb.Extensions;
      reader.readMessage(value,github_com_solo$io_gloo_projects_gloo_api_v1_extensions_pb.Extensions.deserializeBinaryFromReader);
      msg.setExtensions(value);
      break;
    case 7:
      var value = new github_com_solo$io_gloo_projects_gloo_api_v1_plugins_tracing_tracing_pb.RouteTracingSettings;
      reader.readMessage(value,github_com_solo$io_gloo_projects_gloo_api_v1_plugins_tracing_tracing_pb.RouteTracingSettings.deserializeBinaryFromReader);
      msg.setTracing(value);
      break;
    case 8:
      var value = new github_com_solo$io_gloo_projects_gloo_api_v1_plugins_shadowing_shadowing_pb.RouteShadowing;
      reader.readMessage(value,github_com_solo$io_gloo_projects_gloo_api_v1_plugins_shadowing_shadowing_pb.RouteShadowing.deserializeBinaryFromReader);
      msg.setShadowing(value);
      break;
    case 9:
      var value = new github_com_solo$io_gloo_projects_gloo_api_v1_plugins_headers_headers_pb.HeaderManipulation;
      reader.readMessage(value,github_com_solo$io_gloo_projects_gloo_api_v1_plugins_headers_headers_pb.HeaderManipulation.deserializeBinaryFromReader);
      msg.setHeaderManipulation(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setHostRewrite(value);
      break;
    case 19:
      var value = new google_protobuf_wrappers_pb.BoolValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.BoolValue.deserializeBinaryFromReader);
      msg.setAutoHostRewrite(value);
      break;
    case 11:
      var value = new github_com_solo$io_gloo_projects_gloo_api_v1_plugins_cors_cors_pb.CorsPolicy;
      reader.readMessage(value,github_com_solo$io_gloo_projects_gloo_api_v1_plugins_cors_cors_pb.CorsPolicy.deserializeBinaryFromReader);
      msg.setCors(value);
      break;
    case 12:
      var value = new github_com_solo$io_gloo_projects_gloo_api_v1_plugins_lbhash_lbhash_pb.RouteActionHashConfig;
      reader.readMessage(value,github_com_solo$io_gloo_projects_gloo_api_v1_plugins_lbhash_lbhash_pb.RouteActionHashConfig.deserializeBinaryFromReader);
      msg.setLbHash(value);
      break;
    case 13:
      var value = new github_com_solo$io_gloo_projects_gloo_api_v1_enterprise_plugins_ratelimit_ratelimit_pb.IngressRateLimit;
      reader.readMessage(value,github_com_solo$io_gloo_projects_gloo_api_v1_enterprise_plugins_ratelimit_ratelimit_pb.IngressRateLimit.deserializeBinaryFromReader);
      msg.setRatelimitBasic(value);
      break;
    case 14:
      var value = new github_com_solo$io_gloo_projects_gloo_api_v1_enterprise_plugins_ratelimit_ratelimit_pb.RateLimitRouteExtension;
      reader.readMessage(value,github_com_solo$io_gloo_projects_gloo_api_v1_enterprise_plugins_ratelimit_ratelimit_pb.RateLimitRouteExtension.deserializeBinaryFromReader);
      msg.setRatelimit(value);
      break;
    case 15:
      var value = new github_com_solo$io_gloo_projects_gloo_api_v1_enterprise_plugins_waf_waf_pb.Settings;
      reader.readMessage(value,github_com_solo$io_gloo_projects_gloo_api_v1_enterprise_plugins_waf_waf_pb.Settings.deserializeBinaryFromReader);
      msg.setWaf(value);
      break;
    case 16:
      var value = new github_com_solo$io_gloo_projects_gloo_api_v1_enterprise_plugins_jwt_jwt_pb.RouteExtension;
      reader.readMessage(value,github_com_solo$io_gloo_projects_gloo_api_v1_enterprise_plugins_jwt_jwt_pb.RouteExtension.deserializeBinaryFromReader);
      msg.setJwt(value);
      break;
    case 17:
      var value = new github_com_solo$io_gloo_projects_gloo_api_v1_enterprise_plugins_rbac_rbac_pb.ExtensionSettings;
      reader.readMessage(value,github_com_solo$io_gloo_projects_gloo_api_v1_enterprise_plugins_rbac_rbac_pb.ExtensionSettings.deserializeBinaryFromReader);
      msg.setRbac(value);
      break;
    case 18:
      var value = new github_com_solo$io_gloo_projects_gloo_api_v1_enterprise_plugins_extauth_v1_extauth_pb.ExtAuthExtension;
      reader.readMessage(value,github_com_solo$io_gloo_projects_gloo_api_v1_enterprise_plugins_extauth_v1_extauth_pb.ExtAuthExtension.deserializeBinaryFromReader);
      msg.setExtauth(value);
      break;
    case 20:
      var value = new github_com_solo$io_gloo_projects_gloo_api_v1_enterprise_plugins_dlp_dlp_pb.Config;
      reader.readMessage(value,github_com_solo$io_gloo_projects_gloo_api_v1_enterprise_plugins_dlp_dlp_pb.Config.deserializeBinaryFromReader);
      msg.setDlp(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.gloo.solo.io.RoutePlugins.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.gloo.solo.io.RoutePlugins.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.gloo.solo.io.RoutePlugins} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gloo.solo.io.RoutePlugins.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTransformations();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      github_com_solo$io_gloo_projects_gloo_api_external_envoy_extensions_transformation_transformation_pb.RouteTransformations.serializeBinaryToWriter
    );
  }
  f = message.getFaults();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      github_com_solo$io_gloo_projects_gloo_api_v1_plugins_faultinjection_fault_pb.RouteFaults.serializeBinaryToWriter
    );
  }
  f = message.getPrefixRewrite();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter
    );
  }
  f = message.getTimeout();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_duration_pb.Duration.serializeBinaryToWriter
    );
  }
  f = message.getRetries();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      github_com_solo$io_gloo_projects_gloo_api_v1_plugins_retries_retries_pb.RetryPolicy.serializeBinaryToWriter
    );
  }
  f = message.getExtensions();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      github_com_solo$io_gloo_projects_gloo_api_v1_extensions_pb.Extensions.serializeBinaryToWriter
    );
  }
  f = message.getTracing();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      github_com_solo$io_gloo_projects_gloo_api_v1_plugins_tracing_tracing_pb.RouteTracingSettings.serializeBinaryToWriter
    );
  }
  f = message.getShadowing();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      github_com_solo$io_gloo_projects_gloo_api_v1_plugins_shadowing_shadowing_pb.RouteShadowing.serializeBinaryToWriter
    );
  }
  f = message.getHeaderManipulation();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      github_com_solo$io_gloo_projects_gloo_api_v1_plugins_headers_headers_pb.HeaderManipulation.serializeBinaryToWriter
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 10));
  if (f != null) {
    writer.writeString(
      10,
      f
    );
  }
  f = message.getAutoHostRewrite();
  if (f != null) {
    writer.writeMessage(
      19,
      f,
      google_protobuf_wrappers_pb.BoolValue.serializeBinaryToWriter
    );
  }
  f = message.getCors();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      github_com_solo$io_gloo_projects_gloo_api_v1_plugins_cors_cors_pb.CorsPolicy.serializeBinaryToWriter
    );
  }
  f = message.getLbHash();
  if (f != null) {
    writer.writeMessage(
      12,
      f,
      github_com_solo$io_gloo_projects_gloo_api_v1_plugins_lbhash_lbhash_pb.RouteActionHashConfig.serializeBinaryToWriter
    );
  }
  f = message.getRatelimitBasic();
  if (f != null) {
    writer.writeMessage(
      13,
      f,
      github_com_solo$io_gloo_projects_gloo_api_v1_enterprise_plugins_ratelimit_ratelimit_pb.IngressRateLimit.serializeBinaryToWriter
    );
  }
  f = message.getRatelimit();
  if (f != null) {
    writer.writeMessage(
      14,
      f,
      github_com_solo$io_gloo_projects_gloo_api_v1_enterprise_plugins_ratelimit_ratelimit_pb.RateLimitRouteExtension.serializeBinaryToWriter
    );
  }
  f = message.getWaf();
  if (f != null) {
    writer.writeMessage(
      15,
      f,
      github_com_solo$io_gloo_projects_gloo_api_v1_enterprise_plugins_waf_waf_pb.Settings.serializeBinaryToWriter
    );
  }
  f = message.getJwt();
  if (f != null) {
    writer.writeMessage(
      16,
      f,
      github_com_solo$io_gloo_projects_gloo_api_v1_enterprise_plugins_jwt_jwt_pb.RouteExtension.serializeBinaryToWriter
    );
  }
  f = message.getRbac();
  if (f != null) {
    writer.writeMessage(
      17,
      f,
      github_com_solo$io_gloo_projects_gloo_api_v1_enterprise_plugins_rbac_rbac_pb.ExtensionSettings.serializeBinaryToWriter
    );
  }
  f = message.getExtauth();
  if (f != null) {
    writer.writeMessage(
      18,
      f,
      github_com_solo$io_gloo_projects_gloo_api_v1_enterprise_plugins_extauth_v1_extauth_pb.ExtAuthExtension.serializeBinaryToWriter
    );
  }
  f = message.getDlp();
  if (f != null) {
    writer.writeMessage(
      20,
      f,
      github_com_solo$io_gloo_projects_gloo_api_v1_enterprise_plugins_dlp_dlp_pb.Config.serializeBinaryToWriter
    );
  }
};


/**
 * optional envoy.api.v2.filter.http.RouteTransformations transformations = 1;
 * @return {?proto.envoy.api.v2.filter.http.RouteTransformations}
 */
proto.gloo.solo.io.RoutePlugins.prototype.getTransformations = function() {
  return /** @type{?proto.envoy.api.v2.filter.http.RouteTransformations} */ (
    jspb.Message.getWrapperField(this, github_com_solo$io_gloo_projects_gloo_api_external_envoy_extensions_transformation_transformation_pb.RouteTransformations, 1));
};


/** @param {?proto.envoy.api.v2.filter.http.RouteTransformations|undefined} value */
proto.gloo.solo.io.RoutePlugins.prototype.setTransformations = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.gloo.solo.io.RoutePlugins.prototype.clearTransformations = function() {
  this.setTransformations(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.gloo.solo.io.RoutePlugins.prototype.hasTransformations = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional fault.plugins.gloo.solo.io.RouteFaults faults = 2;
 * @return {?proto.fault.plugins.gloo.solo.io.RouteFaults}
 */
proto.gloo.solo.io.RoutePlugins.prototype.getFaults = function() {
  return /** @type{?proto.fault.plugins.gloo.solo.io.RouteFaults} */ (
    jspb.Message.getWrapperField(this, github_com_solo$io_gloo_projects_gloo_api_v1_plugins_faultinjection_fault_pb.RouteFaults, 2));
};


/** @param {?proto.fault.plugins.gloo.solo.io.RouteFaults|undefined} value */
proto.gloo.solo.io.RoutePlugins.prototype.setFaults = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.gloo.solo.io.RoutePlugins.prototype.clearFaults = function() {
  this.setFaults(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.gloo.solo.io.RoutePlugins.prototype.hasFaults = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional google.protobuf.StringValue prefix_rewrite = 3;
 * @return {?proto.google.protobuf.StringValue}
 */
proto.gloo.solo.io.RoutePlugins.prototype.getPrefixRewrite = function() {
  return /** @type{?proto.google.protobuf.StringValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.StringValue, 3));
};


/** @param {?proto.google.protobuf.StringValue|undefined} value */
proto.gloo.solo.io.RoutePlugins.prototype.setPrefixRewrite = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.gloo.solo.io.RoutePlugins.prototype.clearPrefixRewrite = function() {
  this.setPrefixRewrite(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.gloo.solo.io.RoutePlugins.prototype.hasPrefixRewrite = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional google.protobuf.Duration timeout = 4;
 * @return {?proto.google.protobuf.Duration}
 */
proto.gloo.solo.io.RoutePlugins.prototype.getTimeout = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 4));
};


/** @param {?proto.google.protobuf.Duration|undefined} value */
proto.gloo.solo.io.RoutePlugins.prototype.setTimeout = function(value) {
  jspb.Message.setWrapperField(this, 4, value);
};


proto.gloo.solo.io.RoutePlugins.prototype.clearTimeout = function() {
  this.setTimeout(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.gloo.solo.io.RoutePlugins.prototype.hasTimeout = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional retries.plugins.gloo.solo.io.RetryPolicy retries = 5;
 * @return {?proto.retries.plugins.gloo.solo.io.RetryPolicy}
 */
proto.gloo.solo.io.RoutePlugins.prototype.getRetries = function() {
  return /** @type{?proto.retries.plugins.gloo.solo.io.RetryPolicy} */ (
    jspb.Message.getWrapperField(this, github_com_solo$io_gloo_projects_gloo_api_v1_plugins_retries_retries_pb.RetryPolicy, 5));
};


/** @param {?proto.retries.plugins.gloo.solo.io.RetryPolicy|undefined} value */
proto.gloo.solo.io.RoutePlugins.prototype.setRetries = function(value) {
  jspb.Message.setWrapperField(this, 5, value);
};


proto.gloo.solo.io.RoutePlugins.prototype.clearRetries = function() {
  this.setRetries(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.gloo.solo.io.RoutePlugins.prototype.hasRetries = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional Extensions extensions = 6;
 * @return {?proto.gloo.solo.io.Extensions}
 */
proto.gloo.solo.io.RoutePlugins.prototype.getExtensions = function() {
  return /** @type{?proto.gloo.solo.io.Extensions} */ (
    jspb.Message.getWrapperField(this, github_com_solo$io_gloo_projects_gloo_api_v1_extensions_pb.Extensions, 6));
};


/** @param {?proto.gloo.solo.io.Extensions|undefined} value */
proto.gloo.solo.io.RoutePlugins.prototype.setExtensions = function(value) {
  jspb.Message.setWrapperField(this, 6, value);
};


proto.gloo.solo.io.RoutePlugins.prototype.clearExtensions = function() {
  this.setExtensions(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.gloo.solo.io.RoutePlugins.prototype.hasExtensions = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional tracing.plugins.gloo.solo.io.RouteTracingSettings tracing = 7;
 * @return {?proto.tracing.plugins.gloo.solo.io.RouteTracingSettings}
 */
proto.gloo.solo.io.RoutePlugins.prototype.getTracing = function() {
  return /** @type{?proto.tracing.plugins.gloo.solo.io.RouteTracingSettings} */ (
    jspb.Message.getWrapperField(this, github_com_solo$io_gloo_projects_gloo_api_v1_plugins_tracing_tracing_pb.RouteTracingSettings, 7));
};


/** @param {?proto.tracing.plugins.gloo.solo.io.RouteTracingSettings|undefined} value */
proto.gloo.solo.io.RoutePlugins.prototype.setTracing = function(value) {
  jspb.Message.setWrapperField(this, 7, value);
};


proto.gloo.solo.io.RoutePlugins.prototype.clearTracing = function() {
  this.setTracing(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.gloo.solo.io.RoutePlugins.prototype.hasTracing = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional shadowing.plugins.gloo.solo.io.RouteShadowing shadowing = 8;
 * @return {?proto.shadowing.plugins.gloo.solo.io.RouteShadowing}
 */
proto.gloo.solo.io.RoutePlugins.prototype.getShadowing = function() {
  return /** @type{?proto.shadowing.plugins.gloo.solo.io.RouteShadowing} */ (
    jspb.Message.getWrapperField(this, github_com_solo$io_gloo_projects_gloo_api_v1_plugins_shadowing_shadowing_pb.RouteShadowing, 8));
};


/** @param {?proto.shadowing.plugins.gloo.solo.io.RouteShadowing|undefined} value */
proto.gloo.solo.io.RoutePlugins.prototype.setShadowing = function(value) {
  jspb.Message.setWrapperField(this, 8, value);
};


proto.gloo.solo.io.RoutePlugins.prototype.clearShadowing = function() {
  this.setShadowing(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.gloo.solo.io.RoutePlugins.prototype.hasShadowing = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional headers.plugins.gloo.solo.io.HeaderManipulation header_manipulation = 9;
 * @return {?proto.headers.plugins.gloo.solo.io.HeaderManipulation}
 */
proto.gloo.solo.io.RoutePlugins.prototype.getHeaderManipulation = function() {
  return /** @type{?proto.headers.plugins.gloo.solo.io.HeaderManipulation} */ (
    jspb.Message.getWrapperField(this, github_com_solo$io_gloo_projects_gloo_api_v1_plugins_headers_headers_pb.HeaderManipulation, 9));
};


/** @param {?proto.headers.plugins.gloo.solo.io.HeaderManipulation|undefined} value */
proto.gloo.solo.io.RoutePlugins.prototype.setHeaderManipulation = function(value) {
  jspb.Message.setWrapperField(this, 9, value);
};


proto.gloo.solo.io.RoutePlugins.prototype.clearHeaderManipulation = function() {
  this.setHeaderManipulation(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.gloo.solo.io.RoutePlugins.prototype.hasHeaderManipulation = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional string host_rewrite = 10;
 * @return {string}
 */
proto.gloo.solo.io.RoutePlugins.prototype.getHostRewrite = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/** @param {string} value */
proto.gloo.solo.io.RoutePlugins.prototype.setHostRewrite = function(value) {
  jspb.Message.setOneofField(this, 10, proto.gloo.solo.io.RoutePlugins.oneofGroups_[0], value);
};


proto.gloo.solo.io.RoutePlugins.prototype.clearHostRewrite = function() {
  jspb.Message.setOneofField(this, 10, proto.gloo.solo.io.RoutePlugins.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.gloo.solo.io.RoutePlugins.prototype.hasHostRewrite = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional google.protobuf.BoolValue auto_host_rewrite = 19;
 * @return {?proto.google.protobuf.BoolValue}
 */
proto.gloo.solo.io.RoutePlugins.prototype.getAutoHostRewrite = function() {
  return /** @type{?proto.google.protobuf.BoolValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.BoolValue, 19));
};


/** @param {?proto.google.protobuf.BoolValue|undefined} value */
proto.gloo.solo.io.RoutePlugins.prototype.setAutoHostRewrite = function(value) {
  jspb.Message.setOneofWrapperField(this, 19, proto.gloo.solo.io.RoutePlugins.oneofGroups_[0], value);
};


proto.gloo.solo.io.RoutePlugins.prototype.clearAutoHostRewrite = function() {
  this.setAutoHostRewrite(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.gloo.solo.io.RoutePlugins.prototype.hasAutoHostRewrite = function() {
  return jspb.Message.getField(this, 19) != null;
};


/**
 * optional cors.plugins.gloo.solo.io.CorsPolicy cors = 11;
 * @return {?proto.cors.plugins.gloo.solo.io.CorsPolicy}
 */
proto.gloo.solo.io.RoutePlugins.prototype.getCors = function() {
  return /** @type{?proto.cors.plugins.gloo.solo.io.CorsPolicy} */ (
    jspb.Message.getWrapperField(this, github_com_solo$io_gloo_projects_gloo_api_v1_plugins_cors_cors_pb.CorsPolicy, 11));
};


/** @param {?proto.cors.plugins.gloo.solo.io.CorsPolicy|undefined} value */
proto.gloo.solo.io.RoutePlugins.prototype.setCors = function(value) {
  jspb.Message.setWrapperField(this, 11, value);
};


proto.gloo.solo.io.RoutePlugins.prototype.clearCors = function() {
  this.setCors(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.gloo.solo.io.RoutePlugins.prototype.hasCors = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional lbhash.plugins.gloo.solo.io.RouteActionHashConfig lb_hash = 12;
 * @return {?proto.lbhash.plugins.gloo.solo.io.RouteActionHashConfig}
 */
proto.gloo.solo.io.RoutePlugins.prototype.getLbHash = function() {
  return /** @type{?proto.lbhash.plugins.gloo.solo.io.RouteActionHashConfig} */ (
    jspb.Message.getWrapperField(this, github_com_solo$io_gloo_projects_gloo_api_v1_plugins_lbhash_lbhash_pb.RouteActionHashConfig, 12));
};


/** @param {?proto.lbhash.plugins.gloo.solo.io.RouteActionHashConfig|undefined} value */
proto.gloo.solo.io.RoutePlugins.prototype.setLbHash = function(value) {
  jspb.Message.setWrapperField(this, 12, value);
};


proto.gloo.solo.io.RoutePlugins.prototype.clearLbHash = function() {
  this.setLbHash(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.gloo.solo.io.RoutePlugins.prototype.hasLbHash = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional ratelimit.plugins.gloo.solo.io.IngressRateLimit ratelimit_basic = 13;
 * @return {?proto.ratelimit.plugins.gloo.solo.io.IngressRateLimit}
 */
proto.gloo.solo.io.RoutePlugins.prototype.getRatelimitBasic = function() {
  return /** @type{?proto.ratelimit.plugins.gloo.solo.io.IngressRateLimit} */ (
    jspb.Message.getWrapperField(this, github_com_solo$io_gloo_projects_gloo_api_v1_enterprise_plugins_ratelimit_ratelimit_pb.IngressRateLimit, 13));
};


/** @param {?proto.ratelimit.plugins.gloo.solo.io.IngressRateLimit|undefined} value */
proto.gloo.solo.io.RoutePlugins.prototype.setRatelimitBasic = function(value) {
  jspb.Message.setWrapperField(this, 13, value);
};


proto.gloo.solo.io.RoutePlugins.prototype.clearRatelimitBasic = function() {
  this.setRatelimitBasic(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.gloo.solo.io.RoutePlugins.prototype.hasRatelimitBasic = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * optional ratelimit.plugins.gloo.solo.io.RateLimitRouteExtension ratelimit = 14;
 * @return {?proto.ratelimit.plugins.gloo.solo.io.RateLimitRouteExtension}
 */
proto.gloo.solo.io.RoutePlugins.prototype.getRatelimit = function() {
  return /** @type{?proto.ratelimit.plugins.gloo.solo.io.RateLimitRouteExtension} */ (
    jspb.Message.getWrapperField(this, github_com_solo$io_gloo_projects_gloo_api_v1_enterprise_plugins_ratelimit_ratelimit_pb.RateLimitRouteExtension, 14));
};


/** @param {?proto.ratelimit.plugins.gloo.solo.io.RateLimitRouteExtension|undefined} value */
proto.gloo.solo.io.RoutePlugins.prototype.setRatelimit = function(value) {
  jspb.Message.setWrapperField(this, 14, value);
};


proto.gloo.solo.io.RoutePlugins.prototype.clearRatelimit = function() {
  this.setRatelimit(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.gloo.solo.io.RoutePlugins.prototype.hasRatelimit = function() {
  return jspb.Message.getField(this, 14) != null;
};


/**
 * optional waf.plugins.gloo.solo.io.Settings waf = 15;
 * @return {?proto.waf.plugins.gloo.solo.io.Settings}
 */
proto.gloo.solo.io.RoutePlugins.prototype.getWaf = function() {
  return /** @type{?proto.waf.plugins.gloo.solo.io.Settings} */ (
    jspb.Message.getWrapperField(this, github_com_solo$io_gloo_projects_gloo_api_v1_enterprise_plugins_waf_waf_pb.Settings, 15));
};


/** @param {?proto.waf.plugins.gloo.solo.io.Settings|undefined} value */
proto.gloo.solo.io.RoutePlugins.prototype.setWaf = function(value) {
  jspb.Message.setWrapperField(this, 15, value);
};


proto.gloo.solo.io.RoutePlugins.prototype.clearWaf = function() {
  this.setWaf(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.gloo.solo.io.RoutePlugins.prototype.hasWaf = function() {
  return jspb.Message.getField(this, 15) != null;
};


/**
 * optional jwt.plugins.gloo.solo.io.RouteExtension jwt = 16;
 * @return {?proto.jwt.plugins.gloo.solo.io.RouteExtension}
 */
proto.gloo.solo.io.RoutePlugins.prototype.getJwt = function() {
  return /** @type{?proto.jwt.plugins.gloo.solo.io.RouteExtension} */ (
    jspb.Message.getWrapperField(this, github_com_solo$io_gloo_projects_gloo_api_v1_enterprise_plugins_jwt_jwt_pb.RouteExtension, 16));
};


/** @param {?proto.jwt.plugins.gloo.solo.io.RouteExtension|undefined} value */
proto.gloo.solo.io.RoutePlugins.prototype.setJwt = function(value) {
  jspb.Message.setWrapperField(this, 16, value);
};


proto.gloo.solo.io.RoutePlugins.prototype.clearJwt = function() {
  this.setJwt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.gloo.solo.io.RoutePlugins.prototype.hasJwt = function() {
  return jspb.Message.getField(this, 16) != null;
};


/**
 * optional rbac.plugins.gloo.solo.io.ExtensionSettings rbac = 17;
 * @return {?proto.rbac.plugins.gloo.solo.io.ExtensionSettings}
 */
proto.gloo.solo.io.RoutePlugins.prototype.getRbac = function() {
  return /** @type{?proto.rbac.plugins.gloo.solo.io.ExtensionSettings} */ (
    jspb.Message.getWrapperField(this, github_com_solo$io_gloo_projects_gloo_api_v1_enterprise_plugins_rbac_rbac_pb.ExtensionSettings, 17));
};


/** @param {?proto.rbac.plugins.gloo.solo.io.ExtensionSettings|undefined} value */
proto.gloo.solo.io.RoutePlugins.prototype.setRbac = function(value) {
  jspb.Message.setWrapperField(this, 17, value);
};


proto.gloo.solo.io.RoutePlugins.prototype.clearRbac = function() {
  this.setRbac(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.gloo.solo.io.RoutePlugins.prototype.hasRbac = function() {
  return jspb.Message.getField(this, 17) != null;
};


/**
 * optional enterprise.gloo.solo.io.ExtAuthExtension extauth = 18;
 * @return {?proto.enterprise.gloo.solo.io.ExtAuthExtension}
 */
proto.gloo.solo.io.RoutePlugins.prototype.getExtauth = function() {
  return /** @type{?proto.enterprise.gloo.solo.io.ExtAuthExtension} */ (
    jspb.Message.getWrapperField(this, github_com_solo$io_gloo_projects_gloo_api_v1_enterprise_plugins_extauth_v1_extauth_pb.ExtAuthExtension, 18));
};


/** @param {?proto.enterprise.gloo.solo.io.ExtAuthExtension|undefined} value */
proto.gloo.solo.io.RoutePlugins.prototype.setExtauth = function(value) {
  jspb.Message.setWrapperField(this, 18, value);
};


proto.gloo.solo.io.RoutePlugins.prototype.clearExtauth = function() {
  this.setExtauth(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.gloo.solo.io.RoutePlugins.prototype.hasExtauth = function() {
  return jspb.Message.getField(this, 18) != null;
};


/**
 * optional dlp.plugins.gloo.solo.io.Config dlp = 20;
 * @return {?proto.dlp.plugins.gloo.solo.io.Config}
 */
proto.gloo.solo.io.RoutePlugins.prototype.getDlp = function() {
  return /** @type{?proto.dlp.plugins.gloo.solo.io.Config} */ (
    jspb.Message.getWrapperField(this, github_com_solo$io_gloo_projects_gloo_api_v1_enterprise_plugins_dlp_dlp_pb.Config, 20));
};


/** @param {?proto.dlp.plugins.gloo.solo.io.Config|undefined} value */
proto.gloo.solo.io.RoutePlugins.prototype.setDlp = function(value) {
  jspb.Message.setWrapperField(this, 20, value);
};


proto.gloo.solo.io.RoutePlugins.prototype.clearDlp = function() {
  this.setDlp(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.gloo.solo.io.RoutePlugins.prototype.hasDlp = function() {
  return jspb.Message.getField(this, 20) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.gloo.solo.io.DestinationSpec = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.gloo.solo.io.DestinationSpec.oneofGroups_);
};
goog.inherits(proto.gloo.solo.io.DestinationSpec, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.gloo.solo.io.DestinationSpec.displayName = 'proto.gloo.solo.io.DestinationSpec';
}
/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.gloo.solo.io.DestinationSpec.oneofGroups_ = [[1,2,3,4]];

/**
 * @enum {number}
 */
proto.gloo.solo.io.DestinationSpec.DestinationTypeCase = {
  DESTINATION_TYPE_NOT_SET: 0,
  AWS: 1,
  AZURE: 2,
  REST: 3,
  GRPC: 4
};

/**
 * @return {proto.gloo.solo.io.DestinationSpec.DestinationTypeCase}
 */
proto.gloo.solo.io.DestinationSpec.prototype.getDestinationTypeCase = function() {
  return /** @type {proto.gloo.solo.io.DestinationSpec.DestinationTypeCase} */(jspb.Message.computeOneofCase(this, proto.gloo.solo.io.DestinationSpec.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.gloo.solo.io.DestinationSpec.prototype.toObject = function(opt_includeInstance) {
  return proto.gloo.solo.io.DestinationSpec.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.gloo.solo.io.DestinationSpec} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gloo.solo.io.DestinationSpec.toObject = function(includeInstance, msg) {
  var f, obj = {
    aws: (f = msg.getAws()) && github_com_solo$io_gloo_projects_gloo_api_v1_plugins_aws_aws_pb.DestinationSpec.toObject(includeInstance, f),
    azure: (f = msg.getAzure()) && github_com_solo$io_gloo_projects_gloo_api_v1_plugins_azure_azure_pb.DestinationSpec.toObject(includeInstance, f),
    rest: (f = msg.getRest()) && github_com_solo$io_gloo_projects_gloo_api_v1_plugins_rest_rest_pb.DestinationSpec.toObject(includeInstance, f),
    grpc: (f = msg.getGrpc()) && github_com_solo$io_gloo_projects_gloo_api_v1_plugins_grpc_grpc_pb.DestinationSpec.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.gloo.solo.io.DestinationSpec}
 */
proto.gloo.solo.io.DestinationSpec.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.gloo.solo.io.DestinationSpec;
  return proto.gloo.solo.io.DestinationSpec.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.gloo.solo.io.DestinationSpec} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.gloo.solo.io.DestinationSpec}
 */
proto.gloo.solo.io.DestinationSpec.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new github_com_solo$io_gloo_projects_gloo_api_v1_plugins_aws_aws_pb.DestinationSpec;
      reader.readMessage(value,github_com_solo$io_gloo_projects_gloo_api_v1_plugins_aws_aws_pb.DestinationSpec.deserializeBinaryFromReader);
      msg.setAws(value);
      break;
    case 2:
      var value = new github_com_solo$io_gloo_projects_gloo_api_v1_plugins_azure_azure_pb.DestinationSpec;
      reader.readMessage(value,github_com_solo$io_gloo_projects_gloo_api_v1_plugins_azure_azure_pb.DestinationSpec.deserializeBinaryFromReader);
      msg.setAzure(value);
      break;
    case 3:
      var value = new github_com_solo$io_gloo_projects_gloo_api_v1_plugins_rest_rest_pb.DestinationSpec;
      reader.readMessage(value,github_com_solo$io_gloo_projects_gloo_api_v1_plugins_rest_rest_pb.DestinationSpec.deserializeBinaryFromReader);
      msg.setRest(value);
      break;
    case 4:
      var value = new github_com_solo$io_gloo_projects_gloo_api_v1_plugins_grpc_grpc_pb.DestinationSpec;
      reader.readMessage(value,github_com_solo$io_gloo_projects_gloo_api_v1_plugins_grpc_grpc_pb.DestinationSpec.deserializeBinaryFromReader);
      msg.setGrpc(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.gloo.solo.io.DestinationSpec.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.gloo.solo.io.DestinationSpec.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.gloo.solo.io.DestinationSpec} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gloo.solo.io.DestinationSpec.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAws();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      github_com_solo$io_gloo_projects_gloo_api_v1_plugins_aws_aws_pb.DestinationSpec.serializeBinaryToWriter
    );
  }
  f = message.getAzure();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      github_com_solo$io_gloo_projects_gloo_api_v1_plugins_azure_azure_pb.DestinationSpec.serializeBinaryToWriter
    );
  }
  f = message.getRest();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      github_com_solo$io_gloo_projects_gloo_api_v1_plugins_rest_rest_pb.DestinationSpec.serializeBinaryToWriter
    );
  }
  f = message.getGrpc();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      github_com_solo$io_gloo_projects_gloo_api_v1_plugins_grpc_grpc_pb.DestinationSpec.serializeBinaryToWriter
    );
  }
};


/**
 * optional aws.plugins.gloo.solo.io.DestinationSpec aws = 1;
 * @return {?proto.aws.plugins.gloo.solo.io.DestinationSpec}
 */
proto.gloo.solo.io.DestinationSpec.prototype.getAws = function() {
  return /** @type{?proto.aws.plugins.gloo.solo.io.DestinationSpec} */ (
    jspb.Message.getWrapperField(this, github_com_solo$io_gloo_projects_gloo_api_v1_plugins_aws_aws_pb.DestinationSpec, 1));
};


/** @param {?proto.aws.plugins.gloo.solo.io.DestinationSpec|undefined} value */
proto.gloo.solo.io.DestinationSpec.prototype.setAws = function(value) {
  jspb.Message.setOneofWrapperField(this, 1, proto.gloo.solo.io.DestinationSpec.oneofGroups_[0], value);
};


proto.gloo.solo.io.DestinationSpec.prototype.clearAws = function() {
  this.setAws(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.gloo.solo.io.DestinationSpec.prototype.hasAws = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional azure.plugins.gloo.solo.io.DestinationSpec azure = 2;
 * @return {?proto.azure.plugins.gloo.solo.io.DestinationSpec}
 */
proto.gloo.solo.io.DestinationSpec.prototype.getAzure = function() {
  return /** @type{?proto.azure.plugins.gloo.solo.io.DestinationSpec} */ (
    jspb.Message.getWrapperField(this, github_com_solo$io_gloo_projects_gloo_api_v1_plugins_azure_azure_pb.DestinationSpec, 2));
};


/** @param {?proto.azure.plugins.gloo.solo.io.DestinationSpec|undefined} value */
proto.gloo.solo.io.DestinationSpec.prototype.setAzure = function(value) {
  jspb.Message.setOneofWrapperField(this, 2, proto.gloo.solo.io.DestinationSpec.oneofGroups_[0], value);
};


proto.gloo.solo.io.DestinationSpec.prototype.clearAzure = function() {
  this.setAzure(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.gloo.solo.io.DestinationSpec.prototype.hasAzure = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional rest.plugins.gloo.solo.io.DestinationSpec rest = 3;
 * @return {?proto.rest.plugins.gloo.solo.io.DestinationSpec}
 */
proto.gloo.solo.io.DestinationSpec.prototype.getRest = function() {
  return /** @type{?proto.rest.plugins.gloo.solo.io.DestinationSpec} */ (
    jspb.Message.getWrapperField(this, github_com_solo$io_gloo_projects_gloo_api_v1_plugins_rest_rest_pb.DestinationSpec, 3));
};


/** @param {?proto.rest.plugins.gloo.solo.io.DestinationSpec|undefined} value */
proto.gloo.solo.io.DestinationSpec.prototype.setRest = function(value) {
  jspb.Message.setOneofWrapperField(this, 3, proto.gloo.solo.io.DestinationSpec.oneofGroups_[0], value);
};


proto.gloo.solo.io.DestinationSpec.prototype.clearRest = function() {
  this.setRest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.gloo.solo.io.DestinationSpec.prototype.hasRest = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional grpc.plugins.gloo.solo.io.DestinationSpec grpc = 4;
 * @return {?proto.grpc.plugins.gloo.solo.io.DestinationSpec}
 */
proto.gloo.solo.io.DestinationSpec.prototype.getGrpc = function() {
  return /** @type{?proto.grpc.plugins.gloo.solo.io.DestinationSpec} */ (
    jspb.Message.getWrapperField(this, github_com_solo$io_gloo_projects_gloo_api_v1_plugins_grpc_grpc_pb.DestinationSpec, 4));
};


/** @param {?proto.grpc.plugins.gloo.solo.io.DestinationSpec|undefined} value */
proto.gloo.solo.io.DestinationSpec.prototype.setGrpc = function(value) {
  jspb.Message.setOneofWrapperField(this, 4, proto.gloo.solo.io.DestinationSpec.oneofGroups_[0], value);
};


proto.gloo.solo.io.DestinationSpec.prototype.clearGrpc = function() {
  this.setGrpc(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.gloo.solo.io.DestinationSpec.prototype.hasGrpc = function() {
  return jspb.Message.getField(this, 4) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.gloo.solo.io.WeightedDestinationPlugins = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.gloo.solo.io.WeightedDestinationPlugins, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.gloo.solo.io.WeightedDestinationPlugins.displayName = 'proto.gloo.solo.io.WeightedDestinationPlugins';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.gloo.solo.io.WeightedDestinationPlugins.prototype.toObject = function(opt_includeInstance) {
  return proto.gloo.solo.io.WeightedDestinationPlugins.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.gloo.solo.io.WeightedDestinationPlugins} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gloo.solo.io.WeightedDestinationPlugins.toObject = function(includeInstance, msg) {
  var f, obj = {
    headerManipulation: (f = msg.getHeaderManipulation()) && github_com_solo$io_gloo_projects_gloo_api_v1_plugins_headers_headers_pb.HeaderManipulation.toObject(includeInstance, f),
    transformations: (f = msg.getTransformations()) && github_com_solo$io_gloo_projects_gloo_api_external_envoy_extensions_transformation_transformation_pb.RouteTransformations.toObject(includeInstance, f),
    extensions: (f = msg.getExtensions()) && github_com_solo$io_gloo_projects_gloo_api_v1_extensions_pb.Extensions.toObject(includeInstance, f),
    extauth: (f = msg.getExtauth()) && github_com_solo$io_gloo_projects_gloo_api_v1_enterprise_plugins_extauth_v1_extauth_pb.ExtAuthExtension.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.gloo.solo.io.WeightedDestinationPlugins}
 */
proto.gloo.solo.io.WeightedDestinationPlugins.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.gloo.solo.io.WeightedDestinationPlugins;
  return proto.gloo.solo.io.WeightedDestinationPlugins.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.gloo.solo.io.WeightedDestinationPlugins} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.gloo.solo.io.WeightedDestinationPlugins}
 */
proto.gloo.solo.io.WeightedDestinationPlugins.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new github_com_solo$io_gloo_projects_gloo_api_v1_plugins_headers_headers_pb.HeaderManipulation;
      reader.readMessage(value,github_com_solo$io_gloo_projects_gloo_api_v1_plugins_headers_headers_pb.HeaderManipulation.deserializeBinaryFromReader);
      msg.setHeaderManipulation(value);
      break;
    case 2:
      var value = new github_com_solo$io_gloo_projects_gloo_api_external_envoy_extensions_transformation_transformation_pb.RouteTransformations;
      reader.readMessage(value,github_com_solo$io_gloo_projects_gloo_api_external_envoy_extensions_transformation_transformation_pb.RouteTransformations.deserializeBinaryFromReader);
      msg.setTransformations(value);
      break;
    case 3:
      var value = new github_com_solo$io_gloo_projects_gloo_api_v1_extensions_pb.Extensions;
      reader.readMessage(value,github_com_solo$io_gloo_projects_gloo_api_v1_extensions_pb.Extensions.deserializeBinaryFromReader);
      msg.setExtensions(value);
      break;
    case 4:
      var value = new github_com_solo$io_gloo_projects_gloo_api_v1_enterprise_plugins_extauth_v1_extauth_pb.ExtAuthExtension;
      reader.readMessage(value,github_com_solo$io_gloo_projects_gloo_api_v1_enterprise_plugins_extauth_v1_extauth_pb.ExtAuthExtension.deserializeBinaryFromReader);
      msg.setExtauth(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.gloo.solo.io.WeightedDestinationPlugins.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.gloo.solo.io.WeightedDestinationPlugins.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.gloo.solo.io.WeightedDestinationPlugins} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gloo.solo.io.WeightedDestinationPlugins.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHeaderManipulation();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      github_com_solo$io_gloo_projects_gloo_api_v1_plugins_headers_headers_pb.HeaderManipulation.serializeBinaryToWriter
    );
  }
  f = message.getTransformations();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      github_com_solo$io_gloo_projects_gloo_api_external_envoy_extensions_transformation_transformation_pb.RouteTransformations.serializeBinaryToWriter
    );
  }
  f = message.getExtensions();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      github_com_solo$io_gloo_projects_gloo_api_v1_extensions_pb.Extensions.serializeBinaryToWriter
    );
  }
  f = message.getExtauth();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      github_com_solo$io_gloo_projects_gloo_api_v1_enterprise_plugins_extauth_v1_extauth_pb.ExtAuthExtension.serializeBinaryToWriter
    );
  }
};


/**
 * optional headers.plugins.gloo.solo.io.HeaderManipulation header_manipulation = 1;
 * @return {?proto.headers.plugins.gloo.solo.io.HeaderManipulation}
 */
proto.gloo.solo.io.WeightedDestinationPlugins.prototype.getHeaderManipulation = function() {
  return /** @type{?proto.headers.plugins.gloo.solo.io.HeaderManipulation} */ (
    jspb.Message.getWrapperField(this, github_com_solo$io_gloo_projects_gloo_api_v1_plugins_headers_headers_pb.HeaderManipulation, 1));
};


/** @param {?proto.headers.plugins.gloo.solo.io.HeaderManipulation|undefined} value */
proto.gloo.solo.io.WeightedDestinationPlugins.prototype.setHeaderManipulation = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.gloo.solo.io.WeightedDestinationPlugins.prototype.clearHeaderManipulation = function() {
  this.setHeaderManipulation(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.gloo.solo.io.WeightedDestinationPlugins.prototype.hasHeaderManipulation = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional envoy.api.v2.filter.http.RouteTransformations transformations = 2;
 * @return {?proto.envoy.api.v2.filter.http.RouteTransformations}
 */
proto.gloo.solo.io.WeightedDestinationPlugins.prototype.getTransformations = function() {
  return /** @type{?proto.envoy.api.v2.filter.http.RouteTransformations} */ (
    jspb.Message.getWrapperField(this, github_com_solo$io_gloo_projects_gloo_api_external_envoy_extensions_transformation_transformation_pb.RouteTransformations, 2));
};


/** @param {?proto.envoy.api.v2.filter.http.RouteTransformations|undefined} value */
proto.gloo.solo.io.WeightedDestinationPlugins.prototype.setTransformations = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.gloo.solo.io.WeightedDestinationPlugins.prototype.clearTransformations = function() {
  this.setTransformations(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.gloo.solo.io.WeightedDestinationPlugins.prototype.hasTransformations = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Extensions extensions = 3;
 * @return {?proto.gloo.solo.io.Extensions}
 */
proto.gloo.solo.io.WeightedDestinationPlugins.prototype.getExtensions = function() {
  return /** @type{?proto.gloo.solo.io.Extensions} */ (
    jspb.Message.getWrapperField(this, github_com_solo$io_gloo_projects_gloo_api_v1_extensions_pb.Extensions, 3));
};


/** @param {?proto.gloo.solo.io.Extensions|undefined} value */
proto.gloo.solo.io.WeightedDestinationPlugins.prototype.setExtensions = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.gloo.solo.io.WeightedDestinationPlugins.prototype.clearExtensions = function() {
  this.setExtensions(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.gloo.solo.io.WeightedDestinationPlugins.prototype.hasExtensions = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional enterprise.gloo.solo.io.ExtAuthExtension extauth = 4;
 * @return {?proto.enterprise.gloo.solo.io.ExtAuthExtension}
 */
proto.gloo.solo.io.WeightedDestinationPlugins.prototype.getExtauth = function() {
  return /** @type{?proto.enterprise.gloo.solo.io.ExtAuthExtension} */ (
    jspb.Message.getWrapperField(this, github_com_solo$io_gloo_projects_gloo_api_v1_enterprise_plugins_extauth_v1_extauth_pb.ExtAuthExtension, 4));
};


/** @param {?proto.enterprise.gloo.solo.io.ExtAuthExtension|undefined} value */
proto.gloo.solo.io.WeightedDestinationPlugins.prototype.setExtauth = function(value) {
  jspb.Message.setWrapperField(this, 4, value);
};


proto.gloo.solo.io.WeightedDestinationPlugins.prototype.clearExtauth = function() {
  this.setExtauth(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.gloo.solo.io.WeightedDestinationPlugins.prototype.hasExtauth = function() {
  return jspb.Message.getField(this, 4) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.gloo.solo.io.UpstreamSpec = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.gloo.solo.io.UpstreamSpec.repeatedFields_, proto.gloo.solo.io.UpstreamSpec.oneofGroups_);
};
goog.inherits(proto.gloo.solo.io.UpstreamSpec, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.gloo.solo.io.UpstreamSpec.displayName = 'proto.gloo.solo.io.UpstreamSpec';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.gloo.solo.io.UpstreamSpec.repeatedFields_ = [5];

/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.gloo.solo.io.UpstreamSpec.oneofGroups_ = [[8,9,10,11,12,13,14]];

/**
 * @enum {number}
 */
proto.gloo.solo.io.UpstreamSpec.UpstreamTypeCase = {
  UPSTREAM_TYPE_NOT_SET: 0,
  KUBE: 8,
  STATIC: 9,
  PIPE: 10,
  AWS: 11,
  AZURE: 12,
  CONSUL: 13,
  AWS_EC2: 14
};

/**
 * @return {proto.gloo.solo.io.UpstreamSpec.UpstreamTypeCase}
 */
proto.gloo.solo.io.UpstreamSpec.prototype.getUpstreamTypeCase = function() {
  return /** @type {proto.gloo.solo.io.UpstreamSpec.UpstreamTypeCase} */(jspb.Message.computeOneofCase(this, proto.gloo.solo.io.UpstreamSpec.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.gloo.solo.io.UpstreamSpec.prototype.toObject = function(opt_includeInstance) {
  return proto.gloo.solo.io.UpstreamSpec.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.gloo.solo.io.UpstreamSpec} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gloo.solo.io.UpstreamSpec.toObject = function(includeInstance, msg) {
  var f, obj = {
    sslConfig: (f = msg.getSslConfig()) && github_com_solo$io_gloo_projects_gloo_api_v1_ssl_pb.UpstreamSslConfig.toObject(includeInstance, f),
    circuitBreakers: (f = msg.getCircuitBreakers()) && github_com_solo$io_gloo_projects_gloo_api_v1_circuit_breaker_pb.CircuitBreakerConfig.toObject(includeInstance, f),
    loadBalancerConfig: (f = msg.getLoadBalancerConfig()) && github_com_solo$io_gloo_projects_gloo_api_v1_load_balancer_pb.LoadBalancerConfig.toObject(includeInstance, f),
    connectionConfig: (f = msg.getConnectionConfig()) && github_com_solo$io_gloo_projects_gloo_api_v1_connection_pb.ConnectionConfig.toObject(includeInstance, f),
    healthChecksList: jspb.Message.toObjectList(msg.getHealthChecksList(),
    github_com_solo$io_gloo_projects_gloo_api_external_envoy_api_v2_core_health_check_pb.HealthCheck.toObject, includeInstance),
    outlierDetection: (f = msg.getOutlierDetection()) && github_com_solo$io_gloo_projects_gloo_api_external_envoy_api_v2_cluster_outlier_detection_pb.OutlierDetection.toObject(includeInstance, f),
    useHttp2: jspb.Message.getFieldWithDefault(msg, 7, false),
    kube: (f = msg.getKube()) && github_com_solo$io_gloo_projects_gloo_api_v1_plugins_kubernetes_kubernetes_pb.UpstreamSpec.toObject(includeInstance, f),
    pb_static: (f = msg.getStatic()) && github_com_solo$io_gloo_projects_gloo_api_v1_plugins_static_static_pb.UpstreamSpec.toObject(includeInstance, f),
    pipe: (f = msg.getPipe()) && github_com_solo$io_gloo_projects_gloo_api_v1_plugins_pipe_pipe_pb.UpstreamSpec.toObject(includeInstance, f),
    aws: (f = msg.getAws()) && github_com_solo$io_gloo_projects_gloo_api_v1_plugins_aws_aws_pb.UpstreamSpec.toObject(includeInstance, f),
    azure: (f = msg.getAzure()) && github_com_solo$io_gloo_projects_gloo_api_v1_plugins_azure_azure_pb.UpstreamSpec.toObject(includeInstance, f),
    consul: (f = msg.getConsul()) && github_com_solo$io_gloo_projects_gloo_api_v1_plugins_consul_consul_pb.UpstreamSpec.toObject(includeInstance, f),
    awsEc2: (f = msg.getAwsEc2()) && github_com_solo$io_gloo_projects_gloo_api_v1_plugins_aws_ec2_aws_ec2_pb.UpstreamSpec.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.gloo.solo.io.UpstreamSpec}
 */
proto.gloo.solo.io.UpstreamSpec.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.gloo.solo.io.UpstreamSpec;
  return proto.gloo.solo.io.UpstreamSpec.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.gloo.solo.io.UpstreamSpec} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.gloo.solo.io.UpstreamSpec}
 */
proto.gloo.solo.io.UpstreamSpec.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new github_com_solo$io_gloo_projects_gloo_api_v1_ssl_pb.UpstreamSslConfig;
      reader.readMessage(value,github_com_solo$io_gloo_projects_gloo_api_v1_ssl_pb.UpstreamSslConfig.deserializeBinaryFromReader);
      msg.setSslConfig(value);
      break;
    case 2:
      var value = new github_com_solo$io_gloo_projects_gloo_api_v1_circuit_breaker_pb.CircuitBreakerConfig;
      reader.readMessage(value,github_com_solo$io_gloo_projects_gloo_api_v1_circuit_breaker_pb.CircuitBreakerConfig.deserializeBinaryFromReader);
      msg.setCircuitBreakers(value);
      break;
    case 3:
      var value = new github_com_solo$io_gloo_projects_gloo_api_v1_load_balancer_pb.LoadBalancerConfig;
      reader.readMessage(value,github_com_solo$io_gloo_projects_gloo_api_v1_load_balancer_pb.LoadBalancerConfig.deserializeBinaryFromReader);
      msg.setLoadBalancerConfig(value);
      break;
    case 4:
      var value = new github_com_solo$io_gloo_projects_gloo_api_v1_connection_pb.ConnectionConfig;
      reader.readMessage(value,github_com_solo$io_gloo_projects_gloo_api_v1_connection_pb.ConnectionConfig.deserializeBinaryFromReader);
      msg.setConnectionConfig(value);
      break;
    case 5:
      var value = new github_com_solo$io_gloo_projects_gloo_api_external_envoy_api_v2_core_health_check_pb.HealthCheck;
      reader.readMessage(value,github_com_solo$io_gloo_projects_gloo_api_external_envoy_api_v2_core_health_check_pb.HealthCheck.deserializeBinaryFromReader);
      msg.addHealthChecks(value);
      break;
    case 6:
      var value = new github_com_solo$io_gloo_projects_gloo_api_external_envoy_api_v2_cluster_outlier_detection_pb.OutlierDetection;
      reader.readMessage(value,github_com_solo$io_gloo_projects_gloo_api_external_envoy_api_v2_cluster_outlier_detection_pb.OutlierDetection.deserializeBinaryFromReader);
      msg.setOutlierDetection(value);
      break;
    case 7:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setUseHttp2(value);
      break;
    case 8:
      var value = new github_com_solo$io_gloo_projects_gloo_api_v1_plugins_kubernetes_kubernetes_pb.UpstreamSpec;
      reader.readMessage(value,github_com_solo$io_gloo_projects_gloo_api_v1_plugins_kubernetes_kubernetes_pb.UpstreamSpec.deserializeBinaryFromReader);
      msg.setKube(value);
      break;
    case 9:
      var value = new github_com_solo$io_gloo_projects_gloo_api_v1_plugins_static_static_pb.UpstreamSpec;
      reader.readMessage(value,github_com_solo$io_gloo_projects_gloo_api_v1_plugins_static_static_pb.UpstreamSpec.deserializeBinaryFromReader);
      msg.setStatic(value);
      break;
    case 10:
      var value = new github_com_solo$io_gloo_projects_gloo_api_v1_plugins_pipe_pipe_pb.UpstreamSpec;
      reader.readMessage(value,github_com_solo$io_gloo_projects_gloo_api_v1_plugins_pipe_pipe_pb.UpstreamSpec.deserializeBinaryFromReader);
      msg.setPipe(value);
      break;
    case 11:
      var value = new github_com_solo$io_gloo_projects_gloo_api_v1_plugins_aws_aws_pb.UpstreamSpec;
      reader.readMessage(value,github_com_solo$io_gloo_projects_gloo_api_v1_plugins_aws_aws_pb.UpstreamSpec.deserializeBinaryFromReader);
      msg.setAws(value);
      break;
    case 12:
      var value = new github_com_solo$io_gloo_projects_gloo_api_v1_plugins_azure_azure_pb.UpstreamSpec;
      reader.readMessage(value,github_com_solo$io_gloo_projects_gloo_api_v1_plugins_azure_azure_pb.UpstreamSpec.deserializeBinaryFromReader);
      msg.setAzure(value);
      break;
    case 13:
      var value = new github_com_solo$io_gloo_projects_gloo_api_v1_plugins_consul_consul_pb.UpstreamSpec;
      reader.readMessage(value,github_com_solo$io_gloo_projects_gloo_api_v1_plugins_consul_consul_pb.UpstreamSpec.deserializeBinaryFromReader);
      msg.setConsul(value);
      break;
    case 14:
      var value = new github_com_solo$io_gloo_projects_gloo_api_v1_plugins_aws_ec2_aws_ec2_pb.UpstreamSpec;
      reader.readMessage(value,github_com_solo$io_gloo_projects_gloo_api_v1_plugins_aws_ec2_aws_ec2_pb.UpstreamSpec.deserializeBinaryFromReader);
      msg.setAwsEc2(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.gloo.solo.io.UpstreamSpec.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.gloo.solo.io.UpstreamSpec.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.gloo.solo.io.UpstreamSpec} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gloo.solo.io.UpstreamSpec.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSslConfig();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      github_com_solo$io_gloo_projects_gloo_api_v1_ssl_pb.UpstreamSslConfig.serializeBinaryToWriter
    );
  }
  f = message.getCircuitBreakers();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      github_com_solo$io_gloo_projects_gloo_api_v1_circuit_breaker_pb.CircuitBreakerConfig.serializeBinaryToWriter
    );
  }
  f = message.getLoadBalancerConfig();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      github_com_solo$io_gloo_projects_gloo_api_v1_load_balancer_pb.LoadBalancerConfig.serializeBinaryToWriter
    );
  }
  f = message.getConnectionConfig();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      github_com_solo$io_gloo_projects_gloo_api_v1_connection_pb.ConnectionConfig.serializeBinaryToWriter
    );
  }
  f = message.getHealthChecksList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      github_com_solo$io_gloo_projects_gloo_api_external_envoy_api_v2_core_health_check_pb.HealthCheck.serializeBinaryToWriter
    );
  }
  f = message.getOutlierDetection();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      github_com_solo$io_gloo_projects_gloo_api_external_envoy_api_v2_cluster_outlier_detection_pb.OutlierDetection.serializeBinaryToWriter
    );
  }
  f = message.getUseHttp2();
  if (f) {
    writer.writeBool(
      7,
      f
    );
  }
  f = message.getKube();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      github_com_solo$io_gloo_projects_gloo_api_v1_plugins_kubernetes_kubernetes_pb.UpstreamSpec.serializeBinaryToWriter
    );
  }
  f = message.getStatic();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      github_com_solo$io_gloo_projects_gloo_api_v1_plugins_static_static_pb.UpstreamSpec.serializeBinaryToWriter
    );
  }
  f = message.getPipe();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      github_com_solo$io_gloo_projects_gloo_api_v1_plugins_pipe_pipe_pb.UpstreamSpec.serializeBinaryToWriter
    );
  }
  f = message.getAws();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      github_com_solo$io_gloo_projects_gloo_api_v1_plugins_aws_aws_pb.UpstreamSpec.serializeBinaryToWriter
    );
  }
  f = message.getAzure();
  if (f != null) {
    writer.writeMessage(
      12,
      f,
      github_com_solo$io_gloo_projects_gloo_api_v1_plugins_azure_azure_pb.UpstreamSpec.serializeBinaryToWriter
    );
  }
  f = message.getConsul();
  if (f != null) {
    writer.writeMessage(
      13,
      f,
      github_com_solo$io_gloo_projects_gloo_api_v1_plugins_consul_consul_pb.UpstreamSpec.serializeBinaryToWriter
    );
  }
  f = message.getAwsEc2();
  if (f != null) {
    writer.writeMessage(
      14,
      f,
      github_com_solo$io_gloo_projects_gloo_api_v1_plugins_aws_ec2_aws_ec2_pb.UpstreamSpec.serializeBinaryToWriter
    );
  }
};


/**
 * optional UpstreamSslConfig ssl_config = 1;
 * @return {?proto.gloo.solo.io.UpstreamSslConfig}
 */
proto.gloo.solo.io.UpstreamSpec.prototype.getSslConfig = function() {
  return /** @type{?proto.gloo.solo.io.UpstreamSslConfig} */ (
    jspb.Message.getWrapperField(this, github_com_solo$io_gloo_projects_gloo_api_v1_ssl_pb.UpstreamSslConfig, 1));
};


/** @param {?proto.gloo.solo.io.UpstreamSslConfig|undefined} value */
proto.gloo.solo.io.UpstreamSpec.prototype.setSslConfig = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.gloo.solo.io.UpstreamSpec.prototype.clearSslConfig = function() {
  this.setSslConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.gloo.solo.io.UpstreamSpec.prototype.hasSslConfig = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional CircuitBreakerConfig circuit_breakers = 2;
 * @return {?proto.gloo.solo.io.CircuitBreakerConfig}
 */
proto.gloo.solo.io.UpstreamSpec.prototype.getCircuitBreakers = function() {
  return /** @type{?proto.gloo.solo.io.CircuitBreakerConfig} */ (
    jspb.Message.getWrapperField(this, github_com_solo$io_gloo_projects_gloo_api_v1_circuit_breaker_pb.CircuitBreakerConfig, 2));
};


/** @param {?proto.gloo.solo.io.CircuitBreakerConfig|undefined} value */
proto.gloo.solo.io.UpstreamSpec.prototype.setCircuitBreakers = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.gloo.solo.io.UpstreamSpec.prototype.clearCircuitBreakers = function() {
  this.setCircuitBreakers(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.gloo.solo.io.UpstreamSpec.prototype.hasCircuitBreakers = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional LoadBalancerConfig load_balancer_config = 3;
 * @return {?proto.gloo.solo.io.LoadBalancerConfig}
 */
proto.gloo.solo.io.UpstreamSpec.prototype.getLoadBalancerConfig = function() {
  return /** @type{?proto.gloo.solo.io.LoadBalancerConfig} */ (
    jspb.Message.getWrapperField(this, github_com_solo$io_gloo_projects_gloo_api_v1_load_balancer_pb.LoadBalancerConfig, 3));
};


/** @param {?proto.gloo.solo.io.LoadBalancerConfig|undefined} value */
proto.gloo.solo.io.UpstreamSpec.prototype.setLoadBalancerConfig = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.gloo.solo.io.UpstreamSpec.prototype.clearLoadBalancerConfig = function() {
  this.setLoadBalancerConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.gloo.solo.io.UpstreamSpec.prototype.hasLoadBalancerConfig = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional ConnectionConfig connection_config = 4;
 * @return {?proto.gloo.solo.io.ConnectionConfig}
 */
proto.gloo.solo.io.UpstreamSpec.prototype.getConnectionConfig = function() {
  return /** @type{?proto.gloo.solo.io.ConnectionConfig} */ (
    jspb.Message.getWrapperField(this, github_com_solo$io_gloo_projects_gloo_api_v1_connection_pb.ConnectionConfig, 4));
};


/** @param {?proto.gloo.solo.io.ConnectionConfig|undefined} value */
proto.gloo.solo.io.UpstreamSpec.prototype.setConnectionConfig = function(value) {
  jspb.Message.setWrapperField(this, 4, value);
};


proto.gloo.solo.io.UpstreamSpec.prototype.clearConnectionConfig = function() {
  this.setConnectionConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.gloo.solo.io.UpstreamSpec.prototype.hasConnectionConfig = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * repeated envoy.api.v2.core.HealthCheck health_checks = 5;
 * @return {!Array<!proto.envoy.api.v2.core.HealthCheck>}
 */
proto.gloo.solo.io.UpstreamSpec.prototype.getHealthChecksList = function() {
  return /** @type{!Array<!proto.envoy.api.v2.core.HealthCheck>} */ (
    jspb.Message.getRepeatedWrapperField(this, github_com_solo$io_gloo_projects_gloo_api_external_envoy_api_v2_core_health_check_pb.HealthCheck, 5));
};


/** @param {!Array<!proto.envoy.api.v2.core.HealthCheck>} value */
proto.gloo.solo.io.UpstreamSpec.prototype.setHealthChecksList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.envoy.api.v2.core.HealthCheck=} opt_value
 * @param {number=} opt_index
 * @return {!proto.envoy.api.v2.core.HealthCheck}
 */
proto.gloo.solo.io.UpstreamSpec.prototype.addHealthChecks = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.envoy.api.v2.core.HealthCheck, opt_index);
};


proto.gloo.solo.io.UpstreamSpec.prototype.clearHealthChecksList = function() {
  this.setHealthChecksList([]);
};


/**
 * optional envoy.api.v2.cluster.OutlierDetection outlier_detection = 6;
 * @return {?proto.envoy.api.v2.cluster.OutlierDetection}
 */
proto.gloo.solo.io.UpstreamSpec.prototype.getOutlierDetection = function() {
  return /** @type{?proto.envoy.api.v2.cluster.OutlierDetection} */ (
    jspb.Message.getWrapperField(this, github_com_solo$io_gloo_projects_gloo_api_external_envoy_api_v2_cluster_outlier_detection_pb.OutlierDetection, 6));
};


/** @param {?proto.envoy.api.v2.cluster.OutlierDetection|undefined} value */
proto.gloo.solo.io.UpstreamSpec.prototype.setOutlierDetection = function(value) {
  jspb.Message.setWrapperField(this, 6, value);
};


proto.gloo.solo.io.UpstreamSpec.prototype.clearOutlierDetection = function() {
  this.setOutlierDetection(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.gloo.solo.io.UpstreamSpec.prototype.hasOutlierDetection = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional bool use_http2 = 7;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.gloo.solo.io.UpstreamSpec.prototype.getUseHttp2 = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 7, false));
};


/** @param {boolean} value */
proto.gloo.solo.io.UpstreamSpec.prototype.setUseHttp2 = function(value) {
  jspb.Message.setProto3BooleanField(this, 7, value);
};


/**
 * optional kubernetes.plugins.gloo.solo.io.UpstreamSpec kube = 8;
 * @return {?proto.kubernetes.plugins.gloo.solo.io.UpstreamSpec}
 */
proto.gloo.solo.io.UpstreamSpec.prototype.getKube = function() {
  return /** @type{?proto.kubernetes.plugins.gloo.solo.io.UpstreamSpec} */ (
    jspb.Message.getWrapperField(this, github_com_solo$io_gloo_projects_gloo_api_v1_plugins_kubernetes_kubernetes_pb.UpstreamSpec, 8));
};


/** @param {?proto.kubernetes.plugins.gloo.solo.io.UpstreamSpec|undefined} value */
proto.gloo.solo.io.UpstreamSpec.prototype.setKube = function(value) {
  jspb.Message.setOneofWrapperField(this, 8, proto.gloo.solo.io.UpstreamSpec.oneofGroups_[0], value);
};


proto.gloo.solo.io.UpstreamSpec.prototype.clearKube = function() {
  this.setKube(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.gloo.solo.io.UpstreamSpec.prototype.hasKube = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional static.plugins.gloo.solo.io.UpstreamSpec static = 9;
 * @return {?proto.static.plugins.gloo.solo.io.UpstreamSpec}
 */
proto.gloo.solo.io.UpstreamSpec.prototype.getStatic = function() {
  return /** @type{?proto.static.plugins.gloo.solo.io.UpstreamSpec} */ (
    jspb.Message.getWrapperField(this, github_com_solo$io_gloo_projects_gloo_api_v1_plugins_static_static_pb.UpstreamSpec, 9));
};


/** @param {?proto.static.plugins.gloo.solo.io.UpstreamSpec|undefined} value */
proto.gloo.solo.io.UpstreamSpec.prototype.setStatic = function(value) {
  jspb.Message.setOneofWrapperField(this, 9, proto.gloo.solo.io.UpstreamSpec.oneofGroups_[0], value);
};


proto.gloo.solo.io.UpstreamSpec.prototype.clearStatic = function() {
  this.setStatic(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.gloo.solo.io.UpstreamSpec.prototype.hasStatic = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional pipe.plugins.gloo.solo.io.UpstreamSpec pipe = 10;
 * @return {?proto.pipe.plugins.gloo.solo.io.UpstreamSpec}
 */
proto.gloo.solo.io.UpstreamSpec.prototype.getPipe = function() {
  return /** @type{?proto.pipe.plugins.gloo.solo.io.UpstreamSpec} */ (
    jspb.Message.getWrapperField(this, github_com_solo$io_gloo_projects_gloo_api_v1_plugins_pipe_pipe_pb.UpstreamSpec, 10));
};


/** @param {?proto.pipe.plugins.gloo.solo.io.UpstreamSpec|undefined} value */
proto.gloo.solo.io.UpstreamSpec.prototype.setPipe = function(value) {
  jspb.Message.setOneofWrapperField(this, 10, proto.gloo.solo.io.UpstreamSpec.oneofGroups_[0], value);
};


proto.gloo.solo.io.UpstreamSpec.prototype.clearPipe = function() {
  this.setPipe(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.gloo.solo.io.UpstreamSpec.prototype.hasPipe = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional aws.plugins.gloo.solo.io.UpstreamSpec aws = 11;
 * @return {?proto.aws.plugins.gloo.solo.io.UpstreamSpec}
 */
proto.gloo.solo.io.UpstreamSpec.prototype.getAws = function() {
  return /** @type{?proto.aws.plugins.gloo.solo.io.UpstreamSpec} */ (
    jspb.Message.getWrapperField(this, github_com_solo$io_gloo_projects_gloo_api_v1_plugins_aws_aws_pb.UpstreamSpec, 11));
};


/** @param {?proto.aws.plugins.gloo.solo.io.UpstreamSpec|undefined} value */
proto.gloo.solo.io.UpstreamSpec.prototype.setAws = function(value) {
  jspb.Message.setOneofWrapperField(this, 11, proto.gloo.solo.io.UpstreamSpec.oneofGroups_[0], value);
};


proto.gloo.solo.io.UpstreamSpec.prototype.clearAws = function() {
  this.setAws(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.gloo.solo.io.UpstreamSpec.prototype.hasAws = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional azure.plugins.gloo.solo.io.UpstreamSpec azure = 12;
 * @return {?proto.azure.plugins.gloo.solo.io.UpstreamSpec}
 */
proto.gloo.solo.io.UpstreamSpec.prototype.getAzure = function() {
  return /** @type{?proto.azure.plugins.gloo.solo.io.UpstreamSpec} */ (
    jspb.Message.getWrapperField(this, github_com_solo$io_gloo_projects_gloo_api_v1_plugins_azure_azure_pb.UpstreamSpec, 12));
};


/** @param {?proto.azure.plugins.gloo.solo.io.UpstreamSpec|undefined} value */
proto.gloo.solo.io.UpstreamSpec.prototype.setAzure = function(value) {
  jspb.Message.setOneofWrapperField(this, 12, proto.gloo.solo.io.UpstreamSpec.oneofGroups_[0], value);
};


proto.gloo.solo.io.UpstreamSpec.prototype.clearAzure = function() {
  this.setAzure(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.gloo.solo.io.UpstreamSpec.prototype.hasAzure = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional consul.plugins.gloo.solo.io.UpstreamSpec consul = 13;
 * @return {?proto.consul.plugins.gloo.solo.io.UpstreamSpec}
 */
proto.gloo.solo.io.UpstreamSpec.prototype.getConsul = function() {
  return /** @type{?proto.consul.plugins.gloo.solo.io.UpstreamSpec} */ (
    jspb.Message.getWrapperField(this, github_com_solo$io_gloo_projects_gloo_api_v1_plugins_consul_consul_pb.UpstreamSpec, 13));
};


/** @param {?proto.consul.plugins.gloo.solo.io.UpstreamSpec|undefined} value */
proto.gloo.solo.io.UpstreamSpec.prototype.setConsul = function(value) {
  jspb.Message.setOneofWrapperField(this, 13, proto.gloo.solo.io.UpstreamSpec.oneofGroups_[0], value);
};


proto.gloo.solo.io.UpstreamSpec.prototype.clearConsul = function() {
  this.setConsul(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.gloo.solo.io.UpstreamSpec.prototype.hasConsul = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * optional aws_ec2.plugins.gloo.solo.io.UpstreamSpec aws_ec2 = 14;
 * @return {?proto.aws_ec2.plugins.gloo.solo.io.UpstreamSpec}
 */
proto.gloo.solo.io.UpstreamSpec.prototype.getAwsEc2 = function() {
  return /** @type{?proto.aws_ec2.plugins.gloo.solo.io.UpstreamSpec} */ (
    jspb.Message.getWrapperField(this, github_com_solo$io_gloo_projects_gloo_api_v1_plugins_aws_ec2_aws_ec2_pb.UpstreamSpec, 14));
};


/** @param {?proto.aws_ec2.plugins.gloo.solo.io.UpstreamSpec|undefined} value */
proto.gloo.solo.io.UpstreamSpec.prototype.setAwsEc2 = function(value) {
  jspb.Message.setOneofWrapperField(this, 14, proto.gloo.solo.io.UpstreamSpec.oneofGroups_[0], value);
};


proto.gloo.solo.io.UpstreamSpec.prototype.clearAwsEc2 = function() {
  this.setAwsEc2(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.gloo.solo.io.UpstreamSpec.prototype.hasAwsEc2 = function() {
  return jspb.Message.getField(this, 14) != null;
};


goog.object.extend(exports, proto.gloo.solo.io);
