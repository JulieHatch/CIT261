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
	
	// 1st object creation: Initialization
	var pup1 = {
		name: name,
		breed: breed,
		age: age,
		cuteness: cuteness,
		energy: energy,
		displayDescription: function() {
			return "<b>1st object creation is "
			+ "done using initialization</b><br>" 
			+ this.name + " is a " + this.age 
			+ " year old " + this.breed + ".";
		}
	};
	document.getElementById("puppy1").innerHTML = pup1.displayDescription();
	
	//2nd object creation: Constructor
	var pup2 = new Puppy_2(name, breed, age, cuteness, energy);
	pup2.displayDescription = function() {
		return "<b>2nd object creation is "
		+ "done using a constructor</b><br>" 
		+ this.name + " is a " + this.age 
		+ " year old " + this.breed + ".";
	}
	document.getElementById("puppy2").innerHTML = pup2.displayDescription();
	/*
	//3rd object creation: Object.create
	var Puppy3 = {
		// default values for object
		name: 'name',
		breed: 'breed',
		age: 'age',
		cuteness: 'cuteness',
		energy: 'energy'
	};
	var pup3 = Object.create(Puppy3);
	puppy_3(pup3, name, breed, age, cuteness, energy);*/
}

/**********************************************************
 * 2nd way to create an object is through constructors
**********************************************************/
function Puppy_2(name, breed, age, cuteness, energy){
	this.name = name;
	this.breed = breed;
	this.age = age;
	this.cuteness = cuteness;
	this.energy = energy;
	displayDescription: function() {
			return "<b>1st object creation is "
			+ "done using initialization</b><br>" 
			+ this.name + " is a " + this.age 
			+ " year old " + this.breed + ".";
		};
}

/**********************************************************
 * 3rd way to create an object is Object.create() this 
 * function assigns the properties to user inputted variables.
**********************************************************/
function puppy_3(pup3, name, breed, age, cuteness, energy){
	pup3.name = name;
	pup3.breed = breed;
	pup3.age = age;
	pup3.cuteness = cuteness;
	pup3.energy = energy;
}
