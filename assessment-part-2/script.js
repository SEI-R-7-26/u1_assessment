// Insert Javascript Here
const inc_button = document.getElementById("increment")
const dec_button = document.getElementById("decrement")
const num_input = document.querySelector(".inc")
let count = 0
const count_dis = document.querySelector(".count")

inc_button.addEventListener('click', incCount)
inc_button.addEventListener('mouseover', revColI)
inc_button.addEventListener('mouseout', retColI)
dec_button.addEventListener('click', decCount)
dec_button.addEventListener('mouseover', revColD)
dec_button.addEventListener('mouseout', retColD)

function revColI() {
  inc_button.style.color ="grey";
  inc_button.style.backgroundColor ="white";
}

function retColI() {
  inc_button.style.color ="white";
  inc_button.style.backgroundColor ="grey";
}

function revColD() {
  dec_button.style.color ="grey";
  dec_button.style.backgroundColor ="white";
}

function retColD() {
  dec_button.style.color ="white";
  dec_button.style.backgroundColor ="grey";
}

function incCount() {
  count += parseInt(num_input.value)
  count_dis.innerHTML = count
}

function decCount() {
  count -= parseInt(num_input.value)
  count_dis.innerHTML = count
}