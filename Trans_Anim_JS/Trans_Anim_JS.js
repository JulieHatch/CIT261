/**********************************************************
 * Starts the Transition and switches the transition if the
 * user requests it
**********************************************************/
function colorTrans(){
	// Grab and set the values I will be using.
	var circle      = document.getElementById('transition');
	var buttonTrans = document.getElementById('buttonTrans');
	
	// check if it is blue or orange then changes color and button text
	if (buttonTrans.innerHTML == 'Orange'){
		circle.style.backgroundColor = '#ef8a1f';
		buttonTrans.innerHTML        = "Blue";
	}
	else {
		circle.style.backgroundColor = '#3c576d';
		buttonTrans.innerHTML        = "Orange";
	}
}

/**********************************************************
 * Starts the Animation
**********************************************************/
function pauseResume(){
	// Grab and set the values I will be using.
	var circle     = document.getElementById('animation');
	var buttonAnim = document.getElementById('buttonAnim');
	
	if (buttonAnim.innerHTML == 'Pause'){
		circle.style.animationPlayState = 'pause';
		buttonAnim.innerHTML            = "Resume";
	}
	else {
		circle.style.animationPlayState = '#running';
		buttonAnim.innerHTML            = "Pause";
	}
}
