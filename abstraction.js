// Abstract class representing a generic bank account
class BankAccount {
    // Constructor with balance initialisation and abstract instance check
    constructor(balance) {
      // Check if an attempt is made to instantiate the abstract class directly
      if (this.constructor === BankAccount) {
        throw new TypeError("Cannot construct Abstract instances directly.");
      }
  
      // Initialise the balance property
      this.balance = balance;
    }
  
    // Abstract method for deposit
    deposit(amount) {
      // Throw an error if the abstract method is called directly from a child class
      throw new TypeError("Do not call abstract method deposit from child.");
    }
  
    // Abstract method for withdrawal
    withdraw(amount) {
      // Throw an error if the abstract method is called directly from a child class
      throw new TypeError("Do not call abstract method withdraw from child.");
    }
  }
  
  // Concrete subclass representing a savings account
  class SavingsAccount extends BankAccount {
    // Constructor with balance and interest rate initialisation
    constructor(balance, interestRate) {
      // Call the parent class constructor
      super(balance);
      // Initialise the interest rate property
      this.interestRate = interestRate;
    }
  
    // Implementing the deposit method for SavingsAccount
    deposit(amount) {
      // Calculate interest and update the balance
      this.balance += amount + (amount * this.interestRate) / 100;
    }
  
    // Implementing the withdraw method for SavingsAccount
    withdraw(amount) {
      // Check if there are sufficient funds for withdrawal
      if (amount <= this.balance) {
        this.balance -= amount;
      } else {
        console.log('Insufficient funds.');
      }
    }
  }
  
  // Concrete subclass representing a checking account
  class CheckingAccount extends BankAccount {
    // Constructor with balance and overdraft limit initialisation
    constructor(balance, overdraftLimit) {
      // Call the parent class constructor
      super(balance);
      // Initialize the overdraft limit property
      this.overdraftLimit = overdraftLimit;
    }
  
    // Implementing the deposit method for CheckingAccount
    deposit(amount) {
      // Update the balance with the deposited amount
      this.balance += amount;
    }
  
    // Implementing the withdraw method for CheckingAccount
    withdraw(amount) {
      // Check if there are sufficient funds (including overdraft limit) for withdrawal
      if (amount <= this.balance + this.overdraftLimit) {
        this.balance -= amount;
      } else {
        console.log('Insufficient funds.');
      }
    }
  }

  // Create a SavingsAccount instance
const savingsAccount = new SavingsAccount(1000, 5);

// Deposit funds into the savings account
savingsAccount.deposit(500);
console.log('Savings Account Balance after deposit:', savingsAccount.balance);

// Withdraw funds from the savings account
savingsAccount.withdraw(200);
console.log('Savings Account Balance after withdrawal:', savingsAccount.balance);

// Create a CheckingAccount instance
const checkingAccount = new CheckingAccount(1500, 200);

// Deposit funds into the checking account
checkingAccount.deposit(300);
console.log('Checking Account Balance after deposit:', checkingAccount.balance);

// Withdraw funds from the checking account
checkingAccount.withdraw(1800); // This will exceed the balance and overdraft limit
console.log('Checking Account Balance after attempted withdrawal:', checkingAccount.balance);