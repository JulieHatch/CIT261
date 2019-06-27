const aws = require('aws-sdk');

let s3 = new aws.S3({
  accessKeyId: process.env.S3_KEY,
  secretAccessKey: process.env.S3_SECRET
});
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