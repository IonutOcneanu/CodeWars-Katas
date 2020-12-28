"use strict";

/*
You receive the name of a city as a string, and you need to return a string that shows how many 
times each letter shows up in the string by using asterisks (*).

Examples:

"Chicago"  -->  "c:**,h:*,i:*,a:*,g:*,o:*" (As you can see, the letter c is shown only once, but with 2 asterisks.)
"Bangkok"    -->  "b:*,a:*,n:*,g:*,k:**,o:*"
"Las Vegas"  -->  "l:*,a:**,s:**,v:*,e:*,g:*"


The return string should include only the letters (not the dashes, spaces, apostrophes, etc). 
There should be no spaces in the output, and the different letters are separated by a comma (,) as seen in the example above.
Note that the return string must list the letters in order of their first appearance in the original string.
*/
const result = document.getElementById("result");

function getStrings(city) {
  const charStore = {};
  const lowerText = city.toLowerCase().replace(/\s/g, "");

  for (let i = 0; i < lowerText.length; i++) {
    if (!charStore[lowerText[i]]) {
      charStore[lowerText[i]] = `*`;
    } else {
      charStore[lowerText[i]] = charStore[lowerText[i]] + "*";
    }
  }
  return JSON.stringify(charStore).replace(/[{}]/g, "").replace(/"/g, "");
}

//result.innerHTML = getStrings("Chicago");
