const equal = document.getElementById("equal");
const numbersCol = document.getElementsByClassName("num");
const numbers = Array.from(numbersCol);
const formula = document.getElementById("formula-screen");
const output = document.getElementById("output-screen");
const buttonsCol = document.getElementsByClassName("cen-bor");
const buttons = Array.from(buttonsCol);
const operations = document.getElementsByClassName("opers");
const opersArr = Array.from(operations);
const ac = document.getElementById("AC");
const point = document.getElementById("point");

function handleNumClick(event) {
  let content = event.target.textContent;
  if (
    (output.textContent === "0" && formula.textContent === "") ||
    formula.textContent.includes("=")
  ) {
    output.textContent = content;
    formula.textContent = content;
  } else if (!formula.textContent.includes("=")) {
    output.textContent += content;
    formula.textContent += content;
  }
}

numbers.forEach((num) => {
  num.addEventListener("click", handleNumClick);
});

function handleOperClick(event) {
  if (formula.textContent.includes("=")) {
    formula.textContent = output.textContent
  }
  let content = event.target.textContent;
  if (
    (formula.textContent === "" && output.textContent === "0") ||
    (output.textContent === "" && formula.textContent === "")
  ) {
    alert("Use operators in between the operands");
  } else if (formula.textContent.includes("=")) {
    formula.textContent =
      formula.textContent.substring(formula.textContent.indexOf("=") + 1) +
      content;
    output.textContent = content;
  } else if (!formula.textContent.includes("=")) {
    output.textContent = content;
    formula.textContent += content;
  }
}

opersArr.forEach((oper) => {
  oper.addEventListener("click", handleOperClick);
});

function handleEqual(event) {
  // console.log(output.textContent);
  if (
    (formula.textContent === "" && output.textContent === "0") ||
    (output.textContent === "" && formula.textContent === "")
  ) {
    alert("Use equal after an expression you want to evaluate");
  } else {
    // console.log(event.target.textContent);
    let content = event.target.textContent;
    // console.log(formula.textContent);
    let result = eval(formula.textContent).toFixed(2);
    formula.textContent += content;
    output.textContent = result;
  }
}

equal.addEventListener("click", handleEqual);

point.addEventListener("click", handleNumClick);

ac.addEventListener("click", function () {
  formula.textContent = "";
  output.textContent = "0";
});
