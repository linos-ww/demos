const http=require('http')
const url=require('url')
const querystring=require('querystring')
//创建一个http 服务器
function create_http_server(){
    http.createServer(function(req,res){
        //-------------req对象----------------------
        console.log('请求方法:',req.method)
        console.log('请求地址:',req.url)
        //解析URL一般使用url模块
        const U=new URL(req.url)
        console.log('URL哈希',U.hash)
        console.log('URL主机',U.host)
        console.log('URL主机名',U.hostname)
        console.log('URL原文',U.href)           //等价于U.toString()
        console.log('URL请求主机',U.origin)       
        console.log('URL账号',U.username)       
        console.log('URL密码',U.password)       
        console.log('URL协议',U.protocol)       
        console.log('URL端口',U.port)       
        console.log('URL查询字符串',U.search)     //对其赋值后,再访问U.href可以得到对应的请求路径
        // 解析URL参数
        querystring.parse('foo=bar&abc=xyz&abc=123')     //{foo:bar,abc:['xyz','123']}

        //-------------req对象----------------------
        res.writeHead(200,{'Content-Type':'text/plain'})
        res.write('hello')
        res.end()
    }).listen(5000)
}


// 创建一个http客户端
function create_client(){
    let options={
        method:'GET',
        hostname:"localhost",
        path:"/",
        port:8888
    }
    let req=http.request(options,function(res){
        console.log('status:',res.statusCode)
        console.log('headers:',JSON.stringify(res.headers))
        res.setEncoding('utf-8')
        res.on('data',function(chunk){
            console.log('data:',chunk)
        })
    })
    req.on('error',function(e){
        console.log('error:',e)
    })
    req.write('-----')
    req.end()
}

// create_http_server()
create_client()