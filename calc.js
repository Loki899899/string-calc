const stringCalc = (inputString = "") => {
    if (!inputString) return 0;

    let delimiter = /\n|,/;
    const hasDelim = inputString.search(/\/\/.+\n/)
    if (hasDelim > -1) {
        const index = inputString.indexOf("\n");
        delimiter = inputString.slice(2, index);
        inputString = inputString.slice(index);
    }

    const nums = inputString.split(RegExp(delimiter));
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
console.log(stringCalc("//;\n1;2"))