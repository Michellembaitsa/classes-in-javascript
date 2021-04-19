class KioskCalc {
    constructor(fruit, quantity, price) { //constructors are mandatory in js classes.
        this.fruit = fruit;
        this.quantity = quantity;
        this.price = price;

    }
    getTotalCost() {
        return `I will buy${this.quantity} ${this.fruit} for KES ${this.quantity * this.price}`

    }
}
var kioskCalc1 = new KioskCalc("oranges", 2, 30);
var kioskCalc2 = new KioskCalc("apples", 1, 15);
var kioskCalc3 = new KioskCalc("mangoes", 4, 20); //I can add my items here because I passed a parameter.
console.log(kioskCalc1.getTotalCost());
console.log(kioskCalc2.getTotalCost());
console.log(kioskCalc3.getTotalCost());