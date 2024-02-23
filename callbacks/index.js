function greet(name) {
    console.log(`Hello ${name}`);
}

function greetme(greetfn) {
    const name = "AB"
    greetfn(name)
}

greetme(greet)