//Super--->Keyword

/*
super()-->used to invoke immediate parent class constructor
super-->used to invoke immediate parent class method
super-->can not be used to invoke from parent class

*/


class parent
{

num:number=10;

constructor()
{
    console.log("This is a parent class constructor....")
}

display()
{
    console.log("This is display() method from parent class....")
}
}


class child extends parent

{
    num:number=20;

    constructor()
    {
super();
console.log("This is child class constructor....")
    }

    show()
    {
        console.log(this.num);
        console.log("This is child class method.......")
    }

    display()
    {
        super.display();
        console.log("This is display() method from child class...")
    }
}


//Object

let c1 = new child();
c1.show();
c1.display();
