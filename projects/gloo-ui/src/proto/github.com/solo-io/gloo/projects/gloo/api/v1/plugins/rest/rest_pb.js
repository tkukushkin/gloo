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

var gogoproto_gogo_pb = require('../../../../../../../../gogo/protobuf/gogoproto/gogo_pb.js');
var github_com_solo$io_gloo_projects_gloo_api_external_envoy_extensions_transformation_transformation_pb = require('../../../../../../../../../github.com/solo-io/gloo/projects/gloo/api/external/envoy/extensions/transformation/transformation_pb.js');
var github_com_solo$io_gloo_projects_gloo_api_v1_plugins_transformation_parameters_pb = require('../../../../../../../../../github.com/solo-io/gloo/projects/gloo/api/v1/plugins/transformation/parameters_pb.js');
goog.exportSymbol('proto.rest.plugins.gloo.solo.io.DestinationSpec', null, global);
goog.exportSymbol('proto.rest.plugins.gloo.solo.io.ServiceSpec', null, global);
goog.exportSymbol('proto.rest.plugins.gloo.solo.io.ServiceSpec.SwaggerInfo', null, global);

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
proto.rest.plugins.gloo.solo.io.ServiceSpec = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rest.plugins.gloo.solo.io.ServiceSpec, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.rest.plugins.gloo.solo.io.ServiceSpec.displayName = 'proto.rest.plugins.gloo.solo.io.ServiceSpec';
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
proto.rest.plugins.gloo.solo.io.ServiceSpec.prototype.toObject = function(opt_includeInstance) {
  return proto.rest.plugins.gloo.solo.io.ServiceSpec.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rest.plugins.gloo.solo.io.ServiceSpec} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rest.plugins.gloo.solo.io.ServiceSpec.toObject = function(includeInstance, msg) {
  var f, obj = {
    transformationsMap: (f = msg.getTransformationsMap()) ? f.toObject(includeInstance, proto.envoy.api.v2.filter.http.TransformationTemplate.toObject) : [],
    swaggerInfo: (f = msg.getSwaggerInfo()) && proto.rest.plugins.gloo.solo.io.ServiceSpec.SwaggerInfo.toObject(includeInstance, f)
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
 * @return {!proto.rest.plugins.gloo.solo.io.ServiceSpec}
 */
proto.rest.plugins.gloo.solo.io.ServiceSpec.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rest.plugins.gloo.solo.io.ServiceSpec;
  return proto.rest.plugins.gloo.solo.io.ServiceSpec.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rest.plugins.gloo.solo.io.ServiceSpec} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rest.plugins.gloo.solo.io.ServiceSpec}
 */
proto.rest.plugins.gloo.solo.io.ServiceSpec.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = msg.getTransformationsMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readMessage, proto.envoy.api.v2.filter.http.TransformationTemplate.deserializeBinaryFromReader, "");
         });
      break;
    case 2:
      var value = new proto.rest.plugins.gloo.solo.io.ServiceSpec.SwaggerInfo;
      reader.readMessage(value,proto.rest.plugins.gloo.solo.io.ServiceSpec.SwaggerInfo.deserializeBinaryFromReader);
      msg.setSwaggerInfo(value);
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
proto.rest.plugins.gloo.solo.io.ServiceSpec.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rest.plugins.gloo.solo.io.ServiceSpec.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rest.plugins.gloo.solo.io.ServiceSpec} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rest.plugins.gloo.solo.io.ServiceSpec.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTransformationsMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(1, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeMessage, proto.envoy.api.v2.filter.http.TransformationTemplate.serializeBinaryToWriter);
  }
  f = message.getSwaggerInfo();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.rest.plugins.gloo.solo.io.ServiceSpec.SwaggerInfo.serializeBinaryToWriter
    );
  }
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
proto.rest.plugins.gloo.solo.io.ServiceSpec.SwaggerInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.rest.plugins.gloo.solo.io.ServiceSpec.SwaggerInfo.oneofGroups_);
};
goog.inherits(proto.rest.plugins.gloo.solo.io.ServiceSpec.SwaggerInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.rest.plugins.gloo.solo.io.ServiceSpec.SwaggerInfo.displayName = 'proto.rest.plugins.gloo.solo.io.ServiceSpec.SwaggerInfo';
}
/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.rest.plugins.gloo.solo.io.ServiceSpec.SwaggerInfo.oneofGroups_ = [[1,2]];

/**
 * @enum {number}
 */
proto.rest.plugins.gloo.solo.io.ServiceSpec.SwaggerInfo.SwaggerSpecCase = {
  SWAGGER_SPEC_NOT_SET: 0,
  URL: 1,
  INLINE: 2
};

/**
 * @return {proto.rest.plugins.gloo.solo.io.ServiceSpec.SwaggerInfo.SwaggerSpecCase}
 */
proto.rest.plugins.gloo.solo.io.ServiceSpec.SwaggerInfo.prototype.getSwaggerSpecCase = function() {
  return /** @type {proto.rest.plugins.gloo.solo.io.ServiceSpec.SwaggerInfo.SwaggerSpecCase} */(jspb.Message.computeOneofCase(this, proto.rest.plugins.gloo.solo.io.ServiceSpec.SwaggerInfo.oneofGroups_[0]));
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
proto.rest.plugins.gloo.solo.io.ServiceSpec.SwaggerInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.rest.plugins.gloo.solo.io.ServiceSpec.SwaggerInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rest.plugins.gloo.solo.io.ServiceSpec.SwaggerInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rest.plugins.gloo.solo.io.ServiceSpec.SwaggerInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    url: jspb.Message.getFieldWithDefault(msg, 1, ""),
    inline: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.rest.plugins.gloo.solo.io.ServiceSpec.SwaggerInfo}
 */
proto.rest.plugins.gloo.solo.io.ServiceSpec.SwaggerInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rest.plugins.gloo.solo.io.ServiceSpec.SwaggerInfo;
  return proto.rest.plugins.gloo.solo.io.ServiceSpec.SwaggerInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rest.plugins.gloo.solo.io.ServiceSpec.SwaggerInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rest.plugins.gloo.solo.io.ServiceSpec.SwaggerInfo}
 */
proto.rest.plugins.gloo.solo.io.ServiceSpec.SwaggerInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUrl(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setInline(value);
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
proto.rest.plugins.gloo.solo.io.ServiceSpec.SwaggerInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rest.plugins.gloo.solo.io.ServiceSpec.SwaggerInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rest.plugins.gloo.solo.io.ServiceSpec.SwaggerInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rest.plugins.gloo.solo.io.ServiceSpec.SwaggerInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string url = 1;
 * @return {string}
 */
proto.rest.plugins.gloo.solo.io.ServiceSpec.SwaggerInfo.prototype.getUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.rest.plugins.gloo.solo.io.ServiceSpec.SwaggerInfo.prototype.setUrl = function(value) {
  jspb.Message.setOneofField(this, 1, proto.rest.plugins.gloo.solo.io.ServiceSpec.SwaggerInfo.oneofGroups_[0], value);
};


proto.rest.plugins.gloo.solo.io.ServiceSpec.SwaggerInfo.prototype.clearUrl = function() {
  jspb.Message.setOneofField(this, 1, proto.rest.plugins.gloo.solo.io.ServiceSpec.SwaggerInfo.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.rest.plugins.gloo.solo.io.ServiceSpec.SwaggerInfo.prototype.hasUrl = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string inline = 2;
 * @return {string}
 */
proto.rest.plugins.gloo.solo.io.ServiceSpec.SwaggerInfo.prototype.getInline = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.rest.plugins.gloo.solo.io.ServiceSpec.SwaggerInfo.prototype.setInline = function(value) {
  jspb.Message.setOneofField(this, 2, proto.rest.plugins.gloo.solo.io.ServiceSpec.SwaggerInfo.oneofGroups_[0], value);
};


proto.rest.plugins.gloo.solo.io.ServiceSpec.SwaggerInfo.prototype.clearInline = function() {
  jspb.Message.setOneofField(this, 2, proto.rest.plugins.gloo.solo.io.ServiceSpec.SwaggerInfo.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.rest.plugins.gloo.solo.io.ServiceSpec.SwaggerInfo.prototype.hasInline = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * map<string, envoy.api.v2.filter.http.TransformationTemplate> transformations = 1;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!proto.envoy.api.v2.filter.http.TransformationTemplate>}
 */
proto.rest.plugins.gloo.solo.io.ServiceSpec.prototype.getTransformationsMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!proto.envoy.api.v2.filter.http.TransformationTemplate>} */ (
      jspb.Message.getMapField(this, 1, opt_noLazyCreate,
      proto.envoy.api.v2.filter.http.TransformationTemplate));
};


proto.rest.plugins.gloo.solo.io.ServiceSpec.prototype.clearTransformationsMap = function() {
  this.getTransformationsMap().clear();
};


/**
 * optional SwaggerInfo swagger_info = 2;
 * @return {?proto.rest.plugins.gloo.solo.io.ServiceSpec.SwaggerInfo}
 */
proto.rest.plugins.gloo.solo.io.ServiceSpec.prototype.getSwaggerInfo = function() {
  return /** @type{?proto.rest.plugins.gloo.solo.io.ServiceSpec.SwaggerInfo} */ (
    jspb.Message.getWrapperField(this, proto.rest.plugins.gloo.solo.io.ServiceSpec.SwaggerInfo, 2));
};


/** @param {?proto.rest.plugins.gloo.solo.io.ServiceSpec.SwaggerInfo|undefined} value */
proto.rest.plugins.gloo.solo.io.ServiceSpec.prototype.setSwaggerInfo = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.rest.plugins.gloo.solo.io.ServiceSpec.prototype.clearSwaggerInfo = function() {
  this.setSwaggerInfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.rest.plugins.gloo.solo.io.ServiceSpec.prototype.hasSwaggerInfo = function() {
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
proto.rest.plugins.gloo.solo.io.DestinationSpec = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rest.plugins.gloo.solo.io.DestinationSpec, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.rest.plugins.gloo.solo.io.DestinationSpec.displayName = 'proto.rest.plugins.gloo.solo.io.DestinationSpec';
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
proto.rest.plugins.gloo.solo.io.DestinationSpec.prototype.toObject = function(opt_includeInstance) {
  return proto.rest.plugins.gloo.solo.io.DestinationSpec.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rest.plugins.gloo.solo.io.DestinationSpec} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rest.plugins.gloo.solo.io.DestinationSpec.toObject = function(includeInstance, msg) {
  var f, obj = {
    functionName: jspb.Message.getFieldWithDefault(msg, 1, ""),
    parameters: (f = msg.getParameters()) && github_com_solo$io_gloo_projects_gloo_api_v1_plugins_transformation_parameters_pb.Parameters.toObject(includeInstance, f),
    responseTransformation: (f = msg.getResponseTransformation()) && github_com_solo$io_gloo_projects_gloo_api_external_envoy_extensions_transformation_transformation_pb.TransformationTemplate.toObject(includeInstance, f)
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
 * @return {!proto.rest.plugins.gloo.solo.io.DestinationSpec}
 */
proto.rest.plugins.gloo.solo.io.DestinationSpec.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rest.plugins.gloo.solo.io.DestinationSpec;
  return proto.rest.plugins.gloo.solo.io.DestinationSpec.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rest.plugins.gloo.solo.io.DestinationSpec} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rest.plugins.gloo.solo.io.DestinationSpec}
 */
proto.rest.plugins.gloo.solo.io.DestinationSpec.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setFunctionName(value);
      break;
    case 2:
      var value = new github_com_solo$io_gloo_projects_gloo_api_v1_plugins_transformation_parameters_pb.Parameters;
      reader.readMessage(value,github_com_solo$io_gloo_projects_gloo_api_v1_plugins_transformation_parameters_pb.Parameters.deserializeBinaryFromReader);
      msg.setParameters(value);
      break;
    case 3:
      var value = new github_com_solo$io_gloo_projects_gloo_api_external_envoy_extensions_transformation_transformation_pb.TransformationTemplate;
      reader.readMessage(value,github_com_solo$io_gloo_projects_gloo_api_external_envoy_extensions_transformation_transformation_pb.TransformationTemplate.deserializeBinaryFromReader);
      msg.setResponseTransformation(value);
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
proto.rest.plugins.gloo.solo.io.DestinationSpec.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rest.plugins.gloo.solo.io.DestinationSpec.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rest.plugins.gloo.solo.io.DestinationSpec} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rest.plugins.gloo.solo.io.DestinationSpec.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFunctionName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getParameters();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      github_com_solo$io_gloo_projects_gloo_api_v1_plugins_transformation_parameters_pb.Parameters.serializeBinaryToWriter
    );
  }
  f = message.getResponseTransformation();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      github_com_solo$io_gloo_projects_gloo_api_external_envoy_extensions_transformation_transformation_pb.TransformationTemplate.serializeBinaryToWriter
    );
  }
};


/**
 * optional string function_name = 1;
 * @return {string}
 */
proto.rest.plugins.gloo.solo.io.DestinationSpec.prototype.getFunctionName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.rest.plugins.gloo.solo.io.DestinationSpec.prototype.setFunctionName = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional transformation.plugins.gloo.solo.io.Parameters parameters = 2;
 * @return {?proto.transformation.plugins.gloo.solo.io.Parameters}
 */
proto.rest.plugins.gloo.solo.io.DestinationSpec.prototype.getParameters = function() {
  return /** @type{?proto.transformation.plugins.gloo.solo.io.Parameters} */ (
    jspb.Message.getWrapperField(this, github_com_solo$io_gloo_projects_gloo_api_v1_plugins_transformation_parameters_pb.Parameters, 2));
};


/** @param {?proto.transformation.plugins.gloo.solo.io.Parameters|undefined} value */
proto.rest.plugins.gloo.solo.io.DestinationSpec.prototype.setParameters = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.rest.plugins.gloo.solo.io.DestinationSpec.prototype.clearParameters = function() {
  this.setParameters(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.rest.plugins.gloo.solo.io.DestinationSpec.prototype.hasParameters = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional envoy.api.v2.filter.http.TransformationTemplate response_transformation = 3;
 * @return {?proto.envoy.api.v2.filter.http.TransformationTemplate}
 */
proto.rest.plugins.gloo.solo.io.DestinationSpec.prototype.getResponseTransformation = function() {
  return /** @type{?proto.envoy.api.v2.filter.http.TransformationTemplate} */ (
    jspb.Message.getWrapperField(this, github_com_solo$io_gloo_projects_gloo_api_external_envoy_extensions_transformation_transformation_pb.TransformationTemplate, 3));
};


/** @param {?proto.envoy.api.v2.filter.http.TransformationTemplate|undefined} value */
proto.rest.plugins.gloo.solo.io.DestinationSpec.prototype.setResponseTransformation = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.rest.plugins.gloo.solo.io.DestinationSpec.prototype.clearResponseTransformation = function() {
  this.setResponseTransformation(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.rest.plugins.gloo.solo.io.DestinationSpec.prototype.hasResponseTransformation = function() {
  return jspb.Message.getField(this, 3) != null;
};


goog.object.extend(exports, proto.rest.plugins.gloo.solo.io);
