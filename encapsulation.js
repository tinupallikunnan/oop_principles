// encapsulation - variable is private, so we have to use SET and GET method to use variables
// class circle
class Circle {
    // Class constructor
    constructor(radius){
        this._radius = radius;
    }

    // Getters
    get radius() {
        return this._radius;
    }

    // Setters
    set radius(radius) {
        this._radius = radius;
    }

    // Methods
    calculateArea() {
        return Math.PI * this._radius ** 2;
    }
}

// Create a circle object
const circle = new Circle(5);
//console.log(circle._radius);
console.log("Radius:", circle.radius);
console.log("Area:", circle.calculateArea());

// Set a new radius using the set method
circle.radius = 7;
console.log("Radius:", circle.radius);
console.log("Area:", circle.calculateArea());



