
/*
A named function has a specific name and can be reused multiple times in the code

Syntax

function functionName(parameters): returnType
 {
  function body
}
  functionName()
  */


// Example-1

// function display (): void 
// {
//     console.log("Hello, I am a named function");
// }
// display(); // Calling the named function

console.log("------------Example-2------------------")

// Example-2 named function with parameters and return type

// function addNumbers (num1: number, num2: number): number

// {
//     return num1 + num2;
// }

// let result: number = addNumbers(5, 10);
// console.log(result); // Output: 15

// console.log(addNumbers(5, 10)); // Output: 15

//console.log(addNumbers(20, 30, 40)); // compiler time error: Expected 2 arguments, but got 3.


console.log("------------Example-3------------------")


function addNumbers1 (...nums: number[]): number
{   
    let i;
    let sum: number = 0;
    for (let i=0; i < nums.length; i++)
    {
        sum += nums[i];
    }
    return sum;
}
let result2: number = addNumbers1(10, 10);
console.log(result2); // Output: 20


console.log("------------Example-4------------------")


function displaydetails(id: number, name: string, age: number): void
{
    console.log("ID: " + id);
    console.log("Name: " + name);
    console.log("Age: " + age);
}   

displaydetails(1, "John", 30); // Output: ID: 1, Name: John, Age: 30

