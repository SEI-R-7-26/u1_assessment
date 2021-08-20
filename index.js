// Make sure to RETURN all of your results

const joinStrings = (str1, str2) => {
  // Return a string with both strings combined. You MUST include a space between the two strings when joining.
  let combine = str1 + " " + str2;

  return combine;
};

const absoluteSum = (arrNums) => {
  // Return the absolute sum of all INTEGERS in an array
  // Note not all items in the array may be a number datatype
  // Remember to check the type of the element
  // arrNums.forEach((number) => {
  let sum = 0;
  for (let i = 0; i < arrNums.length; i++) {
    // console.log(typeof arrNums[i]);
    let res = (sum += arrNums[i]);
    if (typeof arrNums[i] !== "number") {
      arrNums.splice([i]);
      console.log("d:", arrNums);
      let arr = arrNums;
      console.log("New array:", arr);
      return arr;
    }
    console.log(res);
    console.log(sum);

    // if (arrNums[i] < 0) {
    //   // console.log(arrNums[i]);
    //   arrNums.filter[i];
    //   console.log(arrNums.filter[i]);
    //   // let arr = [];
    //   // arr.push(arrNums);
    //   // console.log("arr:", arr);

    //   // console.log(arrNums);
    //   // return arr;
    //   // console.log((sum += arrNums[i]));
    // }
  }
};
//   if (typeof number === "number") {
//     console.log("New number:", number);
//   }
//   console.log(("Sum of Numbers:", (sum += number[i])));
// });
// return "Sum:", sum;

const returnAllValues = (object) => {
  // return all values from the provided object in a new array
};

const countItems = (arr) => {
  // return total number of items in the provided array
  for (let i = 0; i < arr.length; i++) {
    console.log("count:", arr.length);
    return arr.length;
  }
};

const returnAllEvens = (nums) => {
  // return all even numbers in a new array from the provided nums array.
  for (let i = 0; i < nums.length; i++) {
    console.log("AE:", nums);
    if (nums[i] % 2 === 0) {
      return nums;
    }
  }
};

const returnPower = (num, pow) => {
  // return the provided num to the power provided
  ans = num ** pow;
  // console.log("power:", num ** pow);
  return ans;
};

module.exports = {
  joinStrings,
  absoluteSum,
  returnAllValues,
  countItems,
  returnAllEvens,
  returnPower,
};
