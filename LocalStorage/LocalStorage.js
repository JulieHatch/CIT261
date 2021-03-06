/**********************************************************
 * The function that sets off the rest of the functions for
 * this page.
**********************************************************/
function start(){
	document.getElementById("dColor").innerHTML = 
	localStorage.color;
	document.getElementById("dFood").innerHTML = 
	sessionStorage.food;
	var stored = JSON.parse(sessionStorage.getItem('named'));
	document.getElementById("arrayEx").innerHTML = stored;
	
	var storedStory = JSON.parse(localStorage.getItem('story'));
	document.getElementById("objectEx").innerHTML = 
	storedStory.name + " was in " + storedStory.place + " eating " +
	storedStory.aFood+" with " + storedStory.aName + ".";
}

/**********************************************************
 * The function sets favorite food and color of a user and
 * stores the data in local and session storage.
**********************************************************/
function setFavorites(){
	// set variables
	var color = document.getElementById("color").value;
	var food  = document.getElementById("food").value;
	
	// now store variables
	localStorage.color  = color;
	sessionStorage.food = food;
	start();
}

/**********************************************************
 * This function sets an array based on user input and 
 * stores the array in session storage.
**********************************************************/
function setArray(){
	// set variables
	var dog  = document.getElementById("dog").value;
	var cat  = document.getElementById("cat").value;
	var bird = document.getElementById("bird").value;
	var bear = document.getElementById("bear").value;
	
	// create an array out of user variables.
	var animals = [dog, cat, bird, bear];
	// store in session storage
	sessionStorage.setItem('named', JSON.stringify(animals));
	
	// display what data was stored
	start();
}

/**********************************************************
 * This function creates an object based on user input and 
 * stores the object in local storage.
**********************************************************/
function setObject(){
	// set variables
	var name  = document.getElementById("name").value;
	var place = document.getElementById("place").value;
	var aFood = document.getElementById("aFood").value;
	var aName = document.getElementById("aName").value;
	
	// create an object out of user variables.
	var story = {
		name: name, 
		place: place, 
		aFood: aFood,
		aName: aName
	};
	
	// store in local storage
	localStorage.setItem('story', JSON.stringify(story));
	
	// display what data was stored
	start();
}