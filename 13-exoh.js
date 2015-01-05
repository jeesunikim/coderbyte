function ExOh(str) { 
  var divide=str.split("");
  var count1=0;
  var count2=0;
  for(var i=0;i<str.length;i++){
    if(str[i]==="x"){
      count1++;
    }else if(str[i]==="o"){
      count2++;
    }}
  if(count1===count2){
    return true;
  }else{
    return false;}
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
ExOh(readline());           
