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
 * Starts the Transition, the transition changes shape from
 * blue circle to a red square or a red square to a blue 
 * circle upon user's request.
**********************************************************/
function comboTrans(){
	// Grab and set the values I will be using.
	var circle        = document.getElementById('transCombo');
	var butComboTrans = document.getElementById('butComboTrans');
	
	// check if it is a blue circle or an orange square then 
	// changes the shape, color, and the button text
	if (butComboTrans.innerHTML == 'Blue Circle'){
		circle.style.borderRadius    = '50px';
		circle.style.backgroundColor = '#3c576d';
		butComboTrans.innerHTML      = "Orange Square";
	}
	else {
		circle.style.borderRadius    = '0px';
		circle.style.backgroundColor = '#ef8a1f';
		butComboTrans.innerHTML      = "Blue Circle";
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
