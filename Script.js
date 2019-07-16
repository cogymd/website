var safari = false;
if(navigator.userAgent.indexOf("Safari") != -1 && navigator.userAgent.indexOf("Chrome") == -1)
	{
		safari = true;
	}

//Sidebar buttons
scrSettings = {behavior:"smooth", block:"start", inline:"nearest"}

anchors = ["home","info","gallery", "testimonials", "purchase", "specifications", "contact"]
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

//Toggle sidebar
sidebarOn = false;
sidebarPos = -25;
var slide;
function toggleSidebar(){
	clearInterval(slide);
	slide = setInterval(moveSidebar, 5);
}

function moveSidebar(){
	sidebar = document.getElementById("sidebar");
	if (sidebarOn){
		if (sidebarPos <= -22){
			clearInterval(slide);
			sidebarOn = false;
		}
		else{
			sidebarPos -= 0.4;
			sidebar.style.left = sidebarPos + "%";
		}
	}
	else{
		if (sidebarPos >= 0){
			clearInterval(slide);
			sidebarOn = true;
			sidebar.style.left = "0%";
		}
		else{
			sidebarPos += 0.4;
			sidebar.style.left = sidebarPos + "%";
		}
	}

	sidebarButton = document.getElementById("toggleSidebar");
	if (sidebarPos> -16){
		sidebarButton.style.left = (sidebarPos + 17) + "%";
	}
	else{
		sidebarButton.style.left = "1%";
	}

	centerContent = document.getElementById("center");

	centerContent.style.left = (sidebarPos + 35) + "%";
}