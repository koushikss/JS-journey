// fetch("https://jsonplaceholder.typicode.com/posts")
//   .then((response) => response.json())
//   .then((json) => console.log(json));

const btn = document.querySelector(".btn");
btn.addEventListener("click", displaythings);

// function displaythings() {
//   fetch("https://jsonplaceholder.typicode.com/posts")
//     .then((response) => response.json())
//     .then((data) => {
//       document.querySelector(".id").innerHTML = data[0].id;
//       document.querySelector(".title").innerHTML = data[0].title;
//     });
// }

// displaythings();
function displaythings() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((data) => {
      let output = document.querySelector(".all-posts");
      data.forEach((element) => {
        output.innerHTML += `
      <h1> ${element.id} </h1>
      <h2> ${element.title} </h2>

      `;
      });
    });
}
