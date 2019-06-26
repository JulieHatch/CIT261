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
function removeClass(){
	document.getElementById("removeClass").classList.remove("basicClass");
}

/**********************************************************
 * This function changes a class's color
**********************************************************/
function changeColorClass(){
	document.getElementById("changeColorClass").className.style.backgroundColor
	= "#ef8a1f";
}

/**********************************************************
 * This function changes a class's shape from a rounded
 * square to a circle
**********************************************************/
function changeShapeClass(){
	document.getElementById("changeShapeClass").className.style.borderRadius
	= "50px";
}

/**********************************************************
 * This function adds an animation
**********************************************************/
function addAnim(){
	document.getElementById("addAnim").classList.add("animation");
}

/**********************************************************
 * This function changes a class's animation color
*********************************************************
function changeColorAnim(){
	document.getElementById("changeColorAnim").className.style.backgroundColor
	= "#ef8a1f";
}
*/

/**********************************************************
 * This function adds a transition
**********************************************************/
function addTrans(){
	document.getElementById("addTrans").classList.add("transition");
}

/**********************************************************
 * This function changes a class's transition color
*********************************************************
function changeColorTrans(){
	document.getElementById("changeColorTrans").className.style.backgroundColor
	= "#ef8a1f";
}
*/