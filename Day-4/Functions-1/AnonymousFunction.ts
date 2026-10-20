/*
An anonymous function does not have a name. It is usually assigned to a variable.

The function is stored in a variable (multiply).
It does not have a function name.
It behaves like a regular function.


Syntax

let variableName = function(parameters): returnType 
{
// function body
};
variableName(); // Calling the anonymous function
*/

console.log("------------Example-1------------------")

let msg = function ():string
{
    return "Hello, I am an anonymous function";
}
console.log(msg());


console.log("------------Example-2------------------")

let multiply = function (num1: number, num2: number): number
{
    return num1 * num2;
} 
console.log(multiply(5, 10)); // Output: 50

