var threeItems = [1,2,3];
//create a function named 'last' that returns the last item from 'threeItems'
//alert the result of your function

 var last = function(array){
 	var lastItem = array.length - 1;
 	return array[lastItem];
 }

last(threeItems);

/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//Loop through evenArray removing all values that aren't even 
var evenArray = [1,2,3,6,22,98,45,23,22,12];

 var evenValues = function(array){
 	var array1 = [];
    for(var i = 0; i < array.length; i++){
        if(array[i] % 2 == 0){
           array1.push(array[i]);
        }
     } 
     return array1; 
 }

evenValues(evenArray);

/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//below you're given a function that will return a random number between 0 and 30 and an 
//array full or numbers 'randomArray'. Your job is to write a function that will get a random 
//number, then loop through the array to see if that random number is in the array. If it is, 
//alert true, if it's not, alert false
var getRandomArbitrary = function() {
  return Math.floor(Math.random() * (30 - 0) + 0);
}
var randomArray = [0,3,4,5,6,7,9,14,17,24,25,26,29,30];

 var randomChecker = function(value, array){
       for(var i = 0; i < array.length; i++){
       	  if(array[i] === value){
       	  	return true;
       	  }
       }
     return false;
 }

randomChecker(getRandomArbitrary(), randomArray);

/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//Create a copy of first and save it into second. Then, add 6 and 7 to the end of second. 
//When you run this, first should be just [1,2,3,4,5] and second will be [1,2,3,4,5,6,7] if you 
//created your copy correctly.
var first = [1,2,3,4,5];
var second = [];
second.push(first);
second.push(6,7)

  //code here

alert(first) //[1,2,3,4,5];
alert(second) //[1,2,3,4,5,6,7];



/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//write a function called longest that takes in our sentence variable, and returns the 
//longest word in that sentence.
var sentence = "Dev Mountain is the best"

 var longestWord = function(input){
    var newSentence = input.split(" ");
    var longest = newSentence[0];
    for(var i = 1; i < newSentence.length; i++){
    	if(newSentence[i].length > longest.length){
    		longest = newSentence[i];
    	}
    }
    return longest;
 }

longestWord(sentence)
/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//write a function called capitalize that takes in the myPoem variable and capitalizes every 
//word 
var myPoem = 'What is a jQuery but a misunderstood object?'
//What is a jQuery but a misunderstood object? --> What Is A JQuery But A Misunderstood Object?

var capitalizeLetter = function(input){
    var splitLetter = input.split('')
    var newArray = [];
    for(var i = 0; i < splitLetter.length; i++){
         newArray.push(splitLetter[i].toUpperCase());

    }
    return newArray;
}



/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



var theOdyssey = "function expression or function declaration? Tis an obvious choice";
//Write a function called vowelCounter that takes in a string (theOdyssey) and returns how many 
//vowels are in that string.

function isVowel(input) {
	var newString = input.split('');
    var counter = 0;
    for(var i = 0; i < newString.length; i++){
    	if(['a', 'e', 'i', 'o', 'u'].indexOf(newString[i]) !== -1){
             counter = counter + 1;
    	}
    }
  console.log('The String has ' + counter + ' vowels.')
}

isVowel(theOdyssey)




