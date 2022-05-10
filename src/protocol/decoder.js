const zlib = require('zlib');
const tokenDictionary = require('./tokenDictionary');
const ProtocolTreeNode = require('./ProtocolTreeNode');

const logger = require('../logger');

const unzip = async buffer => {
  return new Promise((resolve, reject) => {
    zlib.unzip(buffer, (err, unzipBuffer) => {
      if (err) return reject(err);
      resolve(Buffer.from(unzipBuffer));
    });
  });
};

// eslint-disable-next-line
Buffer.prototype.toArray = function () {
  const arr = [];
  this.forEach(val => {
    arr.push(val);
  });
  return arr;
};

// const shift = data => {
//   const ret = data[0];
//   data = data.slice(1);
// };

class ReadDecoder {
  async getProtocolTreeNode(data) {
    let buffer = typeof data === 'string' ? Buffer.from(data, 'base64') : data;
    if (buffer[0] && tokenDictionary.FLAG_DEFLATE !== 0) {
      logger.info('zlib unzip', buffer.length);
      const unzipBuffer = await unzip(buffer.slice(1));
      buffer = Buffer.concat([Buffer.from([0x00]), unzipBuffer]);
      logger.info('zlib unzip complete', buffer.length);
    }
    if (buffer[0] && tokenDictionary.FLAG_SEGMENTED !== 0) {
      throw new Error('server to client stanza fragmentation not supported');
    }
    buffer = buffer.toArray();
    const node = this.nextTreeInternal(buffer.slice(1));
    return node;
  }

  // 获取 token 字符串，如果 index大于 236，则从第二组字段取 token，否则从第一组取。
  // 如果获取不到 token，则再读取一个字节作为 index，从第二组字典里取 token
  getToken(index, data) {
    let token = tokenDictionary.getToken(index);
    if (!token) {
      index = this.readInt8(data);
      token = tokenDictionary.getToken(index, true);
      if (!token) {
        throw new Error(`Invalid token ${token}`);
      }
    }
    return token;
  }

  // 从第二组字段里获取 token 字符串，参数：n,n2... n2+n*256
  getTokenDouble(n, n2) {
    const pos = n2 + n * 256;
    const token = tokenDictionary.getToken(pos, true);
    if (!token) throw new Error(`Invalid token ${pos}`);
    return token;
  }

  streamStart(data) {
    this.streamStarted = true;
    let tag = data.shift();
    const size = this.readListSize(tag, data);
    tag = data.shift();
    if (tag !== 1) {
      if (tag === 236) {
        tag = data.shift() + 237;
      }
      const token = this.getToken(tag, data);
      throw new Error(`expecting STREAM_START in streamStart, instead got token: ${token}`);
    }
    const attribCount = (size - 2 + (size % 2)) / 2;
    this.readAttributes(attribCount, data);
  }

  readNibble(data) {
    const _byte = this.readInt8(data);
    const ignoreLastNibble = Boolean(_byte & 0x80);
    const size = _byte & 0x7f;
    const nrOfNibbles = size * 2 - (ignoreLastNibble ? 1 : 0);
    const dataArr = this.readArray(size, data);
    let string = '';
    for (let i = 0; i < nrOfNibbles; i++) {
      const __byte = dataArr[Number(Math.floor(i / 2))];
      const _shift = 4 * (1 - (i % 2));
      const dec = (__byte & (15 << _shift)) >> _shift;
      if ([0, 1, 2, 3, 4, 5, 6, 7, 8, 9].includes(dec)) {
        string += String(dec);
      } else if ([10, 11].includes(dec)) {
        string += String.fromCharCode(dec - 10 + 45);
      } else {
        throw new Error(`Bad nibble ${dec}`);
      }
    }
    return string;
  }

  readPacked8(n, data) {
    // n=255
    //   [
    //     5, 22,   2, 86,  70, 151,  74, 252,
    //     2, 50,  54, 77, 252,   3, 110,  97,
    //   111, 76, 255,  5,  22,   1,  98,  82,
    //    19
    // ]
    // size = 5
    let size = this.readInt8(data);
    let remove = 0;
    if ((size & 0x80) !== 0 && n === 251) {
      remove = 1;
    }
    size &= 0x7f;
    const text = Buffer.from(this.readArray(size, data));
    const hexData = text.toString('hex').toUpperCase();
    const dataSize = hexData.length;
    let out = [];
    if (remove === 0) {
      for (let i = 0; i < dataSize; i++) {
        const char = hexData[i];
        const val = Buffer.from(`0${char}`, 'hex')[0];
        if (i === dataSize - 1 && val > 11 && n !== 251) continue;
        out.push(this.unpackByte(n, val));
      }
    } else {
      out = hexData
        .slice(0, -1 * remove)
        .split('')
        .map(chr => {
          return String(chr).charCodeAt(0);
        });
    }
    return out;
  }

  unpackByte(n, n2) {
    if (n === 251) {
      return this.unpackHex(n2);
    }
    if (n === 255) {
      return this.unpackNibble(n2);
    }
    throw new Error(`bad packed type ${n}`);
  }

  unpackHex(n) {
    if (n >= 0 && n < 10) {
      return n + 48;
    }
    if (n >= 10 && n < 16) {
      return 65 + (n - 10);
    }
    throw new Error(`bad hex ${n}`);
  }

  unpackNibble(n) {
    if (n >= 0 && n < 10) {
      return n + 48;
    }
    if (n >= 10 && n < 11) {
      return 45 + (n - 10);
    }
    throw new Error(`bad nibble ${n}`);
  }

  readHeader(data, offset = 0) {
    let ret = 0;
    if (data.length >= 3 + offset) {
      const b0 = data[offset];
      const b1 = data[offset + 1];
      const b2 = data[offset + 2];
      ret = b0 + (b1 << 16) + (b2 << 8);
    }
    return ret;
  }

  // 取第一个字节
  readInt8(data) {
    return data.shift();
  }

  // 2 个字节位运算，左移 8
  readInt16(data) {
    const intTop = data.shift();
    const intBot = data.shift();
    const value = (intTop << 8) + intBot;
    return value || '';
  }

  // 3 个字节位运算，左移 16，8
  readInt20(data) {
    const int1 = data.shift();
    const int2 = data.shift();
    const int3 = data.shift();
    return ((int1 & 0xf) << 16) | (int2 << 8) | int3;
  }

  // 3 个字节位运算，左移 16，8，0
  readInt24(data) {
    const int1 = data.shift();
    const int2 = data.shift();
    const int3 = data.shift();
    const value = (int1 << 16) + (int2 << 8) + (int3 << 0);
    return value;
  }

  // 3个字节位运算，左移 24，16，8
  readInt31(data) {
    data.shift();
    const int1 = data.shift();
    const int2 = data.shift();
    const int3 = data.shift();
    return (int1 << 24) | (int1 << 16) | (int2 << 8) | int3;
  }

  // 读取 list 的长度，参数 token，
  // 0->0, 248-> 下一个字节, 249-> readInt16,取 2 个字节
  readListSize(token, data) {
    let size = 0;
    if (token === 0) {
      size = 0;
    } else if (token === 248) {
      size = this.readInt8(data);
    } else if (token === 249) {
      size = this.readInt16(data);
    } else {
      throw new Error(`invalid list size in readListSize: token ${String(token)}`);
    }
    return size;
  }

  // 获取指定数量的属性，返回 object
  readAttributes(attribCount, data) {
    const attribs = {};
    for (let i = 0; i < Number(attribCount); i++) {
      const key = this.readString(this.readInt8(data), data).toString('utf8');
      const value = this.readString(this.readInt8(data), data).toString('utf8');
      attribs[key] = value;
    }
    return attribs;
  }

  // 读取字符串
  // 2<token<236,直接 getToken，从第一个字典取
  // toekn=0，直接返回空
  // 236，237，238，239，从第二个字典取 token
  // token=250, 返回 jid
  // 251，255，readPacked8
  // 252，readInt8 读取固定长度的字节，返回 buffer
  // 253，readInt20 读取固定长度字节，返回 buffer
  // 254，readInt31 读取固定长度字节，返回 buffer
  readString(token, data) {
    if (token === -1) throw new Error('-1 token in readString');
    if (token > 2 && token < 236) {
      return this.getToken(token, data);
    }
    if (token === 0) return '';
    if ([236, 237, 238, 239].includes(token)) {
      return this.getTokenDouble(token - 236, this.readInt8(data));
    }
    if (token === 250) {
      const user = this.readString(data.shift(), data);
      const server = this.readString(data.shift(), data);
      if (user && server) {
        return `${user}@${server}`;
      }
      if (server) return server;
      throw new Error("readString couldn't reconstruct jid");
    }
    if ([251, 255].includes(token)) {
      return Buffer.from(this.readPacked8(token, data));
      // .map(code => String.fromCharCode(code)));
      // .join('');
      // return "".join(map(chr, this.readPacked8(token, data)))
    }
    if (token === 252) {
      const size8 = this.readInt8(data);
      const buf8 = this.readArray(size8, data);
      // return buf8.map(code => String.fromCharCode(code)).join('');
      return Buffer.from(buf8);
      // return "".join(map(chr, buf8))
    }
    if (token === 253) {
      const size20 = this.readInt20(data);
      const buf20 = this.readArray(size20, data);
      // return buf20.map(code => String.fromCharCode(code)).join('');
      return Buffer.from(buf20);
      // return "".join(map(chr, buf20))
    }
    if (token === 254) {
      const size31 = this.readInt31();
      const buf31 = this.readArray(size31, data);
      // return buf31.map(code => String.fromCharCode(code)).join('');
      return Buffer.from(buf31);
      // return "".join(map(chr, buf20))
    }
    throw new Error(`readString couldn't match token ${String(token)}`);
  }

  // 读取固定长度的字节并转换为数组
  readArray(length, data) {
    const out = [];
    for (let i = 0; i < length; i++) {
      out.push(data.shift());
    }
    return out;
  }

  nextTreeInternal(data) {
    let size = this.readListSize(this.readInt8(data), data);
    let token = this.readInt8(data);
    if (token === 1) token = this.readInt8(data);
    if (token === 2) return '';
    const tag = this.readString(token, data);
    if (size === 0 || !tag) throw new Error('nextTree sees 0 list or null tag');
    const attribCount = (size - 2 + (size % 2)) / 2;
    const attribs = this.readAttributes(attribCount, data);
    if (size % 2 === 1) return new ProtocolTreeNode(tag.toString(), attribs);
    const read2 = this.readInt8(data);
    let nodeData = '';
    let nodeChildren = '';
    if (this.isListTag(read2)) {
      nodeChildren = this.readList(read2, data);
    } else if (read2 === 252) {
      size = this.readInt8(data);
      nodeData = this.readArray(size, data);
    } else if (read2 === 253) {
      size = this.readInt20(data);
      nodeData = this.readArray(size, data);
    } else if (read2 === 254) {
      size = this.readInt31(data);
      nodeData = this.readArray(size, data);
    } else if ([255, 251].includes(read2)) {
      nodeData = this.readPacked8(read2, data);
    } else {
      nodeData = this.readString(read2, data);
    }
    if (nodeData && typeof nodeData !== 'string') {
      nodeData = Buffer.from(nodeData); // .map((code) => String.fromCharCode(code)).join('')
      // nodeData = "".join(map(chr, nodeData))
    }
    return new ProtocolTreeNode(tag.toString(), attribs, nodeChildren, nodeData);
  }

  // 获取 children。返回数组
  readList(token, data) {
    const size = this.readListSize(token, data);
    const listx = [];
    for (let i = 0; i < size; i++) {
      listx.push(this.nextTreeInternal(data));
    }
    return listx;
  }

  // 是否list 标记，248，0，249
  isListTag(b) {
    return [248, 0, 249].includes(b);
  }
}

module.exports = ReadDecoder;
