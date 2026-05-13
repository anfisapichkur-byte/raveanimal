let allButtons = document.getElementsByTagName("button");

for (let i = 0; i < allButtons.length; i++) {
    allButtons[i].onclick = function () {
        alert("Скоро здесь будет покупка билета 🐾");
    };
}
