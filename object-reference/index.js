const obj1 = {
    name : "Bruce"
}

let obj2 = obj1
console.log(obj1);

obj2.name = "Clark"  //reference

// literal defination , the reference is broken
// obj2 = {
//     name : "Clark"
// }

console.log(obj1 , obj2);