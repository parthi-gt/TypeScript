
//numbers
let age : number = 25;
let price : number = 99.99;
let num : number = 1235479;

console.log(age);
console.log(price);
console.log(num);


//string    
let fn : string = "siva";
let ln : string = 'kumar';
console.log("hello",fn,ln);

//boolean
let isstudent : boolean = true;
console.log(isstudent);

//Null and undefined
let x : null = null;
let y : undefined = undefined;
console.log(x);
console.log(y);


let name1 : any = "siva";
name1 = 123;
name1 = true;
console.log(name1);

//union
let id : number | string | boolean = 22;
id = "hai";
id = true;
console.log(id);



//void
function sum () : void 
{
    console.log(10+20);
}
sum()


function sum1 () : number
{
    return 10+50;
}
let result = sum1();
console.log(result);


let p:number = 10,k:number = 20;
console.log(p+k);
