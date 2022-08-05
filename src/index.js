module.exports = function toReadable (number) {
    let numString = number.toString();

    const ones = new Array('', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen');
    const tens = new Array('', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety');
    const hundred = 'hundred';
    let result = '';

    if (number === 0) {return 'zero'};

    if (number < 20) {
        return ones[number];
    }
    if (numString.length === 2 && number%10 === 0) {
        return tens[numString.charAt(0)].trim();
    }

    if (numString.length === 3) {
        const lastTwo = numString.slice(1);
        if (number%100 === 0) {
            result = ones[numString.charAt(0)].trim() + ' ' + hundred;
            return result;
        }
        result = ones[numString.charAt(0)].trim() + ' ' + hundred + ' ';
        if(numString[1] !== '0' && numString[1] !== '1') {
            result += tens[numString.charAt(1)] + ' '} else if (numString[1] === '1' || numString[1] === '0') {
                if (numString[1] === '0') {
                    result += ones[numString[2]];
                    console.log(result);
                return result;
                }
                result += ones[lastTwo];
                console.log(result);
                return result;
            }
            else {
            result += tens[numString.charAt(1)];
            result += ones[numString.charAt(2)];} 

            result += ones[numString.charAt(2)];
        
    }
    
    if (number >= 20 && number < 100) {
        result += tens[numString.charAt(0)] + ' ' + ones[numString.charAt(1)];
    }
    
    resultOne = result.toString().trim();
    console.log(result);
    return resultOne;


}
