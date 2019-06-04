/**********************************************************
 * The function that sets off the rest of the functions for
 * this page.
*********************************************************
function start(){

}*/

/**********************************************************
 * This function shows a simple example of a createElement
 * and appendChild
**********************************************************/
function sCreateEx(){
	// get the div element I wish to add the new element that I created.
	var sCreateEx = document.getElementById("sCreateEx");
	// create the element
	var created   = document.createElement("span");
	created.innerHTML = " This text was added after you clicked the button!";
	// add the new element to div tag with id ="sCreateEx"
	sCreateEx.appendChild(created);
}

