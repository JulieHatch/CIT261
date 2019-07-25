/**********************************************************
 * Checks if the user has used a different position and
 * if so changes variables to previously stored position.
**********************************************************/
function storedInfo(){
	// set variables to stored variables
	var lon = JSON.parse(localStorage.getItem('lon'));
	var lat = JSON.parse(localStorage.getItem('lat'));
	
	// TODO: Possibly add a check box to use default location
	//document.getElementById("testLon").innerHTML = lon;
	//document.getElementById("testLat").innerHTML = lat;
	
	//Check if the position is empty
	if(lon != "" || lat != ""){
		// if not change position in the input boxes
		document.getElementById("lon").value = lon;
		document.getElementById("lat").value = lat;
	} 
	else {
		// if it is empty set the position to the default
		document.getElementById("lon").value = "43.8231";
		document.getElementById("lat").value = "-111.7924";
	}
}
/**********************************************************
 * Gets the current weather of a specific zip code 
 * specified by the user.
**********************************************************/
function getWeather(){
	// Declare and set variables to be used in this function.
	var lat		= document.getElementById("lat").value;
	var lon		= document.getElementById("lon").value;
	
	// store in session storage
	localStorage.setItem('lon', JSON.stringify(lon));
	localStorage.setItem('lat', JSON.stringify(lat));
	
	// set the url based on what the user input
	var api     = "https://fcc-weather-api.glitch.me/api/current?lat="
				+ lat + "&lon=" + lon;
	var xhttp 	= new XMLHttpRequest();
	var info	= "";
	var weather = "";
	var icon 	= "";
	var wind;
	var temp;
	var id;
	
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
			id 		= info.weather[0].id;
			temp 	= info.main.temp;
			weather = info.weather[0].main;
			wind    = info.wind.speed;
			var testI = document.getElementById("test-icon");
			var icon = document.getElementById("icon");
			
			// TODO: find icon to use and set icon for user to see
			//Switchcase here
			switch (weather) {
				case "Rain":
					icon.href = "http://openweathermap.org/img/wn/10d@2x.png";
					testI.innerHTML = "Rain";
					break;
				case "Thunderstorm":
					icon.href = "http://openweathermap.org/img/wn/11d@2x.png";
					testI.innerHTML = "Thunderstorm";
					break;
				case "Snow":
					icon.href = "http://openweathermap.org/img/wn/13d@2x.png";
					testI.innerHTML = "Snow";
					break;
				case "Drizzle":
					icon.href = "http://openweathermap.org/img/wn/09d@2x.png";
					testI.innerHTML = "Drizzle";
					break;
				case "Clear":
					icon.href = "http://openweathermap.org/img/wn/01d@2x.png";
					testI.innerHTML = "Clear";
					break;
				case "Clouds":
					icon.href = "http://openweathermap.org/img/wn/03d@2x.png";
					testI.innerHTML = "Clouds";
					break;
				default:
					icon.href = "http://openweathermap.org/img/wn/50d@2x.png";
					testI.innerHTML = "Other";
			}
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
	// Grab the type of activity the user requested
	var type = document.getElementById("activityType").value;
	// Determine if it is healthy for humans to have activities outside
	if (temp < -0.555556 || temp > 32.7778){
		// because the temperatures are at a health risk people should stay inside.
		weather = "indoors";
	}
	// Use weather to determine if activity is appropriate
	if (weather == "Clear")
	{
		if (type == "active") {
			if (wind > 4 && wind < 10){
				document.getElementById("activities").innerHTML = "Fly a kite!";
			}
			else {
				document.getElementById("activities").innerHTML = "Go for a swim!";
			}
		}
		if (type == "creative") {
			document.getElementById("activities").innerHTML = "Draw on the side walk with chalk";
		}
		if (type == "relaxing") {
			document.getElementById("activities").innerHTML = "Read outside under a tree or in a hammock";
		}
		if (type == "learning") {
			document.getElementById("activities").innerHTML = "Go to a national park and take a tour";
		}
	}
	if (weather == "Clouds"){
		if (type == "active") {
			document.getElementById("activities").innerHTML = "Go for a jog";
		}
		if (type == "creative") {
			document.getElementById("activities").innerHTML = "Look for shapes in the clouds and try drawing what you see";
		}
		if (type == "relaxing") {
			document.getElementById("activities").innerHTML = "Get a massage";
		}
		if (type == "learning") {
			document.getElementById("activities").innerHTML = "Go to your local library";
		}
	}
	if (weather == "Thunderstorm"){
		if (type == "active") {
			document.getElementById("activities").innerHTML = "Go to your local gym and take a class";
		}
		if (type == "creative") {
			document.getElementById("activities").innerHTML = "Try learning a new instrument";
		}
		if (type == "relaxing") {
			document.getElementById("activities").innerHTML = "Try out yoga";
		}
		if (type == "learning") {
			document.getElementById("activities").innerHTML = "Go to a museum";
		}
	}
	if (weather == "Snow"){
		// Nothing too cold to be out in
		if (description == "light snow" || description == "Snow" || description == "Heavy snow" ){
			if (type == "active") {
				document.getElementById("activities").innerHTML = "Build a snowman";
			}
			if (type == "creative") {
				document.getElementById("activities").innerHTML = "Try sculpting with snow";
			}
			if (type == "relaxing") {
				document.getElementById("activities").innerHTML = "Drink hot chocolate and watch the snow fall";
			}
			if (type == "learning") {
				document.getElementById("activities").innerHTML = "Learn how snow is formed";
			}
		}
		else {
			weather == "indoor";
		}
	}
	if (weather != "Snow" && weather != "Clear" && weather != "Thunderstorm" && weather != "Clouds"){
		weather == "indoor";
	}
	if (weather == "indoor"){
		if (type=="active"){
			document.getElementById("activities").innerHTML = "Try a new at home workout video.";
		}
		if (type == "creative") {
			document.getElementById("activities").innerHTML = "Try a crafting tutorial";
		}
		if (type == "relaxing") {
			document.getElementById("activities").innerHTML = "Take a nap";
		}
		if (type == "learning") {
			document.getElementById("activities").innerHTML = "Watch a documentary";
		}
	}
	
}