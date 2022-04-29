const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let result;
  let springDate = date;
  if(arguments.length == 0){
    result = 'Unable to determine the time of year!';
  } else if(springDate instanceof Date){
  
    let year = springDate.getYear();
    let month = springDate.getMonth();
    let day = springDate.getDay();
    if(month == 11 || month == 0 || month == 1){
      result = "winter";
    }else if(month == 2 || month == 3 || month == 4){
      result = "spring";
    }else if(month == 5 || month == 6 || month == 7){
      result = "summer";
    }else if(month == 8 || month == 9 || month == 10){
      result = "autumn";
    }
  } else{
    result = 'Invalid date!';
  };
 return result;
 
}

module.exports = {
  getSeason
};
