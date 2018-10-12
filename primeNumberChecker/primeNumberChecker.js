var primeChecker = function(num){
    if(num % 2 === 0){
      console.log('is even - not prime');
      return false;
    }
    for(var i = 3; i < num; i++){
      if(num % i === 0){
        console.log('divisable by something other than 1 and itself - not prime');
        return false;
      }
    }
    console.log('is prime');
    return true;
  };
  
  primeChecker(1015);