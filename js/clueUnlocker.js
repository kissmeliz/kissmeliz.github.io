
var codes = ["1111", "2222", "3333"];
var clues = ["This is the first clue", "This is the second clue", "This is the third clue"];

function displayClue(elementID, code)
{
	
	for(i = 0; i < codes.length; i++)
	{
	
		if(code == codes[i])
		{
		
			document.getElementById(elementID).innerHTML = clues[i];
			return 0;
		
		}
	
	}
	
	document.getElementById(elementID).innerHTML = "Code is wrong, or you have typed it in wrong! Please contact the sexy developer.";
	
}