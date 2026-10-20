/*

TypeScript Arrays
An array in TypeScript is a special type of variable that can store multiple values. These values can be of the same type or a combination of different types.
Declaring an Array
Arrays in TypeScript can be declared in two main ways:
Using square brackets ([]) (array literal syntax).
Using Array<Type> (generic array syntax).

*/

console.log("-----------Declaring an Array using square brackets ([]) (array literal syntax)-----------");

let numbers: number[] = [1, 2, 3, 4, 5];
console.log(numbers); // Output: [1, 2, 3, 4, 5]    

console.log("-----------Declaring an Array using Array<Type> (generic array syntax)-----------");

let fruits: Array<string> = ["Apple", "Banana", "Cherry"];
console.log(fruits); // Output: ["Apple", "Banana", "Cherry"]       

console.log("----------Accessing Array Elements-----------");

let colors: string[] = ["Red", "Green", "Blue"];
console.log(colors[0]); // Output: Red
console.log(colors[1]); // Output: Green
console.log(colors[2]); // Output: Blue 

console.log("----------Generic Array Syntax-----------");

// let empNames: Array<string> = ["john", "smith", "peter", "scott"]; // Array of strings
// let empIds: Array<number> = [101, 102, 103, 104]; // Array of numbers
// let data: Array<string | number> = ["john", "smith", 101, 102]; // Union type (string or number)
// let data2: Array<any> = [1, "john", true, null]; // Array allowing multiple data types

console.log ("-----------Iterating Over an Array-----------")


console.log("-----------for loop-----------")
/*
i is a plain number you control yourself, starting at 0.
You manually access each element using data[i].
You control the start, end condition, and step size — so you can loop backwards, skip elements, or break early with full flexibility.
Best for: when you need the index itself (e.g., to compare with the next element, or to break out early in a search).
*/

//Using a for loop
let empNames: Array<string> = ["john", "smith", "peter", "scott"]; // Array of strings

for (let i = 0; i < empNames.length; i++) 
    {
console.log(empNames[i]);
}


/*
i here is the index/key, not the value — and it's given to you as a string, not a number (e.g., "0", "1").
You still need data[i] to get the actual value.
Designed originally for iterating over object properties — using it on arrays works but is not recommended, because it also picks up any extra enumerable properties you might add to the array, and index order isn't strictly guaranteed in all environments.
Best for: iterating over object keys — rarely the right choice for arrays.
*/
console.log("-----------for...in loop-----------")
//Using for...in loop (indexes)

let empIds: Array<number> = [101, 102, 103, 104]; // Array of numbers
for (let i in empIds) 
    {
console.log(empIds[i]); // 'i' represents index
}

/*
element is the actual value — no index, no data[i] needed.
Cleanest, most readable syntax when you just need each value.
Best for: the majority of everyday array looping — this is the modern, preferred choice.
*/
console.log("-----------for...of loops-----------")
//Using for...of loop (values)
for (let element of data) 
    {
console.log(element); // 'element' represents actual array values
}

console.log("-----------Passing Arrays to Functions-----------")

function search(ele: number, arr: number[]): boolean 
{
for (let i = 0; i < arr.length; i++) 
    {
if (arr[i] === ele) {
return true; // Element found
}
}
return false; // Element not found
}

let arr: number[] = [10, 20, 30, 40, 50];
console.log(search(20, arr)); // Output: true
console.log(search(100, arr)); // Output: false


console.log("-----------Function Returning an Array-----------")

function capitalizeWords(arr: string[]): string[] {


    let result: string[] = [];

for (let i = 0; i < arr.length; i++)
     {
result[i] = arr[i].toUpperCase();
}
return result;
}
let words: string[] = ["hello", "world", "typescript"];
console.log(capitalizeWords(words)); // Output: ["HELLO", "WORLD", "TYPESCRIPT"]
