// Make sure to RETURN all of your results

const joinStrings = (str1, str2) => {
  // Return a string with both strings combined. You MUST include a space between the two strings when joining.

  return str1 + ' ' + str2
}

const absoluteSum = (arrNums) => {
  // Return the absolute sum of all INTEGERS in an array
  // Note not all items in the array may be a number datatype
  // Remember to check the type of the element

  for (let i = 0; i < nums.length; i++) {}
}

const returnAllValues = (object) => {
  // return all values from the provided object in a new array
  let obj = { 1: 'one', 2: 'two', 3: 'three' }

  return Object.values(object)
}

const countItems = (arr) => {
  // return total number of items in the provided array

  return arr.length
}

const returnAllEvens = (nums) => {
  // return all even numbers in a new array from the provided nums array.
  return num % 2 === 0
}
const returnPower = (num, pow) => {
  // return the provided num to the power provided
  return num ** pow
}

module.exports = {
  joinStrings,
  absoluteSum,
  returnAllValues,
  countItems,
  returnAllEvens,
  returnPower
}
