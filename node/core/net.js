const net = require("net");

// 开启一个简单的 TCP服务器
function start_server() {
  net
    .createServer(function (connection) {
    
      // 收到数据监听
      connection.on("data", (data) => {
        console.log("接受到数据:", data.toString());
        connection.write("HI");
      });

      // 异常监听
      connection.on("error", () => {
        console.log("服务器发生错误:",e);
      });

      // 关闭监听
      connection.on("close", (d) => {
        console.log("S:服务器关闭");
      });
    })
    .listen(9999, "127.0.0.1");
}

// 建立一个TCP客户端
function start_client(){
  let client=new net.Socket()
  client.setEncoding('utf-8')
  // 
  client.connect('9999',"localhost",function(connection){
    console.log('connected to server')
    client.write('client:------')
  })
  // 
  client.on('data',function(data){
    console.log('data:',data)
  })
  // 
  client.on('close',function(){
    console.log('connection is closed')
  })
}

start_server()
start_client()

