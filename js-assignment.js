// pr1

function cubeNumber(number) {
        if (typeof number !== 'number') {
          return "Please enter a valid number";
        } 
        else{
          const result = Math.pow(number, 3);
          return result;
        }
      }

// pr2

function matchFinder(string1, string2) {
  if (typeof string1 !== 'string' || typeof string2 !== 'string') {
    return "Both inputs must be strings.";
  }

  for (let i = 0; i < string1.length; i++) {
    for (let j = 0; j < string2.length; j++) {
      if (string1[i] === string2[j]) {
        return true;
      }
    }
  }
  return false;
}

// pr3

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

// pr4

function findAddress(obj) {
  const { street = "__", house = "__", society = "__" } = obj;
  return [street, house, society];
}

// pr5

function canPay(array, number) {
  if (array.length === 0) {
      return "Array is empty.";
  }

  const arraySum = array.reduce((total, value) => total + value, 0);
  return arraySum >= number;
}