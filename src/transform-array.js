const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let result = [];
  let index = 0;
  let flag = 0;
  if(Array.isArray(arr)){
  for(let element of arr){
    index++;
    if(element[0] != "-" && flag == 0){
      result.push(element);
    } else if(flag == 1){
      flag = 0;
    } else {
      switch(element){
        case "--discard-next": 
        if(index != arr.length){
          flag = 1;
        }
        break;

        case "--discard-prev": 
        if(index != 1){
          result.pop(arr());
        }
        break;

        case "--double-next":
          if(index != arr.length){
            result.push(arr[index]);
          }
        break;

        case "--double-prev":
          if(index != 1){
            result.push(arr[index-1]);
          }
        break;
      }
    }
  }
}else{
  throw new Error ("\'arr\' parameter must be an instance of the Array!"); 
}
  return result;
}

module.exports = {
  transform
};
