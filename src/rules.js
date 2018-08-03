import Parser from 'ua-parser-js';

const useragent = new Parser();

const Rule = class Rule {
  constructor(options) {
    if(options.os != null) {
      this.os = options.os
    }
  }

  getResult() {
    if (this.os != null) {
      return useragent.getOS().name === this.os;
    } else {
      return false
    }
  }
}

export const Mac = new Rule({os: "Mac OS"});
