const fs = require("node:fs")

const readableStream1 = fs.createReadStream("./file.txt", {
    encoding: "utf-8"
},
    
    
)

const writeablestream1 = fs.createWriteStream("./file3.txt")

// readableStream1.on("data", (chunk) => {
//     console.log(chunk);
//     writeablestream1.write(chunk)
// })


readableStream1.pipe(writeablestream1)

// pipe returns a destination stream which enables chaining , condition is that the destination stream is readable , duplex or transform  stream



// -----  chaining with pipe method  -----

const zlib = require("node:zlib")
// zlib provides us with a transform stream
const gzip = zlib.createGzip()

readableStream1.pipe(gzip).pipe(fs.WriteStream("./file4.txt.gz")) 