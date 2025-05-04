// logical operators

const a = true;
const b = false;
const c = 4;

// logical and -> && (true if the both values are true , else false)
console.log(a && b); // false
console.log(c < 10 && c > 0); // true

// logical or -> || (true if either of the value is true)
console.log(a || b); // true
console.log(c < 10 || c > 0); // true

// logical not -> ! (true if values if false)
console.log(!a); // false
console.log(!b); // true

// exersise

let password = "Koushik Sk";

if (password.length >= 8 && password.includes("Kou")) {
  console.log("Password is valid");
} else {
  console.log("Password is not valid");
}
