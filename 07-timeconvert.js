function TimeConvert(num) {
  if(num<60){
    return "0:"+num;
  }else if(num===60){
    return num/60+":0";
  }else if(num>60){
    var hour=Math.round(num/60);
    var minutes=num%60;
    return hour+":"+minutes;
  // code goes here  
  }else{
  return false; 
         
  }}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
TimeConvert(readline());           
