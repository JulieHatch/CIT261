/**********************************************************
 * The function that sets off the rest of the functions for
 * this page.
**********************************************************/
function start(){
	document.getElementById("dColor").innerHTML = 
	localStorage.color;
	document.getElementById("dFood").innerHTML = 
	sessionStorage.food;
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
	localStorage.color = color;
	sessionStorage.food    = food;
	start();
}