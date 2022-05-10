const WriteEncoder = require('./encoder');
const logger = require('../logger');

class ProtocolTreeNode {
  constructor(tag, attributes = null, children = null, data = null) {
    this.tag = tag;
    this.attributes = attributes || {};
    this.children = children || [];
    this.data = data;
    Object.keys(this.attributes).forEach(key => {
      if (this.attributes[key] === undefined || this.attributes[key] === null) {
        delete this.attributes[key];
      }
    });
    this.children = this.children.map(child => {
      return new ProtocolTreeNode(child.tag, child.attributes, child.children, child.data);
    });
  }

  toBuffer() {
    try {
      const bytes = new WriteEncoder().protocolTreeNodeToBytes(this);
      // console.log('bytes', this.tag, this.attributes, Buffer.from(bytes).toString('hex'));
      return Buffer.from(bytes);
    } catch (e) {
      logger.info(`Node 序列化 buffer 失败${e.message}`);
      logger.info(`Node 序列化 buffer 失败${e.stack}`);
    }
  }

  toString() {
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

  toJSON() {
    const json = {
      tag: this.tag,
      props: this.attributes,
      children: [],
    };
    Object.keys(this.attributes).forEach(key => {
      let value = this.attributes[key];
      if (value instanceof Buffer) {
        value = value.toString('utf8');
        this.attributes[key] = value;
      }
    });
    if (this.data !== null) {
      json.data = this.data;
      // if (json.data instanceof Buffer) {
      //   json.data = json.data.toString('utf8');
      // }
    }
    for (let i = 0; i < this.children.length; i++) {
      const c = this.children[i];
      try {
        json.children.push(c.toJSON());
      } catch (e) {
        console.error(e);
        json.children.push('[ENCODED DATA]');
      }
    }
    return json;
  }

  toSimpleJSON() {
    const json = {};
    json[this.tag] = {};
    Object.keys(this.attributes).forEach(key => {
      let value = this.attributes[key];
      if (value instanceof Buffer) {
        value = value.toString('utf8');
      }
      json[this.tag][key] = value;
    });
    try {
      for (let i = 0; i < this.children.length; i++) {
        const c = this.children[i].toSimpleJSON();
        if (!c) continue;
        let tag = Object.keys(c)[0];
        const child = c[tag];
        if (typeof this.attributes[tag] !== 'undefined') {
          tag = `${tag}_entity`;
        }
        if (json[this.tag][tag]) {
          if (Array.isArray(json[this.tag][tag])) {
            json[this.tag][tag].push(child);
          } else {
            json[this.tag][tag] = [json[this.tag][tag], child];
          }
        } else {
          json[this.tag][tag] = child;
        }
      }
    } catch (e) {
      console.error(e);
    }
    if (this.data !== null && typeof this.data !== 'undefined') {
      json[this.tag].entity_value = this.data;
      if (json[this.tag].entity_value instanceof Buffer) {
        json[this.tag].entity_value = json[this.tag].entity_value.toString('utf8');
      }
    }
    return json || {};
  }

  setData(data) {
    this.data = data;
  }

  getData() {
    return this.data;
  }

  getChild(identifier) {
    if (typeof identifier === 'number') {
      if (this.children.length > identifier) return this.children[identifier];
      return null;
    }
    for (let i = 0; i < this.children.length; i++) {
      const c = this.children[i];
      if (c.tag === identifier) return c;
    }
    return null;
  }

  addChild(childNode) {
    this.children.push(childNode);
  }

  addChildren(children) {
    children.forEach(child => {
      this.addChild(child);
    });
  }

  hasChildren() {
    return this.children.length > 0;
  }

  getAllChildren(tag = null) {
    if (!tag) return this.children;
    return this.children.filter(child => child.tag === tag);
  }

  getAttributeValue(key) {
    return this.attributes[key];
  }

  getAttr(key) {
    return this.getAttributeValue(key);
  }

  setAttr(key, value) {
    this.setAttribute(key, value);
  }

  removeAttr(key) {
    delete this.attributes[key];
  }

  removeAttribute(key) {
    delete this.attributes[key];
  }

  setAttribute(key, value) {
    this.attributes[key] = value;
  }
}
module.exports = ProtocolTreeNode;
