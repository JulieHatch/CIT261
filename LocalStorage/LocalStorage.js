/**********************************************************
 * The function that sets off the rest of the functions for
 * this page.
**********************************************************/
function start(){
	document.getElementById("dColor").innerHTML = 
	sessionStorage.color;
	document.getElementById("dFood").innerHTML = 
	localStorage.food;
}

/**********************************************************
 * The function that sets off the rest of the functions for
 * this page.
**********************************************************/
function setFavorites(){
	// set variables
	var color = document.getElementById("color").value;
	var food  = document.getElementById("food").value;
	
	// now store variables
	sessionStorage.color = color;
	localStorage.food    = food;
	start();
}