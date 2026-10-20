//filter()
/* returns a new array with all elements that pass the test implemented by the provided function.

Syntax: array.filter(function(currentValue, index, array),=>)
*/
console.log('------------filter----------------')   

let numbersArray4 = [1, 2, 3, 4, 5];
let evenNumbers = numbersArray4.filter(function(num) {
    return num % 2 === 0; // Keep only even numbers
}); 

console.log(evenNumbers); // Output: [2, 4]