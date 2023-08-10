function findAddress(obj) {
    const first = obj.street || "__";
    const sec = obj.house || "__";
    const third = obj.society || "__";

    return [first, sec, third];
}

// Example usage
const inputObject = { street: 10, society: "Earth perfect" };
const result = findAddress(inputObject);
console.log(result); // Output: [10, "__", "Earth perfect"]
