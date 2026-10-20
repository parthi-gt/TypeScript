//switch-case
/*
• The switch statement allows testing a variable against multiple values (case). 
• If a match is found, that case block executes. The break statement stops execution after a match. 
• The default case runs if no match is found. 
*/

/*
Syntax: 
switch (expression) { 
    case value1: 
        // Code for case value1 
        break; 
    case value2: 
        // Code for case value2 
        break; 
    case value3: 
        // Code for case value3 
        break; 
    default: 
        // Code to execute if no case matches 
} 
*/


let day: number = 13; 
switch (day) { 
    case 1: 
        console.log("Monday"); 
        break; 
    case 2: 
        console.log("Tuesday"); 
        break; 
    case 3: 
        console.log("Wednesday"); 
        break; 
    case 4: 
        console.log("Thursday"); 
        break; 
    default: 
        console.log("Invalid day"); 
} 


Example:2
//Switch statement with include an expression in the case statement

let num: number = 10;
switch (true) {
    case (num > 0):
        console.log("Positive number");
        break;
    case (num < 0):
        console.log("Negative number");
        break;
    default:
        console.log("Zero");
}

//Example:3
// Switch statement with string values
let fruit: string = "A";
switch (fruit) {
    case "Apple":
        console.log("You selected an apple.");
        break;
    case "Banana":
        console.log("You selected a banana.");
        break;
    case "Orange":
        console.log("You selected an orange.");
        break;
    default:
        console.log("Invalid fruit.");
}

// Example:4

let x: number = 15, y:number = 5;
switch (x - y) 
{
    case 5:
        console.log("The sum is 5");
        break;
    case 10:
        console.log("The sum is 10");
        break;
    default:
        console.log("The sum is neither 5 nor 10");
}