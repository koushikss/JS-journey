// arrowfunction also known as fat arrow function
// are a concise and shorter way to define functions in JS
// they were introduced in ES6 amd provide a more compact syntax compared to traditional function expression
// arrow functions are anonymous by default, meaning they don't have a name

// function greet (usernmae){
//   console.log(`Hello, ${usernmae}!`);
// }

greet = (username) => {
  return `Hello ${username}`;
};
console.log(greet("koushik"));

// double the number
// function doubleNumber(number) {
//   return number * 2;
// }
// console.log(doubleNumber(5));

const doubleNumber = (number) => {
  return number * 2;
};
console.log(doubleNumber(5));
