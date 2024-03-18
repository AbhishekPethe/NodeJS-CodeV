// 1

/*
const fs = require("node:fs")

fs.readFile(__filename, () => {
    console.log("I/O queue");
    setImmediate(() => console.log("Check Queue inside I/O"))
})

setTimeout(() => {
    console.log("Timer Queue");
}, 0)

process.nextTick(() => console.log("nextTick"))

Promise.resolve().then(() => console.log("Promise"))

setImmediate(() => console.log("Check Queue"))
*/

// ans : nextTick --> Promise --> Timer --> I/O(empty rn ) --> I/O polling(CB goes to I/O) --> Check --> CLOSE...
// 2nd Iteration : nextTick(empty) -->  Promise(empty) --> Timer(empty) --> I/O(CB executed and one CB goes to Check) --> I/O polling() --> Check(CB executed) --> CLOSE...

// =============================================================================================

//2

/*
const fs = require("node:fs")

fs.readFile(__filename, () => {
    console.log("I/O queue");
    setImmediate(() => console.log("Check Queue inside I/O"))
    process.nextTick(() => console.log("nextTick inside I/O"))
    Promise.resolve().then(() => console.log("Promise inside I/O"))
    

})

setTimeout(() => {
    console.log("Timer Queue");
}, 0)

process.nextTick(() => console.log("nextTick"))

Promise.resolve().then(() => console.log("Promise"))

setImmediate(() => console.log("Check Queue"))
*/

// In this example , during 2nd iteration when all the CB's is in the I/O queue
// if the CB is one of the Microtask queues, then the event loop goes back to the Microtask queue, execute those first and then to the Check Queue


// ================================================================================

// 3
/*

setImmediate(() => console.log("check queue 1"))

setImmediate(()=> {
    console.log("check queue 2");
    process.nextTick(() => console.log("nextTick inside check queue"))
    Promise.resolve().then(()=> console.log("Promise inside check queue"))
})

setImmediate(() => console.log("check queue 3"))

*/ 

// After control goes to the Event Loop , there are 3 CB's inside the Check queue.
// 1st CB executed ->
// 2nd CB executed , event loop goes to Microtask queue and those CB's are executed
// 3rd CB executed