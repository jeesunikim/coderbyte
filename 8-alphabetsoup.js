function AlphabetSoup(str) { 
  
    var arr = str.split('');
  
    arr.sort();
    return arr.join('');
            
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
AlphabetSoup(readline());           
