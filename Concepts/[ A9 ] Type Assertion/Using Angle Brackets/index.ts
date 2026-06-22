var array: any = [false, true, 2, "three", 4, 5, "six", 7, 8, 9];
console.log(
  (<number[]>array).filter((n) => typeof n === "number" && n % 2 === 0),
);

var fruit: any = "Apple";
console.log((fruit as string).toLocaleUpperCase());
