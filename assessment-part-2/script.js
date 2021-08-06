// Insert Javascript Here
let count = 0
const counter = document.getElementById('counter')
const input = document.getElementById('input')

function add() {
  count += parseInt(input.value)
  counter.innerHTML = count
}

document.getElementById("plus").onclick = add

function subtract() {
  count -= parseInt(input.value)
  counter.innerHTML = count
}

document.getElementById("minus").onclick = subtract
