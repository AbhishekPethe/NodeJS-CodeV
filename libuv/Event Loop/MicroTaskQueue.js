// console.log("console log 1");

// process.nextTick(() => {
//     console.log("console log 2");
// })

// console.log("console log 3");

// ans : 1 3 2


// Promise.resolve().then(() => console.log("log Promise queue"))

// process.nextTick(()=> console.log("log nextTick queue"))

// ans : nextTick Promise


// =========================================================================


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
})



Promise.resolve().then(() => console.log("this is Promise.resolve 3"))


// First , the NextTick Queue is ececuted
// then the promise queue
// as we see above , there is nextTick inside promise
// in this case , first the promise queue gets emptied and then
// execution goes back to the nextTick queue
// to check whether any new nextTicks are added or not 
