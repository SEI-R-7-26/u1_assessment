// Make sure to RETURN all of your results

const joinStrings = (str1, str2) => {
  // Return a string with both strings combined. You MUST include a space between the two strings when joining.
  return `${str1} ${str2}`
}

const absoluteSum = (arrNums) => {
  // Return the absolute sum of all INTEGERS in an array
  // Note not all items in the array may be a number datatype
  // Remember to check the type of the element
  let absoluteSums = 0
  for (i = 0; i < arrNums.length; i++) {
    if (typeof arrNums[i] == 'number') {
      absoluteSums += arrNums[i]
    }
  }
  return absoluteSums
}

const returnAllValues = (object) => {
  // return all values from the provided object in a new array
  let newArr = []
  for (i = 0; i < Object.values(object).length; i++) {
    newArr.push(Object.values(object)[i])
  }
  return newArr
}

const countItems = (arr) => {
  // return total number of items in the provided array
  return arr.length
}

const returnAllEvens = (nums) => {
  // return all even numbers in a new array from the provided nums array.
  let newArr = []
  nums.filter((number) => {
    if (number % 2 === 0) {
      newArr.push(number)
    }
  })
  return newArr
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
