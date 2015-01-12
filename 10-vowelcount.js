function VowelCount(str) { 
  var lowercaseStr=str.toLowerCase();
  var count=0;
  var vowels="aeiou";
  for(var i=0;i<str.length;i++){
    if(vowels.indexOf(str[i])>-1){
      count++;
    }}
     return count;    
  }
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
VowelCount(readline());           

//mattlarsh's code - super simple
function VowelCount(str) { 
  var vowels = str.match(/[aeiou]/g);
  return vowels.length;
}