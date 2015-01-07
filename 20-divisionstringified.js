//mattlarsh's solution
//my variable for my test is num1=1000000000000; num2=10;
function DivisionStringified(num1,num2) { 
  var num = Math.round(num1/num2).toString().split("");
  var index = -3;
  while(num.length + index > 0){
    num.splice(index,0,",");//this splice method says that change the content of an array at num.length-3, 0 indicates it's not removing anything in this array, "," means "," is taking the splice.length-3 spot.
    index -= 4; //it going to keep looping until the while loop is < 0
  }
  //after this loop, index becomes -15 (3+4+4+4)
  //also num.length becomes 15 from 12 (because now it has three commas)
  return num.join("");
}

//splice method gets tricy when you use a negative value as a start
//for instance,
//var myAnimal=["dogs","monkey","penguin","turtle"];
//myAnimal.splice(1,0,"GERMAN SHEPHERD") //will bring ["dogs", "GERMAN SHEPHERD", "monkey", "penguin", "turtle"] obviously because it's taking over myAnimal[1];
//But when I use a negative value like: myAnimal.splice(-2,0,"FRENCH BULLDOG");
//It results in ["dogs", "GERMAN SHEPHERD", "monkey", "FRENCH BULLDOG", "penguin", "turtle"]
//Shouldn't it be ["dogs", "GERMAN SHEPHERD", "monkey", "penguin", "FRENCH BULLDOG", "turtle"] because it's replacing myAnimal[myAnimal.length-2]; (or is it not myAnimal.length-2)
//Okay I figured it out. They don't mean that it's myAnimal[myAnimal.length-2]; They mean that IF negative, will begin that many elements from the end.
