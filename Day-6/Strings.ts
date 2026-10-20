/*
A string in TypeScript is a sequence of characters used to represent text. It can be declared using:
1.Single quotes 'like this'
2.Double quotes "like this"
3.Backticks (Template literals) `like this` – useful when embedding variables inside strings.
 index in string starts with 0 and ends with length-1.
Backtick-->whenever you work with variables inside string then use backtick. It is also called template literal.

*/

console.log("-------------String in TypeScript-----------");

let str1: string = 'Single quote';
let str2: string = "Double quote";
let str3: string = `Backtick`;

console.log(str1); // Output: Single quote
console.log(str2); // Output: Double quote
console.log(str3); // Output: Backtick


let num : number = 10;
console.log(`The value of num is ${num}`); // Output: The value of num is 10 //----->Valid
console.log("The value of num is " , num); // Output: The value of num is 10  //----->Valid
console.log("The value of num is ${num}  Invalid"); // Output: The value of num is ${num}  //----->Invalid
console.log('The value of num is ${num}  Invalid'); // Output: The value of num is ${num}  //----->Invalid
console.log(`The value of num is ${num}`); // Output: The value of num is 10  //----->Valid


console.log("-------------String Methods in TypeScript-----------");

console.log("1------.length – Get the number of characters in a string---------");  

let str4: string = "Hello, TypeScript!";
console.log(str4.length); // Output: 18

console.log("2------.toUpperCase() – Convert a string to uppercase---------");
let str5: string = "hello, typescript!";
let str15: string = "HELLO, TYPESCRIPT!";
console.log(str5.toUpperCase()); // Output: HELLO, TYPESCRIPT!
console.log(str15.toLowerCase()); // Output: hello, typescript!

console.log("3------.charAt(index) – Get the character at a specific index---------");
//Hello, TypeScript!----->Index-->print the index value of the string
//let str4: string = "Hello, TypeScript!";
console.log(str4.charAt(0)); // Output: H

console.log("4------.indexOf(substring) – Get the index of a substring---------");
//Hello, TypeScript!----->Index-->print the index value of the string
console.log(str4.indexOf("TypeScript")); // Output: 7

console.log("5------.substring(startIndex, endIndex) – Get a substring from a string---------");
//Hello, TypeScript!----->Index-->print the index value of the string  // stop before the endIndex
//Hello, TypeScript!
console.log(str4.substring(7, 17)); // Output: TypeScript   

console.log("6--------includes(substring) – Check if a string contains a substring---------");
//boolean value true or false
console.log(str4.includes("TypeScript")); // Output: true
console.log(str4.includes("JavaScript")); // Output: false

console.log("7-------- startsWith() – Check if a string starts with a substring---------");
console.log(str4.startsWith("Hello")); // Output: true
console.log(str4.startsWith("TypeScript")); // Output: false

console.log("8-------- endsWith() – Check if a string ends with a substring---------");
console.log(str4.endsWith("TypeScript!")); // Output: true
console.log(str4.endsWith("Hello")); // Output: false   

console.log("9---------replace(oldSubstring, newSubstring) – Replace a substring with another substring---------");
let str6: string = "Hello, TypeScript!";
console.log(str6.replace("TypeScript", "JavaScript")); // Output: Hello, JavaScript!

console.log("10---------split(separator) – Split a string into an array of substrings---------");
let str7: string = "Hello, TypeScript!";
console.log(str7.split(", ")); // Output: [ 'Hello', 'TypeScript!' ]

let str8: string = "abc@gmail.com,xyzabc";
let arr: string[] = str8.split(",");
console.log(arr[0]); // Output: 'abc@gmail.com'
console.log(arr[1]); // Output: 'xyzabc'

console.log("11---------trim() – Remove whitespace from both ends of a string---------");
let str9: string = "   Hello, TypeScript!   ";
console.log(str9.trim()); // Output: "Hello, TypeScript!"

console.log("12---------trimStart() – Remove whitespace from the start of a string---------");
let str10: string = "   Hello, TypeScript!   ";
console.log(str10.trimStart()); // Output: "Hello, TypeScript!   "

console.log("13---------trimEnd() – Remove whitespace from the end of a string---------");
let str11: string = "   Hello, TypeScript!   ";
console.log(str11.trimEnd()); // Output: "   Hello, TypeScript!"

console.log("14---------concat() – Concatenate two or more strings---------");
let str12: string = "Hello, ";
let str13: string = "TypeScript!";
console.log(str12.concat(str13)); // Output: Hello, TypeScript!

let str14: string = "Hello, ";
let str15: string = "TypeScript!";
let str16: string = " How are you?";
console.log(str14.concat(str15, str16)); // Output: Hello, TypeScript! How are you?


console.log("15---------String Immutability---------");
let str17: string = "Hello, TypeScript!";
let modified = str17.concat(", World!");
console.log(str17); // Output: Hello, TypeScript!
console.log(modified); // Output: Hello, TypeScript!, World!



console.log("16---------Multi-line Strings---------");
//Using backticks allows strings to span multiple lines:
let multiLine : string = `Line one
Line two
Line three`;

console.log(multiLine);