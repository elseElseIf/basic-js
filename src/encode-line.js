const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let result = "";
  let count = 1;
  for(let i = 0; i < str.length; i++){
    if(str[i] == str[i + 1]){
      count++;
    }else{
      if(count == 1){
        result = result + str[i];
      }else{
        result = result + count + str[i];
        count = 1;
      }
    }
  }
  return result;
}

module.exports = {
  encodeLine
};