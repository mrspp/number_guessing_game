function getInputValue(elementId) {
  let inputValue = document.getElementById(elementId).value;
  if (isNaN(inputValue) || inputValue === null || inputValue === "")
    return new Error("Please enter an integer!");
  return Number(inputValue);
}
function randomNumberGenerator(range) {
  return Math.floor(Math.random() * range);
}
function compareNumber(inputValue, hiddenNumber) {
  if (
    Number.isInteger(inputValue) &&
    Number.isInteger(hiddenNumber) &&
    inputValue === hiddenNumber
  )
    return "equal";
  if (
    Number.isInteger(inputValue) &&
    Number.isInteger(hiddenNumber) &&
    inputValue > hiddenNumber
  )
    return "greater";
  if (
    Number.isInteger(inputValue) &&
    Number.isInteger(hiddenNumber) &&
    inputValue < hiddenNumber
  )
    return "less";
  return false;
}

function checkInp() {
  var x = document.forms["myForm"]["age"].value;
  if (isNaN(x)) {
    alert("Must input numbers");
    return false;
  }
}

function restart(remaining) {
  if (remaining === 0) location.reload(true);
  document.getElementById("reload").innerHTML = `Try again after ${remaining}s`;
  setTimeout(function () {
    restart(remaining - 1);
  }, 1000);
}
function back() {
  location.replace("index.html");
}
