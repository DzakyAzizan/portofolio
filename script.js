function clearDisplay() {
  document.getElementById("display").value = "";
}

function deleteDigit() {
  let display = document.getElementById("display");
  display.value = display.value.slice(0, -1);
}

function appendCharacter(character) {
  document.getElementById("display").value += character;
}

function calculate() {
  let display = document.getElementById("display");
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error";
  }
}
