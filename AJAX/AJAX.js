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
	var xhttp = new XMLHttpRequest();
	var info = "";
	
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
		}
	};
	xhttp.open("GET", api, true);
	xhttp.send();

}