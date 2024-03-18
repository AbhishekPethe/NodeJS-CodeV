setTimeout(() => console.log("SetTimeout 1"), 1000)
setTimeout(() => {
    console.log("SetTimeout 2")
    process.nextTick(() => console.log("this is process.nextTick inside setTimeout"))
} , 500)
setTimeout(() => console.log("SetTimeout 3"), 0)





process.nextTick(() => console.log("this is process.nextTick 1"))

process.nextTick(() => {
    console. log("this is process.nextTick 2");
    process.nextTick(() =>console.log("this is the inner next tick inside next tick"))
})

process.nextTick(() => console.log("this is process.nextTick 3"));

Promise.resolve().then(() => console.log("this is Promise. resolve 1"));

Promise.resolve().then(() => {
    console.log("this is Promise. resolve 2")
    process.nextTick(() => console.log("this is the inner next tick inside Promise then block"))
    // setTimeout(()=> console.log("SetTimeout 300") , 0)

    
})



Promise.resolve().then(() => console.log("this is Promise.resolve 3"))

// Same case as Microtask queue
// first nextTick , then Promise
// then Timer Queue
// as we see in 2nd SetTimeout
// there is nextTick callback
// but this time , rather than continuing the execution in timer queue
// event loop interrupts and goes back to microtask queue to execute the nextTick callback
// then comes back to the timer queue

// Basically means Callbacks in Microtask queue is executed in between the callbacks of Timer queue
// After every callback execution in timer queue , the event loop goes back to the  Microtask queue

// Timer queue is executed in FIFO order.