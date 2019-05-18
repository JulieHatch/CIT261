/**********************************************************
 * Simple examples of how to use for loops, while loops,
 * and do while loops. Nothing really exciting.
**********************************************************/
function start(){
	looper();
	condStatment();
}

/**********************************************************
 * Simple examples of how to use for loops, while loops,
 * and do while loops. Nothing really exciting.
**********************************************************/
function looper(){
	//declare variables
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
	//declare variables
	var i = 1;
	var j = 2;
	var k = 3;
	var sIf = "";
	var sElsei = "r";
	var sElseIf = "";
	var sSwitch = "";
	
	// This is a simple if statement
	if (i == 1){
		sIf = "Conditional statement, \"if (i == 1)\", is true.";
	}
	document.getElementById("sIf").innerHTML = sIf;
	
	// This is a simple example of an else statement
	if (i == 2){
		sElsei = "Conditional statement, \"if (i == 2)\", is true.";
	}else{
		sElsei = "Conditional statement, \"if (i == 2)\", is false.";
	}
	document.getElementById("sElse").innerHTML = "ersrf";
	
	// This is a simple example of else if statements
	if (i == 2){
		sElseIf = "Conditional statement, \"if (i == 2)\", is true.";
	}else if(i == 1){
		document.getElementById("sElseIf").innerHTML = 
		"Conditional statement, \"if (i == 2)\", is false."+
		"However, conditional statement, \"if (i == 1)\", is true.";
	}else{
		document.getElementById("sElseIf").innerHTML = 
		"Conditional statement, \"if (i == 2)\", is false."+
		"and conditional statement, \"if (i == 1)\", is false.";
	}
	document.getElementById("sElseIf").innerHTML = sElseIf;
	// This is a simple example of a switch statement
	switch (i){
		case 0:
			document.getElementById("sSwitch").innerHTML = "oops";
			break;
		case 1:
			document.getElementById("sSwitch").innerHTML = 
			"Case 1 was true!";
			break;
		case 2:
			document.getElementById("sSwitch").innerHTML = "oops";
			break;
		case 3:
			document.getElementById("sSwitch").innerHTML = "oops";
			break;
	}
}