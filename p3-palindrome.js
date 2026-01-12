// Problem 3: Check for Palindrome
// Write a function that checks if a string is a palindrome (reads the same forward and backward).

// Example:

// Input: "madam"
// Output: true
// Input: "hello"
// Output: false


const palindrome = (() => {
  let value = "madam";
   let rev = "";

  for (let i = value.length - 1; i >= 0; i--) {

    rev += value[i];

  }
    return value === rev;

})();


console.log(palindrome);
