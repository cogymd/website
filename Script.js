var safari = false;
if(navigator.userAgent.indexOf("Safari") != -1 && navigator.userAgent.indexOf("Chrome") == -1)
	{
		safari = true;
	}

//Sidebar buttons
scrSettings = {behavior:"smooth", block:"start", inline:"nearest"}

anchors = ["top","info","gallery", "testimonials", "purchase", "specifications"]
function goTo(n){
	var anc = document.getElementById(anchors[n]);
	if (safari){
		anc.scrollIntoView();
	}
	else{
		anc.scrollIntoView(scrSettings);
	}
	console.log("Scrolled to", anchors[n])
}
