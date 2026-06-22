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
