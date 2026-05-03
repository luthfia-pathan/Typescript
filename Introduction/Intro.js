"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
let userName; // User name is a string
userName = "John Doe"; // Assigning a string value to userName
/*
Vanilla JavaScript has types, but they are dynamic and can lead to unexpected behavior.
Example:
let userName = "John Doe";
We can't define explicitly that userName is a string.
*/
let age = 30; // TypeScript infers that age is a number
//age = "thirty"; // This will cause a compile-time error because age is expected to be a number
function add(a, b = 10) {
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
let username;
username = "John Doe"; // This is fine
username = 30; // This is also fine, but it can lead to unexpected behavior and bugs.
/*
Union types allow you to specify that a variable can be one of several types.
'|' is the union type operator, it allows you to specify that a variable can be one of several types.
*/
let userNameI;
userNameI = "John Doe"; // This is fine
userNameI = 30; // This is also fine
// userNameI = true; // This will cause a compile-time error because userName can only be a string or a number
/*
Array types can be defined using the syntax type[] or Array<type>.
*/
let numbers; // This is an array of numbers
numbers = [1, 2, 3, 4, 5]; // This is fine
// numbers = ["1", "2", "3"]; // This will cause a compile-time error because numbers can only be an array of numbers
numbers.push(6); // This is fine, we can add numbers to the array
// numbers.push("7"); // This will cause a compile-time error because we can't add a string to an array of numbers
let mixedArray; // This is an array that can contain both strings and numbers
mixedArray = [1, "two", 3, "four"]; // This is fine
// mixedArray = [1, true, 3]; // This will cause a compile-time error because we can't have a boolean in an array of strings and numbers
let mixedArray2; // This is another way to define an array that can contain both strings and numbers
mixedArray2 = [1, "two", 3, "four"]; // This is fine
/*
Tuples are a special type of array that can contain a fixed number of elements of different types.
*/
let user; // This is a tuple that contains a string and a number in order
user = ["John Doe", 30]; // This is fine
// user = [30, "John Doe"]; // This will cause a compile-time error because the order of the types in the tuple is not correct 
/*
Object types can be defined using the syntax { propertyName: type; }.
*/
let person;
/* This is an object type that has a name property of type string and an age property of type number
 automatically infers the type of the properties based on the assigned values
 person = { name: "John", age: "nineteen" }; // This will cause a compile-time error because age should be a number, not a string
*/
//We can also define an object type using an interface or a type alias, which allows us to reuse the type definition and make our code more organized and maintainable.
let person2 = { name: "John", age: 30 }; // This is another way to define an object type, but it doesn't allow us to reuse the type definition
person2 = { name: "Shobhana", age: 35 }; // This is fine
// person2 = { name: "John", age: "thirty" }; // This will cause a compile-time error because age should be a number, not a string
let value = "abc";
/* This is not an object type, This type will not accept null or undefined, but it will accept any other value, including primitive types like string, number, and boolean.
 value = null; // This will cause a compile-time error because null is not an object
 value = undefined; // This will also cause a compile-time error because undefined is not an object
*/
/* If we have no idea what could be in object and how many key and value pairs are present It's safer to use Record type as
it forces to use object as the type withe Key and values of specified type  */
let RecordValue;
RecordValue = { a: 1, b: "2", c: 3 };
/* The Record type is a utility type in TypeScript that allows you to create an object type with a specific set of keys and values.
In this example, we are creating a Record type that has string keys and number or string values.
This means that the object can have any number of properties, as long as the keys are strings and the values are numbers or strings.
*/
/*
Enum types allow you to define a set of named constants that can be used as values in your code.
It's not part of JavaScript, but it can be compiled to JavaScript using TypeScript.
*/
var Role;
(function (Role) {
    Role[Role["Admin"] = 0] = "Admin";
    Role[Role["User"] = 1] = "User";
    Role[Role["Guest"] = 2] = "Guest"; // 2
})(Role || (Role = {}));
let userRole;
userRole = Role.Admin;
userRole = 1; // This is also fine because the enum values are assigned numeric values starting from 0
// userRole = "Admin"; // This will cause a compile-time error because userRole is of type Role and cannot be assigned a string value
/* By default, the values of the enum are assigned numeric values starting from 0, so Admin is 0, User is 1, and Guest is 2.
we can also assign custom values to the enum members if we want, for example:
enum Role{
    Admin = "ADMIN",
    User = "USER",
    Guest = "GUEST"
}
*/
/* There is alternative for enums which are more useful: Literal Types */
let userRoleLiteral = "Admin"; // This is a literal type that can only have the value "Admin"
//userRoleLiteral = "User"; // This will cause a compile-time error because userRoleLiteral can only have the value "Admin"
// We can also use union types to create a type that can have multiple literal values, for example:
let userRoleLiteralUnion;
userRoleLiteralUnion = "Guest"; // This is fine
/* userRoleLiteralUnion = "SuperAdmin"; // This will cause a compile-time error because userRoleLiteralUnion can only
 have the values "Admin", "User", or "Guest". Literal types and union types can be more flexible and easier to work
 with than enums */
let numberLiteral = 42; // This is a literal type that can only have the value 42 or 100
let userRoleAlias = "Admin";
let user1 = { name: "John", age: 30 };
/* Type aliases allow us to create our own custom types that can be reused throughout our code.
In this example, we are creating a type alias called UserRole that is a union of the literal types "Admin", "User", and "Guest".
We can then use this type alias to define the type of the userRoleAlias variable, which can only have the values "Admin", "User", or "Guest".
We are also creating a type alias called User that is an object type with name and age properties, and we can use this type alias to
define the type of the user1 variable.
*/
function greet(name) {
    return `Hello, ${name}!`;
}
// We can define the return type of a function using the syntax functionName(parameter: type): returnType { ... }
greet("John"); // This will return "Hello, John!"
// greet(123); // This will cause a compile-time error because the argument should be a string, not a number
function message() {
    console.log("This function does not return anything.");
}
// The void type is used to indicate that a function does not return a value.
function throwError(message) {
    throw new Error(message);
}
/* The never type is used to indicate that a function never returns a value, either because it always
throws an error or because it has an infinite loop.
We can never assign this function value to the variable */
throwError("This function always throws an error."); // This will throw an error with the message "This function always throws an error."
let a;
a = null;
let b;
b = undefined;
/* null and undefined are special types in TypeScript that represent the absence of a value.
They are often used to indicate that a variable has not been initialized or that a function does not return a value.
a = 9; // This will cause a compile-time error because a is of type null and cannot be assigned a number
b = "undefined"; // This will also cause a compile-time error because b is of type undefined and cannot be assigned a string
*/
/* Function as a value to another function */
function PerformJob(job) { job(); }
/* In this example, the PerformJob function takes another function as an argument and calls it. This allows for more flexible
and reusable code. () => void means a function that takes no arguments and returns void */
function PerformJob1(job) { job("Hello, world!", 202); }
/* In this example, the PerformJob1 function takes another function as an argument that takes a string and a number as
parameters and returns void.*/
function Printingmsg() {
    console.log("This is a message from the Printingmsg function.");
}
PerformJob(Printingmsg); // This will call the Printingmsg function and print the message to the console
function Printingmsg1(message, number) {
    console.log(`This is a message from the Printingmsg1 function: ${message} and number is ${number}.`);
}
PerformJob1(Printingmsg1); // This will call the Printingmsg1 function and print the message and number to the console
let job = {
    performhttp: 200,
    perform: (message) => {
        console.log(`Performing job with message: ${message}`);
    }
};
job.perform("This is a job message."); // This will call the perform method of the job object and print the message to the console
/* Type Narrowing = not null and not undefined using ! and ? */
function printLength(str) {
    if (str) { // This is a type guard that checks if str is not null
        console.log(`The length of the string is ${str.length}.`);
    }
    else {
        console.log("The string is null.");
    }
}
printLength("Hello, world!");
printLength(null);
/* ? (optional / safe access): Used for optional properties/params and optional chaining.
Optional property/parameter: age?: number means the property may be omitted (implicitly number | undefined).
Optional chaining: user?.address?.city safely returns undefined if any part is null/undefined.

! (non‑null / definite assignment): Tells the compiler a value is definitely present (bypasses strict null checks) or that
a property will be assigned later.
Non‑null assertion: const len = name!.length — assert name is not null/undefined.
Definite assignment assertion: class C { value!: number } — value will be assigned before use.
Note: Prefer narrowing and runtime checks; avoid ! when it can mask real null/undefined bugs.
 */
function printLength1(str) {
    console.log(`The length of the string is ${str.length}.`);
}
printLength1("Hello, world!");
printLength1(null);
function printLength2(str) {
    console.log(`The length of the string is ${str?.length}.`);
}
printLength2("Hello, world!");
printLength2(null);
/* Type Casting = Type assertion allows you to tell the compiler to treat a value as a different type.
Syntax: value as Type */
let someValue = "This is a string.";
let strLength = someValue.length; // This is fine, we are telling the compiler to treat someValue
//  as a string and get its length
// let strLength1: number = someValue.length; // This will cause a compile-time error because someValue is of type any and 
// the compiler cannot infer that it has a length property
/* Unknown Type :- Unknown type is a type that represents any value but not totally. It is the type-safe alternative to
the any type. */
let unknownValue;
unknownValue = "This is a string.";
/* let strLength2: number = unknownValue.length; // This will cause a compile-time error because unknownValue is of type unknown
 and the compiler cannot infer that it has a length property
 We need to use type assertion or type narrowing to access the properties of an unknown type
if (typeof unknownValue === "string") {
    let strLength2: number = unknownValue.length; // This is fine, we are using type narrowing to check if unknownValue
    // is a string before accessing its length property
}
This is a safer way to work with unknown types because it ensures that we are only accessing properties that are
valid for the actual type of the value.
*/
function isString(value) {
    // value.log(); // This will cause a compile-time error because value is of type unknown and the compiler cannot infer that it has a log method
    if (typeof value === "object" && value !== null && "log" in value && typeof value.log === "function") {
        value.log(); // This is fine, we are using type narrowing to check if value is an object that has a log method before calling it
    }
    else {
        console.log("The value is not a string.");
    }
}
function isString1(value) {
    value.log(); // This is fine, but it can lead to runtime errors if value does not have a log method
}
/* Optional with ? */
function printMessage(message) {
    if (message) {
        console.log(`The message is: ${message}`);
    }
    else {
        console.log("No message provided.");
    }
}
/* This defines a function printMessage that takes an optional parameter message of type string. */
printMessage("Hello, world!"); // This will print "The message is: Hello, world!"
printMessage(); // This will print "No message provided." because we are not passing any argument for the message parameter
let userWithOptional = { name: "John" }; // This is fine, we are omitting the age property because it is optional
userWithOptional = { name: "John", age: 30 }; // This is also fine, we are providing a value for the age property
/* Null Coalescing */
let value1 = null;
let defaultValue = "Default Value";
let result1 = value1 || defaultValue; // result1 will be "Default Value" because value1 is null 
/* The || operator is the logical OR operator, it returns the first truthy value it encounters.
In this case, since value1 is null or undefined or '' or 0 or false (which is falsy), it will return defaultValue,
which is "Default Value". This can lead to unintended consequences if you want to allow empty strings as valid values. */
console.log(result1);
let result = value1 ?? defaultValue; // result will be "Default Value" because value1 is null
/* The ?? operator is the nullish coalescing operator, it returns the right-hand side operand when the left-hand side operand
is null or undefined, and otherwise returns the left-hand side operand.
This operator is useful when you want to provide a default value for null or undefined, but still allow other falsy values
like empty strings or 0 to be treated as valid.
*/
console.log(result);
//# sourceMappingURL=Intro.js.map