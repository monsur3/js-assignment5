function findAddress(obj) {
    const { street = "__", house = "__", society = "__" } = obj;
    return [street, house, society];
}

// Example usage
const inputObject = { street: 10, society: "Earth perfect" };
const result = findAddress(inputObject);
console.log(result); // Output: [10, "__", "Earth perfect"]
