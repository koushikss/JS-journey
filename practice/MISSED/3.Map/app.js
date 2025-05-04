//.map() => accepts a callback and applies to each element of an array , then return a new array

// const numbers = [1, 2, 3, 4, 5];

// const squareNumbers = numbers.map(square);

// function square(element) {
//   return Math.pow(element, 2);
// }

// console.log(squareNumbers);

// example 2

// const students = ["vikas", "koushik", "hari", "jathin"];

// const UpperNames = students.map(changeToUpper);

// function changeToUpper(element) {
//   return element.toUpperCase();
// }

// console.log(UpperNames);

// example 3

const dates = ["2020-01-20", "2021-02-30"];

const formattedDates = dates.map(formatDates);

function formatDates(element) {
  const parts = element.split("-");
  return `${parts[2]}/${parts[1]}/${parts[0]}`;
}

console.log(formattedDates);
