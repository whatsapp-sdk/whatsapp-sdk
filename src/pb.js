/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.ClientHello = (function() {

    /**
     * Namespace ClientHello.
     * @exports ClientHello
     * @namespace
     */
    var ClientHello = {};

    /**
     * UserAgentPlatform enum.
     * @name ClientHello.UserAgentPlatform
     * @enum {number}
     * @property {number} ANDROID=0 ANDROID value
     * @property {number} IOS=1 IOS value
     * @property {number} WINDOWS_PHONE=2 WINDOWS_PHONE value
     * @property {number} BLACKBERRY=3 BLACKBERRY value
     * @property {number} BLACKBERRYX=4 BLACKBERRYX value
     * @property {number} S40=5 S40 value
     * @property {number} S60=6 S60 value
     * @property {number} PYTHON_CLIENT=7 PYTHON_CLIENT value
     * @property {number} TIZEN=8 TIZEN value
     * @property {number} ENTERPRISE=9 ENTERPRISE value
     * @property {number} SMB_ANDROID=10 SMB_ANDROID value
     * @property {number} KAIOS=11 KAIOS value
     * @property {number} SMB_IOS=12 SMB_IOS value
     * @property {number} WINDOWS=13 WINDOWS value
     * @property {number} WEB=14 WEB value
     */
    ClientHello.UserAgentPlatform = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "ANDROID"] = 0;
        values[valuesById[1] = "IOS"] = 1;
        values[valuesById[2] = "WINDOWS_PHONE"] = 2;
        values[valuesById[3] = "BLACKBERRY"] = 3;
        values[valuesById[4] = "BLACKBERRYX"] = 4;
        values[valuesById[5] = "S40"] = 5;
        values[valuesById[6] = "S60"] = 6;
        values[valuesById[7] = "PYTHON_CLIENT"] = 7;
        values[valuesById[8] = "TIZEN"] = 8;
        values[valuesById[9] = "ENTERPRISE"] = 9;
        values[valuesById[10] = "SMB_ANDROID"] = 10;
        values[valuesById[11] = "KAIOS"] = 11;
        values[valuesById[12] = "SMB_IOS"] = 12;
        values[valuesById[13] = "WINDOWS"] = 13;
        values[valuesById[14] = "WEB"] = 14;
        return values;
    })();

    /**
     * ConnectType enum.
     * @name ClientHello.ConnectType
     * @enum {number}
     * @property {number} CELLULAR_UNKNOWN=0 CELLULAR_UNKNOWN value
     * @property {number} WIFI_UNKNOWN=1 WIFI_UNKNOWN value
     * @property {number} CELLULAR_EDGE=100 CELLULAR_EDGE value
     * @property {number} CELLULAR_IDEN=101 CELLULAR_IDEN value
     * @property {number} CELLULAR_UMTS=102 CELLULAR_UMTS value
     * @property {number} CELLULAR_EVDO=103 CELLULAR_EVDO value
     * @property {number} CELLULAR_GPRS=104 CELLULAR_GPRS value
     * @property {number} CELLULAR_HSDPA=105 CELLULAR_HSDPA value
     * @property {number} CELLULAR_HSUPA=106 CELLULAR_HSUPA value
     * @property {number} CELLULAR_HSPA=107 CELLULAR_HSPA value
     * @property {number} CELLULAR_CDMA=108 CELLULAR_CDMA value
     * @property {number} CELLULAR_1XRTT=109 CELLULAR_1XRTT value
     * @property {number} CELLULAR_EHRPD=110 CELLULAR_EHRPD value
     * @property {number} CELLULAR_LTE=111 CELLULAR_LTE value
     * @property {number} CELLULAR_HSPAP=112 CELLULAR_HSPAP value
     */
    ClientHello.ConnectType = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "CELLULAR_UNKNOWN"] = 0;
        values[valuesById[1] = "WIFI_UNKNOWN"] = 1;
        values[valuesById[100] = "CELLULAR_EDGE"] = 100;
        values[valuesById[101] = "CELLULAR_IDEN"] = 101;
        values[valuesById[102] = "CELLULAR_UMTS"] = 102;
        values[valuesById[103] = "CELLULAR_EVDO"] = 103;
        values[valuesById[104] = "CELLULAR_GPRS"] = 104;
        values[valuesById[105] = "CELLULAR_HSDPA"] = 105;
        values[valuesById[106] = "CELLULAR_HSUPA"] = 106;
        values[valuesById[107] = "CELLULAR_HSPA"] = 107;
        values[valuesById[108] = "CELLULAR_CDMA"] = 108;
        values[valuesById[109] = "CELLULAR_1XRTT"] = 109;
        values[valuesById[110] = "CELLULAR_EHRPD"] = 110;
        values[valuesById[111] = "CELLULAR_LTE"] = 111;
        values[valuesById[112] = "CELLULAR_HSPAP"] = 112;
        return values;
    })();

    /**
     * ReleaseChannel enum.
     * @name ClientHello.ReleaseChannel
     * @enum {number}
     * @property {number} RELEASE=0 RELEASE value
     * @property {number} BETA=1 BETA value
     * @property {number} ALPHA=2 ALPHA value
     * @property {number} DEBUG=3 DEBUG value
     */
    ClientHello.ReleaseChannel = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "RELEASE"] = 0;
        values[valuesById[1] = "BETA"] = 1;
        values[valuesById[2] = "ALPHA"] = 2;
        values[valuesById[3] = "DEBUG"] = 3;
        return values;
    })();

    ClientHello.AppVersion = (function() {

        /**
         * Properties of an AppVersion.
         * @memberof ClientHello
         * @interface IAppVersion
         * @property {number} primary AppVersion primary
         * @property {number} secondary AppVersion secondary
         * @property {number} tertiary AppVersion tertiary
         * @property {number|null} [quaternary] AppVersion quaternary
         */

        /**
         * Constructs a new AppVersion.
         * @memberof ClientHello
         * @classdesc Represents an AppVersion.
         * @implements IAppVersion
         * @constructor
         * @param {ClientHello.IAppVersion=} [properties] Properties to set
         */
        function AppVersion(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AppVersion primary.
         * @member {number} primary
         * @memberof ClientHello.AppVersion
         * @instance
         */
        AppVersion.prototype.primary = 0;

        /**
         * AppVersion secondary.
         * @member {number} secondary
         * @memberof ClientHello.AppVersion
         * @instance
         */
        AppVersion.prototype.secondary = 0;

        /**
         * AppVersion tertiary.
         * @member {number} tertiary
         * @memberof ClientHello.AppVersion
         * @instance
         */
        AppVersion.prototype.tertiary = 0;

        /**
         * AppVersion quaternary.
         * @member {number} quaternary
         * @memberof ClientHello.AppVersion
         * @instance
         */
        AppVersion.prototype.quaternary = 0;

        /**
         * Creates a new AppVersion instance using the specified properties.
         * @function create
         * @memberof ClientHello.AppVersion
         * @static
         * @param {ClientHello.IAppVersion=} [properties] Properties to set
         * @returns {ClientHello.AppVersion} AppVersion instance
         */
        AppVersion.create = function create(properties) {
            return new AppVersion(properties);
        };

        /**
         * Encodes the specified AppVersion message. Does not implicitly {@link ClientHello.AppVersion.verify|verify} messages.
         * @function encode
         * @memberof ClientHello.AppVersion
         * @static
         * @param {ClientHello.IAppVersion} message AppVersion message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AppVersion.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.primary);
            writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.secondary);
            writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.tertiary);
            if (message.quaternary != null && Object.hasOwnProperty.call(message, "quaternary"))
                writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.quaternary);
            return writer;
        };

        /**
         * Encodes the specified AppVersion message, length delimited. Does not implicitly {@link ClientHello.AppVersion.verify|verify} messages.
         * @function encodeDelimited
         * @memberof ClientHello.AppVersion
         * @static
         * @param {ClientHello.IAppVersion} message AppVersion message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AppVersion.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AppVersion message from the specified reader or buffer.
         * @function decode
         * @memberof ClientHello.AppVersion
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ClientHello.AppVersion} AppVersion
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AppVersion.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ClientHello.AppVersion();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.primary = reader.uint32();
                    break;
                case 2:
                    message.secondary = reader.uint32();
                    break;
                case 3:
                    message.tertiary = reader.uint32();
                    break;
                case 4:
                    message.quaternary = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("primary"))
                throw $util.ProtocolError("missing required 'primary'", { instance: message });
            if (!message.hasOwnProperty("secondary"))
                throw $util.ProtocolError("missing required 'secondary'", { instance: message });
            if (!message.hasOwnProperty("tertiary"))
                throw $util.ProtocolError("missing required 'tertiary'", { instance: message });
            return message;
        };

        /**
         * Decodes an AppVersion message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof ClientHello.AppVersion
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ClientHello.AppVersion} AppVersion
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AppVersion.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AppVersion message.
         * @function verify
         * @memberof ClientHello.AppVersion
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AppVersion.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.primary))
                return "primary: integer expected";
            if (!$util.isInteger(message.secondary))
                return "secondary: integer expected";
            if (!$util.isInteger(message.tertiary))
                return "tertiary: integer expected";
            if (message.quaternary != null && message.hasOwnProperty("quaternary"))
                if (!$util.isInteger(message.quaternary))
                    return "quaternary: integer expected";
            return null;
        };

        /**
         * Creates an AppVersion message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof ClientHello.AppVersion
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {ClientHello.AppVersion} AppVersion
         */
        AppVersion.fromObject = function fromObject(object) {
            if (object instanceof $root.ClientHello.AppVersion)
                return object;
            var message = new $root.ClientHello.AppVersion();
            if (object.primary != null)
                message.primary = object.primary >>> 0;
            if (object.secondary != null)
                message.secondary = object.secondary >>> 0;
            if (object.tertiary != null)
                message.tertiary = object.tertiary >>> 0;
            if (object.quaternary != null)
                message.quaternary = object.quaternary >>> 0;
            return message;
        };

        /**
         * Creates a plain object from an AppVersion message. Also converts values to other types if specified.
         * @function toObject
         * @memberof ClientHello.AppVersion
         * @static
         * @param {ClientHello.AppVersion} message AppVersion
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AppVersion.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.primary = 0;
                object.secondary = 0;
                object.tertiary = 0;
                object.quaternary = 0;
            }
            if (message.primary != null && message.hasOwnProperty("primary"))
                object.primary = message.primary;
            if (message.secondary != null && message.hasOwnProperty("secondary"))
                object.secondary = message.secondary;
            if (message.tertiary != null && message.hasOwnProperty("tertiary"))
                object.tertiary = message.tertiary;
            if (message.quaternary != null && message.hasOwnProperty("quaternary"))
                object.quaternary = message.quaternary;
            return object;
        };

        /**
         * Converts this AppVersion to JSON.
         * @function toJSON
         * @memberof ClientHello.AppVersion
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AppVersion.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return AppVersion;
    })();

    ClientHello.UserAgent = (function() {

        /**
         * Properties of a UserAgent.
         * @memberof ClientHello
         * @interface IUserAgent
         * @property {ClientHello.UserAgentPlatform|null} [platform] UserAgent platform
         * @property {ClientHello.IAppVersion|null} [appVersion] UserAgent appVersion
         * @property {string|null} [mcc] UserAgent mcc
         * @property {string|null} [mnc] UserAgent mnc
         * @property {string|null} [osVersion] UserAgent osVersion
         * @property {string|null} [manufacturer] UserAgent manufacturer
         * @property {string|null} [device] UserAgent device
         * @property {string|null} [osBuildNumber] UserAgent osBuildNumber
         * @property {string|null} [phoneId] UserAgent phoneId
         * @property {ClientHello.ReleaseChannel|null} [releaseChannel] UserAgent releaseChannel
         * @property {string|null} [localeLanguageIso_639_1] UserAgent localeLanguageIso_639_1
         * @property {string|null} [localeCountryIso_3166_1Alpha_2] UserAgent localeCountryIso_3166_1Alpha_2
         * @property {string|null} [device2] UserAgent device2
         */

        /**
         * Constructs a new UserAgent.
         * @memberof ClientHello
         * @classdesc Represents a UserAgent.
         * @implements IUserAgent
         * @constructor
         * @param {ClientHello.IUserAgent=} [properties] Properties to set
         */
        function UserAgent(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UserAgent platform.
         * @member {ClientHello.UserAgentPlatform} platform
         * @memberof ClientHello.UserAgent
         * @instance
         */
        UserAgent.prototype.platform = 0;

        /**
         * UserAgent appVersion.
         * @member {ClientHello.IAppVersion|null|undefined} appVersion
         * @memberof ClientHello.UserAgent
         * @instance
         */
        UserAgent.prototype.appVersion = null;

        /**
         * UserAgent mcc.
         * @member {string} mcc
         * @memberof ClientHello.UserAgent
         * @instance
         */
        UserAgent.prototype.mcc = "";

        /**
         * UserAgent mnc.
         * @member {string} mnc
         * @memberof ClientHello.UserAgent
         * @instance
         */
        UserAgent.prototype.mnc = "";

        /**
         * UserAgent osVersion.
         * @member {string} osVersion
         * @memberof ClientHello.UserAgent
         * @instance
         */
        UserAgent.prototype.osVersion = "";

        /**
         * UserAgent manufacturer.
         * @member {string} manufacturer
         * @memberof ClientHello.UserAgent
         * @instance
         */
        UserAgent.prototype.manufacturer = "";

        /**
         * UserAgent device.
         * @member {string} device
         * @memberof ClientHello.UserAgent
         * @instance
         */
        UserAgent.prototype.device = "";

        /**
         * UserAgent osBuildNumber.
         * @member {string} osBuildNumber
         * @memberof ClientHello.UserAgent
         * @instance
         */
        UserAgent.prototype.osBuildNumber = "";

        /**
         * UserAgent phoneId.
         * @member {string} phoneId
         * @memberof ClientHello.UserAgent
         * @instance
         */
        UserAgent.prototype.phoneId = "";

        /**
         * UserAgent releaseChannel.
         * @member {ClientHello.ReleaseChannel} releaseChannel
         * @memberof ClientHello.UserAgent
         * @instance
         */
        UserAgent.prototype.releaseChannel = 0;

        /**
         * UserAgent localeLanguageIso_639_1.
         * @member {string} localeLanguageIso_639_1
         * @memberof ClientHello.UserAgent
         * @instance
         */
        UserAgent.prototype.localeLanguageIso_639_1 = "";

        /**
         * UserAgent localeCountryIso_3166_1Alpha_2.
         * @member {string} localeCountryIso_3166_1Alpha_2
         * @memberof ClientHello.UserAgent
         * @instance
         */
        UserAgent.prototype.localeCountryIso_3166_1Alpha_2 = "";

        /**
         * UserAgent device2.
         * @member {string} device2
         * @memberof ClientHello.UserAgent
         * @instance
         */
        UserAgent.prototype.device2 = "";

        /**
         * Creates a new UserAgent instance using the specified properties.
         * @function create
         * @memberof ClientHello.UserAgent
         * @static
         * @param {ClientHello.IUserAgent=} [properties] Properties to set
         * @returns {ClientHello.UserAgent} UserAgent instance
         */
        UserAgent.create = function create(properties) {
            return new UserAgent(properties);
        };

        /**
         * Encodes the specified UserAgent message. Does not implicitly {@link ClientHello.UserAgent.verify|verify} messages.
         * @function encode
         * @memberof ClientHello.UserAgent
         * @static
         * @param {ClientHello.IUserAgent} message UserAgent message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserAgent.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.platform != null && Object.hasOwnProperty.call(message, "platform"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.platform);
            if (message.appVersion != null && Object.hasOwnProperty.call(message, "appVersion"))
                $root.ClientHello.AppVersion.encode(message.appVersion, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.mcc != null && Object.hasOwnProperty.call(message, "mcc"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.mcc);
            if (message.mnc != null && Object.hasOwnProperty.call(message, "mnc"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.mnc);
            if (message.osVersion != null && Object.hasOwnProperty.call(message, "osVersion"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.osVersion);
            if (message.manufacturer != null && Object.hasOwnProperty.call(message, "manufacturer"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.manufacturer);
            if (message.device != null && Object.hasOwnProperty.call(message, "device"))
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.device);
            if (message.osBuildNumber != null && Object.hasOwnProperty.call(message, "osBuildNumber"))
                writer.uint32(/* id 8, wireType 2 =*/66).string(message.osBuildNumber);
            if (message.phoneId != null && Object.hasOwnProperty.call(message, "phoneId"))
                writer.uint32(/* id 9, wireType 2 =*/74).string(message.phoneId);
            if (message.releaseChannel != null && Object.hasOwnProperty.call(message, "releaseChannel"))
                writer.uint32(/* id 10, wireType 0 =*/80).int32(message.releaseChannel);
            if (message.localeLanguageIso_639_1 != null && Object.hasOwnProperty.call(message, "localeLanguageIso_639_1"))
                writer.uint32(/* id 11, wireType 2 =*/90).string(message.localeLanguageIso_639_1);
            if (message.localeCountryIso_3166_1Alpha_2 != null && Object.hasOwnProperty.call(message, "localeCountryIso_3166_1Alpha_2"))
                writer.uint32(/* id 12, wireType 2 =*/98).string(message.localeCountryIso_3166_1Alpha_2);
            if (message.device2 != null && Object.hasOwnProperty.call(message, "device2"))
                writer.uint32(/* id 13, wireType 2 =*/106).string(message.device2);
            return writer;
        };

        /**
         * Encodes the specified UserAgent message, length delimited. Does not implicitly {@link ClientHello.UserAgent.verify|verify} messages.
         * @function encodeDelimited
         * @memberof ClientHello.UserAgent
         * @static
         * @param {ClientHello.IUserAgent} message UserAgent message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserAgent.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a UserAgent message from the specified reader or buffer.
         * @function decode
         * @memberof ClientHello.UserAgent
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ClientHello.UserAgent} UserAgent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserAgent.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ClientHello.UserAgent();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.platform = reader.int32();
                    break;
                case 2:
                    message.appVersion = $root.ClientHello.AppVersion.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.mcc = reader.string();
                    break;
                case 4:
                    message.mnc = reader.string();
                    break;
                case 5:
                    message.osVersion = reader.string();
                    break;
                case 6:
                    message.manufacturer = reader.string();
                    break;
                case 7:
                    message.device = reader.string();
                    break;
                case 8:
                    message.osBuildNumber = reader.string();
                    break;
                case 9:
                    message.phoneId = reader.string();
                    break;
                case 10:
                    message.releaseChannel = reader.int32();
                    break;
                case 11:
                    message.localeLanguageIso_639_1 = reader.string();
                    break;
                case 12:
                    message.localeCountryIso_3166_1Alpha_2 = reader.string();
                    break;
                case 13:
                    message.device2 = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a UserAgent message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof ClientHello.UserAgent
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ClientHello.UserAgent} UserAgent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserAgent.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a UserAgent message.
         * @function verify
         * @memberof ClientHello.UserAgent
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UserAgent.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.platform != null && message.hasOwnProperty("platform"))
                switch (message.platform) {
                default:
                    return "platform: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                case 7:
                case 8:
                case 9:
                case 10:
                case 11:
                case 12:
                case 13:
                case 14:
                    break;
                }
            if (message.appVersion != null && message.hasOwnProperty("appVersion")) {
                var error = $root.ClientHello.AppVersion.verify(message.appVersion);
                if (error)
                    return "appVersion." + error;
            }
            if (message.mcc != null && message.hasOwnProperty("mcc"))
                if (!$util.isString(message.mcc))
                    return "mcc: string expected";
            if (message.mnc != null && message.hasOwnProperty("mnc"))
                if (!$util.isString(message.mnc))
                    return "mnc: string expected";
            if (message.osVersion != null && message.hasOwnProperty("osVersion"))
                if (!$util.isString(message.osVersion))
                    return "osVersion: string expected";
            if (message.manufacturer != null && message.hasOwnProperty("manufacturer"))
                if (!$util.isString(message.manufacturer))
                    return "manufacturer: string expected";
            if (message.device != null && message.hasOwnProperty("device"))
                if (!$util.isString(message.device))
                    return "device: string expected";
            if (message.osBuildNumber != null && message.hasOwnProperty("osBuildNumber"))
                if (!$util.isString(message.osBuildNumber))
                    return "osBuildNumber: string expected";
            if (message.phoneId != null && message.hasOwnProperty("phoneId"))
                if (!$util.isString(message.phoneId))
                    return "phoneId: string expected";
            if (message.releaseChannel != null && message.hasOwnProperty("releaseChannel"))
                switch (message.releaseChannel) {
                default:
                    return "releaseChannel: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                    break;
                }
            if (message.localeLanguageIso_639_1 != null && message.hasOwnProperty("localeLanguageIso_639_1"))
                if (!$util.isString(message.localeLanguageIso_639_1))
                    return "localeLanguageIso_639_1: string expected";
            if (message.localeCountryIso_3166_1Alpha_2 != null && message.hasOwnProperty("localeCountryIso_3166_1Alpha_2"))
                if (!$util.isString(message.localeCountryIso_3166_1Alpha_2))
                    return "localeCountryIso_3166_1Alpha_2: string expected";
            if (message.device2 != null && message.hasOwnProperty("device2"))
                if (!$util.isString(message.device2))
                    return "device2: string expected";
            return null;
        };

        /**
         * Creates a UserAgent message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof ClientHello.UserAgent
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {ClientHello.UserAgent} UserAgent
         */
        UserAgent.fromObject = function fromObject(object) {
            if (object instanceof $root.ClientHello.UserAgent)
                return object;
            var message = new $root.ClientHello.UserAgent();
            switch (object.platform) {
            case "ANDROID":
            case 0:
                message.platform = 0;
                break;
            case "IOS":
            case 1:
                message.platform = 1;
                break;
            case "WINDOWS_PHONE":
            case 2:
                message.platform = 2;
                break;
            case "BLACKBERRY":
            case 3:
                message.platform = 3;
                break;
            case "BLACKBERRYX":
            case 4:
                message.platform = 4;
                break;
            case "S40":
            case 5:
                message.platform = 5;
                break;
            case "S60":
            case 6:
                message.platform = 6;
                break;
            case "PYTHON_CLIENT":
            case 7:
                message.platform = 7;
                break;
            case "TIZEN":
            case 8:
                message.platform = 8;
                break;
            case "ENTERPRISE":
            case 9:
                message.platform = 9;
                break;
            case "SMB_ANDROID":
            case 10:
                message.platform = 10;
                break;
            case "KAIOS":
            case 11:
                message.platform = 11;
                break;
            case "SMB_IOS":
            case 12:
                message.platform = 12;
                break;
            case "WINDOWS":
            case 13:
                message.platform = 13;
                break;
            case "WEB":
            case 14:
                message.platform = 14;
                break;
            }
            if (object.appVersion != null) {
                if (typeof object.appVersion !== "object")
                    throw TypeError(".ClientHello.UserAgent.appVersion: object expected");
                message.appVersion = $root.ClientHello.AppVersion.fromObject(object.appVersion);
            }
            if (object.mcc != null)
                message.mcc = String(object.mcc);
            if (object.mnc != null)
                message.mnc = String(object.mnc);
            if (object.osVersion != null)
                message.osVersion = String(object.osVersion);
            if (object.manufacturer != null)
                message.manufacturer = String(object.manufacturer);
            if (object.device != null)
                message.device = String(object.device);
            if (object.osBuildNumber != null)
                message.osBuildNumber = String(object.osBuildNumber);
            if (object.phoneId != null)
                message.phoneId = String(object.phoneId);
            switch (object.releaseChannel) {
            case "RELEASE":
            case 0:
                message.releaseChannel = 0;
                break;
            case "BETA":
            case 1:
                message.releaseChannel = 1;
                break;
            case "ALPHA":
            case 2:
                message.releaseChannel = 2;
                break;
            case "DEBUG":
            case 3:
                message.releaseChannel = 3;
                break;
            }
            if (object.localeLanguageIso_639_1 != null)
                message.localeLanguageIso_639_1 = String(object.localeLanguageIso_639_1);
            if (object.localeCountryIso_3166_1Alpha_2 != null)
                message.localeCountryIso_3166_1Alpha_2 = String(object.localeCountryIso_3166_1Alpha_2);
            if (object.device2 != null)
                message.device2 = String(object.device2);
            return message;
        };

        /**
         * Creates a plain object from a UserAgent message. Also converts values to other types if specified.
         * @function toObject
         * @memberof ClientHello.UserAgent
         * @static
         * @param {ClientHello.UserAgent} message UserAgent
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UserAgent.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.platform = options.enums === String ? "ANDROID" : 0;
                object.appVersion = null;
                object.mcc = "";
                object.mnc = "";
                object.osVersion = "";
                object.manufacturer = "";
                object.device = "";
                object.osBuildNumber = "";
                object.phoneId = "";
                object.releaseChannel = options.enums === String ? "RELEASE" : 0;
                object.localeLanguageIso_639_1 = "";
                object.localeCountryIso_3166_1Alpha_2 = "";
                object.device2 = "";
            }
            if (message.platform != null && message.hasOwnProperty("platform"))
                object.platform = options.enums === String ? $root.ClientHello.UserAgentPlatform[message.platform] : message.platform;
            if (message.appVersion != null && message.hasOwnProperty("appVersion"))
                object.appVersion = $root.ClientHello.AppVersion.toObject(message.appVersion, options);
            if (message.mcc != null && message.hasOwnProperty("mcc"))
                object.mcc = message.mcc;
            if (message.mnc != null && message.hasOwnProperty("mnc"))
                object.mnc = message.mnc;
            if (message.osVersion != null && message.hasOwnProperty("osVersion"))
                object.osVersion = message.osVersion;
            if (message.manufacturer != null && message.hasOwnProperty("manufacturer"))
                object.manufacturer = message.manufacturer;
            if (message.device != null && message.hasOwnProperty("device"))
                object.device = message.device;
            if (message.osBuildNumber != null && message.hasOwnProperty("osBuildNumber"))
                object.osBuildNumber = message.osBuildNumber;
            if (message.phoneId != null && message.hasOwnProperty("phoneId"))
                object.phoneId = message.phoneId;
            if (message.releaseChannel != null && message.hasOwnProperty("releaseChannel"))
                object.releaseChannel = options.enums === String ? $root.ClientHello.ReleaseChannel[message.releaseChannel] : message.releaseChannel;
            if (message.localeLanguageIso_639_1 != null && message.hasOwnProperty("localeLanguageIso_639_1"))
                object.localeLanguageIso_639_1 = message.localeLanguageIso_639_1;
            if (message.localeCountryIso_3166_1Alpha_2 != null && message.hasOwnProperty("localeCountryIso_3166_1Alpha_2"))
                object.localeCountryIso_3166_1Alpha_2 = message.localeCountryIso_3166_1Alpha_2;
            if (message.device2 != null && message.hasOwnProperty("device2"))
                object.device2 = message.device2;
            return object;
        };

        /**
         * Converts this UserAgent to JSON.
         * @function toJSON
         * @memberof ClientHello.UserAgent
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UserAgent.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UserAgent;
    })();

    ClientHello.C2S = (function() {

        /**
         * Properties of a C2S.
         * @memberof ClientHello
         * @interface IC2S
         * @property {number|Long|null} [username] C2S username
         * @property {boolean|null} [passive] C2S passive
         * @property {Array.<ClientHello.C2S.ClientFeature>|null} [clientFeatures] C2S clientFeatures
         * @property {ClientHello.IUserAgent|null} [useragent] C2S useragent
         * @property {ClientHello.C2S.IWebInfo|null} [webInfo] C2S webInfo
         * @property {string|null} [pushName] C2S pushName
         * @property {number|null} [sessionId] C2S sessionId
         * @property {boolean|null} [shortConnect] C2S shortConnect
         * @property {ClientHello.C2S.ConnectType|null} [connectType] C2S connectType
         * @property {ClientHello.C2S.ConnectReason|null} [connectReason] C2S connectReason
         * @property {Array.<number>|null} [shards] C2S shards
         * @property {ClientHello.C2S.IDnsSource|null} [dnsSource] C2S dnsSource
         * @property {number|null} [connectAttemptCount] C2S connectAttemptCount
         * @property {ClientHello.C2S.ICompanionRegData|null} [regData] C2S regData
         * @property {number|null} [tag23] C2S tag23
         * @property {number|null} [tag24] C2S tag24
         * @property {ClientHello.C2S.IosAppExtension|null} [iosAppExtension] C2S iosAppExtension
         */

        /**
         * Constructs a new C2S.
         * @memberof ClientHello
         * @classdesc Represents a C2S.
         * @implements IC2S
         * @constructor
         * @param {ClientHello.IC2S=} [properties] Properties to set
         */
        function C2S(properties) {
            this.clientFeatures = [];
            this.shards = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * C2S username.
         * @member {number|Long} username
         * @memberof ClientHello.C2S
         * @instance
         */
        C2S.prototype.username = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * C2S passive.
         * @member {boolean} passive
         * @memberof ClientHello.C2S
         * @instance
         */
        C2S.prototype.passive = false;

        /**
         * C2S clientFeatures.
         * @member {Array.<ClientHello.C2S.ClientFeature>} clientFeatures
         * @memberof ClientHello.C2S
         * @instance
         */
        C2S.prototype.clientFeatures = $util.emptyArray;

        /**
         * C2S useragent.
         * @member {ClientHello.IUserAgent|null|undefined} useragent
         * @memberof ClientHello.C2S
         * @instance
         */
        C2S.prototype.useragent = null;

        /**
         * C2S webInfo.
         * @member {ClientHello.C2S.IWebInfo|null|undefined} webInfo
         * @memberof ClientHello.C2S
         * @instance
         */
        C2S.prototype.webInfo = null;

        /**
         * C2S pushName.
         * @member {string} pushName
         * @memberof ClientHello.C2S
         * @instance
         */
        C2S.prototype.pushName = "";

        /**
         * C2S sessionId.
         * @member {number} sessionId
         * @memberof ClientHello.C2S
         * @instance
         */
        C2S.prototype.sessionId = 0;

        /**
         * C2S shortConnect.
         * @member {boolean} shortConnect
         * @memberof ClientHello.C2S
         * @instance
         */
        C2S.prototype.shortConnect = false;

        /**
         * C2S connectType.
         * @member {ClientHello.C2S.ConnectType} connectType
         * @memberof ClientHello.C2S
         * @instance
         */
        C2S.prototype.connectType = 0;

        /**
         * C2S connectReason.
         * @member {ClientHello.C2S.ConnectReason} connectReason
         * @memberof ClientHello.C2S
         * @instance
         */
        C2S.prototype.connectReason = 0;

        /**
         * C2S shards.
         * @member {Array.<number>} shards
         * @memberof ClientHello.C2S
         * @instance
         */
        C2S.prototype.shards = $util.emptyArray;

        /**
         * C2S dnsSource.
         * @member {ClientHello.C2S.IDnsSource|null|undefined} dnsSource
         * @memberof ClientHello.C2S
         * @instance
         */
        C2S.prototype.dnsSource = null;

        /**
         * C2S connectAttemptCount.
         * @member {number} connectAttemptCount
         * @memberof ClientHello.C2S
         * @instance
         */
        C2S.prototype.connectAttemptCount = 0;

        /**
         * C2S regData.
         * @member {ClientHello.C2S.ICompanionRegData|null|undefined} regData
         * @memberof ClientHello.C2S
         * @instance
         */
        C2S.prototype.regData = null;

        /**
         * C2S tag23.
         * @member {number} tag23
         * @memberof ClientHello.C2S
         * @instance
         */
        C2S.prototype.tag23 = 0;

        /**
         * C2S tag24.
         * @member {number} tag24
         * @memberof ClientHello.C2S
         * @instance
         */
        C2S.prototype.tag24 = 0;

        /**
         * C2S iosAppExtension.
         * @member {ClientHello.C2S.IosAppExtension} iosAppExtension
         * @memberof ClientHello.C2S
         * @instance
         */
        C2S.prototype.iosAppExtension = 0;

        /**
         * Creates a new C2S instance using the specified properties.
         * @function create
         * @memberof ClientHello.C2S
         * @static
         * @param {ClientHello.IC2S=} [properties] Properties to set
         * @returns {ClientHello.C2S} C2S instance
         */
        C2S.create = function create(properties) {
            return new C2S(properties);
        };

        /**
         * Encodes the specified C2S message. Does not implicitly {@link ClientHello.C2S.verify|verify} messages.
         * @function encode
         * @memberof ClientHello.C2S
         * @static
         * @param {ClientHello.IC2S} message C2S message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        C2S.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.username != null && Object.hasOwnProperty.call(message, "username"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.username);
            if (message.passive != null && Object.hasOwnProperty.call(message, "passive"))
                writer.uint32(/* id 3, wireType 0 =*/24).bool(message.passive);
            if (message.clientFeatures != null && message.clientFeatures.length)
                for (var i = 0; i < message.clientFeatures.length; ++i)
                    writer.uint32(/* id 4, wireType 0 =*/32).int32(message.clientFeatures[i]);
            if (message.useragent != null && Object.hasOwnProperty.call(message, "useragent"))
                $root.ClientHello.UserAgent.encode(message.useragent, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            if (message.webInfo != null && Object.hasOwnProperty.call(message, "webInfo"))
                $root.ClientHello.C2S.WebInfo.encode(message.webInfo, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
            if (message.pushName != null && Object.hasOwnProperty.call(message, "pushName"))
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.pushName);
            if (message.sessionId != null && Object.hasOwnProperty.call(message, "sessionId"))
                writer.uint32(/* id 9, wireType 5 =*/77).sfixed32(message.sessionId);
            if (message.shortConnect != null && Object.hasOwnProperty.call(message, "shortConnect"))
                writer.uint32(/* id 10, wireType 0 =*/80).bool(message.shortConnect);
            if (message.connectType != null && Object.hasOwnProperty.call(message, "connectType"))
                writer.uint32(/* id 12, wireType 0 =*/96).int32(message.connectType);
            if (message.connectReason != null && Object.hasOwnProperty.call(message, "connectReason"))
                writer.uint32(/* id 13, wireType 0 =*/104).int32(message.connectReason);
            if (message.shards != null && message.shards.length)
                for (var i = 0; i < message.shards.length; ++i)
                    writer.uint32(/* id 14, wireType 5 =*/117).sfixed32(message.shards[i]);
            if (message.dnsSource != null && Object.hasOwnProperty.call(message, "dnsSource"))
                $root.ClientHello.C2S.DnsSource.encode(message.dnsSource, writer.uint32(/* id 15, wireType 2 =*/122).fork()).ldelim();
            if (message.connectAttemptCount != null && Object.hasOwnProperty.call(message, "connectAttemptCount"))
                writer.uint32(/* id 16, wireType 0 =*/128).uint32(message.connectAttemptCount);
            if (message.regData != null && Object.hasOwnProperty.call(message, "regData"))
                $root.ClientHello.C2S.CompanionRegData.encode(message.regData, writer.uint32(/* id 19, wireType 2 =*/154).fork()).ldelim();
            if (message.tag23 != null && Object.hasOwnProperty.call(message, "tag23"))
                writer.uint32(/* id 23, wireType 0 =*/184).uint32(message.tag23);
            if (message.tag24 != null && Object.hasOwnProperty.call(message, "tag24"))
                writer.uint32(/* id 24, wireType 0 =*/192).uint32(message.tag24);
            if (message.iosAppExtension != null && Object.hasOwnProperty.call(message, "iosAppExtension"))
                writer.uint32(/* id 30, wireType 0 =*/240).int32(message.iosAppExtension);
            return writer;
        };

        /**
         * Encodes the specified C2S message, length delimited. Does not implicitly {@link ClientHello.C2S.verify|verify} messages.
         * @function encodeDelimited
         * @memberof ClientHello.C2S
         * @static
         * @param {ClientHello.IC2S} message C2S message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        C2S.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a C2S message from the specified reader or buffer.
         * @function decode
         * @memberof ClientHello.C2S
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ClientHello.C2S} C2S
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        C2S.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ClientHello.C2S();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.username = reader.uint64();
                    break;
                case 3:
                    message.passive = reader.bool();
                    break;
                case 4:
                    if (!(message.clientFeatures && message.clientFeatures.length))
                        message.clientFeatures = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.clientFeatures.push(reader.int32());
                    } else
                        message.clientFeatures.push(reader.int32());
                    break;
                case 5:
                    message.useragent = $root.ClientHello.UserAgent.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.webInfo = $root.ClientHello.C2S.WebInfo.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.pushName = reader.string();
                    break;
                case 9:
                    message.sessionId = reader.sfixed32();
                    break;
                case 10:
                    message.shortConnect = reader.bool();
                    break;
                case 12:
                    message.connectType = reader.int32();
                    break;
                case 13:
                    message.connectReason = reader.int32();
                    break;
                case 14:
                    if (!(message.shards && message.shards.length))
                        message.shards = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.shards.push(reader.sfixed32());
                    } else
                        message.shards.push(reader.sfixed32());
                    break;
                case 15:
                    message.dnsSource = $root.ClientHello.C2S.DnsSource.decode(reader, reader.uint32());
                    break;
                case 16:
                    message.connectAttemptCount = reader.uint32();
                    break;
                case 19:
                    message.regData = $root.ClientHello.C2S.CompanionRegData.decode(reader, reader.uint32());
                    break;
                case 23:
                    message.tag23 = reader.uint32();
                    break;
                case 24:
                    message.tag24 = reader.uint32();
                    break;
                case 30:
                    message.iosAppExtension = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a C2S message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof ClientHello.C2S
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ClientHello.C2S} C2S
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        C2S.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a C2S message.
         * @function verify
         * @memberof ClientHello.C2S
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        C2S.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.username != null && message.hasOwnProperty("username"))
                if (!$util.isInteger(message.username) && !(message.username && $util.isInteger(message.username.low) && $util.isInteger(message.username.high)))
                    return "username: integer|Long expected";
            if (message.passive != null && message.hasOwnProperty("passive"))
                if (typeof message.passive !== "boolean")
                    return "passive: boolean expected";
            if (message.clientFeatures != null && message.hasOwnProperty("clientFeatures")) {
                if (!Array.isArray(message.clientFeatures))
                    return "clientFeatures: array expected";
                for (var i = 0; i < message.clientFeatures.length; ++i)
                    switch (message.clientFeatures[i]) {
                    default:
                        return "clientFeatures: enum value[] expected";
                    case 0:
                        break;
                    }
            }
            if (message.useragent != null && message.hasOwnProperty("useragent")) {
                var error = $root.ClientHello.UserAgent.verify(message.useragent);
                if (error)
                    return "useragent." + error;
            }
            if (message.webInfo != null && message.hasOwnProperty("webInfo")) {
                var error = $root.ClientHello.C2S.WebInfo.verify(message.webInfo);
                if (error)
                    return "webInfo." + error;
            }
            if (message.pushName != null && message.hasOwnProperty("pushName"))
                if (!$util.isString(message.pushName))
                    return "pushName: string expected";
            if (message.sessionId != null && message.hasOwnProperty("sessionId"))
                if (!$util.isInteger(message.sessionId))
                    return "sessionId: integer expected";
            if (message.shortConnect != null && message.hasOwnProperty("shortConnect"))
                if (typeof message.shortConnect !== "boolean")
                    return "shortConnect: boolean expected";
            if (message.connectType != null && message.hasOwnProperty("connectType"))
                switch (message.connectType) {
                default:
                    return "connectType: enum value expected";
                case 0:
                case 1:
                case 100:
                case 101:
                case 102:
                case 103:
                case 104:
                case 105:
                case 106:
                case 107:
                case 108:
                case 109:
                case 110:
                case 111:
                case 112:
                    break;
                }
            if (message.connectReason != null && message.hasOwnProperty("connectReason"))
                switch (message.connectReason) {
                default:
                    return "connectReason: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                    break;
                }
            if (message.shards != null && message.hasOwnProperty("shards")) {
                if (!Array.isArray(message.shards))
                    return "shards: array expected";
                for (var i = 0; i < message.shards.length; ++i)
                    if (!$util.isInteger(message.shards[i]))
                        return "shards: integer[] expected";
            }
            if (message.dnsSource != null && message.hasOwnProperty("dnsSource")) {
                var error = $root.ClientHello.C2S.DnsSource.verify(message.dnsSource);
                if (error)
                    return "dnsSource." + error;
            }
            if (message.connectAttemptCount != null && message.hasOwnProperty("connectAttemptCount"))
                if (!$util.isInteger(message.connectAttemptCount))
                    return "connectAttemptCount: integer expected";
            if (message.regData != null && message.hasOwnProperty("regData")) {
                var error = $root.ClientHello.C2S.CompanionRegData.verify(message.regData);
                if (error)
                    return "regData." + error;
            }
            if (message.tag23 != null && message.hasOwnProperty("tag23"))
                if (!$util.isInteger(message.tag23))
                    return "tag23: integer expected";
            if (message.tag24 != null && message.hasOwnProperty("tag24"))
                if (!$util.isInteger(message.tag24))
                    return "tag24: integer expected";
            if (message.iosAppExtension != null && message.hasOwnProperty("iosAppExtension"))
                switch (message.iosAppExtension) {
                default:
                    return "iosAppExtension: enum value expected";
                case 0:
                case 1:
                case 2:
                    break;
                }
            return null;
        };

        /**
         * Creates a C2S message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof ClientHello.C2S
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {ClientHello.C2S} C2S
         */
        C2S.fromObject = function fromObject(object) {
            if (object instanceof $root.ClientHello.C2S)
                return object;
            var message = new $root.ClientHello.C2S();
            if (object.username != null)
                if ($util.Long)
                    (message.username = $util.Long.fromValue(object.username)).unsigned = true;
                else if (typeof object.username === "string")
                    message.username = parseInt(object.username, 10);
                else if (typeof object.username === "number")
                    message.username = object.username;
                else if (typeof object.username === "object")
                    message.username = new $util.LongBits(object.username.low >>> 0, object.username.high >>> 0).toNumber(true);
            if (object.passive != null)
                message.passive = Boolean(object.passive);
            if (object.clientFeatures) {
                if (!Array.isArray(object.clientFeatures))
                    throw TypeError(".ClientHello.C2S.clientFeatures: array expected");
                message.clientFeatures = [];
                for (var i = 0; i < object.clientFeatures.length; ++i)
                    switch (object.clientFeatures[i]) {
                    default:
                    case "NONE":
                    case 0:
                        message.clientFeatures[i] = 0;
                        break;
                    }
            }
            if (object.useragent != null) {
                if (typeof object.useragent !== "object")
                    throw TypeError(".ClientHello.C2S.useragent: object expected");
                message.useragent = $root.ClientHello.UserAgent.fromObject(object.useragent);
            }
            if (object.webInfo != null) {
                if (typeof object.webInfo !== "object")
                    throw TypeError(".ClientHello.C2S.webInfo: object expected");
                message.webInfo = $root.ClientHello.C2S.WebInfo.fromObject(object.webInfo);
            }
            if (object.pushName != null)
                message.pushName = String(object.pushName);
            if (object.sessionId != null)
                message.sessionId = object.sessionId | 0;
            if (object.shortConnect != null)
                message.shortConnect = Boolean(object.shortConnect);
            switch (object.connectType) {
            case "UNKNOWN":
            case 0:
                message.connectType = 0;
                break;
            case "WIFI":
            case 1:
                message.connectType = 1;
                break;
            case "EDGE":
            case 100:
                message.connectType = 100;
                break;
            case "IDEN":
            case 101:
                message.connectType = 101;
                break;
            case "UMTS":
            case 102:
                message.connectType = 102;
                break;
            case "EVDO":
            case 103:
                message.connectType = 103;
                break;
            case "GPRS":
            case 104:
                message.connectType = 104;
                break;
            case "HSDPA":
            case 105:
                message.connectType = 105;
                break;
            case "HSUPA":
            case 106:
                message.connectType = 106;
                break;
            case "HSPA":
            case 107:
                message.connectType = 107;
                break;
            case "CDMA":
            case 108:
                message.connectType = 108;
                break;
            case "ONExRTT":
            case 109:
                message.connectType = 109;
                break;
            case "EHRPD":
            case 110:
                message.connectType = 110;
                break;
            case "LTE":
            case 111:
                message.connectType = 111;
                break;
            case "HSPAP":
            case 112:
                message.connectType = 112;
                break;
            }
            switch (object.connectReason) {
            case "PUSH":
            case 0:
                message.connectReason = 0;
                break;
            case "USER_ACTIVATED":
            case 1:
                message.connectReason = 1;
                break;
            case "SCHEDULED":
            case 2:
                message.connectReason = 2;
                break;
            case "ERROR_RECONNECT":
            case 3:
                message.connectReason = 3;
                break;
            case "NETWORK_SWITCH":
            case 4:
                message.connectReason = 4;
                break;
            case "PING_RECONNECT":
            case 5:
                message.connectReason = 5;
                break;
            }
            if (object.shards) {
                if (!Array.isArray(object.shards))
                    throw TypeError(".ClientHello.C2S.shards: array expected");
                message.shards = [];
                for (var i = 0; i < object.shards.length; ++i)
                    message.shards[i] = object.shards[i] | 0;
            }
            if (object.dnsSource != null) {
                if (typeof object.dnsSource !== "object")
                    throw TypeError(".ClientHello.C2S.dnsSource: object expected");
                message.dnsSource = $root.ClientHello.C2S.DnsSource.fromObject(object.dnsSource);
            }
            if (object.connectAttemptCount != null)
                message.connectAttemptCount = object.connectAttemptCount >>> 0;
            if (object.regData != null) {
                if (typeof object.regData !== "object")
                    throw TypeError(".ClientHello.C2S.regData: object expected");
                message.regData = $root.ClientHello.C2S.CompanionRegData.fromObject(object.regData);
            }
            if (object.tag23 != null)
                message.tag23 = object.tag23 >>> 0;
            if (object.tag24 != null)
                message.tag24 = object.tag24 >>> 0;
            switch (object.iosAppExtension) {
            case "EXT_0":
            case 0:
                message.iosAppExtension = 0;
                break;
            case "EXT_1":
            case 1:
                message.iosAppExtension = 1;
                break;
            case "EXT_2":
            case 2:
                message.iosAppExtension = 2;
                break;
            }
            return message;
        };

        /**
         * Creates a plain object from a C2S message. Also converts values to other types if specified.
         * @function toObject
         * @memberof ClientHello.C2S
         * @static
         * @param {ClientHello.C2S} message C2S
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        C2S.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.clientFeatures = [];
                object.shards = [];
            }
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.username = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.username = options.longs === String ? "0" : 0;
                object.passive = false;
                object.useragent = null;
                object.webInfo = null;
                object.pushName = "";
                object.sessionId = 0;
                object.shortConnect = false;
                object.connectType = options.enums === String ? "UNKNOWN" : 0;
                object.connectReason = options.enums === String ? "PUSH" : 0;
                object.dnsSource = null;
                object.connectAttemptCount = 0;
                object.regData = null;
                object.tag23 = 0;
                object.tag24 = 0;
                object.iosAppExtension = options.enums === String ? "EXT_0" : 0;
            }
            if (message.username != null && message.hasOwnProperty("username"))
                if (typeof message.username === "number")
                    object.username = options.longs === String ? String(message.username) : message.username;
                else
                    object.username = options.longs === String ? $util.Long.prototype.toString.call(message.username) : options.longs === Number ? new $util.LongBits(message.username.low >>> 0, message.username.high >>> 0).toNumber(true) : message.username;
            if (message.passive != null && message.hasOwnProperty("passive"))
                object.passive = message.passive;
            if (message.clientFeatures && message.clientFeatures.length) {
                object.clientFeatures = [];
                for (var j = 0; j < message.clientFeatures.length; ++j)
                    object.clientFeatures[j] = options.enums === String ? $root.ClientHello.C2S.ClientFeature[message.clientFeatures[j]] : message.clientFeatures[j];
            }
            if (message.useragent != null && message.hasOwnProperty("useragent"))
                object.useragent = $root.ClientHello.UserAgent.toObject(message.useragent, options);
            if (message.webInfo != null && message.hasOwnProperty("webInfo"))
                object.webInfo = $root.ClientHello.C2S.WebInfo.toObject(message.webInfo, options);
            if (message.pushName != null && message.hasOwnProperty("pushName"))
                object.pushName = message.pushName;
            if (message.sessionId != null && message.hasOwnProperty("sessionId"))
                object.sessionId = message.sessionId;
            if (message.shortConnect != null && message.hasOwnProperty("shortConnect"))
                object.shortConnect = message.shortConnect;
            if (message.connectType != null && message.hasOwnProperty("connectType"))
                object.connectType = options.enums === String ? $root.ClientHello.C2S.ConnectType[message.connectType] : message.connectType;
            if (message.connectReason != null && message.hasOwnProperty("connectReason"))
                object.connectReason = options.enums === String ? $root.ClientHello.C2S.ConnectReason[message.connectReason] : message.connectReason;
            if (message.shards && message.shards.length) {
                object.shards = [];
                for (var j = 0; j < message.shards.length; ++j)
                    object.shards[j] = message.shards[j];
            }
            if (message.dnsSource != null && message.hasOwnProperty("dnsSource"))
                object.dnsSource = $root.ClientHello.C2S.DnsSource.toObject(message.dnsSource, options);
            if (message.connectAttemptCount != null && message.hasOwnProperty("connectAttemptCount"))
                object.connectAttemptCount = message.connectAttemptCount;
            if (message.regData != null && message.hasOwnProperty("regData"))
                object.regData = $root.ClientHello.C2S.CompanionRegData.toObject(message.regData, options);
            if (message.tag23 != null && message.hasOwnProperty("tag23"))
                object.tag23 = message.tag23;
            if (message.tag24 != null && message.hasOwnProperty("tag24"))
                object.tag24 = message.tag24;
            if (message.iosAppExtension != null && message.hasOwnProperty("iosAppExtension"))
                object.iosAppExtension = options.enums === String ? $root.ClientHello.C2S.IosAppExtension[message.iosAppExtension] : message.iosAppExtension;
            return object;
        };

        /**
         * Converts this C2S to JSON.
         * @function toJSON
         * @memberof ClientHello.C2S
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        C2S.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * ClientFeature enum.
         * @name ClientHello.C2S.ClientFeature
         * @enum {number}
         * @property {number} NONE=0 NONE value
         */
        C2S.ClientFeature = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "NONE"] = 0;
            return values;
        })();

        /**
         * ConnectType enum.
         * @name ClientHello.C2S.ConnectType
         * @enum {number}
         * @property {number} UNKNOWN=0 UNKNOWN value
         * @property {number} WIFI=1 WIFI value
         * @property {number} EDGE=100 EDGE value
         * @property {number} IDEN=101 IDEN value
         * @property {number} UMTS=102 UMTS value
         * @property {number} EVDO=103 EVDO value
         * @property {number} GPRS=104 GPRS value
         * @property {number} HSDPA=105 HSDPA value
         * @property {number} HSUPA=106 HSUPA value
         * @property {number} HSPA=107 HSPA value
         * @property {number} CDMA=108 CDMA value
         * @property {number} ONExRTT=109 ONExRTT value
         * @property {number} EHRPD=110 EHRPD value
         * @property {number} LTE=111 LTE value
         * @property {number} HSPAP=112 HSPAP value
         */
        C2S.ConnectType = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "UNKNOWN"] = 0;
            values[valuesById[1] = "WIFI"] = 1;
            values[valuesById[100] = "EDGE"] = 100;
            values[valuesById[101] = "IDEN"] = 101;
            values[valuesById[102] = "UMTS"] = 102;
            values[valuesById[103] = "EVDO"] = 103;
            values[valuesById[104] = "GPRS"] = 104;
            values[valuesById[105] = "HSDPA"] = 105;
            values[valuesById[106] = "HSUPA"] = 106;
            values[valuesById[107] = "HSPA"] = 107;
            values[valuesById[108] = "CDMA"] = 108;
            values[valuesById[109] = "ONExRTT"] = 109;
            values[valuesById[110] = "EHRPD"] = 110;
            values[valuesById[111] = "LTE"] = 111;
            values[valuesById[112] = "HSPAP"] = 112;
            return values;
        })();

        /**
         * ConnectReason enum.
         * @name ClientHello.C2S.ConnectReason
         * @enum {number}
         * @property {number} PUSH=0 PUSH value
         * @property {number} USER_ACTIVATED=1 USER_ACTIVATED value
         * @property {number} SCHEDULED=2 SCHEDULED value
         * @property {number} ERROR_RECONNECT=3 ERROR_RECONNECT value
         * @property {number} NETWORK_SWITCH=4 NETWORK_SWITCH value
         * @property {number} PING_RECONNECT=5 PING_RECONNECT value
         */
        C2S.ConnectReason = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "PUSH"] = 0;
            values[valuesById[1] = "USER_ACTIVATED"] = 1;
            values[valuesById[2] = "SCHEDULED"] = 2;
            values[valuesById[3] = "ERROR_RECONNECT"] = 3;
            values[valuesById[4] = "NETWORK_SWITCH"] = 4;
            values[valuesById[5] = "PING_RECONNECT"] = 5;
            return values;
        })();

        C2S.DnsSource = (function() {

            /**
             * Properties of a DnsSource.
             * @memberof ClientHello.C2S
             * @interface IDnsSource
             * @property {ClientHello.C2S.DnsSource.DnsMethod|null} [dnsMethod] DnsSource dnsMethod
             * @property {boolean|null} [appCached] DnsSource appCached
             */

            /**
             * Constructs a new DnsSource.
             * @memberof ClientHello.C2S
             * @classdesc Represents a DnsSource.
             * @implements IDnsSource
             * @constructor
             * @param {ClientHello.C2S.IDnsSource=} [properties] Properties to set
             */
            function DnsSource(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * DnsSource dnsMethod.
             * @member {ClientHello.C2S.DnsSource.DnsMethod} dnsMethod
             * @memberof ClientHello.C2S.DnsSource
             * @instance
             */
            DnsSource.prototype.dnsMethod = 0;

            /**
             * DnsSource appCached.
             * @member {boolean} appCached
             * @memberof ClientHello.C2S.DnsSource
             * @instance
             */
            DnsSource.prototype.appCached = false;

            /**
             * Creates a new DnsSource instance using the specified properties.
             * @function create
             * @memberof ClientHello.C2S.DnsSource
             * @static
             * @param {ClientHello.C2S.IDnsSource=} [properties] Properties to set
             * @returns {ClientHello.C2S.DnsSource} DnsSource instance
             */
            DnsSource.create = function create(properties) {
                return new DnsSource(properties);
            };

            /**
             * Encodes the specified DnsSource message. Does not implicitly {@link ClientHello.C2S.DnsSource.verify|verify} messages.
             * @function encode
             * @memberof ClientHello.C2S.DnsSource
             * @static
             * @param {ClientHello.C2S.IDnsSource} message DnsSource message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            DnsSource.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.dnsMethod != null && Object.hasOwnProperty.call(message, "dnsMethod"))
                    writer.uint32(/* id 15, wireType 0 =*/120).int32(message.dnsMethod);
                if (message.appCached != null && Object.hasOwnProperty.call(message, "appCached"))
                    writer.uint32(/* id 16, wireType 0 =*/128).bool(message.appCached);
                return writer;
            };

            /**
             * Encodes the specified DnsSource message, length delimited. Does not implicitly {@link ClientHello.C2S.DnsSource.verify|verify} messages.
             * @function encodeDelimited
             * @memberof ClientHello.C2S.DnsSource
             * @static
             * @param {ClientHello.C2S.IDnsSource} message DnsSource message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            DnsSource.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a DnsSource message from the specified reader or buffer.
             * @function decode
             * @memberof ClientHello.C2S.DnsSource
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {ClientHello.C2S.DnsSource} DnsSource
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            DnsSource.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ClientHello.C2S.DnsSource();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 15:
                        message.dnsMethod = reader.int32();
                        break;
                    case 16:
                        message.appCached = reader.bool();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a DnsSource message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof ClientHello.C2S.DnsSource
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {ClientHello.C2S.DnsSource} DnsSource
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            DnsSource.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a DnsSource message.
             * @function verify
             * @memberof ClientHello.C2S.DnsSource
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            DnsSource.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.dnsMethod != null && message.hasOwnProperty("dnsMethod"))
                    switch (message.dnsMethod) {
                    default:
                        return "dnsMethod: enum value expected";
                    case 0:
                    case 1:
                    case 2:
                    case 3:
                        break;
                    }
                if (message.appCached != null && message.hasOwnProperty("appCached"))
                    if (typeof message.appCached !== "boolean")
                        return "appCached: boolean expected";
                return null;
            };

            /**
             * Creates a DnsSource message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof ClientHello.C2S.DnsSource
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {ClientHello.C2S.DnsSource} DnsSource
             */
            DnsSource.fromObject = function fromObject(object) {
                if (object instanceof $root.ClientHello.C2S.DnsSource)
                    return object;
                var message = new $root.ClientHello.C2S.DnsSource();
                switch (object.dnsMethod) {
                case "METHOD_0":
                case 0:
                    message.dnsMethod = 0;
                    break;
                case "METHOD_1":
                case 1:
                    message.dnsMethod = 1;
                    break;
                case "METHOD_2":
                case 2:
                    message.dnsMethod = 2;
                    break;
                case "METHOD_3":
                case 3:
                    message.dnsMethod = 3;
                    break;
                }
                if (object.appCached != null)
                    message.appCached = Boolean(object.appCached);
                return message;
            };

            /**
             * Creates a plain object from a DnsSource message. Also converts values to other types if specified.
             * @function toObject
             * @memberof ClientHello.C2S.DnsSource
             * @static
             * @param {ClientHello.C2S.DnsSource} message DnsSource
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            DnsSource.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.dnsMethod = options.enums === String ? "METHOD_0" : 0;
                    object.appCached = false;
                }
                if (message.dnsMethod != null && message.hasOwnProperty("dnsMethod"))
                    object.dnsMethod = options.enums === String ? $root.ClientHello.C2S.DnsSource.DnsMethod[message.dnsMethod] : message.dnsMethod;
                if (message.appCached != null && message.hasOwnProperty("appCached"))
                    object.appCached = message.appCached;
                return object;
            };

            /**
             * Converts this DnsSource to JSON.
             * @function toJSON
             * @memberof ClientHello.C2S.DnsSource
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            DnsSource.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * DnsMethod enum.
             * @name ClientHello.C2S.DnsSource.DnsMethod
             * @enum {number}
             * @property {number} METHOD_0=0 METHOD_0 value
             * @property {number} METHOD_1=1 METHOD_1 value
             * @property {number} METHOD_2=2 METHOD_2 value
             * @property {number} METHOD_3=3 METHOD_3 value
             */
            DnsSource.DnsMethod = (function() {
                var valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "METHOD_0"] = 0;
                values[valuesById[1] = "METHOD_1"] = 1;
                values[valuesById[2] = "METHOD_2"] = 2;
                values[valuesById[3] = "METHOD_3"] = 3;
                return values;
            })();

            return DnsSource;
        })();

        /**
         * IosAppExtension enum.
         * @name ClientHello.C2S.IosAppExtension
         * @enum {number}
         * @property {number} EXT_0=0 EXT_0 value
         * @property {number} EXT_1=1 EXT_1 value
         * @property {number} EXT_2=2 EXT_2 value
         */
        C2S.IosAppExtension = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "EXT_0"] = 0;
            values[valuesById[1] = "EXT_1"] = 1;
            values[valuesById[2] = "EXT_2"] = 2;
            return values;
        })();

        C2S.WebInfo = (function() {

            /**
             * Properties of a WebInfo.
             * @memberof ClientHello.C2S
             * @interface IWebInfo
             * @property {string|null} [refToken] WebInfo refToken
             * @property {string|null} [version] WebInfo version
             * @property {ClientHello.C2S.WebInfo.IWebdPayload|null} [webdPayload] WebInfo webdPayload
             */

            /**
             * Constructs a new WebInfo.
             * @memberof ClientHello.C2S
             * @classdesc Represents a WebInfo.
             * @implements IWebInfo
             * @constructor
             * @param {ClientHello.C2S.IWebInfo=} [properties] Properties to set
             */
            function WebInfo(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * WebInfo refToken.
             * @member {string} refToken
             * @memberof ClientHello.C2S.WebInfo
             * @instance
             */
            WebInfo.prototype.refToken = "";

            /**
             * WebInfo version.
             * @member {string} version
             * @memberof ClientHello.C2S.WebInfo
             * @instance
             */
            WebInfo.prototype.version = "";

            /**
             * WebInfo webdPayload.
             * @member {ClientHello.C2S.WebInfo.IWebdPayload|null|undefined} webdPayload
             * @memberof ClientHello.C2S.WebInfo
             * @instance
             */
            WebInfo.prototype.webdPayload = null;

            /**
             * Creates a new WebInfo instance using the specified properties.
             * @function create
             * @memberof ClientHello.C2S.WebInfo
             * @static
             * @param {ClientHello.C2S.IWebInfo=} [properties] Properties to set
             * @returns {ClientHello.C2S.WebInfo} WebInfo instance
             */
            WebInfo.create = function create(properties) {
                return new WebInfo(properties);
            };

            /**
             * Encodes the specified WebInfo message. Does not implicitly {@link ClientHello.C2S.WebInfo.verify|verify} messages.
             * @function encode
             * @memberof ClientHello.C2S.WebInfo
             * @static
             * @param {ClientHello.C2S.IWebInfo} message WebInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            WebInfo.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.refToken != null && Object.hasOwnProperty.call(message, "refToken"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.refToken);
                if (message.version != null && Object.hasOwnProperty.call(message, "version"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.version);
                if (message.webdPayload != null && Object.hasOwnProperty.call(message, "webdPayload"))
                    $root.ClientHello.C2S.WebInfo.WebdPayload.encode(message.webdPayload, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified WebInfo message, length delimited. Does not implicitly {@link ClientHello.C2S.WebInfo.verify|verify} messages.
             * @function encodeDelimited
             * @memberof ClientHello.C2S.WebInfo
             * @static
             * @param {ClientHello.C2S.IWebInfo} message WebInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            WebInfo.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a WebInfo message from the specified reader or buffer.
             * @function decode
             * @memberof ClientHello.C2S.WebInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {ClientHello.C2S.WebInfo} WebInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            WebInfo.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ClientHello.C2S.WebInfo();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.refToken = reader.string();
                        break;
                    case 2:
                        message.version = reader.string();
                        break;
                    case 3:
                        message.webdPayload = $root.ClientHello.C2S.WebInfo.WebdPayload.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a WebInfo message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof ClientHello.C2S.WebInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {ClientHello.C2S.WebInfo} WebInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            WebInfo.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a WebInfo message.
             * @function verify
             * @memberof ClientHello.C2S.WebInfo
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            WebInfo.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.refToken != null && message.hasOwnProperty("refToken"))
                    if (!$util.isString(message.refToken))
                        return "refToken: string expected";
                if (message.version != null && message.hasOwnProperty("version"))
                    if (!$util.isString(message.version))
                        return "version: string expected";
                if (message.webdPayload != null && message.hasOwnProperty("webdPayload")) {
                    var error = $root.ClientHello.C2S.WebInfo.WebdPayload.verify(message.webdPayload);
                    if (error)
                        return "webdPayload." + error;
                }
                return null;
            };

            /**
             * Creates a WebInfo message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof ClientHello.C2S.WebInfo
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {ClientHello.C2S.WebInfo} WebInfo
             */
            WebInfo.fromObject = function fromObject(object) {
                if (object instanceof $root.ClientHello.C2S.WebInfo)
                    return object;
                var message = new $root.ClientHello.C2S.WebInfo();
                if (object.refToken != null)
                    message.refToken = String(object.refToken);
                if (object.version != null)
                    message.version = String(object.version);
                if (object.webdPayload != null) {
                    if (typeof object.webdPayload !== "object")
                        throw TypeError(".ClientHello.C2S.WebInfo.webdPayload: object expected");
                    message.webdPayload = $root.ClientHello.C2S.WebInfo.WebdPayload.fromObject(object.webdPayload);
                }
                return message;
            };

            /**
             * Creates a plain object from a WebInfo message. Also converts values to other types if specified.
             * @function toObject
             * @memberof ClientHello.C2S.WebInfo
             * @static
             * @param {ClientHello.C2S.WebInfo} message WebInfo
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            WebInfo.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.refToken = "";
                    object.version = "";
                    object.webdPayload = null;
                }
                if (message.refToken != null && message.hasOwnProperty("refToken"))
                    object.refToken = message.refToken;
                if (message.version != null && message.hasOwnProperty("version"))
                    object.version = message.version;
                if (message.webdPayload != null && message.hasOwnProperty("webdPayload"))
                    object.webdPayload = $root.ClientHello.C2S.WebInfo.WebdPayload.toObject(message.webdPayload, options);
                return object;
            };

            /**
             * Converts this WebInfo to JSON.
             * @function toJSON
             * @memberof ClientHello.C2S.WebInfo
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            WebInfo.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            WebInfo.WebdPayload = (function() {

                /**
                 * Properties of a WebdPayload.
                 * @memberof ClientHello.C2S.WebInfo
                 * @interface IWebdPayload
                 * @property {boolean|null} [usesParticipantInKey] WebdPayload usesParticipantInKey
                 * @property {boolean|null} [supportsStarredMessages] WebdPayload supportsStarredMessages
                 * @property {boolean|null} [supportsDocumentMessages] WebdPayload supportsDocumentMessages
                 * @property {boolean|null} [supportsUrlMessages] WebdPayload supportsUrlMessages
                 * @property {boolean|null} [supportsMediaRetry] WebdPayload supportsMediaRetry
                 * @property {boolean|null} [supportsE2eImage] WebdPayload supportsE2eImage
                 * @property {boolean|null} [supportsE2eVideo] WebdPayload supportsE2eVideo
                 * @property {boolean|null} [supportsE2eAudio] WebdPayload supportsE2eAudio
                 * @property {boolean|null} [supportsE2eDocument] WebdPayload supportsE2eDocument
                 * @property {string|null} [documentTypes] WebdPayload documentTypes
                 */

                /**
                 * Constructs a new WebdPayload.
                 * @memberof ClientHello.C2S.WebInfo
                 * @classdesc Represents a WebdPayload.
                 * @implements IWebdPayload
                 * @constructor
                 * @param {ClientHello.C2S.WebInfo.IWebdPayload=} [properties] Properties to set
                 */
                function WebdPayload(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * WebdPayload usesParticipantInKey.
                 * @member {boolean} usesParticipantInKey
                 * @memberof ClientHello.C2S.WebInfo.WebdPayload
                 * @instance
                 */
                WebdPayload.prototype.usesParticipantInKey = false;

                /**
                 * WebdPayload supportsStarredMessages.
                 * @member {boolean} supportsStarredMessages
                 * @memberof ClientHello.C2S.WebInfo.WebdPayload
                 * @instance
                 */
                WebdPayload.prototype.supportsStarredMessages = false;

                /**
                 * WebdPayload supportsDocumentMessages.
                 * @member {boolean} supportsDocumentMessages
                 * @memberof ClientHello.C2S.WebInfo.WebdPayload
                 * @instance
                 */
                WebdPayload.prototype.supportsDocumentMessages = false;

                /**
                 * WebdPayload supportsUrlMessages.
                 * @member {boolean} supportsUrlMessages
                 * @memberof ClientHello.C2S.WebInfo.WebdPayload
                 * @instance
                 */
                WebdPayload.prototype.supportsUrlMessages = false;

                /**
                 * WebdPayload supportsMediaRetry.
                 * @member {boolean} supportsMediaRetry
                 * @memberof ClientHello.C2S.WebInfo.WebdPayload
                 * @instance
                 */
                WebdPayload.prototype.supportsMediaRetry = false;

                /**
                 * WebdPayload supportsE2eImage.
                 * @member {boolean} supportsE2eImage
                 * @memberof ClientHello.C2S.WebInfo.WebdPayload
                 * @instance
                 */
                WebdPayload.prototype.supportsE2eImage = false;

                /**
                 * WebdPayload supportsE2eVideo.
                 * @member {boolean} supportsE2eVideo
                 * @memberof ClientHello.C2S.WebInfo.WebdPayload
                 * @instance
                 */
                WebdPayload.prototype.supportsE2eVideo = false;

                /**
                 * WebdPayload supportsE2eAudio.
                 * @member {boolean} supportsE2eAudio
                 * @memberof ClientHello.C2S.WebInfo.WebdPayload
                 * @instance
                 */
                WebdPayload.prototype.supportsE2eAudio = false;

                /**
                 * WebdPayload supportsE2eDocument.
                 * @member {boolean} supportsE2eDocument
                 * @memberof ClientHello.C2S.WebInfo.WebdPayload
                 * @instance
                 */
                WebdPayload.prototype.supportsE2eDocument = false;

                /**
                 * WebdPayload documentTypes.
                 * @member {string} documentTypes
                 * @memberof ClientHello.C2S.WebInfo.WebdPayload
                 * @instance
                 */
                WebdPayload.prototype.documentTypes = "";

                /**
                 * Creates a new WebdPayload instance using the specified properties.
                 * @function create
                 * @memberof ClientHello.C2S.WebInfo.WebdPayload
                 * @static
                 * @param {ClientHello.C2S.WebInfo.IWebdPayload=} [properties] Properties to set
                 * @returns {ClientHello.C2S.WebInfo.WebdPayload} WebdPayload instance
                 */
                WebdPayload.create = function create(properties) {
                    return new WebdPayload(properties);
                };

                /**
                 * Encodes the specified WebdPayload message. Does not implicitly {@link ClientHello.C2S.WebInfo.WebdPayload.verify|verify} messages.
                 * @function encode
                 * @memberof ClientHello.C2S.WebInfo.WebdPayload
                 * @static
                 * @param {ClientHello.C2S.WebInfo.IWebdPayload} message WebdPayload message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                WebdPayload.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.usesParticipantInKey != null && Object.hasOwnProperty.call(message, "usesParticipantInKey"))
                        writer.uint32(/* id 1, wireType 0 =*/8).bool(message.usesParticipantInKey);
                    if (message.supportsStarredMessages != null && Object.hasOwnProperty.call(message, "supportsStarredMessages"))
                        writer.uint32(/* id 2, wireType 0 =*/16).bool(message.supportsStarredMessages);
                    if (message.supportsDocumentMessages != null && Object.hasOwnProperty.call(message, "supportsDocumentMessages"))
                        writer.uint32(/* id 3, wireType 0 =*/24).bool(message.supportsDocumentMessages);
                    if (message.supportsUrlMessages != null && Object.hasOwnProperty.call(message, "supportsUrlMessages"))
                        writer.uint32(/* id 4, wireType 0 =*/32).bool(message.supportsUrlMessages);
                    if (message.supportsMediaRetry != null && Object.hasOwnProperty.call(message, "supportsMediaRetry"))
                        writer.uint32(/* id 5, wireType 0 =*/40).bool(message.supportsMediaRetry);
                    if (message.supportsE2eImage != null && Object.hasOwnProperty.call(message, "supportsE2eImage"))
                        writer.uint32(/* id 6, wireType 0 =*/48).bool(message.supportsE2eImage);
                    if (message.supportsE2eVideo != null && Object.hasOwnProperty.call(message, "supportsE2eVideo"))
                        writer.uint32(/* id 7, wireType 0 =*/56).bool(message.supportsE2eVideo);
                    if (message.supportsE2eAudio != null && Object.hasOwnProperty.call(message, "supportsE2eAudio"))
                        writer.uint32(/* id 8, wireType 0 =*/64).bool(message.supportsE2eAudio);
                    if (message.supportsE2eDocument != null && Object.hasOwnProperty.call(message, "supportsE2eDocument"))
                        writer.uint32(/* id 9, wireType 0 =*/72).bool(message.supportsE2eDocument);
                    if (message.documentTypes != null && Object.hasOwnProperty.call(message, "documentTypes"))
                        writer.uint32(/* id 10, wireType 2 =*/82).string(message.documentTypes);
                    return writer;
                };

                /**
                 * Encodes the specified WebdPayload message, length delimited. Does not implicitly {@link ClientHello.C2S.WebInfo.WebdPayload.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof ClientHello.C2S.WebInfo.WebdPayload
                 * @static
                 * @param {ClientHello.C2S.WebInfo.IWebdPayload} message WebdPayload message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                WebdPayload.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a WebdPayload message from the specified reader or buffer.
                 * @function decode
                 * @memberof ClientHello.C2S.WebInfo.WebdPayload
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {ClientHello.C2S.WebInfo.WebdPayload} WebdPayload
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                WebdPayload.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ClientHello.C2S.WebInfo.WebdPayload();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.usesParticipantInKey = reader.bool();
                            break;
                        case 2:
                            message.supportsStarredMessages = reader.bool();
                            break;
                        case 3:
                            message.supportsDocumentMessages = reader.bool();
                            break;
                        case 4:
                            message.supportsUrlMessages = reader.bool();
                            break;
                        case 5:
                            message.supportsMediaRetry = reader.bool();
                            break;
                        case 6:
                            message.supportsE2eImage = reader.bool();
                            break;
                        case 7:
                            message.supportsE2eVideo = reader.bool();
                            break;
                        case 8:
                            message.supportsE2eAudio = reader.bool();
                            break;
                        case 9:
                            message.supportsE2eDocument = reader.bool();
                            break;
                        case 10:
                            message.documentTypes = reader.string();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a WebdPayload message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof ClientHello.C2S.WebInfo.WebdPayload
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {ClientHello.C2S.WebInfo.WebdPayload} WebdPayload
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                WebdPayload.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a WebdPayload message.
                 * @function verify
                 * @memberof ClientHello.C2S.WebInfo.WebdPayload
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                WebdPayload.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.usesParticipantInKey != null && message.hasOwnProperty("usesParticipantInKey"))
                        if (typeof message.usesParticipantInKey !== "boolean")
                            return "usesParticipantInKey: boolean expected";
                    if (message.supportsStarredMessages != null && message.hasOwnProperty("supportsStarredMessages"))
                        if (typeof message.supportsStarredMessages !== "boolean")
                            return "supportsStarredMessages: boolean expected";
                    if (message.supportsDocumentMessages != null && message.hasOwnProperty("supportsDocumentMessages"))
                        if (typeof message.supportsDocumentMessages !== "boolean")
                            return "supportsDocumentMessages: boolean expected";
                    if (message.supportsUrlMessages != null && message.hasOwnProperty("supportsUrlMessages"))
                        if (typeof message.supportsUrlMessages !== "boolean")
                            return "supportsUrlMessages: boolean expected";
                    if (message.supportsMediaRetry != null && message.hasOwnProperty("supportsMediaRetry"))
                        if (typeof message.supportsMediaRetry !== "boolean")
                            return "supportsMediaRetry: boolean expected";
                    if (message.supportsE2eImage != null && message.hasOwnProperty("supportsE2eImage"))
                        if (typeof message.supportsE2eImage !== "boolean")
                            return "supportsE2eImage: boolean expected";
                    if (message.supportsE2eVideo != null && message.hasOwnProperty("supportsE2eVideo"))
                        if (typeof message.supportsE2eVideo !== "boolean")
                            return "supportsE2eVideo: boolean expected";
                    if (message.supportsE2eAudio != null && message.hasOwnProperty("supportsE2eAudio"))
                        if (typeof message.supportsE2eAudio !== "boolean")
                            return "supportsE2eAudio: boolean expected";
                    if (message.supportsE2eDocument != null && message.hasOwnProperty("supportsE2eDocument"))
                        if (typeof message.supportsE2eDocument !== "boolean")
                            return "supportsE2eDocument: boolean expected";
                    if (message.documentTypes != null && message.hasOwnProperty("documentTypes"))
                        if (!$util.isString(message.documentTypes))
                            return "documentTypes: string expected";
                    return null;
                };

                /**
                 * Creates a WebdPayload message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof ClientHello.C2S.WebInfo.WebdPayload
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {ClientHello.C2S.WebInfo.WebdPayload} WebdPayload
                 */
                WebdPayload.fromObject = function fromObject(object) {
                    if (object instanceof $root.ClientHello.C2S.WebInfo.WebdPayload)
                        return object;
                    var message = new $root.ClientHello.C2S.WebInfo.WebdPayload();
                    if (object.usesParticipantInKey != null)
                        message.usesParticipantInKey = Boolean(object.usesParticipantInKey);
                    if (object.supportsStarredMessages != null)
                        message.supportsStarredMessages = Boolean(object.supportsStarredMessages);
                    if (object.supportsDocumentMessages != null)
                        message.supportsDocumentMessages = Boolean(object.supportsDocumentMessages);
                    if (object.supportsUrlMessages != null)
                        message.supportsUrlMessages = Boolean(object.supportsUrlMessages);
                    if (object.supportsMediaRetry != null)
                        message.supportsMediaRetry = Boolean(object.supportsMediaRetry);
                    if (object.supportsE2eImage != null)
                        message.supportsE2eImage = Boolean(object.supportsE2eImage);
                    if (object.supportsE2eVideo != null)
                        message.supportsE2eVideo = Boolean(object.supportsE2eVideo);
                    if (object.supportsE2eAudio != null)
                        message.supportsE2eAudio = Boolean(object.supportsE2eAudio);
                    if (object.supportsE2eDocument != null)
                        message.supportsE2eDocument = Boolean(object.supportsE2eDocument);
                    if (object.documentTypes != null)
                        message.documentTypes = String(object.documentTypes);
                    return message;
                };

                /**
                 * Creates a plain object from a WebdPayload message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof ClientHello.C2S.WebInfo.WebdPayload
                 * @static
                 * @param {ClientHello.C2S.WebInfo.WebdPayload} message WebdPayload
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                WebdPayload.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.usesParticipantInKey = false;
                        object.supportsStarredMessages = false;
                        object.supportsDocumentMessages = false;
                        object.supportsUrlMessages = false;
                        object.supportsMediaRetry = false;
                        object.supportsE2eImage = false;
                        object.supportsE2eVideo = false;
                        object.supportsE2eAudio = false;
                        object.supportsE2eDocument = false;
                        object.documentTypes = "";
                    }
                    if (message.usesParticipantInKey != null && message.hasOwnProperty("usesParticipantInKey"))
                        object.usesParticipantInKey = message.usesParticipantInKey;
                    if (message.supportsStarredMessages != null && message.hasOwnProperty("supportsStarredMessages"))
                        object.supportsStarredMessages = message.supportsStarredMessages;
                    if (message.supportsDocumentMessages != null && message.hasOwnProperty("supportsDocumentMessages"))
                        object.supportsDocumentMessages = message.supportsDocumentMessages;
                    if (message.supportsUrlMessages != null && message.hasOwnProperty("supportsUrlMessages"))
                        object.supportsUrlMessages = message.supportsUrlMessages;
                    if (message.supportsMediaRetry != null && message.hasOwnProperty("supportsMediaRetry"))
                        object.supportsMediaRetry = message.supportsMediaRetry;
                    if (message.supportsE2eImage != null && message.hasOwnProperty("supportsE2eImage"))
                        object.supportsE2eImage = message.supportsE2eImage;
                    if (message.supportsE2eVideo != null && message.hasOwnProperty("supportsE2eVideo"))
                        object.supportsE2eVideo = message.supportsE2eVideo;
                    if (message.supportsE2eAudio != null && message.hasOwnProperty("supportsE2eAudio"))
                        object.supportsE2eAudio = message.supportsE2eAudio;
                    if (message.supportsE2eDocument != null && message.hasOwnProperty("supportsE2eDocument"))
                        object.supportsE2eDocument = message.supportsE2eDocument;
                    if (message.documentTypes != null && message.hasOwnProperty("documentTypes"))
                        object.documentTypes = message.documentTypes;
                    return object;
                };

                /**
                 * Converts this WebdPayload to JSON.
                 * @function toJSON
                 * @memberof ClientHello.C2S.WebInfo.WebdPayload
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                WebdPayload.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return WebdPayload;
            })();

            return WebInfo;
        })();

        C2S.CompanionRegData = (function() {

            /**
             * Properties of a CompanionRegData.
             * @memberof ClientHello.C2S
             * @interface ICompanionRegData
             * @property {Uint8Array|null} [eRegid] CompanionRegData eRegid
             * @property {Uint8Array|null} [eKeytype] CompanionRegData eKeytype
             * @property {Uint8Array|null} [eIdent] CompanionRegData eIdent
             * @property {Uint8Array|null} [eSkeyId] CompanionRegData eSkeyId
             * @property {Uint8Array|null} [eSkeyVal] CompanionRegData eSkeyVal
             * @property {Uint8Array|null} [eSkeySig] CompanionRegData eSkeySig
             * @property {Uint8Array|null} [buildHash] CompanionRegData buildHash
             * @property {Uint8Array|null} [companionProps] CompanionRegData companionProps
             */

            /**
             * Constructs a new CompanionRegData.
             * @memberof ClientHello.C2S
             * @classdesc Represents a CompanionRegData.
             * @implements ICompanionRegData
             * @constructor
             * @param {ClientHello.C2S.ICompanionRegData=} [properties] Properties to set
             */
            function CompanionRegData(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * CompanionRegData eRegid.
             * @member {Uint8Array} eRegid
             * @memberof ClientHello.C2S.CompanionRegData
             * @instance
             */
            CompanionRegData.prototype.eRegid = $util.newBuffer([]);

            /**
             * CompanionRegData eKeytype.
             * @member {Uint8Array} eKeytype
             * @memberof ClientHello.C2S.CompanionRegData
             * @instance
             */
            CompanionRegData.prototype.eKeytype = $util.newBuffer([]);

            /**
             * CompanionRegData eIdent.
             * @member {Uint8Array} eIdent
             * @memberof ClientHello.C2S.CompanionRegData
             * @instance
             */
            CompanionRegData.prototype.eIdent = $util.newBuffer([]);

            /**
             * CompanionRegData eSkeyId.
             * @member {Uint8Array} eSkeyId
             * @memberof ClientHello.C2S.CompanionRegData
             * @instance
             */
            CompanionRegData.prototype.eSkeyId = $util.newBuffer([]);

            /**
             * CompanionRegData eSkeyVal.
             * @member {Uint8Array} eSkeyVal
             * @memberof ClientHello.C2S.CompanionRegData
             * @instance
             */
            CompanionRegData.prototype.eSkeyVal = $util.newBuffer([]);

            /**
             * CompanionRegData eSkeySig.
             * @member {Uint8Array} eSkeySig
             * @memberof ClientHello.C2S.CompanionRegData
             * @instance
             */
            CompanionRegData.prototype.eSkeySig = $util.newBuffer([]);

            /**
             * CompanionRegData buildHash.
             * @member {Uint8Array} buildHash
             * @memberof ClientHello.C2S.CompanionRegData
             * @instance
             */
            CompanionRegData.prototype.buildHash = $util.newBuffer([]);

            /**
             * CompanionRegData companionProps.
             * @member {Uint8Array} companionProps
             * @memberof ClientHello.C2S.CompanionRegData
             * @instance
             */
            CompanionRegData.prototype.companionProps = $util.newBuffer([]);

            /**
             * Creates a new CompanionRegData instance using the specified properties.
             * @function create
             * @memberof ClientHello.C2S.CompanionRegData
             * @static
             * @param {ClientHello.C2S.ICompanionRegData=} [properties] Properties to set
             * @returns {ClientHello.C2S.CompanionRegData} CompanionRegData instance
             */
            CompanionRegData.create = function create(properties) {
                return new CompanionRegData(properties);
            };

            /**
             * Encodes the specified CompanionRegData message. Does not implicitly {@link ClientHello.C2S.CompanionRegData.verify|verify} messages.
             * @function encode
             * @memberof ClientHello.C2S.CompanionRegData
             * @static
             * @param {ClientHello.C2S.ICompanionRegData} message CompanionRegData message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CompanionRegData.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.eRegid != null && Object.hasOwnProperty.call(message, "eRegid"))
                    writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.eRegid);
                if (message.eKeytype != null && Object.hasOwnProperty.call(message, "eKeytype"))
                    writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.eKeytype);
                if (message.eIdent != null && Object.hasOwnProperty.call(message, "eIdent"))
                    writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.eIdent);
                if (message.eSkeyId != null && Object.hasOwnProperty.call(message, "eSkeyId"))
                    writer.uint32(/* id 4, wireType 2 =*/34).bytes(message.eSkeyId);
                if (message.eSkeyVal != null && Object.hasOwnProperty.call(message, "eSkeyVal"))
                    writer.uint32(/* id 5, wireType 2 =*/42).bytes(message.eSkeyVal);
                if (message.eSkeySig != null && Object.hasOwnProperty.call(message, "eSkeySig"))
                    writer.uint32(/* id 6, wireType 2 =*/50).bytes(message.eSkeySig);
                if (message.buildHash != null && Object.hasOwnProperty.call(message, "buildHash"))
                    writer.uint32(/* id 7, wireType 2 =*/58).bytes(message.buildHash);
                if (message.companionProps != null && Object.hasOwnProperty.call(message, "companionProps"))
                    writer.uint32(/* id 8, wireType 2 =*/66).bytes(message.companionProps);
                return writer;
            };

            /**
             * Encodes the specified CompanionRegData message, length delimited. Does not implicitly {@link ClientHello.C2S.CompanionRegData.verify|verify} messages.
             * @function encodeDelimited
             * @memberof ClientHello.C2S.CompanionRegData
             * @static
             * @param {ClientHello.C2S.ICompanionRegData} message CompanionRegData message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CompanionRegData.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a CompanionRegData message from the specified reader or buffer.
             * @function decode
             * @memberof ClientHello.C2S.CompanionRegData
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {ClientHello.C2S.CompanionRegData} CompanionRegData
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CompanionRegData.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ClientHello.C2S.CompanionRegData();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.eRegid = reader.bytes();
                        break;
                    case 2:
                        message.eKeytype = reader.bytes();
                        break;
                    case 3:
                        message.eIdent = reader.bytes();
                        break;
                    case 4:
                        message.eSkeyId = reader.bytes();
                        break;
                    case 5:
                        message.eSkeyVal = reader.bytes();
                        break;
                    case 6:
                        message.eSkeySig = reader.bytes();
                        break;
                    case 7:
                        message.buildHash = reader.bytes();
                        break;
                    case 8:
                        message.companionProps = reader.bytes();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a CompanionRegData message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof ClientHello.C2S.CompanionRegData
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {ClientHello.C2S.CompanionRegData} CompanionRegData
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CompanionRegData.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a CompanionRegData message.
             * @function verify
             * @memberof ClientHello.C2S.CompanionRegData
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            CompanionRegData.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.eRegid != null && message.hasOwnProperty("eRegid"))
                    if (!(message.eRegid && typeof message.eRegid.length === "number" || $util.isString(message.eRegid)))
                        return "eRegid: buffer expected";
                if (message.eKeytype != null && message.hasOwnProperty("eKeytype"))
                    if (!(message.eKeytype && typeof message.eKeytype.length === "number" || $util.isString(message.eKeytype)))
                        return "eKeytype: buffer expected";
                if (message.eIdent != null && message.hasOwnProperty("eIdent"))
                    if (!(message.eIdent && typeof message.eIdent.length === "number" || $util.isString(message.eIdent)))
                        return "eIdent: buffer expected";
                if (message.eSkeyId != null && message.hasOwnProperty("eSkeyId"))
                    if (!(message.eSkeyId && typeof message.eSkeyId.length === "number" || $util.isString(message.eSkeyId)))
                        return "eSkeyId: buffer expected";
                if (message.eSkeyVal != null && message.hasOwnProperty("eSkeyVal"))
                    if (!(message.eSkeyVal && typeof message.eSkeyVal.length === "number" || $util.isString(message.eSkeyVal)))
                        return "eSkeyVal: buffer expected";
                if (message.eSkeySig != null && message.hasOwnProperty("eSkeySig"))
                    if (!(message.eSkeySig && typeof message.eSkeySig.length === "number" || $util.isString(message.eSkeySig)))
                        return "eSkeySig: buffer expected";
                if (message.buildHash != null && message.hasOwnProperty("buildHash"))
                    if (!(message.buildHash && typeof message.buildHash.length === "number" || $util.isString(message.buildHash)))
                        return "buildHash: buffer expected";
                if (message.companionProps != null && message.hasOwnProperty("companionProps"))
                    if (!(message.companionProps && typeof message.companionProps.length === "number" || $util.isString(message.companionProps)))
                        return "companionProps: buffer expected";
                return null;
            };

            /**
             * Creates a CompanionRegData message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof ClientHello.C2S.CompanionRegData
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {ClientHello.C2S.CompanionRegData} CompanionRegData
             */
            CompanionRegData.fromObject = function fromObject(object) {
                if (object instanceof $root.ClientHello.C2S.CompanionRegData)
                    return object;
                var message = new $root.ClientHello.C2S.CompanionRegData();
                if (object.eRegid != null)
                    if (typeof object.eRegid === "string")
                        $util.base64.decode(object.eRegid, message.eRegid = $util.newBuffer($util.base64.length(object.eRegid)), 0);
                    else if (object.eRegid.length)
                        message.eRegid = object.eRegid;
                if (object.eKeytype != null)
                    if (typeof object.eKeytype === "string")
                        $util.base64.decode(object.eKeytype, message.eKeytype = $util.newBuffer($util.base64.length(object.eKeytype)), 0);
                    else if (object.eKeytype.length)
                        message.eKeytype = object.eKeytype;
                if (object.eIdent != null)
                    if (typeof object.eIdent === "string")
                        $util.base64.decode(object.eIdent, message.eIdent = $util.newBuffer($util.base64.length(object.eIdent)), 0);
                    else if (object.eIdent.length)
                        message.eIdent = object.eIdent;
                if (object.eSkeyId != null)
                    if (typeof object.eSkeyId === "string")
                        $util.base64.decode(object.eSkeyId, message.eSkeyId = $util.newBuffer($util.base64.length(object.eSkeyId)), 0);
                    else if (object.eSkeyId.length)
                        message.eSkeyId = object.eSkeyId;
                if (object.eSkeyVal != null)
                    if (typeof object.eSkeyVal === "string")
                        $util.base64.decode(object.eSkeyVal, message.eSkeyVal = $util.newBuffer($util.base64.length(object.eSkeyVal)), 0);
                    else if (object.eSkeyVal.length)
                        message.eSkeyVal = object.eSkeyVal;
                if (object.eSkeySig != null)
                    if (typeof object.eSkeySig === "string")
                        $util.base64.decode(object.eSkeySig, message.eSkeySig = $util.newBuffer($util.base64.length(object.eSkeySig)), 0);
                    else if (object.eSkeySig.length)
                        message.eSkeySig = object.eSkeySig;
                if (object.buildHash != null)
                    if (typeof object.buildHash === "string")
                        $util.base64.decode(object.buildHash, message.buildHash = $util.newBuffer($util.base64.length(object.buildHash)), 0);
                    else if (object.buildHash.length)
                        message.buildHash = object.buildHash;
                if (object.companionProps != null)
                    if (typeof object.companionProps === "string")
                        $util.base64.decode(object.companionProps, message.companionProps = $util.newBuffer($util.base64.length(object.companionProps)), 0);
                    else if (object.companionProps.length)
                        message.companionProps = object.companionProps;
                return message;
            };

            /**
             * Creates a plain object from a CompanionRegData message. Also converts values to other types if specified.
             * @function toObject
             * @memberof ClientHello.C2S.CompanionRegData
             * @static
             * @param {ClientHello.C2S.CompanionRegData} message CompanionRegData
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            CompanionRegData.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    if (options.bytes === String)
                        object.eRegid = "";
                    else {
                        object.eRegid = [];
                        if (options.bytes !== Array)
                            object.eRegid = $util.newBuffer(object.eRegid);
                    }
                    if (options.bytes === String)
                        object.eKeytype = "";
                    else {
                        object.eKeytype = [];
                        if (options.bytes !== Array)
                            object.eKeytype = $util.newBuffer(object.eKeytype);
                    }
                    if (options.bytes === String)
                        object.eIdent = "";
                    else {
                        object.eIdent = [];
                        if (options.bytes !== Array)
                            object.eIdent = $util.newBuffer(object.eIdent);
                    }
                    if (options.bytes === String)
                        object.eSkeyId = "";
                    else {
                        object.eSkeyId = [];
                        if (options.bytes !== Array)
                            object.eSkeyId = $util.newBuffer(object.eSkeyId);
                    }
                    if (options.bytes === String)
                        object.eSkeyVal = "";
                    else {
                        object.eSkeyVal = [];
                        if (options.bytes !== Array)
                            object.eSkeyVal = $util.newBuffer(object.eSkeyVal);
                    }
                    if (options.bytes === String)
                        object.eSkeySig = "";
                    else {
                        object.eSkeySig = [];
                        if (options.bytes !== Array)
                            object.eSkeySig = $util.newBuffer(object.eSkeySig);
                    }
                    if (options.bytes === String)
                        object.buildHash = "";
                    else {
                        object.buildHash = [];
                        if (options.bytes !== Array)
                            object.buildHash = $util.newBuffer(object.buildHash);
                    }
                    if (options.bytes === String)
                        object.companionProps = "";
                    else {
                        object.companionProps = [];
                        if (options.bytes !== Array)
                            object.companionProps = $util.newBuffer(object.companionProps);
                    }
                }
                if (message.eRegid != null && message.hasOwnProperty("eRegid"))
                    object.eRegid = options.bytes === String ? $util.base64.encode(message.eRegid, 0, message.eRegid.length) : options.bytes === Array ? Array.prototype.slice.call(message.eRegid) : message.eRegid;
                if (message.eKeytype != null && message.hasOwnProperty("eKeytype"))
                    object.eKeytype = options.bytes === String ? $util.base64.encode(message.eKeytype, 0, message.eKeytype.length) : options.bytes === Array ? Array.prototype.slice.call(message.eKeytype) : message.eKeytype;
                if (message.eIdent != null && message.hasOwnProperty("eIdent"))
                    object.eIdent = options.bytes === String ? $util.base64.encode(message.eIdent, 0, message.eIdent.length) : options.bytes === Array ? Array.prototype.slice.call(message.eIdent) : message.eIdent;
                if (message.eSkeyId != null && message.hasOwnProperty("eSkeyId"))
                    object.eSkeyId = options.bytes === String ? $util.base64.encode(message.eSkeyId, 0, message.eSkeyId.length) : options.bytes === Array ? Array.prototype.slice.call(message.eSkeyId) : message.eSkeyId;
                if (message.eSkeyVal != null && message.hasOwnProperty("eSkeyVal"))
                    object.eSkeyVal = options.bytes === String ? $util.base64.encode(message.eSkeyVal, 0, message.eSkeyVal.length) : options.bytes === Array ? Array.prototype.slice.call(message.eSkeyVal) : message.eSkeyVal;
                if (message.eSkeySig != null && message.hasOwnProperty("eSkeySig"))
                    object.eSkeySig = options.bytes === String ? $util.base64.encode(message.eSkeySig, 0, message.eSkeySig.length) : options.bytes === Array ? Array.prototype.slice.call(message.eSkeySig) : message.eSkeySig;
                if (message.buildHash != null && message.hasOwnProperty("buildHash"))
                    object.buildHash = options.bytes === String ? $util.base64.encode(message.buildHash, 0, message.buildHash.length) : options.bytes === Array ? Array.prototype.slice.call(message.buildHash) : message.buildHash;
                if (message.companionProps != null && message.hasOwnProperty("companionProps"))
                    object.companionProps = options.bytes === String ? $util.base64.encode(message.companionProps, 0, message.companionProps.length) : options.bytes === Array ? Array.prototype.slice.call(message.companionProps) : message.companionProps;
                return object;
            };

            /**
             * Converts this CompanionRegData to JSON.
             * @function toJSON
             * @memberof ClientHello.C2S.CompanionRegData
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            CompanionRegData.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return CompanionRegData;
        })();

        return C2S;
    })();

    return ClientHello;
})();

$root.HandshakeMessage = (function() {

    /**
     * Namespace HandshakeMessage.
     * @exports HandshakeMessage
     * @namespace
     */
    var HandshakeMessage = {};

    HandshakeMessage.ClientHello = (function() {

        /**
         * Properties of a ClientHello.
         * @memberof HandshakeMessage
         * @interface IClientHello
         * @property {Uint8Array|null} [ephemeral] ClientHello ephemeral
         * @property {Uint8Array|null} ["static"] ClientHello static
         * @property {Uint8Array|null} [payload] ClientHello payload
         */

        /**
         * Constructs a new ClientHello.
         * @memberof HandshakeMessage
         * @classdesc Represents a ClientHello.
         * @implements IClientHello
         * @constructor
         * @param {HandshakeMessage.IClientHello=} [properties] Properties to set
         */
        function ClientHello(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ClientHello ephemeral.
         * @member {Uint8Array} ephemeral
         * @memberof HandshakeMessage.ClientHello
         * @instance
         */
        ClientHello.prototype.ephemeral = $util.newBuffer([]);

        /**
         * ClientHello static.
         * @member {Uint8Array} static
         * @memberof HandshakeMessage.ClientHello
         * @instance
         */
        ClientHello.prototype["static"] = $util.newBuffer([]);

        /**
         * ClientHello payload.
         * @member {Uint8Array} payload
         * @memberof HandshakeMessage.ClientHello
         * @instance
         */
        ClientHello.prototype.payload = $util.newBuffer([]);

        /**
         * Creates a new ClientHello instance using the specified properties.
         * @function create
         * @memberof HandshakeMessage.ClientHello
         * @static
         * @param {HandshakeMessage.IClientHello=} [properties] Properties to set
         * @returns {HandshakeMessage.ClientHello} ClientHello instance
         */
        ClientHello.create = function create(properties) {
            return new ClientHello(properties);
        };

        /**
         * Encodes the specified ClientHello message. Does not implicitly {@link HandshakeMessage.ClientHello.verify|verify} messages.
         * @function encode
         * @memberof HandshakeMessage.ClientHello
         * @static
         * @param {HandshakeMessage.IClientHello} message ClientHello message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ClientHello.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.ephemeral != null && Object.hasOwnProperty.call(message, "ephemeral"))
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.ephemeral);
            if (message["static"] != null && Object.hasOwnProperty.call(message, "static"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message["static"]);
            if (message.payload != null && Object.hasOwnProperty.call(message, "payload"))
                writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.payload);
            return writer;
        };

        /**
         * Encodes the specified ClientHello message, length delimited. Does not implicitly {@link HandshakeMessage.ClientHello.verify|verify} messages.
         * @function encodeDelimited
         * @memberof HandshakeMessage.ClientHello
         * @static
         * @param {HandshakeMessage.IClientHello} message ClientHello message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ClientHello.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ClientHello message from the specified reader or buffer.
         * @function decode
         * @memberof HandshakeMessage.ClientHello
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {HandshakeMessage.ClientHello} ClientHello
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ClientHello.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.HandshakeMessage.ClientHello();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.ephemeral = reader.bytes();
                    break;
                case 2:
                    message["static"] = reader.bytes();
                    break;
                case 3:
                    message.payload = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ClientHello message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof HandshakeMessage.ClientHello
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {HandshakeMessage.ClientHello} ClientHello
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ClientHello.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ClientHello message.
         * @function verify
         * @memberof HandshakeMessage.ClientHello
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ClientHello.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.ephemeral != null && message.hasOwnProperty("ephemeral"))
                if (!(message.ephemeral && typeof message.ephemeral.length === "number" || $util.isString(message.ephemeral)))
                    return "ephemeral: buffer expected";
            if (message["static"] != null && message.hasOwnProperty("static"))
                if (!(message["static"] && typeof message["static"].length === "number" || $util.isString(message["static"])))
                    return "static: buffer expected";
            if (message.payload != null && message.hasOwnProperty("payload"))
                if (!(message.payload && typeof message.payload.length === "number" || $util.isString(message.payload)))
                    return "payload: buffer expected";
            return null;
        };

        /**
         * Creates a ClientHello message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof HandshakeMessage.ClientHello
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {HandshakeMessage.ClientHello} ClientHello
         */
        ClientHello.fromObject = function fromObject(object) {
            if (object instanceof $root.HandshakeMessage.ClientHello)
                return object;
            var message = new $root.HandshakeMessage.ClientHello();
            if (object.ephemeral != null)
                if (typeof object.ephemeral === "string")
                    $util.base64.decode(object.ephemeral, message.ephemeral = $util.newBuffer($util.base64.length(object.ephemeral)), 0);
                else if (object.ephemeral.length)
                    message.ephemeral = object.ephemeral;
            if (object["static"] != null)
                if (typeof object["static"] === "string")
                    $util.base64.decode(object["static"], message["static"] = $util.newBuffer($util.base64.length(object["static"])), 0);
                else if (object["static"].length)
                    message["static"] = object["static"];
            if (object.payload != null)
                if (typeof object.payload === "string")
                    $util.base64.decode(object.payload, message.payload = $util.newBuffer($util.base64.length(object.payload)), 0);
                else if (object.payload.length)
                    message.payload = object.payload;
            return message;
        };

        /**
         * Creates a plain object from a ClientHello message. Also converts values to other types if specified.
         * @function toObject
         * @memberof HandshakeMessage.ClientHello
         * @static
         * @param {HandshakeMessage.ClientHello} message ClientHello
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ClientHello.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if (options.bytes === String)
                    object.ephemeral = "";
                else {
                    object.ephemeral = [];
                    if (options.bytes !== Array)
                        object.ephemeral = $util.newBuffer(object.ephemeral);
                }
                if (options.bytes === String)
                    object["static"] = "";
                else {
                    object["static"] = [];
                    if (options.bytes !== Array)
                        object["static"] = $util.newBuffer(object["static"]);
                }
                if (options.bytes === String)
                    object.payload = "";
                else {
                    object.payload = [];
                    if (options.bytes !== Array)
                        object.payload = $util.newBuffer(object.payload);
                }
            }
            if (message.ephemeral != null && message.hasOwnProperty("ephemeral"))
                object.ephemeral = options.bytes === String ? $util.base64.encode(message.ephemeral, 0, message.ephemeral.length) : options.bytes === Array ? Array.prototype.slice.call(message.ephemeral) : message.ephemeral;
            if (message["static"] != null && message.hasOwnProperty("static"))
                object["static"] = options.bytes === String ? $util.base64.encode(message["static"], 0, message["static"].length) : options.bytes === Array ? Array.prototype.slice.call(message["static"]) : message["static"];
            if (message.payload != null && message.hasOwnProperty("payload"))
                object.payload = options.bytes === String ? $util.base64.encode(message.payload, 0, message.payload.length) : options.bytes === Array ? Array.prototype.slice.call(message.payload) : message.payload;
            return object;
        };

        /**
         * Converts this ClientHello to JSON.
         * @function toJSON
         * @memberof HandshakeMessage.ClientHello
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ClientHello.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ClientHello;
    })();

    HandshakeMessage.ServerHello = (function() {

        /**
         * Properties of a ServerHello.
         * @memberof HandshakeMessage
         * @interface IServerHello
         * @property {Uint8Array|null} [ephemeral] ServerHello ephemeral
         * @property {Uint8Array|null} ["static"] ServerHello static
         * @property {Uint8Array|null} [payload] ServerHello payload
         */

        /**
         * Constructs a new ServerHello.
         * @memberof HandshakeMessage
         * @classdesc Represents a ServerHello.
         * @implements IServerHello
         * @constructor
         * @param {HandshakeMessage.IServerHello=} [properties] Properties to set
         */
        function ServerHello(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ServerHello ephemeral.
         * @member {Uint8Array} ephemeral
         * @memberof HandshakeMessage.ServerHello
         * @instance
         */
        ServerHello.prototype.ephemeral = $util.newBuffer([]);

        /**
         * ServerHello static.
         * @member {Uint8Array} static
         * @memberof HandshakeMessage.ServerHello
         * @instance
         */
        ServerHello.prototype["static"] = $util.newBuffer([]);

        /**
         * ServerHello payload.
         * @member {Uint8Array} payload
         * @memberof HandshakeMessage.ServerHello
         * @instance
         */
        ServerHello.prototype.payload = $util.newBuffer([]);

        /**
         * Creates a new ServerHello instance using the specified properties.
         * @function create
         * @memberof HandshakeMessage.ServerHello
         * @static
         * @param {HandshakeMessage.IServerHello=} [properties] Properties to set
         * @returns {HandshakeMessage.ServerHello} ServerHello instance
         */
        ServerHello.create = function create(properties) {
            return new ServerHello(properties);
        };

        /**
         * Encodes the specified ServerHello message. Does not implicitly {@link HandshakeMessage.ServerHello.verify|verify} messages.
         * @function encode
         * @memberof HandshakeMessage.ServerHello
         * @static
         * @param {HandshakeMessage.IServerHello} message ServerHello message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ServerHello.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.ephemeral != null && Object.hasOwnProperty.call(message, "ephemeral"))
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.ephemeral);
            if (message["static"] != null && Object.hasOwnProperty.call(message, "static"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message["static"]);
            if (message.payload != null && Object.hasOwnProperty.call(message, "payload"))
                writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.payload);
            return writer;
        };

        /**
         * Encodes the specified ServerHello message, length delimited. Does not implicitly {@link HandshakeMessage.ServerHello.verify|verify} messages.
         * @function encodeDelimited
         * @memberof HandshakeMessage.ServerHello
         * @static
         * @param {HandshakeMessage.IServerHello} message ServerHello message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ServerHello.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ServerHello message from the specified reader or buffer.
         * @function decode
         * @memberof HandshakeMessage.ServerHello
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {HandshakeMessage.ServerHello} ServerHello
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ServerHello.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.HandshakeMessage.ServerHello();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.ephemeral = reader.bytes();
                    break;
                case 2:
                    message["static"] = reader.bytes();
                    break;
                case 3:
                    message.payload = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ServerHello message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof HandshakeMessage.ServerHello
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {HandshakeMessage.ServerHello} ServerHello
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ServerHello.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ServerHello message.
         * @function verify
         * @memberof HandshakeMessage.ServerHello
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ServerHello.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.ephemeral != null && message.hasOwnProperty("ephemeral"))
                if (!(message.ephemeral && typeof message.ephemeral.length === "number" || $util.isString(message.ephemeral)))
                    return "ephemeral: buffer expected";
            if (message["static"] != null && message.hasOwnProperty("static"))
                if (!(message["static"] && typeof message["static"].length === "number" || $util.isString(message["static"])))
                    return "static: buffer expected";
            if (message.payload != null && message.hasOwnProperty("payload"))
                if (!(message.payload && typeof message.payload.length === "number" || $util.isString(message.payload)))
                    return "payload: buffer expected";
            return null;
        };

        /**
         * Creates a ServerHello message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof HandshakeMessage.ServerHello
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {HandshakeMessage.ServerHello} ServerHello
         */
        ServerHello.fromObject = function fromObject(object) {
            if (object instanceof $root.HandshakeMessage.ServerHello)
                return object;
            var message = new $root.HandshakeMessage.ServerHello();
            if (object.ephemeral != null)
                if (typeof object.ephemeral === "string")
                    $util.base64.decode(object.ephemeral, message.ephemeral = $util.newBuffer($util.base64.length(object.ephemeral)), 0);
                else if (object.ephemeral.length)
                    message.ephemeral = object.ephemeral;
            if (object["static"] != null)
                if (typeof object["static"] === "string")
                    $util.base64.decode(object["static"], message["static"] = $util.newBuffer($util.base64.length(object["static"])), 0);
                else if (object["static"].length)
                    message["static"] = object["static"];
            if (object.payload != null)
                if (typeof object.payload === "string")
                    $util.base64.decode(object.payload, message.payload = $util.newBuffer($util.base64.length(object.payload)), 0);
                else if (object.payload.length)
                    message.payload = object.payload;
            return message;
        };

        /**
         * Creates a plain object from a ServerHello message. Also converts values to other types if specified.
         * @function toObject
         * @memberof HandshakeMessage.ServerHello
         * @static
         * @param {HandshakeMessage.ServerHello} message ServerHello
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ServerHello.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if (options.bytes === String)
                    object.ephemeral = "";
                else {
                    object.ephemeral = [];
                    if (options.bytes !== Array)
                        object.ephemeral = $util.newBuffer(object.ephemeral);
                }
                if (options.bytes === String)
                    object["static"] = "";
                else {
                    object["static"] = [];
                    if (options.bytes !== Array)
                        object["static"] = $util.newBuffer(object["static"]);
                }
                if (options.bytes === String)
                    object.payload = "";
                else {
                    object.payload = [];
                    if (options.bytes !== Array)
                        object.payload = $util.newBuffer(object.payload);
                }
            }
            if (message.ephemeral != null && message.hasOwnProperty("ephemeral"))
                object.ephemeral = options.bytes === String ? $util.base64.encode(message.ephemeral, 0, message.ephemeral.length) : options.bytes === Array ? Array.prototype.slice.call(message.ephemeral) : message.ephemeral;
            if (message["static"] != null && message.hasOwnProperty("static"))
                object["static"] = options.bytes === String ? $util.base64.encode(message["static"], 0, message["static"].length) : options.bytes === Array ? Array.prototype.slice.call(message["static"]) : message["static"];
            if (message.payload != null && message.hasOwnProperty("payload"))
                object.payload = options.bytes === String ? $util.base64.encode(message.payload, 0, message.payload.length) : options.bytes === Array ? Array.prototype.slice.call(message.payload) : message.payload;
            return object;
        };

        /**
         * Converts this ServerHello to JSON.
         * @function toJSON
         * @memberof HandshakeMessage.ServerHello
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ServerHello.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ServerHello;
    })();

    HandshakeMessage.ClientFinish = (function() {

        /**
         * Properties of a ClientFinish.
         * @memberof HandshakeMessage
         * @interface IClientFinish
         * @property {Uint8Array|null} ["static"] ClientFinish static
         * @property {Uint8Array|null} [payload] ClientFinish payload
         */

        /**
         * Constructs a new ClientFinish.
         * @memberof HandshakeMessage
         * @classdesc Represents a ClientFinish.
         * @implements IClientFinish
         * @constructor
         * @param {HandshakeMessage.IClientFinish=} [properties] Properties to set
         */
        function ClientFinish(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ClientFinish static.
         * @member {Uint8Array} static
         * @memberof HandshakeMessage.ClientFinish
         * @instance
         */
        ClientFinish.prototype["static"] = $util.newBuffer([]);

        /**
         * ClientFinish payload.
         * @member {Uint8Array} payload
         * @memberof HandshakeMessage.ClientFinish
         * @instance
         */
        ClientFinish.prototype.payload = $util.newBuffer([]);

        /**
         * Creates a new ClientFinish instance using the specified properties.
         * @function create
         * @memberof HandshakeMessage.ClientFinish
         * @static
         * @param {HandshakeMessage.IClientFinish=} [properties] Properties to set
         * @returns {HandshakeMessage.ClientFinish} ClientFinish instance
         */
        ClientFinish.create = function create(properties) {
            return new ClientFinish(properties);
        };

        /**
         * Encodes the specified ClientFinish message. Does not implicitly {@link HandshakeMessage.ClientFinish.verify|verify} messages.
         * @function encode
         * @memberof HandshakeMessage.ClientFinish
         * @static
         * @param {HandshakeMessage.IClientFinish} message ClientFinish message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ClientFinish.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message["static"] != null && Object.hasOwnProperty.call(message, "static"))
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message["static"]);
            if (message.payload != null && Object.hasOwnProperty.call(message, "payload"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.payload);
            return writer;
        };

        /**
         * Encodes the specified ClientFinish message, length delimited. Does not implicitly {@link HandshakeMessage.ClientFinish.verify|verify} messages.
         * @function encodeDelimited
         * @memberof HandshakeMessage.ClientFinish
         * @static
         * @param {HandshakeMessage.IClientFinish} message ClientFinish message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ClientFinish.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ClientFinish message from the specified reader or buffer.
         * @function decode
         * @memberof HandshakeMessage.ClientFinish
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {HandshakeMessage.ClientFinish} ClientFinish
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ClientFinish.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.HandshakeMessage.ClientFinish();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message["static"] = reader.bytes();
                    break;
                case 2:
                    message.payload = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ClientFinish message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof HandshakeMessage.ClientFinish
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {HandshakeMessage.ClientFinish} ClientFinish
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ClientFinish.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ClientFinish message.
         * @function verify
         * @memberof HandshakeMessage.ClientFinish
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ClientFinish.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message["static"] != null && message.hasOwnProperty("static"))
                if (!(message["static"] && typeof message["static"].length === "number" || $util.isString(message["static"])))
                    return "static: buffer expected";
            if (message.payload != null && message.hasOwnProperty("payload"))
                if (!(message.payload && typeof message.payload.length === "number" || $util.isString(message.payload)))
                    return "payload: buffer expected";
            return null;
        };

        /**
         * Creates a ClientFinish message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof HandshakeMessage.ClientFinish
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {HandshakeMessage.ClientFinish} ClientFinish
         */
        ClientFinish.fromObject = function fromObject(object) {
            if (object instanceof $root.HandshakeMessage.ClientFinish)
                return object;
            var message = new $root.HandshakeMessage.ClientFinish();
            if (object["static"] != null)
                if (typeof object["static"] === "string")
                    $util.base64.decode(object["static"], message["static"] = $util.newBuffer($util.base64.length(object["static"])), 0);
                else if (object["static"].length)
                    message["static"] = object["static"];
            if (object.payload != null)
                if (typeof object.payload === "string")
                    $util.base64.decode(object.payload, message.payload = $util.newBuffer($util.base64.length(object.payload)), 0);
                else if (object.payload.length)
                    message.payload = object.payload;
            return message;
        };

        /**
         * Creates a plain object from a ClientFinish message. Also converts values to other types if specified.
         * @function toObject
         * @memberof HandshakeMessage.ClientFinish
         * @static
         * @param {HandshakeMessage.ClientFinish} message ClientFinish
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ClientFinish.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if (options.bytes === String)
                    object["static"] = "";
                else {
                    object["static"] = [];
                    if (options.bytes !== Array)
                        object["static"] = $util.newBuffer(object["static"]);
                }
                if (options.bytes === String)
                    object.payload = "";
                else {
                    object.payload = [];
                    if (options.bytes !== Array)
                        object.payload = $util.newBuffer(object.payload);
                }
            }
            if (message["static"] != null && message.hasOwnProperty("static"))
                object["static"] = options.bytes === String ? $util.base64.encode(message["static"], 0, message["static"].length) : options.bytes === Array ? Array.prototype.slice.call(message["static"]) : message["static"];
            if (message.payload != null && message.hasOwnProperty("payload"))
                object.payload = options.bytes === String ? $util.base64.encode(message.payload, 0, message.payload.length) : options.bytes === Array ? Array.prototype.slice.call(message.payload) : message.payload;
            return object;
        };

        /**
         * Converts this ClientFinish to JSON.
         * @function toJSON
         * @memberof HandshakeMessage.ClientFinish
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ClientFinish.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ClientFinish;
    })();

    HandshakeMessage.HandshakeMessage = (function() {

        /**
         * Properties of a HandshakeMessage.
         * @memberof HandshakeMessage
         * @interface IHandshakeMessage
         * @property {HandshakeMessage.IClientHello|null} [clientHello] HandshakeMessage clientHello
         * @property {HandshakeMessage.IServerHello|null} [serverHello] HandshakeMessage serverHello
         * @property {HandshakeMessage.IClientFinish|null} [clientFinish] HandshakeMessage clientFinish
         */

        /**
         * Constructs a new HandshakeMessage.
         * @memberof HandshakeMessage
         * @classdesc Represents a HandshakeMessage.
         * @implements IHandshakeMessage
         * @constructor
         * @param {HandshakeMessage.IHandshakeMessage=} [properties] Properties to set
         */
        function HandshakeMessage(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * HandshakeMessage clientHello.
         * @member {HandshakeMessage.IClientHello|null|undefined} clientHello
         * @memberof HandshakeMessage.HandshakeMessage
         * @instance
         */
        HandshakeMessage.prototype.clientHello = null;

        /**
         * HandshakeMessage serverHello.
         * @member {HandshakeMessage.IServerHello|null|undefined} serverHello
         * @memberof HandshakeMessage.HandshakeMessage
         * @instance
         */
        HandshakeMessage.prototype.serverHello = null;

        /**
         * HandshakeMessage clientFinish.
         * @member {HandshakeMessage.IClientFinish|null|undefined} clientFinish
         * @memberof HandshakeMessage.HandshakeMessage
         * @instance
         */
        HandshakeMessage.prototype.clientFinish = null;

        /**
         * Creates a new HandshakeMessage instance using the specified properties.
         * @function create
         * @memberof HandshakeMessage.HandshakeMessage
         * @static
         * @param {HandshakeMessage.IHandshakeMessage=} [properties] Properties to set
         * @returns {HandshakeMessage.HandshakeMessage} HandshakeMessage instance
         */
        HandshakeMessage.create = function create(properties) {
            return new HandshakeMessage(properties);
        };

        /**
         * Encodes the specified HandshakeMessage message. Does not implicitly {@link HandshakeMessage.HandshakeMessage.verify|verify} messages.
         * @function encode
         * @memberof HandshakeMessage.HandshakeMessage
         * @static
         * @param {HandshakeMessage.IHandshakeMessage} message HandshakeMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HandshakeMessage.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.clientHello != null && Object.hasOwnProperty.call(message, "clientHello"))
                $root.HandshakeMessage.ClientHello.encode(message.clientHello, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.serverHello != null && Object.hasOwnProperty.call(message, "serverHello"))
                $root.HandshakeMessage.ServerHello.encode(message.serverHello, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.clientFinish != null && Object.hasOwnProperty.call(message, "clientFinish"))
                $root.HandshakeMessage.ClientFinish.encode(message.clientFinish, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified HandshakeMessage message, length delimited. Does not implicitly {@link HandshakeMessage.HandshakeMessage.verify|verify} messages.
         * @function encodeDelimited
         * @memberof HandshakeMessage.HandshakeMessage
         * @static
         * @param {HandshakeMessage.IHandshakeMessage} message HandshakeMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HandshakeMessage.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a HandshakeMessage message from the specified reader or buffer.
         * @function decode
         * @memberof HandshakeMessage.HandshakeMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {HandshakeMessage.HandshakeMessage} HandshakeMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HandshakeMessage.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.HandshakeMessage.HandshakeMessage();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 2:
                    message.clientHello = $root.HandshakeMessage.ClientHello.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.serverHello = $root.HandshakeMessage.ServerHello.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.clientFinish = $root.HandshakeMessage.ClientFinish.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a HandshakeMessage message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof HandshakeMessage.HandshakeMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {HandshakeMessage.HandshakeMessage} HandshakeMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HandshakeMessage.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a HandshakeMessage message.
         * @function verify
         * @memberof HandshakeMessage.HandshakeMessage
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        HandshakeMessage.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.clientHello != null && message.hasOwnProperty("clientHello")) {
                var error = $root.HandshakeMessage.ClientHello.verify(message.clientHello);
                if (error)
                    return "clientHello." + error;
            }
            if (message.serverHello != null && message.hasOwnProperty("serverHello")) {
                var error = $root.HandshakeMessage.ServerHello.verify(message.serverHello);
                if (error)
                    return "serverHello." + error;
            }
            if (message.clientFinish != null && message.hasOwnProperty("clientFinish")) {
                var error = $root.HandshakeMessage.ClientFinish.verify(message.clientFinish);
                if (error)
                    return "clientFinish." + error;
            }
            return null;
        };

        /**
         * Creates a HandshakeMessage message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof HandshakeMessage.HandshakeMessage
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {HandshakeMessage.HandshakeMessage} HandshakeMessage
         */
        HandshakeMessage.fromObject = function fromObject(object) {
            if (object instanceof $root.HandshakeMessage.HandshakeMessage)
                return object;
            var message = new $root.HandshakeMessage.HandshakeMessage();
            if (object.clientHello != null) {
                if (typeof object.clientHello !== "object")
                    throw TypeError(".HandshakeMessage.HandshakeMessage.clientHello: object expected");
                message.clientHello = $root.HandshakeMessage.ClientHello.fromObject(object.clientHello);
            }
            if (object.serverHello != null) {
                if (typeof object.serverHello !== "object")
                    throw TypeError(".HandshakeMessage.HandshakeMessage.serverHello: object expected");
                message.serverHello = $root.HandshakeMessage.ServerHello.fromObject(object.serverHello);
            }
            if (object.clientFinish != null) {
                if (typeof object.clientFinish !== "object")
                    throw TypeError(".HandshakeMessage.HandshakeMessage.clientFinish: object expected");
                message.clientFinish = $root.HandshakeMessage.ClientFinish.fromObject(object.clientFinish);
            }
            return message;
        };

        /**
         * Creates a plain object from a HandshakeMessage message. Also converts values to other types if specified.
         * @function toObject
         * @memberof HandshakeMessage.HandshakeMessage
         * @static
         * @param {HandshakeMessage.HandshakeMessage} message HandshakeMessage
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        HandshakeMessage.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.clientHello = null;
                object.serverHello = null;
                object.clientFinish = null;
            }
            if (message.clientHello != null && message.hasOwnProperty("clientHello"))
                object.clientHello = $root.HandshakeMessage.ClientHello.toObject(message.clientHello, options);
            if (message.serverHello != null && message.hasOwnProperty("serverHello"))
                object.serverHello = $root.HandshakeMessage.ServerHello.toObject(message.serverHello, options);
            if (message.clientFinish != null && message.hasOwnProperty("clientFinish"))
                object.clientFinish = $root.HandshakeMessage.ClientFinish.toObject(message.clientFinish, options);
            return object;
        };

        /**
         * Converts this HandshakeMessage to JSON.
         * @function toJSON
         * @memberof HandshakeMessage.HandshakeMessage
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        HandshakeMessage.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return HandshakeMessage;
    })();

    return HandshakeMessage;
})();

$root.Message = (function() {

    /**
     * Namespace Message.
     * @exports Message
     * @namespace
     */
    var Message = {};

    Message.SenderKeyMessage = (function() {

        /**
         * Properties of a SenderKeyMessage.
         * @memberof Message
         * @interface ISenderKeyMessage
         * @property {number|null} [id] SenderKeyMessage id
         * @property {number|null} [iteration] SenderKeyMessage iteration
         * @property {Uint8Array|null} [ciphertext] SenderKeyMessage ciphertext
         */

        /**
         * Constructs a new SenderKeyMessage.
         * @memberof Message
         * @classdesc Represents a SenderKeyMessage.
         * @implements ISenderKeyMessage
         * @constructor
         * @param {Message.ISenderKeyMessage=} [properties] Properties to set
         */
        function SenderKeyMessage(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SenderKeyMessage id.
         * @member {number} id
         * @memberof Message.SenderKeyMessage
         * @instance
         */
        SenderKeyMessage.prototype.id = 0;

        /**
         * SenderKeyMessage iteration.
         * @member {number} iteration
         * @memberof Message.SenderKeyMessage
         * @instance
         */
        SenderKeyMessage.prototype.iteration = 0;

        /**
         * SenderKeyMessage ciphertext.
         * @member {Uint8Array} ciphertext
         * @memberof Message.SenderKeyMessage
         * @instance
         */
        SenderKeyMessage.prototype.ciphertext = $util.newBuffer([]);

        /**
         * Creates a new SenderKeyMessage instance using the specified properties.
         * @function create
         * @memberof Message.SenderKeyMessage
         * @static
         * @param {Message.ISenderKeyMessage=} [properties] Properties to set
         * @returns {Message.SenderKeyMessage} SenderKeyMessage instance
         */
        SenderKeyMessage.create = function create(properties) {
            return new SenderKeyMessage(properties);
        };

        /**
         * Encodes the specified SenderKeyMessage message. Does not implicitly {@link Message.SenderKeyMessage.verify|verify} messages.
         * @function encode
         * @memberof Message.SenderKeyMessage
         * @static
         * @param {Message.ISenderKeyMessage} message SenderKeyMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SenderKeyMessage.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.id);
            if (message.iteration != null && Object.hasOwnProperty.call(message, "iteration"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.iteration);
            if (message.ciphertext != null && Object.hasOwnProperty.call(message, "ciphertext"))
                writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.ciphertext);
            return writer;
        };

        /**
         * Encodes the specified SenderKeyMessage message, length delimited. Does not implicitly {@link Message.SenderKeyMessage.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Message.SenderKeyMessage
         * @static
         * @param {Message.ISenderKeyMessage} message SenderKeyMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SenderKeyMessage.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SenderKeyMessage message from the specified reader or buffer.
         * @function decode
         * @memberof Message.SenderKeyMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Message.SenderKeyMessage} SenderKeyMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SenderKeyMessage.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Message.SenderKeyMessage();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.uint32();
                    break;
                case 2:
                    message.iteration = reader.uint32();
                    break;
                case 3:
                    message.ciphertext = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SenderKeyMessage message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Message.SenderKeyMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Message.SenderKeyMessage} SenderKeyMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SenderKeyMessage.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SenderKeyMessage message.
         * @function verify
         * @memberof Message.SenderKeyMessage
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SenderKeyMessage.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isInteger(message.id))
                    return "id: integer expected";
            if (message.iteration != null && message.hasOwnProperty("iteration"))
                if (!$util.isInteger(message.iteration))
                    return "iteration: integer expected";
            if (message.ciphertext != null && message.hasOwnProperty("ciphertext"))
                if (!(message.ciphertext && typeof message.ciphertext.length === "number" || $util.isString(message.ciphertext)))
                    return "ciphertext: buffer expected";
            return null;
        };

        /**
         * Creates a SenderKeyMessage message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Message.SenderKeyMessage
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Message.SenderKeyMessage} SenderKeyMessage
         */
        SenderKeyMessage.fromObject = function fromObject(object) {
            if (object instanceof $root.Message.SenderKeyMessage)
                return object;
            var message = new $root.Message.SenderKeyMessage();
            if (object.id != null)
                message.id = object.id >>> 0;
            if (object.iteration != null)
                message.iteration = object.iteration >>> 0;
            if (object.ciphertext != null)
                if (typeof object.ciphertext === "string")
                    $util.base64.decode(object.ciphertext, message.ciphertext = $util.newBuffer($util.base64.length(object.ciphertext)), 0);
                else if (object.ciphertext.length)
                    message.ciphertext = object.ciphertext;
            return message;
        };

        /**
         * Creates a plain object from a SenderKeyMessage message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Message.SenderKeyMessage
         * @static
         * @param {Message.SenderKeyMessage} message SenderKeyMessage
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SenderKeyMessage.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.id = 0;
                object.iteration = 0;
                if (options.bytes === String)
                    object.ciphertext = "";
                else {
                    object.ciphertext = [];
                    if (options.bytes !== Array)
                        object.ciphertext = $util.newBuffer(object.ciphertext);
                }
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.iteration != null && message.hasOwnProperty("iteration"))
                object.iteration = message.iteration;
            if (message.ciphertext != null && message.hasOwnProperty("ciphertext"))
                object.ciphertext = options.bytes === String ? $util.base64.encode(message.ciphertext, 0, message.ciphertext.length) : options.bytes === Array ? Array.prototype.slice.call(message.ciphertext) : message.ciphertext;
            return object;
        };

        /**
         * Converts this SenderKeyMessage to JSON.
         * @function toJSON
         * @memberof Message.SenderKeyMessage
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SenderKeyMessage.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SenderKeyMessage;
    })();

    Message.SenderChainKey = (function() {

        /**
         * Properties of a SenderChainKey.
         * @memberof Message
         * @interface ISenderChainKey
         * @property {number|null} [iteration] SenderChainKey iteration
         * @property {Uint8Array|null} [seed] SenderChainKey seed
         */

        /**
         * Constructs a new SenderChainKey.
         * @memberof Message
         * @classdesc Represents a SenderChainKey.
         * @implements ISenderChainKey
         * @constructor
         * @param {Message.ISenderChainKey=} [properties] Properties to set
         */
        function SenderChainKey(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SenderChainKey iteration.
         * @member {number} iteration
         * @memberof Message.SenderChainKey
         * @instance
         */
        SenderChainKey.prototype.iteration = 0;

        /**
         * SenderChainKey seed.
         * @member {Uint8Array} seed
         * @memberof Message.SenderChainKey
         * @instance
         */
        SenderChainKey.prototype.seed = $util.newBuffer([]);

        /**
         * Creates a new SenderChainKey instance using the specified properties.
         * @function create
         * @memberof Message.SenderChainKey
         * @static
         * @param {Message.ISenderChainKey=} [properties] Properties to set
         * @returns {Message.SenderChainKey} SenderChainKey instance
         */
        SenderChainKey.create = function create(properties) {
            return new SenderChainKey(properties);
        };

        /**
         * Encodes the specified SenderChainKey message. Does not implicitly {@link Message.SenderChainKey.verify|verify} messages.
         * @function encode
         * @memberof Message.SenderChainKey
         * @static
         * @param {Message.ISenderChainKey} message SenderChainKey message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SenderChainKey.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.iteration != null && Object.hasOwnProperty.call(message, "iteration"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.iteration);
            if (message.seed != null && Object.hasOwnProperty.call(message, "seed"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.seed);
            return writer;
        };

        /**
         * Encodes the specified SenderChainKey message, length delimited. Does not implicitly {@link Message.SenderChainKey.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Message.SenderChainKey
         * @static
         * @param {Message.ISenderChainKey} message SenderChainKey message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SenderChainKey.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SenderChainKey message from the specified reader or buffer.
         * @function decode
         * @memberof Message.SenderChainKey
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Message.SenderChainKey} SenderChainKey
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SenderChainKey.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Message.SenderChainKey();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.iteration = reader.uint32();
                    break;
                case 2:
                    message.seed = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SenderChainKey message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Message.SenderChainKey
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Message.SenderChainKey} SenderChainKey
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SenderChainKey.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SenderChainKey message.
         * @function verify
         * @memberof Message.SenderChainKey
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SenderChainKey.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.iteration != null && message.hasOwnProperty("iteration"))
                if (!$util.isInteger(message.iteration))
                    return "iteration: integer expected";
            if (message.seed != null && message.hasOwnProperty("seed"))
                if (!(message.seed && typeof message.seed.length === "number" || $util.isString(message.seed)))
                    return "seed: buffer expected";
            return null;
        };

        /**
         * Creates a SenderChainKey message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Message.SenderChainKey
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Message.SenderChainKey} SenderChainKey
         */
        SenderChainKey.fromObject = function fromObject(object) {
            if (object instanceof $root.Message.SenderChainKey)
                return object;
            var message = new $root.Message.SenderChainKey();
            if (object.iteration != null)
                message.iteration = object.iteration >>> 0;
            if (object.seed != null)
                if (typeof object.seed === "string")
                    $util.base64.decode(object.seed, message.seed = $util.newBuffer($util.base64.length(object.seed)), 0);
                else if (object.seed.length)
                    message.seed = object.seed;
            return message;
        };

        /**
         * Creates a plain object from a SenderChainKey message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Message.SenderChainKey
         * @static
         * @param {Message.SenderChainKey} message SenderChainKey
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SenderChainKey.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.iteration = 0;
                if (options.bytes === String)
                    object.seed = "";
                else {
                    object.seed = [];
                    if (options.bytes !== Array)
                        object.seed = $util.newBuffer(object.seed);
                }
            }
            if (message.iteration != null && message.hasOwnProperty("iteration"))
                object.iteration = message.iteration;
            if (message.seed != null && message.hasOwnProperty("seed"))
                object.seed = options.bytes === String ? $util.base64.encode(message.seed, 0, message.seed.length) : options.bytes === Array ? Array.prototype.slice.call(message.seed) : message.seed;
            return object;
        };

        /**
         * Converts this SenderChainKey to JSON.
         * @function toJSON
         * @memberof Message.SenderChainKey
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SenderChainKey.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SenderChainKey;
    })();

    Message.SenderMessageKey = (function() {

        /**
         * Properties of a SenderMessageKey.
         * @memberof Message
         * @interface ISenderMessageKey
         * @property {number|null} [iteration] SenderMessageKey iteration
         * @property {Uint8Array|null} [seed] SenderMessageKey seed
         */

        /**
         * Constructs a new SenderMessageKey.
         * @memberof Message
         * @classdesc Represents a SenderMessageKey.
         * @implements ISenderMessageKey
         * @constructor
         * @param {Message.ISenderMessageKey=} [properties] Properties to set
         */
        function SenderMessageKey(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SenderMessageKey iteration.
         * @member {number} iteration
         * @memberof Message.SenderMessageKey
         * @instance
         */
        SenderMessageKey.prototype.iteration = 0;

        /**
         * SenderMessageKey seed.
         * @member {Uint8Array} seed
         * @memberof Message.SenderMessageKey
         * @instance
         */
        SenderMessageKey.prototype.seed = $util.newBuffer([]);

        /**
         * Creates a new SenderMessageKey instance using the specified properties.
         * @function create
         * @memberof Message.SenderMessageKey
         * @static
         * @param {Message.ISenderMessageKey=} [properties] Properties to set
         * @returns {Message.SenderMessageKey} SenderMessageKey instance
         */
        SenderMessageKey.create = function create(properties) {
            return new SenderMessageKey(properties);
        };

        /**
         * Encodes the specified SenderMessageKey message. Does not implicitly {@link Message.SenderMessageKey.verify|verify} messages.
         * @function encode
         * @memberof Message.SenderMessageKey
         * @static
         * @param {Message.ISenderMessageKey} message SenderMessageKey message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SenderMessageKey.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.iteration != null && Object.hasOwnProperty.call(message, "iteration"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.iteration);
            if (message.seed != null && Object.hasOwnProperty.call(message, "seed"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.seed);
            return writer;
        };

        /**
         * Encodes the specified SenderMessageKey message, length delimited. Does not implicitly {@link Message.SenderMessageKey.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Message.SenderMessageKey
         * @static
         * @param {Message.ISenderMessageKey} message SenderMessageKey message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SenderMessageKey.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SenderMessageKey message from the specified reader or buffer.
         * @function decode
         * @memberof Message.SenderMessageKey
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Message.SenderMessageKey} SenderMessageKey
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SenderMessageKey.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Message.SenderMessageKey();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.iteration = reader.uint32();
                    break;
                case 2:
                    message.seed = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SenderMessageKey message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Message.SenderMessageKey
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Message.SenderMessageKey} SenderMessageKey
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SenderMessageKey.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SenderMessageKey message.
         * @function verify
         * @memberof Message.SenderMessageKey
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SenderMessageKey.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.iteration != null && message.hasOwnProperty("iteration"))
                if (!$util.isInteger(message.iteration))
                    return "iteration: integer expected";
            if (message.seed != null && message.hasOwnProperty("seed"))
                if (!(message.seed && typeof message.seed.length === "number" || $util.isString(message.seed)))
                    return "seed: buffer expected";
            return null;
        };

        /**
         * Creates a SenderMessageKey message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Message.SenderMessageKey
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Message.SenderMessageKey} SenderMessageKey
         */
        SenderMessageKey.fromObject = function fromObject(object) {
            if (object instanceof $root.Message.SenderMessageKey)
                return object;
            var message = new $root.Message.SenderMessageKey();
            if (object.iteration != null)
                message.iteration = object.iteration >>> 0;
            if (object.seed != null)
                if (typeof object.seed === "string")
                    $util.base64.decode(object.seed, message.seed = $util.newBuffer($util.base64.length(object.seed)), 0);
                else if (object.seed.length)
                    message.seed = object.seed;
            return message;
        };

        /**
         * Creates a plain object from a SenderMessageKey message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Message.SenderMessageKey
         * @static
         * @param {Message.SenderMessageKey} message SenderMessageKey
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SenderMessageKey.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.iteration = 0;
                if (options.bytes === String)
                    object.seed = "";
                else {
                    object.seed = [];
                    if (options.bytes !== Array)
                        object.seed = $util.newBuffer(object.seed);
                }
            }
            if (message.iteration != null && message.hasOwnProperty("iteration"))
                object.iteration = message.iteration;
            if (message.seed != null && message.hasOwnProperty("seed"))
                object.seed = options.bytes === String ? $util.base64.encode(message.seed, 0, message.seed.length) : options.bytes === Array ? Array.prototype.slice.call(message.seed) : message.seed;
            return object;
        };

        /**
         * Converts this SenderMessageKey to JSON.
         * @function toJSON
         * @memberof Message.SenderMessageKey
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SenderMessageKey.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SenderMessageKey;
    })();

    Message.SenderSigningKey = (function() {

        /**
         * Properties of a SenderSigningKey.
         * @memberof Message
         * @interface ISenderSigningKey
         * @property {Uint8Array|null} ["public"] SenderSigningKey public
         * @property {Uint8Array|null} ["private"] SenderSigningKey private
         */

        /**
         * Constructs a new SenderSigningKey.
         * @memberof Message
         * @classdesc Represents a SenderSigningKey.
         * @implements ISenderSigningKey
         * @constructor
         * @param {Message.ISenderSigningKey=} [properties] Properties to set
         */
        function SenderSigningKey(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SenderSigningKey public.
         * @member {Uint8Array} public
         * @memberof Message.SenderSigningKey
         * @instance
         */
        SenderSigningKey.prototype["public"] = $util.newBuffer([]);

        /**
         * SenderSigningKey private.
         * @member {Uint8Array} private
         * @memberof Message.SenderSigningKey
         * @instance
         */
        SenderSigningKey.prototype["private"] = $util.newBuffer([]);

        /**
         * Creates a new SenderSigningKey instance using the specified properties.
         * @function create
         * @memberof Message.SenderSigningKey
         * @static
         * @param {Message.ISenderSigningKey=} [properties] Properties to set
         * @returns {Message.SenderSigningKey} SenderSigningKey instance
         */
        SenderSigningKey.create = function create(properties) {
            return new SenderSigningKey(properties);
        };

        /**
         * Encodes the specified SenderSigningKey message. Does not implicitly {@link Message.SenderSigningKey.verify|verify} messages.
         * @function encode
         * @memberof Message.SenderSigningKey
         * @static
         * @param {Message.ISenderSigningKey} message SenderSigningKey message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SenderSigningKey.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message["public"] != null && Object.hasOwnProperty.call(message, "public"))
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message["public"]);
            if (message["private"] != null && Object.hasOwnProperty.call(message, "private"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message["private"]);
            return writer;
        };

        /**
         * Encodes the specified SenderSigningKey message, length delimited. Does not implicitly {@link Message.SenderSigningKey.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Message.SenderSigningKey
         * @static
         * @param {Message.ISenderSigningKey} message SenderSigningKey message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SenderSigningKey.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SenderSigningKey message from the specified reader or buffer.
         * @function decode
         * @memberof Message.SenderSigningKey
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Message.SenderSigningKey} SenderSigningKey
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SenderSigningKey.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Message.SenderSigningKey();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message["public"] = reader.bytes();
                    break;
                case 2:
                    message["private"] = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SenderSigningKey message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Message.SenderSigningKey
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Message.SenderSigningKey} SenderSigningKey
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SenderSigningKey.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SenderSigningKey message.
         * @function verify
         * @memberof Message.SenderSigningKey
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SenderSigningKey.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message["public"] != null && message.hasOwnProperty("public"))
                if (!(message["public"] && typeof message["public"].length === "number" || $util.isString(message["public"])))
                    return "public: buffer expected";
            if (message["private"] != null && message.hasOwnProperty("private"))
                if (!(message["private"] && typeof message["private"].length === "number" || $util.isString(message["private"])))
                    return "private: buffer expected";
            return null;
        };

        /**
         * Creates a SenderSigningKey message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Message.SenderSigningKey
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Message.SenderSigningKey} SenderSigningKey
         */
        SenderSigningKey.fromObject = function fromObject(object) {
            if (object instanceof $root.Message.SenderSigningKey)
                return object;
            var message = new $root.Message.SenderSigningKey();
            if (object["public"] != null)
                if (typeof object["public"] === "string")
                    $util.base64.decode(object["public"], message["public"] = $util.newBuffer($util.base64.length(object["public"])), 0);
                else if (object["public"].length)
                    message["public"] = object["public"];
            if (object["private"] != null)
                if (typeof object["private"] === "string")
                    $util.base64.decode(object["private"], message["private"] = $util.newBuffer($util.base64.length(object["private"])), 0);
                else if (object["private"].length)
                    message["private"] = object["private"];
            return message;
        };

        /**
         * Creates a plain object from a SenderSigningKey message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Message.SenderSigningKey
         * @static
         * @param {Message.SenderSigningKey} message SenderSigningKey
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SenderSigningKey.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if (options.bytes === String)
                    object["public"] = "";
                else {
                    object["public"] = [];
                    if (options.bytes !== Array)
                        object["public"] = $util.newBuffer(object["public"]);
                }
                if (options.bytes === String)
                    object["private"] = "";
                else {
                    object["private"] = [];
                    if (options.bytes !== Array)
                        object["private"] = $util.newBuffer(object["private"]);
                }
            }
            if (message["public"] != null && message.hasOwnProperty("public"))
                object["public"] = options.bytes === String ? $util.base64.encode(message["public"], 0, message["public"].length) : options.bytes === Array ? Array.prototype.slice.call(message["public"]) : message["public"];
            if (message["private"] != null && message.hasOwnProperty("private"))
                object["private"] = options.bytes === String ? $util.base64.encode(message["private"], 0, message["private"].length) : options.bytes === Array ? Array.prototype.slice.call(message["private"]) : message["private"];
            return object;
        };

        /**
         * Converts this SenderSigningKey to JSON.
         * @function toJSON
         * @memberof Message.SenderSigningKey
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SenderSigningKey.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SenderSigningKey;
    })();

    Message.SenderKeyStateStructure = (function() {

        /**
         * Properties of a SenderKeyStateStructure.
         * @memberof Message
         * @interface ISenderKeyStateStructure
         * @property {number|null} [senderKeyId] SenderKeyStateStructure senderKeyId
         * @property {Message.ISenderChainKey|null} [senderChainKey] SenderKeyStateStructure senderChainKey
         * @property {Message.ISenderSigningKey|null} [senderSigningKey] SenderKeyStateStructure senderSigningKey
         * @property {Array.<Message.ISenderMessageKey>|null} [senderMessageKeys] SenderKeyStateStructure senderMessageKeys
         */

        /**
         * Constructs a new SenderKeyStateStructure.
         * @memberof Message
         * @classdesc Represents a SenderKeyStateStructure.
         * @implements ISenderKeyStateStructure
         * @constructor
         * @param {Message.ISenderKeyStateStructure=} [properties] Properties to set
         */
        function SenderKeyStateStructure(properties) {
            this.senderMessageKeys = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SenderKeyStateStructure senderKeyId.
         * @member {number} senderKeyId
         * @memberof Message.SenderKeyStateStructure
         * @instance
         */
        SenderKeyStateStructure.prototype.senderKeyId = 0;

        /**
         * SenderKeyStateStructure senderChainKey.
         * @member {Message.ISenderChainKey|null|undefined} senderChainKey
         * @memberof Message.SenderKeyStateStructure
         * @instance
         */
        SenderKeyStateStructure.prototype.senderChainKey = null;

        /**
         * SenderKeyStateStructure senderSigningKey.
         * @member {Message.ISenderSigningKey|null|undefined} senderSigningKey
         * @memberof Message.SenderKeyStateStructure
         * @instance
         */
        SenderKeyStateStructure.prototype.senderSigningKey = null;

        /**
         * SenderKeyStateStructure senderMessageKeys.
         * @member {Array.<Message.ISenderMessageKey>} senderMessageKeys
         * @memberof Message.SenderKeyStateStructure
         * @instance
         */
        SenderKeyStateStructure.prototype.senderMessageKeys = $util.emptyArray;

        /**
         * Creates a new SenderKeyStateStructure instance using the specified properties.
         * @function create
         * @memberof Message.SenderKeyStateStructure
         * @static
         * @param {Message.ISenderKeyStateStructure=} [properties] Properties to set
         * @returns {Message.SenderKeyStateStructure} SenderKeyStateStructure instance
         */
        SenderKeyStateStructure.create = function create(properties) {
            return new SenderKeyStateStructure(properties);
        };

        /**
         * Encodes the specified SenderKeyStateStructure message. Does not implicitly {@link Message.SenderKeyStateStructure.verify|verify} messages.
         * @function encode
         * @memberof Message.SenderKeyStateStructure
         * @static
         * @param {Message.ISenderKeyStateStructure} message SenderKeyStateStructure message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SenderKeyStateStructure.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.senderKeyId != null && Object.hasOwnProperty.call(message, "senderKeyId"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.senderKeyId);
            if (message.senderChainKey != null && Object.hasOwnProperty.call(message, "senderChainKey"))
                $root.Message.SenderChainKey.encode(message.senderChainKey, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.senderSigningKey != null && Object.hasOwnProperty.call(message, "senderSigningKey"))
                $root.Message.SenderSigningKey.encode(message.senderSigningKey, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.senderMessageKeys != null && message.senderMessageKeys.length)
                for (var i = 0; i < message.senderMessageKeys.length; ++i)
                    $root.Message.SenderMessageKey.encode(message.senderMessageKeys[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified SenderKeyStateStructure message, length delimited. Does not implicitly {@link Message.SenderKeyStateStructure.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Message.SenderKeyStateStructure
         * @static
         * @param {Message.ISenderKeyStateStructure} message SenderKeyStateStructure message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SenderKeyStateStructure.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SenderKeyStateStructure message from the specified reader or buffer.
         * @function decode
         * @memberof Message.SenderKeyStateStructure
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Message.SenderKeyStateStructure} SenderKeyStateStructure
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SenderKeyStateStructure.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Message.SenderKeyStateStructure();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.senderKeyId = reader.uint32();
                    break;
                case 2:
                    message.senderChainKey = $root.Message.SenderChainKey.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.senderSigningKey = $root.Message.SenderSigningKey.decode(reader, reader.uint32());
                    break;
                case 4:
                    if (!(message.senderMessageKeys && message.senderMessageKeys.length))
                        message.senderMessageKeys = [];
                    message.senderMessageKeys.push($root.Message.SenderMessageKey.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SenderKeyStateStructure message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Message.SenderKeyStateStructure
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Message.SenderKeyStateStructure} SenderKeyStateStructure
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SenderKeyStateStructure.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SenderKeyStateStructure message.
         * @function verify
         * @memberof Message.SenderKeyStateStructure
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SenderKeyStateStructure.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.senderKeyId != null && message.hasOwnProperty("senderKeyId"))
                if (!$util.isInteger(message.senderKeyId))
                    return "senderKeyId: integer expected";
            if (message.senderChainKey != null && message.hasOwnProperty("senderChainKey")) {
                var error = $root.Message.SenderChainKey.verify(message.senderChainKey);
                if (error)
                    return "senderChainKey." + error;
            }
            if (message.senderSigningKey != null && message.hasOwnProperty("senderSigningKey")) {
                var error = $root.Message.SenderSigningKey.verify(message.senderSigningKey);
                if (error)
                    return "senderSigningKey." + error;
            }
            if (message.senderMessageKeys != null && message.hasOwnProperty("senderMessageKeys")) {
                if (!Array.isArray(message.senderMessageKeys))
                    return "senderMessageKeys: array expected";
                for (var i = 0; i < message.senderMessageKeys.length; ++i) {
                    var error = $root.Message.SenderMessageKey.verify(message.senderMessageKeys[i]);
                    if (error)
                        return "senderMessageKeys." + error;
                }
            }
            return null;
        };

        /**
         * Creates a SenderKeyStateStructure message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Message.SenderKeyStateStructure
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Message.SenderKeyStateStructure} SenderKeyStateStructure
         */
        SenderKeyStateStructure.fromObject = function fromObject(object) {
            if (object instanceof $root.Message.SenderKeyStateStructure)
                return object;
            var message = new $root.Message.SenderKeyStateStructure();
            if (object.senderKeyId != null)
                message.senderKeyId = object.senderKeyId >>> 0;
            if (object.senderChainKey != null) {
                if (typeof object.senderChainKey !== "object")
                    throw TypeError(".Message.SenderKeyStateStructure.senderChainKey: object expected");
                message.senderChainKey = $root.Message.SenderChainKey.fromObject(object.senderChainKey);
            }
            if (object.senderSigningKey != null) {
                if (typeof object.senderSigningKey !== "object")
                    throw TypeError(".Message.SenderKeyStateStructure.senderSigningKey: object expected");
                message.senderSigningKey = $root.Message.SenderSigningKey.fromObject(object.senderSigningKey);
            }
            if (object.senderMessageKeys) {
                if (!Array.isArray(object.senderMessageKeys))
                    throw TypeError(".Message.SenderKeyStateStructure.senderMessageKeys: array expected");
                message.senderMessageKeys = [];
                for (var i = 0; i < object.senderMessageKeys.length; ++i) {
                    if (typeof object.senderMessageKeys[i] !== "object")
                        throw TypeError(".Message.SenderKeyStateStructure.senderMessageKeys: object expected");
                    message.senderMessageKeys[i] = $root.Message.SenderMessageKey.fromObject(object.senderMessageKeys[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a SenderKeyStateStructure message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Message.SenderKeyStateStructure
         * @static
         * @param {Message.SenderKeyStateStructure} message SenderKeyStateStructure
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SenderKeyStateStructure.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.senderMessageKeys = [];
            if (options.defaults) {
                object.senderKeyId = 0;
                object.senderChainKey = null;
                object.senderSigningKey = null;
            }
            if (message.senderKeyId != null && message.hasOwnProperty("senderKeyId"))
                object.senderKeyId = message.senderKeyId;
            if (message.senderChainKey != null && message.hasOwnProperty("senderChainKey"))
                object.senderChainKey = $root.Message.SenderChainKey.toObject(message.senderChainKey, options);
            if (message.senderSigningKey != null && message.hasOwnProperty("senderSigningKey"))
                object.senderSigningKey = $root.Message.SenderSigningKey.toObject(message.senderSigningKey, options);
            if (message.senderMessageKeys && message.senderMessageKeys.length) {
                object.senderMessageKeys = [];
                for (var j = 0; j < message.senderMessageKeys.length; ++j)
                    object.senderMessageKeys[j] = $root.Message.SenderMessageKey.toObject(message.senderMessageKeys[j], options);
            }
            return object;
        };

        /**
         * Converts this SenderKeyStateStructure to JSON.
         * @function toJSON
         * @memberof Message.SenderKeyStateStructure
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SenderKeyStateStructure.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SenderKeyStateStructure;
    })();

    Message.SenderKeyRecordStructure = (function() {

        /**
         * Properties of a SenderKeyRecordStructure.
         * @memberof Message
         * @interface ISenderKeyRecordStructure
         * @property {Array.<Message.ISenderKeyStateStructure>|null} [senderKeyStates] SenderKeyRecordStructure senderKeyStates
         */

        /**
         * Constructs a new SenderKeyRecordStructure.
         * @memberof Message
         * @classdesc Represents a SenderKeyRecordStructure.
         * @implements ISenderKeyRecordStructure
         * @constructor
         * @param {Message.ISenderKeyRecordStructure=} [properties] Properties to set
         */
        function SenderKeyRecordStructure(properties) {
            this.senderKeyStates = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SenderKeyRecordStructure senderKeyStates.
         * @member {Array.<Message.ISenderKeyStateStructure>} senderKeyStates
         * @memberof Message.SenderKeyRecordStructure
         * @instance
         */
        SenderKeyRecordStructure.prototype.senderKeyStates = $util.emptyArray;

        /**
         * Creates a new SenderKeyRecordStructure instance using the specified properties.
         * @function create
         * @memberof Message.SenderKeyRecordStructure
         * @static
         * @param {Message.ISenderKeyRecordStructure=} [properties] Properties to set
         * @returns {Message.SenderKeyRecordStructure} SenderKeyRecordStructure instance
         */
        SenderKeyRecordStructure.create = function create(properties) {
            return new SenderKeyRecordStructure(properties);
        };

        /**
         * Encodes the specified SenderKeyRecordStructure message. Does not implicitly {@link Message.SenderKeyRecordStructure.verify|verify} messages.
         * @function encode
         * @memberof Message.SenderKeyRecordStructure
         * @static
         * @param {Message.ISenderKeyRecordStructure} message SenderKeyRecordStructure message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SenderKeyRecordStructure.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.senderKeyStates != null && message.senderKeyStates.length)
                for (var i = 0; i < message.senderKeyStates.length; ++i)
                    $root.Message.SenderKeyStateStructure.encode(message.senderKeyStates[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified SenderKeyRecordStructure message, length delimited. Does not implicitly {@link Message.SenderKeyRecordStructure.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Message.SenderKeyRecordStructure
         * @static
         * @param {Message.ISenderKeyRecordStructure} message SenderKeyRecordStructure message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SenderKeyRecordStructure.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SenderKeyRecordStructure message from the specified reader or buffer.
         * @function decode
         * @memberof Message.SenderKeyRecordStructure
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Message.SenderKeyRecordStructure} SenderKeyRecordStructure
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SenderKeyRecordStructure.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Message.SenderKeyRecordStructure();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.senderKeyStates && message.senderKeyStates.length))
                        message.senderKeyStates = [];
                    message.senderKeyStates.push($root.Message.SenderKeyStateStructure.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SenderKeyRecordStructure message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Message.SenderKeyRecordStructure
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Message.SenderKeyRecordStructure} SenderKeyRecordStructure
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SenderKeyRecordStructure.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SenderKeyRecordStructure message.
         * @function verify
         * @memberof Message.SenderKeyRecordStructure
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SenderKeyRecordStructure.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.senderKeyStates != null && message.hasOwnProperty("senderKeyStates")) {
                if (!Array.isArray(message.senderKeyStates))
                    return "senderKeyStates: array expected";
                for (var i = 0; i < message.senderKeyStates.length; ++i) {
                    var error = $root.Message.SenderKeyStateStructure.verify(message.senderKeyStates[i]);
                    if (error)
                        return "senderKeyStates." + error;
                }
            }
            return null;
        };

        /**
         * Creates a SenderKeyRecordStructure message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Message.SenderKeyRecordStructure
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Message.SenderKeyRecordStructure} SenderKeyRecordStructure
         */
        SenderKeyRecordStructure.fromObject = function fromObject(object) {
            if (object instanceof $root.Message.SenderKeyRecordStructure)
                return object;
            var message = new $root.Message.SenderKeyRecordStructure();
            if (object.senderKeyStates) {
                if (!Array.isArray(object.senderKeyStates))
                    throw TypeError(".Message.SenderKeyRecordStructure.senderKeyStates: array expected");
                message.senderKeyStates = [];
                for (var i = 0; i < object.senderKeyStates.length; ++i) {
                    if (typeof object.senderKeyStates[i] !== "object")
                        throw TypeError(".Message.SenderKeyRecordStructure.senderKeyStates: object expected");
                    message.senderKeyStates[i] = $root.Message.SenderKeyStateStructure.fromObject(object.senderKeyStates[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a SenderKeyRecordStructure message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Message.SenderKeyRecordStructure
         * @static
         * @param {Message.SenderKeyRecordStructure} message SenderKeyRecordStructure
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SenderKeyRecordStructure.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.senderKeyStates = [];
            if (message.senderKeyStates && message.senderKeyStates.length) {
                object.senderKeyStates = [];
                for (var j = 0; j < message.senderKeyStates.length; ++j)
                    object.senderKeyStates[j] = $root.Message.SenderKeyStateStructure.toObject(message.senderKeyStates[j], options);
            }
            return object;
        };

        /**
         * Converts this SenderKeyRecordStructure to JSON.
         * @function toJSON
         * @memberof Message.SenderKeyRecordStructure
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SenderKeyRecordStructure.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SenderKeyRecordStructure;
    })();

    Message.SenderKeyDistributionMessage = (function() {

        /**
         * Properties of a SenderKeyDistributionMessage.
         * @memberof Message
         * @interface ISenderKeyDistributionMessage
         * @property {number|null} [id] SenderKeyDistributionMessage id
         * @property {number|null} [iteration] SenderKeyDistributionMessage iteration
         * @property {Uint8Array|null} [chainKey] SenderKeyDistributionMessage chainKey
         * @property {Uint8Array|null} [signingKey] SenderKeyDistributionMessage signingKey
         */

        /**
         * Constructs a new SenderKeyDistributionMessage.
         * @memberof Message
         * @classdesc Represents a SenderKeyDistributionMessage.
         * @implements ISenderKeyDistributionMessage
         * @constructor
         * @param {Message.ISenderKeyDistributionMessage=} [properties] Properties to set
         */
        function SenderKeyDistributionMessage(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SenderKeyDistributionMessage id.
         * @member {number} id
         * @memberof Message.SenderKeyDistributionMessage
         * @instance
         */
        SenderKeyDistributionMessage.prototype.id = 0;

        /**
         * SenderKeyDistributionMessage iteration.
         * @member {number} iteration
         * @memberof Message.SenderKeyDistributionMessage
         * @instance
         */
        SenderKeyDistributionMessage.prototype.iteration = 0;

        /**
         * SenderKeyDistributionMessage chainKey.
         * @member {Uint8Array} chainKey
         * @memberof Message.SenderKeyDistributionMessage
         * @instance
         */
        SenderKeyDistributionMessage.prototype.chainKey = $util.newBuffer([]);

        /**
         * SenderKeyDistributionMessage signingKey.
         * @member {Uint8Array} signingKey
         * @memberof Message.SenderKeyDistributionMessage
         * @instance
         */
        SenderKeyDistributionMessage.prototype.signingKey = $util.newBuffer([]);

        /**
         * Creates a new SenderKeyDistributionMessage instance using the specified properties.
         * @function create
         * @memberof Message.SenderKeyDistributionMessage
         * @static
         * @param {Message.ISenderKeyDistributionMessage=} [properties] Properties to set
         * @returns {Message.SenderKeyDistributionMessage} SenderKeyDistributionMessage instance
         */
        SenderKeyDistributionMessage.create = function create(properties) {
            return new SenderKeyDistributionMessage(properties);
        };

        /**
         * Encodes the specified SenderKeyDistributionMessage message. Does not implicitly {@link Message.SenderKeyDistributionMessage.verify|verify} messages.
         * @function encode
         * @memberof Message.SenderKeyDistributionMessage
         * @static
         * @param {Message.ISenderKeyDistributionMessage} message SenderKeyDistributionMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SenderKeyDistributionMessage.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
            if (message.iteration != null && Object.hasOwnProperty.call(message, "iteration"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.iteration);
            if (message.chainKey != null && Object.hasOwnProperty.call(message, "chainKey"))
                writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.chainKey);
            if (message.signingKey != null && Object.hasOwnProperty.call(message, "signingKey"))
                writer.uint32(/* id 4, wireType 2 =*/34).bytes(message.signingKey);
            return writer;
        };

        /**
         * Encodes the specified SenderKeyDistributionMessage message, length delimited. Does not implicitly {@link Message.SenderKeyDistributionMessage.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Message.SenderKeyDistributionMessage
         * @static
         * @param {Message.ISenderKeyDistributionMessage} message SenderKeyDistributionMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SenderKeyDistributionMessage.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SenderKeyDistributionMessage message from the specified reader or buffer.
         * @function decode
         * @memberof Message.SenderKeyDistributionMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Message.SenderKeyDistributionMessage} SenderKeyDistributionMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SenderKeyDistributionMessage.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Message.SenderKeyDistributionMessage();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.int32();
                    break;
                case 2:
                    message.iteration = reader.int32();
                    break;
                case 3:
                    message.chainKey = reader.bytes();
                    break;
                case 4:
                    message.signingKey = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SenderKeyDistributionMessage message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Message.SenderKeyDistributionMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Message.SenderKeyDistributionMessage} SenderKeyDistributionMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SenderKeyDistributionMessage.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SenderKeyDistributionMessage message.
         * @function verify
         * @memberof Message.SenderKeyDistributionMessage
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SenderKeyDistributionMessage.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isInteger(message.id))
                    return "id: integer expected";
            if (message.iteration != null && message.hasOwnProperty("iteration"))
                if (!$util.isInteger(message.iteration))
                    return "iteration: integer expected";
            if (message.chainKey != null && message.hasOwnProperty("chainKey"))
                if (!(message.chainKey && typeof message.chainKey.length === "number" || $util.isString(message.chainKey)))
                    return "chainKey: buffer expected";
            if (message.signingKey != null && message.hasOwnProperty("signingKey"))
                if (!(message.signingKey && typeof message.signingKey.length === "number" || $util.isString(message.signingKey)))
                    return "signingKey: buffer expected";
            return null;
        };

        /**
         * Creates a SenderKeyDistributionMessage message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Message.SenderKeyDistributionMessage
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Message.SenderKeyDistributionMessage} SenderKeyDistributionMessage
         */
        SenderKeyDistributionMessage.fromObject = function fromObject(object) {
            if (object instanceof $root.Message.SenderKeyDistributionMessage)
                return object;
            var message = new $root.Message.SenderKeyDistributionMessage();
            if (object.id != null)
                message.id = object.id | 0;
            if (object.iteration != null)
                message.iteration = object.iteration | 0;
            if (object.chainKey != null)
                if (typeof object.chainKey === "string")
                    $util.base64.decode(object.chainKey, message.chainKey = $util.newBuffer($util.base64.length(object.chainKey)), 0);
                else if (object.chainKey.length)
                    message.chainKey = object.chainKey;
            if (object.signingKey != null)
                if (typeof object.signingKey === "string")
                    $util.base64.decode(object.signingKey, message.signingKey = $util.newBuffer($util.base64.length(object.signingKey)), 0);
                else if (object.signingKey.length)
                    message.signingKey = object.signingKey;
            return message;
        };

        /**
         * Creates a plain object from a SenderKeyDistributionMessage message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Message.SenderKeyDistributionMessage
         * @static
         * @param {Message.SenderKeyDistributionMessage} message SenderKeyDistributionMessage
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SenderKeyDistributionMessage.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.id = 0;
                object.iteration = 0;
                if (options.bytes === String)
                    object.chainKey = "";
                else {
                    object.chainKey = [];
                    if (options.bytes !== Array)
                        object.chainKey = $util.newBuffer(object.chainKey);
                }
                if (options.bytes === String)
                    object.signingKey = "";
                else {
                    object.signingKey = [];
                    if (options.bytes !== Array)
                        object.signingKey = $util.newBuffer(object.signingKey);
                }
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.iteration != null && message.hasOwnProperty("iteration"))
                object.iteration = message.iteration;
            if (message.chainKey != null && message.hasOwnProperty("chainKey"))
                object.chainKey = options.bytes === String ? $util.base64.encode(message.chainKey, 0, message.chainKey.length) : options.bytes === Array ? Array.prototype.slice.call(message.chainKey) : message.chainKey;
            if (message.signingKey != null && message.hasOwnProperty("signingKey"))
                object.signingKey = options.bytes === String ? $util.base64.encode(message.signingKey, 0, message.signingKey.length) : options.bytes === Array ? Array.prototype.slice.call(message.signingKey) : message.signingKey;
            return object;
        };

        /**
         * Converts this SenderKeyDistributionMessage to JSON.
         * @function toJSON
         * @memberof Message.SenderKeyDistributionMessage
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SenderKeyDistributionMessage.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SenderKeyDistributionMessage;
    })();

    Message.WhisperSenderKeyDistributionMessage = (function() {

        /**
         * Properties of a WhisperSenderKeyDistributionMessage.
         * @memberof Message
         * @interface IWhisperSenderKeyDistributionMessage
         * @property {string|null} [groupId] WhisperSenderKeyDistributionMessage groupId
         * @property {Uint8Array|null} [axolotlSenderKeyDistributionMessage] WhisperSenderKeyDistributionMessage axolotlSenderKeyDistributionMessage
         */

        /**
         * Constructs a new WhisperSenderKeyDistributionMessage.
         * @memberof Message
         * @classdesc Represents a WhisperSenderKeyDistributionMessage.
         * @implements IWhisperSenderKeyDistributionMessage
         * @constructor
         * @param {Message.IWhisperSenderKeyDistributionMessage=} [properties] Properties to set
         */
        function WhisperSenderKeyDistributionMessage(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * WhisperSenderKeyDistributionMessage groupId.
         * @member {string} groupId
         * @memberof Message.WhisperSenderKeyDistributionMessage
         * @instance
         */
        WhisperSenderKeyDistributionMessage.prototype.groupId = "";

        /**
         * WhisperSenderKeyDistributionMessage axolotlSenderKeyDistributionMessage.
         * @member {Uint8Array} axolotlSenderKeyDistributionMessage
         * @memberof Message.WhisperSenderKeyDistributionMessage
         * @instance
         */
        WhisperSenderKeyDistributionMessage.prototype.axolotlSenderKeyDistributionMessage = $util.newBuffer([]);

        /**
         * Creates a new WhisperSenderKeyDistributionMessage instance using the specified properties.
         * @function create
         * @memberof Message.WhisperSenderKeyDistributionMessage
         * @static
         * @param {Message.IWhisperSenderKeyDistributionMessage=} [properties] Properties to set
         * @returns {Message.WhisperSenderKeyDistributionMessage} WhisperSenderKeyDistributionMessage instance
         */
        WhisperSenderKeyDistributionMessage.create = function create(properties) {
            return new WhisperSenderKeyDistributionMessage(properties);
        };

        /**
         * Encodes the specified WhisperSenderKeyDistributionMessage message. Does not implicitly {@link Message.WhisperSenderKeyDistributionMessage.verify|verify} messages.
         * @function encode
         * @memberof Message.WhisperSenderKeyDistributionMessage
         * @static
         * @param {Message.IWhisperSenderKeyDistributionMessage} message WhisperSenderKeyDistributionMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WhisperSenderKeyDistributionMessage.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.groupId != null && Object.hasOwnProperty.call(message, "groupId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.groupId);
            if (message.axolotlSenderKeyDistributionMessage != null && Object.hasOwnProperty.call(message, "axolotlSenderKeyDistributionMessage"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.axolotlSenderKeyDistributionMessage);
            return writer;
        };

        /**
         * Encodes the specified WhisperSenderKeyDistributionMessage message, length delimited. Does not implicitly {@link Message.WhisperSenderKeyDistributionMessage.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Message.WhisperSenderKeyDistributionMessage
         * @static
         * @param {Message.IWhisperSenderKeyDistributionMessage} message WhisperSenderKeyDistributionMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WhisperSenderKeyDistributionMessage.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a WhisperSenderKeyDistributionMessage message from the specified reader or buffer.
         * @function decode
         * @memberof Message.WhisperSenderKeyDistributionMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Message.WhisperSenderKeyDistributionMessage} WhisperSenderKeyDistributionMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WhisperSenderKeyDistributionMessage.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Message.WhisperSenderKeyDistributionMessage();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.groupId = reader.string();
                    break;
                case 2:
                    message.axolotlSenderKeyDistributionMessage = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a WhisperSenderKeyDistributionMessage message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Message.WhisperSenderKeyDistributionMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Message.WhisperSenderKeyDistributionMessage} WhisperSenderKeyDistributionMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WhisperSenderKeyDistributionMessage.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a WhisperSenderKeyDistributionMessage message.
         * @function verify
         * @memberof Message.WhisperSenderKeyDistributionMessage
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        WhisperSenderKeyDistributionMessage.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.groupId != null && message.hasOwnProperty("groupId"))
                if (!$util.isString(message.groupId))
                    return "groupId: string expected";
            if (message.axolotlSenderKeyDistributionMessage != null && message.hasOwnProperty("axolotlSenderKeyDistributionMessage"))
                if (!(message.axolotlSenderKeyDistributionMessage && typeof message.axolotlSenderKeyDistributionMessage.length === "number" || $util.isString(message.axolotlSenderKeyDistributionMessage)))
                    return "axolotlSenderKeyDistributionMessage: buffer expected";
            return null;
        };

        /**
         * Creates a WhisperSenderKeyDistributionMessage message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Message.WhisperSenderKeyDistributionMessage
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Message.WhisperSenderKeyDistributionMessage} WhisperSenderKeyDistributionMessage
         */
        WhisperSenderKeyDistributionMessage.fromObject = function fromObject(object) {
            if (object instanceof $root.Message.WhisperSenderKeyDistributionMessage)
                return object;
            var message = new $root.Message.WhisperSenderKeyDistributionMessage();
            if (object.groupId != null)
                message.groupId = String(object.groupId);
            if (object.axolotlSenderKeyDistributionMessage != null)
                if (typeof object.axolotlSenderKeyDistributionMessage === "string")
                    $util.base64.decode(object.axolotlSenderKeyDistributionMessage, message.axolotlSenderKeyDistributionMessage = $util.newBuffer($util.base64.length(object.axolotlSenderKeyDistributionMessage)), 0);
                else if (object.axolotlSenderKeyDistributionMessage.length)
                    message.axolotlSenderKeyDistributionMessage = object.axolotlSenderKeyDistributionMessage;
            return message;
        };

        /**
         * Creates a plain object from a WhisperSenderKeyDistributionMessage message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Message.WhisperSenderKeyDistributionMessage
         * @static
         * @param {Message.WhisperSenderKeyDistributionMessage} message WhisperSenderKeyDistributionMessage
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        WhisperSenderKeyDistributionMessage.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.groupId = "";
                if (options.bytes === String)
                    object.axolotlSenderKeyDistributionMessage = "";
                else {
                    object.axolotlSenderKeyDistributionMessage = [];
                    if (options.bytes !== Array)
                        object.axolotlSenderKeyDistributionMessage = $util.newBuffer(object.axolotlSenderKeyDistributionMessage);
                }
            }
            if (message.groupId != null && message.hasOwnProperty("groupId"))
                object.groupId = message.groupId;
            if (message.axolotlSenderKeyDistributionMessage != null && message.hasOwnProperty("axolotlSenderKeyDistributionMessage"))
                object.axolotlSenderKeyDistributionMessage = options.bytes === String ? $util.base64.encode(message.axolotlSenderKeyDistributionMessage, 0, message.axolotlSenderKeyDistributionMessage.length) : options.bytes === Array ? Array.prototype.slice.call(message.axolotlSenderKeyDistributionMessage) : message.axolotlSenderKeyDistributionMessage;
            return object;
        };

        /**
         * Converts this WhisperSenderKeyDistributionMessage to JSON.
         * @function toJSON
         * @memberof Message.WhisperSenderKeyDistributionMessage
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        WhisperSenderKeyDistributionMessage.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return WhisperSenderKeyDistributionMessage;
    })();

    Message.ImageMessage = (function() {

        /**
         * Properties of an ImageMessage.
         * @memberof Message
         * @interface IImageMessage
         * @property {string|null} [url] ImageMessage url
         * @property {string|null} [mimetype] ImageMessage mimetype
         * @property {string|null} [caption] ImageMessage caption
         * @property {Uint8Array|null} [fileSha256] ImageMessage fileSha256
         * @property {number|Long|null} [fileLength] ImageMessage fileLength
         * @property {number|null} [height] ImageMessage height
         * @property {number|null} [width] ImageMessage width
         * @property {Uint8Array|null} [mediaKey] ImageMessage mediaKey
         * @property {Uint8Array|null} [jpegThumbnail] ImageMessage jpegThumbnail
         * @property {string|null} [contextInfo] ImageMessage contextInfo
         */

        /**
         * Constructs a new ImageMessage.
         * @memberof Message
         * @classdesc Represents an ImageMessage.
         * @implements IImageMessage
         * @constructor
         * @param {Message.IImageMessage=} [properties] Properties to set
         */
        function ImageMessage(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ImageMessage url.
         * @member {string} url
         * @memberof Message.ImageMessage
         * @instance
         */
        ImageMessage.prototype.url = "";

        /**
         * ImageMessage mimetype.
         * @member {string} mimetype
         * @memberof Message.ImageMessage
         * @instance
         */
        ImageMessage.prototype.mimetype = "";

        /**
         * ImageMessage caption.
         * @member {string} caption
         * @memberof Message.ImageMessage
         * @instance
         */
        ImageMessage.prototype.caption = "";

        /**
         * ImageMessage fileSha256.
         * @member {Uint8Array} fileSha256
         * @memberof Message.ImageMessage
         * @instance
         */
        ImageMessage.prototype.fileSha256 = $util.newBuffer([]);

        /**
         * ImageMessage fileLength.
         * @member {number|Long} fileLength
         * @memberof Message.ImageMessage
         * @instance
         */
        ImageMessage.prototype.fileLength = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * ImageMessage height.
         * @member {number} height
         * @memberof Message.ImageMessage
         * @instance
         */
        ImageMessage.prototype.height = 0;

        /**
         * ImageMessage width.
         * @member {number} width
         * @memberof Message.ImageMessage
         * @instance
         */
        ImageMessage.prototype.width = 0;

        /**
         * ImageMessage mediaKey.
         * @member {Uint8Array} mediaKey
         * @memberof Message.ImageMessage
         * @instance
         */
        ImageMessage.prototype.mediaKey = $util.newBuffer([]);

        /**
         * ImageMessage jpegThumbnail.
         * @member {Uint8Array} jpegThumbnail
         * @memberof Message.ImageMessage
         * @instance
         */
        ImageMessage.prototype.jpegThumbnail = $util.newBuffer([]);

        /**
         * ImageMessage contextInfo.
         * @member {string} contextInfo
         * @memberof Message.ImageMessage
         * @instance
         */
        ImageMessage.prototype.contextInfo = "";

        /**
         * Creates a new ImageMessage instance using the specified properties.
         * @function create
         * @memberof Message.ImageMessage
         * @static
         * @param {Message.IImageMessage=} [properties] Properties to set
         * @returns {Message.ImageMessage} ImageMessage instance
         */
        ImageMessage.create = function create(properties) {
            return new ImageMessage(properties);
        };

        /**
         * Encodes the specified ImageMessage message. Does not implicitly {@link Message.ImageMessage.verify|verify} messages.
         * @function encode
         * @memberof Message.ImageMessage
         * @static
         * @param {Message.IImageMessage} message ImageMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ImageMessage.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.url != null && Object.hasOwnProperty.call(message, "url"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.url);
            if (message.mimetype != null && Object.hasOwnProperty.call(message, "mimetype"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.mimetype);
            if (message.caption != null && Object.hasOwnProperty.call(message, "caption"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.caption);
            if (message.fileSha256 != null && Object.hasOwnProperty.call(message, "fileSha256"))
                writer.uint32(/* id 4, wireType 2 =*/34).bytes(message.fileSha256);
            if (message.fileLength != null && Object.hasOwnProperty.call(message, "fileLength"))
                writer.uint32(/* id 5, wireType 0 =*/40).int64(message.fileLength);
            if (message.height != null && Object.hasOwnProperty.call(message, "height"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.height);
            if (message.width != null && Object.hasOwnProperty.call(message, "width"))
                writer.uint32(/* id 7, wireType 0 =*/56).int32(message.width);
            if (message.mediaKey != null && Object.hasOwnProperty.call(message, "mediaKey"))
                writer.uint32(/* id 8, wireType 2 =*/66).bytes(message.mediaKey);
            if (message.jpegThumbnail != null && Object.hasOwnProperty.call(message, "jpegThumbnail"))
                writer.uint32(/* id 16, wireType 2 =*/130).bytes(message.jpegThumbnail);
            if (message.contextInfo != null && Object.hasOwnProperty.call(message, "contextInfo"))
                writer.uint32(/* id 17, wireType 2 =*/138).string(message.contextInfo);
            return writer;
        };

        /**
         * Encodes the specified ImageMessage message, length delimited. Does not implicitly {@link Message.ImageMessage.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Message.ImageMessage
         * @static
         * @param {Message.IImageMessage} message ImageMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ImageMessage.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an ImageMessage message from the specified reader or buffer.
         * @function decode
         * @memberof Message.ImageMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Message.ImageMessage} ImageMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ImageMessage.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Message.ImageMessage();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.url = reader.string();
                    break;
                case 2:
                    message.mimetype = reader.string();
                    break;
                case 3:
                    message.caption = reader.string();
                    break;
                case 4:
                    message.fileSha256 = reader.bytes();
                    break;
                case 5:
                    message.fileLength = reader.int64();
                    break;
                case 6:
                    message.height = reader.int32();
                    break;
                case 7:
                    message.width = reader.int32();
                    break;
                case 8:
                    message.mediaKey = reader.bytes();
                    break;
                case 16:
                    message.jpegThumbnail = reader.bytes();
                    break;
                case 17:
                    message.contextInfo = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an ImageMessage message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Message.ImageMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Message.ImageMessage} ImageMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ImageMessage.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an ImageMessage message.
         * @function verify
         * @memberof Message.ImageMessage
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ImageMessage.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.url != null && message.hasOwnProperty("url"))
                if (!$util.isString(message.url))
                    return "url: string expected";
            if (message.mimetype != null && message.hasOwnProperty("mimetype"))
                if (!$util.isString(message.mimetype))
                    return "mimetype: string expected";
            if (message.caption != null && message.hasOwnProperty("caption"))
                if (!$util.isString(message.caption))
                    return "caption: string expected";
            if (message.fileSha256 != null && message.hasOwnProperty("fileSha256"))
                if (!(message.fileSha256 && typeof message.fileSha256.length === "number" || $util.isString(message.fileSha256)))
                    return "fileSha256: buffer expected";
            if (message.fileLength != null && message.hasOwnProperty("fileLength"))
                if (!$util.isInteger(message.fileLength) && !(message.fileLength && $util.isInteger(message.fileLength.low) && $util.isInteger(message.fileLength.high)))
                    return "fileLength: integer|Long expected";
            if (message.height != null && message.hasOwnProperty("height"))
                if (!$util.isInteger(message.height))
                    return "height: integer expected";
            if (message.width != null && message.hasOwnProperty("width"))
                if (!$util.isInteger(message.width))
                    return "width: integer expected";
            if (message.mediaKey != null && message.hasOwnProperty("mediaKey"))
                if (!(message.mediaKey && typeof message.mediaKey.length === "number" || $util.isString(message.mediaKey)))
                    return "mediaKey: buffer expected";
            if (message.jpegThumbnail != null && message.hasOwnProperty("jpegThumbnail"))
                if (!(message.jpegThumbnail && typeof message.jpegThumbnail.length === "number" || $util.isString(message.jpegThumbnail)))
                    return "jpegThumbnail: buffer expected";
            if (message.contextInfo != null && message.hasOwnProperty("contextInfo"))
                if (!$util.isString(message.contextInfo))
                    return "contextInfo: string expected";
            return null;
        };

        /**
         * Creates an ImageMessage message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Message.ImageMessage
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Message.ImageMessage} ImageMessage
         */
        ImageMessage.fromObject = function fromObject(object) {
            if (object instanceof $root.Message.ImageMessage)
                return object;
            var message = new $root.Message.ImageMessage();
            if (object.url != null)
                message.url = String(object.url);
            if (object.mimetype != null)
                message.mimetype = String(object.mimetype);
            if (object.caption != null)
                message.caption = String(object.caption);
            if (object.fileSha256 != null)
                if (typeof object.fileSha256 === "string")
                    $util.base64.decode(object.fileSha256, message.fileSha256 = $util.newBuffer($util.base64.length(object.fileSha256)), 0);
                else if (object.fileSha256.length)
                    message.fileSha256 = object.fileSha256;
            if (object.fileLength != null)
                if ($util.Long)
                    (message.fileLength = $util.Long.fromValue(object.fileLength)).unsigned = false;
                else if (typeof object.fileLength === "string")
                    message.fileLength = parseInt(object.fileLength, 10);
                else if (typeof object.fileLength === "number")
                    message.fileLength = object.fileLength;
                else if (typeof object.fileLength === "object")
                    message.fileLength = new $util.LongBits(object.fileLength.low >>> 0, object.fileLength.high >>> 0).toNumber();
            if (object.height != null)
                message.height = object.height | 0;
            if (object.width != null)
                message.width = object.width | 0;
            if (object.mediaKey != null)
                if (typeof object.mediaKey === "string")
                    $util.base64.decode(object.mediaKey, message.mediaKey = $util.newBuffer($util.base64.length(object.mediaKey)), 0);
                else if (object.mediaKey.length)
                    message.mediaKey = object.mediaKey;
            if (object.jpegThumbnail != null)
                if (typeof object.jpegThumbnail === "string")
                    $util.base64.decode(object.jpegThumbnail, message.jpegThumbnail = $util.newBuffer($util.base64.length(object.jpegThumbnail)), 0);
                else if (object.jpegThumbnail.length)
                    message.jpegThumbnail = object.jpegThumbnail;
            if (object.contextInfo != null)
                message.contextInfo = String(object.contextInfo);
            return message;
        };

        /**
         * Creates a plain object from an ImageMessage message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Message.ImageMessage
         * @static
         * @param {Message.ImageMessage} message ImageMessage
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ImageMessage.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.url = "";
                object.mimetype = "";
                object.caption = "";
                if (options.bytes === String)
                    object.fileSha256 = "";
                else {
                    object.fileSha256 = [];
                    if (options.bytes !== Array)
                        object.fileSha256 = $util.newBuffer(object.fileSha256);
                }
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.fileLength = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.fileLength = options.longs === String ? "0" : 0;
                object.height = 0;
                object.width = 0;
                if (options.bytes === String)
                    object.mediaKey = "";
                else {
                    object.mediaKey = [];
                    if (options.bytes !== Array)
                        object.mediaKey = $util.newBuffer(object.mediaKey);
                }
                if (options.bytes === String)
                    object.jpegThumbnail = "";
                else {
                    object.jpegThumbnail = [];
                    if (options.bytes !== Array)
                        object.jpegThumbnail = $util.newBuffer(object.jpegThumbnail);
                }
                object.contextInfo = "";
            }
            if (message.url != null && message.hasOwnProperty("url"))
                object.url = message.url;
            if (message.mimetype != null && message.hasOwnProperty("mimetype"))
                object.mimetype = message.mimetype;
            if (message.caption != null && message.hasOwnProperty("caption"))
                object.caption = message.caption;
            if (message.fileSha256 != null && message.hasOwnProperty("fileSha256"))
                object.fileSha256 = options.bytes === String ? $util.base64.encode(message.fileSha256, 0, message.fileSha256.length) : options.bytes === Array ? Array.prototype.slice.call(message.fileSha256) : message.fileSha256;
            if (message.fileLength != null && message.hasOwnProperty("fileLength"))
                if (typeof message.fileLength === "number")
                    object.fileLength = options.longs === String ? String(message.fileLength) : message.fileLength;
                else
                    object.fileLength = options.longs === String ? $util.Long.prototype.toString.call(message.fileLength) : options.longs === Number ? new $util.LongBits(message.fileLength.low >>> 0, message.fileLength.high >>> 0).toNumber() : message.fileLength;
            if (message.height != null && message.hasOwnProperty("height"))
                object.height = message.height;
            if (message.width != null && message.hasOwnProperty("width"))
                object.width = message.width;
            if (message.mediaKey != null && message.hasOwnProperty("mediaKey"))
                object.mediaKey = options.bytes === String ? $util.base64.encode(message.mediaKey, 0, message.mediaKey.length) : options.bytes === Array ? Array.prototype.slice.call(message.mediaKey) : message.mediaKey;
            if (message.jpegThumbnail != null && message.hasOwnProperty("jpegThumbnail"))
                object.jpegThumbnail = options.bytes === String ? $util.base64.encode(message.jpegThumbnail, 0, message.jpegThumbnail.length) : options.bytes === Array ? Array.prototype.slice.call(message.jpegThumbnail) : message.jpegThumbnail;
            if (message.contextInfo != null && message.hasOwnProperty("contextInfo"))
                object.contextInfo = message.contextInfo;
            return object;
        };

        /**
         * Converts this ImageMessage to JSON.
         * @function toJSON
         * @memberof Message.ImageMessage
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ImageMessage.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ImageMessage;
    })();

    Message.ContactMessage = (function() {

        /**
         * Properties of a ContactMessage.
         * @memberof Message
         * @interface IContactMessage
         * @property {string|null} [displayName] ContactMessage displayName
         * @property {string|null} [vcard] ContactMessage vcard
         * @property {string|null} [contextInfo] ContactMessage contextInfo
         */

        /**
         * Constructs a new ContactMessage.
         * @memberof Message
         * @classdesc Represents a ContactMessage.
         * @implements IContactMessage
         * @constructor
         * @param {Message.IContactMessage=} [properties] Properties to set
         */
        function ContactMessage(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ContactMessage displayName.
         * @member {string} displayName
         * @memberof Message.ContactMessage
         * @instance
         */
        ContactMessage.prototype.displayName = "";

        /**
         * ContactMessage vcard.
         * @member {string} vcard
         * @memberof Message.ContactMessage
         * @instance
         */
        ContactMessage.prototype.vcard = "";

        /**
         * ContactMessage contextInfo.
         * @member {string} contextInfo
         * @memberof Message.ContactMessage
         * @instance
         */
        ContactMessage.prototype.contextInfo = "";

        /**
         * Creates a new ContactMessage instance using the specified properties.
         * @function create
         * @memberof Message.ContactMessage
         * @static
         * @param {Message.IContactMessage=} [properties] Properties to set
         * @returns {Message.ContactMessage} ContactMessage instance
         */
        ContactMessage.create = function create(properties) {
            return new ContactMessage(properties);
        };

        /**
         * Encodes the specified ContactMessage message. Does not implicitly {@link Message.ContactMessage.verify|verify} messages.
         * @function encode
         * @memberof Message.ContactMessage
         * @static
         * @param {Message.IContactMessage} message ContactMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ContactMessage.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.displayName != null && Object.hasOwnProperty.call(message, "displayName"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.displayName);
            if (message.vcard != null && Object.hasOwnProperty.call(message, "vcard"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.vcard);
            if (message.contextInfo != null && Object.hasOwnProperty.call(message, "contextInfo"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.contextInfo);
            return writer;
        };

        /**
         * Encodes the specified ContactMessage message, length delimited. Does not implicitly {@link Message.ContactMessage.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Message.ContactMessage
         * @static
         * @param {Message.IContactMessage} message ContactMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ContactMessage.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ContactMessage message from the specified reader or buffer.
         * @function decode
         * @memberof Message.ContactMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Message.ContactMessage} ContactMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ContactMessage.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Message.ContactMessage();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.displayName = reader.string();
                    break;
                case 2:
                    message.vcard = reader.string();
                    break;
                case 3:
                    message.contextInfo = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ContactMessage message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Message.ContactMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Message.ContactMessage} ContactMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ContactMessage.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ContactMessage message.
         * @function verify
         * @memberof Message.ContactMessage
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ContactMessage.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.displayName != null && message.hasOwnProperty("displayName"))
                if (!$util.isString(message.displayName))
                    return "displayName: string expected";
            if (message.vcard != null && message.hasOwnProperty("vcard"))
                if (!$util.isString(message.vcard))
                    return "vcard: string expected";
            if (message.contextInfo != null && message.hasOwnProperty("contextInfo"))
                if (!$util.isString(message.contextInfo))
                    return "contextInfo: string expected";
            return null;
        };

        /**
         * Creates a ContactMessage message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Message.ContactMessage
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Message.ContactMessage} ContactMessage
         */
        ContactMessage.fromObject = function fromObject(object) {
            if (object instanceof $root.Message.ContactMessage)
                return object;
            var message = new $root.Message.ContactMessage();
            if (object.displayName != null)
                message.displayName = String(object.displayName);
            if (object.vcard != null)
                message.vcard = String(object.vcard);
            if (object.contextInfo != null)
                message.contextInfo = String(object.contextInfo);
            return message;
        };

        /**
         * Creates a plain object from a ContactMessage message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Message.ContactMessage
         * @static
         * @param {Message.ContactMessage} message ContactMessage
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ContactMessage.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.displayName = "";
                object.vcard = "";
                object.contextInfo = "";
            }
            if (message.displayName != null && message.hasOwnProperty("displayName"))
                object.displayName = message.displayName;
            if (message.vcard != null && message.hasOwnProperty("vcard"))
                object.vcard = message.vcard;
            if (message.contextInfo != null && message.hasOwnProperty("contextInfo"))
                object.contextInfo = message.contextInfo;
            return object;
        };

        /**
         * Converts this ContactMessage to JSON.
         * @function toJSON
         * @memberof Message.ContactMessage
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ContactMessage.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ContactMessage;
    })();

    Message.LocationMessage = (function() {

        /**
         * Properties of a LocationMessage.
         * @memberof Message
         * @interface ILocationMessage
         * @property {string|null} [degreesLatitude] LocationMessage degreesLatitude
         * @property {string|null} [degreesLongitude] LocationMessage degreesLongitude
         * @property {string|null} [name] LocationMessage name
         * @property {string|null} [address] LocationMessage address
         * @property {string|null} [url] LocationMessage url
         * @property {string|null} [duration] LocationMessage duration
         * @property {string|null} [accuracyInMeters] LocationMessage accuracyInMeters
         * @property {string|null} [speedInMps] LocationMessage speedInMps
         * @property {string|null} [degreesClockwiseFromMagneticNorth] LocationMessage degreesClockwiseFromMagneticNorth
         * @property {string|null} [axolotlSenderKeyDistributionMessage] LocationMessage axolotlSenderKeyDistributionMessage
         * @property {string|null} [jpegThumbnail] LocationMessage jpegThumbnail
         * @property {string|null} [contextInfo] LocationMessage contextInfo
         */

        /**
         * Constructs a new LocationMessage.
         * @memberof Message
         * @classdesc Represents a LocationMessage.
         * @implements ILocationMessage
         * @constructor
         * @param {Message.ILocationMessage=} [properties] Properties to set
         */
        function LocationMessage(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * LocationMessage degreesLatitude.
         * @member {string} degreesLatitude
         * @memberof Message.LocationMessage
         * @instance
         */
        LocationMessage.prototype.degreesLatitude = "";

        /**
         * LocationMessage degreesLongitude.
         * @member {string} degreesLongitude
         * @memberof Message.LocationMessage
         * @instance
         */
        LocationMessage.prototype.degreesLongitude = "";

        /**
         * LocationMessage name.
         * @member {string} name
         * @memberof Message.LocationMessage
         * @instance
         */
        LocationMessage.prototype.name = "";

        /**
         * LocationMessage address.
         * @member {string} address
         * @memberof Message.LocationMessage
         * @instance
         */
        LocationMessage.prototype.address = "";

        /**
         * LocationMessage url.
         * @member {string} url
         * @memberof Message.LocationMessage
         * @instance
         */
        LocationMessage.prototype.url = "";

        /**
         * LocationMessage duration.
         * @member {string} duration
         * @memberof Message.LocationMessage
         * @instance
         */
        LocationMessage.prototype.duration = "";

        /**
         * LocationMessage accuracyInMeters.
         * @member {string} accuracyInMeters
         * @memberof Message.LocationMessage
         * @instance
         */
        LocationMessage.prototype.accuracyInMeters = "";

        /**
         * LocationMessage speedInMps.
         * @member {string} speedInMps
         * @memberof Message.LocationMessage
         * @instance
         */
        LocationMessage.prototype.speedInMps = "";

        /**
         * LocationMessage degreesClockwiseFromMagneticNorth.
         * @member {string} degreesClockwiseFromMagneticNorth
         * @memberof Message.LocationMessage
         * @instance
         */
        LocationMessage.prototype.degreesClockwiseFromMagneticNorth = "";

        /**
         * LocationMessage axolotlSenderKeyDistributionMessage.
         * @member {string} axolotlSenderKeyDistributionMessage
         * @memberof Message.LocationMessage
         * @instance
         */
        LocationMessage.prototype.axolotlSenderKeyDistributionMessage = "";

        /**
         * LocationMessage jpegThumbnail.
         * @member {string} jpegThumbnail
         * @memberof Message.LocationMessage
         * @instance
         */
        LocationMessage.prototype.jpegThumbnail = "";

        /**
         * LocationMessage contextInfo.
         * @member {string} contextInfo
         * @memberof Message.LocationMessage
         * @instance
         */
        LocationMessage.prototype.contextInfo = "";

        /**
         * Creates a new LocationMessage instance using the specified properties.
         * @function create
         * @memberof Message.LocationMessage
         * @static
         * @param {Message.ILocationMessage=} [properties] Properties to set
         * @returns {Message.LocationMessage} LocationMessage instance
         */
        LocationMessage.create = function create(properties) {
            return new LocationMessage(properties);
        };

        /**
         * Encodes the specified LocationMessage message. Does not implicitly {@link Message.LocationMessage.verify|verify} messages.
         * @function encode
         * @memberof Message.LocationMessage
         * @static
         * @param {Message.ILocationMessage} message LocationMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LocationMessage.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.degreesLatitude != null && Object.hasOwnProperty.call(message, "degreesLatitude"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.degreesLatitude);
            if (message.degreesLongitude != null && Object.hasOwnProperty.call(message, "degreesLongitude"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.degreesLongitude);
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.name);
            if (message.address != null && Object.hasOwnProperty.call(message, "address"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.address);
            if (message.url != null && Object.hasOwnProperty.call(message, "url"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.url);
            if (message.duration != null && Object.hasOwnProperty.call(message, "duration"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.duration);
            if (message.accuracyInMeters != null && Object.hasOwnProperty.call(message, "accuracyInMeters"))
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.accuracyInMeters);
            if (message.speedInMps != null && Object.hasOwnProperty.call(message, "speedInMps"))
                writer.uint32(/* id 8, wireType 2 =*/66).string(message.speedInMps);
            if (message.degreesClockwiseFromMagneticNorth != null && Object.hasOwnProperty.call(message, "degreesClockwiseFromMagneticNorth"))
                writer.uint32(/* id 9, wireType 2 =*/74).string(message.degreesClockwiseFromMagneticNorth);
            if (message.axolotlSenderKeyDistributionMessage != null && Object.hasOwnProperty.call(message, "axolotlSenderKeyDistributionMessage"))
                writer.uint32(/* id 10, wireType 2 =*/82).string(message.axolotlSenderKeyDistributionMessage);
            if (message.jpegThumbnail != null && Object.hasOwnProperty.call(message, "jpegThumbnail"))
                writer.uint32(/* id 16, wireType 2 =*/130).string(message.jpegThumbnail);
            if (message.contextInfo != null && Object.hasOwnProperty.call(message, "contextInfo"))
                writer.uint32(/* id 17, wireType 2 =*/138).string(message.contextInfo);
            return writer;
        };

        /**
         * Encodes the specified LocationMessage message, length delimited. Does not implicitly {@link Message.LocationMessage.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Message.LocationMessage
         * @static
         * @param {Message.ILocationMessage} message LocationMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LocationMessage.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a LocationMessage message from the specified reader or buffer.
         * @function decode
         * @memberof Message.LocationMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Message.LocationMessage} LocationMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LocationMessage.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Message.LocationMessage();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.degreesLatitude = reader.string();
                    break;
                case 2:
                    message.degreesLongitude = reader.string();
                    break;
                case 3:
                    message.name = reader.string();
                    break;
                case 4:
                    message.address = reader.string();
                    break;
                case 5:
                    message.url = reader.string();
                    break;
                case 6:
                    message.duration = reader.string();
                    break;
                case 7:
                    message.accuracyInMeters = reader.string();
                    break;
                case 8:
                    message.speedInMps = reader.string();
                    break;
                case 9:
                    message.degreesClockwiseFromMagneticNorth = reader.string();
                    break;
                case 10:
                    message.axolotlSenderKeyDistributionMessage = reader.string();
                    break;
                case 16:
                    message.jpegThumbnail = reader.string();
                    break;
                case 17:
                    message.contextInfo = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a LocationMessage message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Message.LocationMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Message.LocationMessage} LocationMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LocationMessage.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a LocationMessage message.
         * @function verify
         * @memberof Message.LocationMessage
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        LocationMessage.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.degreesLatitude != null && message.hasOwnProperty("degreesLatitude"))
                if (!$util.isString(message.degreesLatitude))
                    return "degreesLatitude: string expected";
            if (message.degreesLongitude != null && message.hasOwnProperty("degreesLongitude"))
                if (!$util.isString(message.degreesLongitude))
                    return "degreesLongitude: string expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.address != null && message.hasOwnProperty("address"))
                if (!$util.isString(message.address))
                    return "address: string expected";
            if (message.url != null && message.hasOwnProperty("url"))
                if (!$util.isString(message.url))
                    return "url: string expected";
            if (message.duration != null && message.hasOwnProperty("duration"))
                if (!$util.isString(message.duration))
                    return "duration: string expected";
            if (message.accuracyInMeters != null && message.hasOwnProperty("accuracyInMeters"))
                if (!$util.isString(message.accuracyInMeters))
                    return "accuracyInMeters: string expected";
            if (message.speedInMps != null && message.hasOwnProperty("speedInMps"))
                if (!$util.isString(message.speedInMps))
                    return "speedInMps: string expected";
            if (message.degreesClockwiseFromMagneticNorth != null && message.hasOwnProperty("degreesClockwiseFromMagneticNorth"))
                if (!$util.isString(message.degreesClockwiseFromMagneticNorth))
                    return "degreesClockwiseFromMagneticNorth: string expected";
            if (message.axolotlSenderKeyDistributionMessage != null && message.hasOwnProperty("axolotlSenderKeyDistributionMessage"))
                if (!$util.isString(message.axolotlSenderKeyDistributionMessage))
                    return "axolotlSenderKeyDistributionMessage: string expected";
            if (message.jpegThumbnail != null && message.hasOwnProperty("jpegThumbnail"))
                if (!$util.isString(message.jpegThumbnail))
                    return "jpegThumbnail: string expected";
            if (message.contextInfo != null && message.hasOwnProperty("contextInfo"))
                if (!$util.isString(message.contextInfo))
                    return "contextInfo: string expected";
            return null;
        };

        /**
         * Creates a LocationMessage message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Message.LocationMessage
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Message.LocationMessage} LocationMessage
         */
        LocationMessage.fromObject = function fromObject(object) {
            if (object instanceof $root.Message.LocationMessage)
                return object;
            var message = new $root.Message.LocationMessage();
            if (object.degreesLatitude != null)
                message.degreesLatitude = String(object.degreesLatitude);
            if (object.degreesLongitude != null)
                message.degreesLongitude = String(object.degreesLongitude);
            if (object.name != null)
                message.name = String(object.name);
            if (object.address != null)
                message.address = String(object.address);
            if (object.url != null)
                message.url = String(object.url);
            if (object.duration != null)
                message.duration = String(object.duration);
            if (object.accuracyInMeters != null)
                message.accuracyInMeters = String(object.accuracyInMeters);
            if (object.speedInMps != null)
                message.speedInMps = String(object.speedInMps);
            if (object.degreesClockwiseFromMagneticNorth != null)
                message.degreesClockwiseFromMagneticNorth = String(object.degreesClockwiseFromMagneticNorth);
            if (object.axolotlSenderKeyDistributionMessage != null)
                message.axolotlSenderKeyDistributionMessage = String(object.axolotlSenderKeyDistributionMessage);
            if (object.jpegThumbnail != null)
                message.jpegThumbnail = String(object.jpegThumbnail);
            if (object.contextInfo != null)
                message.contextInfo = String(object.contextInfo);
            return message;
        };

        /**
         * Creates a plain object from a LocationMessage message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Message.LocationMessage
         * @static
         * @param {Message.LocationMessage} message LocationMessage
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        LocationMessage.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.degreesLatitude = "";
                object.degreesLongitude = "";
                object.name = "";
                object.address = "";
                object.url = "";
                object.duration = "";
                object.accuracyInMeters = "";
                object.speedInMps = "";
                object.degreesClockwiseFromMagneticNorth = "";
                object.axolotlSenderKeyDistributionMessage = "";
                object.jpegThumbnail = "";
                object.contextInfo = "";
            }
            if (message.degreesLatitude != null && message.hasOwnProperty("degreesLatitude"))
                object.degreesLatitude = message.degreesLatitude;
            if (message.degreesLongitude != null && message.hasOwnProperty("degreesLongitude"))
                object.degreesLongitude = message.degreesLongitude;
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.address != null && message.hasOwnProperty("address"))
                object.address = message.address;
            if (message.url != null && message.hasOwnProperty("url"))
                object.url = message.url;
            if (message.duration != null && message.hasOwnProperty("duration"))
                object.duration = message.duration;
            if (message.accuracyInMeters != null && message.hasOwnProperty("accuracyInMeters"))
                object.accuracyInMeters = message.accuracyInMeters;
            if (message.speedInMps != null && message.hasOwnProperty("speedInMps"))
                object.speedInMps = message.speedInMps;
            if (message.degreesClockwiseFromMagneticNorth != null && message.hasOwnProperty("degreesClockwiseFromMagneticNorth"))
                object.degreesClockwiseFromMagneticNorth = message.degreesClockwiseFromMagneticNorth;
            if (message.axolotlSenderKeyDistributionMessage != null && message.hasOwnProperty("axolotlSenderKeyDistributionMessage"))
                object.axolotlSenderKeyDistributionMessage = message.axolotlSenderKeyDistributionMessage;
            if (message.jpegThumbnail != null && message.hasOwnProperty("jpegThumbnail"))
                object.jpegThumbnail = message.jpegThumbnail;
            if (message.contextInfo != null && message.hasOwnProperty("contextInfo"))
                object.contextInfo = message.contextInfo;
            return object;
        };

        /**
         * Converts this LocationMessage to JSON.
         * @function toJSON
         * @memberof Message.LocationMessage
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        LocationMessage.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return LocationMessage;
    })();

    Message.ExtendedTextMessage = (function() {

        /**
         * Properties of an ExtendedTextMessage.
         * @memberof Message
         * @interface IExtendedTextMessage
         * @property {string|null} [text] ExtendedTextMessage text
         * @property {string|null} [matchedText] ExtendedTextMessage matchedText
         * @property {string|null} [canonicalUrl] ExtendedTextMessage canonicalUrl
         * @property {string|null} [description] ExtendedTextMessage description
         * @property {string|null} [title] ExtendedTextMessage title
         * @property {string|null} [jpegThumbnail] ExtendedTextMessage jpegThumbnail
         * @property {string|null} [contextInfo] ExtendedTextMessage contextInfo
         */

        /**
         * Constructs a new ExtendedTextMessage.
         * @memberof Message
         * @classdesc Represents an ExtendedTextMessage.
         * @implements IExtendedTextMessage
         * @constructor
         * @param {Message.IExtendedTextMessage=} [properties] Properties to set
         */
        function ExtendedTextMessage(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ExtendedTextMessage text.
         * @member {string} text
         * @memberof Message.ExtendedTextMessage
         * @instance
         */
        ExtendedTextMessage.prototype.text = "";

        /**
         * ExtendedTextMessage matchedText.
         * @member {string} matchedText
         * @memberof Message.ExtendedTextMessage
         * @instance
         */
        ExtendedTextMessage.prototype.matchedText = "";

        /**
         * ExtendedTextMessage canonicalUrl.
         * @member {string} canonicalUrl
         * @memberof Message.ExtendedTextMessage
         * @instance
         */
        ExtendedTextMessage.prototype.canonicalUrl = "";

        /**
         * ExtendedTextMessage description.
         * @member {string} description
         * @memberof Message.ExtendedTextMessage
         * @instance
         */
        ExtendedTextMessage.prototype.description = "";

        /**
         * ExtendedTextMessage title.
         * @member {string} title
         * @memberof Message.ExtendedTextMessage
         * @instance
         */
        ExtendedTextMessage.prototype.title = "";

        /**
         * ExtendedTextMessage jpegThumbnail.
         * @member {string} jpegThumbnail
         * @memberof Message.ExtendedTextMessage
         * @instance
         */
        ExtendedTextMessage.prototype.jpegThumbnail = "";

        /**
         * ExtendedTextMessage contextInfo.
         * @member {string} contextInfo
         * @memberof Message.ExtendedTextMessage
         * @instance
         */
        ExtendedTextMessage.prototype.contextInfo = "";

        /**
         * Creates a new ExtendedTextMessage instance using the specified properties.
         * @function create
         * @memberof Message.ExtendedTextMessage
         * @static
         * @param {Message.IExtendedTextMessage=} [properties] Properties to set
         * @returns {Message.ExtendedTextMessage} ExtendedTextMessage instance
         */
        ExtendedTextMessage.create = function create(properties) {
            return new ExtendedTextMessage(properties);
        };

        /**
         * Encodes the specified ExtendedTextMessage message. Does not implicitly {@link Message.ExtendedTextMessage.verify|verify} messages.
         * @function encode
         * @memberof Message.ExtendedTextMessage
         * @static
         * @param {Message.IExtendedTextMessage} message ExtendedTextMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ExtendedTextMessage.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.text != null && Object.hasOwnProperty.call(message, "text"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.text);
            if (message.matchedText != null && Object.hasOwnProperty.call(message, "matchedText"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.matchedText);
            if (message.canonicalUrl != null && Object.hasOwnProperty.call(message, "canonicalUrl"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.canonicalUrl);
            if (message.description != null && Object.hasOwnProperty.call(message, "description"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.description);
            if (message.title != null && Object.hasOwnProperty.call(message, "title"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.title);
            if (message.jpegThumbnail != null && Object.hasOwnProperty.call(message, "jpegThumbnail"))
                writer.uint32(/* id 16, wireType 2 =*/130).string(message.jpegThumbnail);
            if (message.contextInfo != null && Object.hasOwnProperty.call(message, "contextInfo"))
                writer.uint32(/* id 17, wireType 2 =*/138).string(message.contextInfo);
            return writer;
        };

        /**
         * Encodes the specified ExtendedTextMessage message, length delimited. Does not implicitly {@link Message.ExtendedTextMessage.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Message.ExtendedTextMessage
         * @static
         * @param {Message.IExtendedTextMessage} message ExtendedTextMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ExtendedTextMessage.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an ExtendedTextMessage message from the specified reader or buffer.
         * @function decode
         * @memberof Message.ExtendedTextMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Message.ExtendedTextMessage} ExtendedTextMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ExtendedTextMessage.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Message.ExtendedTextMessage();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.text = reader.string();
                    break;
                case 2:
                    message.matchedText = reader.string();
                    break;
                case 4:
                    message.canonicalUrl = reader.string();
                    break;
                case 5:
                    message.description = reader.string();
                    break;
                case 6:
                    message.title = reader.string();
                    break;
                case 16:
                    message.jpegThumbnail = reader.string();
                    break;
                case 17:
                    message.contextInfo = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an ExtendedTextMessage message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Message.ExtendedTextMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Message.ExtendedTextMessage} ExtendedTextMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ExtendedTextMessage.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an ExtendedTextMessage message.
         * @function verify
         * @memberof Message.ExtendedTextMessage
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ExtendedTextMessage.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.text != null && message.hasOwnProperty("text"))
                if (!$util.isString(message.text))
                    return "text: string expected";
            if (message.matchedText != null && message.hasOwnProperty("matchedText"))
                if (!$util.isString(message.matchedText))
                    return "matchedText: string expected";
            if (message.canonicalUrl != null && message.hasOwnProperty("canonicalUrl"))
                if (!$util.isString(message.canonicalUrl))
                    return "canonicalUrl: string expected";
            if (message.description != null && message.hasOwnProperty("description"))
                if (!$util.isString(message.description))
                    return "description: string expected";
            if (message.title != null && message.hasOwnProperty("title"))
                if (!$util.isString(message.title))
                    return "title: string expected";
            if (message.jpegThumbnail != null && message.hasOwnProperty("jpegThumbnail"))
                if (!$util.isString(message.jpegThumbnail))
                    return "jpegThumbnail: string expected";
            if (message.contextInfo != null && message.hasOwnProperty("contextInfo"))
                if (!$util.isString(message.contextInfo))
                    return "contextInfo: string expected";
            return null;
        };

        /**
         * Creates an ExtendedTextMessage message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Message.ExtendedTextMessage
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Message.ExtendedTextMessage} ExtendedTextMessage
         */
        ExtendedTextMessage.fromObject = function fromObject(object) {
            if (object instanceof $root.Message.ExtendedTextMessage)
                return object;
            var message = new $root.Message.ExtendedTextMessage();
            if (object.text != null)
                message.text = String(object.text);
            if (object.matchedText != null)
                message.matchedText = String(object.matchedText);
            if (object.canonicalUrl != null)
                message.canonicalUrl = String(object.canonicalUrl);
            if (object.description != null)
                message.description = String(object.description);
            if (object.title != null)
                message.title = String(object.title);
            if (object.jpegThumbnail != null)
                message.jpegThumbnail = String(object.jpegThumbnail);
            if (object.contextInfo != null)
                message.contextInfo = String(object.contextInfo);
            return message;
        };

        /**
         * Creates a plain object from an ExtendedTextMessage message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Message.ExtendedTextMessage
         * @static
         * @param {Message.ExtendedTextMessage} message ExtendedTextMessage
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ExtendedTextMessage.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.text = "";
                object.matchedText = "";
                object.canonicalUrl = "";
                object.description = "";
                object.title = "";
                object.jpegThumbnail = "";
                object.contextInfo = "";
            }
            if (message.text != null && message.hasOwnProperty("text"))
                object.text = message.text;
            if (message.matchedText != null && message.hasOwnProperty("matchedText"))
                object.matchedText = message.matchedText;
            if (message.canonicalUrl != null && message.hasOwnProperty("canonicalUrl"))
                object.canonicalUrl = message.canonicalUrl;
            if (message.description != null && message.hasOwnProperty("description"))
                object.description = message.description;
            if (message.title != null && message.hasOwnProperty("title"))
                object.title = message.title;
            if (message.jpegThumbnail != null && message.hasOwnProperty("jpegThumbnail"))
                object.jpegThumbnail = message.jpegThumbnail;
            if (message.contextInfo != null && message.hasOwnProperty("contextInfo"))
                object.contextInfo = message.contextInfo;
            return object;
        };

        /**
         * Converts this ExtendedTextMessage to JSON.
         * @function toJSON
         * @memberof Message.ExtendedTextMessage
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ExtendedTextMessage.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ExtendedTextMessage;
    })();

    Message.DocumentMessage = (function() {

        /**
         * Properties of a DocumentMessage.
         * @memberof Message
         * @interface IDocumentMessage
         * @property {string|null} [url] DocumentMessage url
         * @property {string|null} [mimetype] DocumentMessage mimetype
         * @property {string|null} [title] DocumentMessage title
         * @property {string|null} [fileSha256] DocumentMessage fileSha256
         * @property {string|null} [fileLength] DocumentMessage fileLength
         * @property {string|null} [pageCount] DocumentMessage pageCount
         * @property {string|null} [mediaKey] DocumentMessage mediaKey
         * @property {string|null} [fileName] DocumentMessage fileName
         * @property {string|null} [jpegThumbnail] DocumentMessage jpegThumbnail
         * @property {string|null} [contextInfo] DocumentMessage contextInfo
         */

        /**
         * Constructs a new DocumentMessage.
         * @memberof Message
         * @classdesc Represents a DocumentMessage.
         * @implements IDocumentMessage
         * @constructor
         * @param {Message.IDocumentMessage=} [properties] Properties to set
         */
        function DocumentMessage(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * DocumentMessage url.
         * @member {string} url
         * @memberof Message.DocumentMessage
         * @instance
         */
        DocumentMessage.prototype.url = "";

        /**
         * DocumentMessage mimetype.
         * @member {string} mimetype
         * @memberof Message.DocumentMessage
         * @instance
         */
        DocumentMessage.prototype.mimetype = "";

        /**
         * DocumentMessage title.
         * @member {string} title
         * @memberof Message.DocumentMessage
         * @instance
         */
        DocumentMessage.prototype.title = "";

        /**
         * DocumentMessage fileSha256.
         * @member {string} fileSha256
         * @memberof Message.DocumentMessage
         * @instance
         */
        DocumentMessage.prototype.fileSha256 = "";

        /**
         * DocumentMessage fileLength.
         * @member {string} fileLength
         * @memberof Message.DocumentMessage
         * @instance
         */
        DocumentMessage.prototype.fileLength = "";

        /**
         * DocumentMessage pageCount.
         * @member {string} pageCount
         * @memberof Message.DocumentMessage
         * @instance
         */
        DocumentMessage.prototype.pageCount = "";

        /**
         * DocumentMessage mediaKey.
         * @member {string} mediaKey
         * @memberof Message.DocumentMessage
         * @instance
         */
        DocumentMessage.prototype.mediaKey = "";

        /**
         * DocumentMessage fileName.
         * @member {string} fileName
         * @memberof Message.DocumentMessage
         * @instance
         */
        DocumentMessage.prototype.fileName = "";

        /**
         * DocumentMessage jpegThumbnail.
         * @member {string} jpegThumbnail
         * @memberof Message.DocumentMessage
         * @instance
         */
        DocumentMessage.prototype.jpegThumbnail = "";

        /**
         * DocumentMessage contextInfo.
         * @member {string} contextInfo
         * @memberof Message.DocumentMessage
         * @instance
         */
        DocumentMessage.prototype.contextInfo = "";

        /**
         * Creates a new DocumentMessage instance using the specified properties.
         * @function create
         * @memberof Message.DocumentMessage
         * @static
         * @param {Message.IDocumentMessage=} [properties] Properties to set
         * @returns {Message.DocumentMessage} DocumentMessage instance
         */
        DocumentMessage.create = function create(properties) {
            return new DocumentMessage(properties);
        };

        /**
         * Encodes the specified DocumentMessage message. Does not implicitly {@link Message.DocumentMessage.verify|verify} messages.
         * @function encode
         * @memberof Message.DocumentMessage
         * @static
         * @param {Message.IDocumentMessage} message DocumentMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DocumentMessage.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.url != null && Object.hasOwnProperty.call(message, "url"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.url);
            if (message.mimetype != null && Object.hasOwnProperty.call(message, "mimetype"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.mimetype);
            if (message.title != null && Object.hasOwnProperty.call(message, "title"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.title);
            if (message.fileSha256 != null && Object.hasOwnProperty.call(message, "fileSha256"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.fileSha256);
            if (message.fileLength != null && Object.hasOwnProperty.call(message, "fileLength"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.fileLength);
            if (message.pageCount != null && Object.hasOwnProperty.call(message, "pageCount"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.pageCount);
            if (message.mediaKey != null && Object.hasOwnProperty.call(message, "mediaKey"))
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.mediaKey);
            if (message.fileName != null && Object.hasOwnProperty.call(message, "fileName"))
                writer.uint32(/* id 8, wireType 2 =*/66).string(message.fileName);
            if (message.jpegThumbnail != null && Object.hasOwnProperty.call(message, "jpegThumbnail"))
                writer.uint32(/* id 16, wireType 2 =*/130).string(message.jpegThumbnail);
            if (message.contextInfo != null && Object.hasOwnProperty.call(message, "contextInfo"))
                writer.uint32(/* id 17, wireType 2 =*/138).string(message.contextInfo);
            return writer;
        };

        /**
         * Encodes the specified DocumentMessage message, length delimited. Does not implicitly {@link Message.DocumentMessage.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Message.DocumentMessage
         * @static
         * @param {Message.IDocumentMessage} message DocumentMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DocumentMessage.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DocumentMessage message from the specified reader or buffer.
         * @function decode
         * @memberof Message.DocumentMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Message.DocumentMessage} DocumentMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DocumentMessage.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Message.DocumentMessage();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.url = reader.string();
                    break;
                case 2:
                    message.mimetype = reader.string();
                    break;
                case 3:
                    message.title = reader.string();
                    break;
                case 4:
                    message.fileSha256 = reader.string();
                    break;
                case 5:
                    message.fileLength = reader.string();
                    break;
                case 6:
                    message.pageCount = reader.string();
                    break;
                case 7:
                    message.mediaKey = reader.string();
                    break;
                case 8:
                    message.fileName = reader.string();
                    break;
                case 16:
                    message.jpegThumbnail = reader.string();
                    break;
                case 17:
                    message.contextInfo = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a DocumentMessage message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Message.DocumentMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Message.DocumentMessage} DocumentMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DocumentMessage.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DocumentMessage message.
         * @function verify
         * @memberof Message.DocumentMessage
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DocumentMessage.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.url != null && message.hasOwnProperty("url"))
                if (!$util.isString(message.url))
                    return "url: string expected";
            if (message.mimetype != null && message.hasOwnProperty("mimetype"))
                if (!$util.isString(message.mimetype))
                    return "mimetype: string expected";
            if (message.title != null && message.hasOwnProperty("title"))
                if (!$util.isString(message.title))
                    return "title: string expected";
            if (message.fileSha256 != null && message.hasOwnProperty("fileSha256"))
                if (!$util.isString(message.fileSha256))
                    return "fileSha256: string expected";
            if (message.fileLength != null && message.hasOwnProperty("fileLength"))
                if (!$util.isString(message.fileLength))
                    return "fileLength: string expected";
            if (message.pageCount != null && message.hasOwnProperty("pageCount"))
                if (!$util.isString(message.pageCount))
                    return "pageCount: string expected";
            if (message.mediaKey != null && message.hasOwnProperty("mediaKey"))
                if (!$util.isString(message.mediaKey))
                    return "mediaKey: string expected";
            if (message.fileName != null && message.hasOwnProperty("fileName"))
                if (!$util.isString(message.fileName))
                    return "fileName: string expected";
            if (message.jpegThumbnail != null && message.hasOwnProperty("jpegThumbnail"))
                if (!$util.isString(message.jpegThumbnail))
                    return "jpegThumbnail: string expected";
            if (message.contextInfo != null && message.hasOwnProperty("contextInfo"))
                if (!$util.isString(message.contextInfo))
                    return "contextInfo: string expected";
            return null;
        };

        /**
         * Creates a DocumentMessage message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Message.DocumentMessage
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Message.DocumentMessage} DocumentMessage
         */
        DocumentMessage.fromObject = function fromObject(object) {
            if (object instanceof $root.Message.DocumentMessage)
                return object;
            var message = new $root.Message.DocumentMessage();
            if (object.url != null)
                message.url = String(object.url);
            if (object.mimetype != null)
                message.mimetype = String(object.mimetype);
            if (object.title != null)
                message.title = String(object.title);
            if (object.fileSha256 != null)
                message.fileSha256 = String(object.fileSha256);
            if (object.fileLength != null)
                message.fileLength = String(object.fileLength);
            if (object.pageCount != null)
                message.pageCount = String(object.pageCount);
            if (object.mediaKey != null)
                message.mediaKey = String(object.mediaKey);
            if (object.fileName != null)
                message.fileName = String(object.fileName);
            if (object.jpegThumbnail != null)
                message.jpegThumbnail = String(object.jpegThumbnail);
            if (object.contextInfo != null)
                message.contextInfo = String(object.contextInfo);
            return message;
        };

        /**
         * Creates a plain object from a DocumentMessage message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Message.DocumentMessage
         * @static
         * @param {Message.DocumentMessage} message DocumentMessage
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DocumentMessage.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.url = "";
                object.mimetype = "";
                object.title = "";
                object.fileSha256 = "";
                object.fileLength = "";
                object.pageCount = "";
                object.mediaKey = "";
                object.fileName = "";
                object.jpegThumbnail = "";
                object.contextInfo = "";
            }
            if (message.url != null && message.hasOwnProperty("url"))
                object.url = message.url;
            if (message.mimetype != null && message.hasOwnProperty("mimetype"))
                object.mimetype = message.mimetype;
            if (message.title != null && message.hasOwnProperty("title"))
                object.title = message.title;
            if (message.fileSha256 != null && message.hasOwnProperty("fileSha256"))
                object.fileSha256 = message.fileSha256;
            if (message.fileLength != null && message.hasOwnProperty("fileLength"))
                object.fileLength = message.fileLength;
            if (message.pageCount != null && message.hasOwnProperty("pageCount"))
                object.pageCount = message.pageCount;
            if (message.mediaKey != null && message.hasOwnProperty("mediaKey"))
                object.mediaKey = message.mediaKey;
            if (message.fileName != null && message.hasOwnProperty("fileName"))
                object.fileName = message.fileName;
            if (message.jpegThumbnail != null && message.hasOwnProperty("jpegThumbnail"))
                object.jpegThumbnail = message.jpegThumbnail;
            if (message.contextInfo != null && message.hasOwnProperty("contextInfo"))
                object.contextInfo = message.contextInfo;
            return object;
        };

        /**
         * Converts this DocumentMessage to JSON.
         * @function toJSON
         * @memberof Message.DocumentMessage
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DocumentMessage.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return DocumentMessage;
    })();

    Message.AudioMessage = (function() {

        /**
         * Properties of an AudioMessage.
         * @memberof Message
         * @interface IAudioMessage
         * @property {string|null} [url] AudioMessage url
         * @property {string|null} [mimetype] AudioMessage mimetype
         * @property {string|null} [fileSha256] AudioMessage fileSha256
         * @property {string|null} [fileLength] AudioMessage fileLength
         * @property {string|null} [seconds] AudioMessage seconds
         * @property {string|null} [ptt] AudioMessage ptt
         * @property {string|null} [mediaKey] AudioMessage mediaKey
         * @property {string|null} [contextInfo] AudioMessage contextInfo
         * @property {string|null} [streamingSidecar] AudioMessage streamingSidecar
         */

        /**
         * Constructs a new AudioMessage.
         * @memberof Message
         * @classdesc Represents an AudioMessage.
         * @implements IAudioMessage
         * @constructor
         * @param {Message.IAudioMessage=} [properties] Properties to set
         */
        function AudioMessage(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AudioMessage url.
         * @member {string} url
         * @memberof Message.AudioMessage
         * @instance
         */
        AudioMessage.prototype.url = "";

        /**
         * AudioMessage mimetype.
         * @member {string} mimetype
         * @memberof Message.AudioMessage
         * @instance
         */
        AudioMessage.prototype.mimetype = "";

        /**
         * AudioMessage fileSha256.
         * @member {string} fileSha256
         * @memberof Message.AudioMessage
         * @instance
         */
        AudioMessage.prototype.fileSha256 = "";

        /**
         * AudioMessage fileLength.
         * @member {string} fileLength
         * @memberof Message.AudioMessage
         * @instance
         */
        AudioMessage.prototype.fileLength = "";

        /**
         * AudioMessage seconds.
         * @member {string} seconds
         * @memberof Message.AudioMessage
         * @instance
         */
        AudioMessage.prototype.seconds = "";

        /**
         * AudioMessage ptt.
         * @member {string} ptt
         * @memberof Message.AudioMessage
         * @instance
         */
        AudioMessage.prototype.ptt = "";

        /**
         * AudioMessage mediaKey.
         * @member {string} mediaKey
         * @memberof Message.AudioMessage
         * @instance
         */
        AudioMessage.prototype.mediaKey = "";

        /**
         * AudioMessage contextInfo.
         * @member {string} contextInfo
         * @memberof Message.AudioMessage
         * @instance
         */
        AudioMessage.prototype.contextInfo = "";

        /**
         * AudioMessage streamingSidecar.
         * @member {string} streamingSidecar
         * @memberof Message.AudioMessage
         * @instance
         */
        AudioMessage.prototype.streamingSidecar = "";

        /**
         * Creates a new AudioMessage instance using the specified properties.
         * @function create
         * @memberof Message.AudioMessage
         * @static
         * @param {Message.IAudioMessage=} [properties] Properties to set
         * @returns {Message.AudioMessage} AudioMessage instance
         */
        AudioMessage.create = function create(properties) {
            return new AudioMessage(properties);
        };

        /**
         * Encodes the specified AudioMessage message. Does not implicitly {@link Message.AudioMessage.verify|verify} messages.
         * @function encode
         * @memberof Message.AudioMessage
         * @static
         * @param {Message.IAudioMessage} message AudioMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AudioMessage.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.url != null && Object.hasOwnProperty.call(message, "url"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.url);
            if (message.mimetype != null && Object.hasOwnProperty.call(message, "mimetype"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.mimetype);
            if (message.fileSha256 != null && Object.hasOwnProperty.call(message, "fileSha256"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.fileSha256);
            if (message.fileLength != null && Object.hasOwnProperty.call(message, "fileLength"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.fileLength);
            if (message.seconds != null && Object.hasOwnProperty.call(message, "seconds"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.seconds);
            if (message.ptt != null && Object.hasOwnProperty.call(message, "ptt"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.ptt);
            if (message.mediaKey != null && Object.hasOwnProperty.call(message, "mediaKey"))
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.mediaKey);
            if (message.contextInfo != null && Object.hasOwnProperty.call(message, "contextInfo"))
                writer.uint32(/* id 17, wireType 2 =*/138).string(message.contextInfo);
            if (message.streamingSidecar != null && Object.hasOwnProperty.call(message, "streamingSidecar"))
                writer.uint32(/* id 18, wireType 2 =*/146).string(message.streamingSidecar);
            return writer;
        };

        /**
         * Encodes the specified AudioMessage message, length delimited. Does not implicitly {@link Message.AudioMessage.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Message.AudioMessage
         * @static
         * @param {Message.IAudioMessage} message AudioMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AudioMessage.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AudioMessage message from the specified reader or buffer.
         * @function decode
         * @memberof Message.AudioMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Message.AudioMessage} AudioMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AudioMessage.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Message.AudioMessage();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.url = reader.string();
                    break;
                case 2:
                    message.mimetype = reader.string();
                    break;
                case 3:
                    message.fileSha256 = reader.string();
                    break;
                case 4:
                    message.fileLength = reader.string();
                    break;
                case 5:
                    message.seconds = reader.string();
                    break;
                case 6:
                    message.ptt = reader.string();
                    break;
                case 7:
                    message.mediaKey = reader.string();
                    break;
                case 17:
                    message.contextInfo = reader.string();
                    break;
                case 18:
                    message.streamingSidecar = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an AudioMessage message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Message.AudioMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Message.AudioMessage} AudioMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AudioMessage.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AudioMessage message.
         * @function verify
         * @memberof Message.AudioMessage
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AudioMessage.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.url != null && message.hasOwnProperty("url"))
                if (!$util.isString(message.url))
                    return "url: string expected";
            if (message.mimetype != null && message.hasOwnProperty("mimetype"))
                if (!$util.isString(message.mimetype))
                    return "mimetype: string expected";
            if (message.fileSha256 != null && message.hasOwnProperty("fileSha256"))
                if (!$util.isString(message.fileSha256))
                    return "fileSha256: string expected";
            if (message.fileLength != null && message.hasOwnProperty("fileLength"))
                if (!$util.isString(message.fileLength))
                    return "fileLength: string expected";
            if (message.seconds != null && message.hasOwnProperty("seconds"))
                if (!$util.isString(message.seconds))
                    return "seconds: string expected";
            if (message.ptt != null && message.hasOwnProperty("ptt"))
                if (!$util.isString(message.ptt))
                    return "ptt: string expected";
            if (message.mediaKey != null && message.hasOwnProperty("mediaKey"))
                if (!$util.isString(message.mediaKey))
                    return "mediaKey: string expected";
            if (message.contextInfo != null && message.hasOwnProperty("contextInfo"))
                if (!$util.isString(message.contextInfo))
                    return "contextInfo: string expected";
            if (message.streamingSidecar != null && message.hasOwnProperty("streamingSidecar"))
                if (!$util.isString(message.streamingSidecar))
                    return "streamingSidecar: string expected";
            return null;
        };

        /**
         * Creates an AudioMessage message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Message.AudioMessage
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Message.AudioMessage} AudioMessage
         */
        AudioMessage.fromObject = function fromObject(object) {
            if (object instanceof $root.Message.AudioMessage)
                return object;
            var message = new $root.Message.AudioMessage();
            if (object.url != null)
                message.url = String(object.url);
            if (object.mimetype != null)
                message.mimetype = String(object.mimetype);
            if (object.fileSha256 != null)
                message.fileSha256 = String(object.fileSha256);
            if (object.fileLength != null)
                message.fileLength = String(object.fileLength);
            if (object.seconds != null)
                message.seconds = String(object.seconds);
            if (object.ptt != null)
                message.ptt = String(object.ptt);
            if (object.mediaKey != null)
                message.mediaKey = String(object.mediaKey);
            if (object.contextInfo != null)
                message.contextInfo = String(object.contextInfo);
            if (object.streamingSidecar != null)
                message.streamingSidecar = String(object.streamingSidecar);
            return message;
        };

        /**
         * Creates a plain object from an AudioMessage message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Message.AudioMessage
         * @static
         * @param {Message.AudioMessage} message AudioMessage
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AudioMessage.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.url = "";
                object.mimetype = "";
                object.fileSha256 = "";
                object.fileLength = "";
                object.seconds = "";
                object.ptt = "";
                object.mediaKey = "";
                object.contextInfo = "";
                object.streamingSidecar = "";
            }
            if (message.url != null && message.hasOwnProperty("url"))
                object.url = message.url;
            if (message.mimetype != null && message.hasOwnProperty("mimetype"))
                object.mimetype = message.mimetype;
            if (message.fileSha256 != null && message.hasOwnProperty("fileSha256"))
                object.fileSha256 = message.fileSha256;
            if (message.fileLength != null && message.hasOwnProperty("fileLength"))
                object.fileLength = message.fileLength;
            if (message.seconds != null && message.hasOwnProperty("seconds"))
                object.seconds = message.seconds;
            if (message.ptt != null && message.hasOwnProperty("ptt"))
                object.ptt = message.ptt;
            if (message.mediaKey != null && message.hasOwnProperty("mediaKey"))
                object.mediaKey = message.mediaKey;
            if (message.contextInfo != null && message.hasOwnProperty("contextInfo"))
                object.contextInfo = message.contextInfo;
            if (message.streamingSidecar != null && message.hasOwnProperty("streamingSidecar"))
                object.streamingSidecar = message.streamingSidecar;
            return object;
        };

        /**
         * Converts this AudioMessage to JSON.
         * @function toJSON
         * @memberof Message.AudioMessage
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AudioMessage.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return AudioMessage;
    })();

    Message.VideoMessage = (function() {

        /**
         * Properties of a VideoMessage.
         * @memberof Message
         * @interface IVideoMessage
         * @property {string|null} [url] VideoMessage url
         * @property {string|null} [mimetype] VideoMessage mimetype
         * @property {string|null} [fileSha256] VideoMessage fileSha256
         * @property {string|null} [fileLength] VideoMessage fileLength
         * @property {string|null} [seconds] VideoMessage seconds
         * @property {string|null} [mediaKey] VideoMessage mediaKey
         * @property {string|null} [caption] VideoMessage caption
         * @property {string|null} [gifPlayback] VideoMessage gifPlayback
         * @property {string|null} [height] VideoMessage height
         * @property {string|null} [width] VideoMessage width
         * @property {string|null} [jpegThumbnail] VideoMessage jpegThumbnail
         * @property {string|null} [contextInfo] VideoMessage contextInfo
         * @property {string|null} [streamingSidecar] VideoMessage streamingSidecar
         * @property {string|null} [gifAttribution] VideoMessage gifAttribution
         */

        /**
         * Constructs a new VideoMessage.
         * @memberof Message
         * @classdesc Represents a VideoMessage.
         * @implements IVideoMessage
         * @constructor
         * @param {Message.IVideoMessage=} [properties] Properties to set
         */
        function VideoMessage(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * VideoMessage url.
         * @member {string} url
         * @memberof Message.VideoMessage
         * @instance
         */
        VideoMessage.prototype.url = "";

        /**
         * VideoMessage mimetype.
         * @member {string} mimetype
         * @memberof Message.VideoMessage
         * @instance
         */
        VideoMessage.prototype.mimetype = "";

        /**
         * VideoMessage fileSha256.
         * @member {string} fileSha256
         * @memberof Message.VideoMessage
         * @instance
         */
        VideoMessage.prototype.fileSha256 = "";

        /**
         * VideoMessage fileLength.
         * @member {string} fileLength
         * @memberof Message.VideoMessage
         * @instance
         */
        VideoMessage.prototype.fileLength = "";

        /**
         * VideoMessage seconds.
         * @member {string} seconds
         * @memberof Message.VideoMessage
         * @instance
         */
        VideoMessage.prototype.seconds = "";

        /**
         * VideoMessage mediaKey.
         * @member {string} mediaKey
         * @memberof Message.VideoMessage
         * @instance
         */
        VideoMessage.prototype.mediaKey = "";

        /**
         * VideoMessage caption.
         * @member {string} caption
         * @memberof Message.VideoMessage
         * @instance
         */
        VideoMessage.prototype.caption = "";

        /**
         * VideoMessage gifPlayback.
         * @member {string} gifPlayback
         * @memberof Message.VideoMessage
         * @instance
         */
        VideoMessage.prototype.gifPlayback = "";

        /**
         * VideoMessage height.
         * @member {string} height
         * @memberof Message.VideoMessage
         * @instance
         */
        VideoMessage.prototype.height = "";

        /**
         * VideoMessage width.
         * @member {string} width
         * @memberof Message.VideoMessage
         * @instance
         */
        VideoMessage.prototype.width = "";

        /**
         * VideoMessage jpegThumbnail.
         * @member {string} jpegThumbnail
         * @memberof Message.VideoMessage
         * @instance
         */
        VideoMessage.prototype.jpegThumbnail = "";

        /**
         * VideoMessage contextInfo.
         * @member {string} contextInfo
         * @memberof Message.VideoMessage
         * @instance
         */
        VideoMessage.prototype.contextInfo = "";

        /**
         * VideoMessage streamingSidecar.
         * @member {string} streamingSidecar
         * @memberof Message.VideoMessage
         * @instance
         */
        VideoMessage.prototype.streamingSidecar = "";

        /**
         * VideoMessage gifAttribution.
         * @member {string} gifAttribution
         * @memberof Message.VideoMessage
         * @instance
         */
        VideoMessage.prototype.gifAttribution = "";

        /**
         * Creates a new VideoMessage instance using the specified properties.
         * @function create
         * @memberof Message.VideoMessage
         * @static
         * @param {Message.IVideoMessage=} [properties] Properties to set
         * @returns {Message.VideoMessage} VideoMessage instance
         */
        VideoMessage.create = function create(properties) {
            return new VideoMessage(properties);
        };

        /**
         * Encodes the specified VideoMessage message. Does not implicitly {@link Message.VideoMessage.verify|verify} messages.
         * @function encode
         * @memberof Message.VideoMessage
         * @static
         * @param {Message.IVideoMessage} message VideoMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        VideoMessage.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.url != null && Object.hasOwnProperty.call(message, "url"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.url);
            if (message.mimetype != null && Object.hasOwnProperty.call(message, "mimetype"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.mimetype);
            if (message.fileSha256 != null && Object.hasOwnProperty.call(message, "fileSha256"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.fileSha256);
            if (message.fileLength != null && Object.hasOwnProperty.call(message, "fileLength"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.fileLength);
            if (message.seconds != null && Object.hasOwnProperty.call(message, "seconds"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.seconds);
            if (message.mediaKey != null && Object.hasOwnProperty.call(message, "mediaKey"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.mediaKey);
            if (message.caption != null && Object.hasOwnProperty.call(message, "caption"))
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.caption);
            if (message.gifPlayback != null && Object.hasOwnProperty.call(message, "gifPlayback"))
                writer.uint32(/* id 8, wireType 2 =*/66).string(message.gifPlayback);
            if (message.height != null && Object.hasOwnProperty.call(message, "height"))
                writer.uint32(/* id 9, wireType 2 =*/74).string(message.height);
            if (message.width != null && Object.hasOwnProperty.call(message, "width"))
                writer.uint32(/* id 10, wireType 2 =*/82).string(message.width);
            if (message.jpegThumbnail != null && Object.hasOwnProperty.call(message, "jpegThumbnail"))
                writer.uint32(/* id 16, wireType 2 =*/130).string(message.jpegThumbnail);
            if (message.contextInfo != null && Object.hasOwnProperty.call(message, "contextInfo"))
                writer.uint32(/* id 17, wireType 2 =*/138).string(message.contextInfo);
            if (message.streamingSidecar != null && Object.hasOwnProperty.call(message, "streamingSidecar"))
                writer.uint32(/* id 18, wireType 2 =*/146).string(message.streamingSidecar);
            if (message.gifAttribution != null && Object.hasOwnProperty.call(message, "gifAttribution"))
                writer.uint32(/* id 19, wireType 2 =*/154).string(message.gifAttribution);
            return writer;
        };

        /**
         * Encodes the specified VideoMessage message, length delimited. Does not implicitly {@link Message.VideoMessage.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Message.VideoMessage
         * @static
         * @param {Message.IVideoMessage} message VideoMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        VideoMessage.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a VideoMessage message from the specified reader or buffer.
         * @function decode
         * @memberof Message.VideoMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Message.VideoMessage} VideoMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        VideoMessage.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Message.VideoMessage();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.url = reader.string();
                    break;
                case 2:
                    message.mimetype = reader.string();
                    break;
                case 3:
                    message.fileSha256 = reader.string();
                    break;
                case 4:
                    message.fileLength = reader.string();
                    break;
                case 5:
                    message.seconds = reader.string();
                    break;
                case 6:
                    message.mediaKey = reader.string();
                    break;
                case 7:
                    message.caption = reader.string();
                    break;
                case 8:
                    message.gifPlayback = reader.string();
                    break;
                case 9:
                    message.height = reader.string();
                    break;
                case 10:
                    message.width = reader.string();
                    break;
                case 16:
                    message.jpegThumbnail = reader.string();
                    break;
                case 17:
                    message.contextInfo = reader.string();
                    break;
                case 18:
                    message.streamingSidecar = reader.string();
                    break;
                case 19:
                    message.gifAttribution = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a VideoMessage message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Message.VideoMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Message.VideoMessage} VideoMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        VideoMessage.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a VideoMessage message.
         * @function verify
         * @memberof Message.VideoMessage
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        VideoMessage.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.url != null && message.hasOwnProperty("url"))
                if (!$util.isString(message.url))
                    return "url: string expected";
            if (message.mimetype != null && message.hasOwnProperty("mimetype"))
                if (!$util.isString(message.mimetype))
                    return "mimetype: string expected";
            if (message.fileSha256 != null && message.hasOwnProperty("fileSha256"))
                if (!$util.isString(message.fileSha256))
                    return "fileSha256: string expected";
            if (message.fileLength != null && message.hasOwnProperty("fileLength"))
                if (!$util.isString(message.fileLength))
                    return "fileLength: string expected";
            if (message.seconds != null && message.hasOwnProperty("seconds"))
                if (!$util.isString(message.seconds))
                    return "seconds: string expected";
            if (message.mediaKey != null && message.hasOwnProperty("mediaKey"))
                if (!$util.isString(message.mediaKey))
                    return "mediaKey: string expected";
            if (message.caption != null && message.hasOwnProperty("caption"))
                if (!$util.isString(message.caption))
                    return "caption: string expected";
            if (message.gifPlayback != null && message.hasOwnProperty("gifPlayback"))
                if (!$util.isString(message.gifPlayback))
                    return "gifPlayback: string expected";
            if (message.height != null && message.hasOwnProperty("height"))
                if (!$util.isString(message.height))
                    return "height: string expected";
            if (message.width != null && message.hasOwnProperty("width"))
                if (!$util.isString(message.width))
                    return "width: string expected";
            if (message.jpegThumbnail != null && message.hasOwnProperty("jpegThumbnail"))
                if (!$util.isString(message.jpegThumbnail))
                    return "jpegThumbnail: string expected";
            if (message.contextInfo != null && message.hasOwnProperty("contextInfo"))
                if (!$util.isString(message.contextInfo))
                    return "contextInfo: string expected";
            if (message.streamingSidecar != null && message.hasOwnProperty("streamingSidecar"))
                if (!$util.isString(message.streamingSidecar))
                    return "streamingSidecar: string expected";
            if (message.gifAttribution != null && message.hasOwnProperty("gifAttribution"))
                if (!$util.isString(message.gifAttribution))
                    return "gifAttribution: string expected";
            return null;
        };

        /**
         * Creates a VideoMessage message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Message.VideoMessage
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Message.VideoMessage} VideoMessage
         */
        VideoMessage.fromObject = function fromObject(object) {
            if (object instanceof $root.Message.VideoMessage)
                return object;
            var message = new $root.Message.VideoMessage();
            if (object.url != null)
                message.url = String(object.url);
            if (object.mimetype != null)
                message.mimetype = String(object.mimetype);
            if (object.fileSha256 != null)
                message.fileSha256 = String(object.fileSha256);
            if (object.fileLength != null)
                message.fileLength = String(object.fileLength);
            if (object.seconds != null)
                message.seconds = String(object.seconds);
            if (object.mediaKey != null)
                message.mediaKey = String(object.mediaKey);
            if (object.caption != null)
                message.caption = String(object.caption);
            if (object.gifPlayback != null)
                message.gifPlayback = String(object.gifPlayback);
            if (object.height != null)
                message.height = String(object.height);
            if (object.width != null)
                message.width = String(object.width);
            if (object.jpegThumbnail != null)
                message.jpegThumbnail = String(object.jpegThumbnail);
            if (object.contextInfo != null)
                message.contextInfo = String(object.contextInfo);
            if (object.streamingSidecar != null)
                message.streamingSidecar = String(object.streamingSidecar);
            if (object.gifAttribution != null)
                message.gifAttribution = String(object.gifAttribution);
            return message;
        };

        /**
         * Creates a plain object from a VideoMessage message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Message.VideoMessage
         * @static
         * @param {Message.VideoMessage} message VideoMessage
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        VideoMessage.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.url = "";
                object.mimetype = "";
                object.fileSha256 = "";
                object.fileLength = "";
                object.seconds = "";
                object.mediaKey = "";
                object.caption = "";
                object.gifPlayback = "";
                object.height = "";
                object.width = "";
                object.jpegThumbnail = "";
                object.contextInfo = "";
                object.streamingSidecar = "";
                object.gifAttribution = "";
            }
            if (message.url != null && message.hasOwnProperty("url"))
                object.url = message.url;
            if (message.mimetype != null && message.hasOwnProperty("mimetype"))
                object.mimetype = message.mimetype;
            if (message.fileSha256 != null && message.hasOwnProperty("fileSha256"))
                object.fileSha256 = message.fileSha256;
            if (message.fileLength != null && message.hasOwnProperty("fileLength"))
                object.fileLength = message.fileLength;
            if (message.seconds != null && message.hasOwnProperty("seconds"))
                object.seconds = message.seconds;
            if (message.mediaKey != null && message.hasOwnProperty("mediaKey"))
                object.mediaKey = message.mediaKey;
            if (message.caption != null && message.hasOwnProperty("caption"))
                object.caption = message.caption;
            if (message.gifPlayback != null && message.hasOwnProperty("gifPlayback"))
                object.gifPlayback = message.gifPlayback;
            if (message.height != null && message.hasOwnProperty("height"))
                object.height = message.height;
            if (message.width != null && message.hasOwnProperty("width"))
                object.width = message.width;
            if (message.jpegThumbnail != null && message.hasOwnProperty("jpegThumbnail"))
                object.jpegThumbnail = message.jpegThumbnail;
            if (message.contextInfo != null && message.hasOwnProperty("contextInfo"))
                object.contextInfo = message.contextInfo;
            if (message.streamingSidecar != null && message.hasOwnProperty("streamingSidecar"))
                object.streamingSidecar = message.streamingSidecar;
            if (message.gifAttribution != null && message.hasOwnProperty("gifAttribution"))
                object.gifAttribution = message.gifAttribution;
            return object;
        };

        /**
         * Converts this VideoMessage to JSON.
         * @function toJSON
         * @memberof Message.VideoMessage
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        VideoMessage.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return VideoMessage;
    })();

    Message.Call = (function() {

        /**
         * Properties of a Call.
         * @memberof Message
         * @interface ICall
         * @property {string|null} [callKey] Call callKey
         */

        /**
         * Constructs a new Call.
         * @memberof Message
         * @classdesc Represents a Call.
         * @implements ICall
         * @constructor
         * @param {Message.ICall=} [properties] Properties to set
         */
        function Call(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Call callKey.
         * @member {string} callKey
         * @memberof Message.Call
         * @instance
         */
        Call.prototype.callKey = "";

        /**
         * Creates a new Call instance using the specified properties.
         * @function create
         * @memberof Message.Call
         * @static
         * @param {Message.ICall=} [properties] Properties to set
         * @returns {Message.Call} Call instance
         */
        Call.create = function create(properties) {
            return new Call(properties);
        };

        /**
         * Encodes the specified Call message. Does not implicitly {@link Message.Call.verify|verify} messages.
         * @function encode
         * @memberof Message.Call
         * @static
         * @param {Message.ICall} message Call message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Call.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.callKey != null && Object.hasOwnProperty.call(message, "callKey"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.callKey);
            return writer;
        };

        /**
         * Encodes the specified Call message, length delimited. Does not implicitly {@link Message.Call.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Message.Call
         * @static
         * @param {Message.ICall} message Call message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Call.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Call message from the specified reader or buffer.
         * @function decode
         * @memberof Message.Call
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Message.Call} Call
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Call.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Message.Call();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.callKey = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Call message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Message.Call
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Message.Call} Call
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Call.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Call message.
         * @function verify
         * @memberof Message.Call
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Call.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.callKey != null && message.hasOwnProperty("callKey"))
                if (!$util.isString(message.callKey))
                    return "callKey: string expected";
            return null;
        };

        /**
         * Creates a Call message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Message.Call
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Message.Call} Call
         */
        Call.fromObject = function fromObject(object) {
            if (object instanceof $root.Message.Call)
                return object;
            var message = new $root.Message.Call();
            if (object.callKey != null)
                message.callKey = String(object.callKey);
            return message;
        };

        /**
         * Creates a plain object from a Call message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Message.Call
         * @static
         * @param {Message.Call} message Call
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Call.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.callKey = "";
            if (message.callKey != null && message.hasOwnProperty("callKey"))
                object.callKey = message.callKey;
            return object;
        };

        /**
         * Converts this Call to JSON.
         * @function toJSON
         * @memberof Message.Call
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Call.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Call;
    })();

    Message.Chat = (function() {

        /**
         * Properties of a Chat.
         * @memberof Message
         * @interface IChat
         * @property {string|null} [displayName] Chat displayName
         * @property {string|null} [id] Chat id
         */

        /**
         * Constructs a new Chat.
         * @memberof Message
         * @classdesc Represents a Chat.
         * @implements IChat
         * @constructor
         * @param {Message.IChat=} [properties] Properties to set
         */
        function Chat(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Chat displayName.
         * @member {string} displayName
         * @memberof Message.Chat
         * @instance
         */
        Chat.prototype.displayName = "";

        /**
         * Chat id.
         * @member {string} id
         * @memberof Message.Chat
         * @instance
         */
        Chat.prototype.id = "";

        /**
         * Creates a new Chat instance using the specified properties.
         * @function create
         * @memberof Message.Chat
         * @static
         * @param {Message.IChat=} [properties] Properties to set
         * @returns {Message.Chat} Chat instance
         */
        Chat.create = function create(properties) {
            return new Chat(properties);
        };

        /**
         * Encodes the specified Chat message. Does not implicitly {@link Message.Chat.verify|verify} messages.
         * @function encode
         * @memberof Message.Chat
         * @static
         * @param {Message.IChat} message Chat message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Chat.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.displayName != null && Object.hasOwnProperty.call(message, "displayName"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.displayName);
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.id);
            return writer;
        };

        /**
         * Encodes the specified Chat message, length delimited. Does not implicitly {@link Message.Chat.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Message.Chat
         * @static
         * @param {Message.IChat} message Chat message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Chat.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Chat message from the specified reader or buffer.
         * @function decode
         * @memberof Message.Chat
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Message.Chat} Chat
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Chat.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Message.Chat();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.displayName = reader.string();
                    break;
                case 2:
                    message.id = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Chat message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Message.Chat
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Message.Chat} Chat
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Chat.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Chat message.
         * @function verify
         * @memberof Message.Chat
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Chat.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.displayName != null && message.hasOwnProperty("displayName"))
                if (!$util.isString(message.displayName))
                    return "displayName: string expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isString(message.id))
                    return "id: string expected";
            return null;
        };

        /**
         * Creates a Chat message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Message.Chat
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Message.Chat} Chat
         */
        Chat.fromObject = function fromObject(object) {
            if (object instanceof $root.Message.Chat)
                return object;
            var message = new $root.Message.Chat();
            if (object.displayName != null)
                message.displayName = String(object.displayName);
            if (object.id != null)
                message.id = String(object.id);
            return message;
        };

        /**
         * Creates a plain object from a Chat message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Message.Chat
         * @static
         * @param {Message.Chat} message Chat
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Chat.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.displayName = "";
                object.id = "";
            }
            if (message.displayName != null && message.hasOwnProperty("displayName"))
                object.displayName = message.displayName;
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            return object;
        };

        /**
         * Converts this Chat to JSON.
         * @function toJSON
         * @memberof Message.Chat
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Chat.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Chat;
    })();

    Message.ProtocolMessage = (function() {

        /**
         * Properties of a ProtocolMessage.
         * @memberof Message
         * @interface IProtocolMessage
         * @property {string|null} [key] ProtocolMessage key
         * @property {string|null} [type] ProtocolMessage type
         */

        /**
         * Constructs a new ProtocolMessage.
         * @memberof Message
         * @classdesc Represents a ProtocolMessage.
         * @implements IProtocolMessage
         * @constructor
         * @param {Message.IProtocolMessage=} [properties] Properties to set
         */
        function ProtocolMessage(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ProtocolMessage key.
         * @member {string} key
         * @memberof Message.ProtocolMessage
         * @instance
         */
        ProtocolMessage.prototype.key = "";

        /**
         * ProtocolMessage type.
         * @member {string} type
         * @memberof Message.ProtocolMessage
         * @instance
         */
        ProtocolMessage.prototype.type = "";

        /**
         * Creates a new ProtocolMessage instance using the specified properties.
         * @function create
         * @memberof Message.ProtocolMessage
         * @static
         * @param {Message.IProtocolMessage=} [properties] Properties to set
         * @returns {Message.ProtocolMessage} ProtocolMessage instance
         */
        ProtocolMessage.create = function create(properties) {
            return new ProtocolMessage(properties);
        };

        /**
         * Encodes the specified ProtocolMessage message. Does not implicitly {@link Message.ProtocolMessage.verify|verify} messages.
         * @function encode
         * @memberof Message.ProtocolMessage
         * @static
         * @param {Message.IProtocolMessage} message ProtocolMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ProtocolMessage.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.key != null && Object.hasOwnProperty.call(message, "key"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.key);
            if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.type);
            return writer;
        };

        /**
         * Encodes the specified ProtocolMessage message, length delimited. Does not implicitly {@link Message.ProtocolMessage.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Message.ProtocolMessage
         * @static
         * @param {Message.IProtocolMessage} message ProtocolMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ProtocolMessage.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ProtocolMessage message from the specified reader or buffer.
         * @function decode
         * @memberof Message.ProtocolMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Message.ProtocolMessage} ProtocolMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ProtocolMessage.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Message.ProtocolMessage();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.key = reader.string();
                    break;
                case 2:
                    message.type = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ProtocolMessage message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Message.ProtocolMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Message.ProtocolMessage} ProtocolMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ProtocolMessage.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ProtocolMessage message.
         * @function verify
         * @memberof Message.ProtocolMessage
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ProtocolMessage.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.key != null && message.hasOwnProperty("key"))
                if (!$util.isString(message.key))
                    return "key: string expected";
            if (message.type != null && message.hasOwnProperty("type"))
                if (!$util.isString(message.type))
                    return "type: string expected";
            return null;
        };

        /**
         * Creates a ProtocolMessage message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Message.ProtocolMessage
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Message.ProtocolMessage} ProtocolMessage
         */
        ProtocolMessage.fromObject = function fromObject(object) {
            if (object instanceof $root.Message.ProtocolMessage)
                return object;
            var message = new $root.Message.ProtocolMessage();
            if (object.key != null)
                message.key = String(object.key);
            if (object.type != null)
                message.type = String(object.type);
            return message;
        };

        /**
         * Creates a plain object from a ProtocolMessage message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Message.ProtocolMessage
         * @static
         * @param {Message.ProtocolMessage} message ProtocolMessage
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ProtocolMessage.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.key = "";
                object.type = "";
            }
            if (message.key != null && message.hasOwnProperty("key"))
                object.key = message.key;
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = message.type;
            return object;
        };

        /**
         * Converts this ProtocolMessage to JSON.
         * @function toJSON
         * @memberof Message.ProtocolMessage
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ProtocolMessage.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ProtocolMessage;
    })();

    Message.ContactsArrayMessage = (function() {

        /**
         * Properties of a ContactsArrayMessage.
         * @memberof Message
         * @interface IContactsArrayMessage
         * @property {string|null} [displayName] ContactsArrayMessage displayName
         * @property {string|null} [contacts] ContactsArrayMessage contacts
         * @property {string|null} [contextInfo] ContactsArrayMessage contextInfo
         */

        /**
         * Constructs a new ContactsArrayMessage.
         * @memberof Message
         * @classdesc Represents a ContactsArrayMessage.
         * @implements IContactsArrayMessage
         * @constructor
         * @param {Message.IContactsArrayMessage=} [properties] Properties to set
         */
        function ContactsArrayMessage(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ContactsArrayMessage displayName.
         * @member {string} displayName
         * @memberof Message.ContactsArrayMessage
         * @instance
         */
        ContactsArrayMessage.prototype.displayName = "";

        /**
         * ContactsArrayMessage contacts.
         * @member {string} contacts
         * @memberof Message.ContactsArrayMessage
         * @instance
         */
        ContactsArrayMessage.prototype.contacts = "";

        /**
         * ContactsArrayMessage contextInfo.
         * @member {string} contextInfo
         * @memberof Message.ContactsArrayMessage
         * @instance
         */
        ContactsArrayMessage.prototype.contextInfo = "";

        /**
         * Creates a new ContactsArrayMessage instance using the specified properties.
         * @function create
         * @memberof Message.ContactsArrayMessage
         * @static
         * @param {Message.IContactsArrayMessage=} [properties] Properties to set
         * @returns {Message.ContactsArrayMessage} ContactsArrayMessage instance
         */
        ContactsArrayMessage.create = function create(properties) {
            return new ContactsArrayMessage(properties);
        };

        /**
         * Encodes the specified ContactsArrayMessage message. Does not implicitly {@link Message.ContactsArrayMessage.verify|verify} messages.
         * @function encode
         * @memberof Message.ContactsArrayMessage
         * @static
         * @param {Message.IContactsArrayMessage} message ContactsArrayMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ContactsArrayMessage.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.displayName != null && Object.hasOwnProperty.call(message, "displayName"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.displayName);
            if (message.contacts != null && Object.hasOwnProperty.call(message, "contacts"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.contacts);
            if (message.contextInfo != null && Object.hasOwnProperty.call(message, "contextInfo"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.contextInfo);
            return writer;
        };

        /**
         * Encodes the specified ContactsArrayMessage message, length delimited. Does not implicitly {@link Message.ContactsArrayMessage.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Message.ContactsArrayMessage
         * @static
         * @param {Message.IContactsArrayMessage} message ContactsArrayMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ContactsArrayMessage.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ContactsArrayMessage message from the specified reader or buffer.
         * @function decode
         * @memberof Message.ContactsArrayMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Message.ContactsArrayMessage} ContactsArrayMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ContactsArrayMessage.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Message.ContactsArrayMessage();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.displayName = reader.string();
                    break;
                case 2:
                    message.contacts = reader.string();
                    break;
                case 3:
                    message.contextInfo = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ContactsArrayMessage message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Message.ContactsArrayMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Message.ContactsArrayMessage} ContactsArrayMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ContactsArrayMessage.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ContactsArrayMessage message.
         * @function verify
         * @memberof Message.ContactsArrayMessage
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ContactsArrayMessage.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.displayName != null && message.hasOwnProperty("displayName"))
                if (!$util.isString(message.displayName))
                    return "displayName: string expected";
            if (message.contacts != null && message.hasOwnProperty("contacts"))
                if (!$util.isString(message.contacts))
                    return "contacts: string expected";
            if (message.contextInfo != null && message.hasOwnProperty("contextInfo"))
                if (!$util.isString(message.contextInfo))
                    return "contextInfo: string expected";
            return null;
        };

        /**
         * Creates a ContactsArrayMessage message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Message.ContactsArrayMessage
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Message.ContactsArrayMessage} ContactsArrayMessage
         */
        ContactsArrayMessage.fromObject = function fromObject(object) {
            if (object instanceof $root.Message.ContactsArrayMessage)
                return object;
            var message = new $root.Message.ContactsArrayMessage();
            if (object.displayName != null)
                message.displayName = String(object.displayName);
            if (object.contacts != null)
                message.contacts = String(object.contacts);
            if (object.contextInfo != null)
                message.contextInfo = String(object.contextInfo);
            return message;
        };

        /**
         * Creates a plain object from a ContactsArrayMessage message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Message.ContactsArrayMessage
         * @static
         * @param {Message.ContactsArrayMessage} message ContactsArrayMessage
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ContactsArrayMessage.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.displayName = "";
                object.contacts = "";
                object.contextInfo = "";
            }
            if (message.displayName != null && message.hasOwnProperty("displayName"))
                object.displayName = message.displayName;
            if (message.contacts != null && message.hasOwnProperty("contacts"))
                object.contacts = message.contacts;
            if (message.contextInfo != null && message.hasOwnProperty("contextInfo"))
                object.contextInfo = message.contextInfo;
            return object;
        };

        /**
         * Converts this ContactsArrayMessage to JSON.
         * @function toJSON
         * @memberof Message.ContactsArrayMessage
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ContactsArrayMessage.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ContactsArrayMessage;
    })();

    Message.HighlyStructuredMessage = (function() {

        /**
         * Properties of a HighlyStructuredMessage.
         * @memberof Message
         * @interface IHighlyStructuredMessage
         * @property {string|null} [namespace] HighlyStructuredMessage namespace
         * @property {string|null} [elementName] HighlyStructuredMessage elementName
         * @property {string|null} [params] HighlyStructuredMessage params
         * @property {string|null} [fallbackLg] HighlyStructuredMessage fallbackLg
         * @property {string|null} [fallbackLc] HighlyStructuredMessage fallbackLc
         */

        /**
         * Constructs a new HighlyStructuredMessage.
         * @memberof Message
         * @classdesc Represents a HighlyStructuredMessage.
         * @implements IHighlyStructuredMessage
         * @constructor
         * @param {Message.IHighlyStructuredMessage=} [properties] Properties to set
         */
        function HighlyStructuredMessage(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * HighlyStructuredMessage namespace.
         * @member {string} namespace
         * @memberof Message.HighlyStructuredMessage
         * @instance
         */
        HighlyStructuredMessage.prototype.namespace = "";

        /**
         * HighlyStructuredMessage elementName.
         * @member {string} elementName
         * @memberof Message.HighlyStructuredMessage
         * @instance
         */
        HighlyStructuredMessage.prototype.elementName = "";

        /**
         * HighlyStructuredMessage params.
         * @member {string} params
         * @memberof Message.HighlyStructuredMessage
         * @instance
         */
        HighlyStructuredMessage.prototype.params = "";

        /**
         * HighlyStructuredMessage fallbackLg.
         * @member {string} fallbackLg
         * @memberof Message.HighlyStructuredMessage
         * @instance
         */
        HighlyStructuredMessage.prototype.fallbackLg = "";

        /**
         * HighlyStructuredMessage fallbackLc.
         * @member {string} fallbackLc
         * @memberof Message.HighlyStructuredMessage
         * @instance
         */
        HighlyStructuredMessage.prototype.fallbackLc = "";

        /**
         * Creates a new HighlyStructuredMessage instance using the specified properties.
         * @function create
         * @memberof Message.HighlyStructuredMessage
         * @static
         * @param {Message.IHighlyStructuredMessage=} [properties] Properties to set
         * @returns {Message.HighlyStructuredMessage} HighlyStructuredMessage instance
         */
        HighlyStructuredMessage.create = function create(properties) {
            return new HighlyStructuredMessage(properties);
        };

        /**
         * Encodes the specified HighlyStructuredMessage message. Does not implicitly {@link Message.HighlyStructuredMessage.verify|verify} messages.
         * @function encode
         * @memberof Message.HighlyStructuredMessage
         * @static
         * @param {Message.IHighlyStructuredMessage} message HighlyStructuredMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HighlyStructuredMessage.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.namespace != null && Object.hasOwnProperty.call(message, "namespace"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.namespace);
            if (message.elementName != null && Object.hasOwnProperty.call(message, "elementName"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.elementName);
            if (message.params != null && Object.hasOwnProperty.call(message, "params"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.params);
            if (message.fallbackLg != null && Object.hasOwnProperty.call(message, "fallbackLg"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.fallbackLg);
            if (message.fallbackLc != null && Object.hasOwnProperty.call(message, "fallbackLc"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.fallbackLc);
            return writer;
        };

        /**
         * Encodes the specified HighlyStructuredMessage message, length delimited. Does not implicitly {@link Message.HighlyStructuredMessage.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Message.HighlyStructuredMessage
         * @static
         * @param {Message.IHighlyStructuredMessage} message HighlyStructuredMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HighlyStructuredMessage.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a HighlyStructuredMessage message from the specified reader or buffer.
         * @function decode
         * @memberof Message.HighlyStructuredMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Message.HighlyStructuredMessage} HighlyStructuredMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HighlyStructuredMessage.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Message.HighlyStructuredMessage();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.namespace = reader.string();
                    break;
                case 2:
                    message.elementName = reader.string();
                    break;
                case 3:
                    message.params = reader.string();
                    break;
                case 4:
                    message.fallbackLg = reader.string();
                    break;
                case 5:
                    message.fallbackLc = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a HighlyStructuredMessage message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Message.HighlyStructuredMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Message.HighlyStructuredMessage} HighlyStructuredMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HighlyStructuredMessage.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a HighlyStructuredMessage message.
         * @function verify
         * @memberof Message.HighlyStructuredMessage
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        HighlyStructuredMessage.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.namespace != null && message.hasOwnProperty("namespace"))
                if (!$util.isString(message.namespace))
                    return "namespace: string expected";
            if (message.elementName != null && message.hasOwnProperty("elementName"))
                if (!$util.isString(message.elementName))
                    return "elementName: string expected";
            if (message.params != null && message.hasOwnProperty("params"))
                if (!$util.isString(message.params))
                    return "params: string expected";
            if (message.fallbackLg != null && message.hasOwnProperty("fallbackLg"))
                if (!$util.isString(message.fallbackLg))
                    return "fallbackLg: string expected";
            if (message.fallbackLc != null && message.hasOwnProperty("fallbackLc"))
                if (!$util.isString(message.fallbackLc))
                    return "fallbackLc: string expected";
            return null;
        };

        /**
         * Creates a HighlyStructuredMessage message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Message.HighlyStructuredMessage
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Message.HighlyStructuredMessage} HighlyStructuredMessage
         */
        HighlyStructuredMessage.fromObject = function fromObject(object) {
            if (object instanceof $root.Message.HighlyStructuredMessage)
                return object;
            var message = new $root.Message.HighlyStructuredMessage();
            if (object.namespace != null)
                message.namespace = String(object.namespace);
            if (object.elementName != null)
                message.elementName = String(object.elementName);
            if (object.params != null)
                message.params = String(object.params);
            if (object.fallbackLg != null)
                message.fallbackLg = String(object.fallbackLg);
            if (object.fallbackLc != null)
                message.fallbackLc = String(object.fallbackLc);
            return message;
        };

        /**
         * Creates a plain object from a HighlyStructuredMessage message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Message.HighlyStructuredMessage
         * @static
         * @param {Message.HighlyStructuredMessage} message HighlyStructuredMessage
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        HighlyStructuredMessage.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.namespace = "";
                object.elementName = "";
                object.params = "";
                object.fallbackLg = "";
                object.fallbackLc = "";
            }
            if (message.namespace != null && message.hasOwnProperty("namespace"))
                object.namespace = message.namespace;
            if (message.elementName != null && message.hasOwnProperty("elementName"))
                object.elementName = message.elementName;
            if (message.params != null && message.hasOwnProperty("params"))
                object.params = message.params;
            if (message.fallbackLg != null && message.hasOwnProperty("fallbackLg"))
                object.fallbackLg = message.fallbackLg;
            if (message.fallbackLc != null && message.hasOwnProperty("fallbackLc"))
                object.fallbackLc = message.fallbackLc;
            return object;
        };

        /**
         * Converts this HighlyStructuredMessage to JSON.
         * @function toJSON
         * @memberof Message.HighlyStructuredMessage
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        HighlyStructuredMessage.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return HighlyStructuredMessage;
    })();

    Message.Message = (function() {

        /**
         * Properties of a Message.
         * @memberof Message
         * @interface IMessage
         * @property {string|null} [conversation] Message conversation
         * @property {Message.IWhisperSenderKeyDistributionMessage|null} [senderKeyDistributionMessage] Message senderKeyDistributionMessage
         * @property {Message.IImageMessage|null} [imageMessage] Message imageMessage
         * @property {Message.IContactMessage|null} [contactMessage] Message contactMessage
         * @property {Message.ILocationMessage|null} [locationMessage] Message locationMessage
         * @property {Message.IExtendedTextMessage|null} [extendedTextMessage] Message extendedTextMessage
         * @property {Message.IDocumentMessage|null} [documentMessage] Message documentMessage
         * @property {Message.IAudioMessage|null} [audioMessage] Message audioMessage
         * @property {Message.IVideoMessage|null} [videoMessage] Message videoMessage
         * @property {Message.ICall|null} [call] Message call
         * @property {Message.IChat|null} [chat] Message chat
         * @property {Message.IProtocolMessage|null} [protocolMessage] Message protocolMessage
         * @property {Message.IContactsArrayMessage|null} [contactsArrayMessage] Message contactsArrayMessage
         * @property {Message.IHighlyStructuredMessage|null} [highlyStructuredMessage] Message highlyStructuredMessage
         */

        /**
         * Constructs a new Message.
         * @memberof Message
         * @classdesc Represents a Message.
         * @implements IMessage
         * @constructor
         * @param {Message.IMessage=} [properties] Properties to set
         */
        function Message(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Message conversation.
         * @member {string} conversation
         * @memberof Message.Message
         * @instance
         */
        Message.prototype.conversation = "";

        /**
         * Message senderKeyDistributionMessage.
         * @member {Message.IWhisperSenderKeyDistributionMessage|null|undefined} senderKeyDistributionMessage
         * @memberof Message.Message
         * @instance
         */
        Message.prototype.senderKeyDistributionMessage = null;

        /**
         * Message imageMessage.
         * @member {Message.IImageMessage|null|undefined} imageMessage
         * @memberof Message.Message
         * @instance
         */
        Message.prototype.imageMessage = null;

        /**
         * Message contactMessage.
         * @member {Message.IContactMessage|null|undefined} contactMessage
         * @memberof Message.Message
         * @instance
         */
        Message.prototype.contactMessage = null;

        /**
         * Message locationMessage.
         * @member {Message.ILocationMessage|null|undefined} locationMessage
         * @memberof Message.Message
         * @instance
         */
        Message.prototype.locationMessage = null;

        /**
         * Message extendedTextMessage.
         * @member {Message.IExtendedTextMessage|null|undefined} extendedTextMessage
         * @memberof Message.Message
         * @instance
         */
        Message.prototype.extendedTextMessage = null;

        /**
         * Message documentMessage.
         * @member {Message.IDocumentMessage|null|undefined} documentMessage
         * @memberof Message.Message
         * @instance
         */
        Message.prototype.documentMessage = null;

        /**
         * Message audioMessage.
         * @member {Message.IAudioMessage|null|undefined} audioMessage
         * @memberof Message.Message
         * @instance
         */
        Message.prototype.audioMessage = null;

        /**
         * Message videoMessage.
         * @member {Message.IVideoMessage|null|undefined} videoMessage
         * @memberof Message.Message
         * @instance
         */
        Message.prototype.videoMessage = null;

        /**
         * Message call.
         * @member {Message.ICall|null|undefined} call
         * @memberof Message.Message
         * @instance
         */
        Message.prototype.call = null;

        /**
         * Message chat.
         * @member {Message.IChat|null|undefined} chat
         * @memberof Message.Message
         * @instance
         */
        Message.prototype.chat = null;

        /**
         * Message protocolMessage.
         * @member {Message.IProtocolMessage|null|undefined} protocolMessage
         * @memberof Message.Message
         * @instance
         */
        Message.prototype.protocolMessage = null;

        /**
         * Message contactsArrayMessage.
         * @member {Message.IContactsArrayMessage|null|undefined} contactsArrayMessage
         * @memberof Message.Message
         * @instance
         */
        Message.prototype.contactsArrayMessage = null;

        /**
         * Message highlyStructuredMessage.
         * @member {Message.IHighlyStructuredMessage|null|undefined} highlyStructuredMessage
         * @memberof Message.Message
         * @instance
         */
        Message.prototype.highlyStructuredMessage = null;

        /**
         * Creates a new Message instance using the specified properties.
         * @function create
         * @memberof Message.Message
         * @static
         * @param {Message.IMessage=} [properties] Properties to set
         * @returns {Message.Message} Message instance
         */
        Message.create = function create(properties) {
            return new Message(properties);
        };

        /**
         * Encodes the specified Message message. Does not implicitly {@link Message.Message.verify|verify} messages.
         * @function encode
         * @memberof Message.Message
         * @static
         * @param {Message.IMessage} message Message message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Message.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.conversation != null && Object.hasOwnProperty.call(message, "conversation"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.conversation);
            if (message.senderKeyDistributionMessage != null && Object.hasOwnProperty.call(message, "senderKeyDistributionMessage"))
                $root.Message.WhisperSenderKeyDistributionMessage.encode(message.senderKeyDistributionMessage, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.imageMessage != null && Object.hasOwnProperty.call(message, "imageMessage"))
                $root.Message.ImageMessage.encode(message.imageMessage, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.contactMessage != null && Object.hasOwnProperty.call(message, "contactMessage"))
                $root.Message.ContactMessage.encode(message.contactMessage, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.locationMessage != null && Object.hasOwnProperty.call(message, "locationMessage"))
                $root.Message.LocationMessage.encode(message.locationMessage, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            if (message.extendedTextMessage != null && Object.hasOwnProperty.call(message, "extendedTextMessage"))
                $root.Message.ExtendedTextMessage.encode(message.extendedTextMessage, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
            if (message.documentMessage != null && Object.hasOwnProperty.call(message, "documentMessage"))
                $root.Message.DocumentMessage.encode(message.documentMessage, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
            if (message.audioMessage != null && Object.hasOwnProperty.call(message, "audioMessage"))
                $root.Message.AudioMessage.encode(message.audioMessage, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
            if (message.videoMessage != null && Object.hasOwnProperty.call(message, "videoMessage"))
                $root.Message.VideoMessage.encode(message.videoMessage, writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
            if (message.call != null && Object.hasOwnProperty.call(message, "call"))
                $root.Message.Call.encode(message.call, writer.uint32(/* id 10, wireType 2 =*/82).fork()).ldelim();
            if (message.chat != null && Object.hasOwnProperty.call(message, "chat"))
                $root.Message.Chat.encode(message.chat, writer.uint32(/* id 11, wireType 2 =*/90).fork()).ldelim();
            if (message.protocolMessage != null && Object.hasOwnProperty.call(message, "protocolMessage"))
                $root.Message.ProtocolMessage.encode(message.protocolMessage, writer.uint32(/* id 12, wireType 2 =*/98).fork()).ldelim();
            if (message.contactsArrayMessage != null && Object.hasOwnProperty.call(message, "contactsArrayMessage"))
                $root.Message.ContactsArrayMessage.encode(message.contactsArrayMessage, writer.uint32(/* id 13, wireType 2 =*/106).fork()).ldelim();
            if (message.highlyStructuredMessage != null && Object.hasOwnProperty.call(message, "highlyStructuredMessage"))
                $root.Message.HighlyStructuredMessage.encode(message.highlyStructuredMessage, writer.uint32(/* id 14, wireType 2 =*/114).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified Message message, length delimited. Does not implicitly {@link Message.Message.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Message.Message
         * @static
         * @param {Message.IMessage} message Message message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Message.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Message message from the specified reader or buffer.
         * @function decode
         * @memberof Message.Message
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Message.Message} Message
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Message.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Message.Message();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.conversation = reader.string();
                    break;
                case 2:
                    message.senderKeyDistributionMessage = $root.Message.WhisperSenderKeyDistributionMessage.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.imageMessage = $root.Message.ImageMessage.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.contactMessage = $root.Message.ContactMessage.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.locationMessage = $root.Message.LocationMessage.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.extendedTextMessage = $root.Message.ExtendedTextMessage.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.documentMessage = $root.Message.DocumentMessage.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.audioMessage = $root.Message.AudioMessage.decode(reader, reader.uint32());
                    break;
                case 9:
                    message.videoMessage = $root.Message.VideoMessage.decode(reader, reader.uint32());
                    break;
                case 10:
                    message.call = $root.Message.Call.decode(reader, reader.uint32());
                    break;
                case 11:
                    message.chat = $root.Message.Chat.decode(reader, reader.uint32());
                    break;
                case 12:
                    message.protocolMessage = $root.Message.ProtocolMessage.decode(reader, reader.uint32());
                    break;
                case 13:
                    message.contactsArrayMessage = $root.Message.ContactsArrayMessage.decode(reader, reader.uint32());
                    break;
                case 14:
                    message.highlyStructuredMessage = $root.Message.HighlyStructuredMessage.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Message message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Message.Message
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Message.Message} Message
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Message.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Message message.
         * @function verify
         * @memberof Message.Message
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Message.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.conversation != null && message.hasOwnProperty("conversation"))
                if (!$util.isString(message.conversation))
                    return "conversation: string expected";
            if (message.senderKeyDistributionMessage != null && message.hasOwnProperty("senderKeyDistributionMessage")) {
                var error = $root.Message.WhisperSenderKeyDistributionMessage.verify(message.senderKeyDistributionMessage);
                if (error)
                    return "senderKeyDistributionMessage." + error;
            }
            if (message.imageMessage != null && message.hasOwnProperty("imageMessage")) {
                var error = $root.Message.ImageMessage.verify(message.imageMessage);
                if (error)
                    return "imageMessage." + error;
            }
            if (message.contactMessage != null && message.hasOwnProperty("contactMessage")) {
                var error = $root.Message.ContactMessage.verify(message.contactMessage);
                if (error)
                    return "contactMessage." + error;
            }
            if (message.locationMessage != null && message.hasOwnProperty("locationMessage")) {
                var error = $root.Message.LocationMessage.verify(message.locationMessage);
                if (error)
                    return "locationMessage." + error;
            }
            if (message.extendedTextMessage != null && message.hasOwnProperty("extendedTextMessage")) {
                var error = $root.Message.ExtendedTextMessage.verify(message.extendedTextMessage);
                if (error)
                    return "extendedTextMessage." + error;
            }
            if (message.documentMessage != null && message.hasOwnProperty("documentMessage")) {
                var error = $root.Message.DocumentMessage.verify(message.documentMessage);
                if (error)
                    return "documentMessage." + error;
            }
            if (message.audioMessage != null && message.hasOwnProperty("audioMessage")) {
                var error = $root.Message.AudioMessage.verify(message.audioMessage);
                if (error)
                    return "audioMessage." + error;
            }
            if (message.videoMessage != null && message.hasOwnProperty("videoMessage")) {
                var error = $root.Message.VideoMessage.verify(message.videoMessage);
                if (error)
                    return "videoMessage." + error;
            }
            if (message.call != null && message.hasOwnProperty("call")) {
                var error = $root.Message.Call.verify(message.call);
                if (error)
                    return "call." + error;
            }
            if (message.chat != null && message.hasOwnProperty("chat")) {
                var error = $root.Message.Chat.verify(message.chat);
                if (error)
                    return "chat." + error;
            }
            if (message.protocolMessage != null && message.hasOwnProperty("protocolMessage")) {
                var error = $root.Message.ProtocolMessage.verify(message.protocolMessage);
                if (error)
                    return "protocolMessage." + error;
            }
            if (message.contactsArrayMessage != null && message.hasOwnProperty("contactsArrayMessage")) {
                var error = $root.Message.ContactsArrayMessage.verify(message.contactsArrayMessage);
                if (error)
                    return "contactsArrayMessage." + error;
            }
            if (message.highlyStructuredMessage != null && message.hasOwnProperty("highlyStructuredMessage")) {
                var error = $root.Message.HighlyStructuredMessage.verify(message.highlyStructuredMessage);
                if (error)
                    return "highlyStructuredMessage." + error;
            }
            return null;
        };

        /**
         * Creates a Message message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Message.Message
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Message.Message} Message
         */
        Message.fromObject = function fromObject(object) {
            if (object instanceof $root.Message.Message)
                return object;
            var message = new $root.Message.Message();
            if (object.conversation != null)
                message.conversation = String(object.conversation);
            if (object.senderKeyDistributionMessage != null) {
                if (typeof object.senderKeyDistributionMessage !== "object")
                    throw TypeError(".Message.Message.senderKeyDistributionMessage: object expected");
                message.senderKeyDistributionMessage = $root.Message.WhisperSenderKeyDistributionMessage.fromObject(object.senderKeyDistributionMessage);
            }
            if (object.imageMessage != null) {
                if (typeof object.imageMessage !== "object")
                    throw TypeError(".Message.Message.imageMessage: object expected");
                message.imageMessage = $root.Message.ImageMessage.fromObject(object.imageMessage);
            }
            if (object.contactMessage != null) {
                if (typeof object.contactMessage !== "object")
                    throw TypeError(".Message.Message.contactMessage: object expected");
                message.contactMessage = $root.Message.ContactMessage.fromObject(object.contactMessage);
            }
            if (object.locationMessage != null) {
                if (typeof object.locationMessage !== "object")
                    throw TypeError(".Message.Message.locationMessage: object expected");
                message.locationMessage = $root.Message.LocationMessage.fromObject(object.locationMessage);
            }
            if (object.extendedTextMessage != null) {
                if (typeof object.extendedTextMessage !== "object")
                    throw TypeError(".Message.Message.extendedTextMessage: object expected");
                message.extendedTextMessage = $root.Message.ExtendedTextMessage.fromObject(object.extendedTextMessage);
            }
            if (object.documentMessage != null) {
                if (typeof object.documentMessage !== "object")
                    throw TypeError(".Message.Message.documentMessage: object expected");
                message.documentMessage = $root.Message.DocumentMessage.fromObject(object.documentMessage);
            }
            if (object.audioMessage != null) {
                if (typeof object.audioMessage !== "object")
                    throw TypeError(".Message.Message.audioMessage: object expected");
                message.audioMessage = $root.Message.AudioMessage.fromObject(object.audioMessage);
            }
            if (object.videoMessage != null) {
                if (typeof object.videoMessage !== "object")
                    throw TypeError(".Message.Message.videoMessage: object expected");
                message.videoMessage = $root.Message.VideoMessage.fromObject(object.videoMessage);
            }
            if (object.call != null) {
                if (typeof object.call !== "object")
                    throw TypeError(".Message.Message.call: object expected");
                message.call = $root.Message.Call.fromObject(object.call);
            }
            if (object.chat != null) {
                if (typeof object.chat !== "object")
                    throw TypeError(".Message.Message.chat: object expected");
                message.chat = $root.Message.Chat.fromObject(object.chat);
            }
            if (object.protocolMessage != null) {
                if (typeof object.protocolMessage !== "object")
                    throw TypeError(".Message.Message.protocolMessage: object expected");
                message.protocolMessage = $root.Message.ProtocolMessage.fromObject(object.protocolMessage);
            }
            if (object.contactsArrayMessage != null) {
                if (typeof object.contactsArrayMessage !== "object")
                    throw TypeError(".Message.Message.contactsArrayMessage: object expected");
                message.contactsArrayMessage = $root.Message.ContactsArrayMessage.fromObject(object.contactsArrayMessage);
            }
            if (object.highlyStructuredMessage != null) {
                if (typeof object.highlyStructuredMessage !== "object")
                    throw TypeError(".Message.Message.highlyStructuredMessage: object expected");
                message.highlyStructuredMessage = $root.Message.HighlyStructuredMessage.fromObject(object.highlyStructuredMessage);
            }
            return message;
        };

        /**
         * Creates a plain object from a Message message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Message.Message
         * @static
         * @param {Message.Message} message Message
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Message.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.conversation = "";
                object.senderKeyDistributionMessage = null;
                object.imageMessage = null;
                object.contactMessage = null;
                object.locationMessage = null;
                object.extendedTextMessage = null;
                object.documentMessage = null;
                object.audioMessage = null;
                object.videoMessage = null;
                object.call = null;
                object.chat = null;
                object.protocolMessage = null;
                object.contactsArrayMessage = null;
                object.highlyStructuredMessage = null;
            }
            if (message.conversation != null && message.hasOwnProperty("conversation"))
                object.conversation = message.conversation;
            if (message.senderKeyDistributionMessage != null && message.hasOwnProperty("senderKeyDistributionMessage"))
                object.senderKeyDistributionMessage = $root.Message.WhisperSenderKeyDistributionMessage.toObject(message.senderKeyDistributionMessage, options);
            if (message.imageMessage != null && message.hasOwnProperty("imageMessage"))
                object.imageMessage = $root.Message.ImageMessage.toObject(message.imageMessage, options);
            if (message.contactMessage != null && message.hasOwnProperty("contactMessage"))
                object.contactMessage = $root.Message.ContactMessage.toObject(message.contactMessage, options);
            if (message.locationMessage != null && message.hasOwnProperty("locationMessage"))
                object.locationMessage = $root.Message.LocationMessage.toObject(message.locationMessage, options);
            if (message.extendedTextMessage != null && message.hasOwnProperty("extendedTextMessage"))
                object.extendedTextMessage = $root.Message.ExtendedTextMessage.toObject(message.extendedTextMessage, options);
            if (message.documentMessage != null && message.hasOwnProperty("documentMessage"))
                object.documentMessage = $root.Message.DocumentMessage.toObject(message.documentMessage, options);
            if (message.audioMessage != null && message.hasOwnProperty("audioMessage"))
                object.audioMessage = $root.Message.AudioMessage.toObject(message.audioMessage, options);
            if (message.videoMessage != null && message.hasOwnProperty("videoMessage"))
                object.videoMessage = $root.Message.VideoMessage.toObject(message.videoMessage, options);
            if (message.call != null && message.hasOwnProperty("call"))
                object.call = $root.Message.Call.toObject(message.call, options);
            if (message.chat != null && message.hasOwnProperty("chat"))
                object.chat = $root.Message.Chat.toObject(message.chat, options);
            if (message.protocolMessage != null && message.hasOwnProperty("protocolMessage"))
                object.protocolMessage = $root.Message.ProtocolMessage.toObject(message.protocolMessage, options);
            if (message.contactsArrayMessage != null && message.hasOwnProperty("contactsArrayMessage"))
                object.contactsArrayMessage = $root.Message.ContactsArrayMessage.toObject(message.contactsArrayMessage, options);
            if (message.highlyStructuredMessage != null && message.hasOwnProperty("highlyStructuredMessage"))
                object.highlyStructuredMessage = $root.Message.HighlyStructuredMessage.toObject(message.highlyStructuredMessage, options);
            return object;
        };

        /**
         * Converts this Message to JSON.
         * @function toJSON
         * @memberof Message.Message
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Message.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Message;
    })();

    return Message;
})();

$root.textsecure = (function() {

    /**
     * Namespace textsecure.
     * @exports textsecure
     * @namespace
     */
    var textsecure = {};

    textsecure.SessionStructure = (function() {

        /**
         * Properties of a SessionStructure.
         * @memberof textsecure
         * @interface ISessionStructure
         * @property {number|null} [sessionVersion] SessionStructure sessionVersion
         * @property {Uint8Array|null} [localIdentityPublic] SessionStructure localIdentityPublic
         * @property {Uint8Array|null} [remoteIdentityPublic] SessionStructure remoteIdentityPublic
         * @property {Uint8Array|null} [rootKey] SessionStructure rootKey
         * @property {number|null} [previousCounter] SessionStructure previousCounter
         * @property {textsecure.SessionStructure.IChain|null} [senderChain] SessionStructure senderChain
         * @property {Array.<textsecure.SessionStructure.IChain>|null} [receiverChains] SessionStructure receiverChains
         * @property {textsecure.SessionStructure.IPendingKeyExchange|null} [pendingKeyExchange] SessionStructure pendingKeyExchange
         * @property {textsecure.SessionStructure.IPendingPreKey|null} [pendingPreKey] SessionStructure pendingPreKey
         * @property {number|null} [remoteRegistrationId] SessionStructure remoteRegistrationId
         * @property {number|null} [localRegistrationId] SessionStructure localRegistrationId
         * @property {boolean|null} [needsRefresh] SessionStructure needsRefresh
         * @property {Uint8Array|null} [aliceBaseKey] SessionStructure aliceBaseKey
         */

        /**
         * Constructs a new SessionStructure.
         * @memberof textsecure
         * @classdesc Represents a SessionStructure.
         * @implements ISessionStructure
         * @constructor
         * @param {textsecure.ISessionStructure=} [properties] Properties to set
         */
        function SessionStructure(properties) {
            this.receiverChains = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SessionStructure sessionVersion.
         * @member {number} sessionVersion
         * @memberof textsecure.SessionStructure
         * @instance
         */
        SessionStructure.prototype.sessionVersion = 0;

        /**
         * SessionStructure localIdentityPublic.
         * @member {Uint8Array} localIdentityPublic
         * @memberof textsecure.SessionStructure
         * @instance
         */
        SessionStructure.prototype.localIdentityPublic = $util.newBuffer([]);

        /**
         * SessionStructure remoteIdentityPublic.
         * @member {Uint8Array} remoteIdentityPublic
         * @memberof textsecure.SessionStructure
         * @instance
         */
        SessionStructure.prototype.remoteIdentityPublic = $util.newBuffer([]);

        /**
         * SessionStructure rootKey.
         * @member {Uint8Array} rootKey
         * @memberof textsecure.SessionStructure
         * @instance
         */
        SessionStructure.prototype.rootKey = $util.newBuffer([]);

        /**
         * SessionStructure previousCounter.
         * @member {number} previousCounter
         * @memberof textsecure.SessionStructure
         * @instance
         */
        SessionStructure.prototype.previousCounter = 0;

        /**
         * SessionStructure senderChain.
         * @member {textsecure.SessionStructure.IChain|null|undefined} senderChain
         * @memberof textsecure.SessionStructure
         * @instance
         */
        SessionStructure.prototype.senderChain = null;

        /**
         * SessionStructure receiverChains.
         * @member {Array.<textsecure.SessionStructure.IChain>} receiverChains
         * @memberof textsecure.SessionStructure
         * @instance
         */
        SessionStructure.prototype.receiverChains = $util.emptyArray;

        /**
         * SessionStructure pendingKeyExchange.
         * @member {textsecure.SessionStructure.IPendingKeyExchange|null|undefined} pendingKeyExchange
         * @memberof textsecure.SessionStructure
         * @instance
         */
        SessionStructure.prototype.pendingKeyExchange = null;

        /**
         * SessionStructure pendingPreKey.
         * @member {textsecure.SessionStructure.IPendingPreKey|null|undefined} pendingPreKey
         * @memberof textsecure.SessionStructure
         * @instance
         */
        SessionStructure.prototype.pendingPreKey = null;

        /**
         * SessionStructure remoteRegistrationId.
         * @member {number} remoteRegistrationId
         * @memberof textsecure.SessionStructure
         * @instance
         */
        SessionStructure.prototype.remoteRegistrationId = 0;

        /**
         * SessionStructure localRegistrationId.
         * @member {number} localRegistrationId
         * @memberof textsecure.SessionStructure
         * @instance
         */
        SessionStructure.prototype.localRegistrationId = 0;

        /**
         * SessionStructure needsRefresh.
         * @member {boolean} needsRefresh
         * @memberof textsecure.SessionStructure
         * @instance
         */
        SessionStructure.prototype.needsRefresh = false;

        /**
         * SessionStructure aliceBaseKey.
         * @member {Uint8Array} aliceBaseKey
         * @memberof textsecure.SessionStructure
         * @instance
         */
        SessionStructure.prototype.aliceBaseKey = $util.newBuffer([]);

        /**
         * Creates a new SessionStructure instance using the specified properties.
         * @function create
         * @memberof textsecure.SessionStructure
         * @static
         * @param {textsecure.ISessionStructure=} [properties] Properties to set
         * @returns {textsecure.SessionStructure} SessionStructure instance
         */
        SessionStructure.create = function create(properties) {
            return new SessionStructure(properties);
        };

        /**
         * Encodes the specified SessionStructure message. Does not implicitly {@link textsecure.SessionStructure.verify|verify} messages.
         * @function encode
         * @memberof textsecure.SessionStructure
         * @static
         * @param {textsecure.ISessionStructure} message SessionStructure message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SessionStructure.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.sessionVersion != null && Object.hasOwnProperty.call(message, "sessionVersion"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.sessionVersion);
            if (message.localIdentityPublic != null && Object.hasOwnProperty.call(message, "localIdentityPublic"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.localIdentityPublic);
            if (message.remoteIdentityPublic != null && Object.hasOwnProperty.call(message, "remoteIdentityPublic"))
                writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.remoteIdentityPublic);
            if (message.rootKey != null && Object.hasOwnProperty.call(message, "rootKey"))
                writer.uint32(/* id 4, wireType 2 =*/34).bytes(message.rootKey);
            if (message.previousCounter != null && Object.hasOwnProperty.call(message, "previousCounter"))
                writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.previousCounter);
            if (message.senderChain != null && Object.hasOwnProperty.call(message, "senderChain"))
                $root.textsecure.SessionStructure.Chain.encode(message.senderChain, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
            if (message.receiverChains != null && message.receiverChains.length)
                for (var i = 0; i < message.receiverChains.length; ++i)
                    $root.textsecure.SessionStructure.Chain.encode(message.receiverChains[i], writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
            if (message.pendingKeyExchange != null && Object.hasOwnProperty.call(message, "pendingKeyExchange"))
                $root.textsecure.SessionStructure.PendingKeyExchange.encode(message.pendingKeyExchange, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
            if (message.pendingPreKey != null && Object.hasOwnProperty.call(message, "pendingPreKey"))
                $root.textsecure.SessionStructure.PendingPreKey.encode(message.pendingPreKey, writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
            if (message.remoteRegistrationId != null && Object.hasOwnProperty.call(message, "remoteRegistrationId"))
                writer.uint32(/* id 10, wireType 0 =*/80).uint32(message.remoteRegistrationId);
            if (message.localRegistrationId != null && Object.hasOwnProperty.call(message, "localRegistrationId"))
                writer.uint32(/* id 11, wireType 0 =*/88).uint32(message.localRegistrationId);
            if (message.needsRefresh != null && Object.hasOwnProperty.call(message, "needsRefresh"))
                writer.uint32(/* id 12, wireType 0 =*/96).bool(message.needsRefresh);
            if (message.aliceBaseKey != null && Object.hasOwnProperty.call(message, "aliceBaseKey"))
                writer.uint32(/* id 13, wireType 2 =*/106).bytes(message.aliceBaseKey);
            return writer;
        };

        /**
         * Encodes the specified SessionStructure message, length delimited. Does not implicitly {@link textsecure.SessionStructure.verify|verify} messages.
         * @function encodeDelimited
         * @memberof textsecure.SessionStructure
         * @static
         * @param {textsecure.ISessionStructure} message SessionStructure message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SessionStructure.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SessionStructure message from the specified reader or buffer.
         * @function decode
         * @memberof textsecure.SessionStructure
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {textsecure.SessionStructure} SessionStructure
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SessionStructure.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.textsecure.SessionStructure();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.sessionVersion = reader.uint32();
                    break;
                case 2:
                    message.localIdentityPublic = reader.bytes();
                    break;
                case 3:
                    message.remoteIdentityPublic = reader.bytes();
                    break;
                case 4:
                    message.rootKey = reader.bytes();
                    break;
                case 5:
                    message.previousCounter = reader.uint32();
                    break;
                case 6:
                    message.senderChain = $root.textsecure.SessionStructure.Chain.decode(reader, reader.uint32());
                    break;
                case 7:
                    if (!(message.receiverChains && message.receiverChains.length))
                        message.receiverChains = [];
                    message.receiverChains.push($root.textsecure.SessionStructure.Chain.decode(reader, reader.uint32()));
                    break;
                case 8:
                    message.pendingKeyExchange = $root.textsecure.SessionStructure.PendingKeyExchange.decode(reader, reader.uint32());
                    break;
                case 9:
                    message.pendingPreKey = $root.textsecure.SessionStructure.PendingPreKey.decode(reader, reader.uint32());
                    break;
                case 10:
                    message.remoteRegistrationId = reader.uint32();
                    break;
                case 11:
                    message.localRegistrationId = reader.uint32();
                    break;
                case 12:
                    message.needsRefresh = reader.bool();
                    break;
                case 13:
                    message.aliceBaseKey = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SessionStructure message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof textsecure.SessionStructure
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {textsecure.SessionStructure} SessionStructure
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SessionStructure.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SessionStructure message.
         * @function verify
         * @memberof textsecure.SessionStructure
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SessionStructure.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.sessionVersion != null && message.hasOwnProperty("sessionVersion"))
                if (!$util.isInteger(message.sessionVersion))
                    return "sessionVersion: integer expected";
            if (message.localIdentityPublic != null && message.hasOwnProperty("localIdentityPublic"))
                if (!(message.localIdentityPublic && typeof message.localIdentityPublic.length === "number" || $util.isString(message.localIdentityPublic)))
                    return "localIdentityPublic: buffer expected";
            if (message.remoteIdentityPublic != null && message.hasOwnProperty("remoteIdentityPublic"))
                if (!(message.remoteIdentityPublic && typeof message.remoteIdentityPublic.length === "number" || $util.isString(message.remoteIdentityPublic)))
                    return "remoteIdentityPublic: buffer expected";
            if (message.rootKey != null && message.hasOwnProperty("rootKey"))
                if (!(message.rootKey && typeof message.rootKey.length === "number" || $util.isString(message.rootKey)))
                    return "rootKey: buffer expected";
            if (message.previousCounter != null && message.hasOwnProperty("previousCounter"))
                if (!$util.isInteger(message.previousCounter))
                    return "previousCounter: integer expected";
            if (message.senderChain != null && message.hasOwnProperty("senderChain")) {
                var error = $root.textsecure.SessionStructure.Chain.verify(message.senderChain);
                if (error)
                    return "senderChain." + error;
            }
            if (message.receiverChains != null && message.hasOwnProperty("receiverChains")) {
                if (!Array.isArray(message.receiverChains))
                    return "receiverChains: array expected";
                for (var i = 0; i < message.receiverChains.length; ++i) {
                    var error = $root.textsecure.SessionStructure.Chain.verify(message.receiverChains[i]);
                    if (error)
                        return "receiverChains." + error;
                }
            }
            if (message.pendingKeyExchange != null && message.hasOwnProperty("pendingKeyExchange")) {
                var error = $root.textsecure.SessionStructure.PendingKeyExchange.verify(message.pendingKeyExchange);
                if (error)
                    return "pendingKeyExchange." + error;
            }
            if (message.pendingPreKey != null && message.hasOwnProperty("pendingPreKey")) {
                var error = $root.textsecure.SessionStructure.PendingPreKey.verify(message.pendingPreKey);
                if (error)
                    return "pendingPreKey." + error;
            }
            if (message.remoteRegistrationId != null && message.hasOwnProperty("remoteRegistrationId"))
                if (!$util.isInteger(message.remoteRegistrationId))
                    return "remoteRegistrationId: integer expected";
            if (message.localRegistrationId != null && message.hasOwnProperty("localRegistrationId"))
                if (!$util.isInteger(message.localRegistrationId))
                    return "localRegistrationId: integer expected";
            if (message.needsRefresh != null && message.hasOwnProperty("needsRefresh"))
                if (typeof message.needsRefresh !== "boolean")
                    return "needsRefresh: boolean expected";
            if (message.aliceBaseKey != null && message.hasOwnProperty("aliceBaseKey"))
                if (!(message.aliceBaseKey && typeof message.aliceBaseKey.length === "number" || $util.isString(message.aliceBaseKey)))
                    return "aliceBaseKey: buffer expected";
            return null;
        };

        /**
         * Creates a SessionStructure message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof textsecure.SessionStructure
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {textsecure.SessionStructure} SessionStructure
         */
        SessionStructure.fromObject = function fromObject(object) {
            if (object instanceof $root.textsecure.SessionStructure)
                return object;
            var message = new $root.textsecure.SessionStructure();
            if (object.sessionVersion != null)
                message.sessionVersion = object.sessionVersion >>> 0;
            if (object.localIdentityPublic != null)
                if (typeof object.localIdentityPublic === "string")
                    $util.base64.decode(object.localIdentityPublic, message.localIdentityPublic = $util.newBuffer($util.base64.length(object.localIdentityPublic)), 0);
                else if (object.localIdentityPublic.length)
                    message.localIdentityPublic = object.localIdentityPublic;
            if (object.remoteIdentityPublic != null)
                if (typeof object.remoteIdentityPublic === "string")
                    $util.base64.decode(object.remoteIdentityPublic, message.remoteIdentityPublic = $util.newBuffer($util.base64.length(object.remoteIdentityPublic)), 0);
                else if (object.remoteIdentityPublic.length)
                    message.remoteIdentityPublic = object.remoteIdentityPublic;
            if (object.rootKey != null)
                if (typeof object.rootKey === "string")
                    $util.base64.decode(object.rootKey, message.rootKey = $util.newBuffer($util.base64.length(object.rootKey)), 0);
                else if (object.rootKey.length)
                    message.rootKey = object.rootKey;
            if (object.previousCounter != null)
                message.previousCounter = object.previousCounter >>> 0;
            if (object.senderChain != null) {
                if (typeof object.senderChain !== "object")
                    throw TypeError(".textsecure.SessionStructure.senderChain: object expected");
                message.senderChain = $root.textsecure.SessionStructure.Chain.fromObject(object.senderChain);
            }
            if (object.receiverChains) {
                if (!Array.isArray(object.receiverChains))
                    throw TypeError(".textsecure.SessionStructure.receiverChains: array expected");
                message.receiverChains = [];
                for (var i = 0; i < object.receiverChains.length; ++i) {
                    if (typeof object.receiverChains[i] !== "object")
                        throw TypeError(".textsecure.SessionStructure.receiverChains: object expected");
                    message.receiverChains[i] = $root.textsecure.SessionStructure.Chain.fromObject(object.receiverChains[i]);
                }
            }
            if (object.pendingKeyExchange != null) {
                if (typeof object.pendingKeyExchange !== "object")
                    throw TypeError(".textsecure.SessionStructure.pendingKeyExchange: object expected");
                message.pendingKeyExchange = $root.textsecure.SessionStructure.PendingKeyExchange.fromObject(object.pendingKeyExchange);
            }
            if (object.pendingPreKey != null) {
                if (typeof object.pendingPreKey !== "object")
                    throw TypeError(".textsecure.SessionStructure.pendingPreKey: object expected");
                message.pendingPreKey = $root.textsecure.SessionStructure.PendingPreKey.fromObject(object.pendingPreKey);
            }
            if (object.remoteRegistrationId != null)
                message.remoteRegistrationId = object.remoteRegistrationId >>> 0;
            if (object.localRegistrationId != null)
                message.localRegistrationId = object.localRegistrationId >>> 0;
            if (object.needsRefresh != null)
                message.needsRefresh = Boolean(object.needsRefresh);
            if (object.aliceBaseKey != null)
                if (typeof object.aliceBaseKey === "string")
                    $util.base64.decode(object.aliceBaseKey, message.aliceBaseKey = $util.newBuffer($util.base64.length(object.aliceBaseKey)), 0);
                else if (object.aliceBaseKey.length)
                    message.aliceBaseKey = object.aliceBaseKey;
            return message;
        };

        /**
         * Creates a plain object from a SessionStructure message. Also converts values to other types if specified.
         * @function toObject
         * @memberof textsecure.SessionStructure
         * @static
         * @param {textsecure.SessionStructure} message SessionStructure
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SessionStructure.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.receiverChains = [];
            if (options.defaults) {
                object.sessionVersion = 0;
                if (options.bytes === String)
                    object.localIdentityPublic = "";
                else {
                    object.localIdentityPublic = [];
                    if (options.bytes !== Array)
                        object.localIdentityPublic = $util.newBuffer(object.localIdentityPublic);
                }
                if (options.bytes === String)
                    object.remoteIdentityPublic = "";
                else {
                    object.remoteIdentityPublic = [];
                    if (options.bytes !== Array)
                        object.remoteIdentityPublic = $util.newBuffer(object.remoteIdentityPublic);
                }
                if (options.bytes === String)
                    object.rootKey = "";
                else {
                    object.rootKey = [];
                    if (options.bytes !== Array)
                        object.rootKey = $util.newBuffer(object.rootKey);
                }
                object.previousCounter = 0;
                object.senderChain = null;
                object.pendingKeyExchange = null;
                object.pendingPreKey = null;
                object.remoteRegistrationId = 0;
                object.localRegistrationId = 0;
                object.needsRefresh = false;
                if (options.bytes === String)
                    object.aliceBaseKey = "";
                else {
                    object.aliceBaseKey = [];
                    if (options.bytes !== Array)
                        object.aliceBaseKey = $util.newBuffer(object.aliceBaseKey);
                }
            }
            if (message.sessionVersion != null && message.hasOwnProperty("sessionVersion"))
                object.sessionVersion = message.sessionVersion;
            if (message.localIdentityPublic != null && message.hasOwnProperty("localIdentityPublic"))
                object.localIdentityPublic = options.bytes === String ? $util.base64.encode(message.localIdentityPublic, 0, message.localIdentityPublic.length) : options.bytes === Array ? Array.prototype.slice.call(message.localIdentityPublic) : message.localIdentityPublic;
            if (message.remoteIdentityPublic != null && message.hasOwnProperty("remoteIdentityPublic"))
                object.remoteIdentityPublic = options.bytes === String ? $util.base64.encode(message.remoteIdentityPublic, 0, message.remoteIdentityPublic.length) : options.bytes === Array ? Array.prototype.slice.call(message.remoteIdentityPublic) : message.remoteIdentityPublic;
            if (message.rootKey != null && message.hasOwnProperty("rootKey"))
                object.rootKey = options.bytes === String ? $util.base64.encode(message.rootKey, 0, message.rootKey.length) : options.bytes === Array ? Array.prototype.slice.call(message.rootKey) : message.rootKey;
            if (message.previousCounter != null && message.hasOwnProperty("previousCounter"))
                object.previousCounter = message.previousCounter;
            if (message.senderChain != null && message.hasOwnProperty("senderChain"))
                object.senderChain = $root.textsecure.SessionStructure.Chain.toObject(message.senderChain, options);
            if (message.receiverChains && message.receiverChains.length) {
                object.receiverChains = [];
                for (var j = 0; j < message.receiverChains.length; ++j)
                    object.receiverChains[j] = $root.textsecure.SessionStructure.Chain.toObject(message.receiverChains[j], options);
            }
            if (message.pendingKeyExchange != null && message.hasOwnProperty("pendingKeyExchange"))
                object.pendingKeyExchange = $root.textsecure.SessionStructure.PendingKeyExchange.toObject(message.pendingKeyExchange, options);
            if (message.pendingPreKey != null && message.hasOwnProperty("pendingPreKey"))
                object.pendingPreKey = $root.textsecure.SessionStructure.PendingPreKey.toObject(message.pendingPreKey, options);
            if (message.remoteRegistrationId != null && message.hasOwnProperty("remoteRegistrationId"))
                object.remoteRegistrationId = message.remoteRegistrationId;
            if (message.localRegistrationId != null && message.hasOwnProperty("localRegistrationId"))
                object.localRegistrationId = message.localRegistrationId;
            if (message.needsRefresh != null && message.hasOwnProperty("needsRefresh"))
                object.needsRefresh = message.needsRefresh;
            if (message.aliceBaseKey != null && message.hasOwnProperty("aliceBaseKey"))
                object.aliceBaseKey = options.bytes === String ? $util.base64.encode(message.aliceBaseKey, 0, message.aliceBaseKey.length) : options.bytes === Array ? Array.prototype.slice.call(message.aliceBaseKey) : message.aliceBaseKey;
            return object;
        };

        /**
         * Converts this SessionStructure to JSON.
         * @function toJSON
         * @memberof textsecure.SessionStructure
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SessionStructure.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        SessionStructure.Chain = (function() {

            /**
             * Properties of a Chain.
             * @memberof textsecure.SessionStructure
             * @interface IChain
             * @property {Uint8Array|null} [senderRatchetKey] Chain senderRatchetKey
             * @property {Uint8Array|null} [senderRatchetKeyPrivate] Chain senderRatchetKeyPrivate
             * @property {textsecure.SessionStructure.Chain.IChainKey|null} [chainKey] Chain chainKey
             * @property {Array.<textsecure.SessionStructure.Chain.IMessageKey>|null} [messageKeys] Chain messageKeys
             */

            /**
             * Constructs a new Chain.
             * @memberof textsecure.SessionStructure
             * @classdesc Represents a Chain.
             * @implements IChain
             * @constructor
             * @param {textsecure.SessionStructure.IChain=} [properties] Properties to set
             */
            function Chain(properties) {
                this.messageKeys = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Chain senderRatchetKey.
             * @member {Uint8Array} senderRatchetKey
             * @memberof textsecure.SessionStructure.Chain
             * @instance
             */
            Chain.prototype.senderRatchetKey = $util.newBuffer([]);

            /**
             * Chain senderRatchetKeyPrivate.
             * @member {Uint8Array} senderRatchetKeyPrivate
             * @memberof textsecure.SessionStructure.Chain
             * @instance
             */
            Chain.prototype.senderRatchetKeyPrivate = $util.newBuffer([]);

            /**
             * Chain chainKey.
             * @member {textsecure.SessionStructure.Chain.IChainKey|null|undefined} chainKey
             * @memberof textsecure.SessionStructure.Chain
             * @instance
             */
            Chain.prototype.chainKey = null;

            /**
             * Chain messageKeys.
             * @member {Array.<textsecure.SessionStructure.Chain.IMessageKey>} messageKeys
             * @memberof textsecure.SessionStructure.Chain
             * @instance
             */
            Chain.prototype.messageKeys = $util.emptyArray;

            /**
             * Creates a new Chain instance using the specified properties.
             * @function create
             * @memberof textsecure.SessionStructure.Chain
             * @static
             * @param {textsecure.SessionStructure.IChain=} [properties] Properties to set
             * @returns {textsecure.SessionStructure.Chain} Chain instance
             */
            Chain.create = function create(properties) {
                return new Chain(properties);
            };

            /**
             * Encodes the specified Chain message. Does not implicitly {@link textsecure.SessionStructure.Chain.verify|verify} messages.
             * @function encode
             * @memberof textsecure.SessionStructure.Chain
             * @static
             * @param {textsecure.SessionStructure.IChain} message Chain message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Chain.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.senderRatchetKey != null && Object.hasOwnProperty.call(message, "senderRatchetKey"))
                    writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.senderRatchetKey);
                if (message.senderRatchetKeyPrivate != null && Object.hasOwnProperty.call(message, "senderRatchetKeyPrivate"))
                    writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.senderRatchetKeyPrivate);
                if (message.chainKey != null && Object.hasOwnProperty.call(message, "chainKey"))
                    $root.textsecure.SessionStructure.Chain.ChainKey.encode(message.chainKey, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                if (message.messageKeys != null && message.messageKeys.length)
                    for (var i = 0; i < message.messageKeys.length; ++i)
                        $root.textsecure.SessionStructure.Chain.MessageKey.encode(message.messageKeys[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified Chain message, length delimited. Does not implicitly {@link textsecure.SessionStructure.Chain.verify|verify} messages.
             * @function encodeDelimited
             * @memberof textsecure.SessionStructure.Chain
             * @static
             * @param {textsecure.SessionStructure.IChain} message Chain message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Chain.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Chain message from the specified reader or buffer.
             * @function decode
             * @memberof textsecure.SessionStructure.Chain
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {textsecure.SessionStructure.Chain} Chain
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Chain.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.textsecure.SessionStructure.Chain();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.senderRatchetKey = reader.bytes();
                        break;
                    case 2:
                        message.senderRatchetKeyPrivate = reader.bytes();
                        break;
                    case 3:
                        message.chainKey = $root.textsecure.SessionStructure.Chain.ChainKey.decode(reader, reader.uint32());
                        break;
                    case 4:
                        if (!(message.messageKeys && message.messageKeys.length))
                            message.messageKeys = [];
                        message.messageKeys.push($root.textsecure.SessionStructure.Chain.MessageKey.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a Chain message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof textsecure.SessionStructure.Chain
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {textsecure.SessionStructure.Chain} Chain
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Chain.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Chain message.
             * @function verify
             * @memberof textsecure.SessionStructure.Chain
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Chain.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.senderRatchetKey != null && message.hasOwnProperty("senderRatchetKey"))
                    if (!(message.senderRatchetKey && typeof message.senderRatchetKey.length === "number" || $util.isString(message.senderRatchetKey)))
                        return "senderRatchetKey: buffer expected";
                if (message.senderRatchetKeyPrivate != null && message.hasOwnProperty("senderRatchetKeyPrivate"))
                    if (!(message.senderRatchetKeyPrivate && typeof message.senderRatchetKeyPrivate.length === "number" || $util.isString(message.senderRatchetKeyPrivate)))
                        return "senderRatchetKeyPrivate: buffer expected";
                if (message.chainKey != null && message.hasOwnProperty("chainKey")) {
                    var error = $root.textsecure.SessionStructure.Chain.ChainKey.verify(message.chainKey);
                    if (error)
                        return "chainKey." + error;
                }
                if (message.messageKeys != null && message.hasOwnProperty("messageKeys")) {
                    if (!Array.isArray(message.messageKeys))
                        return "messageKeys: array expected";
                    for (var i = 0; i < message.messageKeys.length; ++i) {
                        var error = $root.textsecure.SessionStructure.Chain.MessageKey.verify(message.messageKeys[i]);
                        if (error)
                            return "messageKeys." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a Chain message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof textsecure.SessionStructure.Chain
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {textsecure.SessionStructure.Chain} Chain
             */
            Chain.fromObject = function fromObject(object) {
                if (object instanceof $root.textsecure.SessionStructure.Chain)
                    return object;
                var message = new $root.textsecure.SessionStructure.Chain();
                if (object.senderRatchetKey != null)
                    if (typeof object.senderRatchetKey === "string")
                        $util.base64.decode(object.senderRatchetKey, message.senderRatchetKey = $util.newBuffer($util.base64.length(object.senderRatchetKey)), 0);
                    else if (object.senderRatchetKey.length)
                        message.senderRatchetKey = object.senderRatchetKey;
                if (object.senderRatchetKeyPrivate != null)
                    if (typeof object.senderRatchetKeyPrivate === "string")
                        $util.base64.decode(object.senderRatchetKeyPrivate, message.senderRatchetKeyPrivate = $util.newBuffer($util.base64.length(object.senderRatchetKeyPrivate)), 0);
                    else if (object.senderRatchetKeyPrivate.length)
                        message.senderRatchetKeyPrivate = object.senderRatchetKeyPrivate;
                if (object.chainKey != null) {
                    if (typeof object.chainKey !== "object")
                        throw TypeError(".textsecure.SessionStructure.Chain.chainKey: object expected");
                    message.chainKey = $root.textsecure.SessionStructure.Chain.ChainKey.fromObject(object.chainKey);
                }
                if (object.messageKeys) {
                    if (!Array.isArray(object.messageKeys))
                        throw TypeError(".textsecure.SessionStructure.Chain.messageKeys: array expected");
                    message.messageKeys = [];
                    for (var i = 0; i < object.messageKeys.length; ++i) {
                        if (typeof object.messageKeys[i] !== "object")
                            throw TypeError(".textsecure.SessionStructure.Chain.messageKeys: object expected");
                        message.messageKeys[i] = $root.textsecure.SessionStructure.Chain.MessageKey.fromObject(object.messageKeys[i]);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from a Chain message. Also converts values to other types if specified.
             * @function toObject
             * @memberof textsecure.SessionStructure.Chain
             * @static
             * @param {textsecure.SessionStructure.Chain} message Chain
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Chain.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.messageKeys = [];
                if (options.defaults) {
                    if (options.bytes === String)
                        object.senderRatchetKey = "";
                    else {
                        object.senderRatchetKey = [];
                        if (options.bytes !== Array)
                            object.senderRatchetKey = $util.newBuffer(object.senderRatchetKey);
                    }
                    if (options.bytes === String)
                        object.senderRatchetKeyPrivate = "";
                    else {
                        object.senderRatchetKeyPrivate = [];
                        if (options.bytes !== Array)
                            object.senderRatchetKeyPrivate = $util.newBuffer(object.senderRatchetKeyPrivate);
                    }
                    object.chainKey = null;
                }
                if (message.senderRatchetKey != null && message.hasOwnProperty("senderRatchetKey"))
                    object.senderRatchetKey = options.bytes === String ? $util.base64.encode(message.senderRatchetKey, 0, message.senderRatchetKey.length) : options.bytes === Array ? Array.prototype.slice.call(message.senderRatchetKey) : message.senderRatchetKey;
                if (message.senderRatchetKeyPrivate != null && message.hasOwnProperty("senderRatchetKeyPrivate"))
                    object.senderRatchetKeyPrivate = options.bytes === String ? $util.base64.encode(message.senderRatchetKeyPrivate, 0, message.senderRatchetKeyPrivate.length) : options.bytes === Array ? Array.prototype.slice.call(message.senderRatchetKeyPrivate) : message.senderRatchetKeyPrivate;
                if (message.chainKey != null && message.hasOwnProperty("chainKey"))
                    object.chainKey = $root.textsecure.SessionStructure.Chain.ChainKey.toObject(message.chainKey, options);
                if (message.messageKeys && message.messageKeys.length) {
                    object.messageKeys = [];
                    for (var j = 0; j < message.messageKeys.length; ++j)
                        object.messageKeys[j] = $root.textsecure.SessionStructure.Chain.MessageKey.toObject(message.messageKeys[j], options);
                }
                return object;
            };

            /**
             * Converts this Chain to JSON.
             * @function toJSON
             * @memberof textsecure.SessionStructure.Chain
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Chain.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            Chain.ChainKey = (function() {

                /**
                 * Properties of a ChainKey.
                 * @memberof textsecure.SessionStructure.Chain
                 * @interface IChainKey
                 * @property {number|null} [index] ChainKey index
                 * @property {Uint8Array|null} [key] ChainKey key
                 */

                /**
                 * Constructs a new ChainKey.
                 * @memberof textsecure.SessionStructure.Chain
                 * @classdesc Represents a ChainKey.
                 * @implements IChainKey
                 * @constructor
                 * @param {textsecure.SessionStructure.Chain.IChainKey=} [properties] Properties to set
                 */
                function ChainKey(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * ChainKey index.
                 * @member {number} index
                 * @memberof textsecure.SessionStructure.Chain.ChainKey
                 * @instance
                 */
                ChainKey.prototype.index = 0;

                /**
                 * ChainKey key.
                 * @member {Uint8Array} key
                 * @memberof textsecure.SessionStructure.Chain.ChainKey
                 * @instance
                 */
                ChainKey.prototype.key = $util.newBuffer([]);

                /**
                 * Creates a new ChainKey instance using the specified properties.
                 * @function create
                 * @memberof textsecure.SessionStructure.Chain.ChainKey
                 * @static
                 * @param {textsecure.SessionStructure.Chain.IChainKey=} [properties] Properties to set
                 * @returns {textsecure.SessionStructure.Chain.ChainKey} ChainKey instance
                 */
                ChainKey.create = function create(properties) {
                    return new ChainKey(properties);
                };

                /**
                 * Encodes the specified ChainKey message. Does not implicitly {@link textsecure.SessionStructure.Chain.ChainKey.verify|verify} messages.
                 * @function encode
                 * @memberof textsecure.SessionStructure.Chain.ChainKey
                 * @static
                 * @param {textsecure.SessionStructure.Chain.IChainKey} message ChainKey message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ChainKey.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.index != null && Object.hasOwnProperty.call(message, "index"))
                        writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.index);
                    if (message.key != null && Object.hasOwnProperty.call(message, "key"))
                        writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.key);
                    return writer;
                };

                /**
                 * Encodes the specified ChainKey message, length delimited. Does not implicitly {@link textsecure.SessionStructure.Chain.ChainKey.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof textsecure.SessionStructure.Chain.ChainKey
                 * @static
                 * @param {textsecure.SessionStructure.Chain.IChainKey} message ChainKey message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ChainKey.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a ChainKey message from the specified reader or buffer.
                 * @function decode
                 * @memberof textsecure.SessionStructure.Chain.ChainKey
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {textsecure.SessionStructure.Chain.ChainKey} ChainKey
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ChainKey.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.textsecure.SessionStructure.Chain.ChainKey();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.index = reader.uint32();
                            break;
                        case 2:
                            message.key = reader.bytes();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a ChainKey message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof textsecure.SessionStructure.Chain.ChainKey
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {textsecure.SessionStructure.Chain.ChainKey} ChainKey
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ChainKey.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a ChainKey message.
                 * @function verify
                 * @memberof textsecure.SessionStructure.Chain.ChainKey
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                ChainKey.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.index != null && message.hasOwnProperty("index"))
                        if (!$util.isInteger(message.index))
                            return "index: integer expected";
                    if (message.key != null && message.hasOwnProperty("key"))
                        if (!(message.key && typeof message.key.length === "number" || $util.isString(message.key)))
                            return "key: buffer expected";
                    return null;
                };

                /**
                 * Creates a ChainKey message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof textsecure.SessionStructure.Chain.ChainKey
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {textsecure.SessionStructure.Chain.ChainKey} ChainKey
                 */
                ChainKey.fromObject = function fromObject(object) {
                    if (object instanceof $root.textsecure.SessionStructure.Chain.ChainKey)
                        return object;
                    var message = new $root.textsecure.SessionStructure.Chain.ChainKey();
                    if (object.index != null)
                        message.index = object.index >>> 0;
                    if (object.key != null)
                        if (typeof object.key === "string")
                            $util.base64.decode(object.key, message.key = $util.newBuffer($util.base64.length(object.key)), 0);
                        else if (object.key.length)
                            message.key = object.key;
                    return message;
                };

                /**
                 * Creates a plain object from a ChainKey message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof textsecure.SessionStructure.Chain.ChainKey
                 * @static
                 * @param {textsecure.SessionStructure.Chain.ChainKey} message ChainKey
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                ChainKey.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.index = 0;
                        if (options.bytes === String)
                            object.key = "";
                        else {
                            object.key = [];
                            if (options.bytes !== Array)
                                object.key = $util.newBuffer(object.key);
                        }
                    }
                    if (message.index != null && message.hasOwnProperty("index"))
                        object.index = message.index;
                    if (message.key != null && message.hasOwnProperty("key"))
                        object.key = options.bytes === String ? $util.base64.encode(message.key, 0, message.key.length) : options.bytes === Array ? Array.prototype.slice.call(message.key) : message.key;
                    return object;
                };

                /**
                 * Converts this ChainKey to JSON.
                 * @function toJSON
                 * @memberof textsecure.SessionStructure.Chain.ChainKey
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                ChainKey.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return ChainKey;
            })();

            Chain.MessageKey = (function() {

                /**
                 * Properties of a MessageKey.
                 * @memberof textsecure.SessionStructure.Chain
                 * @interface IMessageKey
                 * @property {number|null} [index] MessageKey index
                 * @property {Uint8Array|null} [cipherKey] MessageKey cipherKey
                 * @property {Uint8Array|null} [macKey] MessageKey macKey
                 * @property {Uint8Array|null} [iv] MessageKey iv
                 */

                /**
                 * Constructs a new MessageKey.
                 * @memberof textsecure.SessionStructure.Chain
                 * @classdesc Represents a MessageKey.
                 * @implements IMessageKey
                 * @constructor
                 * @param {textsecure.SessionStructure.Chain.IMessageKey=} [properties] Properties to set
                 */
                function MessageKey(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * MessageKey index.
                 * @member {number} index
                 * @memberof textsecure.SessionStructure.Chain.MessageKey
                 * @instance
                 */
                MessageKey.prototype.index = 0;

                /**
                 * MessageKey cipherKey.
                 * @member {Uint8Array} cipherKey
                 * @memberof textsecure.SessionStructure.Chain.MessageKey
                 * @instance
                 */
                MessageKey.prototype.cipherKey = $util.newBuffer([]);

                /**
                 * MessageKey macKey.
                 * @member {Uint8Array} macKey
                 * @memberof textsecure.SessionStructure.Chain.MessageKey
                 * @instance
                 */
                MessageKey.prototype.macKey = $util.newBuffer([]);

                /**
                 * MessageKey iv.
                 * @member {Uint8Array} iv
                 * @memberof textsecure.SessionStructure.Chain.MessageKey
                 * @instance
                 */
                MessageKey.prototype.iv = $util.newBuffer([]);

                /**
                 * Creates a new MessageKey instance using the specified properties.
                 * @function create
                 * @memberof textsecure.SessionStructure.Chain.MessageKey
                 * @static
                 * @param {textsecure.SessionStructure.Chain.IMessageKey=} [properties] Properties to set
                 * @returns {textsecure.SessionStructure.Chain.MessageKey} MessageKey instance
                 */
                MessageKey.create = function create(properties) {
                    return new MessageKey(properties);
                };

                /**
                 * Encodes the specified MessageKey message. Does not implicitly {@link textsecure.SessionStructure.Chain.MessageKey.verify|verify} messages.
                 * @function encode
                 * @memberof textsecure.SessionStructure.Chain.MessageKey
                 * @static
                 * @param {textsecure.SessionStructure.Chain.IMessageKey} message MessageKey message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                MessageKey.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.index != null && Object.hasOwnProperty.call(message, "index"))
                        writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.index);
                    if (message.cipherKey != null && Object.hasOwnProperty.call(message, "cipherKey"))
                        writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.cipherKey);
                    if (message.macKey != null && Object.hasOwnProperty.call(message, "macKey"))
                        writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.macKey);
                    if (message.iv != null && Object.hasOwnProperty.call(message, "iv"))
                        writer.uint32(/* id 4, wireType 2 =*/34).bytes(message.iv);
                    return writer;
                };

                /**
                 * Encodes the specified MessageKey message, length delimited. Does not implicitly {@link textsecure.SessionStructure.Chain.MessageKey.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof textsecure.SessionStructure.Chain.MessageKey
                 * @static
                 * @param {textsecure.SessionStructure.Chain.IMessageKey} message MessageKey message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                MessageKey.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a MessageKey message from the specified reader or buffer.
                 * @function decode
                 * @memberof textsecure.SessionStructure.Chain.MessageKey
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {textsecure.SessionStructure.Chain.MessageKey} MessageKey
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                MessageKey.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.textsecure.SessionStructure.Chain.MessageKey();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.index = reader.uint32();
                            break;
                        case 2:
                            message.cipherKey = reader.bytes();
                            break;
                        case 3:
                            message.macKey = reader.bytes();
                            break;
                        case 4:
                            message.iv = reader.bytes();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a MessageKey message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof textsecure.SessionStructure.Chain.MessageKey
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {textsecure.SessionStructure.Chain.MessageKey} MessageKey
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                MessageKey.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a MessageKey message.
                 * @function verify
                 * @memberof textsecure.SessionStructure.Chain.MessageKey
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                MessageKey.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.index != null && message.hasOwnProperty("index"))
                        if (!$util.isInteger(message.index))
                            return "index: integer expected";
                    if (message.cipherKey != null && message.hasOwnProperty("cipherKey"))
                        if (!(message.cipherKey && typeof message.cipherKey.length === "number" || $util.isString(message.cipherKey)))
                            return "cipherKey: buffer expected";
                    if (message.macKey != null && message.hasOwnProperty("macKey"))
                        if (!(message.macKey && typeof message.macKey.length === "number" || $util.isString(message.macKey)))
                            return "macKey: buffer expected";
                    if (message.iv != null && message.hasOwnProperty("iv"))
                        if (!(message.iv && typeof message.iv.length === "number" || $util.isString(message.iv)))
                            return "iv: buffer expected";
                    return null;
                };

                /**
                 * Creates a MessageKey message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof textsecure.SessionStructure.Chain.MessageKey
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {textsecure.SessionStructure.Chain.MessageKey} MessageKey
                 */
                MessageKey.fromObject = function fromObject(object) {
                    if (object instanceof $root.textsecure.SessionStructure.Chain.MessageKey)
                        return object;
                    var message = new $root.textsecure.SessionStructure.Chain.MessageKey();
                    if (object.index != null)
                        message.index = object.index >>> 0;
                    if (object.cipherKey != null)
                        if (typeof object.cipherKey === "string")
                            $util.base64.decode(object.cipherKey, message.cipherKey = $util.newBuffer($util.base64.length(object.cipherKey)), 0);
                        else if (object.cipherKey.length)
                            message.cipherKey = object.cipherKey;
                    if (object.macKey != null)
                        if (typeof object.macKey === "string")
                            $util.base64.decode(object.macKey, message.macKey = $util.newBuffer($util.base64.length(object.macKey)), 0);
                        else if (object.macKey.length)
                            message.macKey = object.macKey;
                    if (object.iv != null)
                        if (typeof object.iv === "string")
                            $util.base64.decode(object.iv, message.iv = $util.newBuffer($util.base64.length(object.iv)), 0);
                        else if (object.iv.length)
                            message.iv = object.iv;
                    return message;
                };

                /**
                 * Creates a plain object from a MessageKey message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof textsecure.SessionStructure.Chain.MessageKey
                 * @static
                 * @param {textsecure.SessionStructure.Chain.MessageKey} message MessageKey
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                MessageKey.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.index = 0;
                        if (options.bytes === String)
                            object.cipherKey = "";
                        else {
                            object.cipherKey = [];
                            if (options.bytes !== Array)
                                object.cipherKey = $util.newBuffer(object.cipherKey);
                        }
                        if (options.bytes === String)
                            object.macKey = "";
                        else {
                            object.macKey = [];
                            if (options.bytes !== Array)
                                object.macKey = $util.newBuffer(object.macKey);
                        }
                        if (options.bytes === String)
                            object.iv = "";
                        else {
                            object.iv = [];
                            if (options.bytes !== Array)
                                object.iv = $util.newBuffer(object.iv);
                        }
                    }
                    if (message.index != null && message.hasOwnProperty("index"))
                        object.index = message.index;
                    if (message.cipherKey != null && message.hasOwnProperty("cipherKey"))
                        object.cipherKey = options.bytes === String ? $util.base64.encode(message.cipherKey, 0, message.cipherKey.length) : options.bytes === Array ? Array.prototype.slice.call(message.cipherKey) : message.cipherKey;
                    if (message.macKey != null && message.hasOwnProperty("macKey"))
                        object.macKey = options.bytes === String ? $util.base64.encode(message.macKey, 0, message.macKey.length) : options.bytes === Array ? Array.prototype.slice.call(message.macKey) : message.macKey;
                    if (message.iv != null && message.hasOwnProperty("iv"))
                        object.iv = options.bytes === String ? $util.base64.encode(message.iv, 0, message.iv.length) : options.bytes === Array ? Array.prototype.slice.call(message.iv) : message.iv;
                    return object;
                };

                /**
                 * Converts this MessageKey to JSON.
                 * @function toJSON
                 * @memberof textsecure.SessionStructure.Chain.MessageKey
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                MessageKey.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return MessageKey;
            })();

            return Chain;
        })();

        SessionStructure.PendingKeyExchange = (function() {

            /**
             * Properties of a PendingKeyExchange.
             * @memberof textsecure.SessionStructure
             * @interface IPendingKeyExchange
             * @property {number|null} [sequence] PendingKeyExchange sequence
             * @property {Uint8Array|null} [localBaseKey] PendingKeyExchange localBaseKey
             * @property {Uint8Array|null} [localBaseKeyPrivate] PendingKeyExchange localBaseKeyPrivate
             * @property {Uint8Array|null} [localRatchetKey] PendingKeyExchange localRatchetKey
             * @property {Uint8Array|null} [localRatchetKeyPrivate] PendingKeyExchange localRatchetKeyPrivate
             * @property {Uint8Array|null} [localIdentityKey] PendingKeyExchange localIdentityKey
             * @property {Uint8Array|null} [localIdentityKeyPrivate] PendingKeyExchange localIdentityKeyPrivate
             */

            /**
             * Constructs a new PendingKeyExchange.
             * @memberof textsecure.SessionStructure
             * @classdesc Represents a PendingKeyExchange.
             * @implements IPendingKeyExchange
             * @constructor
             * @param {textsecure.SessionStructure.IPendingKeyExchange=} [properties] Properties to set
             */
            function PendingKeyExchange(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * PendingKeyExchange sequence.
             * @member {number} sequence
             * @memberof textsecure.SessionStructure.PendingKeyExchange
             * @instance
             */
            PendingKeyExchange.prototype.sequence = 0;

            /**
             * PendingKeyExchange localBaseKey.
             * @member {Uint8Array} localBaseKey
             * @memberof textsecure.SessionStructure.PendingKeyExchange
             * @instance
             */
            PendingKeyExchange.prototype.localBaseKey = $util.newBuffer([]);

            /**
             * PendingKeyExchange localBaseKeyPrivate.
             * @member {Uint8Array} localBaseKeyPrivate
             * @memberof textsecure.SessionStructure.PendingKeyExchange
             * @instance
             */
            PendingKeyExchange.prototype.localBaseKeyPrivate = $util.newBuffer([]);

            /**
             * PendingKeyExchange localRatchetKey.
             * @member {Uint8Array} localRatchetKey
             * @memberof textsecure.SessionStructure.PendingKeyExchange
             * @instance
             */
            PendingKeyExchange.prototype.localRatchetKey = $util.newBuffer([]);

            /**
             * PendingKeyExchange localRatchetKeyPrivate.
             * @member {Uint8Array} localRatchetKeyPrivate
             * @memberof textsecure.SessionStructure.PendingKeyExchange
             * @instance
             */
            PendingKeyExchange.prototype.localRatchetKeyPrivate = $util.newBuffer([]);

            /**
             * PendingKeyExchange localIdentityKey.
             * @member {Uint8Array} localIdentityKey
             * @memberof textsecure.SessionStructure.PendingKeyExchange
             * @instance
             */
            PendingKeyExchange.prototype.localIdentityKey = $util.newBuffer([]);

            /**
             * PendingKeyExchange localIdentityKeyPrivate.
             * @member {Uint8Array} localIdentityKeyPrivate
             * @memberof textsecure.SessionStructure.PendingKeyExchange
             * @instance
             */
            PendingKeyExchange.prototype.localIdentityKeyPrivate = $util.newBuffer([]);

            /**
             * Creates a new PendingKeyExchange instance using the specified properties.
             * @function create
             * @memberof textsecure.SessionStructure.PendingKeyExchange
             * @static
             * @param {textsecure.SessionStructure.IPendingKeyExchange=} [properties] Properties to set
             * @returns {textsecure.SessionStructure.PendingKeyExchange} PendingKeyExchange instance
             */
            PendingKeyExchange.create = function create(properties) {
                return new PendingKeyExchange(properties);
            };

            /**
             * Encodes the specified PendingKeyExchange message. Does not implicitly {@link textsecure.SessionStructure.PendingKeyExchange.verify|verify} messages.
             * @function encode
             * @memberof textsecure.SessionStructure.PendingKeyExchange
             * @static
             * @param {textsecure.SessionStructure.IPendingKeyExchange} message PendingKeyExchange message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            PendingKeyExchange.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.sequence != null && Object.hasOwnProperty.call(message, "sequence"))
                    writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.sequence);
                if (message.localBaseKey != null && Object.hasOwnProperty.call(message, "localBaseKey"))
                    writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.localBaseKey);
                if (message.localBaseKeyPrivate != null && Object.hasOwnProperty.call(message, "localBaseKeyPrivate"))
                    writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.localBaseKeyPrivate);
                if (message.localRatchetKey != null && Object.hasOwnProperty.call(message, "localRatchetKey"))
                    writer.uint32(/* id 4, wireType 2 =*/34).bytes(message.localRatchetKey);
                if (message.localRatchetKeyPrivate != null && Object.hasOwnProperty.call(message, "localRatchetKeyPrivate"))
                    writer.uint32(/* id 5, wireType 2 =*/42).bytes(message.localRatchetKeyPrivate);
                if (message.localIdentityKey != null && Object.hasOwnProperty.call(message, "localIdentityKey"))
                    writer.uint32(/* id 7, wireType 2 =*/58).bytes(message.localIdentityKey);
                if (message.localIdentityKeyPrivate != null && Object.hasOwnProperty.call(message, "localIdentityKeyPrivate"))
                    writer.uint32(/* id 8, wireType 2 =*/66).bytes(message.localIdentityKeyPrivate);
                return writer;
            };

            /**
             * Encodes the specified PendingKeyExchange message, length delimited. Does not implicitly {@link textsecure.SessionStructure.PendingKeyExchange.verify|verify} messages.
             * @function encodeDelimited
             * @memberof textsecure.SessionStructure.PendingKeyExchange
             * @static
             * @param {textsecure.SessionStructure.IPendingKeyExchange} message PendingKeyExchange message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            PendingKeyExchange.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a PendingKeyExchange message from the specified reader or buffer.
             * @function decode
             * @memberof textsecure.SessionStructure.PendingKeyExchange
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {textsecure.SessionStructure.PendingKeyExchange} PendingKeyExchange
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            PendingKeyExchange.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.textsecure.SessionStructure.PendingKeyExchange();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.sequence = reader.uint32();
                        break;
                    case 2:
                        message.localBaseKey = reader.bytes();
                        break;
                    case 3:
                        message.localBaseKeyPrivate = reader.bytes();
                        break;
                    case 4:
                        message.localRatchetKey = reader.bytes();
                        break;
                    case 5:
                        message.localRatchetKeyPrivate = reader.bytes();
                        break;
                    case 7:
                        message.localIdentityKey = reader.bytes();
                        break;
                    case 8:
                        message.localIdentityKeyPrivate = reader.bytes();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a PendingKeyExchange message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof textsecure.SessionStructure.PendingKeyExchange
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {textsecure.SessionStructure.PendingKeyExchange} PendingKeyExchange
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            PendingKeyExchange.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a PendingKeyExchange message.
             * @function verify
             * @memberof textsecure.SessionStructure.PendingKeyExchange
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            PendingKeyExchange.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.sequence != null && message.hasOwnProperty("sequence"))
                    if (!$util.isInteger(message.sequence))
                        return "sequence: integer expected";
                if (message.localBaseKey != null && message.hasOwnProperty("localBaseKey"))
                    if (!(message.localBaseKey && typeof message.localBaseKey.length === "number" || $util.isString(message.localBaseKey)))
                        return "localBaseKey: buffer expected";
                if (message.localBaseKeyPrivate != null && message.hasOwnProperty("localBaseKeyPrivate"))
                    if (!(message.localBaseKeyPrivate && typeof message.localBaseKeyPrivate.length === "number" || $util.isString(message.localBaseKeyPrivate)))
                        return "localBaseKeyPrivate: buffer expected";
                if (message.localRatchetKey != null && message.hasOwnProperty("localRatchetKey"))
                    if (!(message.localRatchetKey && typeof message.localRatchetKey.length === "number" || $util.isString(message.localRatchetKey)))
                        return "localRatchetKey: buffer expected";
                if (message.localRatchetKeyPrivate != null && message.hasOwnProperty("localRatchetKeyPrivate"))
                    if (!(message.localRatchetKeyPrivate && typeof message.localRatchetKeyPrivate.length === "number" || $util.isString(message.localRatchetKeyPrivate)))
                        return "localRatchetKeyPrivate: buffer expected";
                if (message.localIdentityKey != null && message.hasOwnProperty("localIdentityKey"))
                    if (!(message.localIdentityKey && typeof message.localIdentityKey.length === "number" || $util.isString(message.localIdentityKey)))
                        return "localIdentityKey: buffer expected";
                if (message.localIdentityKeyPrivate != null && message.hasOwnProperty("localIdentityKeyPrivate"))
                    if (!(message.localIdentityKeyPrivate && typeof message.localIdentityKeyPrivate.length === "number" || $util.isString(message.localIdentityKeyPrivate)))
                        return "localIdentityKeyPrivate: buffer expected";
                return null;
            };

            /**
             * Creates a PendingKeyExchange message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof textsecure.SessionStructure.PendingKeyExchange
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {textsecure.SessionStructure.PendingKeyExchange} PendingKeyExchange
             */
            PendingKeyExchange.fromObject = function fromObject(object) {
                if (object instanceof $root.textsecure.SessionStructure.PendingKeyExchange)
                    return object;
                var message = new $root.textsecure.SessionStructure.PendingKeyExchange();
                if (object.sequence != null)
                    message.sequence = object.sequence >>> 0;
                if (object.localBaseKey != null)
                    if (typeof object.localBaseKey === "string")
                        $util.base64.decode(object.localBaseKey, message.localBaseKey = $util.newBuffer($util.base64.length(object.localBaseKey)), 0);
                    else if (object.localBaseKey.length)
                        message.localBaseKey = object.localBaseKey;
                if (object.localBaseKeyPrivate != null)
                    if (typeof object.localBaseKeyPrivate === "string")
                        $util.base64.decode(object.localBaseKeyPrivate, message.localBaseKeyPrivate = $util.newBuffer($util.base64.length(object.localBaseKeyPrivate)), 0);
                    else if (object.localBaseKeyPrivate.length)
                        message.localBaseKeyPrivate = object.localBaseKeyPrivate;
                if (object.localRatchetKey != null)
                    if (typeof object.localRatchetKey === "string")
                        $util.base64.decode(object.localRatchetKey, message.localRatchetKey = $util.newBuffer($util.base64.length(object.localRatchetKey)), 0);
                    else if (object.localRatchetKey.length)
                        message.localRatchetKey = object.localRatchetKey;
                if (object.localRatchetKeyPrivate != null)
                    if (typeof object.localRatchetKeyPrivate === "string")
                        $util.base64.decode(object.localRatchetKeyPrivate, message.localRatchetKeyPrivate = $util.newBuffer($util.base64.length(object.localRatchetKeyPrivate)), 0);
                    else if (object.localRatchetKeyPrivate.length)
                        message.localRatchetKeyPrivate = object.localRatchetKeyPrivate;
                if (object.localIdentityKey != null)
                    if (typeof object.localIdentityKey === "string")
                        $util.base64.decode(object.localIdentityKey, message.localIdentityKey = $util.newBuffer($util.base64.length(object.localIdentityKey)), 0);
                    else if (object.localIdentityKey.length)
                        message.localIdentityKey = object.localIdentityKey;
                if (object.localIdentityKeyPrivate != null)
                    if (typeof object.localIdentityKeyPrivate === "string")
                        $util.base64.decode(object.localIdentityKeyPrivate, message.localIdentityKeyPrivate = $util.newBuffer($util.base64.length(object.localIdentityKeyPrivate)), 0);
                    else if (object.localIdentityKeyPrivate.length)
                        message.localIdentityKeyPrivate = object.localIdentityKeyPrivate;
                return message;
            };

            /**
             * Creates a plain object from a PendingKeyExchange message. Also converts values to other types if specified.
             * @function toObject
             * @memberof textsecure.SessionStructure.PendingKeyExchange
             * @static
             * @param {textsecure.SessionStructure.PendingKeyExchange} message PendingKeyExchange
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            PendingKeyExchange.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.sequence = 0;
                    if (options.bytes === String)
                        object.localBaseKey = "";
                    else {
                        object.localBaseKey = [];
                        if (options.bytes !== Array)
                            object.localBaseKey = $util.newBuffer(object.localBaseKey);
                    }
                    if (options.bytes === String)
                        object.localBaseKeyPrivate = "";
                    else {
                        object.localBaseKeyPrivate = [];
                        if (options.bytes !== Array)
                            object.localBaseKeyPrivate = $util.newBuffer(object.localBaseKeyPrivate);
                    }
                    if (options.bytes === String)
                        object.localRatchetKey = "";
                    else {
                        object.localRatchetKey = [];
                        if (options.bytes !== Array)
                            object.localRatchetKey = $util.newBuffer(object.localRatchetKey);
                    }
                    if (options.bytes === String)
                        object.localRatchetKeyPrivate = "";
                    else {
                        object.localRatchetKeyPrivate = [];
                        if (options.bytes !== Array)
                            object.localRatchetKeyPrivate = $util.newBuffer(object.localRatchetKeyPrivate);
                    }
                    if (options.bytes === String)
                        object.localIdentityKey = "";
                    else {
                        object.localIdentityKey = [];
                        if (options.bytes !== Array)
                            object.localIdentityKey = $util.newBuffer(object.localIdentityKey);
                    }
                    if (options.bytes === String)
                        object.localIdentityKeyPrivate = "";
                    else {
                        object.localIdentityKeyPrivate = [];
                        if (options.bytes !== Array)
                            object.localIdentityKeyPrivate = $util.newBuffer(object.localIdentityKeyPrivate);
                    }
                }
                if (message.sequence != null && message.hasOwnProperty("sequence"))
                    object.sequence = message.sequence;
                if (message.localBaseKey != null && message.hasOwnProperty("localBaseKey"))
                    object.localBaseKey = options.bytes === String ? $util.base64.encode(message.localBaseKey, 0, message.localBaseKey.length) : options.bytes === Array ? Array.prototype.slice.call(message.localBaseKey) : message.localBaseKey;
                if (message.localBaseKeyPrivate != null && message.hasOwnProperty("localBaseKeyPrivate"))
                    object.localBaseKeyPrivate = options.bytes === String ? $util.base64.encode(message.localBaseKeyPrivate, 0, message.localBaseKeyPrivate.length) : options.bytes === Array ? Array.prototype.slice.call(message.localBaseKeyPrivate) : message.localBaseKeyPrivate;
                if (message.localRatchetKey != null && message.hasOwnProperty("localRatchetKey"))
                    object.localRatchetKey = options.bytes === String ? $util.base64.encode(message.localRatchetKey, 0, message.localRatchetKey.length) : options.bytes === Array ? Array.prototype.slice.call(message.localRatchetKey) : message.localRatchetKey;
                if (message.localRatchetKeyPrivate != null && message.hasOwnProperty("localRatchetKeyPrivate"))
                    object.localRatchetKeyPrivate = options.bytes === String ? $util.base64.encode(message.localRatchetKeyPrivate, 0, message.localRatchetKeyPrivate.length) : options.bytes === Array ? Array.prototype.slice.call(message.localRatchetKeyPrivate) : message.localRatchetKeyPrivate;
                if (message.localIdentityKey != null && message.hasOwnProperty("localIdentityKey"))
                    object.localIdentityKey = options.bytes === String ? $util.base64.encode(message.localIdentityKey, 0, message.localIdentityKey.length) : options.bytes === Array ? Array.prototype.slice.call(message.localIdentityKey) : message.localIdentityKey;
                if (message.localIdentityKeyPrivate != null && message.hasOwnProperty("localIdentityKeyPrivate"))
                    object.localIdentityKeyPrivate = options.bytes === String ? $util.base64.encode(message.localIdentityKeyPrivate, 0, message.localIdentityKeyPrivate.length) : options.bytes === Array ? Array.prototype.slice.call(message.localIdentityKeyPrivate) : message.localIdentityKeyPrivate;
                return object;
            };

            /**
             * Converts this PendingKeyExchange to JSON.
             * @function toJSON
             * @memberof textsecure.SessionStructure.PendingKeyExchange
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            PendingKeyExchange.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return PendingKeyExchange;
        })();

        SessionStructure.PendingPreKey = (function() {

            /**
             * Properties of a PendingPreKey.
             * @memberof textsecure.SessionStructure
             * @interface IPendingPreKey
             * @property {number|null} [preKeyId] PendingPreKey preKeyId
             * @property {number|null} [signedPreKeyId] PendingPreKey signedPreKeyId
             * @property {Uint8Array|null} [baseKey] PendingPreKey baseKey
             */

            /**
             * Constructs a new PendingPreKey.
             * @memberof textsecure.SessionStructure
             * @classdesc Represents a PendingPreKey.
             * @implements IPendingPreKey
             * @constructor
             * @param {textsecure.SessionStructure.IPendingPreKey=} [properties] Properties to set
             */
            function PendingPreKey(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * PendingPreKey preKeyId.
             * @member {number} preKeyId
             * @memberof textsecure.SessionStructure.PendingPreKey
             * @instance
             */
            PendingPreKey.prototype.preKeyId = 0;

            /**
             * PendingPreKey signedPreKeyId.
             * @member {number} signedPreKeyId
             * @memberof textsecure.SessionStructure.PendingPreKey
             * @instance
             */
            PendingPreKey.prototype.signedPreKeyId = 0;

            /**
             * PendingPreKey baseKey.
             * @member {Uint8Array} baseKey
             * @memberof textsecure.SessionStructure.PendingPreKey
             * @instance
             */
            PendingPreKey.prototype.baseKey = $util.newBuffer([]);

            /**
             * Creates a new PendingPreKey instance using the specified properties.
             * @function create
             * @memberof textsecure.SessionStructure.PendingPreKey
             * @static
             * @param {textsecure.SessionStructure.IPendingPreKey=} [properties] Properties to set
             * @returns {textsecure.SessionStructure.PendingPreKey} PendingPreKey instance
             */
            PendingPreKey.create = function create(properties) {
                return new PendingPreKey(properties);
            };

            /**
             * Encodes the specified PendingPreKey message. Does not implicitly {@link textsecure.SessionStructure.PendingPreKey.verify|verify} messages.
             * @function encode
             * @memberof textsecure.SessionStructure.PendingPreKey
             * @static
             * @param {textsecure.SessionStructure.IPendingPreKey} message PendingPreKey message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            PendingPreKey.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.preKeyId != null && Object.hasOwnProperty.call(message, "preKeyId"))
                    writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.preKeyId);
                if (message.baseKey != null && Object.hasOwnProperty.call(message, "baseKey"))
                    writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.baseKey);
                if (message.signedPreKeyId != null && Object.hasOwnProperty.call(message, "signedPreKeyId"))
                    writer.uint32(/* id 3, wireType 0 =*/24).int32(message.signedPreKeyId);
                return writer;
            };

            /**
             * Encodes the specified PendingPreKey message, length delimited. Does not implicitly {@link textsecure.SessionStructure.PendingPreKey.verify|verify} messages.
             * @function encodeDelimited
             * @memberof textsecure.SessionStructure.PendingPreKey
             * @static
             * @param {textsecure.SessionStructure.IPendingPreKey} message PendingPreKey message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            PendingPreKey.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a PendingPreKey message from the specified reader or buffer.
             * @function decode
             * @memberof textsecure.SessionStructure.PendingPreKey
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {textsecure.SessionStructure.PendingPreKey} PendingPreKey
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            PendingPreKey.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.textsecure.SessionStructure.PendingPreKey();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.preKeyId = reader.uint32();
                        break;
                    case 3:
                        message.signedPreKeyId = reader.int32();
                        break;
                    case 2:
                        message.baseKey = reader.bytes();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a PendingPreKey message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof textsecure.SessionStructure.PendingPreKey
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {textsecure.SessionStructure.PendingPreKey} PendingPreKey
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            PendingPreKey.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a PendingPreKey message.
             * @function verify
             * @memberof textsecure.SessionStructure.PendingPreKey
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            PendingPreKey.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.preKeyId != null && message.hasOwnProperty("preKeyId"))
                    if (!$util.isInteger(message.preKeyId))
                        return "preKeyId: integer expected";
                if (message.signedPreKeyId != null && message.hasOwnProperty("signedPreKeyId"))
                    if (!$util.isInteger(message.signedPreKeyId))
                        return "signedPreKeyId: integer expected";
                if (message.baseKey != null && message.hasOwnProperty("baseKey"))
                    if (!(message.baseKey && typeof message.baseKey.length === "number" || $util.isString(message.baseKey)))
                        return "baseKey: buffer expected";
                return null;
            };

            /**
             * Creates a PendingPreKey message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof textsecure.SessionStructure.PendingPreKey
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {textsecure.SessionStructure.PendingPreKey} PendingPreKey
             */
            PendingPreKey.fromObject = function fromObject(object) {
                if (object instanceof $root.textsecure.SessionStructure.PendingPreKey)
                    return object;
                var message = new $root.textsecure.SessionStructure.PendingPreKey();
                if (object.preKeyId != null)
                    message.preKeyId = object.preKeyId >>> 0;
                if (object.signedPreKeyId != null)
                    message.signedPreKeyId = object.signedPreKeyId | 0;
                if (object.baseKey != null)
                    if (typeof object.baseKey === "string")
                        $util.base64.decode(object.baseKey, message.baseKey = $util.newBuffer($util.base64.length(object.baseKey)), 0);
                    else if (object.baseKey.length)
                        message.baseKey = object.baseKey;
                return message;
            };

            /**
             * Creates a plain object from a PendingPreKey message. Also converts values to other types if specified.
             * @function toObject
             * @memberof textsecure.SessionStructure.PendingPreKey
             * @static
             * @param {textsecure.SessionStructure.PendingPreKey} message PendingPreKey
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            PendingPreKey.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.preKeyId = 0;
                    if (options.bytes === String)
                        object.baseKey = "";
                    else {
                        object.baseKey = [];
                        if (options.bytes !== Array)
                            object.baseKey = $util.newBuffer(object.baseKey);
                    }
                    object.signedPreKeyId = 0;
                }
                if (message.preKeyId != null && message.hasOwnProperty("preKeyId"))
                    object.preKeyId = message.preKeyId;
                if (message.baseKey != null && message.hasOwnProperty("baseKey"))
                    object.baseKey = options.bytes === String ? $util.base64.encode(message.baseKey, 0, message.baseKey.length) : options.bytes === Array ? Array.prototype.slice.call(message.baseKey) : message.baseKey;
                if (message.signedPreKeyId != null && message.hasOwnProperty("signedPreKeyId"))
                    object.signedPreKeyId = message.signedPreKeyId;
                return object;
            };

            /**
             * Converts this PendingPreKey to JSON.
             * @function toJSON
             * @memberof textsecure.SessionStructure.PendingPreKey
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            PendingPreKey.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return PendingPreKey;
        })();

        return SessionStructure;
    })();

    textsecure.RecordStructure = (function() {

        /**
         * Properties of a RecordStructure.
         * @memberof textsecure
         * @interface IRecordStructure
         * @property {textsecure.ISessionStructure|null} [currentSession] RecordStructure currentSession
         * @property {Array.<textsecure.ISessionStructure>|null} [previousSessions] RecordStructure previousSessions
         */

        /**
         * Constructs a new RecordStructure.
         * @memberof textsecure
         * @classdesc Represents a RecordStructure.
         * @implements IRecordStructure
         * @constructor
         * @param {textsecure.IRecordStructure=} [properties] Properties to set
         */
        function RecordStructure(properties) {
            this.previousSessions = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RecordStructure currentSession.
         * @member {textsecure.ISessionStructure|null|undefined} currentSession
         * @memberof textsecure.RecordStructure
         * @instance
         */
        RecordStructure.prototype.currentSession = null;

        /**
         * RecordStructure previousSessions.
         * @member {Array.<textsecure.ISessionStructure>} previousSessions
         * @memberof textsecure.RecordStructure
         * @instance
         */
        RecordStructure.prototype.previousSessions = $util.emptyArray;

        /**
         * Creates a new RecordStructure instance using the specified properties.
         * @function create
         * @memberof textsecure.RecordStructure
         * @static
         * @param {textsecure.IRecordStructure=} [properties] Properties to set
         * @returns {textsecure.RecordStructure} RecordStructure instance
         */
        RecordStructure.create = function create(properties) {
            return new RecordStructure(properties);
        };

        /**
         * Encodes the specified RecordStructure message. Does not implicitly {@link textsecure.RecordStructure.verify|verify} messages.
         * @function encode
         * @memberof textsecure.RecordStructure
         * @static
         * @param {textsecure.IRecordStructure} message RecordStructure message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RecordStructure.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.currentSession != null && Object.hasOwnProperty.call(message, "currentSession"))
                $root.textsecure.SessionStructure.encode(message.currentSession, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.previousSessions != null && message.previousSessions.length)
                for (var i = 0; i < message.previousSessions.length; ++i)
                    $root.textsecure.SessionStructure.encode(message.previousSessions[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified RecordStructure message, length delimited. Does not implicitly {@link textsecure.RecordStructure.verify|verify} messages.
         * @function encodeDelimited
         * @memberof textsecure.RecordStructure
         * @static
         * @param {textsecure.IRecordStructure} message RecordStructure message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RecordStructure.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RecordStructure message from the specified reader or buffer.
         * @function decode
         * @memberof textsecure.RecordStructure
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {textsecure.RecordStructure} RecordStructure
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RecordStructure.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.textsecure.RecordStructure();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.currentSession = $root.textsecure.SessionStructure.decode(reader, reader.uint32());
                    break;
                case 2:
                    if (!(message.previousSessions && message.previousSessions.length))
                        message.previousSessions = [];
                    message.previousSessions.push($root.textsecure.SessionStructure.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a RecordStructure message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof textsecure.RecordStructure
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {textsecure.RecordStructure} RecordStructure
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RecordStructure.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RecordStructure message.
         * @function verify
         * @memberof textsecure.RecordStructure
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RecordStructure.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.currentSession != null && message.hasOwnProperty("currentSession")) {
                var error = $root.textsecure.SessionStructure.verify(message.currentSession);
                if (error)
                    return "currentSession." + error;
            }
            if (message.previousSessions != null && message.hasOwnProperty("previousSessions")) {
                if (!Array.isArray(message.previousSessions))
                    return "previousSessions: array expected";
                for (var i = 0; i < message.previousSessions.length; ++i) {
                    var error = $root.textsecure.SessionStructure.verify(message.previousSessions[i]);
                    if (error)
                        return "previousSessions." + error;
                }
            }
            return null;
        };

        /**
         * Creates a RecordStructure message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof textsecure.RecordStructure
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {textsecure.RecordStructure} RecordStructure
         */
        RecordStructure.fromObject = function fromObject(object) {
            if (object instanceof $root.textsecure.RecordStructure)
                return object;
            var message = new $root.textsecure.RecordStructure();
            if (object.currentSession != null) {
                if (typeof object.currentSession !== "object")
                    throw TypeError(".textsecure.RecordStructure.currentSession: object expected");
                message.currentSession = $root.textsecure.SessionStructure.fromObject(object.currentSession);
            }
            if (object.previousSessions) {
                if (!Array.isArray(object.previousSessions))
                    throw TypeError(".textsecure.RecordStructure.previousSessions: array expected");
                message.previousSessions = [];
                for (var i = 0; i < object.previousSessions.length; ++i) {
                    if (typeof object.previousSessions[i] !== "object")
                        throw TypeError(".textsecure.RecordStructure.previousSessions: object expected");
                    message.previousSessions[i] = $root.textsecure.SessionStructure.fromObject(object.previousSessions[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a RecordStructure message. Also converts values to other types if specified.
         * @function toObject
         * @memberof textsecure.RecordStructure
         * @static
         * @param {textsecure.RecordStructure} message RecordStructure
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RecordStructure.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.previousSessions = [];
            if (options.defaults)
                object.currentSession = null;
            if (message.currentSession != null && message.hasOwnProperty("currentSession"))
                object.currentSession = $root.textsecure.SessionStructure.toObject(message.currentSession, options);
            if (message.previousSessions && message.previousSessions.length) {
                object.previousSessions = [];
                for (var j = 0; j < message.previousSessions.length; ++j)
                    object.previousSessions[j] = $root.textsecure.SessionStructure.toObject(message.previousSessions[j], options);
            }
            return object;
        };

        /**
         * Converts this RecordStructure to JSON.
         * @function toJSON
         * @memberof textsecure.RecordStructure
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RecordStructure.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return RecordStructure;
    })();

    textsecure.PreKeyRecordStructure = (function() {

        /**
         * Properties of a PreKeyRecordStructure.
         * @memberof textsecure
         * @interface IPreKeyRecordStructure
         * @property {number|null} [id] PreKeyRecordStructure id
         * @property {Uint8Array|null} [publicKey] PreKeyRecordStructure publicKey
         * @property {Uint8Array|null} [privateKey] PreKeyRecordStructure privateKey
         */

        /**
         * Constructs a new PreKeyRecordStructure.
         * @memberof textsecure
         * @classdesc Represents a PreKeyRecordStructure.
         * @implements IPreKeyRecordStructure
         * @constructor
         * @param {textsecure.IPreKeyRecordStructure=} [properties] Properties to set
         */
        function PreKeyRecordStructure(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PreKeyRecordStructure id.
         * @member {number} id
         * @memberof textsecure.PreKeyRecordStructure
         * @instance
         */
        PreKeyRecordStructure.prototype.id = 0;

        /**
         * PreKeyRecordStructure publicKey.
         * @member {Uint8Array} publicKey
         * @memberof textsecure.PreKeyRecordStructure
         * @instance
         */
        PreKeyRecordStructure.prototype.publicKey = $util.newBuffer([]);

        /**
         * PreKeyRecordStructure privateKey.
         * @member {Uint8Array} privateKey
         * @memberof textsecure.PreKeyRecordStructure
         * @instance
         */
        PreKeyRecordStructure.prototype.privateKey = $util.newBuffer([]);

        /**
         * Creates a new PreKeyRecordStructure instance using the specified properties.
         * @function create
         * @memberof textsecure.PreKeyRecordStructure
         * @static
         * @param {textsecure.IPreKeyRecordStructure=} [properties] Properties to set
         * @returns {textsecure.PreKeyRecordStructure} PreKeyRecordStructure instance
         */
        PreKeyRecordStructure.create = function create(properties) {
            return new PreKeyRecordStructure(properties);
        };

        /**
         * Encodes the specified PreKeyRecordStructure message. Does not implicitly {@link textsecure.PreKeyRecordStructure.verify|verify} messages.
         * @function encode
         * @memberof textsecure.PreKeyRecordStructure
         * @static
         * @param {textsecure.IPreKeyRecordStructure} message PreKeyRecordStructure message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PreKeyRecordStructure.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.id);
            if (message.publicKey != null && Object.hasOwnProperty.call(message, "publicKey"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.publicKey);
            if (message.privateKey != null && Object.hasOwnProperty.call(message, "privateKey"))
                writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.privateKey);
            return writer;
        };

        /**
         * Encodes the specified PreKeyRecordStructure message, length delimited. Does not implicitly {@link textsecure.PreKeyRecordStructure.verify|verify} messages.
         * @function encodeDelimited
         * @memberof textsecure.PreKeyRecordStructure
         * @static
         * @param {textsecure.IPreKeyRecordStructure} message PreKeyRecordStructure message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PreKeyRecordStructure.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PreKeyRecordStructure message from the specified reader or buffer.
         * @function decode
         * @memberof textsecure.PreKeyRecordStructure
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {textsecure.PreKeyRecordStructure} PreKeyRecordStructure
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PreKeyRecordStructure.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.textsecure.PreKeyRecordStructure();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.uint32();
                    break;
                case 2:
                    message.publicKey = reader.bytes();
                    break;
                case 3:
                    message.privateKey = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a PreKeyRecordStructure message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof textsecure.PreKeyRecordStructure
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {textsecure.PreKeyRecordStructure} PreKeyRecordStructure
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PreKeyRecordStructure.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PreKeyRecordStructure message.
         * @function verify
         * @memberof textsecure.PreKeyRecordStructure
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PreKeyRecordStructure.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isInteger(message.id))
                    return "id: integer expected";
            if (message.publicKey != null && message.hasOwnProperty("publicKey"))
                if (!(message.publicKey && typeof message.publicKey.length === "number" || $util.isString(message.publicKey)))
                    return "publicKey: buffer expected";
            if (message.privateKey != null && message.hasOwnProperty("privateKey"))
                if (!(message.privateKey && typeof message.privateKey.length === "number" || $util.isString(message.privateKey)))
                    return "privateKey: buffer expected";
            return null;
        };

        /**
         * Creates a PreKeyRecordStructure message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof textsecure.PreKeyRecordStructure
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {textsecure.PreKeyRecordStructure} PreKeyRecordStructure
         */
        PreKeyRecordStructure.fromObject = function fromObject(object) {
            if (object instanceof $root.textsecure.PreKeyRecordStructure)
                return object;
            var message = new $root.textsecure.PreKeyRecordStructure();
            if (object.id != null)
                message.id = object.id >>> 0;
            if (object.publicKey != null)
                if (typeof object.publicKey === "string")
                    $util.base64.decode(object.publicKey, message.publicKey = $util.newBuffer($util.base64.length(object.publicKey)), 0);
                else if (object.publicKey.length)
                    message.publicKey = object.publicKey;
            if (object.privateKey != null)
                if (typeof object.privateKey === "string")
                    $util.base64.decode(object.privateKey, message.privateKey = $util.newBuffer($util.base64.length(object.privateKey)), 0);
                else if (object.privateKey.length)
                    message.privateKey = object.privateKey;
            return message;
        };

        /**
         * Creates a plain object from a PreKeyRecordStructure message. Also converts values to other types if specified.
         * @function toObject
         * @memberof textsecure.PreKeyRecordStructure
         * @static
         * @param {textsecure.PreKeyRecordStructure} message PreKeyRecordStructure
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PreKeyRecordStructure.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.id = 0;
                if (options.bytes === String)
                    object.publicKey = "";
                else {
                    object.publicKey = [];
                    if (options.bytes !== Array)
                        object.publicKey = $util.newBuffer(object.publicKey);
                }
                if (options.bytes === String)
                    object.privateKey = "";
                else {
                    object.privateKey = [];
                    if (options.bytes !== Array)
                        object.privateKey = $util.newBuffer(object.privateKey);
                }
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.publicKey != null && message.hasOwnProperty("publicKey"))
                object.publicKey = options.bytes === String ? $util.base64.encode(message.publicKey, 0, message.publicKey.length) : options.bytes === Array ? Array.prototype.slice.call(message.publicKey) : message.publicKey;
            if (message.privateKey != null && message.hasOwnProperty("privateKey"))
                object.privateKey = options.bytes === String ? $util.base64.encode(message.privateKey, 0, message.privateKey.length) : options.bytes === Array ? Array.prototype.slice.call(message.privateKey) : message.privateKey;
            return object;
        };

        /**
         * Converts this PreKeyRecordStructure to JSON.
         * @function toJSON
         * @memberof textsecure.PreKeyRecordStructure
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PreKeyRecordStructure.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return PreKeyRecordStructure;
    })();

    textsecure.SignedPreKeyRecordStructure = (function() {

        /**
         * Properties of a SignedPreKeyRecordStructure.
         * @memberof textsecure
         * @interface ISignedPreKeyRecordStructure
         * @property {number|null} [id] SignedPreKeyRecordStructure id
         * @property {Uint8Array|null} [publicKey] SignedPreKeyRecordStructure publicKey
         * @property {Uint8Array|null} [privateKey] SignedPreKeyRecordStructure privateKey
         * @property {Uint8Array|null} [signature] SignedPreKeyRecordStructure signature
         * @property {number|Long|null} [timestamp] SignedPreKeyRecordStructure timestamp
         */

        /**
         * Constructs a new SignedPreKeyRecordStructure.
         * @memberof textsecure
         * @classdesc Represents a SignedPreKeyRecordStructure.
         * @implements ISignedPreKeyRecordStructure
         * @constructor
         * @param {textsecure.ISignedPreKeyRecordStructure=} [properties] Properties to set
         */
        function SignedPreKeyRecordStructure(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SignedPreKeyRecordStructure id.
         * @member {number} id
         * @memberof textsecure.SignedPreKeyRecordStructure
         * @instance
         */
        SignedPreKeyRecordStructure.prototype.id = 0;

        /**
         * SignedPreKeyRecordStructure publicKey.
         * @member {Uint8Array} publicKey
         * @memberof textsecure.SignedPreKeyRecordStructure
         * @instance
         */
        SignedPreKeyRecordStructure.prototype.publicKey = $util.newBuffer([]);

        /**
         * SignedPreKeyRecordStructure privateKey.
         * @member {Uint8Array} privateKey
         * @memberof textsecure.SignedPreKeyRecordStructure
         * @instance
         */
        SignedPreKeyRecordStructure.prototype.privateKey = $util.newBuffer([]);

        /**
         * SignedPreKeyRecordStructure signature.
         * @member {Uint8Array} signature
         * @memberof textsecure.SignedPreKeyRecordStructure
         * @instance
         */
        SignedPreKeyRecordStructure.prototype.signature = $util.newBuffer([]);

        /**
         * SignedPreKeyRecordStructure timestamp.
         * @member {number|Long} timestamp
         * @memberof textsecure.SignedPreKeyRecordStructure
         * @instance
         */
        SignedPreKeyRecordStructure.prototype.timestamp = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new SignedPreKeyRecordStructure instance using the specified properties.
         * @function create
         * @memberof textsecure.SignedPreKeyRecordStructure
         * @static
         * @param {textsecure.ISignedPreKeyRecordStructure=} [properties] Properties to set
         * @returns {textsecure.SignedPreKeyRecordStructure} SignedPreKeyRecordStructure instance
         */
        SignedPreKeyRecordStructure.create = function create(properties) {
            return new SignedPreKeyRecordStructure(properties);
        };

        /**
         * Encodes the specified SignedPreKeyRecordStructure message. Does not implicitly {@link textsecure.SignedPreKeyRecordStructure.verify|verify} messages.
         * @function encode
         * @memberof textsecure.SignedPreKeyRecordStructure
         * @static
         * @param {textsecure.ISignedPreKeyRecordStructure} message SignedPreKeyRecordStructure message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SignedPreKeyRecordStructure.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.id);
            if (message.publicKey != null && Object.hasOwnProperty.call(message, "publicKey"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.publicKey);
            if (message.privateKey != null && Object.hasOwnProperty.call(message, "privateKey"))
                writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.privateKey);
            if (message.signature != null && Object.hasOwnProperty.call(message, "signature"))
                writer.uint32(/* id 4, wireType 2 =*/34).bytes(message.signature);
            if (message.timestamp != null && Object.hasOwnProperty.call(message, "timestamp"))
                writer.uint32(/* id 5, wireType 1 =*/41).fixed64(message.timestamp);
            return writer;
        };

        /**
         * Encodes the specified SignedPreKeyRecordStructure message, length delimited. Does not implicitly {@link textsecure.SignedPreKeyRecordStructure.verify|verify} messages.
         * @function encodeDelimited
         * @memberof textsecure.SignedPreKeyRecordStructure
         * @static
         * @param {textsecure.ISignedPreKeyRecordStructure} message SignedPreKeyRecordStructure message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SignedPreKeyRecordStructure.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SignedPreKeyRecordStructure message from the specified reader or buffer.
         * @function decode
         * @memberof textsecure.SignedPreKeyRecordStructure
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {textsecure.SignedPreKeyRecordStructure} SignedPreKeyRecordStructure
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SignedPreKeyRecordStructure.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.textsecure.SignedPreKeyRecordStructure();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.uint32();
                    break;
                case 2:
                    message.publicKey = reader.bytes();
                    break;
                case 3:
                    message.privateKey = reader.bytes();
                    break;
                case 4:
                    message.signature = reader.bytes();
                    break;
                case 5:
                    message.timestamp = reader.fixed64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SignedPreKeyRecordStructure message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof textsecure.SignedPreKeyRecordStructure
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {textsecure.SignedPreKeyRecordStructure} SignedPreKeyRecordStructure
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SignedPreKeyRecordStructure.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SignedPreKeyRecordStructure message.
         * @function verify
         * @memberof textsecure.SignedPreKeyRecordStructure
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SignedPreKeyRecordStructure.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isInteger(message.id))
                    return "id: integer expected";
            if (message.publicKey != null && message.hasOwnProperty("publicKey"))
                if (!(message.publicKey && typeof message.publicKey.length === "number" || $util.isString(message.publicKey)))
                    return "publicKey: buffer expected";
            if (message.privateKey != null && message.hasOwnProperty("privateKey"))
                if (!(message.privateKey && typeof message.privateKey.length === "number" || $util.isString(message.privateKey)))
                    return "privateKey: buffer expected";
            if (message.signature != null && message.hasOwnProperty("signature"))
                if (!(message.signature && typeof message.signature.length === "number" || $util.isString(message.signature)))
                    return "signature: buffer expected";
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                if (!$util.isInteger(message.timestamp) && !(message.timestamp && $util.isInteger(message.timestamp.low) && $util.isInteger(message.timestamp.high)))
                    return "timestamp: integer|Long expected";
            return null;
        };

        /**
         * Creates a SignedPreKeyRecordStructure message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof textsecure.SignedPreKeyRecordStructure
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {textsecure.SignedPreKeyRecordStructure} SignedPreKeyRecordStructure
         */
        SignedPreKeyRecordStructure.fromObject = function fromObject(object) {
            if (object instanceof $root.textsecure.SignedPreKeyRecordStructure)
                return object;
            var message = new $root.textsecure.SignedPreKeyRecordStructure();
            if (object.id != null)
                message.id = object.id >>> 0;
            if (object.publicKey != null)
                if (typeof object.publicKey === "string")
                    $util.base64.decode(object.publicKey, message.publicKey = $util.newBuffer($util.base64.length(object.publicKey)), 0);
                else if (object.publicKey.length)
                    message.publicKey = object.publicKey;
            if (object.privateKey != null)
                if (typeof object.privateKey === "string")
                    $util.base64.decode(object.privateKey, message.privateKey = $util.newBuffer($util.base64.length(object.privateKey)), 0);
                else if (object.privateKey.length)
                    message.privateKey = object.privateKey;
            if (object.signature != null)
                if (typeof object.signature === "string")
                    $util.base64.decode(object.signature, message.signature = $util.newBuffer($util.base64.length(object.signature)), 0);
                else if (object.signature.length)
                    message.signature = object.signature;
            if (object.timestamp != null)
                if ($util.Long)
                    (message.timestamp = $util.Long.fromValue(object.timestamp)).unsigned = false;
                else if (typeof object.timestamp === "string")
                    message.timestamp = parseInt(object.timestamp, 10);
                else if (typeof object.timestamp === "number")
                    message.timestamp = object.timestamp;
                else if (typeof object.timestamp === "object")
                    message.timestamp = new $util.LongBits(object.timestamp.low >>> 0, object.timestamp.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a SignedPreKeyRecordStructure message. Also converts values to other types if specified.
         * @function toObject
         * @memberof textsecure.SignedPreKeyRecordStructure
         * @static
         * @param {textsecure.SignedPreKeyRecordStructure} message SignedPreKeyRecordStructure
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SignedPreKeyRecordStructure.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.id = 0;
                if (options.bytes === String)
                    object.publicKey = "";
                else {
                    object.publicKey = [];
                    if (options.bytes !== Array)
                        object.publicKey = $util.newBuffer(object.publicKey);
                }
                if (options.bytes === String)
                    object.privateKey = "";
                else {
                    object.privateKey = [];
                    if (options.bytes !== Array)
                        object.privateKey = $util.newBuffer(object.privateKey);
                }
                if (options.bytes === String)
                    object.signature = "";
                else {
                    object.signature = [];
                    if (options.bytes !== Array)
                        object.signature = $util.newBuffer(object.signature);
                }
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.timestamp = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.timestamp = options.longs === String ? "0" : 0;
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.publicKey != null && message.hasOwnProperty("publicKey"))
                object.publicKey = options.bytes === String ? $util.base64.encode(message.publicKey, 0, message.publicKey.length) : options.bytes === Array ? Array.prototype.slice.call(message.publicKey) : message.publicKey;
            if (message.privateKey != null && message.hasOwnProperty("privateKey"))
                object.privateKey = options.bytes === String ? $util.base64.encode(message.privateKey, 0, message.privateKey.length) : options.bytes === Array ? Array.prototype.slice.call(message.privateKey) : message.privateKey;
            if (message.signature != null && message.hasOwnProperty("signature"))
                object.signature = options.bytes === String ? $util.base64.encode(message.signature, 0, message.signature.length) : options.bytes === Array ? Array.prototype.slice.call(message.signature) : message.signature;
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                if (typeof message.timestamp === "number")
                    object.timestamp = options.longs === String ? String(message.timestamp) : message.timestamp;
                else
                    object.timestamp = options.longs === String ? $util.Long.prototype.toString.call(message.timestamp) : options.longs === Number ? new $util.LongBits(message.timestamp.low >>> 0, message.timestamp.high >>> 0).toNumber() : message.timestamp;
            return object;
        };

        /**
         * Converts this SignedPreKeyRecordStructure to JSON.
         * @function toJSON
         * @memberof textsecure.SignedPreKeyRecordStructure
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SignedPreKeyRecordStructure.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SignedPreKeyRecordStructure;
    })();

    textsecure.IdentityKeyPairStructure = (function() {

        /**
         * Properties of an IdentityKeyPairStructure.
         * @memberof textsecure
         * @interface IIdentityKeyPairStructure
         * @property {Uint8Array|null} [publicKey] IdentityKeyPairStructure publicKey
         * @property {Uint8Array|null} [privateKey] IdentityKeyPairStructure privateKey
         */

        /**
         * Constructs a new IdentityKeyPairStructure.
         * @memberof textsecure
         * @classdesc Represents an IdentityKeyPairStructure.
         * @implements IIdentityKeyPairStructure
         * @constructor
         * @param {textsecure.IIdentityKeyPairStructure=} [properties] Properties to set
         */
        function IdentityKeyPairStructure(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * IdentityKeyPairStructure publicKey.
         * @member {Uint8Array} publicKey
         * @memberof textsecure.IdentityKeyPairStructure
         * @instance
         */
        IdentityKeyPairStructure.prototype.publicKey = $util.newBuffer([]);

        /**
         * IdentityKeyPairStructure privateKey.
         * @member {Uint8Array} privateKey
         * @memberof textsecure.IdentityKeyPairStructure
         * @instance
         */
        IdentityKeyPairStructure.prototype.privateKey = $util.newBuffer([]);

        /**
         * Creates a new IdentityKeyPairStructure instance using the specified properties.
         * @function create
         * @memberof textsecure.IdentityKeyPairStructure
         * @static
         * @param {textsecure.IIdentityKeyPairStructure=} [properties] Properties to set
         * @returns {textsecure.IdentityKeyPairStructure} IdentityKeyPairStructure instance
         */
        IdentityKeyPairStructure.create = function create(properties) {
            return new IdentityKeyPairStructure(properties);
        };

        /**
         * Encodes the specified IdentityKeyPairStructure message. Does not implicitly {@link textsecure.IdentityKeyPairStructure.verify|verify} messages.
         * @function encode
         * @memberof textsecure.IdentityKeyPairStructure
         * @static
         * @param {textsecure.IIdentityKeyPairStructure} message IdentityKeyPairStructure message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        IdentityKeyPairStructure.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.publicKey != null && Object.hasOwnProperty.call(message, "publicKey"))
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.publicKey);
            if (message.privateKey != null && Object.hasOwnProperty.call(message, "privateKey"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.privateKey);
            return writer;
        };

        /**
         * Encodes the specified IdentityKeyPairStructure message, length delimited. Does not implicitly {@link textsecure.IdentityKeyPairStructure.verify|verify} messages.
         * @function encodeDelimited
         * @memberof textsecure.IdentityKeyPairStructure
         * @static
         * @param {textsecure.IIdentityKeyPairStructure} message IdentityKeyPairStructure message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        IdentityKeyPairStructure.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an IdentityKeyPairStructure message from the specified reader or buffer.
         * @function decode
         * @memberof textsecure.IdentityKeyPairStructure
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {textsecure.IdentityKeyPairStructure} IdentityKeyPairStructure
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        IdentityKeyPairStructure.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.textsecure.IdentityKeyPairStructure();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.publicKey = reader.bytes();
                    break;
                case 2:
                    message.privateKey = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an IdentityKeyPairStructure message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof textsecure.IdentityKeyPairStructure
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {textsecure.IdentityKeyPairStructure} IdentityKeyPairStructure
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        IdentityKeyPairStructure.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an IdentityKeyPairStructure message.
         * @function verify
         * @memberof textsecure.IdentityKeyPairStructure
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        IdentityKeyPairStructure.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.publicKey != null && message.hasOwnProperty("publicKey"))
                if (!(message.publicKey && typeof message.publicKey.length === "number" || $util.isString(message.publicKey)))
                    return "publicKey: buffer expected";
            if (message.privateKey != null && message.hasOwnProperty("privateKey"))
                if (!(message.privateKey && typeof message.privateKey.length === "number" || $util.isString(message.privateKey)))
                    return "privateKey: buffer expected";
            return null;
        };

        /**
         * Creates an IdentityKeyPairStructure message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof textsecure.IdentityKeyPairStructure
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {textsecure.IdentityKeyPairStructure} IdentityKeyPairStructure
         */
        IdentityKeyPairStructure.fromObject = function fromObject(object) {
            if (object instanceof $root.textsecure.IdentityKeyPairStructure)
                return object;
            var message = new $root.textsecure.IdentityKeyPairStructure();
            if (object.publicKey != null)
                if (typeof object.publicKey === "string")
                    $util.base64.decode(object.publicKey, message.publicKey = $util.newBuffer($util.base64.length(object.publicKey)), 0);
                else if (object.publicKey.length)
                    message.publicKey = object.publicKey;
            if (object.privateKey != null)
                if (typeof object.privateKey === "string")
                    $util.base64.decode(object.privateKey, message.privateKey = $util.newBuffer($util.base64.length(object.privateKey)), 0);
                else if (object.privateKey.length)
                    message.privateKey = object.privateKey;
            return message;
        };

        /**
         * Creates a plain object from an IdentityKeyPairStructure message. Also converts values to other types if specified.
         * @function toObject
         * @memberof textsecure.IdentityKeyPairStructure
         * @static
         * @param {textsecure.IdentityKeyPairStructure} message IdentityKeyPairStructure
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        IdentityKeyPairStructure.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if (options.bytes === String)
                    object.publicKey = "";
                else {
                    object.publicKey = [];
                    if (options.bytes !== Array)
                        object.publicKey = $util.newBuffer(object.publicKey);
                }
                if (options.bytes === String)
                    object.privateKey = "";
                else {
                    object.privateKey = [];
                    if (options.bytes !== Array)
                        object.privateKey = $util.newBuffer(object.privateKey);
                }
            }
            if (message.publicKey != null && message.hasOwnProperty("publicKey"))
                object.publicKey = options.bytes === String ? $util.base64.encode(message.publicKey, 0, message.publicKey.length) : options.bytes === Array ? Array.prototype.slice.call(message.publicKey) : message.publicKey;
            if (message.privateKey != null && message.hasOwnProperty("privateKey"))
                object.privateKey = options.bytes === String ? $util.base64.encode(message.privateKey, 0, message.privateKey.length) : options.bytes === Array ? Array.prototype.slice.call(message.privateKey) : message.privateKey;
            return object;
        };

        /**
         * Converts this IdentityKeyPairStructure to JSON.
         * @function toJSON
         * @memberof textsecure.IdentityKeyPairStructure
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        IdentityKeyPairStructure.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return IdentityKeyPairStructure;
    })();

    textsecure.SenderKeyStateStructure = (function() {

        /**
         * Properties of a SenderKeyStateStructure.
         * @memberof textsecure
         * @interface ISenderKeyStateStructure
         * @property {number|null} [senderKeyId] SenderKeyStateStructure senderKeyId
         * @property {textsecure.SenderKeyStateStructure.ISenderChainKey|null} [senderChainKey] SenderKeyStateStructure senderChainKey
         * @property {textsecure.SenderKeyStateStructure.ISenderSigningKey|null} [senderSigningKey] SenderKeyStateStructure senderSigningKey
         * @property {Array.<textsecure.SenderKeyStateStructure.ISenderMessageKey>|null} [senderMessageKeys] SenderKeyStateStructure senderMessageKeys
         */

        /**
         * Constructs a new SenderKeyStateStructure.
         * @memberof textsecure
         * @classdesc Represents a SenderKeyStateStructure.
         * @implements ISenderKeyStateStructure
         * @constructor
         * @param {textsecure.ISenderKeyStateStructure=} [properties] Properties to set
         */
        function SenderKeyStateStructure(properties) {
            this.senderMessageKeys = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SenderKeyStateStructure senderKeyId.
         * @member {number} senderKeyId
         * @memberof textsecure.SenderKeyStateStructure
         * @instance
         */
        SenderKeyStateStructure.prototype.senderKeyId = 0;

        /**
         * SenderKeyStateStructure senderChainKey.
         * @member {textsecure.SenderKeyStateStructure.ISenderChainKey|null|undefined} senderChainKey
         * @memberof textsecure.SenderKeyStateStructure
         * @instance
         */
        SenderKeyStateStructure.prototype.senderChainKey = null;

        /**
         * SenderKeyStateStructure senderSigningKey.
         * @member {textsecure.SenderKeyStateStructure.ISenderSigningKey|null|undefined} senderSigningKey
         * @memberof textsecure.SenderKeyStateStructure
         * @instance
         */
        SenderKeyStateStructure.prototype.senderSigningKey = null;

        /**
         * SenderKeyStateStructure senderMessageKeys.
         * @member {Array.<textsecure.SenderKeyStateStructure.ISenderMessageKey>} senderMessageKeys
         * @memberof textsecure.SenderKeyStateStructure
         * @instance
         */
        SenderKeyStateStructure.prototype.senderMessageKeys = $util.emptyArray;

        /**
         * Creates a new SenderKeyStateStructure instance using the specified properties.
         * @function create
         * @memberof textsecure.SenderKeyStateStructure
         * @static
         * @param {textsecure.ISenderKeyStateStructure=} [properties] Properties to set
         * @returns {textsecure.SenderKeyStateStructure} SenderKeyStateStructure instance
         */
        SenderKeyStateStructure.create = function create(properties) {
            return new SenderKeyStateStructure(properties);
        };

        /**
         * Encodes the specified SenderKeyStateStructure message. Does not implicitly {@link textsecure.SenderKeyStateStructure.verify|verify} messages.
         * @function encode
         * @memberof textsecure.SenderKeyStateStructure
         * @static
         * @param {textsecure.ISenderKeyStateStructure} message SenderKeyStateStructure message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SenderKeyStateStructure.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.senderKeyId != null && Object.hasOwnProperty.call(message, "senderKeyId"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.senderKeyId);
            if (message.senderChainKey != null && Object.hasOwnProperty.call(message, "senderChainKey"))
                $root.textsecure.SenderKeyStateStructure.SenderChainKey.encode(message.senderChainKey, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.senderSigningKey != null && Object.hasOwnProperty.call(message, "senderSigningKey"))
                $root.textsecure.SenderKeyStateStructure.SenderSigningKey.encode(message.senderSigningKey, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.senderMessageKeys != null && message.senderMessageKeys.length)
                for (var i = 0; i < message.senderMessageKeys.length; ++i)
                    $root.textsecure.SenderKeyStateStructure.SenderMessageKey.encode(message.senderMessageKeys[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified SenderKeyStateStructure message, length delimited. Does not implicitly {@link textsecure.SenderKeyStateStructure.verify|verify} messages.
         * @function encodeDelimited
         * @memberof textsecure.SenderKeyStateStructure
         * @static
         * @param {textsecure.ISenderKeyStateStructure} message SenderKeyStateStructure message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SenderKeyStateStructure.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SenderKeyStateStructure message from the specified reader or buffer.
         * @function decode
         * @memberof textsecure.SenderKeyStateStructure
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {textsecure.SenderKeyStateStructure} SenderKeyStateStructure
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SenderKeyStateStructure.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.textsecure.SenderKeyStateStructure();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.senderKeyId = reader.uint32();
                    break;
                case 2:
                    message.senderChainKey = $root.textsecure.SenderKeyStateStructure.SenderChainKey.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.senderSigningKey = $root.textsecure.SenderKeyStateStructure.SenderSigningKey.decode(reader, reader.uint32());
                    break;
                case 4:
                    if (!(message.senderMessageKeys && message.senderMessageKeys.length))
                        message.senderMessageKeys = [];
                    message.senderMessageKeys.push($root.textsecure.SenderKeyStateStructure.SenderMessageKey.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SenderKeyStateStructure message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof textsecure.SenderKeyStateStructure
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {textsecure.SenderKeyStateStructure} SenderKeyStateStructure
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SenderKeyStateStructure.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SenderKeyStateStructure message.
         * @function verify
         * @memberof textsecure.SenderKeyStateStructure
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SenderKeyStateStructure.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.senderKeyId != null && message.hasOwnProperty("senderKeyId"))
                if (!$util.isInteger(message.senderKeyId))
                    return "senderKeyId: integer expected";
            if (message.senderChainKey != null && message.hasOwnProperty("senderChainKey")) {
                var error = $root.textsecure.SenderKeyStateStructure.SenderChainKey.verify(message.senderChainKey);
                if (error)
                    return "senderChainKey." + error;
            }
            if (message.senderSigningKey != null && message.hasOwnProperty("senderSigningKey")) {
                var error = $root.textsecure.SenderKeyStateStructure.SenderSigningKey.verify(message.senderSigningKey);
                if (error)
                    return "senderSigningKey." + error;
            }
            if (message.senderMessageKeys != null && message.hasOwnProperty("senderMessageKeys")) {
                if (!Array.isArray(message.senderMessageKeys))
                    return "senderMessageKeys: array expected";
                for (var i = 0; i < message.senderMessageKeys.length; ++i) {
                    var error = $root.textsecure.SenderKeyStateStructure.SenderMessageKey.verify(message.senderMessageKeys[i]);
                    if (error)
                        return "senderMessageKeys." + error;
                }
            }
            return null;
        };

        /**
         * Creates a SenderKeyStateStructure message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof textsecure.SenderKeyStateStructure
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {textsecure.SenderKeyStateStructure} SenderKeyStateStructure
         */
        SenderKeyStateStructure.fromObject = function fromObject(object) {
            if (object instanceof $root.textsecure.SenderKeyStateStructure)
                return object;
            var message = new $root.textsecure.SenderKeyStateStructure();
            if (object.senderKeyId != null)
                message.senderKeyId = object.senderKeyId >>> 0;
            if (object.senderChainKey != null) {
                if (typeof object.senderChainKey !== "object")
                    throw TypeError(".textsecure.SenderKeyStateStructure.senderChainKey: object expected");
                message.senderChainKey = $root.textsecure.SenderKeyStateStructure.SenderChainKey.fromObject(object.senderChainKey);
            }
            if (object.senderSigningKey != null) {
                if (typeof object.senderSigningKey !== "object")
                    throw TypeError(".textsecure.SenderKeyStateStructure.senderSigningKey: object expected");
                message.senderSigningKey = $root.textsecure.SenderKeyStateStructure.SenderSigningKey.fromObject(object.senderSigningKey);
            }
            if (object.senderMessageKeys) {
                if (!Array.isArray(object.senderMessageKeys))
                    throw TypeError(".textsecure.SenderKeyStateStructure.senderMessageKeys: array expected");
                message.senderMessageKeys = [];
                for (var i = 0; i < object.senderMessageKeys.length; ++i) {
                    if (typeof object.senderMessageKeys[i] !== "object")
                        throw TypeError(".textsecure.SenderKeyStateStructure.senderMessageKeys: object expected");
                    message.senderMessageKeys[i] = $root.textsecure.SenderKeyStateStructure.SenderMessageKey.fromObject(object.senderMessageKeys[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a SenderKeyStateStructure message. Also converts values to other types if specified.
         * @function toObject
         * @memberof textsecure.SenderKeyStateStructure
         * @static
         * @param {textsecure.SenderKeyStateStructure} message SenderKeyStateStructure
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SenderKeyStateStructure.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.senderMessageKeys = [];
            if (options.defaults) {
                object.senderKeyId = 0;
                object.senderChainKey = null;
                object.senderSigningKey = null;
            }
            if (message.senderKeyId != null && message.hasOwnProperty("senderKeyId"))
                object.senderKeyId = message.senderKeyId;
            if (message.senderChainKey != null && message.hasOwnProperty("senderChainKey"))
                object.senderChainKey = $root.textsecure.SenderKeyStateStructure.SenderChainKey.toObject(message.senderChainKey, options);
            if (message.senderSigningKey != null && message.hasOwnProperty("senderSigningKey"))
                object.senderSigningKey = $root.textsecure.SenderKeyStateStructure.SenderSigningKey.toObject(message.senderSigningKey, options);
            if (message.senderMessageKeys && message.senderMessageKeys.length) {
                object.senderMessageKeys = [];
                for (var j = 0; j < message.senderMessageKeys.length; ++j)
                    object.senderMessageKeys[j] = $root.textsecure.SenderKeyStateStructure.SenderMessageKey.toObject(message.senderMessageKeys[j], options);
            }
            return object;
        };

        /**
         * Converts this SenderKeyStateStructure to JSON.
         * @function toJSON
         * @memberof textsecure.SenderKeyStateStructure
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SenderKeyStateStructure.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        SenderKeyStateStructure.SenderChainKey = (function() {

            /**
             * Properties of a SenderChainKey.
             * @memberof textsecure.SenderKeyStateStructure
             * @interface ISenderChainKey
             * @property {number|null} [iteration] SenderChainKey iteration
             * @property {Uint8Array|null} [seed] SenderChainKey seed
             */

            /**
             * Constructs a new SenderChainKey.
             * @memberof textsecure.SenderKeyStateStructure
             * @classdesc Represents a SenderChainKey.
             * @implements ISenderChainKey
             * @constructor
             * @param {textsecure.SenderKeyStateStructure.ISenderChainKey=} [properties] Properties to set
             */
            function SenderChainKey(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * SenderChainKey iteration.
             * @member {number} iteration
             * @memberof textsecure.SenderKeyStateStructure.SenderChainKey
             * @instance
             */
            SenderChainKey.prototype.iteration = 0;

            /**
             * SenderChainKey seed.
             * @member {Uint8Array} seed
             * @memberof textsecure.SenderKeyStateStructure.SenderChainKey
             * @instance
             */
            SenderChainKey.prototype.seed = $util.newBuffer([]);

            /**
             * Creates a new SenderChainKey instance using the specified properties.
             * @function create
             * @memberof textsecure.SenderKeyStateStructure.SenderChainKey
             * @static
             * @param {textsecure.SenderKeyStateStructure.ISenderChainKey=} [properties] Properties to set
             * @returns {textsecure.SenderKeyStateStructure.SenderChainKey} SenderChainKey instance
             */
            SenderChainKey.create = function create(properties) {
                return new SenderChainKey(properties);
            };

            /**
             * Encodes the specified SenderChainKey message. Does not implicitly {@link textsecure.SenderKeyStateStructure.SenderChainKey.verify|verify} messages.
             * @function encode
             * @memberof textsecure.SenderKeyStateStructure.SenderChainKey
             * @static
             * @param {textsecure.SenderKeyStateStructure.ISenderChainKey} message SenderChainKey message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SenderChainKey.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.iteration != null && Object.hasOwnProperty.call(message, "iteration"))
                    writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.iteration);
                if (message.seed != null && Object.hasOwnProperty.call(message, "seed"))
                    writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.seed);
                return writer;
            };

            /**
             * Encodes the specified SenderChainKey message, length delimited. Does not implicitly {@link textsecure.SenderKeyStateStructure.SenderChainKey.verify|verify} messages.
             * @function encodeDelimited
             * @memberof textsecure.SenderKeyStateStructure.SenderChainKey
             * @static
             * @param {textsecure.SenderKeyStateStructure.ISenderChainKey} message SenderChainKey message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SenderChainKey.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a SenderChainKey message from the specified reader or buffer.
             * @function decode
             * @memberof textsecure.SenderKeyStateStructure.SenderChainKey
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {textsecure.SenderKeyStateStructure.SenderChainKey} SenderChainKey
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SenderChainKey.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.textsecure.SenderKeyStateStructure.SenderChainKey();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.iteration = reader.uint32();
                        break;
                    case 2:
                        message.seed = reader.bytes();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a SenderChainKey message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof textsecure.SenderKeyStateStructure.SenderChainKey
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {textsecure.SenderKeyStateStructure.SenderChainKey} SenderChainKey
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SenderChainKey.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a SenderChainKey message.
             * @function verify
             * @memberof textsecure.SenderKeyStateStructure.SenderChainKey
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            SenderChainKey.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.iteration != null && message.hasOwnProperty("iteration"))
                    if (!$util.isInteger(message.iteration))
                        return "iteration: integer expected";
                if (message.seed != null && message.hasOwnProperty("seed"))
                    if (!(message.seed && typeof message.seed.length === "number" || $util.isString(message.seed)))
                        return "seed: buffer expected";
                return null;
            };

            /**
             * Creates a SenderChainKey message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof textsecure.SenderKeyStateStructure.SenderChainKey
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {textsecure.SenderKeyStateStructure.SenderChainKey} SenderChainKey
             */
            SenderChainKey.fromObject = function fromObject(object) {
                if (object instanceof $root.textsecure.SenderKeyStateStructure.SenderChainKey)
                    return object;
                var message = new $root.textsecure.SenderKeyStateStructure.SenderChainKey();
                if (object.iteration != null)
                    message.iteration = object.iteration >>> 0;
                if (object.seed != null)
                    if (typeof object.seed === "string")
                        $util.base64.decode(object.seed, message.seed = $util.newBuffer($util.base64.length(object.seed)), 0);
                    else if (object.seed.length)
                        message.seed = object.seed;
                return message;
            };

            /**
             * Creates a plain object from a SenderChainKey message. Also converts values to other types if specified.
             * @function toObject
             * @memberof textsecure.SenderKeyStateStructure.SenderChainKey
             * @static
             * @param {textsecure.SenderKeyStateStructure.SenderChainKey} message SenderChainKey
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            SenderChainKey.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.iteration = 0;
                    if (options.bytes === String)
                        object.seed = "";
                    else {
                        object.seed = [];
                        if (options.bytes !== Array)
                            object.seed = $util.newBuffer(object.seed);
                    }
                }
                if (message.iteration != null && message.hasOwnProperty("iteration"))
                    object.iteration = message.iteration;
                if (message.seed != null && message.hasOwnProperty("seed"))
                    object.seed = options.bytes === String ? $util.base64.encode(message.seed, 0, message.seed.length) : options.bytes === Array ? Array.prototype.slice.call(message.seed) : message.seed;
                return object;
            };

            /**
             * Converts this SenderChainKey to JSON.
             * @function toJSON
             * @memberof textsecure.SenderKeyStateStructure.SenderChainKey
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            SenderChainKey.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return SenderChainKey;
        })();

        SenderKeyStateStructure.SenderMessageKey = (function() {

            /**
             * Properties of a SenderMessageKey.
             * @memberof textsecure.SenderKeyStateStructure
             * @interface ISenderMessageKey
             * @property {number|null} [iteration] SenderMessageKey iteration
             * @property {Uint8Array|null} [seed] SenderMessageKey seed
             */

            /**
             * Constructs a new SenderMessageKey.
             * @memberof textsecure.SenderKeyStateStructure
             * @classdesc Represents a SenderMessageKey.
             * @implements ISenderMessageKey
             * @constructor
             * @param {textsecure.SenderKeyStateStructure.ISenderMessageKey=} [properties] Properties to set
             */
            function SenderMessageKey(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * SenderMessageKey iteration.
             * @member {number} iteration
             * @memberof textsecure.SenderKeyStateStructure.SenderMessageKey
             * @instance
             */
            SenderMessageKey.prototype.iteration = 0;

            /**
             * SenderMessageKey seed.
             * @member {Uint8Array} seed
             * @memberof textsecure.SenderKeyStateStructure.SenderMessageKey
             * @instance
             */
            SenderMessageKey.prototype.seed = $util.newBuffer([]);

            /**
             * Creates a new SenderMessageKey instance using the specified properties.
             * @function create
             * @memberof textsecure.SenderKeyStateStructure.SenderMessageKey
             * @static
             * @param {textsecure.SenderKeyStateStructure.ISenderMessageKey=} [properties] Properties to set
             * @returns {textsecure.SenderKeyStateStructure.SenderMessageKey} SenderMessageKey instance
             */
            SenderMessageKey.create = function create(properties) {
                return new SenderMessageKey(properties);
            };

            /**
             * Encodes the specified SenderMessageKey message. Does not implicitly {@link textsecure.SenderKeyStateStructure.SenderMessageKey.verify|verify} messages.
             * @function encode
             * @memberof textsecure.SenderKeyStateStructure.SenderMessageKey
             * @static
             * @param {textsecure.SenderKeyStateStructure.ISenderMessageKey} message SenderMessageKey message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SenderMessageKey.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.iteration != null && Object.hasOwnProperty.call(message, "iteration"))
                    writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.iteration);
                if (message.seed != null && Object.hasOwnProperty.call(message, "seed"))
                    writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.seed);
                return writer;
            };

            /**
             * Encodes the specified SenderMessageKey message, length delimited. Does not implicitly {@link textsecure.SenderKeyStateStructure.SenderMessageKey.verify|verify} messages.
             * @function encodeDelimited
             * @memberof textsecure.SenderKeyStateStructure.SenderMessageKey
             * @static
             * @param {textsecure.SenderKeyStateStructure.ISenderMessageKey} message SenderMessageKey message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SenderMessageKey.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a SenderMessageKey message from the specified reader or buffer.
             * @function decode
             * @memberof textsecure.SenderKeyStateStructure.SenderMessageKey
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {textsecure.SenderKeyStateStructure.SenderMessageKey} SenderMessageKey
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SenderMessageKey.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.textsecure.SenderKeyStateStructure.SenderMessageKey();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.iteration = reader.uint32();
                        break;
                    case 2:
                        message.seed = reader.bytes();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a SenderMessageKey message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof textsecure.SenderKeyStateStructure.SenderMessageKey
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {textsecure.SenderKeyStateStructure.SenderMessageKey} SenderMessageKey
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SenderMessageKey.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a SenderMessageKey message.
             * @function verify
             * @memberof textsecure.SenderKeyStateStructure.SenderMessageKey
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            SenderMessageKey.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.iteration != null && message.hasOwnProperty("iteration"))
                    if (!$util.isInteger(message.iteration))
                        return "iteration: integer expected";
                if (message.seed != null && message.hasOwnProperty("seed"))
                    if (!(message.seed && typeof message.seed.length === "number" || $util.isString(message.seed)))
                        return "seed: buffer expected";
                return null;
            };

            /**
             * Creates a SenderMessageKey message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof textsecure.SenderKeyStateStructure.SenderMessageKey
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {textsecure.SenderKeyStateStructure.SenderMessageKey} SenderMessageKey
             */
            SenderMessageKey.fromObject = function fromObject(object) {
                if (object instanceof $root.textsecure.SenderKeyStateStructure.SenderMessageKey)
                    return object;
                var message = new $root.textsecure.SenderKeyStateStructure.SenderMessageKey();
                if (object.iteration != null)
                    message.iteration = object.iteration >>> 0;
                if (object.seed != null)
                    if (typeof object.seed === "string")
                        $util.base64.decode(object.seed, message.seed = $util.newBuffer($util.base64.length(object.seed)), 0);
                    else if (object.seed.length)
                        message.seed = object.seed;
                return message;
            };

            /**
             * Creates a plain object from a SenderMessageKey message. Also converts values to other types if specified.
             * @function toObject
             * @memberof textsecure.SenderKeyStateStructure.SenderMessageKey
             * @static
             * @param {textsecure.SenderKeyStateStructure.SenderMessageKey} message SenderMessageKey
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            SenderMessageKey.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.iteration = 0;
                    if (options.bytes === String)
                        object.seed = "";
                    else {
                        object.seed = [];
                        if (options.bytes !== Array)
                            object.seed = $util.newBuffer(object.seed);
                    }
                }
                if (message.iteration != null && message.hasOwnProperty("iteration"))
                    object.iteration = message.iteration;
                if (message.seed != null && message.hasOwnProperty("seed"))
                    object.seed = options.bytes === String ? $util.base64.encode(message.seed, 0, message.seed.length) : options.bytes === Array ? Array.prototype.slice.call(message.seed) : message.seed;
                return object;
            };

            /**
             * Converts this SenderMessageKey to JSON.
             * @function toJSON
             * @memberof textsecure.SenderKeyStateStructure.SenderMessageKey
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            SenderMessageKey.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return SenderMessageKey;
        })();

        SenderKeyStateStructure.SenderSigningKey = (function() {

            /**
             * Properties of a SenderSigningKey.
             * @memberof textsecure.SenderKeyStateStructure
             * @interface ISenderSigningKey
             * @property {Uint8Array|null} ["public"] SenderSigningKey public
             * @property {Uint8Array|null} ["private"] SenderSigningKey private
             */

            /**
             * Constructs a new SenderSigningKey.
             * @memberof textsecure.SenderKeyStateStructure
             * @classdesc Represents a SenderSigningKey.
             * @implements ISenderSigningKey
             * @constructor
             * @param {textsecure.SenderKeyStateStructure.ISenderSigningKey=} [properties] Properties to set
             */
            function SenderSigningKey(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * SenderSigningKey public.
             * @member {Uint8Array} public
             * @memberof textsecure.SenderKeyStateStructure.SenderSigningKey
             * @instance
             */
            SenderSigningKey.prototype["public"] = $util.newBuffer([]);

            /**
             * SenderSigningKey private.
             * @member {Uint8Array} private
             * @memberof textsecure.SenderKeyStateStructure.SenderSigningKey
             * @instance
             */
            SenderSigningKey.prototype["private"] = $util.newBuffer([]);

            /**
             * Creates a new SenderSigningKey instance using the specified properties.
             * @function create
             * @memberof textsecure.SenderKeyStateStructure.SenderSigningKey
             * @static
             * @param {textsecure.SenderKeyStateStructure.ISenderSigningKey=} [properties] Properties to set
             * @returns {textsecure.SenderKeyStateStructure.SenderSigningKey} SenderSigningKey instance
             */
            SenderSigningKey.create = function create(properties) {
                return new SenderSigningKey(properties);
            };

            /**
             * Encodes the specified SenderSigningKey message. Does not implicitly {@link textsecure.SenderKeyStateStructure.SenderSigningKey.verify|verify} messages.
             * @function encode
             * @memberof textsecure.SenderKeyStateStructure.SenderSigningKey
             * @static
             * @param {textsecure.SenderKeyStateStructure.ISenderSigningKey} message SenderSigningKey message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SenderSigningKey.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message["public"] != null && Object.hasOwnProperty.call(message, "public"))
                    writer.uint32(/* id 1, wireType 2 =*/10).bytes(message["public"]);
                if (message["private"] != null && Object.hasOwnProperty.call(message, "private"))
                    writer.uint32(/* id 2, wireType 2 =*/18).bytes(message["private"]);
                return writer;
            };

            /**
             * Encodes the specified SenderSigningKey message, length delimited. Does not implicitly {@link textsecure.SenderKeyStateStructure.SenderSigningKey.verify|verify} messages.
             * @function encodeDelimited
             * @memberof textsecure.SenderKeyStateStructure.SenderSigningKey
             * @static
             * @param {textsecure.SenderKeyStateStructure.ISenderSigningKey} message SenderSigningKey message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SenderSigningKey.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a SenderSigningKey message from the specified reader or buffer.
             * @function decode
             * @memberof textsecure.SenderKeyStateStructure.SenderSigningKey
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {textsecure.SenderKeyStateStructure.SenderSigningKey} SenderSigningKey
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SenderSigningKey.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.textsecure.SenderKeyStateStructure.SenderSigningKey();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message["public"] = reader.bytes();
                        break;
                    case 2:
                        message["private"] = reader.bytes();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a SenderSigningKey message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof textsecure.SenderKeyStateStructure.SenderSigningKey
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {textsecure.SenderKeyStateStructure.SenderSigningKey} SenderSigningKey
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SenderSigningKey.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a SenderSigningKey message.
             * @function verify
             * @memberof textsecure.SenderKeyStateStructure.SenderSigningKey
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            SenderSigningKey.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message["public"] != null && message.hasOwnProperty("public"))
                    if (!(message["public"] && typeof message["public"].length === "number" || $util.isString(message["public"])))
                        return "public: buffer expected";
                if (message["private"] != null && message.hasOwnProperty("private"))
                    if (!(message["private"] && typeof message["private"].length === "number" || $util.isString(message["private"])))
                        return "private: buffer expected";
                return null;
            };

            /**
             * Creates a SenderSigningKey message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof textsecure.SenderKeyStateStructure.SenderSigningKey
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {textsecure.SenderKeyStateStructure.SenderSigningKey} SenderSigningKey
             */
            SenderSigningKey.fromObject = function fromObject(object) {
                if (object instanceof $root.textsecure.SenderKeyStateStructure.SenderSigningKey)
                    return object;
                var message = new $root.textsecure.SenderKeyStateStructure.SenderSigningKey();
                if (object["public"] != null)
                    if (typeof object["public"] === "string")
                        $util.base64.decode(object["public"], message["public"] = $util.newBuffer($util.base64.length(object["public"])), 0);
                    else if (object["public"].length)
                        message["public"] = object["public"];
                if (object["private"] != null)
                    if (typeof object["private"] === "string")
                        $util.base64.decode(object["private"], message["private"] = $util.newBuffer($util.base64.length(object["private"])), 0);
                    else if (object["private"].length)
                        message["private"] = object["private"];
                return message;
            };

            /**
             * Creates a plain object from a SenderSigningKey message. Also converts values to other types if specified.
             * @function toObject
             * @memberof textsecure.SenderKeyStateStructure.SenderSigningKey
             * @static
             * @param {textsecure.SenderKeyStateStructure.SenderSigningKey} message SenderSigningKey
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            SenderSigningKey.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    if (options.bytes === String)
                        object["public"] = "";
                    else {
                        object["public"] = [];
                        if (options.bytes !== Array)
                            object["public"] = $util.newBuffer(object["public"]);
                    }
                    if (options.bytes === String)
                        object["private"] = "";
                    else {
                        object["private"] = [];
                        if (options.bytes !== Array)
                            object["private"] = $util.newBuffer(object["private"]);
                    }
                }
                if (message["public"] != null && message.hasOwnProperty("public"))
                    object["public"] = options.bytes === String ? $util.base64.encode(message["public"], 0, message["public"].length) : options.bytes === Array ? Array.prototype.slice.call(message["public"]) : message["public"];
                if (message["private"] != null && message.hasOwnProperty("private"))
                    object["private"] = options.bytes === String ? $util.base64.encode(message["private"], 0, message["private"].length) : options.bytes === Array ? Array.prototype.slice.call(message["private"]) : message["private"];
                return object;
            };

            /**
             * Converts this SenderSigningKey to JSON.
             * @function toJSON
             * @memberof textsecure.SenderKeyStateStructure.SenderSigningKey
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            SenderSigningKey.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return SenderSigningKey;
        })();

        return SenderKeyStateStructure;
    })();

    textsecure.SenderKeyRecordStructure = (function() {

        /**
         * Properties of a SenderKeyRecordStructure.
         * @memberof textsecure
         * @interface ISenderKeyRecordStructure
         * @property {Array.<textsecure.ISenderKeyStateStructure>|null} [senderKeyStates] SenderKeyRecordStructure senderKeyStates
         */

        /**
         * Constructs a new SenderKeyRecordStructure.
         * @memberof textsecure
         * @classdesc Represents a SenderKeyRecordStructure.
         * @implements ISenderKeyRecordStructure
         * @constructor
         * @param {textsecure.ISenderKeyRecordStructure=} [properties] Properties to set
         */
        function SenderKeyRecordStructure(properties) {
            this.senderKeyStates = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SenderKeyRecordStructure senderKeyStates.
         * @member {Array.<textsecure.ISenderKeyStateStructure>} senderKeyStates
         * @memberof textsecure.SenderKeyRecordStructure
         * @instance
         */
        SenderKeyRecordStructure.prototype.senderKeyStates = $util.emptyArray;

        /**
         * Creates a new SenderKeyRecordStructure instance using the specified properties.
         * @function create
         * @memberof textsecure.SenderKeyRecordStructure
         * @static
         * @param {textsecure.ISenderKeyRecordStructure=} [properties] Properties to set
         * @returns {textsecure.SenderKeyRecordStructure} SenderKeyRecordStructure instance
         */
        SenderKeyRecordStructure.create = function create(properties) {
            return new SenderKeyRecordStructure(properties);
        };

        /**
         * Encodes the specified SenderKeyRecordStructure message. Does not implicitly {@link textsecure.SenderKeyRecordStructure.verify|verify} messages.
         * @function encode
         * @memberof textsecure.SenderKeyRecordStructure
         * @static
         * @param {textsecure.ISenderKeyRecordStructure} message SenderKeyRecordStructure message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SenderKeyRecordStructure.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.senderKeyStates != null && message.senderKeyStates.length)
                for (var i = 0; i < message.senderKeyStates.length; ++i)
                    $root.textsecure.SenderKeyStateStructure.encode(message.senderKeyStates[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified SenderKeyRecordStructure message, length delimited. Does not implicitly {@link textsecure.SenderKeyRecordStructure.verify|verify} messages.
         * @function encodeDelimited
         * @memberof textsecure.SenderKeyRecordStructure
         * @static
         * @param {textsecure.ISenderKeyRecordStructure} message SenderKeyRecordStructure message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SenderKeyRecordStructure.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SenderKeyRecordStructure message from the specified reader or buffer.
         * @function decode
         * @memberof textsecure.SenderKeyRecordStructure
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {textsecure.SenderKeyRecordStructure} SenderKeyRecordStructure
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SenderKeyRecordStructure.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.textsecure.SenderKeyRecordStructure();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.senderKeyStates && message.senderKeyStates.length))
                        message.senderKeyStates = [];
                    message.senderKeyStates.push($root.textsecure.SenderKeyStateStructure.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SenderKeyRecordStructure message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof textsecure.SenderKeyRecordStructure
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {textsecure.SenderKeyRecordStructure} SenderKeyRecordStructure
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SenderKeyRecordStructure.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SenderKeyRecordStructure message.
         * @function verify
         * @memberof textsecure.SenderKeyRecordStructure
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SenderKeyRecordStructure.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.senderKeyStates != null && message.hasOwnProperty("senderKeyStates")) {
                if (!Array.isArray(message.senderKeyStates))
                    return "senderKeyStates: array expected";
                for (var i = 0; i < message.senderKeyStates.length; ++i) {
                    var error = $root.textsecure.SenderKeyStateStructure.verify(message.senderKeyStates[i]);
                    if (error)
                        return "senderKeyStates." + error;
                }
            }
            return null;
        };

        /**
         * Creates a SenderKeyRecordStructure message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof textsecure.SenderKeyRecordStructure
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {textsecure.SenderKeyRecordStructure} SenderKeyRecordStructure
         */
        SenderKeyRecordStructure.fromObject = function fromObject(object) {
            if (object instanceof $root.textsecure.SenderKeyRecordStructure)
                return object;
            var message = new $root.textsecure.SenderKeyRecordStructure();
            if (object.senderKeyStates) {
                if (!Array.isArray(object.senderKeyStates))
                    throw TypeError(".textsecure.SenderKeyRecordStructure.senderKeyStates: array expected");
                message.senderKeyStates = [];
                for (var i = 0; i < object.senderKeyStates.length; ++i) {
                    if (typeof object.senderKeyStates[i] !== "object")
                        throw TypeError(".textsecure.SenderKeyRecordStructure.senderKeyStates: object expected");
                    message.senderKeyStates[i] = $root.textsecure.SenderKeyStateStructure.fromObject(object.senderKeyStates[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a SenderKeyRecordStructure message. Also converts values to other types if specified.
         * @function toObject
         * @memberof textsecure.SenderKeyRecordStructure
         * @static
         * @param {textsecure.SenderKeyRecordStructure} message SenderKeyRecordStructure
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SenderKeyRecordStructure.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.senderKeyStates = [];
            if (message.senderKeyStates && message.senderKeyStates.length) {
                object.senderKeyStates = [];
                for (var j = 0; j < message.senderKeyStates.length; ++j)
                    object.senderKeyStates[j] = $root.textsecure.SenderKeyStateStructure.toObject(message.senderKeyStates[j], options);
            }
            return object;
        };

        /**
         * Converts this SenderKeyRecordStructure to JSON.
         * @function toJSON
         * @memberof textsecure.SenderKeyRecordStructure
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SenderKeyRecordStructure.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SenderKeyRecordStructure;
    })();

    textsecure.WhisperMessage = (function() {

        /**
         * Properties of a WhisperMessage.
         * @memberof textsecure
         * @interface IWhisperMessage
         * @property {Uint8Array|null} [ephemeralKey] WhisperMessage ephemeralKey
         * @property {number|null} [counter] WhisperMessage counter
         * @property {number|null} [previousCounter] WhisperMessage previousCounter
         * @property {Uint8Array|null} [ciphertext] WhisperMessage ciphertext
         */

        /**
         * Constructs a new WhisperMessage.
         * @memberof textsecure
         * @classdesc Represents a WhisperMessage.
         * @implements IWhisperMessage
         * @constructor
         * @param {textsecure.IWhisperMessage=} [properties] Properties to set
         */
        function WhisperMessage(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * WhisperMessage ephemeralKey.
         * @member {Uint8Array} ephemeralKey
         * @memberof textsecure.WhisperMessage
         * @instance
         */
        WhisperMessage.prototype.ephemeralKey = $util.newBuffer([]);

        /**
         * WhisperMessage counter.
         * @member {number} counter
         * @memberof textsecure.WhisperMessage
         * @instance
         */
        WhisperMessage.prototype.counter = 0;

        /**
         * WhisperMessage previousCounter.
         * @member {number} previousCounter
         * @memberof textsecure.WhisperMessage
         * @instance
         */
        WhisperMessage.prototype.previousCounter = 0;

        /**
         * WhisperMessage ciphertext.
         * @member {Uint8Array} ciphertext
         * @memberof textsecure.WhisperMessage
         * @instance
         */
        WhisperMessage.prototype.ciphertext = $util.newBuffer([]);

        /**
         * Creates a new WhisperMessage instance using the specified properties.
         * @function create
         * @memberof textsecure.WhisperMessage
         * @static
         * @param {textsecure.IWhisperMessage=} [properties] Properties to set
         * @returns {textsecure.WhisperMessage} WhisperMessage instance
         */
        WhisperMessage.create = function create(properties) {
            return new WhisperMessage(properties);
        };

        /**
         * Encodes the specified WhisperMessage message. Does not implicitly {@link textsecure.WhisperMessage.verify|verify} messages.
         * @function encode
         * @memberof textsecure.WhisperMessage
         * @static
         * @param {textsecure.IWhisperMessage} message WhisperMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WhisperMessage.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.ephemeralKey != null && Object.hasOwnProperty.call(message, "ephemeralKey"))
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.ephemeralKey);
            if (message.counter != null && Object.hasOwnProperty.call(message, "counter"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.counter);
            if (message.previousCounter != null && Object.hasOwnProperty.call(message, "previousCounter"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.previousCounter);
            if (message.ciphertext != null && Object.hasOwnProperty.call(message, "ciphertext"))
                writer.uint32(/* id 4, wireType 2 =*/34).bytes(message.ciphertext);
            return writer;
        };

        /**
         * Encodes the specified WhisperMessage message, length delimited. Does not implicitly {@link textsecure.WhisperMessage.verify|verify} messages.
         * @function encodeDelimited
         * @memberof textsecure.WhisperMessage
         * @static
         * @param {textsecure.IWhisperMessage} message WhisperMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WhisperMessage.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a WhisperMessage message from the specified reader or buffer.
         * @function decode
         * @memberof textsecure.WhisperMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {textsecure.WhisperMessage} WhisperMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WhisperMessage.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.textsecure.WhisperMessage();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.ephemeralKey = reader.bytes();
                    break;
                case 2:
                    message.counter = reader.uint32();
                    break;
                case 3:
                    message.previousCounter = reader.uint32();
                    break;
                case 4:
                    message.ciphertext = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a WhisperMessage message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof textsecure.WhisperMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {textsecure.WhisperMessage} WhisperMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WhisperMessage.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a WhisperMessage message.
         * @function verify
         * @memberof textsecure.WhisperMessage
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        WhisperMessage.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.ephemeralKey != null && message.hasOwnProperty("ephemeralKey"))
                if (!(message.ephemeralKey && typeof message.ephemeralKey.length === "number" || $util.isString(message.ephemeralKey)))
                    return "ephemeralKey: buffer expected";
            if (message.counter != null && message.hasOwnProperty("counter"))
                if (!$util.isInteger(message.counter))
                    return "counter: integer expected";
            if (message.previousCounter != null && message.hasOwnProperty("previousCounter"))
                if (!$util.isInteger(message.previousCounter))
                    return "previousCounter: integer expected";
            if (message.ciphertext != null && message.hasOwnProperty("ciphertext"))
                if (!(message.ciphertext && typeof message.ciphertext.length === "number" || $util.isString(message.ciphertext)))
                    return "ciphertext: buffer expected";
            return null;
        };

        /**
         * Creates a WhisperMessage message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof textsecure.WhisperMessage
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {textsecure.WhisperMessage} WhisperMessage
         */
        WhisperMessage.fromObject = function fromObject(object) {
            if (object instanceof $root.textsecure.WhisperMessage)
                return object;
            var message = new $root.textsecure.WhisperMessage();
            if (object.ephemeralKey != null)
                if (typeof object.ephemeralKey === "string")
                    $util.base64.decode(object.ephemeralKey, message.ephemeralKey = $util.newBuffer($util.base64.length(object.ephemeralKey)), 0);
                else if (object.ephemeralKey.length)
                    message.ephemeralKey = object.ephemeralKey;
            if (object.counter != null)
                message.counter = object.counter >>> 0;
            if (object.previousCounter != null)
                message.previousCounter = object.previousCounter >>> 0;
            if (object.ciphertext != null)
                if (typeof object.ciphertext === "string")
                    $util.base64.decode(object.ciphertext, message.ciphertext = $util.newBuffer($util.base64.length(object.ciphertext)), 0);
                else if (object.ciphertext.length)
                    message.ciphertext = object.ciphertext;
            return message;
        };

        /**
         * Creates a plain object from a WhisperMessage message. Also converts values to other types if specified.
         * @function toObject
         * @memberof textsecure.WhisperMessage
         * @static
         * @param {textsecure.WhisperMessage} message WhisperMessage
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        WhisperMessage.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if (options.bytes === String)
                    object.ephemeralKey = "";
                else {
                    object.ephemeralKey = [];
                    if (options.bytes !== Array)
                        object.ephemeralKey = $util.newBuffer(object.ephemeralKey);
                }
                object.counter = 0;
                object.previousCounter = 0;
                if (options.bytes === String)
                    object.ciphertext = "";
                else {
                    object.ciphertext = [];
                    if (options.bytes !== Array)
                        object.ciphertext = $util.newBuffer(object.ciphertext);
                }
            }
            if (message.ephemeralKey != null && message.hasOwnProperty("ephemeralKey"))
                object.ephemeralKey = options.bytes === String ? $util.base64.encode(message.ephemeralKey, 0, message.ephemeralKey.length) : options.bytes === Array ? Array.prototype.slice.call(message.ephemeralKey) : message.ephemeralKey;
            if (message.counter != null && message.hasOwnProperty("counter"))
                object.counter = message.counter;
            if (message.previousCounter != null && message.hasOwnProperty("previousCounter"))
                object.previousCounter = message.previousCounter;
            if (message.ciphertext != null && message.hasOwnProperty("ciphertext"))
                object.ciphertext = options.bytes === String ? $util.base64.encode(message.ciphertext, 0, message.ciphertext.length) : options.bytes === Array ? Array.prototype.slice.call(message.ciphertext) : message.ciphertext;
            return object;
        };

        /**
         * Converts this WhisperMessage to JSON.
         * @function toJSON
         * @memberof textsecure.WhisperMessage
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        WhisperMessage.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return WhisperMessage;
    })();

    textsecure.PreKeyWhisperMessage = (function() {

        /**
         * Properties of a PreKeyWhisperMessage.
         * @memberof textsecure
         * @interface IPreKeyWhisperMessage
         * @property {number|null} [preKeyId] PreKeyWhisperMessage preKeyId
         * @property {Uint8Array|null} [baseKey] PreKeyWhisperMessage baseKey
         * @property {Uint8Array|null} [identityKey] PreKeyWhisperMessage identityKey
         * @property {Uint8Array|null} [message] PreKeyWhisperMessage message
         * @property {number|null} [registrationId] PreKeyWhisperMessage registrationId
         * @property {number|null} [signedPreKeyId] PreKeyWhisperMessage signedPreKeyId
         */

        /**
         * Constructs a new PreKeyWhisperMessage.
         * @memberof textsecure
         * @classdesc Represents a PreKeyWhisperMessage.
         * @implements IPreKeyWhisperMessage
         * @constructor
         * @param {textsecure.IPreKeyWhisperMessage=} [properties] Properties to set
         */
        function PreKeyWhisperMessage(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PreKeyWhisperMessage preKeyId.
         * @member {number} preKeyId
         * @memberof textsecure.PreKeyWhisperMessage
         * @instance
         */
        PreKeyWhisperMessage.prototype.preKeyId = 0;

        /**
         * PreKeyWhisperMessage baseKey.
         * @member {Uint8Array} baseKey
         * @memberof textsecure.PreKeyWhisperMessage
         * @instance
         */
        PreKeyWhisperMessage.prototype.baseKey = $util.newBuffer([]);

        /**
         * PreKeyWhisperMessage identityKey.
         * @member {Uint8Array} identityKey
         * @memberof textsecure.PreKeyWhisperMessage
         * @instance
         */
        PreKeyWhisperMessage.prototype.identityKey = $util.newBuffer([]);

        /**
         * PreKeyWhisperMessage message.
         * @member {Uint8Array} message
         * @memberof textsecure.PreKeyWhisperMessage
         * @instance
         */
        PreKeyWhisperMessage.prototype.message = $util.newBuffer([]);

        /**
         * PreKeyWhisperMessage registrationId.
         * @member {number} registrationId
         * @memberof textsecure.PreKeyWhisperMessage
         * @instance
         */
        PreKeyWhisperMessage.prototype.registrationId = 0;

        /**
         * PreKeyWhisperMessage signedPreKeyId.
         * @member {number} signedPreKeyId
         * @memberof textsecure.PreKeyWhisperMessage
         * @instance
         */
        PreKeyWhisperMessage.prototype.signedPreKeyId = 0;

        /**
         * Creates a new PreKeyWhisperMessage instance using the specified properties.
         * @function create
         * @memberof textsecure.PreKeyWhisperMessage
         * @static
         * @param {textsecure.IPreKeyWhisperMessage=} [properties] Properties to set
         * @returns {textsecure.PreKeyWhisperMessage} PreKeyWhisperMessage instance
         */
        PreKeyWhisperMessage.create = function create(properties) {
            return new PreKeyWhisperMessage(properties);
        };

        /**
         * Encodes the specified PreKeyWhisperMessage message. Does not implicitly {@link textsecure.PreKeyWhisperMessage.verify|verify} messages.
         * @function encode
         * @memberof textsecure.PreKeyWhisperMessage
         * @static
         * @param {textsecure.IPreKeyWhisperMessage} message PreKeyWhisperMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PreKeyWhisperMessage.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.preKeyId != null && Object.hasOwnProperty.call(message, "preKeyId"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.preKeyId);
            if (message.baseKey != null && Object.hasOwnProperty.call(message, "baseKey"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.baseKey);
            if (message.identityKey != null && Object.hasOwnProperty.call(message, "identityKey"))
                writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.identityKey);
            if (message.message != null && Object.hasOwnProperty.call(message, "message"))
                writer.uint32(/* id 4, wireType 2 =*/34).bytes(message.message);
            if (message.registrationId != null && Object.hasOwnProperty.call(message, "registrationId"))
                writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.registrationId);
            if (message.signedPreKeyId != null && Object.hasOwnProperty.call(message, "signedPreKeyId"))
                writer.uint32(/* id 6, wireType 0 =*/48).uint32(message.signedPreKeyId);
            return writer;
        };

        /**
         * Encodes the specified PreKeyWhisperMessage message, length delimited. Does not implicitly {@link textsecure.PreKeyWhisperMessage.verify|verify} messages.
         * @function encodeDelimited
         * @memberof textsecure.PreKeyWhisperMessage
         * @static
         * @param {textsecure.IPreKeyWhisperMessage} message PreKeyWhisperMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PreKeyWhisperMessage.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PreKeyWhisperMessage message from the specified reader or buffer.
         * @function decode
         * @memberof textsecure.PreKeyWhisperMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {textsecure.PreKeyWhisperMessage} PreKeyWhisperMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PreKeyWhisperMessage.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.textsecure.PreKeyWhisperMessage();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.preKeyId = reader.uint32();
                    break;
                case 2:
                    message.baseKey = reader.bytes();
                    break;
                case 3:
                    message.identityKey = reader.bytes();
                    break;
                case 4:
                    message.message = reader.bytes();
                    break;
                case 5:
                    message.registrationId = reader.uint32();
                    break;
                case 6:
                    message.signedPreKeyId = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a PreKeyWhisperMessage message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof textsecure.PreKeyWhisperMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {textsecure.PreKeyWhisperMessage} PreKeyWhisperMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PreKeyWhisperMessage.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PreKeyWhisperMessage message.
         * @function verify
         * @memberof textsecure.PreKeyWhisperMessage
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PreKeyWhisperMessage.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.preKeyId != null && message.hasOwnProperty("preKeyId"))
                if (!$util.isInteger(message.preKeyId))
                    return "preKeyId: integer expected";
            if (message.baseKey != null && message.hasOwnProperty("baseKey"))
                if (!(message.baseKey && typeof message.baseKey.length === "number" || $util.isString(message.baseKey)))
                    return "baseKey: buffer expected";
            if (message.identityKey != null && message.hasOwnProperty("identityKey"))
                if (!(message.identityKey && typeof message.identityKey.length === "number" || $util.isString(message.identityKey)))
                    return "identityKey: buffer expected";
            if (message.message != null && message.hasOwnProperty("message"))
                if (!(message.message && typeof message.message.length === "number" || $util.isString(message.message)))
                    return "message: buffer expected";
            if (message.registrationId != null && message.hasOwnProperty("registrationId"))
                if (!$util.isInteger(message.registrationId))
                    return "registrationId: integer expected";
            if (message.signedPreKeyId != null && message.hasOwnProperty("signedPreKeyId"))
                if (!$util.isInteger(message.signedPreKeyId))
                    return "signedPreKeyId: integer expected";
            return null;
        };

        /**
         * Creates a PreKeyWhisperMessage message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof textsecure.PreKeyWhisperMessage
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {textsecure.PreKeyWhisperMessage} PreKeyWhisperMessage
         */
        PreKeyWhisperMessage.fromObject = function fromObject(object) {
            if (object instanceof $root.textsecure.PreKeyWhisperMessage)
                return object;
            var message = new $root.textsecure.PreKeyWhisperMessage();
            if (object.preKeyId != null)
                message.preKeyId = object.preKeyId >>> 0;
            if (object.baseKey != null)
                if (typeof object.baseKey === "string")
                    $util.base64.decode(object.baseKey, message.baseKey = $util.newBuffer($util.base64.length(object.baseKey)), 0);
                else if (object.baseKey.length)
                    message.baseKey = object.baseKey;
            if (object.identityKey != null)
                if (typeof object.identityKey === "string")
                    $util.base64.decode(object.identityKey, message.identityKey = $util.newBuffer($util.base64.length(object.identityKey)), 0);
                else if (object.identityKey.length)
                    message.identityKey = object.identityKey;
            if (object.message != null)
                if (typeof object.message === "string")
                    $util.base64.decode(object.message, message.message = $util.newBuffer($util.base64.length(object.message)), 0);
                else if (object.message.length)
                    message.message = object.message;
            if (object.registrationId != null)
                message.registrationId = object.registrationId >>> 0;
            if (object.signedPreKeyId != null)
                message.signedPreKeyId = object.signedPreKeyId >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a PreKeyWhisperMessage message. Also converts values to other types if specified.
         * @function toObject
         * @memberof textsecure.PreKeyWhisperMessage
         * @static
         * @param {textsecure.PreKeyWhisperMessage} message PreKeyWhisperMessage
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PreKeyWhisperMessage.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.preKeyId = 0;
                if (options.bytes === String)
                    object.baseKey = "";
                else {
                    object.baseKey = [];
                    if (options.bytes !== Array)
                        object.baseKey = $util.newBuffer(object.baseKey);
                }
                if (options.bytes === String)
                    object.identityKey = "";
                else {
                    object.identityKey = [];
                    if (options.bytes !== Array)
                        object.identityKey = $util.newBuffer(object.identityKey);
                }
                if (options.bytes === String)
                    object.message = "";
                else {
                    object.message = [];
                    if (options.bytes !== Array)
                        object.message = $util.newBuffer(object.message);
                }
                object.registrationId = 0;
                object.signedPreKeyId = 0;
            }
            if (message.preKeyId != null && message.hasOwnProperty("preKeyId"))
                object.preKeyId = message.preKeyId;
            if (message.baseKey != null && message.hasOwnProperty("baseKey"))
                object.baseKey = options.bytes === String ? $util.base64.encode(message.baseKey, 0, message.baseKey.length) : options.bytes === Array ? Array.prototype.slice.call(message.baseKey) : message.baseKey;
            if (message.identityKey != null && message.hasOwnProperty("identityKey"))
                object.identityKey = options.bytes === String ? $util.base64.encode(message.identityKey, 0, message.identityKey.length) : options.bytes === Array ? Array.prototype.slice.call(message.identityKey) : message.identityKey;
            if (message.message != null && message.hasOwnProperty("message"))
                object.message = options.bytes === String ? $util.base64.encode(message.message, 0, message.message.length) : options.bytes === Array ? Array.prototype.slice.call(message.message) : message.message;
            if (message.registrationId != null && message.hasOwnProperty("registrationId"))
                object.registrationId = message.registrationId;
            if (message.signedPreKeyId != null && message.hasOwnProperty("signedPreKeyId"))
                object.signedPreKeyId = message.signedPreKeyId;
            return object;
        };

        /**
         * Converts this PreKeyWhisperMessage to JSON.
         * @function toJSON
         * @memberof textsecure.PreKeyWhisperMessage
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PreKeyWhisperMessage.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return PreKeyWhisperMessage;
    })();

    textsecure.KeyExchangeMessage = (function() {

        /**
         * Properties of a KeyExchangeMessage.
         * @memberof textsecure
         * @interface IKeyExchangeMessage
         * @property {number|null} [id] KeyExchangeMessage id
         * @property {Uint8Array|null} [baseKey] KeyExchangeMessage baseKey
         * @property {Uint8Array|null} [ephemeralKey] KeyExchangeMessage ephemeralKey
         * @property {Uint8Array|null} [identityKey] KeyExchangeMessage identityKey
         * @property {Uint8Array|null} [baseKeySignature] KeyExchangeMessage baseKeySignature
         */

        /**
         * Constructs a new KeyExchangeMessage.
         * @memberof textsecure
         * @classdesc Represents a KeyExchangeMessage.
         * @implements IKeyExchangeMessage
         * @constructor
         * @param {textsecure.IKeyExchangeMessage=} [properties] Properties to set
         */
        function KeyExchangeMessage(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * KeyExchangeMessage id.
         * @member {number} id
         * @memberof textsecure.KeyExchangeMessage
         * @instance
         */
        KeyExchangeMessage.prototype.id = 0;

        /**
         * KeyExchangeMessage baseKey.
         * @member {Uint8Array} baseKey
         * @memberof textsecure.KeyExchangeMessage
         * @instance
         */
        KeyExchangeMessage.prototype.baseKey = $util.newBuffer([]);

        /**
         * KeyExchangeMessage ephemeralKey.
         * @member {Uint8Array} ephemeralKey
         * @memberof textsecure.KeyExchangeMessage
         * @instance
         */
        KeyExchangeMessage.prototype.ephemeralKey = $util.newBuffer([]);

        /**
         * KeyExchangeMessage identityKey.
         * @member {Uint8Array} identityKey
         * @memberof textsecure.KeyExchangeMessage
         * @instance
         */
        KeyExchangeMessage.prototype.identityKey = $util.newBuffer([]);

        /**
         * KeyExchangeMessage baseKeySignature.
         * @member {Uint8Array} baseKeySignature
         * @memberof textsecure.KeyExchangeMessage
         * @instance
         */
        KeyExchangeMessage.prototype.baseKeySignature = $util.newBuffer([]);

        /**
         * Creates a new KeyExchangeMessage instance using the specified properties.
         * @function create
         * @memberof textsecure.KeyExchangeMessage
         * @static
         * @param {textsecure.IKeyExchangeMessage=} [properties] Properties to set
         * @returns {textsecure.KeyExchangeMessage} KeyExchangeMessage instance
         */
        KeyExchangeMessage.create = function create(properties) {
            return new KeyExchangeMessage(properties);
        };

        /**
         * Encodes the specified KeyExchangeMessage message. Does not implicitly {@link textsecure.KeyExchangeMessage.verify|verify} messages.
         * @function encode
         * @memberof textsecure.KeyExchangeMessage
         * @static
         * @param {textsecure.IKeyExchangeMessage} message KeyExchangeMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        KeyExchangeMessage.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.id);
            if (message.baseKey != null && Object.hasOwnProperty.call(message, "baseKey"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.baseKey);
            if (message.ephemeralKey != null && Object.hasOwnProperty.call(message, "ephemeralKey"))
                writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.ephemeralKey);
            if (message.identityKey != null && Object.hasOwnProperty.call(message, "identityKey"))
                writer.uint32(/* id 4, wireType 2 =*/34).bytes(message.identityKey);
            if (message.baseKeySignature != null && Object.hasOwnProperty.call(message, "baseKeySignature"))
                writer.uint32(/* id 5, wireType 2 =*/42).bytes(message.baseKeySignature);
            return writer;
        };

        /**
         * Encodes the specified KeyExchangeMessage message, length delimited. Does not implicitly {@link textsecure.KeyExchangeMessage.verify|verify} messages.
         * @function encodeDelimited
         * @memberof textsecure.KeyExchangeMessage
         * @static
         * @param {textsecure.IKeyExchangeMessage} message KeyExchangeMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        KeyExchangeMessage.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a KeyExchangeMessage message from the specified reader or buffer.
         * @function decode
         * @memberof textsecure.KeyExchangeMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {textsecure.KeyExchangeMessage} KeyExchangeMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        KeyExchangeMessage.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.textsecure.KeyExchangeMessage();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.uint32();
                    break;
                case 2:
                    message.baseKey = reader.bytes();
                    break;
                case 3:
                    message.ephemeralKey = reader.bytes();
                    break;
                case 4:
                    message.identityKey = reader.bytes();
                    break;
                case 5:
                    message.baseKeySignature = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a KeyExchangeMessage message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof textsecure.KeyExchangeMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {textsecure.KeyExchangeMessage} KeyExchangeMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        KeyExchangeMessage.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a KeyExchangeMessage message.
         * @function verify
         * @memberof textsecure.KeyExchangeMessage
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        KeyExchangeMessage.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isInteger(message.id))
                    return "id: integer expected";
            if (message.baseKey != null && message.hasOwnProperty("baseKey"))
                if (!(message.baseKey && typeof message.baseKey.length === "number" || $util.isString(message.baseKey)))
                    return "baseKey: buffer expected";
            if (message.ephemeralKey != null && message.hasOwnProperty("ephemeralKey"))
                if (!(message.ephemeralKey && typeof message.ephemeralKey.length === "number" || $util.isString(message.ephemeralKey)))
                    return "ephemeralKey: buffer expected";
            if (message.identityKey != null && message.hasOwnProperty("identityKey"))
                if (!(message.identityKey && typeof message.identityKey.length === "number" || $util.isString(message.identityKey)))
                    return "identityKey: buffer expected";
            if (message.baseKeySignature != null && message.hasOwnProperty("baseKeySignature"))
                if (!(message.baseKeySignature && typeof message.baseKeySignature.length === "number" || $util.isString(message.baseKeySignature)))
                    return "baseKeySignature: buffer expected";
            return null;
        };

        /**
         * Creates a KeyExchangeMessage message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof textsecure.KeyExchangeMessage
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {textsecure.KeyExchangeMessage} KeyExchangeMessage
         */
        KeyExchangeMessage.fromObject = function fromObject(object) {
            if (object instanceof $root.textsecure.KeyExchangeMessage)
                return object;
            var message = new $root.textsecure.KeyExchangeMessage();
            if (object.id != null)
                message.id = object.id >>> 0;
            if (object.baseKey != null)
                if (typeof object.baseKey === "string")
                    $util.base64.decode(object.baseKey, message.baseKey = $util.newBuffer($util.base64.length(object.baseKey)), 0);
                else if (object.baseKey.length)
                    message.baseKey = object.baseKey;
            if (object.ephemeralKey != null)
                if (typeof object.ephemeralKey === "string")
                    $util.base64.decode(object.ephemeralKey, message.ephemeralKey = $util.newBuffer($util.base64.length(object.ephemeralKey)), 0);
                else if (object.ephemeralKey.length)
                    message.ephemeralKey = object.ephemeralKey;
            if (object.identityKey != null)
                if (typeof object.identityKey === "string")
                    $util.base64.decode(object.identityKey, message.identityKey = $util.newBuffer($util.base64.length(object.identityKey)), 0);
                else if (object.identityKey.length)
                    message.identityKey = object.identityKey;
            if (object.baseKeySignature != null)
                if (typeof object.baseKeySignature === "string")
                    $util.base64.decode(object.baseKeySignature, message.baseKeySignature = $util.newBuffer($util.base64.length(object.baseKeySignature)), 0);
                else if (object.baseKeySignature.length)
                    message.baseKeySignature = object.baseKeySignature;
            return message;
        };

        /**
         * Creates a plain object from a KeyExchangeMessage message. Also converts values to other types if specified.
         * @function toObject
         * @memberof textsecure.KeyExchangeMessage
         * @static
         * @param {textsecure.KeyExchangeMessage} message KeyExchangeMessage
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        KeyExchangeMessage.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.id = 0;
                if (options.bytes === String)
                    object.baseKey = "";
                else {
                    object.baseKey = [];
                    if (options.bytes !== Array)
                        object.baseKey = $util.newBuffer(object.baseKey);
                }
                if (options.bytes === String)
                    object.ephemeralKey = "";
                else {
                    object.ephemeralKey = [];
                    if (options.bytes !== Array)
                        object.ephemeralKey = $util.newBuffer(object.ephemeralKey);
                }
                if (options.bytes === String)
                    object.identityKey = "";
                else {
                    object.identityKey = [];
                    if (options.bytes !== Array)
                        object.identityKey = $util.newBuffer(object.identityKey);
                }
                if (options.bytes === String)
                    object.baseKeySignature = "";
                else {
                    object.baseKeySignature = [];
                    if (options.bytes !== Array)
                        object.baseKeySignature = $util.newBuffer(object.baseKeySignature);
                }
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.baseKey != null && message.hasOwnProperty("baseKey"))
                object.baseKey = options.bytes === String ? $util.base64.encode(message.baseKey, 0, message.baseKey.length) : options.bytes === Array ? Array.prototype.slice.call(message.baseKey) : message.baseKey;
            if (message.ephemeralKey != null && message.hasOwnProperty("ephemeralKey"))
                object.ephemeralKey = options.bytes === String ? $util.base64.encode(message.ephemeralKey, 0, message.ephemeralKey.length) : options.bytes === Array ? Array.prototype.slice.call(message.ephemeralKey) : message.ephemeralKey;
            if (message.identityKey != null && message.hasOwnProperty("identityKey"))
                object.identityKey = options.bytes === String ? $util.base64.encode(message.identityKey, 0, message.identityKey.length) : options.bytes === Array ? Array.prototype.slice.call(message.identityKey) : message.identityKey;
            if (message.baseKeySignature != null && message.hasOwnProperty("baseKeySignature"))
                object.baseKeySignature = options.bytes === String ? $util.base64.encode(message.baseKeySignature, 0, message.baseKeySignature.length) : options.bytes === Array ? Array.prototype.slice.call(message.baseKeySignature) : message.baseKeySignature;
            return object;
        };

        /**
         * Converts this KeyExchangeMessage to JSON.
         * @function toJSON
         * @memberof textsecure.KeyExchangeMessage
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        KeyExchangeMessage.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return KeyExchangeMessage;
    })();

    return textsecure;
})();

module.exports = $root;
