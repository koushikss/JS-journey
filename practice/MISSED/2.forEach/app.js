// foreach => method use to iterate over the elements of an array and apply a specifi function (callback) to each element
//Array.forEach(callback)
// element,index,array are provided

// let numbers = [1, 2, 3, 4, 5];

// numbers.forEach(double);
// numbers.forEach(display);

// function double(element, index, array) {
//   array[index] = element * 2;
// }

// function display(element) {
//   console.log(element);
// }

// example 2

let fruits = ["apple", "orange", "banana"];

fruits.forEach(toUpperCase);
fruits.forEach(displayFruits);

function toUpperCase(element, index, array) {
  array[index] = element.toUpperCase();
}

function displayFruits(element) {
  console.log(element);
}
