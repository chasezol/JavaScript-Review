var callFriend = function(){
  var friend = 'Jake';
  function callF(number){
    return 'Calling ' + friend + ' at ' + number;
  }
  return callF;
};

var myCallFriend = callFriend()
myCallFriend('435-215-9248');


/*

Write a function that accepts a function as it's first argument and returns a new function (which calls the original 
function that was passed in) that can only ever be executed once.

Once completed, add a second arguments that allows the function to be executed N number of times. After the function has 
been called N number of times, console.log('STAHHP');

*/

1.) 
var myFunction = function(otherfunction){
   return function newFunction(){
   	console.log("Hello World");
   }
}

var nFunction = myFunction();
nFunction()

2.) 
var myFunction = function(){
   return function newFunction(arg){
   	for(var i = 0; i < arg; i++){
   	console.log("STAHHP");
   }
  }
}

var nFunction = myFunction();
nFunction(2)