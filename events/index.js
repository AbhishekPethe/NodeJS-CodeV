
const EventEmitter = require("node:events")


a1 = new PizzaShop()

const emitter = new EventEmitter()

emitter.on("order-pizza", (size , toppings) => {
    console.log(`Order of ${size} Pizza with ${toppings} is placed`);
})

emitter.on("order-pizza", (size, toppings) => {
    if (size === "Large") {
        console.log(`Serving complimentary drink`);
        
    }
})


emitter.emit("order-pizza", "Large", "pepperoni")
//             event-name      arguments 


// emit()  -> emit means event is broadcasted/executed in our code
// on()    -> on means listening to the event
// when we use multiple event listeners on same event , it gets executed one after the other