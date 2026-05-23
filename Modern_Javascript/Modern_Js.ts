//Let and const
const name: string = "John";
// name = "Doe"; // Error: Cannot assign to 'name' because it is a constant.

let age: number = 30;
age = 31; // No error

/* there is also Var keyword which works similarly to let but has function scope instead of block scope, 
and is generally not recommended for use in modern JavaScript due to potential issues with variable hoisting
 and scope. */
 var city: string;
 city = "Los Angeles"; // No error

 {
    city = "New York"; // No error, city is accessible here due to var's function scope
 }
    console.log(city); // Output: New York
/* In Let and Const, the variables are block-scoped, meaning they are only accessible within the block
 they are defined in.
 In contrast, Var is function-scoped, meaning it is accessible throughout the entire function it is defined in,
regardless of block boundaries. */

// Arrow Functions
const add = (a: number, b: number): number => {
    return a + b;
}
/* Without using Function keyword, we can create a function using the arrow syntax.
 Arrow functions are more concise and do not have their own 'this' context, which can be beneficial in certain
situations, such as when working with callbacks or methods in classes. */

const add1 = (a: number): number => a + 5; 
/* If the function body consists of a single expression, you can omit the curly braces and the return keyword. 
The expression will be evaluated and returned automatically. */

//We can also use default parameters in functions
const greet = (name: string = "Guest"): string => {
    return `Hello, ${name}!`;
}

// Spread Operator
const numbers: number[] = [1, 2, 3];
const moreNumbers: number[] = [...numbers, 4, 5]; // [1, 2, 3, 4, 5]
console.log(moreNumbers); // Output: [1, 2, 3, 4, 5]
/* The spread operator allows you to pullout the elements of an iterable (like an array) into individual elements.
like list. In this example, we are creating a new array 'moreNumbers' that includes all the elements of the 
'numbers' array followed by additional numbers. */

const person = { name: "Alice", age: 25 };
const updatedPerson = { ...person, city: "New York" }; // { name: "Alice", age: 25, city: "New York" }
console.log(updatedPerson); // Output: { name: "Alice", age: 25, city: "New York" }
/* In this example, we are creating a new object 'updatedPerson' that includes all the properties of the 'person' object, and we are also adding a new property 'city'. The spread operator allows us to easily create a new
object that combines the properties of an existing object with additional properties. */

//Rest Parameters
const sum = (...numbers: number[]): number => {
    return numbers.reduce((acc, curr) => acc + curr, 0);
}
/* Rest parameters allow you to represent an indefinite number of arguments as an array. In this example, 
the 'sum' function can accept any number of numeric arguments, and it will calculate their total using the 
reduce method. The 'numbers' parameter is treated as an array containing all the arguments passed to the 
function. */

console.log(sum(1, 2, 3)); // Output: 6

// Destructuring
const person1 = ['Bob', 40, 'Chicago'];
// WE usually do like this
const name1 = person1[0];
const age1 = person1[1];
/* This will store but will take more lines of code. 
Instead, we can use destructuring to extract values from arrays or objects in a more concise way. */
const [name2, age2, city2] = person1;
/* Destructuring allows you to unpack values from arrays or properties from objects into distinct variables. 
In this example, we are using array destructuring to extract the values from the 'person1' array and assign 
them to the variables 'name2', 'age2', and 'city2' in order wise. */
console.log(name2); // Output: Bob

const hobbies = ['Swimming', 'Reading', 'Traveling', 'Cooking', 'Gardening'];
const [hobby1, hobby2, ...otherHobbies] = hobbies;
/* In this example, we are using array destructuring to extract the first two hobbies into 'hobby1' and 'hobby2', 
and the rest of the hobbies are collected into the 'otherHobbies' array using the rest operator. */
console.log(hobby1); // Output: Swimming
console.log(otherHobbies); // Output: ['Traveling', 'Cooking', 'Gardening']
// NOTE :- THis will not change original array

const person2 = { name: 'Charlie', age: 35, city: 'San Francisco' };
const { name: personName, age: personAge, city: personCity } = person2;
/* In this example, we are using object destructuring to extract the properties from the 'person2' 
object and assign them to new variables 'personName', 'personAge', and 'personCity'. 
The syntax { name: personName } means that we are extracting the 'name' property from the object and
 assigning it to a new variable called 'personName'. This allows us to use more descriptive variable 
 names while still accessing the properties of the original object. */
 console.log(personName); // Output: Charlie
