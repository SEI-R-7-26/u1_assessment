let plus = document.getElementById('plus')
let minus = document.getElementById('minus')

let total = document.getElementById('total')
let count = 0


plus.addEventListener('click', event => {
  let num = document.getElementById('num').value
  console.log(count += num)
  total.textContent = count
})

minus.addEventListener('click', event => {
  let num = document.getElementById('num').value
  count -= num
  total.textContent = count
})
