// Insert Javascript Here
let input = document.querySelector(`input`)
let value = parseInt(input.value)
let plus = document.getElementById(`left`)
let minus = document.getElementById(`right`)
let number = document.querySelector(`h1`)
let numberResult = parseInt(number.innerText)

plus.addEventListener(`click`, function () {
  let final = numberResult + value
  number.innerText = final
})

minus.addEventListener(`click`, function () {
  let final = numberResult - value
  number.innerText = final
})

plus.addEventListener(`mouseenter`, function (event) {
  event.target.style.backgroundColor = 'black'
  event.target.style.color = 'gray'
})

minus.addEventListener(`mouseenter`, function (event) {
  event.target.style.backgroundColor = 'black'
  event.target.style.color = 'gray'
})

// I was able to get the initial value of the input to add or subtract from the counter. What I can't figure out is how to get the math to work with whatever updated values are in the input. I double checked and changed the initial values of the counter and input to make sure it was properly doing the math and it was. It seems to only care about the initial values of the elements.
