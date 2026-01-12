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
