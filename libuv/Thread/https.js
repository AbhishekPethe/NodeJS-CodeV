const https = require("node:https")



const start = Date.now()
const MAX_CALLS = 12

for(let i = 0; i < MAX_CALLS; i++){
    https.request("https://google.com", (res) => {
        res.on("data" , () => {})
        res.on("end", () => {
        console.log(`Request time : ${i+1} ` , Date.now() - start);
    })
}).end()
}


// Although both crypto.pbkdf2 and https.request are asynchronous, https.request
// method does not seem to use the thread pool
// https.request does not seem to be affected by the number of CPU cores either


// https.request is a network input/output operation and not a CPU bound operation
// It does not use the thread pool
// Libuv instead delegates the work to the operating system kernel and whenever
// possible, it will poll the kernel and see if the request has completed