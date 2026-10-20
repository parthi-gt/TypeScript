// // // // let fruits: Array<string> = ["Apple", "Banana", "Cherry"];  //["Apple" [0], "Banana"[1], "Cherry"[2]]
// // // // console.log(fruits.length);


// // // // let numbers: number[] = [1, 2, 3, 4, 5];
// // // // console.log(numbers);


// // // // let colors: string[] = ["Red", "Green", "Blue"];
// // // // console.log(colors[0]); // Output: Red
// // // // console.log(colors[1]); // Output: Green
// // // // console.log(colors[2]); // Output: Blue


// // // let empNames: Array<string> = ["john", "smith", "peter", "scott"]; // Array of strings

// // // for (let i = 0; i < empNames.length; i++) 
// // //     {
// // // console.log(empNames[i]);
// // //     }

// // //     let empIds: Array<number> = [101, 102, 103, 104]; // Array of numbers
// // // for (let i in empIds) 
// // //     {
// // // console.log(empIds[i]); // 'i' represents index
// // // }


// // console.log("-----------Passing Arrays to Functions-----------")

// // function search(ele: number, arr: number[]): boolean 
// // {
// // for (let i = 0; i < arr.length; i++) 
// //     {
// // if (arr[i] === ele) {
// // return true; // Element found
// // }
// // }
// // return false; // Element not found
// // }

// // let arr: number[] = [10, 20, 30, 40, 50];
// // console.log(search(20, arr)); // Output: true
// // console.log(search(10, arr)); // Output: false


// console.log("-----------Function Returning an Array-----------")

// function capitalizeWords(arr: string[]): string[] {


//     let result: string[] = [];

// for (let i = 0; i < arr.length; i++)
//      {
// result[i] = arr[i].toUpperCase();
// }
// return result;
// }
// let words: string[] = ["hello", "world", "typescript"];
// console.log(capitalizeWords(words));


const n: number = 7;
for (let i: number = 0; i <= 10; i++) 
    
    {
console.log(`${n} x ${i} = ${n * i}`);
}