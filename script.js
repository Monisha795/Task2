const display = document.getElementById("display");

function appendValue(val) {
  display.value += val;
}

function clearDisplay() {
  display.value = "";
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = "Error";
  }
}

function updateDateTime() {
  const now = new Date();
  document.getElementById("date").textContent = now.toLocaleDateString();
  document.getElementById("time").textContent = now.toLocaleTimeString();
}

setInterval(updateDateTime, 1000);
updateDateTime();
