let count = 0

const counterDisplay = document.querySelector(`#counter-display`)
const counterInput = document.querySelector(`#counter-input`)
const buttonPlus = document.querySelector(`#button-plus`)
const buttonMinus = document.querySelector(`#button-minus`)

const onButtonClicked = (e) => {
  if (isNaN(counterInput.value)) {
    alert(`${counterInput.value} is not a valid input. Numbers only, please.`)
  } else {
    count += counterInput.value * e.target.value

    counterDisplay.innerHTML = `${count}`

    if (count < 0) {
      counterDisplay.style.color = `red`
    } else {
      counterDisplay.style.color = `black`
    }
  }
}

buttonPlus.addEventListener(`click`, onButtonClicked)
buttonMinus.addEventListener(`click`, onButtonClicked)
