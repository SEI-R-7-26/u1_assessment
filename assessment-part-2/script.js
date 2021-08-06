const number = document.querySelector('h1')
const input = document.querySelector('input')
const plus = document.querySelector('#plus')
const minus = document.querySelector('#minus')
let num = 0

const mathFunc = (event) => {
  let value = parseInt(input.value)
  if (Object.is(NaN, value)) {
    return
  }
  event.target.id === 'plus' ? (num += value) : (num -= value)
  number.innerText = num
  num >= 0 ? (number.style.color = 'black') : (number.style.color = 'red')
}

plus.addEventListener('click', mathFunc)
minus.addEventListener('click', mathFunc)
