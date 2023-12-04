// Define a base class called Shape with a method area() that serves as a placeholder for area calculations.
class Shape {
    area() {
      console.log('Area calculation not implemented.');
    }
  }
  
  // Extend the Shape class to create a subclass called Square.
  class Square extends Shape {
    // Constructor for Square class, taking a 'side' parameter.
    constructor(side) {
      // Call the constructor of the base class (Shape) using super().
      super();
      // Set the side property of the Square instance.
      this.side = side;
    }
  
    // Override the area method in the Square class to calculate the area of a square.
    area() {
      return this.side ** 2;
    }
  }
  
  // Extend the Shape class to create another subclass called Circle.
  class Circle extends Shape {
    // Constructor for Circle class, taking a 'radius' parameter.
    constructor(radius) {
      // Call the constructor of the base class (Shape) using super().
      super();
      // Set the radius property of the Circle instance.
      this.radius = radius;
    }
  
    // Override the area method in the Circle class to calculate the area of a circle.
    area() {
      return Math.PI * this.radius ** 2;
    }
  }

  // Create instances of Square and Circle
const square = new Square(4);
const circle = new Circle(3);

// Calculate and print the area for each shape
console.log("Square area:", square.area());
console.log("Circle area:", circle.area());