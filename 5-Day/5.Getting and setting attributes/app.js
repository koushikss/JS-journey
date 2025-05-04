const a = document.querySelector("a");
const input = document.querySelector("input");
console.log(a.href);

// to change href link
// console.log((a.href = "www.youtube.com"));

// getting attributes
// console.log(input.value);
// console.log(input.type);

// setting attributes
a.href = "https://www.youtube.com";

// input.value = "bye";

// get attribue
console.log(input.getAttribute("placeholder"));

// set attribute (setAttrbite(attrName, value))
input.setAttribute("placeholder", "gmail");
input.setAttribute("type", "password");
