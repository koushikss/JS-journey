// callback () => a function that is passed as an argument to another function

hello(goodBye);

function hello(callback) {
  console.log("Hello !");
  callback();
}

function goodBye() {
  console.log("Good Bye !");
}

// example 2
sum(displayConsole, 1, 2);

function sum(callback, x, y) {
  let result = x + y;
  callback(result);
}
function displayConsole(result) {
  console.log(result);
}
