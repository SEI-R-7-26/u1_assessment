// Insert Javascript Here
const counter = document.querySelector(`.counter`)
const plusButton = document.querySelector(`.plusButton`)
const minusButton = document.querySelector(`.minusButton`)
const number = document.getElementsByClassName(`number`)

plusButton.addEventListener(`click`, function () {
  counter.innerHTML = parseInt(counter.innerHTML, 10)+parseInt(number[0].value,10)
  if (counter.innerHTML>=0){
    counter.style.color = `black`
  } 
})

minusButton.addEventListener(`click`, function () {
  counter.innerHTML = parseInt(counter.innerHTML, 10)-parseInt(number[0].value,10)
  if (counter.innerHTML<=0){
    counter.style.color = `red`
  } 
  
})