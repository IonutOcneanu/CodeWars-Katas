"use strict";
/*
Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

Examples:
solution('abc') // should return ['ab', 'c_']
solution('abcdef') // should return ['ab', 'cd', 'ef']
*/

const result = document.getElementById("result");

function solution(string) {
  const n = string.length;
  const arr = [];
  let j = 0;
  for (let i = 0; i < n / 2; i++) {
    arr[i] =
      string[j] +
      `${typeof string[j + 1] !== "undefined" ? string[j + 1] : "_"}`;
    j = j + 2;
  }
  return arr;
}

//result.innerHTML = solution("abcde");
//result.innerHTML = solution("abcdef");
