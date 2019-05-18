/**********************************************************
 * The function that sets off the rest of the functions for
 * this page.
**********************************************************/
function start(){
	/*document.getElementById("dColor").innerHTML = 
	localStorage.color;
	document.getElementById("dFood").innerHTML = 
	sessionStorage.food;*/
	var stored= JSON.parse(sessionStorage.getItem('name'));
	document.getElementById("arrayEx").innerHTML = stored;
	
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
	//localStorage.color  = color;
	//sessionStorage.food = food;
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
	
	var animals = ['dog', 'cat', 'bird', 'bear'];
	// store in session storage
	sessionStorage.setItem('name', JSON.stringify(animals));
	start();
}

/**********************************************************
 * This function sets an object based on user input and 
 * stores the object in local storage.
**********************************************************/
function setArray(){
	// set variables

	start();
}