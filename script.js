const num1 = document.querySelector(".num1");
const num2 = document.querySelector(".num2");
const result = document.querySelector(".result");

document.querySelector(".add").addEventListener("click", function () {
    result.textContent = Number(num1.value) + Number(num2.value);
});

document.querySelector(".subtract").addEventListener("click", function () {
    result.textContent = Number(num1.value) - Number(num2.value);
});

document.querySelector(".multiply").addEventListener("click", function () {
    result.textContent = Number(num1.value) * Number(num2.value);
});

document.querySelector(".divide").addEventListener("click", function () {
    if (Number(num2.value) === 0) {
        result.textContent = "Cannot divide by zero";
    } else {
        result.textContent = Number(num1.value) / Number(num2.value);
    }
});