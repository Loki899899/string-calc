const ALLOWED_MAX = 1000

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
    let negatives = [];
    for(const num of nums) {
        let parsedNum = parseInt(num)
        if (parsedNum < 0) {
            negatives.push(parsedNum);
            continue;
        }
        if (parsedNum <= ALLOWED_MAX) {
            result += parsedNum;
        }
    }

    if (negatives.length) {
        throw Error(`negative numbers not allowed ${negatives}`);
    }
    
    return result
}

console.log(stringCalc("")) // 0

console.log(stringCalc("1")) // 1

console.log(stringCalc("1,5"))  // 6

console.log(stringCalc("1\n2,3")) // 6

console.log(stringCalc("//;\n1;2")) // 3

try {
    console.log(stringCalc("1,2,-3")) // Error: negative numbers not allowed -3
} catch(e) {
    console.error(e)
}

try {
    console.log(stringCalc("1,2,-3,-4")) // Error: negative numbers not allowed -3,-4
} catch(e) {
    console.error(e)
}

console.log(stringCalc("//;\n2;1001")) // 2