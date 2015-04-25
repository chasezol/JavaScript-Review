//Create a Animal Constructor that has the following parameters. species, name, legs, color, food 
//(which is an array of foods they can eat).

  function animal(species, name, legs, color, food) {
  this.species = species,
  this.name = name,
  this.legs = legs,
  this.color = color,
  this.food = food
}



//Now create a person function that creates an object and returns it (not in constructor form) that has the 
//following parameters. name, age, height, gender

var person = function(name, age, height, gender){
  var newperson = {
    name: name,
    age: age,
    height: height,
    gender: gender
  }
return newperson; 
}


//Create a animal array and a person array.

var Animal  = [];

var Person = [];

//Create two instances of Animal and push those into your animal array


var Animal1 = new animal('12', 'LionCat', '5', 'Gray-Black', 'Humans');

var Animal2 = new animal('2', 'Lion', '7', 'Black', 'Bugs');

Animal.push(Animal1);
Animal.push(Animal2);

//Create two instances of person and push those into your person array.

var Person1 = person('Chase', '29', '6,5', 'Male');
var Person2 = person('Richard', '60', '6', 'Male');

Person.push(Person1);
Person.push(Person2);

//Now we want every instance of Animal to have a eat method. This method will choose a 
//random item in that instances food array, then alert "(name) ' ate ' 
//(whichever food was chosen)".

 Animal.eat = function(){
  alert(this[0].name + " ate " + this[0].food);
 }


//At this point, if we wanted to add something to every istance of person could we? 

  Moving forward we could by adding that something to the person function (or constructor function for animal). 
  The instances already created from person would have to be added individually. 



/*
  1) What happens when you use the 'new' keyword to call a Constructor function?
      A: It creates a new instance using that "Template" of the constructor function
  2) What's a good way to describe the keyword 'this'
      A: It is a way to reference whatever object you are working with, it is used as a way to reduce the effort of typing the object multiple times
  3) Can a normal function which creates an object and then returns that object use the prototype?
      A: Yes, every object has a prototype
  4) What happens if you forget to use 'new' when calling a constructor?
     A: It will think it is an already created function and try to reference that function.
*/