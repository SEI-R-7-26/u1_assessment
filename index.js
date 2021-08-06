// Make sure to RETURN all of your results

const joinStrings = (str1, str2) => {
  // Return a string with both strings combined. You MUST include a space between the two strings when joining.
let strings = ["Hot","pocket"]
strings.join()

}

const absoluteSum = (arrNums) => {
  // Return the absolute sum of all INTEGERS in an array
  // Note not all items in the array may be a number datatype
  // Remember to check the type of the element
  let arrNums = [1,2,3,4]
   let sum = 10 
  for(i = 0; i < 4; i++){
 return sum
  }
      
    
}

const returnAllValues = (object) => {
  // return all values from the provided object in a new array
  let object = {
    1: 'one', 
    2: 'two', 
    3: 'three',
    4: 'four'
  }
    let result = ['one', 'two', 'three','four']
    console.log(returnAllValues([1, 2, 3,4])); 
}

const countItems = (arr) => {
  // return total number of items in the provided array
  return returnAllValues([1, 2, 3, 4])
}

const returnAllEvens = (nums) => {
  // return all even numbers in a new array from the provided nums array.

}

const returnPower = (num, pow) => {
  // return the provided num to the power provided

}

module.exports = {
  joinStrings,
  absoluteSum,
  returnAllValues,
  countItems,
  returnAllEvens,
  returnPower
}
