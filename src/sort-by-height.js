const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let elementArr = [];
  let count = 0;
  for(let el of arr){
    if(el == -1){
      elementArr.push(count);
    }
  count++;
  }
  arr.sort( (a, b) => a - b );

  let result = arr.slice(elementArr.length);
  for(let elem of elementArr){
    result.splice(elem, 0, -1);
  }
  return result;
}

module.exports = {
  sortByHeight
};