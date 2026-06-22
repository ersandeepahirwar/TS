const n: number = 9;
console.log(n % 2 === 0 ? `${n} is an Even Number` : `${n} is an Odd Number`);

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
