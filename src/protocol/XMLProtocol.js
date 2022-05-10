const swig = require('swig');
const path = require('path');
const parser = require('fast-xml-parser');
const utils = require('../utils');
const ProtocolTreeNode = require('./ProtocolTreeNode');
const logger = require('../logger');

const attrsPrefix = '@_attrs';

const templates = {};

class XMLProtocol {
  // constructor(tag, attrs, childre = [], data = null) {
  constructor(protocolName, params = {}) {
    const {
      shortId,
      longId,
      type,
      xmlns,
      md5Id,
      name,
      description,
      subject,
      from,
      to,
      code,
      data = null,
    } = params;

    this.protocolName = protocolName;
    this.params = params;
    this.logger = logger;

    this.tag = '';
    this.attrs = {};
    this.children = [];
    this.data = data;
    this.id = 0;

    this.xml = null;
    this.json = null;
    this.node = null;
  }

  toXML() {
    if (this.xml !== null) return this.xml;
    const template = templates[this.protocolName] || swig.compileFile(path.join(__dirname, `./protocols/${this.protocolName}.xml`));
    let id = this.id;

    const params = {
      ...this.params,
      get shortId() {
        id++;
        return utils.generateId(id);
      },
      get longId() {
        id++;
        return `${String(Math.round(Date.now() / 1000))}-${utils.generateId(id)}`;
      },
      get md5Id() {
        return utils.hash(String(Math.random()), 'md5', 'hex').toUpperCase();
      },
      get prevId() {
        return utils.hash(String(Math.random()), 'md5', 'hex').toUpperCase();
      },
    };
    this.id = id;
    try {
      const xml = template(params);
      this.xml = xml;
      return xml;
    } catch (e) {
      this.logger.errror('parse xml template failed:', e.message, e.stack);
      this.xml = '';
      return this.xml;
    }
  }

  toJSON() {
    if (this.json !== null) return this.json;
    const xml = this.toXML();
    try {
      const json = parser.parse(
        xml,
        {
          attributeNamePrefix: '',
          attrNodeName: attrsPrefix,
          ignoreAttributes: false,
          allowBooleanAttributes: true,
          parseAttributeValue: true,
          arrayMode: false,
        },
        true
      );
      this.json = json;
      return json;
    } catch (e) {
      this.logger.error('parse xml to json failed:', e.message, e.stack);
      this.json = {};
      return {};
    }
  }

  toNode(jsonObj) {
    if (this.node !== null) return this.node;
    const json = jsonObj || this.toJSON();
    Object.keys(json).forEach(key => {
      if (key === attrsPrefix) return;
      this.tag = key;
      const child = json[key];
      if (typeof child !== 'object') {
        this.data = child;
      } else {
        this.attrs = child[attrsPrefix] || {};
        Object.keys(child).forEach(childKey => {
          if (childKey === attrsPrefix) return;
          const childItem = child[childKey];
          if (Array.isArray(childItem)) {
            childItem.forEach(subItem => {
              const o = {};
              o[childKey] = subItem;
              this.children.push(new XMLProtocol().toNode(o));
            });
          } else {
            const o = {};
            o[childKey] = childItem;
            this.children.push(new XMLProtocol().toNode(o));
          }
        });
      }
    });
    this.node = new ProtocolTreeNode(this.tag, this.attrs, this.children || [], this.data);
    return this.node;
  }

  toString() {
    this.toNode();
    let out = `<${this.tag}`;
    if (this.attributes) {
      Object.keys(this.attributes).forEach(key => {
        const val = this.attributes[key];
        out += ` ${key}="${val}"`;
      });
    }
    out += '>\n';
    if (this.data) {
      if (this.data instanceof Buffer) {
        out += this.data.toString('utf8');
      } else {
        try {
          out += this.data;
        } catch (e) {
          try {
            out += this.data.toString();
          } catch (err) {
            out += this.data.toString('hex');
          }
        }
      }
      out += `\nHEX3:${Buffer.from(this.data || '').toString('hex')}\n`;
    }
    for (let i = 0; i < this.children.length; i++) {
      const c = this.children[i];
      try {
        out += c.toString();
      } catch (e) {
        console.error(e);
        out += '[ENCODED DATA]\n';
      }
    }
    out += `</${this.tag}>\n`;
    return out;
  }
}

module.exports = XMLProtocol;
