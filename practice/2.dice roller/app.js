const diceResult = document.getElementById("diceResult");

function diceRoller() {
  let val = Math.floor(Math.random() * 6 + 1);
  // console.log(val);
  diceResult.innerHTML = `
    <img src="Images/${val}.svg" alt="${val} class="bg-red"/>
  `;
}
