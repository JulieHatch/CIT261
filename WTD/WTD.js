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
			
			// grab values to be used for activities
			temp 	= info.main.temp;
			weather = info.weather[0].main;
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
	if(temp > 20.5 && temp < 29.4){
		document.getElementById("actResults").innerHTML = "between 20.5 and 29.4";
	}
	else{
		document.getElementById("actResults").innerHTML = "not between 20.5 and 29.4";
	}
}