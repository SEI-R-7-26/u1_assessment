// Insert Javascript Here
const minusBut = document.querySelector('.decrement')
const plusBut = document.querySelector('.increment')
const counter = document.querySelector('.counter')
let input = document.querySelector('input')

counter.innerText = 0
input.value = 1


plusBut.addEventListener('click', () => {
  counter.innerText += input.value //I can't solve this issue where the input value is added to the counter value as a string

  if (counter.innerText < 0) {
  counter.style.color = 'red'
}
})

minusBut.addEventListener('click', () => {
  counter.innerText -= input.value

  if (counter.innerText < 0) {
  counter.style.color = 'red'
}
})