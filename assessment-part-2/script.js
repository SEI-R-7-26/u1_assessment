// Insert Javascript Here
let decreaseBtn = document.getElementById('buttonDecrease');
let increaseBtn = document.getElementById('buttonIncrease');
let counter = document.getElementById('counter');
let input = document.getElementById('input')
let count = 0

input.addEventListener('click', () =>{
    counter.innerText = input.value
})

decreaseBtn.addEventListener('click', () => {
    count --;
    counter.innerHTML = count;
})

increaseBtn.addEventListener('click', () => {
    count ++;
    counter.innerHTML = count;
})