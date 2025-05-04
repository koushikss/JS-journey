// function is a block of code that perform specific task

function greet() {
  console.log("Hello, World!");
}
// call the function
greet(); // Output: Hello, World!

function sayHello(name) {
  console.log(`Hello, ${name}!`);
}
// call the function
sayHello("John"); // Output: Hello, John!

// return -> function
function add(x, y) {
  return x + y;
}
// call the function
console.log(add(5, 7)); // Output: 12

// exersise
function myFunction(a, b) {
  return a * b;
}
console.log(myFunction(5, 5)); // Output: 25

// function expression
const greeting = function (user) {
  console.log(`Hello, ${user}!`);
};
greeting("koushik");
