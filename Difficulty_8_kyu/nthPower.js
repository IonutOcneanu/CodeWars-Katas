"use strict";

/* This kata is from check py.checkio.org

You are given an array with positive numbers and a non-negative number N. 
You should find the N-th power of the element in the array with the index N. If N is outside of the array, then return -1. 
Don't forget that the first element has the index 0.

Examples:

array = [1, 2, 3, 4] and N = 2, then the result is 3^2 == 9;
array = [1, 2, 3] and N = 3, but N is outside of the array, so the result is -1.

*/
const result = document.getElementById("result");

function index(array, n) {
  let nthPower = -1;
  for (let i = 0; i < array.length; i++) {
    if (i === n) {
      nthPower = array[i] ** n;
    }
  }
  return nthPower;
}

//result.innerHTML = index([1, 2, 3, 4]);
