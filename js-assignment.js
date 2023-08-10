function cubeNumber(number) {
        if (typeof number !== 'number') {
          return "Please enter a valid number";
        } 
        else{
          const result = Math.pow(number, 3);
          return result;
        }
      }

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

function sortMaker(arr) {
  if (arr.length !== 2) {
      return "Invalid Input";
  }

  if (arr[0] < 0 || arr[1] < 0) {
      return "Invalid Input";
  }

  if (arr[0] === arr[1]) {
      return "equal";
  } else {
      if (arr[0] > arr[1]) {
          return [arr[0], arr[1]];
      } else {
          return [arr[1], arr[0]];
      }
  }
}

function findAddress(obj) {
  const first = obj.street || "__";
  const sec = obj.house || "__";
  const third = obj.society || "__";

  return [first, sec, third];
}

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