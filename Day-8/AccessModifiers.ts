/*
Public
Protected
Private

It will decide the scope of the property or scope of the method
*/

// Parent class
class Person {
  public name: string;
  protected age: number;
  private ssn: number;

  constructor(name: string, age: number, ssn: number) {
    this.name = name;
    this.age = age;
    this.ssn = ssn;
  }

  displayInfo() {
    console.log(this.name);
    console.log(this.age);
    console.log(this.ssn);
  }
}

// Child class
class Employee extends Person 
{
  private employeeID: number;

  constructor(name: string, age: number, ssn: number, employeeID: number) {
    super(name, age, ssn);
    this.employeeID = employeeID;
  }

  showEmployeeDetails() 
  {
    console.log(this.name);   // public -> accessible
    console.log(this.age);    // protected -> accessible in child
    console.log(this.ssn); // private -> not accessible here
    console.log(this.employeeID);
  }
}

let emp = new Employee("John", 30, 123, 123456);

emp.displayInfo();
emp.showEmployeeDetails();

console.log(emp.name); // public property