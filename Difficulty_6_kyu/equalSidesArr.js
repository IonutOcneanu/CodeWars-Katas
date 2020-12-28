"use strict";

/*
You are going to be given an array of integers. Your job is to take that array and find an index N 
where the sum of the integers to the left of N is equal to the sum of the integers to the right of N. 
If there is no index that would make this happen, return -1.

Example:
{1,2,3,4,3,2,1}: Your function will return the index 3, because at the 3rd position of the array, 
the sum of left side of the index ({1,2,3}) and the sum of the right side of the index ({3,2,1}) both equal 6.

{1,100,50,-51,1,1}: Your function will return the index 1, because at the 1st position of the array, 
the sum of left side of the index ({1}) and the sum of the right side of the index ({50,-51,1,1}) both equal 1.

{20,10,-80,10,10,15,35}: At index 0 the left side is {}. The right side is {10,-80,10,10,15,35}
They both are equal to 0 when added. (Empty arrays are equal to 0 in this problem)
Index 0 is the place where the left side and right side are equal.
*/
const result = document.getElementById("result");

const findEvenIndex = function (arr) {
  const n = arr.length;
  let leftSum = 0;
  let ok = true;
  for (let i = 0; i < arr.length; i++) {
    let rightSum = 0;
    for (let j = i + 1; j < arr.length; j++) {
      rightSum = rightSum + arr[j];
    }
    if (leftSum === rightSum) {
      console.log(leftSum, rightSum);
      return i;
    } else {
      ok = false;
    }
    leftSum = leftSum + arr[i];
  }
  if (!ok) {
    return -1;
  }
};

//result.innerHTML = findEvenIndex([1, 2, 3, 4, 3, 2, 1]);
