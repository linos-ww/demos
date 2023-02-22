const request = require("request");

// node http请求发送文件
async function http() {
    let options = {
      // url: url3,
      url: `http://localhost:5000/index`,
      headers: {
        "Content-Type": "multipart/form-data",
        // "Content-Type": "application/json",
      },
      formData: {
        name: "ww",
        data: fs.createReadStream("./VPN.7z"),
      },
    };
    
    return new Promise((resolve, reject) => {
      request.post(options, (err, res, body) => {
        resolve({ res, body });
        console.log(body);
      });
    });
  }
  