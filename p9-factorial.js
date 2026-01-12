// Problem 9: Find the Factorial of a Number
// Write a function that calculates the factorial of a number using a loop.

// Example:

// Input: 5
// Output: 120

const findFactorial = (()=>{
  let value = 5;
  let result = 1;
let i = 1;

  while (i<=value){
    result = result * i;
    i++;

  }

  return result;

})();

  console.log(findFactorial);
