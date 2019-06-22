/**********************************************************
 * Will display user's name once they click away from the 
 * input
**********************************************************/
function changing(){
	var change = document.getElementById("change").value;
	document.getElementById("changing").innerHTML = change;
}

/**********************************************************
 * Will display some text when the user clicks text.
**********************************************************/
function clicking(){
	document.getElementById("clicked").innerHTML = "You clicked the text!";
}

/**********************************************************
 * Will display user's name once they click away from the 
 * input
**********************************************************/
function touch(){
	document.getElementById("touch").innerHTML = "You touched the text!";
}

/**********************************************************
 * Will display user's name once they click away from the 
 * input
**********************************************************/
function load(){
	document.getElementById("load").innerHTML = "This was loaded";
}