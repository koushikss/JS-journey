// scope in JS refer to current context of code , which determines the accessibility
// of variables to JS

// two types of SCOPE in JS
// 1. GLOBAL SCOPE -> access anywhere
// 2. LOCAL SCOPE -> access only inside {} this curly braces

let textMessage = "Hi"; // Global variable
console.log(textMessage);

function showMessage() {
  let textMessage = "Hello"; // Local variable
  console.log(textMessage);
}
showMessage();
