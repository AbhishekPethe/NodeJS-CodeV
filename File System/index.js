const fs = require("node:fs")

const fileContent = fs.readFileSync("./file.txt", "utf-8") 
//Sync means Synchronous

console.log(fileContent);

console.log("1");

//readfile is asynchronous
fs.readFile("./file.txt", "utf-8", (error, data) => {
    if (error) {
        console.log(error);
    }
    else {
        console.log(data);
    }
})

console.log("2"); //2 is logged before the above data because async

//creating a file (sync)
fs.writeFileSync("./greet.txt", "Creating a file")

//async
// if same file name , then the content is updated , if not , new file is created
// {flag : a} means append , it means the content is added to previous data 
fs.writeFile("./greet.txt", " Async file creation", {flag : "a"}  , (error, data) => {
    if (error) {
        console.log(error);
    }
    else {
        console.log("file written");
    }
})