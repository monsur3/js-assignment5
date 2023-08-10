function canPay(array, number) {
    if (array.length === 0) {
        return "Array is empty.";
    }

    let arraySum = 0;
    for (let i = 0; i < array.length; i++) {
        arraySum += array[i];
    }

    return arraySum >= number;
}

// Example usage
const inputArray = [44];
const inputNumber = 10;

console.log(canPay(inputArray, inputNumber)); // Output: false
