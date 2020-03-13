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

var dev$portal_api_dev$portal_v1_common_pb = require('../../../../dev-portal/api/dev-portal/v1/common_pb.js');
var gogoproto_gogo_pb = require('../../../../gogoproto/gogo_pb.js');
var extproto_ext_pb = require('../../../../protoc-gen-ext/extproto/ext_pb.js');
goog.exportSymbol('proto.devportal.solo.io.UserSpec', null, global);
goog.exportSymbol('proto.devportal.solo.io.UserSpec.BasicAuth', null, global);
goog.exportSymbol('proto.devportal.solo.io.UserStatus', null, global);

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
proto.devportal.solo.io.UserSpec = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.devportal.solo.io.UserSpec.oneofGroups_);
};
goog.inherits(proto.devportal.solo.io.UserSpec, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.devportal.solo.io.UserSpec.displayName = 'proto.devportal.solo.io.UserSpec';
}
/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.devportal.solo.io.UserSpec.oneofGroups_ = [[3]];

/**
 * @enum {number}
 */
proto.devportal.solo.io.UserSpec.AuthmethodCase = {
  AUTHMETHOD_NOT_SET: 0,
  BASICAUTH: 3
};

/**
 * @return {proto.devportal.solo.io.UserSpec.AuthmethodCase}
 */
proto.devportal.solo.io.UserSpec.prototype.getAuthmethodCase = function() {
  return /** @type {proto.devportal.solo.io.UserSpec.AuthmethodCase} */(jspb.Message.computeOneofCase(this, proto.devportal.solo.io.UserSpec.oneofGroups_[0]));
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
proto.devportal.solo.io.UserSpec.prototype.toObject = function(opt_includeInstance) {
  return proto.devportal.solo.io.UserSpec.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.devportal.solo.io.UserSpec} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.devportal.solo.io.UserSpec.toObject = function(includeInstance, msg) {
  var f, obj = {
    username: jspb.Message.getFieldWithDefault(msg, 1, ""),
    email: jspb.Message.getFieldWithDefault(msg, 2, ""),
    basicauth: (f = msg.getBasicauth()) && proto.devportal.solo.io.UserSpec.BasicAuth.toObject(includeInstance, f)
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
 * @return {!proto.devportal.solo.io.UserSpec}
 */
proto.devportal.solo.io.UserSpec.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.devportal.solo.io.UserSpec;
  return proto.devportal.solo.io.UserSpec.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.devportal.solo.io.UserSpec} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.devportal.solo.io.UserSpec}
 */
proto.devportal.solo.io.UserSpec.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUsername(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setEmail(value);
      break;
    case 3:
      var value = new proto.devportal.solo.io.UserSpec.BasicAuth;
      reader.readMessage(value,proto.devportal.solo.io.UserSpec.BasicAuth.deserializeBinaryFromReader);
      msg.setBasicauth(value);
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
proto.devportal.solo.io.UserSpec.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.devportal.solo.io.UserSpec.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.devportal.solo.io.UserSpec} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.devportal.solo.io.UserSpec.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUsername();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getEmail();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getBasicauth();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.devportal.solo.io.UserSpec.BasicAuth.serializeBinaryToWriter
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
proto.devportal.solo.io.UserSpec.BasicAuth = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.devportal.solo.io.UserSpec.BasicAuth, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.devportal.solo.io.UserSpec.BasicAuth.displayName = 'proto.devportal.solo.io.UserSpec.BasicAuth';
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
proto.devportal.solo.io.UserSpec.BasicAuth.prototype.toObject = function(opt_includeInstance) {
  return proto.devportal.solo.io.UserSpec.BasicAuth.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.devportal.solo.io.UserSpec.BasicAuth} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.devportal.solo.io.UserSpec.BasicAuth.toObject = function(includeInstance, msg) {
  var f, obj = {
    passwordsecretname: jspb.Message.getFieldWithDefault(msg, 1, ""),
    passwordsecretnamespace: jspb.Message.getFieldWithDefault(msg, 2, ""),
    passwordsecretkey: jspb.Message.getFieldWithDefault(msg, 3, "")
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
 * @return {!proto.devportal.solo.io.UserSpec.BasicAuth}
 */
proto.devportal.solo.io.UserSpec.BasicAuth.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.devportal.solo.io.UserSpec.BasicAuth;
  return proto.devportal.solo.io.UserSpec.BasicAuth.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.devportal.solo.io.UserSpec.BasicAuth} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.devportal.solo.io.UserSpec.BasicAuth}
 */
proto.devportal.solo.io.UserSpec.BasicAuth.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPasswordsecretname(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPasswordsecretnamespace(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setPasswordsecretkey(value);
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
proto.devportal.solo.io.UserSpec.BasicAuth.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.devportal.solo.io.UserSpec.BasicAuth.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.devportal.solo.io.UserSpec.BasicAuth} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.devportal.solo.io.UserSpec.BasicAuth.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPasswordsecretname();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPasswordsecretnamespace();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getPasswordsecretkey();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string passwordSecretName = 1;
 * @return {string}
 */
proto.devportal.solo.io.UserSpec.BasicAuth.prototype.getPasswordsecretname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.devportal.solo.io.UserSpec.BasicAuth.prototype.setPasswordsecretname = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string passwordSecretNamespace = 2;
 * @return {string}
 */
proto.devportal.solo.io.UserSpec.BasicAuth.prototype.getPasswordsecretnamespace = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.devportal.solo.io.UserSpec.BasicAuth.prototype.setPasswordsecretnamespace = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string passwordSecretKey = 3;
 * @return {string}
 */
proto.devportal.solo.io.UserSpec.BasicAuth.prototype.getPasswordsecretkey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.devportal.solo.io.UserSpec.BasicAuth.prototype.setPasswordsecretkey = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string username = 1;
 * @return {string}
 */
proto.devportal.solo.io.UserSpec.prototype.getUsername = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.devportal.solo.io.UserSpec.prototype.setUsername = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string email = 2;
 * @return {string}
 */
proto.devportal.solo.io.UserSpec.prototype.getEmail = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.devportal.solo.io.UserSpec.prototype.setEmail = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional BasicAuth basicAuth = 3;
 * @return {?proto.devportal.solo.io.UserSpec.BasicAuth}
 */
proto.devportal.solo.io.UserSpec.prototype.getBasicauth = function() {
  return /** @type{?proto.devportal.solo.io.UserSpec.BasicAuth} */ (
    jspb.Message.getWrapperField(this, proto.devportal.solo.io.UserSpec.BasicAuth, 3));
};


/** @param {?proto.devportal.solo.io.UserSpec.BasicAuth|undefined} value */
proto.devportal.solo.io.UserSpec.prototype.setBasicauth = function(value) {
  jspb.Message.setOneofWrapperField(this, 3, proto.devportal.solo.io.UserSpec.oneofGroups_[0], value);
};


proto.devportal.solo.io.UserSpec.prototype.clearBasicauth = function() {
  this.setBasicauth(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.devportal.solo.io.UserSpec.prototype.hasBasicauth = function() {
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
proto.devportal.solo.io.UserStatus = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.devportal.solo.io.UserStatus.repeatedFields_, null);
};
goog.inherits(proto.devportal.solo.io.UserStatus, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.devportal.solo.io.UserStatus.displayName = 'proto.devportal.solo.io.UserStatus';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.devportal.solo.io.UserStatus.repeatedFields_ = [2,3];



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
proto.devportal.solo.io.UserStatus.prototype.toObject = function(opt_includeInstance) {
  return proto.devportal.solo.io.UserStatus.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.devportal.solo.io.UserStatus} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.devportal.solo.io.UserStatus.toObject = function(includeInstance, msg) {
  var f, obj = {
    observedgeneration: jspb.Message.getFieldWithDefault(msg, 1, 0),
    usersList: jspb.Message.getRepeatedField(msg, 2),
    apidocsList: jspb.Message.getRepeatedField(msg, 3)
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
 * @return {!proto.devportal.solo.io.UserStatus}
 */
proto.devportal.solo.io.UserStatus.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.devportal.solo.io.UserStatus;
  return proto.devportal.solo.io.UserStatus.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.devportal.solo.io.UserStatus} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.devportal.solo.io.UserStatus}
 */
proto.devportal.solo.io.UserStatus.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setObservedgeneration(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addUsers(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.addApidocs(value);
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
proto.devportal.solo.io.UserStatus.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.devportal.solo.io.UserStatus.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.devportal.solo.io.UserStatus} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.devportal.solo.io.UserStatus.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getObservedgeneration();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getUsersList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
  f = message.getApidocsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      3,
      f
    );
  }
};


/**
 * optional int64 observedGeneration = 1;
 * @return {number}
 */
proto.devportal.solo.io.UserStatus.prototype.getObservedgeneration = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.devportal.solo.io.UserStatus.prototype.setObservedgeneration = function(value) {
  jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * repeated string users = 2;
 * @return {!Array<string>}
 */
proto.devportal.solo.io.UserStatus.prototype.getUsersList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/** @param {!Array<string>} value */
proto.devportal.solo.io.UserStatus.prototype.setUsersList = function(value) {
  jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {!string} value
 * @param {number=} opt_index
 */
proto.devportal.solo.io.UserStatus.prototype.addUsers = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


proto.devportal.solo.io.UserStatus.prototype.clearUsersList = function() {
  this.setUsersList([]);
};


/**
 * repeated string apiDocs = 3;
 * @return {!Array<string>}
 */
proto.devportal.solo.io.UserStatus.prototype.getApidocsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 3));
};


/** @param {!Array<string>} value */
proto.devportal.solo.io.UserStatus.prototype.setApidocsList = function(value) {
  jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {!string} value
 * @param {number=} opt_index
 */
proto.devportal.solo.io.UserStatus.prototype.addApidocs = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


proto.devportal.solo.io.UserStatus.prototype.clearApidocsList = function() {
  this.setApidocsList([]);
};


goog.object.extend(exports, proto.devportal.solo.io);
