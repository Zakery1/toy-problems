// Write a function that takes an English word as a string and converts it to
// Pig Latin. Your Pig Latin implementation should follow two basic rules: For
// words that begin with consonants, move the first letter to the end of the
// word and add "ay" onto the end. For example:
//
//   "happy" -> "appyhay"
//
// For words that begin with vowels, add "ay" to the end of the word.
// For example:
//
//   "anchor" -> "anchoray"
//
//
// Extra credit: Make your function accept a string that contains multiple
// words. Don't worry about punctuation.
//
// Extra extra credit: Make your function handle punctuation properly.


var convertToPigLatin = function(string) {
    var pigLatin = [];
    var words = string.split(' ');
    for(var i = 0; i < words.length; i++){
      words[i] = words[i].split('');
      if(words[i][0] === 'a' || words[i][0] === 'e' || words[i][0] === 'i' || words[i][0] === 'o' || words[i][0] ==='u'){
        pigLatin.push(words[i].join('') + 'ay');
      } else {
        var firstLetter = words[i].splice(0,1);
        pigLatin.push(words[i].join('') + firstLetter + 'hay');
      }
    }
    return pigLatin;
  };
  
  convertToPigLatin('animals do things');
  