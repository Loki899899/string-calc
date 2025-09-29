const stringCalc = (inputString) => {
    if (!inputString) return 0;

    const nums = inputString.split(/\n|,/);
    result = 0;
    
    nums.forEach(num => {
        result += parseInt(num);
    });
    
    return result
}

console.log(stringCalc(""))
console.log(stringCalc("1"))
console.log(stringCalc("1,5"))
console.log(stringCalc("1\n2,3"))