console.log("Lift Me LORD")

//************Scope**************************

{
    var num1=10;
    let num2=20;
    const num3=30;

    // this is the block scope only will get print
    console.log(num1);
    console.log(num2);
    console.log(num3);
}
{
    // these are all the outside the block scope will not get print
    // console.log(num1);
    // console.log(num2);
    // console.log(num3);
}

// Declaration / Value Assignment / Initialization

var x;
var x=40;
var x=99;
console.log(x);


let y;
y=50;
// let y=100; // this will give error because we cannot re-declare the variable with let keyword
console.log(y);


// const z;
// console.log(z); // this will give error because we cannot declare a variable with const keyword without initialization

//**********re-declaration***********/

var city= "New York";
var city= "Los Angeles";
console.log(city); // this will print Los Angeles because we can re-declare the variable with var keyword


let country= "USA";
// let country= "Canada"; // this will give error because we cannot re-declare the variable with let keyword
console.log(country);

const state= "California";
// const state= "Texas"; // this will give error because we cannot re-declare the variable with const keyword
console.log(state);

// **************Re-Initialization***********/

//var & let allowed re-initialization but const does not allow re-initialization

var age=35;
age=40;
console.log(age);

let salary=74000;
salary=99000;
console.log(salary);


const length= 10;
// length=20; // this will give error because we cannot re-initialize the variable with const keyword
console.log(length);    



