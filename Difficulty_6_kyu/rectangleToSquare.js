"use strict";
/*
The drawing below gives an idea of how to cut a given "true" rectangle into squares ("true" rectangle meaning that the two dimensions are different).
You will be given two dimensions

a positive integer length (parameter named lng)
a positive integer width (parameter named wdth)
You will return an array or a string with the size of each of the squares.

Examples
squares(5,3) -> Will return [3, 2, 2, 1] (There is a 3x3 square, 
represented with the filled squares, a 2x2, represented with the hollow squares, and two singles, reprezented with the square-in-square) 
❒ ❒ ❒ ❒ ❒     ⬛ ⬛ ⬛ ❒ ❒
❒ ❒ ❒ ❒ ❒ --> ⬛ ⬛ ⬛ ❒ ❒
❒ ❒ ❒ ❒ ❒     ⬛ ⬛ ⬛ ▣ ▣
*/

//TODO: It's something to do division and modulo between length and width.

const result = document.getElementById("result");

function sqInRect(lng, wth) {
  const arr = [];
  const result = Math.floor(lng / wth);
  const remainder = lng % wth;
  // if (lng < wth) {
  //   [lng, wth] = [wth, lng];
  // } else if (lng === wth) {
  //   return null;
  // }
  // console.log(lng, wth);
  if (remainder === 0) {
    for (let k = 0; k < result; k++) {
      arr[k] = wth;
    }
  } else if (remainder !== 0) {
    for (let k = 0; k < wth + result; k++) {
      //TODO: The loop doesn't work with higher numbers-> need to change the upper limit
      if (k < result) {
        arr[k] = wth;
      } else if (k == result || lng / (remainder * k) === 1.5) {
        arr[k] = remainder;
      } else if (k > result && lng / wth !== 1.5) {
        arr[k] = 1;
      }
    }
  }
  return arr;
}

console.log(sqInRect(11, 8));

//result.innerHTML = sqInRect(5, 3);
// result.innerHTML = sqInRect(5,5);
// result.innerHTML = sqInRect(20,14);
