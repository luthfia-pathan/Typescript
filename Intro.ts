/* 
What is typescript?
Typescript is a superset of JavaScript that adds static typing to the language.

Why use typescript?
It allows developers to catch errors at compile time rather than runtime, 
making it easier to write and maintain large codebases.
JS takes everything as a string, which can lead to unexpected behavior and bugs.
With typescript, you can define the types of variables, function parameters, and return values, 
which helps to prevent these kinds of issues. 

Typescript can't run in the browser, it needs to be compiled to JavaScript first.
code :- tsc fileName.ts // compiles the typescript file to javascript
node fileName.js // runs the compiled javascript file
*/

let userName: string; // User name is a string
userName = "John Doe"; // Assigning a string value to userName

/*
Vanilla JavaScript has types, but they are dynamic and can lead to unexpected behavior.
Example:
let userName = "John Doe";
We can't define explicitly that userName is a string.
*/

let age = 30; // TypeScript infers that age is a number
//age = "thirty"; // This will cause a compile-time error because age is expected to be a number

function add(a:number, b = 10){
    return a + b;
}

add(5); // This will return 15 because b has a default value of 10
add(5, 20); // This will return 25 because we are passing a value for b
// add('5'); // This will cause a compile-time error because '5' is a string and not a number
// add(5, '20'); // This will also cause a compile-time error because '20' is a string and not a number

/*
any type allows you to opt-out of type checking for a variable.
will get rid of the benefits of using TypeScript, so it's generally not recommended to use 'any' unless absolutely necessary.
*/
let username: any;
username = "John Doe"; // This is fine
username = 30; // This is also fine, but it can lead to unexpected behavior and bugs.

/*
Union types allow you to specify that a variable can be one of several types.
'|' is the union type operator, it allows you to specify that a variable can be one of several types.
*/
let userNameI: string | number;
userNameI = "John Doe"; // This is fine
userNameI = 30; // This is also fine
// userNameI = true; // This will cause a compile-time error because userName can only be a string or a number

/*
Array types can be defined using the syntax type[] or Array<type>.
*/
let numbers: number[]; // This is an array of numbers
numbers = [1, 2, 3, 4, 5]; // This is fine
// numbers = ["1", "2", "3"]; // This will cause a compile-time error because numbers can only be an array of numbers
numbers.push(6); // This is fine, we can add numbers to the array
// numbers.push("7"); // This will cause a compile-time error because we can't add a string to an array of numbers

let mixedArray: (string | number)[]; // This is an array that can contain both strings and numbers
mixedArray = [1, "two", 3, "four"]; // This is fine
// mixedArray = [1, true, 3]; // This will cause a compile-time error because we can't have a boolean in an array of strings and numbers
let mixedArray2: Array<string | number>; // This is another way to define an array that can contain both strings and numbers
mixedArray2 = [1, "two", 3, "four"]; // This is fine

/*
Tuples are a special type of array that can contain a fixed number of elements of different types.
*/
let user: [string, number]; // This is a tuple that contains a string and a number in order
user = ["John Doe", 30]; // This is fine
// user = [30, "John Doe"]; // This will cause a compile-time error because the order of the types in the tuple is not correct 

/*
Object types can be defined using the syntax { propertyName: type; }.
*/
let person: { name: "John"; age: 19 }; 
/* This is an object type that has a name property of type string and an age property of type number
 automatically infers the type of the properties based on the assigned values
 person = { name: "John", age: "nineteen" }; // This will cause a compile-time error because age should be a number, not a string
*/

//We can also define an object type using an interface or a type alias, which allows us to reuse the type definition and make our code more organized and maintainable.
let person2: { name: string; age: number } = { name: "John", age: 30 }; // This is another way to define an object type, but it doesn't allow us to reuse the type definition
person2 = {name : "Shobhana", age : 35 }// This is fine
// person2 = { name: "John", age: "thirty" }; // This will cause a compile-time error because age should be a number, not a string

let value : {} = "abc";
/* This is not an object type, This type will not accept null or undefined, but it will accept any other value, including primitive types like string, number, and boolean.
 value = null; // This will cause a compile-time error because null is not an object
 value = undefined; // This will also cause a compile-time error because undefined is not an object
*/

function greet(name: string): string {
    return `Hello, ${name}!`;
}
// We can define the return type of a function using the syntax functionName(parameter: type): returnType { ... }
greet("John"); // This will return "Hello, John!"
// greet(123); // This will cause a compile-time error because the argument should be a string, not a number

function message(): void {
    console.log("This function does not return anything.");
}
// The void type is used to indicate that a function does not return a value.

function throwError(message: string): never {
    throw new Error(message);
}
/* The never type is used to indicate that a function never returns a value, either because it always 
throws an error or because it has an infinite loop.
We can never assign this function value to the variable */
throwError("This function always throws an error."); // This will throw an error with the message "This function always throws an error."

let a:null;  a= null;
let b:undefined; b = undefined;
/* null and undefined are special types in TypeScript that represent the absence of a value. 
They are often used to indicate that a variable has not been initialized or that a function does not return a value.
a = 9; // This will cause a compile-time error because a is of type null and cannot be assigned a number
b = "undefined"; // This will also cause a compile-time error because b is of type undefined and cannot be assigned a string
*/
