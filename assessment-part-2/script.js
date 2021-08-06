// console.log("hello")
const button1 = document.querySelector('#button1')
const button2 = document.querySelector('#button2')
const totalInput = document.querySelector('input')
let count = 0
const countDisplay = document.querySelector('.count')




totalInput.addEventListener("keydown", function(event) {
  if (event.keycode === 69)
  document.countDisplay = totalInput.value
  // totalInput.innerText = `KeyboardEvent: key='Enter' | code='Enter'`
  // document.querySelector(".count").append(count)
})  
console.log("Enter".charCodeAt(0))

button1.addEventListener('click', function() {
  count -= 1
  countDisplay.innerHTML = count

})

button2.addEventListener('click', function() {
  count += 1
  countDisplay.innerHTML = count

})

console.log("Enter".charCodeAt(0))