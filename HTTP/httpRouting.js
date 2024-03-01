const http = require("node:http")

const server = http.createServer((req, res) => {
    
    // res.end(req.url)

    if (req.url == "/") {
        res.writeHead(200, { "Content-Type" :"text/plain"})
        res.end("Home Page")
    }
    else if (req.url == "/about") {
        res.writeHead(200, { "Content-Type" :"text/plain"})
        res.end("About Page")
    }
    else if(req.url == "/api"){
        res.writeHead(200, { "Content-Type" :"application/json"})
        res.end(JSON.stringify({
            name: "A",
            age : 20
        }))
    }
    else {
        res.writeHead(404)
        res.end("Page Not Found")
    }

    
})

server.listen(3000, () => {
    console.log("Server running on port 3000");
})