// classlist
// add()
// remove()
// toggle()

const h1 = document.querySelector("h1");

console.log(h1.classList);

// attach class to h1
// h1.classList.add("styles");
// console.log(h1.classList);

// remove class to h1
// h1.classList.remove("styles");

// toggle -> if class is present remove the class ... if class is not present it will add the class

h1.classList.toggle("apple");
console.log(h1.classList);
