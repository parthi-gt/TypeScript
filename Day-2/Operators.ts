// keep this file's declarations scoped to itself, not the global script scope

//Arithmetic Operators

let a: number = 2;
let b: number = 3;

console.log(a + b);
console.log(b - a);
console.log(a * b);
console.log(b / a);
console.log(b % a);
console.log(a ** b); //2*2*2 = 8

//Assignment Operators

a = 10;
b = 5;

console.log(a += b); // a = a+b   10+5 = 15
console.log(a -= b); // a = a-b   15-5 = 10
console.log(a *= b); // a = a*b   10*5 = 50
console.log(a /= b); // a = a/b   50/5 = 10
console.log(a %= b); // a = a%b   10%5 = 0

//Relational / Comparison Operators

a = 10;
b = 20;

console.log(a > b);
console.log(a < b);
console.log(a >= b);
console.log(a <= b);
console.log(a == b);
console.log(a != b);

//== vs ===

let c: number | string = 10;
let d: number | string = "10";
console.log(c == d);  // true (type coercion)
console.log(c === d); // false (no type coercion)
console.log(c !== d); // true (no type coercion)

//Logical Operators

// B1     B2     &&                           ||     !B1
// true   true   true (both should be true)   true   false
// true   false  false                        true   false
// false  true   false                        true   true
// false  false  false                        false  true

let b1: boolean = true;
let b2: boolean = false;

console.log(b1 && b2); // false
console.log(b1 || b2); // true
console.log(!b1);
console.log(!b2);

//Ternary Operator
let age = 16;
let result = age >= 18 ? "Adult" : "Minor";
console.log(result); // "Adult"

//Increment & Decrement Operators

let x: number = 10;
x++; // x = x+1
console.log(x); // 11

let y: number = 20;
y--;
console.log(y); // 19

a = 10;
let res: number = a++;
console.log(res); // 10
console.log(a); // 11

x = 10;
let res2: number = x--;
console.log(res2);
console.log(x);

y = 20;
let res1: number = --y;
console.log(res1);
console.log(y);
