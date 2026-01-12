// Problem 5: Remove Duplicates from an Array
// Write a function that removes all duplicate numbers from an array.

// Example:

// Input: [1, 2, 2, 3, 4, 4]
// Output: [1, 2, 3, 4]

const removeDuplicates = (() => {
    let numbers = [1, 2, 2, 3, 4, 4]
    let finalNumbers = []
  for (let i = 0; i < numbers.length; i++){
        if (!finalNumbers.includes(numbers[i])){
            finalNumbers.push(numbers[i]);
        }
     }

    return finalNumbers;
})();

console.log(removeDuplicates);