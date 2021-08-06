// variables
const countHeading = document.querySelector('#count')
const addButton = document.querySelector('#add')
const subtractButton = document.querySelector('#subtract')
const numberToAdd = document.querySelector('#number')
let count = 0
// Functions
const setPage = () => {
  countHeading.innerText = count
}
const setColor = () => {
  const currentCount = parseFloat(countHeading.innerText)
  if (currentCount < 0) {
    countHeading.style.color = 'red'
  } else if (currentCount > 0) {
    countHeading.style.color = 'green'
  } else {
    countHeading.style.color = 'black'
  }
}
const addInput = () => {
  count += parseFloat(numberToAdd.value)
  setPage()
  setColor()
  setColor()
}
const subtractInput = () => {
  count -= parseFloat(numberToAdd.value)
  setPage()
  setColor()
}

// Event Listeners
addButton.addEventListener('click', addInput)
subtractButton.addEventListener('click', subtractInput)

setPage()
