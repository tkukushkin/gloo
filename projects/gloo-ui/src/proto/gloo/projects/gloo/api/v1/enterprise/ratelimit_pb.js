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

var envoy_api_v2_discovery_pb = require('../../../../../../solo-kit/api/external/envoy/api/v2/discovery_pb.js');
var google_api_annotations_pb = require('../../../../../../solo-kit/api/external/google/api/annotations_pb.js');
var solo$apis_api_rate$limiter_v1alpha1_ratelimit_pb = require('../../../../../../solo-apis/api/rate-limiter/v1alpha1/ratelimit_pb.js');
var gogoproto_gogo_pb = require('../../../../../../gogoproto/gogo_pb.js');
var extproto_ext_pb = require('../../../../../../protoc-gen-ext/extproto/ext_pb.js');
goog.exportSymbol('proto.glooe.solo.io.RateLimitConfig', null, global);

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
proto.glooe.solo.io.RateLimitConfig = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.glooe.solo.io.RateLimitConfig.repeatedFields_, null);
};
goog.inherits(proto.glooe.solo.io.RateLimitConfig, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.glooe.solo.io.RateLimitConfig.displayName = 'proto.glooe.solo.io.RateLimitConfig';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.glooe.solo.io.RateLimitConfig.repeatedFields_ = [2,3];



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
proto.glooe.solo.io.RateLimitConfig.prototype.toObject = function(opt_includeInstance) {
  return proto.glooe.solo.io.RateLimitConfig.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.glooe.solo.io.RateLimitConfig} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.glooe.solo.io.RateLimitConfig.toObject = function(includeInstance, msg) {
  var f, obj = {
    domain: jspb.Message.getFieldWithDefault(msg, 1, ""),
    descriptorsList: jspb.Message.toObjectList(msg.getDescriptorsList(),
    solo$apis_api_rate$limiter_v1alpha1_ratelimit_pb.Descriptor.toObject, includeInstance),
    setDescriptorsList: jspb.Message.toObjectList(msg.getSetDescriptorsList(),
    solo$apis_api_rate$limiter_v1alpha1_ratelimit_pb.SetDescriptor.toObject, includeInstance)
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
 * @return {!proto.glooe.solo.io.RateLimitConfig}
 */
proto.glooe.solo.io.RateLimitConfig.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.glooe.solo.io.RateLimitConfig;
  return proto.glooe.solo.io.RateLimitConfig.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.glooe.solo.io.RateLimitConfig} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.glooe.solo.io.RateLimitConfig}
 */
proto.glooe.solo.io.RateLimitConfig.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setDomain(value);
      break;
    case 2:
      var value = new solo$apis_api_rate$limiter_v1alpha1_ratelimit_pb.Descriptor;
      reader.readMessage(value,solo$apis_api_rate$limiter_v1alpha1_ratelimit_pb.Descriptor.deserializeBinaryFromReader);
      msg.addDescriptors(value);
      break;
    case 3:
      var value = new solo$apis_api_rate$limiter_v1alpha1_ratelimit_pb.SetDescriptor;
      reader.readMessage(value,solo$apis_api_rate$limiter_v1alpha1_ratelimit_pb.SetDescriptor.deserializeBinaryFromReader);
      msg.addSetDescriptors(value);
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
proto.glooe.solo.io.RateLimitConfig.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.glooe.solo.io.RateLimitConfig.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.glooe.solo.io.RateLimitConfig} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.glooe.solo.io.RateLimitConfig.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDomain();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDescriptorsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      solo$apis_api_rate$limiter_v1alpha1_ratelimit_pb.Descriptor.serializeBinaryToWriter
    );
  }
  f = message.getSetDescriptorsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      solo$apis_api_rate$limiter_v1alpha1_ratelimit_pb.SetDescriptor.serializeBinaryToWriter
    );
  }
};


/**
 * optional string domain = 1;
 * @return {string}
 */
proto.glooe.solo.io.RateLimitConfig.prototype.getDomain = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.glooe.solo.io.RateLimitConfig.prototype.setDomain = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated ratelimit.api.solo.io.Descriptor descriptors = 2;
 * @return {!Array<!proto.ratelimit.api.solo.io.Descriptor>}
 */
proto.glooe.solo.io.RateLimitConfig.prototype.getDescriptorsList = function() {
  return /** @type{!Array<!proto.ratelimit.api.solo.io.Descriptor>} */ (
    jspb.Message.getRepeatedWrapperField(this, solo$apis_api_rate$limiter_v1alpha1_ratelimit_pb.Descriptor, 2));
};


/** @param {!Array<!proto.ratelimit.api.solo.io.Descriptor>} value */
proto.glooe.solo.io.RateLimitConfig.prototype.setDescriptorsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.ratelimit.api.solo.io.Descriptor=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ratelimit.api.solo.io.Descriptor}
 */
proto.glooe.solo.io.RateLimitConfig.prototype.addDescriptors = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.ratelimit.api.solo.io.Descriptor, opt_index);
};


proto.glooe.solo.io.RateLimitConfig.prototype.clearDescriptorsList = function() {
  this.setDescriptorsList([]);
};


/**
 * repeated ratelimit.api.solo.io.SetDescriptor set_descriptors = 3;
 * @return {!Array<!proto.ratelimit.api.solo.io.SetDescriptor>}
 */
proto.glooe.solo.io.RateLimitConfig.prototype.getSetDescriptorsList = function() {
  return /** @type{!Array<!proto.ratelimit.api.solo.io.SetDescriptor>} */ (
    jspb.Message.getRepeatedWrapperField(this, solo$apis_api_rate$limiter_v1alpha1_ratelimit_pb.SetDescriptor, 3));
};


/** @param {!Array<!proto.ratelimit.api.solo.io.SetDescriptor>} value */
proto.glooe.solo.io.RateLimitConfig.prototype.setSetDescriptorsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.ratelimit.api.solo.io.SetDescriptor=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ratelimit.api.solo.io.SetDescriptor}
 */
proto.glooe.solo.io.RateLimitConfig.prototype.addSetDescriptors = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.ratelimit.api.solo.io.SetDescriptor, opt_index);
};


proto.glooe.solo.io.RateLimitConfig.prototype.clearSetDescriptorsList = function() {
  this.setSetDescriptorsList([]);
};


goog.object.extend(exports, proto.glooe.solo.io);
