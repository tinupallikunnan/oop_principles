// Define a class named Animal
class Animal {
    // Constructor for Animal class, takes 'name' as a parameter
    constructor(name) {
      // Initialize the 'name' property for the instance with the provided parameter
      this.name = name;
    }
  
    // Method for making a generic animal sound
    speak() {
      // Log a message indicating that the animal makes a sound
      console.log(`${this.name} makes a sound.`);
    }
  }
  
  // Define a class named Dog that extends Animal
  class Dog extends Animal {
    // Override the speak method in the Dog class
    speak() {
      // Log a message indicating that the dog barks
      console.log(`${this.name} barks.`);
    }
  }

  // Create a new instance of the Dog class with the name 'Buddy'
const myDog = new Dog('Buddy');

// Call the speak method on the 'myDog' instance
// This will output a message indicating that 'Buddy' barks
myDog.speak(); // Output: Buddy barks.
