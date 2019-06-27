/**********************************************************
 * Gets the current weather of a specific zip code 
 * specified by the user.
**********************************************************/
function getWeather(){
	// Declare and set variables to be used in this function.
	var zip		= document.getElementById("zipCode").value;
	var weather = document.getElementById("weather");
	
	var mykey = config.MY_KEY;
	// Call function to send request
	weather.innerHTML = mykey;
	// Call function to translate request
}