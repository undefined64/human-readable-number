module.exports = function toReadable(number) {
    const numbers = [
        "zero",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
        "twenty",
    ];
    const tens = [
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];
    const hundreds = [
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
    ];
    if (number <= 20) {
        return numbers[number];
    }
    if (number < 100) {
        const ten = Math.floor(number / 10);
        const unit = number % 10;
        if (unit === 0) {
            return `${tens[ten - 2]}`;
        }
        return `${tens[ten - 2]} ${numbers[unit]}`;
    }
    if (number % 100 === 0) {
        return `${numbers[number / 100]} hundred`;
    }
    if (number > 100) {
        const hundred = Math.floor(number / 100);
        const ten = Math.floor((number - hundred * 100) / 10);
        const unit = number % 10;

        if (ten === 1 && unit === 0) {
            return `${hundreds[hundred - 1]} hundred ten`;
        } else if (unit === 0) {
            return `${hundreds[hundred - 1]} hundred ${tens[ten - 2]}`;
        } else if (ten === 0) {
            return `${hundreds[hundred - 1]} hundred ${numbers[unit]}`;
        } else if (ten === 1) {
            return `${hundreds[hundred - 1]} hundred ${numbers[unit + 10]}`;
        } else {
            return `${hundreds[hundred - 1]} hundred ${tens[ten - 2]} ${
                numbers[unit]
            }`;
        }
    }
};
