// reduce() => reduce the elements of an array to single value
// example : sum of all elements in array

let cart = [5, 15, 25, 22, 11, 3];

let total = cart.reduce(sumAll);

console.log(total);

function sumAll(prevelem, val) {
  return prevelem + val;
}
