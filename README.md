### Introduction to TypeScript

* **TypeScript** is an open-source programming language developed by Anders Hejlsberg at Microsoft in **2012**.
* TypeScript is **not a new programming language**; it is a **superset of JavaScript**, which means it adds additional features on top of JavaScript, such as :
  * Type annotations
  * Compile-time error checking
  * Better tooling support
  * Interfaces
  * Generics and more
* TypeScript is **not executed directly** by browsers or runtime environments.
* Instead, it is **compiled ( transpiled ) into plain JavaScript ( Vanilla JavaScript )**, which can run in any JavaScript environment.
* TypeScript helps developers write more **robust, maintainable, and error-free code**, especially for **large-scale applications**.

### Key Features of TypeScript

#### 1. Static Typing

* TypeScript allows developers to define **types** for variables, function parameters, and return values at compile time.
* This helps catch errors **during development** rather than at runtime.
* For example, if a variable is defined as a `number`, assigning a `string` to it will produce a compile-time error.
* This improves **code reliability** and maintainability.

#### 2. Superset of JavaScript

* TypeScript is a **superset of JavaScript**, which means all valid JavaScript code is also valid TypeScript code.
* Developers can gradually adopt TypeScript in existing JavaScript projects without rewriting the entire codebase.

#### 3. Type Inference

* Even when types are not explicitly defined, TypeScript can automatically **infer** the type based on the assigned value.
* This reduces the need for extra type annotations while still providing type safety.

#### 4. Interfaces and Type Aliases

* TypeScript provides **Interfaces** and **Type Aliases** to define the structure of objects and custom types.
* This helps maintain consistency across an application and ensures that objects follow the required structure.

#### 5. Object-Oriented Programming ( OOP ) Support

* TypeScript supports OOP concepts such as :
  * Classes
  * Inheritance
  * Encapsulation
  * Access Modifiers (`public`, `private`, `protected`)
* This makes it suitable for building **large-scale and enterprise-level applications**.

#### 6. Better Tooling and IntelliSense

* TypeScript provides excellent support for modern code editors with features such as :
  * Auto-completion
  * Compile-time error detection
  * IntelliSense ( smart code suggestions )
  * Refactoring support
* These features improve developer productivity and reduce bugs.

#### 7. Rich Ecosystem

* TypeScript fully supports JavaScript's ecosystem, including ES Modules.
* Developers can easily use existing JavaScript libraries and packages in TypeScript projects.
* Most popular libraries provide TypeScript type definitions for better development experience.

### Applications of TypeScript

#### 1. Web Application Development

* TypeScript is widely used for building **modern web applications**.
* Popular frameworks such as Angular, React, and Vue.js support TypeScript.

#### 2. Server-Side Development

* TypeScript can be used to build **RESTful APIs** and backend applications.
* It is commonly used with Node.js for scalable server-side development.

#### 3. Game Development

* TypeScript can be used to develop **browser-based and cross-platform games**.
* Its strong typing helps manage large and complex game codebases.

#### 4. Desktop Application Development

* TypeScript can be used to build **desktop applications** using frameworks such as Electron.
* Applications can run on Windows, macOS, and Linux.

#### 5. Hybrid Mobile Application Development

* TypeScript is commonly used in hybrid mobile app frameworks.
* It helps build cross-platform mobile applications that run on both Android and iOS from a single codebase.

### Installing TypeScript

```
npm install -g typescript
```

#### What is npm?

* **npm ( Node Package Manager )** is a **command-line tool ( CLI )** used to install, uninstall, update, and manage JavaScript packages and modules.

### Running a TypeScript File

* `node index.ts` → Generally not used in the traditional TypeScript workflow because Node.js executes JavaScript files.
* `tsc index.ts` → Compiles a TypeScript file into JavaScript.
* `ts-node index.ts` → Compiles and executes a TypeScript file directly.
* `tsc index.ts -w` → Watches TypeScript files and automatically recompiles them whenever changes are detected.

### Type Annotations in TypeScript

* **Type annotations** allow you to explicitly specify the **type of a variable, parameter, or return value**.
* They help TypeScript perform **compile-time type checking** and catch errors early.
* Type annotations improve **code readability, reliability, and maintainability**.

```
// Primitive Types
const username: string = "sandeepahirwar";
const userID: number = 1714510036;
const isActive: boolean = true;
const email: null = null;
const phone: undefined = undefined;

console.log("Username :", username);
console.log("User ID :", userID);
console.log("Is Active? :", isActive);
console.log("Email :", email);
console.log("Phone :", phone);

// Array
const array: string[] = ["HTML", "CSS", "JS"];
console.log("Array :", array);

// Tuple
const tuple: [number, string] = [1714510036, "Sandeep Ahirwar"];
console.log("Tuple :", tuple);

// Any
const random: any = "XYZ@123";
console.log("Random :", random);

// Unknown
const address: unknown = "Unknown";
console.log("Address :", address);

// Object
const fruit: { name: string; price: number } = {
  name: "Apple",
  price: 100,
};
console.log("Fruit :", fruit);

// Union Type
let ID: string | number = "17CSECS1005";
ID = 1714510036;
console.log("ID :", ID);

// Function
function greet(name: string): string {
  return `Hello, ${name}`;
}
console.log(greet("Sandeep Ahirwar"));

// Void
function display(message: string): void {
  console.log(message);
}
display("The Quick Brown Fox Jumps Over The Little Lazy Dog");

// Never
function throwError(message: string): never {
  throw new Error(message);
}
```

### Type Inference

* **Type Inference** is a feature in TypeScript that automatically determines the type of a variable based on its assigned value.
* It reduces the need for explicit type annotations.
* TypeScript uses the inferred type for compile-time type checking.
* This helps maintain type safety while writing less code.

```
// Primitive Types
const username = "sandeepahirwar";
const userID = 1714510036;
const isActive = true;
const email = null;
const phone = undefined;

console.log("Username :", username);
console.log("User ID :", userID);
console.log("Is Active? :", isActive);
console.log("Email :", email);
console.log("Phone :", phone);

// Array
const array = ["HTML", "CSS", "JS"];
console.log("Array :", array);

// Object
const fruit = {
  name: "Apple",
  price: 100,
};
console.log("Fruit :", fruit);

// Function
function greet(name: string) {
  return `Hello, ${name}`;
}
console.log(greet("Sandeep Ahirwar"));
```

### Operators in TypeScript

#### Arithmetic Operators

* The `+` operator can be used for both **numeric addition** and **string concatenation**.
* For `-`, `*`, `/`, `%`, and `**` operators, both operands must be of type **number**.

```
console.log(10 + "5");
console.log(10 + 5);
console.log(10 - 5);
console.log(10 * 5);
console.log(10 / 5);
console.log(10 % 5);
console.log(10 ** 5);
```

> * Assignment operators and shorthand assignment operators are the same as in JavaScript.

#### Relational Operators

* In relational operators, both operands should have the **same type**.

```
console.log(10 < 15);
console.log("10" < "15");
```

#### Logical Operators

* In logical operators, the first operand must be **`true`**, **`false`**, **`1`**, or **`0`** ( boolean-compatible values ).

```
console.log(1 && 5);
console.log(0 && 5);
console.log(true && 5);
console.log(false && 5);
```

> * **Bitwise operators**, **conditional ( ternary ) operators**, **increment (`++`)**, and **decrement (`--`)** operators work the same way as in JavaScript.

### Flow Control Statements and Loops

```
const n: number = 9;
console.log(n % 2 === 0 ? `${n} is an Even Number` : `${n} is an Odd Number`);
```

```
const number: number = 11;
if (number < 2) {
  console.log(`${number} is not a Prime Number`);
} else {
  let isPrime: boolean = true;
  for (let divisor = 2; divisor <= Math.sqrt(number); divisor++) {
    if (number % divisor === 0) {
      isPrime = false;
      break;
    }
  }
  if (isPrime) {
    console.log(`${number} is a Prime Number`);
  } else {
    console.log(`${number} is not a Prime Number`);
  }
}
```

### Functions

```
// Function Declaration
function greet(): void {
  console.log("From greet(), Good Morning!");
}
greet();

// Function with Parameters
function greetUser(firstName: string): void {
  console.log(`From greetUser(), Good Morning ${firstName}!`);
}
greetUser("Sandeep");

// Function with Return Type
function sum(A: number, B: number): number {
  return A + B;
}
console.log("From sum(), 9 + 11 =", sum(9, 11));

// Optional Parameters
function introduction(name: string, age?: number): void {
  console.log(`From introduction(), My name is ${name}.`);
}
introduction("Sandeep Ahirwar");

// Default Parameters
function welcome(name: string = "Friends"): void {
  console.log(`From welcome(), Welcome ${name}!`);
}
welcome();

// Arrow Function
const addition = (A: number, B: number): number => {
  return A + B;
};
console.log("From addition(), 9 + 11 =", addition(9, 11));

// Function Expression
const multiplication = function (A: number, B: number): number {
  return A * B;
};
console.log("From multiplication(), 9 * 11 =", multiplication(9, 11));

// Rest Parameters
function findTotal(...numbers: number[]): number {
  return numbers.reduce((total, number) => (total += number), 0);
}
console.log("From findTotal(), 1 + 2 + 3 + 4 + 5 =", findTotal(1, 2, 3, 4, 5));

// Anonymous Function
setTimeout(function () {
  console.log("From (), Executed!");
}, 2000);

// Recursive Function
function factorial(n: number): number {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}
console.log("From factorial(), 5! =", factorial(5));
```
