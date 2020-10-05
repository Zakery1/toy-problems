/*

In England the currency is made up of pound, £, and pence, p, and there are eight coins in general circulation:

1p, 2p, 5p, 10p, 20p, 50p, £1 (100p) and £2 (200p).
It is possible to make £2 in the following way:

1 * £1 + 1 * 50p + 2 * 20p + 1 * 5p + 1 * 2p + 3 * 1p
How many different ways can £2 be made using any number of coins?

*/

// var coins = [1, 2, 5, 10, 50, 100, 200];
var coins = [25,5];

// var makeChange = function(total) {
//   var combos = 0;
//   var findCombos =function(curTotal, coinIndex) {
//     if(coinIndex < coins.length) {
//       for(var i = 0; i <= total; i++) {
//         newTotal = curTotal + i * coins[coinIndex];
//         if(newTotal === total) {
//           combos++;
//         }
//         if(newTotal < total) {
//           findCombos(newTotal, coinIndex + 1);
//         }
//       }
//     }
//   };
//   findCombos(0, 0);
//   return combos;
// };

var makeChange = function(total) {
  var solutions = 0;
  function findCombos(curTotal, coinIndex) {
    if(coinIndex < coins.length) {
      for(var i = 0; i <= total; i++) {
        var newTotal = curTotal + i * coins[coinIndex];
        if(newTotal === total) {
          solutions++;
        } else if(newTotal < total) {
          findCombos(newTotal, coinIndex + 1);
        }
      }
    }
  }
  findCombos(0, 0);
  return solutions;
};

var a = makeChange(100);
console.log(a);

















// var makeChange = function(total){
//   // debugger;
//   combos = 0;
//   var findCombos = function(curTotal, coinIndex) {
//     if(coinIndex < 4) {
//       for(var i = 0; i * coins[coinIndex] <= total; i++) {
//         var newTotal = curTotal;
//         newTotal += i * coins[coinIndex];

//         if(newTotal > total) {
//           break;
//         } else if(newTotal === total) {
//           combos++;
//           break;
//         } else {
//           findCombos(newTotal, coinIndex + 1);
//         }
//       }
//     }
//   };
//   findCombos(0, 0);
//   return combos;
// };







/*

In England the currency is made up of pound, £, and pence, p, and there are eight coins in general circulation:

1p, 2p, 5p, 10p, 20p, 50p, £1 (100p) and £2 (200p).
It is possible to make £2 in the following way:

1 * £1 + 1 * 50p + 2 * 20p + 1 * 5p + 1 * 2p + 3 * 1p
How many different ways can £2 be made using any number of coins?

*/

// var coins = [1, 2, 5, 10, 50, 100, 200];
