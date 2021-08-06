// Make sure to RETURN all of your results

const joinStrings = (str1, str2) => {
  // Return a string with both strings combined. You MUST include a space between the two strings when joining.
  return `${str1} ${str2}`
}

const absoluteSum = (arrNums) => {
  // Return the absolute sum of all INTEGERS in an array
  // Note not all items in the array may be a number datatype
  // Remember to check the type of the element

  let sum = 0
  arrNums.forEach((num) => {
    if (typeof num === 'number') {
      sum += num
    }
  })
  return sum
}

const returnAllValues = (object) => {
  // return all values from the provided object in a new array
  let allValues = Object.values(object)
  return allValues
}

const countItems = (arr) => {
  // return total number of items in the provided array
}

const returnAllEvens = (nums) => {
  // return all even numbers in a new array from the provided nums array.
  const getEvens = nums.filter((num) => num % 2 === 0)
  return getEvens
}

const returnPower = (num, pow) => {
  // return the provided num to the power provided
  return Math.pow(num, pow)
}

module.exports = {
  joinStrings,
  absoluteSum,
  returnAllValues,
  countItems,
  returnAllEvens,
  returnPower
}
