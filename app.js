const http = require('http')
const {readFileSync, writeFileSync} = require('fs')

const server = http.createServer((request,response) =>{
    if(request.url === '/'){
    response.writeHead(200,{'content-type': 'text/html'})
    const read = readFileSync('./index.html','utf-8')
    response.end(read)
    return
    }
    else if(request.url === '/about'){
        response.write("welcome to aboutpage")
    response.end()
    }
    response.writeHead(200,{'content-type':'text/plain'})
    response.write('<h1>no such page</h1>')
    response.end()

})

server.listen(5000,()=>{
    console.log("server is running at port 5000")
})
