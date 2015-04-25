/* Make sure you do these last */

/*

Write a function that takes an array of integers and returns the sum of the integers after adding 1 to each.

plusOneSum([1, 2, 3, 4]); // 14

*/

var plusOneSum = function(array){
  var length = array.length;
  var sum = 0;
    for(var i = 0; i < length; i++){
       sum = sum + array[i];
    }
  return sum + array.length;
}
plusOneSum([1, 2, 3, 4]);

/*

Write a function that accepts a multi dimensional array and returns a flattened version.

flatten([1, 2, [3, [4], 5, 6], 7]) // [1, 2, 3, 4, 5, 6, 7]

*/

var flatten = function(array){
    var merged = [];
	merged = merged.concat.apply(merged, array);
	return merged;
}
flatten([1, 2, [3, [4], 5, 6], 7]) 

/*

Given an array [a1, a2, ..., aN, b1, b2, ..., bN, c1, c2, ..., cN] convert it to [a1, b1, c1, a2, b2, c2, ..., aN, bN, cN]

*/

var mixedup = ['a1', 'a2', 'a3', 'a4', 'a5', 'a6', 'a7', 'a8', 'a9', 'a10', 'a11', 'b1', 'b2', 'b3', 'b4', 'b5', 'b6', 'b7', 'b8', 'b9', 'b10', 'b11', 'c1', 'c2', 'c3', 'c4', 'c5', 'c6', 'c7', 'c8', 'c9', 'c10', 'c11'];

var sort = function(array){
   var newarray = [];
   var last = array[array.length - 1];
   var num = last.substr(1);
   for(var i = 1; i <= num; i++){
      newarray.push('a' + i, 'b' + i, 'c' + i)
   }
   return newarray;
}
sort(mixedup)
/*

There is an array of non-negative integers. A second array is formed by shuffling the elements of the first array and 
deleting a random element. Given these two arrays, find which element is missing in the second array.

*/

array1 = [1,2,3,5,7,8,9,22,55];
array2 = [1,2,3,5,7,8,9,55];

var findMissing = function(array1, array2){
   for(var i = 0; i < array1.length; i++){
   	  if(array2.indexOf(array1[i]) === -1){
   	  	return array1[i];
   	  }
   }
}
findMissing(array1, array2);
/*

Write a function that returns the longest word(s) from a sentence. The function should not return any duplicate words (case-insensitive).

Example

longestWords("You are just an old antidisestablishmentarian") // ["antidisestablishmentarian"]
longestWords("I gave a present to my parents") // ["present", "parents"]
longestWords("Buffalo buffalo Buffalo buffalo buffalo buffalo Buffalo buffalo") // ["buffalo"] or ["Buffalo"]

*/
var longestWords = function(str){
   var formatStr = str.split(' ');
   var longest = formatStr[0];
   for(var i = 1; i < formatStr.length; i++){
       if(formatStr[i].length > longest.length){
       	longest = formatStr[i]
       }
   }
   return longest;
}
longestWords("You are just an old antidisestablishmentarian") 
/*

If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Find the sum of all the multiples of 3 or 5 below 1000.

*/

var sumMultiplies = function(N){
	var sum = 0;
	for(var i = 0; i <= N; i++){
		if(i % 3 === 0 || i % 5 === 0){
			sum = sum + i;
		}
	}
  return sum;
}

sumMultiplies(1000)
/*

Remove duplicate characters in a given string keeping only the first occurrences. For example, if the input is ‘tree traversal’ the output will be "tre avsl".

*/

var sumMultiplies = function(N){
	var sum = 0;
	for(var i = 0; i <= N; i++){
		if(i % 3 === 0 || i % 5 === 0){
			sum = sum + i;
	}
  return sum;
}

/*
Write a sum method which will work properly when invoked using either syntax below.

console.log(sum(2,3));   // Outputs 5
console.log(sum(2)(3));  // Outputs 5

*/

var sum = function(x) {
  if (arguments.length == 2) {
    return arguments[0] + arguments[1];
  } else {
    return function(y) { return x + y; };
  }
}



