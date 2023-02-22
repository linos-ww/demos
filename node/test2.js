const cp=require('child_process')
const sub=cp.fork("./test.js")

// parent process
sub.on('message',function(m){
    console.log('recive message from child:',m)
})



