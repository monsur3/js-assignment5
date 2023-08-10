function cubeNumber(number) {
    if (typeof number !== 'number') {
      return "Please enter a valid number";
    } 
    else{
      const calc = Math.pow(number, 3);
      return calc;
    }
  }
  
  const result = cubeNumber(3);
  console.log(result);
  