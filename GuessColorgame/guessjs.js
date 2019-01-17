var numsquares = 6;
var colors = generaterandomcolors(numsquares);

var head = document.querySelector("h1");
var allsquares = document.querySelectorAll(".square");
var goalcolor = pickrandomcolor();
var colorDisplay = document.getElementById("colordisplay");
var message = document.getElementById("message");
var resettag = document.getElementById("resetid");
var modbuttons = document.querySelectorAll(".mode");

for (var i = 0; i < modbuttons.length; i++) 
	{
		modbuttons[i].addEventListener("click",function(){
			modbuttons[0].classList.remove("selected");
			modbuttons[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent==="Easy" ? numsquares = 3 : numsquares = 6;
		    
		    colors = generaterandomcolors(numsquares);
		    for (var i = 0; i < allsquares.length; i++) 
			 {
				if(colors[i]){
				allsquares[i].style.display = "block";
				allsquares[i].style.background = colors[i];
			    }
			    else  {allsquares[i].style.display = "none";}
			 }
			goalcolor = pickrandomcolor();
			colorDisplay.textContent = goalcolor;
		})};


//resetting the colors 
resettag.addEventListener("click", function(){
	message.textContent = "";
	colors = generaterandomcolors(numsquares);
	for (var i = 0; i < allsquares.length; i++) 
	{
		allsquares[i].style.background = colors[i];
	}
	goalcolor = pickrandomcolor();
	colorDisplay.textContent = goalcolor;
	//  WHY NOT IN HEXA?
	head.style.background = "steelblue";
	if(resettag.textContent === "Play Again!") {resettag.textContent = "Get New Colors";}
});


colorDisplay.textContent = goalcolor; 

for (var i = 0; i < allsquares.length; i++) {
	allsquares[i].style.background = colors[i];

	allsquares[i].addEventListener("click",function(){
		var colorchoosen = this.style.background;
		if(colorchoosen === goalcolor) {
		    makecolorssame(goalcolor);
		    head.style.background = goalcolor;
		    message.style.color = "steelblue";
			message.textContent = "You Won";
			resettag.textContent = "Play Again!";
		}
		else {this.style.background="#252529";
				message.style.color = "steelblue";
				message.textContent = "Try Again";
				}
	});
}

function makecolorssame(color){
	for (var j = 0; j < allsquares.length; j++) {
		allsquares[j].style.background = color;
	} 
}

function pickrandomcolor(){
var ind = Math.floor(Math.random()*colors.length);
return colors[ind];
}

function generaterandomcolors(j){
	var colors = [];
	for (var i = 0; i < j; i++) {
		colors.push(generaterandomcolor());
	}
	return colors;
}

function generaterandomcolor(){
		var a = Math.floor(Math.random()*256);
		var b = Math.floor(Math.random()*256);
		var c = Math.floor(Math.random()*256);
		return "rgb("+a+", "+b+", "+c+")";
}
