function canPay(array, number) {
    if (array.length === 0) {
        return "Array is empty.";
    }

    const arraySum = array.reduce((total, value) => total + value, 0);
    return arraySum >= number;
}

// Example usage
const inputArray = [44];
const inputNumber = 10;

console.log(canPay(inputArray, inputNumber)); // Output: false