
/*
The continue statement skips the current iteration and moves to the next one.
Syntax:
for (initialization; condition; increment/decrement) {
if (someCondition) {
continue;
}
// Code to execute
}
*/

// //Example:1
for (let i: number = 1; i <= 5; i++) {
if (i == 3) {
continue; // Skips when i is 3
}
console.log(i);
}

//Example:2

for(let j=1;j<=10;j++)
{
    if(j==5)
    {
        continue;
    }
    console.log(j)
}

// //Example:3

for(let j=1;j<=10;j++)
{
    if(j==3 || j==5 || j==10)
    {
        continue;
    }
    console.log(j)
}
