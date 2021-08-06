// Insert Javascript Here
// variables
let counter = document.getElementById('counter')

let minus = document.getElementById('minus')

let plus = document.getElementById('plus')

let enteredNumber = document.getElementById('enter-number')

let count = 0
// functions
function input() {
  return parseInt(enteredNumber.value)
}
// event listeners
plus.addEventListener('click', () => {
  count += input()
  counter.innerHTML = count
  if (counter.innerHTML > 0) {
    counter.style.color = 'black'
  }
})

minus.addEventListener('click', () => {
  count -= input()
  counter.innerHTML = count
  if (counter.innerHTML < 0) {
    counter.style.color = 'red'
  }
})
//
