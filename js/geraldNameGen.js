
var namePart1 = ["good", "sugar", "crazy", "silly", "cutie", "baby"];
var namePart2 = ["love", "liz", "tyler", "monkey", "goose", "ape", "pie", "girl"];

var name1 = "-";
var name2 = "-";


function generateName(elementID)
{
	
	while(name2 == name1)
	{

		var name1 = namePart1[Math.floor(Math.random() * namePart1.length)];

		var name2 = namePart2[Math.floor(Math.random() * namePart2.length)];
	
	}
	
	document.getElementById(elementID).innerHTML = name1 + " " + name2;	
	
}