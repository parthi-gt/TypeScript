/*
Arrow Functions (Lambda Functions)
Arrow functions provide a shorter syntax for writing functions.


Uses => (fat arrow) instead of function keyword.
Single-line functions don’t need {} or return keyword.
Multi-line functions require {} and return.

Syntax
let functionName = (parameters): returnType => expression;

*/

// console.log("------------Example-1------------------")
// // Arrow function with no parameters and no return type

// let greet = (): void => 
// {
//     console.log("Hello, I am an arrow function");
// }
// greet(); // Calling the arrow function

console.log("------------Example-2------------------")
// Arrow function with parameters and return type
let multiply = (num1: number, num2: number): number => {
    return num1 * num2;
}
console.log(multiply(5, 10)); // Output: 50

console.log("------------Example-3------------------")
// Arrow function with parameters and implicit return type

let add = (num1: number, num2: number): number => num1 + num2;
console.log(add(5, 10)); // Output: 15

