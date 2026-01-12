// Problem 2: Count Vowels in a String
// Write a function that counts how many vowels (a, e, i, o, u) are in a given string.

// Example:

// Input: "programming"
// Output: 3

const Count = (() => {
    let value = "programming"
    let vowels = "aeiou"
    let demovalue = 0;
    for (let i = 0; i < value.length; i++){
        if (vowels.includes(value[i])){
            demovalue++;


        }
    }

    return demovalue;
    
})();

console.log(Count);
