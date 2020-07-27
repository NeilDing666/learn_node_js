
const fs = require('fs')
/*
parameter 1: file path
parameter 2: content
parameter 3: callback function
    error
 */

fs.writeFile('./writeFile.txt', 'Hello, this is the fs.write() function.', function (error){
    console.log("write file successful!")
    console.log('this will do even you do not have this file')
    if (error){
        return null
    }
    console.log(error)
})

fs.readFile('./not_exist_file', function (error, data){
    if(error){
        console.log('there is an error when reading the file:\n'+error)
        return null
    }else {
        console.log(data.toString())
    }
})
//Change the sequence of read and write, the output stays the same, why is that happening?