/**
 * Return the total sum of all even fibonacci numbers up to and including
 * the value given to you at `maxFibValue`
 *
 * @param  {Number} maxFibValue
 * @return {Number} sum
 */
function _sumFibs( maxFibValue ) {
  let sum = 0;
  let oldfib = 0;
  let newfib = 1;
  let currfib = 0;
  do {
      currfib = oldfib + newfib;
      oldfib = newfib;
      newfib = currfib;
      console.log(currfib);
      if (currfib%2 === 0){
        sum += currfib;
      }
  }
  while (currfib < maxFibValue);

  return sum;
}

// bonus round
function _highestFibonacciNumber (maxFibValue){
  var highest = 0;

  //define your base case, validate your input


  //do your work here

  return highest;
};

/**
 * Do not modify code below.
 * You must be at least level 10 to understand.
 */
module.exports = {
  sumFibs : _sumFibs,
  highestFibonacciNumber : _highestFibonacciNumber
};