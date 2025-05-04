// create element

const h1 = document.createElement("h1");
const body = document.body;
h1.innerText = "goodMorning";

// add the created element to body

body.appendChild(h1);

// insert before
const ul = document.querySelector("ul");
const newLi = document.createElement("li");
newLi.innerText = "Im new li";

ul.appendChild(newLi);
// insertBefore(what, where)
const firstLi = document.querySelector("li");
ul.insertBefore(newLi, firstLi);

// insertadjacent

// const firstP = document.querySelector("p");
// const i = document.createElement("i");
// i.innerText = "Im a new text";

// now insert before Paragraph
// firstP.insertAdjacentElement("beforebegin", i);

// insert starting of paragraph
// firstP.insertAdjacentElement("afterbegin", i);

// insert at the end of the paragraph
// firstP.insertAdjacentElement("beforeend", i);

// insert after the paragraph
// firstP.insertAdjacentElement("afterend", i);

// append (main) at end
let section = document.querySelector("section");
const i = document.createElement("i");
i.innerText = "Koushik";
i.style.color = "red";

section.append(i);

let span = document.createElement("span");
span.innerText = "this is span";
section.prepend(span);

// ===================================

const newlist = document.querySelector(".new-list");
const third = document.querySelector(".third");

newlist.removeChild(third);
// remove all the thing in list
// newlist.remove();
