const http = require("node:http")
const fs = require("node:fs")

// http also extends event emitter class
// below func accepts a callback , having request and response arguments
// when request reaches the server , the callback func is executed
// request argument contains information about the incoming request
// response argument is a server response that needs to be send out to the client

const server = http.createServer((req, res) => {
  
    // 1 //plain text response
    // // res.writeHead(200, { content: "text/plain" })
    // // res.end("Hello World !")

    // 2 //JSON response
    // const superHero = {
    //     firstName: "Bruce",
    //     lastName: "Wayne",
    // }
    // res.writeHead(200, { "Content-Type": "application/json" });
    // res.end(JSON.stringify(superHero));
    // console.log(req);

    // 3 //html response
    // res.writeHead(200 , {"Content-Type" : "text/html" })
    // res.end("<h1>Hello World !</h1>")
   
    // 4 //html file
    // res.writeHead(200, { "Content-Type": "text/html" })
    // const html = fs.readFileSync("./index.html", "utf-8")
    // res.end(html)

    // 5 //above but with streams for performance boost incase the file-content is too much
    // res.writeHead(200, { "Content-Type": "text/html" })
    // fs.createReadStream("./index.html").pipe(res)

    //6 //dynamic html template
    res.writeHead(200, { "Content-Type": "text/html" })
    const name = "Sukuna"
    let html = fs.readFileSync("./index.html" , "utf-8")
    html = html.replace("{{name}}", name)
    res.end(req.url)
    
       
})

server.listen(3000, () => {
    console.log("Server running on port 3000");
}) //nodeJS runs on 3000
