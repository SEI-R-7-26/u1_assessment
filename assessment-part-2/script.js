// Insert Javascript Here
const input = document.querySelector('input')
const minus = document.querySelector('.minus')
const plus = document.querySelector('.plus')
let inputVal = document.querySelector('input').value

input.addEventListener('input', () => {
  inputVal = input.value
})

plus.addEventListener('click', () => {
  let numbers = document.getElementById('h1')
  let newNum = parseInt(numbers.textContent) + parseInt(inputVal)
  numbers.textContent = newNum.toString()
  if (parseInt(numbers.textContent) < 0) {
    numbers.style.color = 'red'
  } else if (parseInt(numbers.textContent) >= 0) {
    numbers.style.color = 'black'
  }
  if (isNaN(parseInt(numbers.textContent))) {
    numbers.textContent = '0'
  }
})

minus.addEventListener('click', () => {
  let numbers = document.getElementById('h1')
  let newNum = parseInt(numbers.textContent) - parseInt(inputVal)
  numbers.textContent = newNum.toString()
  if (parseInt(numbers.textContent) < 0) {
    numbers.style.color = 'red'
  } else if (parseInt(numbers.textContent) >= 0) {
    numbers.style.color = 'black'
  }
  if (isNaN(parseInt(numbers.textContent))) {
    numbers.textContent = '0'
  }
})
