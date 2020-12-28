"use strict";

//Description:
/*Bob is working as a bus driver. However, he has become extremely popular amongst the city's residents. With so many passengers wanting to get 
aboard his bus, he sometimes has to face the problem of not enough space left on the bus! He wants you to write a simple program telling him if 
he will be able to fit all the passengers.

You have to write a function that accepts three parameters:
- cap: the amount of people the bus can hold excluding the driver.
- on: the number of people on the bus excluding the driver.
- wait: the number of people waiting to get on to the bus excluding the driver.

If there is enough space, return 0, and if there isn't, return the number of passengers he can't take.

Usage Examples:
enough(10, 5, 5);
// 0, He can fit all 5 passengers
enough(100, 60, 50);
// 10, He can't fit 10 out of 50 waiting
*/

const result = document.getElementById("result");

function enough(cap, on, wait) {
  const check = cap - on;
  if (check >= wait) {
    return 0;
  } else {
    return wait - check;
  }
}

//result.innerHTML = enough(10, 5, 5);
//result.innerHTML = enough(1100, 60, 50);
