//  Nested if-else (if-else if) Statement

/*
• This is used when multiple conditions need to be checked sequentially. 
• The first true condition is executed, and the rest are skipped. 
*/

/*
Syntax: 
if (condition1) { 
    // Code for condition1 
} else if (condition2) { 
    // Code for condition2 
} else if (condition3) { 
    // Code for condition3 
} else { 
    // Code to execute if none of the conditions are true 
}
    */

/*
mark >= 90 => Grade A
mark >= 75 => Grade B
mark >= 50 => Grade C
Grade D
*/

let mark : number =100;
if (mark >= 90) 
{ 
    console.log("Grade: A"); 
} 
else if (mark >= 75) { 
    console.log("Grade: B"); 
} 
else if (mark >= 50) 
    { 
    console.log("Grade: C"); 
} 
else { 
    console.log("Grade: D");
}