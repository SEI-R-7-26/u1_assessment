// Insert Javascript Here
const buttonP = document.querySelector('.add-button')
const buttonM = document.querySelector('.minus-button')
const myInput = document.querySelector('.my-input')
const myCounter = document.querySelector('.counter')

buttonP.addEventListener('click', handleClick)
buttonM.addEventListener('click', handleClickT)

function handleClick(event) {
  let myResult = parseInt(myInput.value)
  let waga = myResult + 1
  myCounter.innerHTML = waga
  console.log(waga)
}

function handleClickT(event) {
  let myResult = parseInt(myInput.value)
  let mels = myResult - 1
  myCounter.innerHTML = mels
  console.log(mels)
}

buttonM.addEventListener('mouseover', handleHover)
buttonP.addEventListener('mouseover', handleHover)

function handleHover(event) {
  buttonP.style.backgroundColor = 'pink'
  buttonM.style.backgroundColor = 'pink'
}
