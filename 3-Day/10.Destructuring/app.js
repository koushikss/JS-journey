// destructuring allow us to unpack values
// from data structures (arrays, objects) into seperate distinct variables

const foo = ["one", "two", "three"];
const [one, two, three] = foo;
console.log(one);
// expected output: "one"
console.log(two);
// expected output: "two"
console.log(three);
// expected output: "three"

function f() {
  return [1, 2];
}

let a, b;
[a, b] = f();
console.log(a);
// expected output: 1
console.log(b);

// assigning the rest of an array to a variable

const [a1, ...b1] = ["one", "two", "three"];

console.log(a1);
console.log(b1);

// objects destructuring

const student = { name: "koushik", age: 22, marks: 99 };
const { name, age, marks } = student;
console.log(name);
// expected output: "koushik"
console.log(age);
// expected output: 22
console.log(marks);
// expected output: 99

// rename
// const person = {
//   fname: "john",
//   fage: 25,
//   occupation: "software engineer",
// };
// const { fname: n, fage: ag, occupation: o } = person;
// console.log(n);
// console.log(ag);
// console.log(o);

// function destructuring
const p = {
  nm: "john",
  dob: 25,
  occ: "software engineer",
};
function getPerson({ nm, dob, occ }) {
  console.log(nm);
  console.log(dob);
  console.log(occ);
}
getPerson(p);

// object destructuring

let { x, y, ...rest } = { x: 100, y: 200, z: 300, m: 400, n: 500 };

console.log(x);
// expected output: 100
console.log(y);
// expected output: 200
console.log(rest);

// exersise
const person = {
  name: "john",
  age: 25,
  country: "India",
};

const { name: n, age: pa, country: c } = person;
console.log(n);

// function destructuring
