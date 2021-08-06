// Insert Javascript Here
const counterDisplay = document.querySelector('#counter')
const input = document.querySelector('input')
const plus = document.querySelector('.plus')
const minus = document.querySelector('.minus')
let counter = 0

const add = fucntion(counter, input)
{
  let answer = counter + input
  counterDisplay.innerText = answer
}
add()

plus.addEventListener('click', 'add')
// minus.addEventListener('click')
// plus.addEventListener('mouseover', function () {
//   plus.style.backgroundColor = 'blue'
// })
// minus.addEventListener('mouseover',)
