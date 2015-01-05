function SimpleSymbols(str) { 
  for(var i=0;i<str.length;i++){
    if(str[0]==="+"&&str[str.length-1]==="+"){
      return true;
    }else {
        return false;
    }}
  // code goes here  
  return str; 
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
SimpleSymbols(readline());           
