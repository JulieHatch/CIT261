/**********************************************************
 * Starts the Transition and switches the transition if the
 * user requests it
**********************************************************/
function colorTrans(){
	var box = document.getElementById('transition');
	var buttonTrans = document.getElementById('buttonTrans').innerHTML;
	// check if it is blue or orange
	if (box.style.background == '#3c576d'){
		box.style.background = '#ef8a1f';
		buttonTrans          = "Blue";
	}
	else {
		box.style.background = '#3c576d';
		buttonTrans          = "Orange";
	}
}

/**********************************************************
 * Starts the Animation
**********************************************************/
function colorAnim(){
	
}
