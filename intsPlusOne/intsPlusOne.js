// Write a function that takes an array of integers and returns the sum of the integers after adding 1 to each, for example plus_one_sum([1, 2, 3, 4]) // --> 14

function addOne(array){
    let sum = 0;
    for(var i = 0; i < array.length; i++){
      sum +=array[i] + 1
    }
  return sum
}