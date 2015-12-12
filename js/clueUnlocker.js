
var codes = ["1111", "2222", "3333"];
var clues = ["This is the first clue", "This is the second clue", "This is the third clue"];

function displayClue(elementID, code)
{
	
	if(code != null || code != " " || code != "")
	{
	
		for(i = 0; i < codes.length; i++)
		{
		
			if(code == code[i])
			{
			
				document.getElementById(elementID).innerHTML = clues[i];
				break;
			
			}
		
		}
		
	}
	else
	{
		
		document.getElementById(elementID).innerHTML = clues[0];
		
	}
	
	document.getElementById(elementID).innerHTML = "Code is wrong, or you have typed it in wrong! Please contact developer.";
	
}