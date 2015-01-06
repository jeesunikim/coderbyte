function LetterCapitalize(str) { 
  var words=str.split(" ");
  for(var i=0;i<words.length;i++){
    var firLet=words[i].substr(0,1);
    var rest=words[i].substr(1,words[i].length-1);
    words[i]=firLet.toUpperCase()+rest;
  }
  var completedSentence=words.join(" ");
  return completedSentence;
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
LetterCapitalize(readline());           
