//Division not modulus
function ArithGeo(arr) { 
	for(var i=2;i<=arr.length;i++){
		if((arr[arr.length-1]-arr[arr.length-2])===(arr[arr.length-(i)]-arr[arr.length-(i+1)])){
			console.log("arithmetic");
		}else if((arr[arr.length-1]/arr[arr.length-2])===(arr[arr.length-i]/arr[arr.length-(i+1)])){ 
			console.log("geometric");
		}else{
			console.log("false");
		}}         
	}

//Lindsey's solution
// function ArithGeo(arr) { 
//   if ((arr[1] - arr[0]) === (arr[arr.length-1] - arr[arr.length-2])) {
//     return "Arithmetic";
//   } else if ((arr[1] / arr[0]) === (arr[arr.length-1] / arr[arr.length-2])) {
//     return "Geometric";
//   } else { 
//     return "-1"; 
//   }      
// }