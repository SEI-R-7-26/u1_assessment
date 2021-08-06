// Insert Javascript Here
let count = 0

const countDisplay = document.querySelector('#count-display')
const incrementInput = document.querySelector('input#number-input')
const plusButton = document.querySelector('.plus')
const minusButton = document.querySelector('.minus')

const updateDisplay = () => {
  countDisplay.innerHTML = count
  if (count < 0) {
    countDisplay.classList.add('red-text')
  } else if (count >= 0) {
    countDisplay.classList.remove('red-text')
  } else {
    countDisplay.innerHTML = `Oops! Not a number.`
    countDisplay.classList.add('red-text')
    incrementInput.value = '1'
    count = 0
  }
}

plusButton.addEventListener('click', function () {
  count += parseInt(incrementInput.value)
  updateDisplay()
})

minusButton.addEventListener('click', function () {
  count -= parseInt(incrementInput.value)
  updateDisplay()
})
