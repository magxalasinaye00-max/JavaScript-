function sum(n) {
  if (typeof n !== 'number' || n % 1 !== 0) {
    return "The value passed is not a number";
  }

  let total = 0;
  for (let i = 0; i <= n; i++) {
    total += i;
  }
  return total;
}

console.log(sum(5));
console.log(sum("5"));
console.log(sum(3.5));

function factorial(num) {
  if (typeof num !== 'number' || num < 0 || num % 1 !== 0) {
    return "Please enter a positive integer.";
  }

  let result = 1;
  for (let i = num; i > 0; i--) {
    result *= i;
  }
  return result;
}


console.log(factorial(4));
console.log(factorial(0));

function funkyMath(a, b, c, d) {
  const args = arguments.length;

  if (args === 2) {
    return b - a;
  } else if (args === 3) {
    return a + b + c;
  } else if (args === 4) {
    return (a + b) / (c + d);
  } else {
    return "Please provide 2, 3, or 4 arguments only.";
  }
}

console.log(funkyMath(3, 10));
console.log(funkyMath(1, 2, 3));
console.log(funkyMath(8, 2, 3, 5)); 

let numbers = [1, 2, 33, 45, 6, 44];
let oddNumbers = [];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 !== 0) {
    oddNumbers.push(numbers[i]);
  }
}

oddNumbers.sort((a, b) => a - b);

console.log("Odd numbers:", oddNumbers); 

let me = {
  firstName: "Sinaye",
  lastName: "Magxala",
  age: 22,
  favouriteColour: "Blue",
  dreamCar: "Tesla"
};

me.favouriteFood = "pie";

delete me.age;

console.log(me);

