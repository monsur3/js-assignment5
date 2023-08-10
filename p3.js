function sortMaker(arr) {
    
    if (arr.some(element => element < 0)) {
        return "Invalid Input";
    }

    if (arr[0] === arr[1]) {
        return "equal";
    } else {
        return arr[0] > arr[1] ? [arr[0], arr[1]] : [arr[1], arr[0]];
    }
}

// Example usage
console.log(sortMaker([5, 3])); // Output: [5, 3]
console.log(sortMaker([3, 5])); // Output: [5, 3]
console.log(sortMaker([2, 2])); // Output: "equal"
console.log(sortMaker([-1, 3])); // Output: "Invalid Input"
console.log(sortMaker([2, -4])); // Output: "Invalid Input"
