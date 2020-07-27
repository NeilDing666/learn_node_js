/*
Explorer does not have the ability to read or write file
But Node.js has
fs stands for file-system
fs model provides all API that file operating needs
fs.readFile is used for reading file
 */
// 1. load core module by using require
let fs = require('fs')
/* 2. read file
    parameter 1 is the file path
    parameter 2 is the callback function:
        error
            if failed, error is failed object
            if successful, error is null
        data
            if successful, data is the file data
            if failed, data is null
        In other words:
            success:
                data: file data
                error: null
            fail:
                data: undefined
                error: error object
 */
fs.readFile('./hello.txt',function(error, data){
    console.log(data) //<Buffer 68 65 6c 6c 6f 20 6e 6f 64 65 2e 6a 73>
    // It is because Binary data was transformed into Hexadecimal data
    console.log(data.toString()) //hello node.js
    // use toString() to transform it into String
})

