const crypto = require("crypto-js");

// 生成sha1 哈希
function SHA1() {
    console.log(crypto.SHA1("niubi").toString());
  }
  