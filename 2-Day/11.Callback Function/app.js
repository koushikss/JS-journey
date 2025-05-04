//  callback function -> when we provide function as an (argument) to other
// function that function is known as callback function

// function showcallFun(fn) {
//   const value = 10;
//   fn(value);
// }

// showcallFun(function (value) {
//   console.log(value);
// });

// example 1

function greet(name, cb) {
  console.log(`Hello ${name}`);
  cb();
}
function cb() {
  console.log("callback function");
}
greet("Rahul", cb); // Hello Rahul callback function

// exersise

function showCallFunction(fn) {
  const a = 10;
  fn(a);
}
function fn(a) {
  console.log(a);
}
showCallFunction(fn); // 10
