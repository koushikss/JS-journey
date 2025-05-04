function updateClock() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  const combString = `${hours} : ${minutes} : ${seconds}`;
  document.getElementById("clock").textContent = combString;
}

updateClock();
setInterval(updateClock, 1000);
