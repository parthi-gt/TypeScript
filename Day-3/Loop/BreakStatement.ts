
/*

The break statement stops the loop immediately when a condition is met.
Syntax:
for (initialization; condition; increment/decrement)
{
if (someCondition) 
{
break;
}
// Code to execute
}
*/

//Example:1
for (let i: number = 1; i <= 10; i++) 
    {
if (i == 5) 
    {
break; // Exits the loop when n is 5
}
console.log(i);
}

//Example:2

for(let j=1;j<=10;j++)
{
    console.log(j)
    if (j==5)
    {
        break;
    }
}
