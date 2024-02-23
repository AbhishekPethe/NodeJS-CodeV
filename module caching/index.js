// const ss = require("./superHero")
// console.log(ss.getName());

// ss.setName("Superman")
// console.log(ss.getName());

// const ss1 = require("./superHero")
// console.log(ss1.getName());




const rr = require("./superHero")
batman = new rr("batman")
console.log(batman.getName());

const rr1 = require("./superHero")
superman = new rr1("Superman")
console.log(superman.getName());
superman.setName("Aquaman");
console.log(superman.getName());
