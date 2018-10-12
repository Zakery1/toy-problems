/**
 * Given a roman numeral as input, write a function that converts the roman
 * numeral to a number and outputs it.
 */

var romanNumerals = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100
  };
  
  var convertNum = function(numeral) {
    var sum = 0;
    for(var i = 0; i < numeral.length; i++) {
      // debugger;
      if(romanNumerals[numeral[i]] < romanNumerals[numeral[i + 1]]) {
        sum += romanNumerals[numeral[i + 1]] - romanNumerals[numeral[i]];
        i++;
      } else {
        sum += romanNumerals[numeral[i]];
      }
    }
    return sum;
  };
  
  