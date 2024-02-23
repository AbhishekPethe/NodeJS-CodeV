const EventEmitter = require("node:events")

class PizzaShop extends EventEmitter{
    constructor() {
        super()
        this.orderNumber = 0
    }
    order(size , toppings) {
        this.orderNumber++
        this.emit("order" , size , toppings)
    }
    displayOrderNumber() {
        console.log(`Order Number : ${this.orderNumber}`);
        
    }
}

if (typeof module === 'object') {
    module.exports = PizzaShop;
}


// here , we can see that class pizza shop has extended the event emitter class 
// doing so , now our class can emit their own custom event 
