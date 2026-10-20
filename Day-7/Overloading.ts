// Overloading

//Multiple signature but common implementation

class calculator

{
    constructor();
    constructor (a:number,b:number);

    constructor(a?:number,b?:number)

{
    if(a!==undefined && b!=undefined)
{
    console.log("sum of a&:",(a+b))
}
else
{
    console.log("default constructor called")
}
}

}

//usage

let calc1 = new calculator()
let calc2 = new calculator(10,20)




