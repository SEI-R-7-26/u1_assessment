// Make sure to RETURN all of your results

const joinStrings = (str1, str2) => {
  // Return a string with both strings combined. You MUST include a space between the two strings when joining.
  let total = str1 + ' ' + str2
  return total
}

const absoluteSum = (arrNums) => {
  // Return the absolute sum of all INTEGERS in an array
  // Note not all items in the array may be a number datatype
  // Remember to check the type of the element
  
  for (let i = 0; i < arrNums.length; i++) {
    i += arrNums[i];
    return arrNums
  }

}

const returnAllValues = (object) => {
  // return all values from the provided object in a new array
return (Object.values(object));

}

const countItems = (arr) => {
  // return total number of items in the provided array
  let arrT = arr.length
  return arrT
}

const returnAllEvens = (nums) => {
  // return all even numbers in a new array from the provided nums array.
  for (let i = 0; i < nums.length; i += 2){
      return nums
    }
  
}

const returnPower = (num, pow) => {
  // return the provided num to the power provided
  let math = Math.pow(num, pow)
  return math
}

module.exports = {
  joinStrings,
  absoluteSum,
  returnAllValues,
  countItems,
  returnAllEvens,
  returnPower
}
