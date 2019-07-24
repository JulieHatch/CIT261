/**********************************************************
 * Gets the current weather of a specific zip code 
 * specified by the user.
**********************************************************/
function getWeather(){
	// Declare and set variables to be used in this function.
	var lat		= document.getElementById("lat").value;
	var lon		= document.getElementById("lon").value;
	// set the url based on what the user input
	var api     = "https://fcc-weather-api.glitch.me/api/current?lat="
				+ lat + "&lon=" + lon;
	var xhttp 	= new XMLHttpRequest();
	var info	= "";
	var weather = "";
	var wind;
	var temp;
	
	// request and process the data
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			// parse the information received
			info = JSON.parse(this.responseText);
			// place these elements on the page
			document.getElementById("temp").innerHTML    = info.main.temp;
			document.getElementById("high").innerHTML    = info.main.temp_max;
			document.getElementById("low").innerHTML     = info.main.temp_min;
			document.getElementById("weather").innerHTML = info.weather[0].main;
			document.getElementById("wind").innerHTML    = info.wind.speed;
			
			// grab values to be used for activities
			temp 	= info.main.temp;
			weather = info.weather[0].main;
			wind    = info.wind.speed;
			// call get activies using the information gathered
			getActivities(temp, weather);
		}
	};
	xhttp.open("GET", api, true);
	xhttp.send();
}

/**********************************************************
 * Determine best activities for the user.
**********************************************************/
function getActivities(temp, weather){
	// If the temperature is ideal
	//use ID for determining weather instead of description
	// Outdoors/active
	if (weather == "Clear")
	{
		if (wind > 4 && wind < 10){
			document.getElementById("activities").innerHTML = "Fly a kite!";
		}
		else {
			document.getElementById("activities").innerHTML = "Go for a swim!";
		}
	}
	if (weather == "Clouds"){
		if (wind > 4 && wind < 10){
			document.getElementById("activities").innerHTML = "Fly a kite!";
		}
		else {
			document.getElementById("activities").innerHTML = "Find shapes in clouds!";
		}
	}
	if (weather == "Thunderstorm"){
		//if (type == "Relaxed"){
			document.getElementById("activities").innerHTML = "Play a board game";
		//}
	}
	if (weather == "Snow"){
		// Nothing too cold to be out in
		if (description == "light snow" || description == "Snow" || description == "Heavy snow" ){
			document.getElementById("activities").innerHTML = "Build a snowman";
		}
		else {
			document.getElementById("activities").innerHTML = "Find shapes in clouds!";
		}
	}
	if (weather == "Drizzle"){
		// Nothing too cold to be out in
		//if (type=="active"){
			document.getElementById("activities").innerHTML = "Splash in a puddle while looking for rainbows.";
		/*}
		else {
			document.getElementById("activities").innerHTML = "Play a board game";
		*/}
	}
	if (weather == "Rain"){
		// Nothing too cold to be out in
		//if (type=="active"){
			document.getElementById("activities").innerHTML = "Splash in a puddle while looking for rainbows.";
		//}
		//else {
		//	document.getElementById("activities").innerHTML = "Play a board game";
		//}
	}
	
}

// MOVE FAVORITE FOR LOCAL STORAGE