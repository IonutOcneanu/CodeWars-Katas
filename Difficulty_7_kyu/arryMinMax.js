"use strict";
/*
In this Kata, you will be given an array of unique elements, and your task is to rearrange 
the values so that the first max value is followed by the first minimum, followed by second max value then second min value, etc.

Example:

solve([15,11,10,7,12]) = [15,7,12,10,11]

The first max is 15 and the first min is 7. The second max is 12 and the second min is 10 and so on.
*/

const result = document.getElementById("result");

function solve(arr) {
  const arrSorted = arr.sort((a, b) => b - a);
  const arrMax = [];
  const arrMin = [];
  const arrMinMax = [];
  const n = arrSorted.length;
  let j = 1;
  for (let i = 0; i < n / 2; i++) {
    arrMax[i] = arrSorted[i];
    if (j <= n / 2) {
      arrMin[i] = arrSorted[n - j];
      j++;
    }
  }
  for (let i = 0; i < n / 2; i++) {
    arrMinMax[2 * i] = arrMax[i];
    if (arrMinMax.length < n) {
      arrMinMax[2 * i + 1] = arrMin[i];
    }
  }
  return arrMinMax;
}

//result.innerHTML = solve([15,11,10,7,12]);
