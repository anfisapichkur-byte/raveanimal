const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    alert("Скоро здесь будет покупка билета 🐾");
  });
});