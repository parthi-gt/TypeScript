/**
 * TypeScript Objects — Runnable Demo
 * Companion file to "TypeScript_Objects_Study_Notes.pdf / .md"
 *
 * HOW TO RUN:
 *   1) Install once:   npm install -g typescript ts-node
 *   2) Run directly:   ts-node typescript-objects-demo.ts
 *      OR compile first: tsc typescript-objects-demo.ts && node typescript-objects-demo.js
 *
 * Each section below is numbered to match the study notes document.
 * Lines that would cause a COMPILE ERROR (used to prove a concept) are
 * commented out with "// ❌" — uncomment them one at a time to see TypeScript reject them.
 */

function section(title: string) {
  console.log("\n" + "=".repeat(60));
  console.log(title);
  console.log("=".repeat(60));
}

// ---------------------------------------------------------------
section("1. WHAT IS AN OBJECT?");
// ---------------------------------------------------------------

let employee = {
  name: "John",
  salary: 50000,
  job: "Engineer",
  getDetails: function () {
    return `${this.name} is a ${this.job} earning ${this.salary}`;
  },
};
console.log(employee.getDetails());
 
// ❌ Arrow-function pitfall (uncomment to see the bug — `this` is NOT the object):
// const badEmployee = {
//   name: "John",
//   getDetails: () => `${this.name}`, // `this` here is NOT badEmployee
// };


// ---------------------------------------------------------------
section("2. ACCESSING AND MODIFYING PROPERTIES");
// ---------------------------------------------------------------

console.log("Dot notation:", employee.name);
console.log("Bracket notation:", employee["name"]);

employee.job = "Manager";
console.log("After modifying job:", employee.job);

// Objects are mutable — two variables can point to the SAME object
let a = employee;
a.job = "Director";
console.log("employee.job after changing via `a`:", employee.job); // "Director" too!


// ---------------------------------------------------------------
section("3. METHOD 1 — `object` TYPE (weak typing)");
// ---------------------------------------------------------------

let carObj: object = {
  brand: "Toyota",
  model: "Corolla",
  year: 2023,
};
console.log("Whole object (allowed):", carObj);
// ❌ Property access blocked — uncomment to see the compile error:
// console.log(carObj.brand);

let product: any = { title: "Keyboard", price: 1500 };
console.log("any allows access:", product.title);
product.title = 123; // ⚠️ allowed by `any` — no safety net, generally avoid this
console.log("any allows wrong type too (no error):", product.title);


// ---------------------------------------------------------------
section("4. METHOD 2 — INLINE TYPE");
// ---------------------------------------------------------------

let student: {
  name: string;
  age: number;
  grade: string;
  getSummary: () => string;
} = {
  name: "Scott",
  age: 15,
  grade: "A",
  getSummary: function () {
    return `${this.name} is ${this.age} years old and scored grade ${this.grade}`;
  },
};
console.log(student.getSummary());

let testCase: {
  testId: string;
  priority: "High" | "Medium" | "Low";
  isAutomated: boolean;
} = {
  testId: "TC_101",
  priority: "High",
  isAutomated: true,
};
console.log("Test case:", testCase);

let browserConfig: {
  browserName: string;
  headless: boolean;
  timeout: number;
} = {
  browserName: "Chromium",
  headless: false,
  timeout: 30000,
};
browserConfig.timeout = 60000; // ✅ allowed — number
// ❌ Uncomment to see the compile error (string, not number):
// browserConfig.timeout = "60s";
console.log("Browser config:", browserConfig);


// ---------------------------------------------------------------
section("5. METHOD 3 — TYPE ALIASES (+ Intersection Types)");
// ---------------------------------------------------------------

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
  firstName: "Parthiban",
  lastName: "G",
  email: "parthibangt@hotmail.com",
  phone: "9894156385",
  getContactInfo: function () {
    return `${this.firstName} can be reached at ${this.email}`;
  },
};
console.log(candidate1.getContactInfo());


// ---------------------------------------------------------------
section("6. METHOD 4 — CLASSES");
// ---------------------------------------------------------------

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

class Rectangle {
  constructor(public width: number, public height: number) {}

  getArea(): number {
    return this.width * this.height;
  }

  getPerimeter(): number {
    return 2 * (this.width + this.height);
  }
}

let rect1 = new Rectangle(10, 5);
let rect2 = new Rectangle(20, 8);
console.log("rect1 area:", rect1.getArea());
console.log("rect2 perimeter:", rect2.getPerimeter());


// ---------------------------------------------------------------
section("7. CLASS WITH ACCESS MODIFIERS — Playwright-style Page Object");
// ---------------------------------------------------------------

// A minimal mock of Playwright's Page, so this file runs standalone
// without needing the real `playwright` package installed.
class MockPage {
  async fill(selector: string, value: string) {
    console.log(`  [page.fill] ${selector} -> "${value}"`);
  }
  async click(selector: string) {
    console.log(`  [page.click] ${selector}`);
  }
}

class LoginPage {
  private usernameField = "#username";
  protected password = "#password";
  public loginButton = "#loginBtn";

  constructor(private page: MockPage) {}

  async login(username: string, pass: string) {
    await this.page.fill(this.usernameField, username);
    await this.page.fill(this.password, pass);
    await this.page.click(this.loginButton);
  }
}

async function runLoginDemo() {
  const mockPage = new MockPage();
  const loginPage = new LoginPage(mockPage);

  console.log("loginButton (public, accessible):", loginPage.loginButton);
  // ❌ Uncomment to see the compile error (private, not accessible outside class):
  // console.log(loginPage.usernameField);

  await loginPage.login("admin@qa.com", "Secure@123");
}


// ---------------------------------------------------------------
section("8. SUMMARY — RUNNING THE FULL DEMO");
// ---------------------------------------------------------------

runLoginDemo().then(() => {
  console.log("\nAll sections executed successfully. ✅");
});