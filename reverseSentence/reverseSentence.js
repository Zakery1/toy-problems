var revSent = function(sent) {
    var reversed = '';
    for(var i = sent.length - 1; i >= 0; i--) {
      reversed += sent[i];
    }
    return reversed;
  }
  
  var a = revSent('I like interviews');
  console.log(a);