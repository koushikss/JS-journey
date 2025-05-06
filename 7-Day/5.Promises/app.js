// Promise -> An object that manages asynchronous operations
//            new Promise((resolve, reject) => {asynchronous code})

function checkNum(number) {
  return new Promise((resolve, reject) => {
    if (number % 2 == 0) {
      resolve("number is even");
    } else {
      reject("number is odd");
    }
  });
}

let num = 11;

checkNum(num)
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.log(error);
  });
