function ArrayAdditionI(arr) { 
arr.sort(function(a,b){return a - b}); //I understand the sort method. It causes an array to be sorted numerically and ascending, but why do we need function(a,b)? It works without the function.
//Correction the function is needed. For example, without a function, an array of [40,100,1,5,25,10] will bring [1,10,100,25,40,5] which is not correct. With the function, it compares the values and spits them out in the right ascending right order.
var largest = arr.pop();  // Set largest to last (largest) array value. Pop method always gets the last array value. In this case, the largest array value.
var sum = 0;
for (var i = 0; i < arr.length; i++){     // Start outer loop 
  sum += arr[i];
  // console.log(sum);
for (var j = 0; j < arr.length; j++){   // Start inner to begin sum
if (i != j) {     // Ensure we don't add the same array index to itself
  sum += arr[j];
//console.log(sum);
if (sum == largest) {
  return true;
}
}
}
for (var k = 0; k < arr.length; k++) {  // If no match, start 2nd loop to re-iterate removing index values
//To further explain the k loop, it is used to work back through and subtract array values in the order that they were initially added, to yield new results not otherwise obtainable.
if (i != k) {
  sum -= arr[k];
console.log(sum);
if (sum == largest) {
  return true;
}
}
}
sum = 0;    // Reset sum for outer loop
}
return false; 
}