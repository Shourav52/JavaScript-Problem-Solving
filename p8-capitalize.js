// Problem 8: Capitalize First Letter of Each Word
// Write a function that capitalizes the first letter of each word in a string.

// Example:

// Input: "hello world"
// Output: "Hello World"

const capitalizeFirstLetter = (() => {
    let value = "hello world";
    let result = value.split(" ");
    for (let i = 0;i < result.length;  i++) {
        result[i] = result[i].charAt(0).toUpperCase() + result[i].slice(1);
    }
    return result.join(" ");
})();

  console.log(capitalizeFirstLetter);
