/**
 * ============================================================================
 * TypeScript Objects — Runnable Demo WITH Step-by-Step Explanations
 * Companion file to "TypeScript_Objects_Study_Notes.pdf / .md"
 * ============================================================================
 *
 * HOW TO RUN THIS FILE:
 *   Option A (recommended for beginners — compile, then run):
 *     1) npm install -g typescript
 *     2) tsc typescript-objects-demo.ts --outDir dist
 *     3) node dist/typescript-objects-demo.js
 *
 *   Option B (run directly, needs ts-node):
 *     1) npm install -g typescript ts-node
 *     2) ts-node typescript-objects-demo.ts
 *
 * HOW TO READ THIS FILE:
 *   - Every section below is numbered exactly like the study notes PDF.
 *   - Above each code block, you'll find "STEP 1, STEP 2, ..." comments
 *     explaining what EVERY line does, in plain English.
 *   - Lines that would cause a COMPILE ERROR (used to PROVE a concept) are
 *     commented out with "// ❌". Uncomment them ONE AT A TIME, save, and
 *     re-run `tsc` to see the exact error TypeScript gives you. This is the
 *     best way to build real understanding — see the error with your own eyes.
 *   - console.log() lines are there so you can literally SEE the result of
 *     each concept when you run the file, instead of just reading about it.
 */

// A small helper just to print a readable divider between sections when running.
function section(title: string) {
  console.log("\n" + "=".repeat(60));
  console.log(title);
  console.log("=".repeat(60));
}


// ============================================================================
// SECTION 1 — WHAT IS AN OBJECT?
// ============================================================================
section("1. WHAT IS AN OBJECT?");

/**
 * STEP 1: `let employee = {...}` declares a variable named `employee` and
 *          assigns it an OBJECT — a collection of key-value pairs wrapped
 *          in curly braces { }.
 *
 * STEP 2: Inside the object, `name`, `salary`, and `job` are PROPERTIES.
 *          A property stores DATA. Each property is written as:
 *              key : value
 *          e.g. `name: "John"` means the property `name` holds the text "John".
 *
 * STEP 3: `getDetails` is a METHOD — a property whose VALUE is a function.
 *          Methods store BEHAVIOR (something the object can DO), not data.
 *
 * STEP 4: Inside `getDetails`, the keyword `this` refers to "whichever
 *          object called this method". Since we call `employee.getDetails()`,
 *          `this` becomes `employee`, so `this.name` reads `employee.name`.
 *
 * STEP 5: The backticks ` ` ` around the return value make this a TEMPLATE
 *          LITERAL — it lets us insert variable values directly into the
 *          string using ${...}, instead of joining strings manually with +.
 */
let employee = {
  name: "John",
  salary: 50000,
  job: "Engineer",
  getDetails: function () {
    return `${this.name} is a ${this.job} earning ${this.salary}`;
  },
};

// STEP 6: Calling the method actually RUNS the function and gives us the string.
console.log(employee.getDetails());

/**
 * ⚠️ COMMON BUG — Arrow functions and `this`
 *
 * If you write `getDetails` as an ARROW FUNCTION instead of a regular
 * `function`, `this` will NOT refer to the object anymore. Arrow functions
 * borrow `this` from the code AROUND them, not from whoever calls the method.
 * Uncomment the next block to see `this.name` come back as `undefined`:
 */
// const badEmployee = {
//   name: "John",
//   getDetails: () => `${this.name}`, // ❌ `this` here is NOT badEmployee
// };
// console.log(badEmployee.getDetails()); // prints "undefined" — the bug in action


// ============================================================================
// SECTION 2 — ACCESSING AND MODIFYING PROPERTIES
// ============================================================================
section("2. ACCESSING AND MODIFYING PROPERTIES");

/**
 * STEP 1: DOT NOTATION — `employee.name` is the standard, clean way to
 *          read a property. Use this whenever the property name is a normal
 *          word (no spaces, doesn't start with a number).
 *
 * STEP 2: BRACKET NOTATION — `employee["name"]` does the exact same thing,
 *          but is written as a string inside square brackets. You NEED this
 *          form when the property name is stored in a variable, or contains
 *          spaces/special characters (e.g. employee["first name"]).
 */
console.log("Dot notation:", employee.name);
console.log("Bracket notation:", employee["name"]);

/**
 * STEP 3: MODIFYING a property — simply assign a new value with `=`.
 *          This changes the property DIRECTLY on the existing object —
 *          it does not create a new object.
 */
employee.job = "Manager";
console.log("After modifying job:", employee.job);

/**
 * STEP 4: OBJECTS ARE MUTABLE (this is the big concept in this section).
 *          `let a = employee;` does NOT make a copy of the object. Instead,
 *          `a` now points to the SAME object in memory as `employee`.
 *
 * STEP 5: When we change `a.job`, we are changing the ONE shared object —
 *          so `employee.job` shows the new value too, even though we never
 *          touched `employee` directly. This is the opposite of how STRINGS
 *          behave (strings are immutable — every string operation returns
 *          a brand new string and never touches the original).
 */
let a = employee;
a.job = "Director";
console.log("employee.job after changing via `a`:", employee.job); // "Director" — proof of shared reference!


// ============================================================================
// SECTION 3 — METHOD 1: THE `object` TYPE (weakest typing)
// ============================================================================
section("3. METHOD 1 — `object` TYPE (weak typing)");

/**
 * STEP 1: `carObj: object` tells TypeScript "this variable holds SOME kind
 *          of object" — but gives NO information about which properties
 *          exist inside it.
 *
 * STEP 2: Because of that missing detail, TypeScript will REFUSE to let you
 *          read `carObj.brand` — even though `brand` clearly exists at
 *          runtime. TypeScript blocks it purely because the TYPE doesn't
 *          declare it. This is the entire limitation of using `object`.
 */
let carObj: object = {
  brand: "Toyota",
  model: "Corolla",
  year: 2023,
};
console.log("Whole object (allowed):", carObj); // ✅ fine — not accessing a specific property
// ❌ Uncomment the next line to see the compile error for yourself:
// console.log(carObj.brand);

/**
 * STEP 3: `any` is the OPPOSITE extreme from `object`. Where `object` blocks
 *          too much, `any` blocks NOTHING — it turns OFF type checking
 *          completely for that variable.
 *
 * STEP 4: `product.title` now works fine, because TypeScript isn't checking
 *          anything about `product` anymore.
 *
 * STEP 5: But this is DANGEROUS: `product.title = 123` assigns a NUMBER to
 *          what was originally a string ("Keyboard"), and TypeScript allows
 *          it without complaint. This is exactly the kind of mistake types
 *          are supposed to catch — which is why `any` should be avoided.
 */
let product: any = { title: "Keyboard", price: 1500 };
console.log("any allows access:", product.title);
product.title = 123; // ⚠️ allowed, but WRONG — no safety net with `any`
console.log("any allows wrong type too (no error):", product.title);


// ============================================================================
// SECTION 4 — METHOD 2: INLINE TYPE
// ============================================================================
section("4. METHOD 2 — INLINE TYPE");

/**
 * STEP 1: Everything between `student:` and the `=` sign is the TYPE,
 *          written directly ("inline") instead of being given a separate name.
 *          It lists every property the object MUST have, and its exact type:
 *              name: string   → must always be text
 *              age: number    → must always be a number
 *              grade: string  → must always be text
 *              getSummary: () => string → must be a function returning a string
 *
 * STEP 2: The object after `=` is checked against that type. If you left
 *          out a property, or gave the wrong type, TypeScript would error
 *          immediately — before the code even runs.
 *
 * STEP 3: Because this type isn't given a name, you can't reuse it for a
 *          second student object — you'd have to write the whole shape again.
 *          (Method 3, Type Aliases, solves exactly this problem.)
 */
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

/**
 * STEP 4: `priority: "High" | "Medium" | "Low"` is a STRING LITERAL UNION
 *          TYPE. The `|` symbol means "OR" — so `priority` can ONLY ever be
 *          exactly one of these 3 exact text values, nothing else. If you
 *          typed `priority: "Urgent"`, TypeScript would reject it because
 *          "Urgent" isn't one of the allowed options.
 */
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

/**
 * STEP 5: `browserConfig.timeout = 60000` is ALLOWED because 60000 is a
 *          valid `number`, matching what the type declared.
 *
 * STEP 6: `browserConfig.timeout = "60s"` would FAIL to compile, because
 *          "60s" is a STRING, and the type says `timeout` must always be a
 *          `number`. This is the entire point of typing objects: catching
 *          this exact kind of mistake before the program ever runs.
 */
let browserConfig: {
  browserName: string;
  headless: boolean;
  timeout: number;
} = {
  browserName: "Chromium",
  headless: false,
  timeout: 30000,
};
browserConfig.timeout = 60000; // ✅ allowed — matches type `number`
// ❌ Uncomment to see the compile error (string assigned where number is required):
// browserConfig.timeout = "60s";
console.log("Browser config:", browserConfig);


// ============================================================================
// SECTION 5 — METHOD 3: TYPE ALIASES (+ INTERSECTION TYPES)
// ============================================================================
section("5. METHOD 3 — TYPE ALIASES (+ Intersection Types)");

/**
 * STEP 1: `type Product = {...}` creates a NAMED, REUSABLE type. Think of
 *          it as defining a stamp/mold ONCE, separate from any object.
 *
 * STEP 2: `book1: Product` and `book2: Product` BOTH reuse the SAME mold —
 *          we never had to retype the shape a second time. This directly
 *          solves the "no reuse" limitation from Method 2 (Inline Type).
 *
 * STEP 3: If you later add a new required field to the `Product` type
 *          (e.g. `category: string`), EVERY object typed as `Product`
 *          (book1, book2, and any future ones) will immediately show a
 *          compile error until you add that field to them too — keeping
 *          every object automatically in sync.
 */
type Product = {
  name: string;
  price: number;
  getInfo: () => string;
};

let book1: Product = { name: "TS Guide", price: 500, getInfo: () => "Book Info" };
let book2: Product = { name: "JS Guide", price: 400, getInfo: () => "Book Info" };
console.log(book1, book2);

/**
 * STEP 4: Same pattern applied to test automation data — one `TestUser`
 *          type, reused for as many test users as you need. The `role`
 *          field is again restricted to 3 exact values using a union type,
 *          just like `priority` in Section 4.
 */
type TestUser = {
  username: string;
  password: string;
  role: "Admin" | "Standard" | "Guest";
};

const user1: TestUser = { username: "admin@qa.com", password: "Pass@123", role: "Admin" };
const user2: TestUser = { username: "guest@qa.com", password: "Pass@456", role: "Guest" };
console.log(user1, user2);

/**
 * STEP 5: INTERSECTION TYPES — the `&` symbol MERGES multiple types into
 *          one combined type. Here, `Candidate` must satisfy ALL THREE:
 *              - everything in `Personal` (firstName, lastName)
 *              - everything in `Contact` (email, phone)
 *              - the extra `getContactInfo` method defined right here
 *
 * STEP 6: This is different from the UNION operator `|` (which means
 *          "EITHER this type OR that type"). Intersection `&` means
 *          "ALL of these types combined into one."
 *
 * STEP 7: `candidate1` must include every single property from all three
 *          merged pieces — miss one, and TypeScript tells you exactly
 *          which property is missing.
 */
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


// ============================================================================
// SECTION 6 — METHOD 4: CLASSES
// ============================================================================
section("6. METHOD 4 — CLASSES");

/**
 * STEP 1: `class Person` is a BLUEPRINT, not an object itself. No actual
 *          object exists yet — this just describes what every `Person`
 *          object WILL look like and be able to do.
 *
 * STEP 2: The `constructor` is a special method that runs AUTOMATICALLY
 *          the moment a new object is created from this class.
 *
 * STEP 3: `public ssn: string` inside the constructor parameters is
 *          TypeScript SHORTHAND. Writing `public` here does TWO things at
 *          once:
 *              (a) creates a property called `ssn` on the object
 *              (b) assigns the incoming parameter value to it
 *          Without this shorthand, you'd have to write it manually:
 *              constructor(ssn: string) { this.ssn = ssn; }
 *
 * STEP 4: `getFullName()` and `getDetails()` are METHODS attached to the
 *          class. EVERY object created from `Person` automatically has
 *          access to both — you never redefine them per object.
 *
 * STEP 5: `new Person("123", "John", "Doe")` — the `new` keyword is what
 *          ACTUALLY builds the object, running the constructor with these
 *          3 argument values in order.
 */
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

/**
 * STEP 6: A second, unrelated class — proving the SAME pattern works for
 *          any real-world entity, not just people.
 *
 * STEP 7: `rect1` and `rect2` are TWO SEPARATE objects, each created with
 *          its OWN `width` and `height`. Changing `rect1.width` will NEVER
 *          affect `rect2.width` — unlike Section 2, where `a` and `employee`
 *          pointed to the SAME object. Here, `new Rectangle(...)` was called
 *          TWICE, building two independent objects.
 *
 * STEP 8: Both objects share the SAME method code (`getArea`, `getPerimeter`)
 *          defined once on the class — this is the core benefit of classes:
 *          write the logic ONCE, reuse it on unlimited objects.
 */
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


// ============================================================================
// SECTION 7 — CLASSES WITH ACCESS MODIFIERS (Playwright-style Page Object)
// ============================================================================
section("7. CLASS WITH ACCESS MODIFIERS — Playwright-style Page Object");

/**
 * STEP 1: This is a small STAND-IN for Playwright's real `Page` object, so
 *          this file can run on its own WITHOUT needing the actual
 *          `playwright` npm package installed. In your real Playwright
 *          project, you would import the real `Page` type instead:
 *              import { Page } from "@playwright/test";
 */
class MockPage {
  async fill(selector: string, value: string) {
    console.log(`  [page.fill] ${selector} -> "${value}"`);
  }
  async click(selector: string) {
    console.log(`  [page.click] ${selector}`);
  }
}

/**
 * STEP 2: `private usernameField` — the `private` keyword means this
 *          property can ONLY be read or changed from CODE INSIDE this exact
 *          class. Trying `loginPage.usernameField` from OUTSIDE the class
 *          will not compile.
 *
 * STEP 3: `protected password` — similar to `private`, but ALSO allows
 *          access from any SUBCLASS that extends `LoginPage` later
 *          (e.g. `class AdminLoginPage extends LoginPage {}` could still
 *          use `this.password` inside itself).
 *
 * STEP 4: `public loginButton` — `public` is the DEFAULT visibility in
 *          TypeScript, even if you don't type the word. Accessible from
 *          anywhere, inside or outside the class.
 *
 * STEP 5: `constructor(private page: MockPage) {}` — marking a constructor
 *          PARAMETER as `private` does two things at once (just like Person
 *          did with `public` in Section 6): it stores `page` as a private
 *          property on the object, AND hides it from anything outside the class.
 *
 * STEP 6: Inside `login()`, `this.page.fill(...)` and `this.page.click(...)`
 *          are ALLOWED because we're calling them from CODE INSIDE the same
 *          class — private/protected restrictions only block access from
 *          OUTSIDE the class, never from within it.
 *
 * STEP 7: This exact shape — PRIVATE locators + PUBLIC action methods — is
 *          precisely the PAGE OBJECT MODEL pattern used in real Playwright
 *          automation frameworks. Internal details (locators/selectors) stay
 *          hidden; only the actions (like `login()`) are exposed for your
 *          test files to call.
 */
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
  // STEP 8: Create the mock browser page, then create the LoginPage object,
  //          passing the mock page into its constructor (this becomes `this.page`).
  const mockPage = new MockPage();
  const loginPage = new LoginPage(mockPage);

  // STEP 9: `loginButton` is public, so this line works fine from OUTSIDE the class.
  console.log("loginButton (public, accessible):", loginPage.loginButton);

  // ❌ Uncomment the next line to see the compile error — `usernameField` is
  //     private, so TypeScript blocks access to it from outside the class:
  // console.log(loginPage.usernameField);

  // STEP 10: Calling the public `login()` method — internally, it uses the
  //           PRIVATE locators to perform the fill/click actions, exactly
  //           like a real Playwright test file would call `loginPage.login(...)`
  //           without ever needing to know the actual selector strings.
  await loginPage.login("admin@qa.com", "Secure@123");
}


// ============================================================================
// SECTION 8 — RUN EVERYTHING
// ============================================================================
section("8. SUMMARY — RUNNING THE FULL DEMO");

/**
 * STEP 1: `runLoginDemo()` is an `async` function, so calling it returns a
 *          PROMISE. We use `.then(...)` to run one final message only AFTER
 *          the login demo has fully finished (including its internal
 *          `await` calls for fill/click).
 */
runLoginDemo().then(() => {
  console.log("\nAll sections executed successfully. ✅");
});




// A constructor is a special method inside a class that runs automatically — 
// exactly once — the moment you create a new object from that class using the new keyword. 
// Its job is to set up (initialize) the object's starting data.