

//Push()

/*Description: Adds one or more elements to the end of an array.

Syntax: array.push(element1, element2, ...)

*/

console.log('------------push----------------')

let numbers = [1,2,3,4,5];
numbers.push(6,7);
console.log(numbers); // Output: [1, 2, 3, 4, 5, 6, 7]


//Pop()

/*Description: Removes the last element from an array and returns that element. 

Syntax: array.pop()
*/

console.log('------------pop----------------')  

let fruits = ['apple', 'banana', 'cherry'];
let lastFruit = fruits.pop();
console.log(lastFruit); // Output: cherry
console.log(fruits); // Output: ['apple', 'banana']


//Shift()

/*Description: Removes the first element from an array and returns that element.

Syntax: array.shift()
*/

console.log('------------shift----------------')

let colors = ['red', 'green', 'blue'];
let firstColor = colors.shift();
console.log(firstColor); // Output: red
console.log(colors); // Output: ['green', 'blue']


//Unshift()

/*Description: Adds one or more elements to the beginning of an array.

Syntax: array.unshift(element1, element2, ...)
*/
console.log('------------unshift----------------')

let animals = ['dog', 'cat'];
animals.unshift('elephant', 'tiger');
console.log(animals); // Output: ['elephant', 'tiger', 'dog', 'cat']


//concat()

/*Description: Merges two or more arrays and returns a new array.

Syntax: array1.concat(array2, array3, ...)
*/
console.log('------------concat----------------')

let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
let mergedArray = array1.concat(array2);
console.log(mergedArray); // Output: [1, 2, 3, 4, 5, 6]

//slice()

/*Description: Extracts a section of an array and returns a new array.

Syntax: array.slice(start, end)
*/
console.log('------------slice----------------')    

let numbersArray = [10, 20, 30, 40, 50];
let slicedArray = numbersArray.slice(1, 4); //slice(1, 4) : start at index 1, stop before index 4
console.log(slicedArray); // Output: [20, 30, 40]


//splice()
/* Add or remove elements from an array.

Syntax: array.splice(start, deleteCount, item1, item2, ...)
*/
console.log('------------splice----------------')   

let fruitsArray = ['apple', 'banana', 'cherry', 'date'];
// Remove 2 elements at index 1 and add 'blueberry' and 'kiwi'
fruitsArray.splice(1, 2) // Removes 'banana' and 'cherry'  // splice(1,2) : start at index 1, remove 2 elements
console.log(fruitsArray); // Output: ['apple', 'date']
fruitsArray.splice(1, 0, 'blueberry', 'kiwi'); // Adds 'blueberry' and 'kiwi' at index 1
console.log(fruitsArray); // Output: ['apple', 'blueberry', 'kiwi', 'cherry', 'date']



//indexOf()
/* returns the index of the first occurrence of a specified value in an array, or -1 if it is not found.

Syntax: array.indexOf(searchElement, fromIndex)
*/
console.log('------------indexOf----------------')  

let colorsArray = ['red', 'green', 'blue', 'green'];
let index = colorsArray.indexOf('green');

console.log(index); // Output: 1 (first occurrence of 'green')
let notFoundIndex = colorsArray.indexOf('yellow');
console.log(notFoundIndex); // Output: -1 (not found)

//includes()

/* check if an array contains a specified value and returns true or false.

Syntax: array.includes(searchElement, fromIndex)
*/
console.log('------------includes----------------') 

let colorsArray1 = ['red', 'green', 'blue', 'green'];
let includesGreen = colorsArray1.includes('green');
console.log(includesGreen); // Output: true

let includesYellow = colorsArray1.includes('yellow');
console.log(includesYellow); // Output: false

//toString()

/* convets the array to a string and returns the string representation of the array.

Syntax: array.toString()
*/
console.log('------------toString----------------')

let numbersArray1 = [1, 2, 3, 4, 5];
let numbersString = numbersArray1.toString();
console.log(numbersString); // Output: "1,2,3,4,5"

//forEach()

/* executes a function once for each array element.

Syntax: array.forEach(function(currentValue, index, array), thisArg)
current value: The current element being processed in the array.
index: The index of the current element being processed in the array.
array: The array that forEach() is being applied to.

*/
console.log('------------forEach----------------')  

let numbersArray2 = ["apple","banana", "cherry", "date", "fig", "grape"];
numbersArray2.forEach(function(num, index, array) {
    console.log(`Index: ${index}, Value: ${num}`);
});


//map()
/* creates a new array populated with the results of calling a provided function on every element in the calling array.

Syntax: array.map(function(currentValue, index, array), thisArg)
*/
console.log('------------map----------------')  

let numbersArray3 = [1, 2, 3, 4, 5];
let doubledNumbers = numbersArray3.map(function(num) {
    return num * 2;
});
console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]



//filter()
/* returns a new array with all elements that pass the test implemented by the provided function.

Syntax: array.filter(function(currentValue, index, array), thisArg)
*/
console.log('------------filter----------------')   

let numbersArray4 = [1, 2, 3, 4, 5];
let evenNumbers = numbersArray4.filter(function(num) {
    return num % 2 === 0; // Keep only even numbers
}); 

console.log(evenNumbers); // Output: [2, 4]
