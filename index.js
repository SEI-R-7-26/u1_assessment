// Make sure to RETURN all of your results

const joinStrings = (str1, str2) => {
  // Return a string with both strings combined. You MUST include a space between the two strings when joining.
  str1 = 'Hello'
  str2 = 'World'
  return `${str1} ${str2}`
}

const absoluteSum = (arrNums) => {}
// Return the absolute sum of all INTEGERS in an array
// Note not all items in the array may be a number datatype
// Remember to check the type of the element

const returnAllValues = (object) => {
  return Object.values(object)
}

const countItems = (arr) => {
  return arr.length
  // return total number of items in the provided array
}

const returnAllEvens = (nums) => {
  const evens = nums.filter((num) => {
    return (num = num % 2 === 0)
  })
  return evens
  // return all even numbers in a new array from the provided nums array.
}

const returnPower = (num, pow) => {
  return (num = Math.pow + pow)
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
