// Make sure to RETURN all of your results

const joinStrings = (str1, str2) => {
  return str1 + ' ' + str2
  // Return a string with both strings combined. You MUST include a space between the two strings when joining.
}

const absoluteSum = (arrNums) => {
  let res = 0
  for (let i = 0; i < arrNums.length; i++) {
    if (arrNums[i] < 0) {
      res += arr[i] * 1
      continue
    }
    res += arrNums[i]
  }
  return res
  // Return the absolute sum of all INTEGERS in an array
  // Note not all items in the array may be a number datatype
  // Remember to check the type of the element
}

const returnAllValues = (object) => {
  return Object.values(object)
  // return all values from the provided object in a new array
}

const countItems = (arr) => {
  return arr.length
  // return total number of items in the provided array
}

const returnAllEvens = (nums) => {
  let arr = []
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0) {
      arr.push(nums[i])
    }
  }
  return arr
  // return all even numbers in a new array from the provided nums array.
}

const returnPower = (num, pow) => {
  let res = Math.pow(num, pow)
  return res
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
