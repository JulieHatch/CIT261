/**********************************************************
 * Gets the current weather of a specific zip code 
 * specified by the user.
**********************************************************/
function getWeather(){
	// Declare and set variables to be used in this function.
	var zip		= document.getElementById("zipCode").value;
	var weather = document.getElementById("weather");
	
	request(zip);

}

function request(zip) {
	var api = "https://fcc-weather-api.glitch.me/api/current?lat=35&lon=139";
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("weather").innerHTML =
      this.responseText;
    }
  };
	xhttp.open("GET", api, true);
	xhttp.send();
}