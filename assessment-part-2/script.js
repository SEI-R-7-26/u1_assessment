// Insert Javascript Here
//create function for increasing or decreasing by button click
function buttonClick() {
  let count = 0
  //selecting counter
  let counter = document.getElementById('counter')

  //increase increment
  let buttonIncrease = document.getElementById('clickIncrease')
  buttonIncrease.onclick = function () {
    count += 1
    counter.innerHTML = count
    displayValue.innerHTML = count
  }

  //when leaving on increase
  buttonIncrease.onmouseleave = function mouseOver() {
    buttonIncrease.style.backgroundColor = 'transparent'
  }
  //when hovering on increase
  buttonIncrease.onmouseover = function mouseOver() {
    buttonIncrease.style.backgroundColor = 'green'
  }

  //decrease Increment
  let buttonDecrease = document.getElementById('clickDecrease')
  buttonDecrease.onclick = function () {
    count -= 1
    counter.innerHTML = count
    displayValue.innerHTML = count
  }

  //display current value being click
  let displayValue = document.getElementById('displayValue')
}
buttonClick()
