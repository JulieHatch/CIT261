/**********************************************************
 * Starts the Transition and switches the transition if the
 * user requests it
**********************************************************/
function colorTrans(){
	// Grab and set the values I will be using.
	var box         = document.getElementById('transition');
	var buttonTrans = document.getElementById('buttonTrans');
	
	// check if it is blue or orange then changes color and button text
	if (buttonTrans.innerHTML == 'Orange'){
		box.style.backgroundColor = '#ef8a1f';
		buttonTrans.innerHTML = "Blue";
	}
	else {
		box.style.backgroundColor = '#3c576d';
		buttonTrans.innerHTML = "Orange";
	}
}

/**********************************************************
 * Starts the Animation
*********************************************************
function colorAnim(){
	
}
*/