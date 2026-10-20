
// Always executes at least once before checking the condition

/*
Syntax:
do 
{
// Code to execute
} 
while (condition);
*/

//Example:1

let i: number = 10;
do
{
    console.log(i);
    i++;
} 
while (i <= 5);


  console.log("---------print 1 to 10-------------");

//Example:2
//print 1 to 10

let j: number = 1;
do {
    console.log(j);
    j++;
} 
while (j <= 10);  

console.log("---------print even numbers from 10 to 1-------------");


//Example:3
//print even numbers from 10 to 1

let k: number = 10;
do {
    console.log(k);
    k--;
}
while (k >= 1);  
