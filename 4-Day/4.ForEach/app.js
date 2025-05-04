const colors = ["red", "blue", "orange", "green"];

colors.forEach((color) => console.log(color));

// challenge

const numbers = [1, 2, 3, 4, 5, 6];
let sum = 0;

function adder(number) {
  sum += number;
}

numbers.forEach(adder);
console.log(sum);
