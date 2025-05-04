// to access parent element
const li = document.querySelector("li");
console.log(li.parentElement);

// to access child element
const ul = document.querySelector("ul");
console.log(ul.children);
console.log(ul.children[0]);
console.log(ul.children[1]);

// next element

console.log(li.nextElementSibling.innerText);

// previous sibling
console.log(li.previousSibling.innerText);
