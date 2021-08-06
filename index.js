// Make sure to RETURN all of your results

const joinStrings = (str1, str2) => {
  // Return a string with both strings combined. You MUST include a space between the two strings when joining.
let newStr = `${str1} ${str2}`
return newStr
}

const absoluteSum = (arrNums) => {
  // Return the absolute sum of all INTEGERS in an array
  // Note not all items in the array may be a number datatype
  // Remember to check the type of the element
  const sum = arrNums.reduce((accumulator, value)=>{
    if (typeof value===`string`){
      return accumulator
    } else {
      return accumulator+=value
    }
  }, 0)
return sum
}

const returnAllValues = (object) => {
  // return all values from the provided object in a new array

  const newArr = Object.values(object)
  return newArr
}

const countItems = (arr) => {
  // return total number of items in the provided array
  return arr.length
}

const returnAllEvens = (nums) => {
  // return all even numbers in a new array from the provided nums array.
  const newArr= nums.map((value) => {
    if (value % 2 === 0){
      return value
    }
  })
return newArr

}

const returnPower = (num, pow) => {
  // return the provided num to the power provided
let power = num
for (i=1; i<pow; i++){
  power*=num
}
return power
}

module.exports = {
  joinStrings,
  absoluteSum,
  returnAllValues,
  countItems,
  returnAllEvens,
  returnPower
}
