const wa52 = require('./5.2/');
const wa40 = require('./4.0/');

module.exports = {
  FLAG_SEGMENTED: 0x1,
  FLAG_DEFLATE: 0x2,
  VERSION: '52',
  getDict() {
    if (this.VERSION === '52') {
      return wa52;
    }
    if (this.VERSION === '40') {
      return wa40;
    }
  },
  get dictionary() {
    return this.getDict().dictionary;
  },
  get secondaryDictionary() {
    return this.getDict().secondaryDictionary;
  },
  getToken(index, secondary = false) {
    let dict = this.dictionary;
    if (secondary === false || index < 0xec) {
      return dict[index];
    }
    dict = this.secondaryDictionary;
    const n2 = index % 256;
    const n = Math.floor(index / 256);
    return this.secondaryDictionary[n][n2];
    // if (secondary) {
    //   dict = this.secondaryDictionary;
    // } else if (index > 236 && index < 236 + this.secondaryDictionary.length) {
    //   dict = this.secondaryDictionary;
    //   index -= 237;
    // } else if (index < 0 || index > dict.length - 1) {
    //   return null;
    // }
    // return dict[index];
  },
  getIndex(token) {
    if (this.dictionary.includes(token)) {
      return [this.dictionary.indexOf(token), false];
    }
    for (let i = 0; i < this.secondaryDictionary.length; i++) {
      const dict = this.secondaryDictionary[i];
      const index = dict.indexOf(token);
      if (index !== -1) {
        return [index + i * 256, true];
      }
    }
    if (this.secondaryDictionary.includes(token)) {
      const index = this.secondaryDictionary.indexOf(token);
      // if (index > 236) index -= 236;
      return [index, true];
    }
    return null;
  },
};
