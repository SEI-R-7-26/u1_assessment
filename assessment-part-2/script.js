// Insert Javascript Here
//-- Cache references--//
let counterMinus = document.querySelector('cnt-minus');
let counterPlus = document.querySelector('cnt-plus');
let num1 = document.getElementsByClassName('.num-inputs')


//-- event listeners--//

// counterPlus.addEventListener('click', num1)

// function numPlus() {
  
//   return parseInt(num1.value) + parseInt(num1.value)
  
  // = parseInt(num1.value) - parseInt(num1.value)
  //.value = mathResult
  // output.innerText 
// }

// counterMinus.addEventListener("click", () => {
//   return parseInt(num1.value) - parseInt(num1.value)
// })
function numPlus() {
    return parseInt(num1.value) + parseInt(num1.value)
  }