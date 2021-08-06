// Make sure to RETURN all of your results

const joinStrings = (str1, str2) => {
  // Return a string with both strings combined. You MUST include a space between the two strings when joining.
  newString = str1 + ' ' + str2
  return newString
}

const absoluteSum = (arrNums) => {
  // console.log(arrNums)
  // Return the absolute sum of all INTEGERS in an array
  // Note not all items in the array may be a number datatype
  // Remember to check the type of the element

  console.log(arrNums)
  const sumofArray = (accumulator, x) => accumulator + x
  console.log(arrNums.reduce(sumofArray))
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
  for (let i = 0; i < nums.length; i++) {
    if (i % 2 === 0) {
      nums.push(nums[i])
    }
  }
  return nums
}

const returnPower = (num, pow) => {
  // return the provided num to the power provided
  let newNumber = Math.pow(num, pow)
  return newNumber
}

module.exports = {
  joinStrings,
  absoluteSum,
  returnAllValues,
  countItems,
  returnAllEvens,
  returnPower
}
