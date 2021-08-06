const plusButton = document.querySelector('#plus')
const minusButton = document.querySelector('#minus')
const inputField = document.querySelector('#number-input')
let count = 0

plusButton.addEventListener('click', addNumbers)
minusButton.addEventListener('click', subtractNumbers)

function addNumbers(num1, num2) {
  count += inputField
}

function subtractNumbers(num1, num2) {
  count -= inputField
}
