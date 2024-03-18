const fs = require("node:fs")

const readStream = fs.createReadStream(__filename )

readStream.close()

readStream.on("close", () => {
    console.log("Close queue");
   

})

setTimeout(() => {
    console.log("Timer queue");
})

setImmediate(() => {
    console.log("Check queue");
})

process.nextTick(() => {
    console.log("nextTick");
})

Promise.resolve().then(() => {
    console.log("Promise queue");
})

fs.readFile(__filename, () => {
    console.log("Inside I/O");
})

// Close queue callbacks are executed after all other queue callbacks are executed in the given ITERATION of the event loop