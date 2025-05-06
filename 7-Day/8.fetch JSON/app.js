const result = document.querySelector(".result");

async function renderData() {
  const response = await fetch("data.json");
  const data = await response.json();
  console.log(data);
  result.textContent = data.name;
}

renderData();
