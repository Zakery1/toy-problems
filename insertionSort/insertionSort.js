/*jshint expr:true*/

/**
 * Insertion sort is another basic sorting algorithm. Insertion sort
 * iterates over an array, growing a sorted array behind the current location.
 * It takes each element from the input and finds the spot, up to the current point,
 * where that element belongs. It does this until it gets to the end of the array.
 * 
 * Do not use .sort()
 **/

// Example usage:
// insertionSort([2, 1, 3]); // yields [1, 2, 3]

// [5, 15, 20, 10, 30]

var insertionSort = function(array) {
    for(var i = 0; i < array.length; i++) {
      var j = i - 1;
      while(array[i] < array[j]) {
        j--;
      }
      var temp = array.splice(i, 1)[0];
      array.splice(j + 1, 0, temp);
    }
    return array;
  };
  
  // var insertionSort = function(array){
  //   array.sort(function(a, b){
  //     return a - b;
  //   });
  // }
  