// Make sure to RETURN all of your results

const joinStrings = (str1, str2) => {
  // Return a string with both strings combined. You MUST include a space between the two strings when joining.
  const stringCombine = `${str1} ${str2}`
  return stringCombine
}

const absoluteSum = (arrNums) => {
  // Return the absolute sum of all INTEGERS in an array
  // Note not all items in the array may be a number datatype
  // Remember to check the type of the element

  return arrNums.reduce((acc, item) => {
    if (typeof item === 'number') {
      acc += item
      return acc
    } else {
      return acc
    }
  }, 0)
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
  return nums.filter((num) => {
    return num % 2 === 0
  })
}

const returnPower = (num, pow) => {
  // return the provided num to the power provided
  let product = num
  for (let i = 1; i < pow; i++) {
    product *= num
  }
  return product
}

module.exports = {
  joinStrings,
  absoluteSum,
  returnAllValues,
  countItems,
  returnAllEvens,
  returnPower
}
