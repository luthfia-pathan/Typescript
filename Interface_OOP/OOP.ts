// Interface only ts feature
// interface is a structure that defines the contract in your application. 
// It defines the syntax for classes or objects to follow. 
// Classes or objects that implement an interface must follow the structure defined by the interface.
// Works similar to types except that interfaces can be implemented by classes, while types cannot.

interface IEmployee {
    id: number;
    name: string;
    department: string;
    getSalary(): number;
}
// Implementing the interface in a object
// const employee1: IEmployee = {
//     id: 1,
//     name: "John Doe", 
//     department: "Engineering",
//     getSalary: function() {
//         return 50000;
//     }
// }; 

// we can create one more interface on same name and give it different properties and methods. 
// That will merge together and we can use all the properties and methods in one interface.
interface IEmployee {
    email: string;
    getEmail(): string;
}

// Whatever we have implemented in object will be wrong as property email and method getEmail is not implemented in object.
const employee1: IEmployee = {
    id: 1,
    name: "John Doe",
    department: "Engineering",
    getSalary: function() {
        return 50000;
    },
    email: "john.doe@example.com",
    getEmail: function() {
        return this.email;
    }
};

// Implementing the interface in a class
class Employee implements IEmployee {
    constructor(public id: number, public name: string, public department: string, public email: string) {}

    getSalary(): number {
        return 50000;
    }

    getEmail(): string {
        return this.email;
    }
}

const employee2 = new Employee(2, "Jane Doe", "Marketing", "jane.doe@example.com");

// We can also use interface to define the structure of a function
interface ICalculate {
    (a: number, b: number): number;
}
const add: ICalculate = (a, b) => a + b;
const subtract: ICalculate = (a, b) => a - b;

// We can also use interface to define the structure of an array
interface IStringArray {
    [index: number]: string;
}
const myArray: IStringArray = ["Hello", "World"];

// We can also extend an interface to create a new interface
interface IManager extends IEmployee {
    manageTeam(): void;
}
// like inheritance in class, we also use extends keyword to extend an interface.
class Manager extends Employee implements IManager {
    constructor(id: number, name: string, department: string, email: string) {
        super(id, name, department, email);
    }
    manageTeam(): void {
        console.log(`${this.name} is managing the team.`);
    }
}
const manager1 = new Manager(3, "Alice Smith", "HR", "alice.smith@example.com");
manager1.manageTeam();
console.log(manager1.getEmail());

// multiple inheritance is not allowed in class but it is allowed in interface. We can extend multiple interfaces in one interface.
interface IDeveloper extends IEmployee {
    code(): void;
}
interface ITester extends IEmployee {
    test(): void;
}
class SoftwareEngineer implements IDeveloper, ITester {
    constructor(public id: number, public name: string, public department: string, public email: string) {}
    getSalary(): number {
        return 50000;
    }

    getEmail(): string {
        return this.email;
    }

    code(): void {
        console.log(`${this.name} is coding.`);
    }
    test(): void {
        console.log(`${this.name} is testing.`);
    }   
}
const softwareEngineer1 = new SoftwareEngineer(4, "Bob Johnson", "Development", "bob.johnson@example.com");
softwareEngineer1.code();
softwareEngineer1.test();

// Intersection types 
// Similar to interfaces but they cannot be implemented by classes. They are used to combine multiple types 
// into one type. We can use intersection types to create a new type that combines the properties and methods 
// of multiple types.
type IDeveloperTester = IDeveloper & ITester;
const developerTester1: IDeveloperTester = {
    id: 5,
    name: "Charlie Brown",
    department: "Development",
    email: "charlie.brown@example.com",
    getSalary: function() {
        return 50000;
    },
    getEmail: function() {
        return this.email;
    },
    code: function() {
        console.log(`${this.name} is coding.`);
    },
    test: function() {
        console.log(`${this.name} is testing.`);
    }
};

// combining 2 interfaces
interface IAdmin extends IEmployee, IManager {
   adminTask(): void;
}

// if you have 2 types with same name then it will give error but if you have 2 interfaces with same name 
// then it will merge together and we can use all the properties and methods in one interface.

//if you have 2 types you want to use either that or this then you can use 8union types but 
// if you have 2 interfaces you want to use either that or this then you can use intersection types.
type IAdminorDeveloper = IAdmin | IDeveloper;

// Discriminated Unions
// They are created using a common property that is used to discriminate between the different types.
// Then we can use that as a condition to check which type we are working with and then 
// we can access the properties and methods of that type.
function performTask(employee: IAdminorDeveloper) {
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

const employee3: Employee = new Employee(6, "Eve Adams", "Finance", "eve.adams@example.com");
const softwareEngineer2: SoftwareEngineer = new SoftwareEngineer(7, "Frank Miller", "Development", "frank.miller@example.com");

type IEmployeeorSoftwareEngineer = Employee | SoftwareEngineer;
function performTask2(employee: IEmployeeorSoftwareEngineer) {
    if (employee instanceof Employee) {
        console.log(`${employee.name} is an employee.`);
    } else if (employee instanceof SoftwareEngineer) {
        console.log(`${employee.name} is a software engineer.`);
    }}

performTask2(employee3);
performTask2(softwareEngineer2);


type student = {
    name: string;
    age: number;
    profession: "student";
}
type teacher = {
    name: string;
    subject: string;
    profession: "teacher";
}
type person = student | teacher;
const person1: person = {
    name: "David Lee",
    subject: "Mathematics",
    profession: "teacher"
};

function IsTeacher(person: person) {
    return person.profession === "teacher";
}

//it will not only return boolean value but also narrow down the type of person to teacher. 
// So we can access the properties of teacher without any error.
if (IsTeacher(person1)) {
    console.log(`${person1.name} is a teacher and teaches ${person1.subject}.`);
}