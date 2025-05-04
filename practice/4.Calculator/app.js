const display = document.getElementById("display");

function appendDisplay(input) {
  display.value += input;
}

function clearDisplay() {
  display.value = "";
}

function result() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "error";
  }
}
