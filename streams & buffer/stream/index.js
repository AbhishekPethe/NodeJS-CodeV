const fs = require("node:fs")

const readableStream = fs.createReadStream("./file.txt", {
    encoding: "utf-8",
    highWaterMark: 2
    // the default buffer memory is 64kb , we can also specify like above
})

const writeableStream = fs.createWriteStream("./file2.txt");



// streams extends from event emitter class
// event emitter allows us to add listeners to events

//readableStream emits the data event which we can listen


// we are copying content/stream from file to file2

// readableStream.on("data", (chunk) => {
//     console.log(chunk);
//     writeableStream.write(chunk)
// })


// the below code is the alternate way of above func
readableStream.pipe(writeableStream)