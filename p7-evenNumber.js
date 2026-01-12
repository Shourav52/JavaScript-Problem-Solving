// Problem 7: Find Even Numbers in an Array
// Write a function that returns all even numbers from a given array.

// Example:

// Input: [1, 2, 3, 4, 5, 6]
// Output: [2, 4, 6]

const findEvenNumbers = (() => {
    let numbers = [1, 2, 3, 4, 5, 6];
    let evenNumbers = [];

    for (let i= 0; i<numbers.length; i++){
        if (numbers[i] % 2 === 0) {
            evenNumbers.push(numbers[i]);
        }
    }
   return evenNumbers;

})();

 console.log(findEvenNumbers);
 
