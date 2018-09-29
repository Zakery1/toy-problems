// create a function that randomly shuffles an array

// [10,20,30,40,50,60,70]
// var shuffle = function(arr) {
//   var arrCopy = arr.slice();
//   var shuffledArr = [];
//   for(var i = 0; i < arr.length; i++) {
//     var index = Math.floor(Math.random() * arrCopy.length);
//     shuffledArr.push(arrCopy.splice(index, 1)[0]);
//   }
//   return shuffledArr;
// };

var shuffle = function(arr) {
    var shuffledArr = [];
    var length = arr.length;
    for(var i = 0; i < length; i++) {
      var index = Math.floor(Math.random() * arr.length);
      var el = arr.splice(index, 1)[0];
      shuffledArr.push(el)
    }
    return shuffledArr;
  }
  
  var a = shuffle([10,20,30,40,50,60,70]);