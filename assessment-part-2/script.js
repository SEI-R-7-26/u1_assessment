// Insert Javascript Here
let input = document.getElementById(`input`)
let plus = document.querySelector(`.plus`)
let minus = document.querySelector(`.minus`)

plus.addEventListener(`click`, function () {
  let solution = document.querySelector(`header`)
  if (Number.isNaN(parseFloat(input.value)) === false) {
    let sum = parseFloat(solution.innerHTML) + parseFloat(input.value)
    solution.innerHTML = `${sum}`
  }
})

minus.addEventListener(`click`, function () {
  let solution = document.querySelector(`header`)
  if (Number.isNaN(parseFloat(input.value)) === false) {
    let sum = parseFloat(solution.innerHTML) - parseFloat(input.value)
    solution.innerHTML = `${sum}`
  }
})
