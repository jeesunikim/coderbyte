function MeanMode(arr) { 
var order=arr.sort(function(a,b){return a-b});
var frequency={}; //finding mode stackoverflow: http://stackoverflow.com/questions/3783950/how-to-get-the-item-that-appear-the-most-time-in-an-array
var mean=0; //It has to be zero
var average;
var max=0;
var result;

for(var j=0;j<arr.length;j++){ //find mode
  frequency[order[j]]=(frequency[order[j]] || 0)+1; // increment frequency.
  // console.log(frequency[order[j]]);
  if(frequency[order[j]] > max) { // is this frequency > max so far ?
  max = frequency[order[j]];  // update max.
  result = order[j];          // update result.
  }
}

//the below works if the array for sure has repeated values.
// var mode=order[Math.floor(order.length/2)];
// console.log(mode);

for(var i=0;i<arr.length;i++){ //find average
  mean+=arr[i];
  }
  average=mean/arr.length;
  // console.log(average);
  if(result === average){
    return 1;
  }else{return 0;}
}

// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
MeanMode(readline()); 