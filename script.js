let counter = 0;
 
const button = document.getElementById("clickButton");
const counterDisplay = document.getElementById("counterInput");
 
button.addEventListener("click", function () {
    counter++;
    counterDisplay.textContent = counter;
});