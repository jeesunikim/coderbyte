function ABCheck(str) { 
  for(var i=0;i<str.length-1;i++){
    if(str[i]==="a"){
       if(str[i+4]==="b"){
      return true;
    }}else if(str[i]==="b"){
         if(str[i+4]==="a"){
           return true;
         }
    }
  }
  // code goes here  
  return false; 
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
ABCheck(readline());           
