const addButton = document.querySelectorAll('#add')
const subtractButton = document.querySelectorAll('#subtract')
const input = document.querySelector('input')

addButton.addEventListener('click', () => {
  input.value = parseInt(input.value) - 1
})
addButton.addEventListener('click', () => {
  input.value = parseInt(input.value) + 1
})
