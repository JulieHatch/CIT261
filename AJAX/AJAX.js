/**********************************************************
 * Gets the current weather of a specific zip code 
 * specified by the user.
**********************************************************/
function getWeather(){
	// Declare and set variables to be used in this function.
	var lat		= document.getElementById("lat").value;
	var lon		= document.getElementById("lon").value;
	var weather = document.getElementById("weather");
	var api     = "https://fcc-weather-api.glitch.me/api/current?lat="
				+ lat + "&lon=" + lon;
	var xhttp = new XMLHttpRequest();
	var info = "";
	var i;
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
		  info = JSON.parse(this.responseText);
		  document.getElementById("weather").innerHTML = info.main.temp;
		}
	};
	xhttp.open("GET", api, true);
	xhttp.send();

}