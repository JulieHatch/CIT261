/**********************************************************
 * Starts the Transition and switches the color transition 
 * if the user requests it 
**********************************************************/
function colorTrans(){
	// Grab and set the values I will be using.
	var circle      = document.getElementById('transition');
	var buttonTrans = document.getElementById('buttonTrans');
	
	// check if it is blue or orange then changes color and 
	// button text
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
 * Starts the Transition, the transition changes shape from
 * circle to square or square to circle upon user's request.
**********************************************************/
function shapeTrans(){
	// Grab and set the values I will be using.
	var circle        = document.getElementById('transShape');
	var butShapeTrans = document.getElementById('butShapeTrans');
	
	// check if it is a circle or a square then changes the shape
	// and the button text
	if (butShapeTrans.innerHTML == 'Circle'){
		circle.style.borderRadius = '50px';
		butShapeTrans.innerHTML   = "Square";
	}
	else {
		circle.style.borderRadius = '0px';
		butShapeTrans.innerHTML   = "Circle";
	}
}

/**********************************************************
 * Allows the user to pause and resume an Animation that 
 * changes a shapes color
**********************************************************/
function colorPauseResume(){
	// Grab and set the values I will be using.
	var circle     = document.getElementById('animation');
	var buttonAnim = document.getElementById('buttonAnim');
	
	// checks if it is running or paused then changes play 
	// state and button text
	if (buttonAnim.innerHTML == 'Pause'){
		circle.style.animationPlayState = 'paused';
		buttonAnim.innerHTML            = "Resume";
	}
	else {
		circle.style.animationPlayState = 'running';
		buttonAnim.innerHTML            = "Pause";
	}
}

/**********************************************************
 * Allows the user to pause and resume an Animation that 
 * changes a shapes color
*********************************************************
function colorPauseResume(){
	// Grab and set the values I will be using.
	var circle     = document.getElementById('animation');
	var buttonAnim = document.getElementById('buttonAnim');
	
	// checks if it is running or paused then changes play 
	// state and button text
	if (buttonAnim.innerHTML == 'Pause'){
		circle.style.animationPlayState = 'paused';
		buttonAnim.innerHTML            = "Resume";
	}
	else {
		circle.style.animationPlayState = 'running';
		buttonAnim.innerHTML            = "Pause";
	}
}*/
