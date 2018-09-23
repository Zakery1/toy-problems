//take a string and generate all possible anagrams of that string //

/**
 * Given an input string, write a function that produces all possible anagrams
 * of a string and outputs them as an array. Don't worry about duplicate
 * strings. What is the time complexity of your solution?
 *
 * Extra credit: Return only unique strings without using _.uniq().
 */

var findAllAnagrams = function(str) {
    var anagrams = [];
  
    anagramRecursion(str.split(''), [], anagrams, str);
  
    return anagrams;
  };
  
  function anagramRecursion(source, target, anagrams, str) {
    if(target.length === str.length) {
      return anagrams.push(target.join(''));
    }
  
    for(var i = 0; i < source.length; i++) {
      sourceCopy = source.slice();
      targetCopy = target.slice();
  
      var letter = sourceCopy.splice(i, 1)[0];
      targetCopy.splice(targetCopy.length, 0, letter);
  
      anagramRecursion(sourceCopy, targetCopy, anagrams, str);
    }
  }
  
  console.log('anagrams', findAllAnagrams('dog'));