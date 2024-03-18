const fs = require("node:fs")

fs.readFile(__filename, () => {
    console.log("I/O queue");
})

setTimeout(() => {
    console.log("Timer Queue");
}, 0)

process.nextTick(() => console.log("nextTick"))

Promise.resolve().then(() => console.log("Promise"))

setImmediate(() => console.log("Check Queue"))

// ans : nextTick , Promise , Timer , Check , I/O

// Reason why Check is before I/O

// The thing is , when the EventLoop reaches the I/O(readFile) queue , it checks with the I/O polling whether the file reading is
// completed or not . Only when the file is read , the callback enters in I/O queue and gets executed
// means the first time event loop enters the I/O queue , it remains empty
// Thus , event loop goes further and enters the Check Queue , but there is one callback remained in the I/O queue
// That callback gets executed in the next iteration