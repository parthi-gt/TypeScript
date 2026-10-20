// Object
/*
Group of properties and behaviors
Contain variables and methods
Collection of key-value pairs

properties means variables
Behaviors means methods (method means same as function)


1.Using "Object" type - directly define the values for variables and methods
2.inline type object - we also define the datatypes of the keys and values in the object
3.using type alias - we can define the type of the object and then use it to create multiple objects of the same type
4.Using the Classes - we can define the class and then create multiple objects of the same class

*/
// .method 1 - Using "Object" type - directly define the values for variables and methods
//1.Using "Object" type - directly define the values for variables and methods

console.log("----approach 1----");

let employee = {
  name: "John",
  salary: 50000,
  job: "Engineer", 
  getDetails: function () {
    return `${this.name} is a ${this.job} earning ${this.salary}`;
  },
};
console.log(employee.getDetails());

/*
let-->Keyword used to declare a variable that can be reassigned later.
employee-->Variable name that holds the object representing an employee.
=-->Assignment operator that assigns the object on the right to the variable on the left.
key---> name,Salary,job
value---> "John",50000,"Engineer"

*/

console.log("----approach 2----");

let employee1 = {
  name: "Jack",
  salary: 60000,
  job: "IT",
  getDetails: function () {
    console.log(this.name, this.salary, this.job);
  },
};
employee1.getDetails();


// accessing object - approach by using bracket notation


let employee3 = {
  name: "Sam",
  salary: 80000,
  job: "Testing",
  getDetails: function () {
    console.log(employee3["name"], employee3["salary"], employee3["job"]);
  },
};
employee3.getDetails();


//to modify the object we can use dot notation and bracket notation

employee3.name = "Vijay"; // Dot notation
console.log(employee3.getDetails()); // ----> updated


// Basic, Non-Reusability, Recommended for Small,Quick Object


//2. Inline Type Object - we also define the datatypes of the keys and values in the object

console.log("----approach 3----");

let student: { name: string; age: number; course: string; getDetails: () => string } = {
  name: "John",
  age: 20,
  course: "Computer Science",
  getDetails: function () {
    return `${this.name} is ${this.age} years old and is studying ${this.course}`;
  }
};
console.log(student.name, student.age, student.course);
console.log(student.getDetails());


//Using type aliases

type Product = {
  name: string;
  price: number;
  getInfo: () => string;
};

let book1: Product = { name: "TS Guide", price: 500, getInfo: () => "Book Info" };
let book2: Product = { name: "JS Guide", price: 400, getInfo: () => "Book Info" };
console.log(book1, book2);

type TestUser = {
  username: string;
  password: string;
  role: "Admin" | "Standard" | "Guest";
};

const user1: TestUser = { username: "admin@qa.com", password: "Pass@123", role: "Admin" };
const user2: TestUser = { username: "guest@qa.com", password: "Pass@456", role: "Guest" };
console.log(user1, user2);

// Intersection Types
type Personal = { firstName: string; lastName: string };
type Contact = { email: string; phone: string };

type Candidate = Personal & Contact & {
  getContactInfo: () => string;
};

const candidate1: Candidate = {
  firstName: "Vijay",
  lastName: "S",
  email: "abc@xyz.com",
  phone: "1234567890",
  getContactInfo: function () {
    return `${this.firstName} can be reached at ${this.email}`;
  },
};
console.log(candidate1.getContactInfo());

console.log("----Using Classes----");


class Person {
  constructor(public ssn: string, public firstName: string, public lastName: string) {}

  getFullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  getDetails(): string {
    return `SSN: ${this.ssn}, Name: ${this.getFullName()}`;
  }
}

let person1 = new Person("123", "John", "Doe");
console.log(person1.getDetails());



/*

**class Person {

class is a keyword that starts a blueprint definition.
Person is the name of that blueprint

constructor is a special method that runs automatically the moment someone creates a new Person object.
It's where the object gets set up.

It takes 3 parameters: ssn, firstName, lastName — each typed as string.

**constructor(public ssn: string, public firstName: string, public lastName: string) {}
Creates a property called ssn on the object.
Copies the incoming value into it, automatically — equivalent to writing this manually:


//
constructor(ssn: string, firstName: string, lastName: string) {
       this.ssn = ssn;
       this.firstName = firstName;
       this.lastName = lastName;
     }
//

{} — the constructor body is empty because the public shorthand already did the assignment work for us.


getFullName() & getDetails() is a method — a function that lives on the class and will be available on every Person object.


Creating an actual object

let person1 = new Person("123", "John", "Doe");

Calling a method and printing the result

console.log(person1.getDetails());

*/