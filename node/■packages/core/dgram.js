const dgram=require('dgram')
// udp服务端
function create_server(){
    let server=dgram.createSocket('udp4')
    server.on('message',function(msg,rinfo){
        console.log('msg--:',msg)
        console.log('rinfo--:',rinfo)        
    })
    server.bind(3000)
}

// udp客户端
function create_client(){
    let client=dgram.createSocket('udp4')
    
    process.stdin.resume()
    process.stdin.on('data',function(data){
        client.send(data,0,data.length,3000,"localhost",function(err,bytes){
            if(err)console.log('err:',err)
            else console.log('success')
        })
    })
}

create_server()
create_client()
