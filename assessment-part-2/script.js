// Insert Javascript Here
// console.log('hello world')
let counter = document.querySelector('.counter')
let plusButton = document.querySelector('.plus')
let minusButton = document.querySelector('.minus')
let input = document.querySelector('input')
console.log(input.innerText)
input.value = '1'

plusButton.addEventListener('click', function () {
  counter.innerText += input.value
})

minusButton.addEventListener('click', function () {
  counter.innerText -= input.value
  if (counter.innerHTML < 0) {
    counter.style.color = 'red'
  }
})
