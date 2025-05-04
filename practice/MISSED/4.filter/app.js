// filter => creates a array by filtering out elements

// let numbers = [1, 2, 3, 4, 5, 6, 7];

// let oddNums = numbers.filter(checkOdd);
// console.log(oddNums);

// function checkOdd(element) {
//   return element % 2 != 0;
// }

// example 2

let ages = [21, 23, 12, 32, 15, 21, 18];
let adult = ages.filter(adultChecker);

console.log(adult);

function adultChecker(age) {
  return age >= 18;
}
