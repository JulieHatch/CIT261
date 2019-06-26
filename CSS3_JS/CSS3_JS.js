/**********************************************************
 * This function adds a class to a div tag without a class.
**********************************************************/
function addClass(){
	document.getElementById("noClass").className = "basicClass";
	/*************************************
	* OR I COULD DO IT THIS WAY:
	* document.getElementById("noClass").classList.add("basicClass");
	*************************************/
}

/**********************************************************
 * This function changes class of a div tag.
**********************************************************/
function changeClass(){
	document.getElementById("aClass").className = "newClass";
}

/**********************************************************
 * This function toggles a class of a div.
**********************************************************/
function toggleClass(){
	thisClass = document.getElementById("toggleClass");
	if(thisClass.className == "basicClass"){
		thisClass.className = "newClass";
	}
	else {
		thisClass.className = "basicClass";
	}
	
	/*************************************
	* OR I COULD DO IT THIS WAY:
	* document.getElementById("noClass").classList.toggle("basicClass");
	*************************************/
}

/**********************************************************
 * This function adds a second class to a div tag with a class.
**********************************************************/
function addSecondClass(){
	document.getElementById("twoClass").classList.add("secondClass");
}

/**********************************************************
 * This function removes a class when the user requests it.
**********************************************************/
function removesClass(){
	document.getElementById("removeClass").classList.remove("basicClass");
}