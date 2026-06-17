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
