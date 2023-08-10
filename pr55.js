function canPay(array, number) {
    if (array.length === 0) {
        return "Array is empty.";
    }
    let sum = 0;
    for(let i = 0; i < array.length; i++){
        const index = i;
        const element = numbers[index];
        sum = sum + element;
        console.log(sum);
    }
    return sum;

}
const myarray1 = [44];
const mynumber1 = [10];
canPay(myarray, mynumber);
