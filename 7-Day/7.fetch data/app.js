// fetch API promise only rejects when we have network error (not in other cases)

// fetch("info.txt")
//   .then((response) => response.text())
//   .then((data) => console.log(data));

const result = document.querySelector(".result");

async function renderData() {
  const response = await fetch("info.txt");
  const data = await response.text();
  result.textContent = data;
}

renderData();

con;
