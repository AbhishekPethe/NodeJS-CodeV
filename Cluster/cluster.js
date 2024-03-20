const http = require("node:http")

// With Cluster

const cluster = require("node:cluster")
const OS = require("node:os")



if (cluster.isMaster) {
    console.log(`Master process ${process.pid} is running`);
    cluster.schedulingPolicy = cluster.SCHED_RR
    cluster.fork()
    cluster.fork()
    

}
else {
    console.log(`Worker ${process.pid} started`);
    const server = http.createServer((req, res) => {
        if (req.url == "/") {
            res.writeHead(200, { "Content-Type": "text/plain" })
            res.end("Home Page")
        }
        else if (req.url == "/slowpage") {
            for (let i = 0; i < 9000000000; i++){ } //simulates cpu work
            res.writeHead(200, { "Content-Type": "text/plain" })
            res.end("Slow Pagee")
        }
    })
    
    server.listen(8000 , ()=> console.log("server is running on port 8000"))
}

