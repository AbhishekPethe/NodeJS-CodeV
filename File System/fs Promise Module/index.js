const fs = require("node:fs/promises")


//1
// console.log("first");

// fs.readFile("../file.txt", "utf-8")
//     .then((data) => console.log(data))
//     .catch((error) => console.log(error)
// )

// console.log("second");



//2
async function readfile() {
    try {
        const data = await fs.readFile("../file.txt", "utf-8")
        console.log(data);
    }
    catch (error) {
        console.log(error);
    }
}

readfile()