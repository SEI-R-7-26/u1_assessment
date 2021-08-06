// Make sure to RETURN all of your results

const joinStrings = (str1, str2) => {
  // Return a string with both strings combined. You MUST include a space between the two strings when joining.
  // let str1 = 'Hello'
  // let str2 = 'World' <-- not required
  let message = str1 + ' ' + str2
  return message
}

// return message
const absoluteSum = (arrNums) => {
  // Return the absolute sum of all INTEGERS in an array
  // Note not all items in the array may be a number datatype
  // Remember to check the type of the element
}

const returnAllValues = (object) => {
  // return all values from the provided object in a new array
  let project = Object.keys(object).map((taco) => {
    return object[taco]
  })
  return project
}

const countItems = (arr) => {
  // return total number of items in the provided array
  // let count = countItems.arrayLength
  arr.length
}

const returnAllEvens = (nums) => {
  // return all even numbers in a new array from the provided nums array.
  let newArr = []
  for (let i = 0; i < array.length; i++) {
    if (nums[i] / 2 === 0) {
      arr.push(nums[i])
    }
  }
  return newArr
}
//dont know why not working
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
