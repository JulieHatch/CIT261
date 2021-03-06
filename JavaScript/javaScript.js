/**********************************************************
 * The function that sets off the rest of the functions for
 * this page.
**********************************************************/
function start(){
	looper();
	condStatment();
	arrayed();
}

/**********************************************************
 * Simple examples of how to use for loops, while loops,
 * and do while loops. Nothing really exciting.
**********************************************************/
function looper(){
	// Declare variables
	var i;
	var stuffFor     = "";
	var stuffWhile   = "";
	var stuffDoWhile = "";
	
	// This is a simple for loop
	for (i=0; i < 4;i++){
		stuffFor += "Loop for four times.<br>";
	}
	document.getElementById("lFor").innerHTML = stuffFor;
	i=0; // reset i
	
	// This is a simple while loop
	while (i<4){
		stuffWhile+= "Looped through while loop " + i + " times.<br>";
		i++;
	}
	document.getElementById("lWhile").innerHTML = stuffWhile;
	i=0; // reset i
	
	// This is a simple do while loop
	do{
		stuffDoWhile+= "Looped through do while loop " + i + " times.<br>";
		i++;
	}
	while(i<=3);
	document.getElementById("lDoWhile").innerHTML = stuffDoWhile;
}

/**********************************************************
 * Simple examples of how to use conditional statements
 * such as if, else, else if, and switch statements.
**********************************************************/
function condStatment(){
	// Declare variables
	var i       = 1;
	var sIf     = "";
	var sElse   = "";
	var sElseIf = "";
	var sSwitch = "";
	
	// This is a simple if statement
	if (i == 1){
		sIf = "Conditional statement, \"if (i == 1)\", is true.";
	}
	document.getElementById("sIf").innerHTML = sIf;
	
	// This is a simple example of an else statement
	if (i == 2){
		sElse = "Conditional statement, \"if (i == 2)\", is true.";
	}else{
		sElse = "Conditional statement, \"if (i == 2)\", is false.";
	}
	document.getElementById("sElse").innerHTML = sElse;
	
	// This is a simple example of else if statements
	if (i == 2){
		sElseIf = "Conditional statement, \"if (i == 2)\", is true.";
	}else if(i == 1){
		sElseIf = "Conditional statement, \"if (i == 2)\", is false."+
		" However, conditional statement, \"if (i == 1)\", is true.";
	}else{
		sElseIf = "Conditional statement, \"if (i == 2)\", is false."+
		" and conditional statement, \"if (i == 1)\", is false.";
	}
	document.getElementById("sElseIf").innerHTML = sElseIf;
	
	// This is a simple example of a switch statement
	switch (i){
		case 0:
			sSwitch = "oops";
			break;
		case 1:
			sSwitch = "Case 1 was true!";
			break;
		case 2:
			sSwitch = "oops";
			break;
		case 3:
			sSwitch = "oops";
			break;
	}
	document.getElementById("sSwitch").innerHTML = sSwitch;
}

/**********************************************************
 * Simple examples of how to use and manipulate arrays.
 * Also includes simple example of an associative array.
**********************************************************/
function arrayed(){
	// Declare variables
	var arrayLoop       = "";
	var arrayAddElement = "";
	var arrayLoop2      = "";
	var aArray         = "";
	var i               = 0;
	
	// Declare a simple array
	var birds   = ["dove", "chicken", "turkey", "parrot"];
	
	// Display a single element of the array
	document.getElementById("arrayElement").innerHTML = birds[0];
	
	// Loop through simple array
	for (i=0; i < birds.length; i++){
		// Look a combination of all I need to learn
		if (i != birds.length-1)
			arrayLoop += birds[i] +", ";
		else
			arrayLoop += birds[i] +".";
	}
	
	// Add a element to the array
	birds[4]="pigeon";
	
	// Loop through simple array
	for (i=0; i < birds.length; i++){
		// Look a combination of all I need to learn
		if (i != birds.length-1)
			arrayLoop2 += birds[i] +", ";
		else
			arrayLoop2 += birds[i] +".";
	}
	
	// Here is an example of an associative array
	// Initial declaration
	var dog =[];
	
	// Set named indexes
	dog["breed"] = "Lab";
	dog["name"]  = "Max";
	
	/* To access them you must use their indexes, you can no longer use
       normal loops or commands that other arrays are allowed to use.  
	
	   I would not currently recommend using Associative Arrays*/
	
	// Just to show how to use parameters
	displayArrays(arrayLoop, arrayLoop2, dog);
}

/**********************************************************
 * Simple functions shows how to use parameters for 
 * JavaScript functions. This function displays arrays for
 * arrayed();
**********************************************************/
function displayArrays(arrayLoop, arrayLoop2, dog){
	document.getElementById("arrayLoop").innerHTML  = arrayLoop;
	document.getElementById("arrayLoop2").innerHTML = arrayLoop2;
	document.getElementById("aArray").innerHTML     = 
		dog["name"] + " is a " + dog["breed"] + ".";
}