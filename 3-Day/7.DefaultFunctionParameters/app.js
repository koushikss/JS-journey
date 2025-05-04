// default function parameters allows you to assign default values
//  to function parameters,
// when a function is called , and an argument is not provided for a parameter, the default values will be used instead
// this feature makes it easier to handle cases where arguments might be missing or undefined

// by default count is true
function countTo5(count = true) {
  if (count == true) {
    for (let i = 1; i <= 5; i++) {
      console.log(`count : ${i}`);
    }
  }
}

countTo5();

function ratings(rate = 0) {
  if (rate == 5) {
    console.log("Excellent rating :)");
  } else if (rate == 0) {
    console.log("Poor rating :(");
  }
}
ratings();

// exersise

multiply = (a, b = 1) => {
  return a * b;
};
console.log(multiply(5, 5)); // 25
