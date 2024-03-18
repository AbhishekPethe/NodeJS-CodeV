const fs = require("node:fs")

setTimeout(() => {
    console.log("Timer queue");
   
} , 0)

fs.readFile(__filename, () => {
    console.log("I/O queue");
   
})


process.nextTick(() => console.log("nextTick"))
Promise.resolve().then(() => console.log("Promise"))

// ans : nextTick , Promise , I/O queue
 
// with setTimeout : nextTick , Promise , Timer , I/O queue

