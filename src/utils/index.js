const { v4 } = require('uuid');
const { SocksProxyAgent } = require('socks-proxy-agent');
const tunnel = require('tunnel');

const uuidv4 = v4;
const crypto = require('crypto');
const libsignal = require('../lib/libsignal');

module.exports = {
  KEY_SIZE: 32,
  fillZero(str, len) {
    if (len && str.length < len) {
      str = new Array(len - str.length + 1).join('0') + str;
    }
    return str;
  },
  getHttpsProxyAgent(proxy) {
    const proxyConfig = {
      host: proxy.host,
      port: proxy.port,
    };
    // http 代理
    if (proxy.type === 'http') {
      if (proxy.userId) {
        proxyConfig.proxyAuth = `${proxy.userId}:${proxy.password}`;
      }
      const agent = tunnel.httpsOverHttp({
        proxy: proxyConfig,
      });
      return agent;
    }
    // socks5 代理
    if (proxy.userId) {
      proxyConfig.userId = proxy.userId;
      proxyConfig.password = proxy.password;
    }
    const agent = new SocksProxyAgent(proxyConfig);
    return agent;
  },
  async sleep(t) {
    return new Promise(resolve => {
      setTimeout(resolve, t);
    });
  },
  toString(thing) {
    if (typeof thing === 'string') return thing;
    return thing.toString('base64');
  },
  toBuffer(plaintext) {
    return typeof plaintext === 'string'
      ? Buffer.from(plaintext, 'base64')
      : Buffer.from(plaintext);
  },
  normalize(number) {
    if (String(number).indexOf('@') !== -1) return number;
    if (String(number).indexOf('-') !== -1) return `${number}@g.us`;
    return `${String(number)}@s.whatsapp.net`;
  },
  generateHeader(num, len = 6) {
    let str = Number(num).toString(16);
    str = new Array(len - str.length + 1).join('0') + str;
    return Buffer.from(str, 'hex');
  },
  generateId(num = 0) {
    let str = Number(num).toString(16);
    if (str.length % 2 === 1) str = `0${str}`;
    return str;
  },
  generateUUID() {
    return uuidv4();
  },
  urandom(len) {
    return crypto.randomBytes(len);
  },
  generateIdentity() {
    return this.urandom(20);
  },
  generateSenderKey() {
    return this.urandom(32);
  },
  generateSenderKeyId() {
    return Math.floor(Math.random() * 2147483647);
  },
  generatePhoneId() {
    return this.generateUUID();
  },
  generateDeviceId() {
    return Buffer.from(this.generateUUID().replace(/-/g, ''), 'hex');
  },
  generateKeyPair() {
    const keyPair = libsignal.curve.generateKeyPair();
    keyPair.pubKey = Buffer.from(keyPair.pubKey);
    keyPair.privKey = Buffer.from(keyPair.privKey);
    return {
      public: keyPair.pubKey.slice(keyPair.pubKey.length - this.KEY_SIZE),
      private: keyPair.privKey.slice(keyPair.privKey.length - this.KEY_SIZE),
    };
  },
  generateSenderSigningKey() {
    return this.generateKeyPair();
  },
  hash(message, type = 'md5', encode = 'base64') {
    // crypto.createHash('sha256').update(m).digest('base64')
    return crypto
      .createHash(type)
      .update(message)
      .digest(encode);
  },
  hmacHash(key, message, type = 'sha256', encode = 'base64') {
    const hmac = crypto.createHmac(type, key);
    hmac.update(message);
    return hmac.digest(encode); // kXogg18q...
  },
  bufferToArrayBuffer(buffer) {
    if (!buffer) buffer = Buffer.alloc(0);
    const arrayBuffer = new ArrayBuffer(buffer.length);
    const uint8Array = new Uint8Array(arrayBuffer);
    buffer.forEach((val, i) => {
      uint8Array[i] = val;
    });
    return arrayBuffer;
  },
};
