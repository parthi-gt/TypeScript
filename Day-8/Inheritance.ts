// Creating new class (Parent Class)


// Creating new class (Parent Class)

class Car {
  name: string;
  color: string;
  model: string;

  constructor(name: string, color: string, model: string) 
  {
    this.name = name;
    this.color = color;
    this.model = model;
  }

  // Method
  start() 
  {
    console.log("car started....");
  }

  stop() 
  {
    console.log("car stopped...");
  }

  displayInformation() 
  {
    console.log(`Name:${this.name}, Color:${this.color}, Model: ${this.model}`);
  }
}

// Child Class
class Honda extends Car 
{
  year: number;

  constructor(name: string, color: string, model: string, year: number) {
    super(name, color, model);
    this.year = year;
  }

  // method overriding
  start() 
  {
    console.log("Honda Started");
  }

  yom() 
  {
    console.log(
      `Name:${this.name}, Color:${this.color}, Model: ${this.model}, YOM: ${this.year}`
    );
  }
}

// Child Class -- Maruthi
class Maruthi extends Car 
{
  year: number;

  constructor(name: string, color: string, model: string, year: number) 
  {
    super(name, color, model);
    this.year = year;
  }

  // Method overriding
  start() 
  {
    console.log("Maruthi Started.....");
  }

  yom() 
  {
    console.log(
      `Name:${this.name}, Color:${this.color}, Model: ${this.model}, YOM: ${this.year}`
    );
  }
}

// Usage ---> create an object
let honda = new Honda("Honda", "Black", "HondaCity", 2027);

console.log(honda.color); // black
console.log(honda.model);  // hondacity
console.log(honda.year);  //2027

honda.start();  //Honda Started
honda.stop();  //car stopped...
honda.displayInformation(); //3
honda.yom(); //2027


// create Maruthi Object

let maruthi = new Maruthi ("Maruthi","Blue","Suzuki",2027)

maruthi.start();

maruthi.displayInformation();

maruthi.stop();

maruthi.yom();



//Parent class variable is holding


let car:Car = new Honda ("Honda", "Black", "HondaCity", 2027);

car.displayInformation();
car.start(); 
car.yom;