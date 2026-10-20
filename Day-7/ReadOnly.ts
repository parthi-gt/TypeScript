// Read Only, Optional and Static Properties in TypeScript
/*
Class
1.Read Only property
2.Optional property
3.Static Variable

Class contain property and method

"readonly"-->Keyword
"?" Optional Property

-Class contains the properties constructor along with methods
-Creating a method which will display the data of the property
*/

class Student 
{
    readonly studentID : number ; // Read only property 
    name:string; // Regular property
    email? :string; // Optional property
    //schoolName : string;

//Constructor ---->Keyword

constructor(sid:number,sname:string,email?:string) //Parameter  and data
{
this.studentID=sid;
this.name=sname;
this.email=email;  // if you don't pass then it is undefined
}

//Method

displayinfo():void
{
    console.log("Student ID:", this.studentID);
    console.log("Student Name:", this.name);
if(this.email)
{
    console.log("Email:", this.email);
}
else
{
    console.log("Email is not provided");
}

}
}

//Usage 
//object for the class

let s1=new Student(101,"John");
let s2=new Student(102,"Jack","abc@wk.com");

//Display student info

s1.displayinfo();
s2.displayinfo();



// Try to modify the sid if s1 object


/*

read only property already assigned through the constructor
once assigned to the constructor
we can not modify the value
*/


// s1.studentID=1111;