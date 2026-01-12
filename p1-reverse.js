// Problem 1: Reverse a String
// Write a function that takes a string and returns it reversed.

// Example:

// Input: "hello"
// Output: "olleh"



const reversed =(()=>{
  let value = "hello";
  let result = ""
  for (let i =value.length - 1; i >= 0; i--){
    
    result +=value[i];
  }
  return result;
})();


console.log(reversed);

