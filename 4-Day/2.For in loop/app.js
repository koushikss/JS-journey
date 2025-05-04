// "for .. in loop " in JS is use to iterate over the enumerable properties of an object. Its easy way to loop through the keys

// for (let key in object) {...}

const person = {
  name: "koushik",
  age: 22,
  gender: "male",
};

for (let key in person) {
  console.log(key, person[key]);
}

// example 2

let list = ["one", "two", "three", "four"];

for (let index in list) {
  console.log(`${index} : ${list[index]}`);
}

// challenge
const object = {
  a: 1,
  b: 2,
  c: 3,
};

for (let key in object) {
  console.log(`${key}: ${object[key]}`);
}
