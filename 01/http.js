/*
You can use node.js to build a web sever
Node provides a core module called http
http helps you to build web sever
 */

// 1. load http module
const http = require('http')

// 2. use http.createSever() to create a sever
//    return a sever instance
let server = http.createServer()

// 3. server provides service
//    send request
//    receive request
//    deal with request
//    send response


// register request event
// when request, then callback
server.on('request', function (){
    console.log('Request have received!')
})

// 4. listen port, start severe
server.listen('3000', function (){
    console.log('Server start! http://127.0.0.1:3000')
})

// use control C (^c) to close server