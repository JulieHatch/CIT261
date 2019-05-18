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
	
	//This is a simple for loop
	for (i=0; i <= 4;i++){
		stuffFor += "For loop for four times.<br>";
	}
	document.getElementById("lFor").innerHTML = stuffFor;
	i=0; // reset i
	
	//This is a simple while loop
	while (i<4){
		stuffWhile+= "Looped through while loop" + i + " times.<br>";
		i++;
	}
	document.getElementById("lWhile").innerHTML = stuffWhile;
	i=0; // reset i
	
	//This is a simple do while loop
	do{
		stuffDoWhile+= "Looped through do while loop" + i + " times.<br>";
		i++;
	}
	while(i<=3);
	document.getElementById("lDoWhile").innerHTML = stuffDoWhile;
}

/**********************************************************
 * Simple examples of how to use for loops, while loops,
 * and do while loops. Nothing really exciting.
**********************************************************/
function condStatment(){
	//declare variables
	var i = 1;
	var j = 2;
	var k = 3;
	
	//This is a simple if statement
	
}