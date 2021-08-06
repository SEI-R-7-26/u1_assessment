// Make sure to RETURN all of your results

const joinStrings = (str1, str2) => {
  // Return a string with both strings combined. You MUST include a space between the two strings when joining.
  return `${str1} ${str2}`
}

const absoluteSum = (arrNums) => {
  // Return the absolute sum of all INTEGERS in an array
  // Note not all items in the array may be a number datatype
  // Remember to check the type of the element
  let numbers = []
  for (i = 0; i < arrNums.length; i++)
    if (typeof arrNums[i] === 'number') {
      numbers.push(arrNums[i])
    }
  let result = 0
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < 0) {
      result += numbers[i] * -1
      continue
    }
    result += numbers[i]
  }
  return result
}

const returnAllValues = (object) => {
  // return all values from the provided object in a new array
  return Object.values(object)
}

const countItems = (arr) => {
  // return total number of items in the provided array
  return arr.length
}

const returnAllEvens = (nums) => {
  // return all even numbers in a new array from the provided nums array.
  let evens = []
  for (i = 0; i < nums.length; i++)
    if (nums[i] % 2 === 0) {
      evens.push(nums[i])
    }
  return evens
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
