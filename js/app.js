function getPin() {
  const pin = generatePin();
  const pinString = pin + "";
  if (pinString.length === 4) {
    return pin;
  } else {
    return getPin();
  }
}

function generatePin() {
  const random = Math.round(Math.random() * 10000);
  return random;
}

document.getElementById("btn-button").addEventListener("click", function () {
  const pin = getPin();

  const generateField = document.getElementById("display-pin");
  generateField.value = pin;
});

document
  .getElementById("calculator")
  .addEventListener("click", function (event) {
    const number = event.target.innerText;
    const typeNumber = document.getElementById("type-number");
    const prevNumber = typeNumber.value;
    if (isNaN(number)) {
      if (number === "C") {
        typeNumber.value = "";
      } else if (number === "<") {
        const digits = prevNumber.split("");
        digits.pop();
        const remaining = digits.join("");
        typeNumber.value = remaining;
      }
    } else {
      const newTypeNumber = prevNumber + number;
      typeNumber.value = newTypeNumber;
    }
  });
document.getElementById("submit-button").addEventListener("click", function () {
  const displayField = document.getElementById("display-pin");
  const currentPin = displayField.value;
  const typeNumber = document.getElementById("type-number");
  const prevNumber = typeNumber.value;
  const pinSuccess = document.getElementById("pin-success");
  const pinError = document.getElementById("pin-error");
  if (currentPin === prevNumber) {
    pinSuccess.style.display = "block";
    pinError.style.display = "none";
    console.log("correct");
  } else {
    console.log("incorrect");

    pinError.style.display = "block";
    pinSuccess.style.display = "none";
  }
});
