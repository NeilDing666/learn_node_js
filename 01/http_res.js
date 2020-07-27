const http = require('http')

const server = http.createServer()


/*
request object: can acquire request information from user, e.g. request url
response object: send message to user
 */
server.on('request', function (request, response){
    console.log('Request have received, the path is: ' + request.url)
    console.log(request)
    //response.write() can send message to user
    //you can use response.write() many times but must use response.end() to end the response, otherwise the user will keep waiting.
    response.write('Your request have received, your request url is: ' + request.url)
    response.write('This is the end of response.')
    response.end()
})

server.listen('3000', function (){
    console.log('Start server on http://127.0.0.1:3000')
})

//Question: How to response differently based on different request url?