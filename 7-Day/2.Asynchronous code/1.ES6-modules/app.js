//synchronous -> run the code line by line

// console.log("Task1");
// console.log("Task2");
// console.log("Task3");

//asynchronous -> allow multiple operation to perform simulatneously without waiting
// -> handled with : callbacks, prompises, Aync/Await

// setTimeout(() => {
//   console.log("Task1");
// }, 3000);

// console.log("Task2");

// callback -> example
function func1(callback) {
  setTimeout(() => {
    console.log("Task1");
    callback();
  }, 3000);
}

function func2() {
  console.log("Task2");
  console.log("Task3");
}
func1(func2);
