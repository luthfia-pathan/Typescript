"use strict";
// Interface only ts feature
// interface is a structure that defines the contract in your application. 
// It defines the syntax for classes or objects to follow. 
// Classes or objects that implement an interface must follow the structure defined by the interface.
// Works similar to types except that interfaces can be implemented by classes, while types cannot.
Object.defineProperty(exports, "__esModule", { value: true });
// Whatever we have implemented in object will be wrong as property email and method getEmail is not implemented in object.
const employee1 = {
    id: 1,
    name: "John Doe",
    department: "Engineering",
    getSalary: function () {
        return 50000;
    },
    email: "john.doe@example.com",
    getEmail: function () {
        return this.email;
    }
};
// Implementing the interface in a class
class Employee {
    id;
    name;
    department;
    email;
    constructor(id, name, department, email) {
        this.id = id;
        this.name = name;
        this.department = department;
        this.email = email;
    }
    getSalary() {
        return 50000;
    }
    getEmail() {
        return this.email;
    }
}
const employee2 = new Employee(2, "Jane Doe", "Marketing", "jane.doe@example.com");
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const myArray = ["Hello", "World"];
// like inheritance in class, we also use extends keyword to extend an interface.
class Manager extends Employee {
    constructor(id, name, department, email) {
        super(id, name, department, email);
    }
    manageTeam() {
        console.log(`${this.name} is managing the team.`);
    }
}
const manager1 = new Manager(3, "Alice Smith", "HR", "alice.smith@example.com");
manager1.manageTeam();
console.log(manager1.getEmail());
class SoftwareEngineer {
    id;
    name;
    department;
    email;
    constructor(id, name, department, email) {
        this.id = id;
        this.name = name;
        this.department = department;
        this.email = email;
    }
    getSalary() {
        return 50000;
    }
    getEmail() {
        return this.email;
    }
    code() {
        console.log(`${this.name} is coding.`);
    }
    test() {
        console.log(`${this.name} is testing.`);
    }
}
const softwareEngineer1 = new SoftwareEngineer(4, "Bob Johnson", "Development", "bob.johnson@example.com");
softwareEngineer1.code();
softwareEngineer1.test();
const developerTester1 = {
    id: 5,
    name: "Charlie Brown",
    department: "Development",
    email: "charlie.brown@example.com",
    getSalary: function () {
        return 50000;
    },
    getEmail: function () {
        return this.email;
    },
    code: function () {
        console.log(`${this.name} is coding.`);
    },
    test: function () {
        console.log(`${this.name} is testing.`);
    }
};
// Discriminated Unions
// They are created using a common property that is used to discriminate between the different types.
// Then we can use that as a condition to check which type we are working with and then 
// we can access the properties and methods of that type.
function performTask(employee) {
    if ("adminTask" in employee) {
        employee.adminTask();
    }
    else if ("code" in employee) {
        employee.code();
    }
}
// Instance of
// a class can be used as a type. We can use the instance of a class to define the type of a variable 
// or a parameter in a function.
const employee3 = new Employee(6, "Eve Adams", "Finance", "eve.adams@example.com");
const softwareEngineer2 = new SoftwareEngineer(7, "Frank Miller", "Development", "frank.miller@example.com");
function performTask2(employee) {
    if (employee instanceof Employee) {
        console.log(`${employee.name} is an employee.`);
    }
    else if (employee instanceof SoftwareEngineer) {
        console.log(`${employee.name} is a software engineer.`);
    }
}
performTask2(employee3);
performTask2(softwareEngineer2);
const person1 = {
    name: "David Lee",
    subject: "Mathematics",
    profession: "teacher"
};
function IsTeacher(person) {
    return person.profession === "teacher";
}
//it will not only return boolean value but also narrow down the type of person to teacher. 
// So we can access the properties of teacher without any error.
if (IsTeacher(person1)) {
    console.log(`${person1.name} is a teacher and teaches ${person1.subject}.`);
}
//# sourceMappingURL=OOP.js.map