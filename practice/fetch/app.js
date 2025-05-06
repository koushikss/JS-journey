function displayCard() {
  fetch("https://fakestoreapi.com/products/")
    .then((response) => response.json())
    .then((data) => {
      const res = document.querySelector(".result");
      res.innerHTML = "";
      data.forEach((element) => {
        res.innerHTML += `
          <div class=" bg-gray-200 w-[400px] m-4 p-4 flex flex-col items-center shadow-lg">
          <h1 class="text-red">${element.id}</h1> <br>
          <img src="${element.image}" class=" w-full h-[200px]" />
          <p>${element.title}</p>
          </div> `;
      });
    });
}

displayCard();
