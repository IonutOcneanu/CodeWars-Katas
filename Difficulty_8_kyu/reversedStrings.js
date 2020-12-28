"use strict";

/*Complete the solution so that it reverses the string passed into it.

Example: 'world'  =>  'dlrow'
*/

const result = document.getElementById("result");

function solution(str) {
  let reverse = "";
  for (let i = str.length; i >= 0; i--) {
    if (typeof str[i] !== "undefined") {
      reverse = reverse + str[i];
    }
  }
  return reverse;
}

//result.innerHTML = solution("world");
