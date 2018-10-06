  // Write a function that takes a number in the following format ([1,0,0,9]), increments it and returns the new number in the same format. (Without changing it from array type.)
  var incArr = function(arr) {
    var newNum = arr.join('');
    newNum = parseInt(newNum) + 1;
    newNum = newNum.toString();
    return newNum.split('');
  }

