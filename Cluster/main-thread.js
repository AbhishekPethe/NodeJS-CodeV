const http = require("node:http")
const { Worker } = require("node:worker_threads")


const server = http.createServer((req, res) => {
    if (req.url == "/") {
        res.writeHead(200, { "Content-Type": "text/plain" })
        res.end("Home Page")
    }
    else if (req.url == "/slowpage") {
        
        const worker = new Worker("./worker-thread.js")
        worker.on("message", (j) => {
            res.writeHead(200, { "Content-Type": "text/plain" })
            res.end(`Slow Page ${j}`)
        })
            
        
    }
})

server.listen(8000 , ()=> console.log("server is running on port 8000"))


// A worker thread runs a piece of code as instructed by the parent thread in isolation from the parent and other worker threads. Each worker thread has its own isolated V8 environment, event loop, event queue, etc.