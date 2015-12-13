
var cuteNamePart1 = ["good", "sugar", "crazy", "silly", "cutie", "baby"];
var cuteNamePart2 = ["love", "liz", "tyler", "monkey", "goose", "ape", "pie", "girl"];

var offensiveNamePart1 = ["dick", "fuck", "autistic"];
var offensiveNamePart2 = ["weed", "fag", "tard"];

var name1 = "-";
var name2 = "-";


function generateName(elementID, isCute)
{
	
	if(isCute == true)
	{
	
		while(name2 == name1)
		{

			var name1 = cuteNamePart1[Math.floor(Math.random() * cuteNamePart1.length)];

			var name2 = cuteNamePart2[Math.floor(Math.random() * cuteNamePart2.length)];
	
		}
		
	}
	else
	{
	
		while(name2 == name1)
		{

			var name1 = offensiveNamePart1[Math.floor(Math.random() * offensiveNamePart1.length)];

			var name2 = offensiveNamePart2[Math.floor(Math.random() * offensiveNamePart2.length)];
	
		}
		
	}
	
	document.getElementById(elementID).innerHTML = name1 + " " + name2;	
	
}