/*
Conditional Statements in TypeScript 
 
Conditional statements in TypeScript help in decision-making based on conditions.  
Below are the main types: 
 
1) if Statement 
• The if statement executes a block of code only if a specified condition is true. 
• If the condition evaluates to false, the code inside the if block is skipped. 

Syntax: 
if (condition) 
{ 
    // Code to execute if condition is true 
} 

Example: 
let age: number = 18; 
if (age >= 18) { 
    console.log("You are eligible to vote."); 
}

2) if-else Statement 
• The if-else statement executes one block of code if the condition is true, and another 
block if the condition is false. 
Syntax: 
if (condition) 
{ 
    // Code to execute if condition is true 
} 
else 
{ 
    // Code to execute if condition is false 
} 
Example: 
let num: number = 10; 
if (num % 2 === 0) { 
    console.log("Even number"); 
} else { 
    console.log("Odd number"); 
} 

3) Nested if-else (if-else if) Statement 
• This is used when multiple conditions need to be checked sequentially. 
• The first true condition is executed, and the rest are skipped. 
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
Example: 
let marks: number = 85; 
if (marks >= 90) { 
    console.log("Grade: A"); 
} else if (marks >= 75) { 
    console.log("Grade: B"); 
} else if (marks >= 50) { 
    console.log("Grade: C"); 
} else { 
    console.log("Grade: F"); 
}

4) switch-case Statement 
• The switch statement allows testing a variable against multiple values (case). 
• If a match is found, that case block executes. The break statement stops execution 
after a match. 
• The default case runs if no match is found. 
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
Example: 
let day: number = 3; 
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

*/