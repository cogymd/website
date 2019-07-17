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
sidebarPos = -21
var slide;
function toggleSidebar(){
	clearInterval(slide);
	slide = setInterval(moveSidebar, 5);
}

function moveSidebar(){
	sidebar = document.getElementById("sidebar");
	if (sidebarOn){
		if (sidebarPos <= -21){
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

	centerContent.style.left = (sidebarPos + 21) + "%";
}

var fullScreenOn = false;
var w = window.innerWidth;
var h = window.innerHeight;
var img;
var origWidth;
var origHeight;

var imgHeight;
var imgWidth;

var expand;
function fullScreen(n){
	
	if (fullScreenOn){
		img.style.position = "static";
		img.style.zIndex = "0";
		img.style.width = origWidth + "px";
		img.style.height = origHeight + "px";
		img.style.margin = "1em";
		fullScreenOn = false;
	}
	else{
		img = document.getElementsByClassName("galleryImg")[n];
		origWidth = parseInt(img.style.width.replace("px",""));
		origHeight = parseInt(img.style.height.replace("px",""));
		imgWidth = origWidth;
		imgHeight = origHeight;
		img.style.position = "fixed";
		img.style.zIndex = "3";

		img.style.left = "50%";
		img.style.marginLeft = imgWidth/-2 + "px";
		img.style.top = "50%";
		img.style.marginTop = imgHeight/-2 + "px";
		expand = setInterval(expandImg,5);
		
		fullScreenOn = true;
	}
}

function expandImg(){
	if (imgWidth < w && imgHeight < h){
		imgWidth *= 1.04;
		imgHeight *= 1.04;
		img.style.width = Math.round(imgWidth) + "px";
		img.style.height = Math.round(imgHeight) + "px";
		img.style.marginLeft = imgWidth/-2 + "px";
		img.style.marginTop = imgHeight/-2 + "px";
	}
	else{
		clearInterval(expand);
	}
	
}