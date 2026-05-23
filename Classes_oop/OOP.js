"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Class is Blueprint of object. It is a template for creating objects with predefined properties and methods.
class Person {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
// Shortcut of this Code is:- only in ts
class Person1 {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
/* In this example, we are using a shorthand syntax in the constructor to declare and initialize the 'name'
 and 'age' properties. By prefixing the constructor parameters with 'public' or 'private' or 'protected',
 we are automatically creating class properties with the same names and assigning the values passed to the
 constructor to those properties.
 This approach reduces boilerplate code and makes the class definition more concise. */
const person1 = new Person1("Alice", 30);
console.log(person1.name); // Output: Alice
person1.name = "Bob";
console.log(person1.name); // Output: Bob
/* In this example, we are creating an instance of the 'Person1' class and assigning it to the variable 'person1'.
 We can access the 'name' property of the 'person1' object and modify it as needed. The output will show the
 initial name "Alice" and then the updated name "Bob". */
/* Similary we have private and protected access modifiers. Private properties and methods can only be accessed
within the class, while protected properties and methods can be accessed within the class and its subclasses.*/
/*If we don't assign anything defaultly it will be public. Public properties and methods can be accessed from anywhere,
both inside and outside the class. */
// Readonly property
class Car {
    make;
    constructor(make) {
        this.make = make;
    }
}
const ford = new Car("Ford");
console.log(ford.make); // Output: Ford
// ford.make = "Toyota"; // Error: Cannot assign to 'make' because it is a read-only property.
/*The 'readonly' modifier 'indicates that the value of the 'make' property cannot be changed after it has been
initialized. When we create an instance of the 'Car' class and assign a value to the 'make' property, we can
access it, but if we try to modify it later, we will get an error.  */
class Employee {
    hobbies;
    constructor(hobbies) {
        this.hobbies = hobbies;
    }
}
const employee1 = new Employee(["Reading", "Traveling"]);
console.log(employee1.hobbies);
// employee1.hobbies = ["Cooking"]; // Error: Cannot assign to 'hobbies' because it is a read-only property.
employee1.hobbies.push("Cooking");
// This is allowed because we are modifying the contents of the array, not reassigning the property itself.
console.log(employee1.hobbies); // Output: ["Reading", "Traveling", "Cooking"]
/* While we cannot reassign the 'hobbies' property to a new array, we can modify the contents of the
existing array using methods like 'push'. This allows us to add new hobbies to the array without violating
the 'readonly' constraint on the property itself. */
// Getters and Setters
class Rectangle {
    _width;
    _height;
    constructor(_width, _height) {
        this._width = _width;
        this._height = _height;
    }
    get area() {
        return this._width * this._height;
    }
    set width(value) {
        this._width = value;
    }
    set height(value) {
        this._height = value;
    }
}
const rect = new Rectangle(5, 10);
console.log(rect.area); // Output: 50
// Getter function is accessed like a field, not like a method. We can access it without parentheses.
//Getter function can also be private and protected. but it makes sense to make it public because 
// it is used to access the private properties of the class.
rect.width = 7;
// We can also use setter to update the value of private properties. it is accessed like a field, not like 
// a method. We can access it without parentheses.
console.log(rect.area); // Output: 70
class Student {
    _age;
    constructor() {
        this._age = 0;
    }
    set age(value) {
        if (value < 0) {
            throw new Error("Age cannot be negative");
        }
        if (value > 100) {
            throw new Error("Age cannot be greater than 150");
        }
        this._age = value;
    }
}
const student1 = new Student();
student1.age = 25;
console.log(student1.age); // Output: 25
// student1.age = -5; // Error: Age cannot be negative
// student1.age = 150; // Error: Age cannot be greater than 150
/* In this example, we are using a setter to validate the age value before assigning it to the private '_age' property.
 If the value is negative or greater than 100, an error is thrown. This allows us to enforce constraints on the
 data being set for the 'age' property, ensuring that it remains within a valid range. */
// Static properties and methods
class MathUtils {
    static PI = 3.14159;
    static calculateCircumference(radius) {
        return 2 * MathUtils.PI * radius;
    }
}
// there is one moretype called static instead of public, private and protected. 
// Static properties and methods belong to the class itself rather than to instances of the class.
// you can access static members using the class name without creating an instance of the class. 
console.log(MathUtils.PI); // Output: 3.14159
console.log(MathUtils.calculateCircumference(5)); // Output: 31.4159
/* In this example, we are accessing the static property 'PI' and the static method 'calculateCircumference'
directly using the class name 'MathUtils'. We do not need to create an instance of the 'MathUtils' class
to access these static members, as they belong to the class itself. */
// Inheritance
class Animal {
    name;
    constructor(name) {
        this.name = name;
    }
}
class Dog extends Animal {
    breed;
    constructor(name, breed) {
        super(name); // Call the constructor of the parent class (Animal) to initialize the 'name' property
        this.breed = breed;
    }
}
const dog1 = new Dog("Buddy", "Golden Retriever");
console.log(dog1.name); // Output: Buddy
console.log(dog1.breed); // Output: Golden Retriever
// Protected members and functions are accessible within the class and its subclasses, but not from 
// outside the class hierarchy.
// Abstract classes and methods not in JS
class Shape {
    name;
    constructor(name) {
        this.name = name;
    }
}
class Circle extends Shape {
    radius;
    constructor(radius) {
        super("Circle");
        this.radius = radius;
    }
    area() {
        return Math.PI * this.radius * this.radius;
    }
}
let circle1 = new Circle(5);
console.log(circle1.name); // Output: Circle
console.log(circle1.area()); // Output: 78.53981633974483
//let shape1 = new Shape("Shape"); // Error: Cannot create an instance of an abstract class.
// Abstarct classes is only used as base classes and cannot be instantiated directly. 
// They are meant to be extended by other classes that provide implementations for the abstract methods defined in the abstract class.
//inhertance types
// Single Inheritance: A class can inherit from only one parent class.
// Multilevel Inheritance: A class can inherit from a parent class, which in turn can inherit from another parent class.
class A {
    methodA() {
        console.log("Method A");
    }
}
class B extends A {
    methodB() {
        console.log("Method B");
    }
}
class C extends B {
    methodC() {
        console.log("Method C");
    }
}
const c1 = new C();
c1.methodA(); // Output: Method A
c1.methodB(); // Output: Method B
c1.methodC(); // Output: Method C
// Hierarchical Inheritance: Multiple classes can inherit from a single parent class.
// Hybrid Inheritance: A combination of two or more types of inheritance.
//# sourceMappingURL=OOP.js.map