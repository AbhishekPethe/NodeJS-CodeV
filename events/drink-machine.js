class DrinkMachine{
    serveDrink(size) {
        if (size.toLowerCase() === "large") {
            console.log("Serving Complimentary Drink");
        }
    }
}

module.exports = DrinkMachine