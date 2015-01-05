function Palindrome(str) { 
  //var combined=str.split("");
  var test1;
  var test2;
  for(var i=str.length-1;i>=0;i--){
  test1=str[i];
  }
  for(var i=0;i<str.length;i++){
  test2=str[i]
  }
  if(test1===test2){return true;}else{return false;}
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
Palindrome(readline());           
