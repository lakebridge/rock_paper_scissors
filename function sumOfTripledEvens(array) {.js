function sumOfTripledEvens(array) {
  let sum = 0;
  function isEven(num) {
    return num % 2 === 0; 
  }
  const evenNum = array.filer(isEven)
  const multiplyNum = evenNum.map( (num) => num*3)
  
  const sum = multiplyNum.reduce((total, currentItem) => {
  return total + currentItem;
}
   return sum;

    }

