/**********************************************************
 * This stringifies then parses the information the user inputs,
 * then displays that information for the user
**********************************************************/
function puppyFunction(){
	// set the variables to the values from user input
	var name  = document.getElementById("name").value;
	var age   = document.getElementById("age").value;
	var breed = document.getElementById("breed").value;
	
	// create an object
	anObject = {name: name, age: age, breed: breed};
	
	// stringify the object
	stringifiedObject = JSON.stringify(anObject);
	document.getElementById("stringified").innerHTML = stringifiedObject;
	
	// This is where you would store the information or send it out
	// but that is not a part of this project
	
	// parse the object
	parsedObject = JSON.parse(stringifiedObject);
	
	// display the object in a sentence for the user.
	document.getElementById("parsed").innerHTML = parsedObject.name 
	+ " is a " + parsedObject.age + " year old " + parsedObject.breed + ".";
}