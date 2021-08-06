// Make sure to RETURN all of your results

const joinStrings = (str1, str2) => {
  // Return a string with both strings combined. You MUST include a space between the two strings when joining.
return str1 + ' ' + str2
}

const absoluteSum = (arrNums) => {
  // Return the absolute sum of all INTEGERS in an array
  // Note not all items in the array may be a number datatype
  // Remember to check the type of the element
  let sum = 0;
for (let i=0; i < arrNums.length; i++) {
return sum += arrNums[i]
}
}


const returnAllValues = (object) => {
  // return all values from the provided object in a new array
let newArray = Object.values(object)
return newArray
}


const countItems = (arr) => {
  // return total number of items in the provided array
  return arr.length
}


const returnAllEvens = (nums) => {
  // return all even numbers in a new array from the provided nums array.
  let answer = [];
  for (let i=0; i < nums.length; i++) {
    if (i % 2 === 0) {
      answer.push(nums[i])
    }
    return answer
  }
}

const returnPower = (num, pow) => {
  // return the provided num to the power provided
let result = math.pow(num, pow)
  return result
}


module.exports = {
  joinStrings,
  absoluteSum,
  returnAllValues,
  countItems,
  returnAllEvens,
  returnPower
}
