// Make sure to RETURN all of your results

const joinStrings = (str1, str2) => {
  // Return a string with both strings combined. You MUST include a space between the two strings when joining.

  // create new variable for newString
  // add str1 to space string to str2
  const newString = str1 + ' ' + str2
  return newString
}

const absoluteSum = (arrNums) => {
  // Return the absolute sum of all INTEGERS in an array
  // Note not all items in the array may be a number datatype
  // Remember to check the type of the element
}

const returnAllValues = (object) => {
  // return all values from the provided object in a new array

  let valArr = []

  for (const val in object){
    valArr.push(object[val])
  }

  return valArr
}

const countItems = (arr) => {
  // return total number of items in the provided array

  return arr.length
}

const returnAllEvens = (nums) => {
  // return all even numbers in a new array from the provided nums array.

  // creat a new array for evenNums
  // filter the even numbers in the array
  const evenNums = nums.filter(function(num) {
    // if number is even return that number
    if(num % 2 === 0) {
      return num
    }
  })

  return evenNums
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
