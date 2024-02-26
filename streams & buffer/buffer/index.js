// // Buffer is a global object , so no need to import

const buffer = new Buffer.from('Abhishek', 'utf-8')
// the buffer length is set here , if we override the buffer , its length will still be same

console.log(buffer.toJSON()); //binary
// {
//     type: 'Buffer',
//     data: [
//        65,  98, 104, 105,
//       115, 104, 101, 109
//     ]
//   }

console.log(buffer.length); //hexadecimal
// <Buffer 41 62 68 69 73 68 65 6d>

buffer.write("Code") // replaces the first four letters of "Abhishek"

console.log(buffer.toJSON());


// const buffer1 = new Buffer.from("RyomenSukuna", "utf-8")
// console.log(buffer1.toJSON())

// console.log(buffer1);