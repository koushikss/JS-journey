// enhanced object literals

// function user(name, age) {
//   return {
//     name,
//     age,
//     intro: function () {
//       console.log(`Hello my name is ${name}, and im ${age} years old`);
//     },
//   };
// }

function user(name, age) {
  return {
    name,
    age,
    intro: () => {
      console.log(`Hello my name is ${name}, and im ${age} years old`);
    },
  };
}
const koushik = user("koushik", 22);
koushik.intro(); // Hello my name is koushik, and im 22

// exersise
// refactor to es6
const a = 1;
const b = 2;
const c = 3;

// var obj = {
//   a: a,
//   b: b,
//   c: c,
// };

// refactored
const obj = { a, b, c };

console.log(obj);

// exercise 2
// var lib = {
//   sum: function (a, b) {
//     return a + b;
//   },
//   mul: function (a, b) {
//     return a * b;
//   },
// };

// es6 code
const lib = {
  sum: (a, b) => a + b,
  mul: (a, b) => a * b,
};

console.log(lib.sum(2, 3));
console.log(lib.mul(2, 3));

// exersise3

// function getPerisonEs5(fname,age,height ){
//   return {
//     fname : fname,
//     age : age,
//     height : height,
//   };
// }

getPerisonEs6 = (fname, age, height) => {
  return {
    fname,
    age,
    height,
  };
};

const res = getPerisonEs6("koushik", 22, 180);
console.log(res);
