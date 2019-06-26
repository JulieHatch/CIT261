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
