/* Write a function that finds the largest possible product of any three numbers
 * from an array.
 *
 * Extra credit: Make your function handle negative numbers.
 */


var largestProductOfThree = function(arr) {
    var sortedArr = arr.sort(function(a,b){return a - b;});
    if(arr[0] * arr[1] > arr[arr.length - 1] * arr[arr.length - 2]) {
      return arr[0] * arr[1] * arr[arr.length - 1];
    } else {
      return arr[arr.length - 1] * arr[arr.length - 2] * arr[arr.length - 3];
    }
  };
  
  var arr = [6, 8, 1, 2, 4, 9, 8, -20, 10];
  var a = largestProductOfThree(arr);
  console.log(a);
  
  
  
  
  
  
  
  
  
  
  
