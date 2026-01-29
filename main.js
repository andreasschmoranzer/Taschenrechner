let firstNumber = 0;
let secondNumber = 0;
let operator = "";
let result = 0;
let pathway = "";

const multiplication = " x ";
const division = " &divide; ";
const subtraction = " &minus; ";
const addition = " &plus; ";

// contribute the desired first or second number to the current Input field

function addNumber(zahl) {
  if (operator !== "") {
    secondNumber = secondNumber * 10 + zahl;
    document.getElementById("current-input").innerHTML =
      firstNumber + operator + secondNumber;
  } else if (firstNumber === result) {
    firstNumber = 0;
    firstNumber = firstNumber * 10 + zahl;
    document.getElementById("current-input").innerHTML = firstNumber;
    document.getElementById("former-input").innerHTML = "";
  } else if (operator === "") {
    firstNumber = firstNumber * 10 + zahl;
    document.getElementById("current-input").innerHTML = firstNumber;
  }
}

// add the operator and result to the current Input field as well as update the former Input field if necessary

function addOperator(text) {
  if (operator === "") {
    operator = text;
    document.getElementById("current-input").innerHTML = firstNumber + operator;
  } else if (operator !== "") {
    calculateResult();
    operator = text;
  }
}

// calculate the current result and provide it for further calculations

function calculateResult() {
  if (operator === "") {
    document.getElementById("current-input").innerHTML = firstNumber;
    document.getElementById("former-input").innerHTML = "";
    console.log(firstNumber, operator, secondNumber);
  } else if (operator !== "") {
    if (operator === multiplication) {
      result = firstNumber * secondNumber;
      document.getElementById("current-input").innerHTML = result;
    } else if (operator === division) {
      result = firstNumber / secondNumber;
      document.getElementById("current-input").innerHTML = result;
    } else if (operator === subtraction) {
      result = firstNumber - secondNumber;
      document.getElementById("current-input").innerHTML = result;
    } else if (operator === addition) {
      result = firstNumber + secondNumber;
      document.getElementById("current-input").innerHTML = result;
    }
    updateHistory();
    updateFormerInput();
    firstNumber = result;
    secondNumber = 0;
    operator = "";
  }
}

// delete the current and former Input fields

function resetCalculator() {
  firstNumber = "";
  secondNumber = "";
  operator = "";
  result = "";
  pathway = "";
  updateFormerInput();
  document.getElementById("history").innerHTML = pathway;
  document.getElementById("current-input").innerHTML =
    firstNumber + operator + secondNumber;
}

function updateFormerInput() {
  document.getElementById("former-input").innerHTML =
    firstNumber + operator + secondNumber;
}

function updateHistory() {
  let pathwayString =
    "<p class='123'>" +
    firstNumber +
    operator +
    secondNumber +
    " = " +
    result +
    "</p>";
  pathway = pathwayString + pathway;
  document.getElementById("history").innerHTML = pathway;
  var element = document.getElementById("history");
  element.classList.add("history-item");
}
