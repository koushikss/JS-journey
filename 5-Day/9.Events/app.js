// A JavaScript event is a specific action that occurs within a web page or ////application, such as clicking on an element, moving the mouse, pressing a key, or loading a page.

// bad-way

// const secondBtn = document.querySelector(".second-btn");
// secondBtn.onclick = function () {
//   console.log("Koushik");
// };

// great-way

const best = document.querySelector(".best");

best.addEventListener("click", () => {
  console.log("welcome koushik");
});

// event object
// const para = document.querySelector(".para");

// para.addEventListener("click", (event) => {
//   console.log(event);
// });

const input = document.querySelector("input");

const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log(input.value);
});
