const { log } = require("node:console");
const path = require("node:path")

console.log(__filename);
console.log(__dirname);

console.log(path.basename(__filename)); //index.js
console.log(path.basename(__dirname));  //path module

console.log(path.extname(__filename));  //.js

console.log(path.parse(__filename));
// {
//     root: 'C:\\',
//     dir: 'C:\\Users\\ASUS\\Documents\\codevolution node\\path module',
//     base: 'index.js',
//     ext: '.js',
//     name: 'index'
//   }

console.log(path.isAbsolute(__filename));

// console.log(path.join("folder1", "folder2", "index.html"));
// console.log(path.join("/folder1", "folder2", "index.html"));
// console.log(path.join("/folder1", "//folder2", "../index.html"));
// console.log(path.join(__dirname , "data.json"));


console.log(path.resolve("folder1", "folder2", "index.html"));
console.log(path.resolve("/folder1", "folder2", "index.html"));
console.log(path.resolve("/folder1", "//folder2", "../index.html"));
console.log(path.resolve(__dirname , "data.json"));