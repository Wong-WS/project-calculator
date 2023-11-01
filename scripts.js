// Create functions for basic math operations
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    return "Error"; // Handle division by zero
  }
  return a / b;
}

// Variables to store calculator operation components
let firstNumber = "";
let operator = "";
let secondNumber = "";

function operate(operator, a, b) {
    switch (operator) {
        case "+":
            return add(a, b);
        case "-":
            return subtract(a, b);
        case "×":
            return multiply(a, b);
        case "÷":
            return divide(a, b);
        default:
            return "Error";
    }
}

document.addEventListener("DOMContentLoaded", function () {
    let displayValue = "";
    const userInput = document.querySelector(".user-input");
    const resultDisplay = document.querySelector(".result");
    const clearButton = document.querySelector(".clear");
    const equalButton = document.querySelector(".equal");

    const numberButtons = document.querySelectorAll(".number");
    const operatorButtons = document.querySelectorAll(".operator");
    const decimalButton = document.querySelector(".decimal");

    numberButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            const value = button.getAttribute("data-value");
            displayValue += value;
            updateDisplay();
        });
    });

    operatorButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            const value = button.getAttribute("data-value");
            displayValue += value;
            updateDisplay();
        });
    });

    clearButton.addEventListener("click", function () {
        clearDisplay();
    })

    decimalButton.addEventListener("click", function () {
        if (!displayValue.includes(".")) {
            displayValue += ".";
            updateDisplay();
        }
    });
    
    



    function updateDisplay() {
        userInput.textContent = displayValue;
    }

    function clearDisplay() {
        displayValue = "";
        updateDisplay();
        resultDisplay.textContent = "";
    }
});
