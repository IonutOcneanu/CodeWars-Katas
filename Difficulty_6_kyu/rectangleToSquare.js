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

//TODO: I approached this the wrong way from the start.

const result = document.getElementById("result");

function sqInRect(lng, wth) {
  const arr = [];

  if (lng === wth) {
    return arr.push(1);
  }

  while (lng != wth) {
    if (wth > lng) {
      wth = wth - lng;
      arr.push(lng);
    } else if (lng > wth) {
      lng = lng - wth;
      arr.push(wth);
    }
  }
  arr.push(wth);
  return arr;
}

//result.innerHTML = sqInRect(5, 3);
// result.innerHTML = sqInRect(5,5);
// result.innerHTML = sqInRect(20,14);
