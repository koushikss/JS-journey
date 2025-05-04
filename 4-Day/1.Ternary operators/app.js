// ternary operator
// condition ? exprIfTrue : exprIfFalse

let password = 3;

function passwordChecker(p) {
  // if (p == 8) {
  //   return "strong password";
  // } else {
  //   return "should be 8 characters";
  // }
  return p == 8 ? "strong password" : "should be 8 characters";
}

const res = passwordChecker(password);
console.log(res);

// example 2
age = 25;

const isAdult = age >= 18 ? "adult" : "not adult";
console.log(isAdult);

// challenge

let personMoney = true;

let haveMoney = personMoney === true ? "buy Products" : "need more money";
console.log(haveMoney);
