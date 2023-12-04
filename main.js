// Car class
class Car {
    constructor(make, model){
        this.make = make;
        this.model = model;
    }

    drive() {
        console.log("Vroom!!");
    }
}

// Create a car object
const car = new Car('Toyota', 'C-HR');
console.log(car.make);
console.log(car.model);
car.drive();