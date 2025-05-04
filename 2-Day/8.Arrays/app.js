// Arrays -> 0 index based

// empty array
const myList = [];
console.log(myList);

// numbers arry
const numbers = [1, 2, 3, 4, 5];
console.log(numbers);

// strings array
// const fruits = ["apple", "banana", "cherry"];
// console.log(fruits);
// // accessing items from array
// console.log(fruits[0]); // apple
// console.log(fruits[1]); // banana
// console.log(fruits[2]); // cherry

// nested array
const nestedArray = [1, 2, [3, 4], [5, 6, 7]];
console.log(nestedArray[2][1]); // 4

const fruits = ["apple", "banana", "cherry", "guava", "dates"];
// push
fruits.push("orange");
console.log(fruits);
// pop -> removes last element of array
fruits.pop();
console.log(fruits);
// shifts -> removes thde first element of array
fruits.shift();
console.log(fruits);
// unshift -> insert element at the start of the array
fruits.unshift("apple");
console.log(fruits);

// concat()
let names = ["sai", "hari", "ram"];
let moreNames = ["mahesh", "jathin", "vikas"];
let allNames = names.concat(moreNames);
console.log(allNames);

// includes -> true/ false
console.log(fruits.includes("banana")); // true

// reverse
let nums = [1, 2, 3, 4, 5];
console.log(nums.reverse());
