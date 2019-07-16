var safari;
if(navigator.userAgent.indexOf("Safari") != -1)
	{
		safari = true;
	}

//Sidebar buttons
scrSettings = {behavior:"smooth", block:"start", inline:"nearest"}
function toTop(){
	var top = document.getElementById("top");
	if safari{
		top.scrollIntoView();
	}
	else{
		top.scrollIntoView(scrSettings);
	}
	
	console.log("Scrolled to top")
}

//