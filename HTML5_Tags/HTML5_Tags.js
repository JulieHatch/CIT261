/**********************Video Functions**********************/
/**********************************************************
 * Plays Video
**********************************************************/
function playVideo(){
	var video = document.getElementById("video").play();
}

/**********************************************************
 * Pauses Video
**********************************************************/
function pauseVideo(){
	var video = document.getElementById("video").pause();
}

/**********************************************************
 * Checks if video is muted then mutes it or unmutes it
**********************************************************/
function muteVideo(){
	// Declare and set variables used in this function
	var video 		 = document.getElementById("video");
	var videoMuteBut = document.getElementById("videoMuteBut");
	
	// Checks if muted or not
	if (video.volume == 0) {
		// if muted unmute volume
		video.volume 		   = 1;
		// OR
		// video.muted         = false;
		videoMuteBut.innerHTML = "Mute";
	}
	else {
		// if not muted mute volume
		video.volume 		   = 0;
		// OR 
		// video.muted         = true;
		videoMuteBut.innerHTML = "Unmute";
	}
}

/**********************Audio Functions**********************/
/**********************************************************
 * Plays audio
**********************************************************/
function playAudio(){
	document.getElementById("audio").play();
}

/**********************************************************
 * Pauses audio
**********************************************************/
function pauseAudio(){
	document.getElementById("audio").pause();
}

/**********************************************************
 * Checks if audio is muted then mutes it or unmutes it
**********************************************************/
function muteAudio(){
	// Declare and set variables used in this function
	var audio		 = document.getElementById("audio");
	var audioMuteBut = document.getElementById("audioMuteBut");
	
	// Checks if muted or not
	if (audio.volume == 0) {
		// if muted unmute volume
		audio.volume		   = 1;
		// OR
		// audio.muted         = false;
		audioMuteBut.innerHTML = "Mute";
	}
	else {
		// if not muted mute volume
		audio.volume		   = 0;
		// OR 
		// audio.muted         = true;
		audioMuteBut.innerHTML = "Unmute";
	}
}

/**********************Canvas Functions**********************/
/**********************************************************
 * Adds a circle to a canvas tag
**********************************************************/
function addSingleCircle(){
	// Declare and set variables
	var x = document.getElementById("simpleCircle").getContext("2d");
	
	// Now add the circle to the canvas
	x = beginPath();
	x.arc(30, 30, 20, 0, 2*Math.PI);
	x.fillStyle = "orange";
	x.fill();
}

/**********************************************************
 * Adds text from user input to a canvas tag
**********************************************************/
function addText(){
	// Declare and set variables
	var userText = document.getElementById("addText").value;
	var canvas = document.getElementById("addedText").getContext("2d");
	
	// Now add the text to the canvas
	canvas.fillText(userText, 25, 50);
}

/**********************************************************
 * Adds a circle to a canvas tag with a possibility of 
 * having multiple shapes
**********************************************************/
function addCircle(){
	// Declare and set variables
	var x = document.getElementById("addShapes").getContext("2d");
	
	// Now add the circle to the canvas
	x = beginPath();
	x.arc(30, 30, 20, 0, 2*Math.PI);
	x.fill();
}

/**********************************************************
 * Adds a square to a canvas tag with a possibility of 
 * having multiple shapes
**********************************************************/
function addSquare(){
	// Declare and set variables
	var x = document.getElementById("addShapes").getContext("2d");
	
	// Now add the square to the canvas
	x.beginPath();
	x.rect(50, 50, 20, 20);
	x.fillStyle = "red";
	x.fill();
}

/**********************************************************
 * Adds a line to a canvas tag with a possibility of 
 * having multiple shapes
**********************************************************/
function addLine(){
	// Declare and set variables
	var x = document.getElementById("addShapes").getContext("2d");
	
	// Now add the line to the canvas
	x.beginPath();
	x.moveTo(100, 100);
	x.lineTo(40, 40);
	x.strokeStyle = "blue";
	x.stroke();
}