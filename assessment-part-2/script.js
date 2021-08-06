// Insert Javascript Here
let countDisplay = document.querySelector('#count-display')
let add = document.querySelector('#add')
let subtract = document.querySelector('#subtract')
let addedNumber = document.querySelector('.up')
let subtractNumber = document.querySelector('.down')
let input = document.querySelector('.input')
let inc = document.querySelector('.inc')
let dec = document.querySelector('.dec')

let num = ''
input.value = 1

add.addEventListener('click', () => {
  countDisplay = num + input.value
  addedNumber.innerHTML = countDisplay
  changeColor()
})

subtract.addEventListener('click', () => {
  countDisplay = num - input.value
  subtractNumber.innerHTML = countDisplay
  changeColor()
})

changeColor = () => {
  if (countDisplay <= -1) {
    document.getElementById('count-display').style.color = 'red'
  } else if (countDisplay >= 0) {
    document.getElementById('count-display').style.color = 'black'
  }
}
