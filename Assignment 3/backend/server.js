const http = require('http')
const fs = require('fs')

const file = fs.readFileSync('flipkart.html')

const myServer = http.createServer((req,res)=>{
    res.statusCode = 200
    res.end(file)
})

myServer.listen(5000,()=>console.log('Server is listening on port 5000'))