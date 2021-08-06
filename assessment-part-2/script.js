// Insert Javascript Here
let countDisplay = document.querySelector('#count-display')
let add = document.querySelector('#add')
let subtract = document.querySelector('#subtract')
let addedNumber = document.querySelector('.up')
let subtractNumber = document.querySelector('.down')
let input = document.querySelector('.input')
let inc = document.querySelector('.inc')
let dec = document.querySelector('.dec')

let counter = 0
input.value = 1

add.addEventListener('click', () => {
  counter++
  countDisplay = counter
  addedNumber.innerHTML = countDisplay
  input = bottomCounter
  inc.innerHTML = bottomCounter
  changeColor()
})

subtract.addEventListener('click', () => {
  counter--
  countDisplay = counter
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
