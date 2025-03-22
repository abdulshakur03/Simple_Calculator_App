const form = document.forms[0];
const display = form.elements.display;
form.addEventListener("click", (e) => {
  e.preventDefault();
  // display.focus( );
  if (e.target.classList.contains("num")) {
    const content = e.target.value;
    display.value = display.value === "0" ? content : display.value + content;
  }

  if (e.target.classList.contains("evaluate")) {
    try {
      display.value = new Function(`return ${display.value}`)();
    } catch {
      display.value = `Math Error`;
    }
  }

  if (e.target.classList.contains("clear")) {
    display.value = "0";
  } else if (e.target.classList.contains("delete")) {
    display.value = display.value.slice(0, -1) || 0;
  }
});

window.addEventListener("keydown", (e) => {
  const key = e.key;
  if (!isNaN(key) || ["+", "-", "*", "/"].includes(key)) {
    e.preventDefault();
    display.value = display.value === "0" ? key : display.value + key;
  }

  if (key === "Enter") {
    e.preventDefault();
    try {
      display.value = new Function(`return ${display.value}`)();
    } catch {
      display.value = `Math Error`;
    }
  }

  if (key === "Escape") {
    e.preventDefault();
    display.value = "0";
  } else if (key === "Backspace") {
    e.preventDefault();
    display.value = display.value.slice(0, -1) || 0;
  }
});
