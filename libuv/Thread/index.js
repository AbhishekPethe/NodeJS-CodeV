const fs = require("node:fs")
const crypto = require("node:crypto")

// 1
// console.log("First");

// fs.readFile("./file.txt", "utf-8" , (error , data) => {
//     if (error) {
//         console.log(error);
//     }
//     else {
//         console.log(data);
//     }
// })

// console.log("Second");


// 2
// Every method in node.js that has the "sync" suffix always runs on the main thread  and is blocking

// const time = Date.now()

// crypto.pbkdf2Sync("password", "salt", 100000, 512, "sha512")
// crypto.pbkdf2Sync("password" , "salt" , 100000 , 512 , "sha512")
// crypto.pbkdf2Sync("password" , "salt" , 100000 , 512 , "sha512")


// console.log("Hash : " , Date.now() - time);


// 3

// A few async methods like fs.readFile and crypto.pbkdf2 run on a separate thread
// in libuv's thread pool. They do run synchronously in their own thread but as far as
// the main thread is concerned, it appears as if the method is running
// asynchronously

// const MAX_CALLS = 3
// const time = Date.now()
// for (let i = 0; i < MAX_CALLS ;  i++){
//     crypto.pbkdf2("password", "salt", 100000, 512, "sha512", () => {
//         console.log(`Hash : ${i + 1} , ` , Date.now() - time );
//     })
// }


// 4
// if we increase the max calls to 5 , the fifth task takes more time than the rest
// by this , we can conclude that the default thread pool has 4 threads
// we can increase the threads by following method



process.env.UV_THREADPOOL_SIZE = 5;
const MAX_CALLS = 6

const time = Date.now()
for (let i = 0; i < MAX_CALLS ;  i++){
    crypto.pbkdf2("password", "salt", 10000, 512, "sha512", () => {
        console.log(`Hash : ${i + 1} , ` , Date.now() - time );
    })
}

// By increasing the thread pool size, we are able to improve the total time taken to
// run multiple calls of an asynchronous method like pbkdf2

