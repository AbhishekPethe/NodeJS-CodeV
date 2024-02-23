const PizzaShop = require("./pizza-shop")
const DrinkMachine = require("./drink-machine")



const EventEmitter = require("node:events")

const pizzashop = new PizzaShop()
const drinkMachine = new DrinkMachine()

pizzashop.on("order", (size , toppings) => {
    console.log(`order received ! Baking a ${size} pizza with ${toppings} `);
    drinkMachine.serveDrink(size)
})

pizzashop.order("Large", "cheese")

pizzashop.displayOrderNumber()