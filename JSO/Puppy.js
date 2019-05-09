/**********************************************************
 * Simple definition of JavaScript Object and how to use
 * properties of object.
**********************************************************/
function demo(){
	// Simple definition of an js object
	var sPuppy = {
		name: "Max", 
		breed: "Poodle", 
		age: "3",
		description: function() {
			return this.name + " is a " +
			this.age + " year old " + 
			this.breed + ".<br>";
		}
		// "Max is a 3 year old Poodle."
	};
	
	// using method
	document.getElementById("method").innerHTML = 
	"Method: " + sPuppy.description();
	
	// add property to sPuppy
	sPuppy.cuteness = "very";
	document.getElementById("added").innerHTML = 
	"Added: " + sPuppy.cuteness + "<br>";
	
	// access the property of sPuppy
	document.getElementById("accessedP").innerHTML = 
	"AccessedP: " + sPuppy.cuteness + "<br>";
	
	document.getElementById("accessedB").innerHTML = 
	"AccessedB: " + sPuppy["cuteness"] + "<br>";
	
	// delete the property of sPuppy
	delete sPuppy.cuteness;
	document.getElementById("deleted").innerHTML = 
	"Deleted: " + sPuppy.cuteness + "<br>";
}

/**********************************************************
 * Gathers data and sets in motion all functions that relate
 * to different ways of creating a puppy.
**********************************************************/
function puppyFunctions(){
	// gather data from user.
	var name     = document.getElementById("name").value;
	var breed    = document.getElementById("breed").value;
	var age      = document.getElementById("age").value;
	var cuteness = document.getElementById("cuteness").value;
	var energy   = document.getElementById("energy").value;
	
	// 1st object creation: Literal notation
	var pup1 = {
		name: name,
		breed: breed,
		age: age,
		cuteness: cuteness,
		energy: energy,
		displayDescription: function() {
			return "<b>1st object creation is "
			+ "done using Literal notation</b><br>" 
			+ this.name + " is a " + this.age 
			+ " year old " + this.breed + ".<br>";
		}
	};
	document.getElementById("puppy1").innerHTML = pup1.displayDescription();
	
	//2nd object creation: Instantiation
	var pup2 = new Puppy_2(	name, breed, age, cuteness, energy);
	
	//Method declared after object is created.
	pup2.displayDescription2 = function() {
		return "<b>2nd object creation is "
		+ "done using instantiation</b><br>" 
		+ this.name + " is a " + this.age 
		+ " year old " + this.breed + ".<br>";
	};
	document.getElementById("puppy2").innerHTML = 
	pup2.displayDescription2();
	
	//3rd object creation: Object.create
	var Puppy3 = {
		// default values for object
		name: 'name',
		breed: 'breed',
		age: 'age',
		cuteness: 'cuteness',
		energy: 'energy',
		displayDescription: function() {
			return "<b>3rd object creation is "
			+ "done using Object.create()</b><br>" 
			+ this.name + " is a " + this.age 
			+ " year old " + this.breed + ".<br>";
		}
	};
	var pup3 = Object.create(Puppy3);
	
	// Now set the variables to what they should be
	pup3.name = name;
	pup3.breed = breed;
	pup3.age = age;
	
	document.getElementById("puppy3").innerHTML =
	pup3.displayDescription();
	
	//Now for inheritance
	inheritance();
}

/**********************************************************
 * Inheritance from Puppy_2
**********************************************************/
function inheritance(){
	Puppy_2.prototype.cost ="";
	var pup2I = new Puppy_2("Jenny", "Pug", 4);
	
	pup2I.cost ="$4.00";
	
	pup2I.displayDescription2 = function() {
		return "<b>2nd object creation is "
		+ "done using instantiation</b><br>" 
		+ this.name + " is a " + this.age 
		+ " year old " + this.breed + 
		" who costed: " + this.cost + ".<br>";
	};
	document.getElementById("puppy2I").innerHTML = 
	pup2I.displayDescription2();
}

/**********************************************************
 * Constructor for Puppy_2
**********************************************************/
function Puppy_2(name, breed, age){
	this.name = name;
	this.breed = breed;
	this.age = age;
}
