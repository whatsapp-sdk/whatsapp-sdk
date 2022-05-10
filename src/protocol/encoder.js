const tokenDictionary = require('../../whatsapp/common/tokenDictionary');

class WriteEncoder {
  protocolTreeNodeToBytes(node) {
    const outBytes = [0];
    this.writeInternal(node, outBytes);
    return outBytes;
  }

  // 0 248 10
  writeInternal(node, data) {
    let x =
      1 +
      (node.attributes !== null && typeof node.attributes === 'object'
        ? Object.keys(node.attributes).length * 2
        : 0);
    if (node.hasChildren()) {
      x += 1;
    } else if (node.data !== null) {
      x += 1;
    }
    // x += node.hasChildren() ? 1 : 0;
    // x += node.data !== null ? 1 : 0;

    // console.log('x', x)
    this.writeListStart(x, data);

    this.writeString(node.tag, data);
    this.writeAttributes(node.attributes, data);

    if (node.data !== null) {
      this.writeBytes(Buffer.from(node.data), data);
    }

    if (node.hasChildren()) {
      this.writeListStart(node.children.length, data);
      for (let i = 0; i < node.children.length; i++) {
        const child = node.children[i];
        // console.log(child, data, 111);
        this.writeInternal(child, data);
      }
    }
  }

  writeAttributes(attributes, data) {
    // console.log('attributes', attributes)
    if (attributes !== null) {
      Object.keys(attributes).forEach(key => {
        const value = attributes[key];
        this.writeString(key, data);
        this.writeString(value, data, true);
      });
    }
  }

  writeBytes(bytes_, data, packed = false) {
    // console.log('bytes_', bytes_)
    const bytes__ = [];
    for (let i = 0; i < bytes_.length; i++) {
      const b = bytes_[i];
      if (typeof b === 'number') {
        bytes__.push(b);
      } else {
        bytes__.push(String(b).charCodeAt(0));
      }
    }
    // console.log('bytes__', bytes__)
    const size = bytes__.length;
    let toWrite = bytes__;
    if (size >= 0x100000) {
      data.push(254);
      this.writeInt31(size, data);
    } else if (size >= 0x100) {
      data.push(253);
      this.writeInt20(size, data);
    } else {
      let r = null;
      if (packed) {
        if (size < 128) {
          r = this.tryPackAndWriteHeader(255, bytes__, data);
          if (r === null) {
            r = this.tryPackAndWriteHeader(251, bytes__, data);
          }
        }
      }
      if (r === null) {
        data.push(252);
        this.writeInt8(size, data);
      } else {
        toWrite = r;
      }
    }
    if (toWrite && toWrite.length) {
      while (toWrite.length) {
        // console.log(toWrite[0])
        data.push(toWrite.shift());
      }
    }
  }

  writeInt8(v, data) {
    data.push(v & 0xff);
  }

  writeInt16(v, data) {
    data.push((v & 0xff00) >> 8);
    data.push((v & 0xff) >> 0);
  }

  writeInt20(v, data) {
    data.push((0xf0000 & v) >> 16);
    data.push((0xff00 & v) >> 8);
    data.push((v & 0xff) >> 0);
  }

  writeInt24(v, data) {
    data.push((v & 0xff0000) >> 16);
    data.push((v & 0xff00) >> 8);
    data.push((v & 0xff) >> 0);
  }

  writeInt31(v, data) {
    data.push((0x7f000000 & v) >> 24);
    data.push((0xff0000 & v) >> 16);
    data.push((0xff00 & v) >> 8);
    data.push((v & 0xff) >> 0);
  }

  writeListStart(i, data) {
    if (i === 0) {
      data.push(0);
    } else if (i < 256) {
      data.push(248);
      this.writeInt8(i, data);
    } else {
      data.push(249);
      this.writeInt16(i, data);
    }
  }

  writeToken(token, data) {
    if (token <= 255 && token >= 0) {
      data.push(token);
    } else {
      throw new Error(`Invalid token: ${token}`);
    }
  }

  writeString(tag, data, packed = false) {
    const tok = tokenDictionary.getIndex(tag);
    if (tok) {
      const [index, secondary] = tok;
      if (!secondary) {
        this.writeToken(index, data);
      } else {
        let double_byte_token;
        const quotient = Math.floor(index / 256);
        if (quotient === 0) {
          double_byte_token = 236;
        } else if (quotient === 1) {
          double_byte_token = 237;
        } else if (quotient === 2) {
          double_byte_token = 238;
        } else if (quotient === 3) {
          double_byte_token = 239;
        } else {
          throw new Error('Double byte dictionary token out of range');
        }
        this.writeToken(double_byte_token, data);
        this.writeToken(index % 256, data);
      }
    } else {
      const atCode = '@'.charCodeAt(0);
      try {
        const atIndex = Buffer.from(tag).indexOf(atCode);
        if (atIndex < 1) {
          throw new Error('atIndex < 1');
        } else {
          const server = Buffer.from(tag)
            .slice(atIndex + 1)
            .toString();
          const user = Buffer.from(tag)
            .slice(0, atIndex)
            .toString();
          this.writeJid(user, server, data);
        }
      } catch (e) {
        this.writeBytes(this.encodeString(tag), data, packed);
      }
    }
  }

  encodeString(string) {
    const res = [];
    Buffer.from(string).forEach(char => {
      res.push(char);
    });
    return res;
  }

  writeJid(user, server, data) {
    data.push(250);
    if (user !== null) {
      this.writeString(user, data, true);
    } else {
      this.writeToken(0, data);
    }
    this.writeString(server, data);
  }

  // 255，【51】
  tryPackAndWriteHeader(v, headerData, data) {
    const size = headerData.length;
    // size = 1
    if (size >= 128) return null;
    let arr = new Array(Math.floor((size + 1) / 2)).fill(0);
    // console.log('arr', arr)
    for (let i = 0; i < size; i++) {
      const packByte = this.packByte(v, headerData[i]);
      if (packByte === -1) {
        arr = [];
        break;
      }
      const n2 = Math.floor(i / 2);
      arr[n2] = arr[n2] | (packByte << (4 * (1 - (i % 2))));
    }
    // console.log('arr', arr)
    if (arr.length > 0) {
      if (size % 2 === 1) {
        arr[arr.length - 1] = arr[arr.length - 1] | 15; // 0xf
      }
      data.push(v);
      this.writeInt8((size % 2 << 7) | arr.length, data);
      return arr;
    }
    return null;
  }

  packByte(v, n2) {
    if (v === 251) {
      return this.packHex(n2);
    }
    if (v === 255) {
      return this.packNibble(n2);
    }
    return -1;
  }

  packHex(n) {
    if (n >= 48 && n < 58) {
      return n - 48;
    }
    if (n >= 65 && n < 71) {
      return 10 + (n - 65);
    }
    return -1;
  }

  packNibble(n) {
    if (n >= 45 && n < 46) {
      return 10 + (n - 45);
    }
    if (n >= 48 && n < 58) {
      return n - 48;
    }
    return -1;
  }
}

module.exports = WriteEncoder;
