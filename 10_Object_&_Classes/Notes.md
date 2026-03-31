# javascript and classes

## OOP

## Object
- collection of properties and methods 
- toLowerCase

## why use OOP

## parts of OOP
Object literal 

- Constructor function
- Prototypes
- Classes
- Instances (new, this)


## 4 pillars



## 1. Abstraction
// Hides complex implementation and shows only essential features
// Example: calling a method without knowing internal logic

eg : 
## Hides internal details, shows only needed functionality
class Car {
  start() {
    console.log("Car started");
  }
}
new Car().start(); //we don’t know internal working



## 2. Encapsulation
// Wraps data and methods together and restricts direct access
// Example: using private variables (#balance)
eg : 
## Protects data using private variables
class Bank {
  #balance = 0;

  deposit(amount) {
    this.#balance += amount;
  }

  getBalance() {
    return this.#balance;
  }
}
const b = new Bank();
b.deposit(100);
console.log(b.getBalance()); // 100



## 3. Inheritance
// One class acquires properties and methods of another class
// Example: Child class extends Parent class

eg:
## Child class uses properties/methods of parent class
class Animal {
  speak() {
    console.log("Animal speaks");
  }
}
class Dog extends Animal {}
new Dog().speak(); // inherited method



## 4. Polymorphism
// Same method name behaves differently in different classes
// Example: method overriding (same method, different output)

## Same method behaves differently
class Cat {
  speak() {
    console.log("Meow");
  }
}
class Dog2 {
  speak() {
    console.log("Bark");
  }
}
[new Cat(), new Dog2()].forEach(a => a.speak());