// Check if a number is even or odd
function checkOddEvenNum(num) {
    if (num < 0) return "Negative numbers are not valid.";
    if (num % 1 !== 0) return "Decimal numbers are not allowed.";

    if (num % 2 === 0) {
        return `${num} is an Even Number.`;
    } else {
        return `${num} is an Odd Number.`;
    }
}

// Test the function
const result = checkOddEvenNum(6);
console.log(result); 
