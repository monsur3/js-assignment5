function canPay(changeArray, totalDue) {
    if (changeArray.length === 0) {
        return "Array is empty.";
    }
  
    let arraySum = 0;
    for (let i = 0; i < changeArray.length; i++) {
        arraySum += changeArray[i];
    }
  
    return arraySum >= totalDue;
  }

// Example usage
const inputArray = [44];
const inputNumber = 10;

console.log(canPay(inputArray, inputNumber)); // Output: false
