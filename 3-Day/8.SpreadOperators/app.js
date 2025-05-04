// spread operator is new addition to ES6
// it takes in an iterable(ex: array) and expand it into individual elements

function giveme4(a, b, c, d) {
  console.log(`a : ${a}`);
  console.log(`b : ${b}`);
  console.log(`c : ${c}`);
  console.log(`d : ${d}`);
}

const colors = ["red", "green", "blue", "yellow"];

// giveme4(colors); b,c,d are undefined
giveme4(...colors); // this will print out each color individually

// with string
const strNums = ["one", "two", "three"];
const morestrNums = ["four", "five"];
const concat = [...strNums, ...morestrNums];
console.log(concat);

// with objects
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const obj3 = { e: 5, f: 6 };
const obj4 = { g: 7, h: 8 };
const all = { ...obj1, ...obj2, ...obj3, ...obj4 };
console.log(all);

//exersise
let arr = [1, 2, 3];
let arr2 = [4, 5];
let comb_arr = [...arr, ...arr2];
console.log(comb_arr); // [1,2,3,4,5]

const user = {
  name: "koushik",
  age: 22,
};
const clone = { ...user };
console.log(clone);
