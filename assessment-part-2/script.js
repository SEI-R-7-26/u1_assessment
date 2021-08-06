// Insert Javascript Here
let topNumber = document.querySelector('#top-num')
let add = document.querySelector('#add')
let subtract = document.querySelector('#subtract')
let addedNumber = document.querySelector('.up')
let subtractNumber = document.querySelector('.down')
let secondNum = document.querySelector('.secondNum')
let inc = document.querySelector('.inc')
let dec = document.querySelector('.dec')

let counter = 0
let bottomCounter = 1

add.addEventListener('click', () => {
  counter++
  bottomCounter++
  topNumber = counter
  addedNumber.innerHTML = topNumber
  secondNum = bottomCounter
  inc.innerHTML = bottomCounter
})

subtract.addEventListener('click', () => {
  counter--
  bottomCounter--
  topNumber = counter
  subtractNumber.innerHTML = topNumber
  dec.innerHTML = bottomCounter
})
