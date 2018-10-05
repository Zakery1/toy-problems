

var primeTester = function(n) {
  for(var i = 2; i < Math.floor(Math.sqrt(n)); i++) {
    if(n % i === 0) {
      return false;
    }
  }
  return true;
};

function primeFactors(num) {
  var factors = [];
  var findFactors = function(num) {
    for(var i = 2; i <= num; i++) {
      if(num % i === 0 && primeTester(i)) {
        factors.push(i);
        findFactors(num / i);
        break;
      }
    }
  };
  findFactors(num);
  return factors;
}

console.log(primeFactors(100));








