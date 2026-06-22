// Number Array
const numbers: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log("Number :", numbers);

// String Array
const fruits: string[] = ["Apple", "Banana", "Coconut", "Date"];
console.log("Fruits :", fruits);

// Boolean Array
const flags = [true, false];
console.log("Flags :", flags);

// Generic Array Syntax
const marks: Array<number> = [100, 200, 300];
console.log("Marks :", marks);

// Union Type Array
const values: (string | number)[] = [
  "PI",
  3.141592653589793,
  "E",
  2.718281828459045,
];
console.log("Values :", values);

const data: (string | number | boolean)[] = ["PI", 3.141592653589793, true];
console.log("Data :", data);

// Complex Union Type Array
const information: (string | number | boolean | number[])[] = [
  "PI",
  3.141592653589793,
  true,
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
];
console.log("Information :", information);
