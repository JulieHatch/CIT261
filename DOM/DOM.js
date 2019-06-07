/**********************************************************
 * This function shows a simple example of a createElement
 * and appendChild.
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

/**********************************************************
 * This function shows a simple example of a insertBefore
 * in the situation of an ordered list.
**********************************************************/
function sInsertEx(){
	// get the list number placement the user wishes item to placed in the list
	var sInsertNum  = document.getElementById("sInsertNum").value;
	// get the item the user wishes to be added to the list.
	var sInsertItem = document.getElementById("sInsertItem").value;
	
	// create the element
	var iCreated  = document.createElement("li");
	var iText     = document.createTextNode(sInsertItem);
	iCreated.appendChild(iText);
	
	// get the div element I wish to add the new element that I created.
	var sInsertEx = document.getElementById("sInsertEx");
    sInsertEx.insertBefore(iCreated, sInsertEx.childNodes[sInsertNum]);
}

/**********************************************************
 * This function shows a simple example of how to delete an
 * element.
**********************************************************/
function sDeleteEx(){
	// Declare and assign variables
	var sDeleteEx = document.getElementById("sDeleteEx");
	var deleteMe  = document.getElementById("deleteMe");
	
	// delete the element
	sDeleteEx.removeChild(deleteMe);
}