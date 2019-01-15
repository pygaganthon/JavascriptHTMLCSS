var p1button = document.querySelector("#p1b");
var p2button = document.querySelector("#p2b");
var p1display = document.querySelector("#p1d");
var p2display = document.querySelector("#p2d");
var rbutton = document.querySelector("#rb");
var input = document.querySelector("input");
var pspan = document.querySelector("p span");
var p1score=0;
var p2score=0;
var gameover = false;
var winningscore = 5;


p1button.addEventListener("click",function(){
	if(gameover) {console.log("GAMEOVER");}
	p1score++;
	if(p1score == winningscore/*anynumber in textarea*/) {
		p1display.classList.add("winner");
		p2display.classList.add("looser");
		gameover=true;
		p1button.disabled=true;
		p2button.disabled=true;
		}
	p1display.textContent = p1score;

});
p2button.addEventListener("click",function(){
	if(gameover) {console.log("GAMEOVER");}
	p2score++;
	if(p2score == winningscore) {
		p2display.classList.add("winner");
		p1display.classList.add("looser");
		gameover=true;
		p1button.disabled=true;
		p2button.disabled=true;
		alert("GAMEOVER: press reset to replay");
	}
	p2display.textContent = p2score;
});
rbutton.addEventListener("click",function(){
		reseteverything();
		alert("LETS START!");
	});
function reseteverything(){

	p1score=0;
	p2score=0;
	p1display.textContent=0;
	p2display.textContent=0;
	p1display.classList.remove("winner");
	p1display.classList.remove("looser");
	p2display.classList.remove("winner");
	p2display.classList.remove("looser");
	gameover=false;
	p1button.disabled=false;
	p2button.disabled=false;


}

input.addEventListener("change",function(){
	reseteverything();
	alert("LETS START!");
	winningscore = Number(this.value);
	pspan.textContent = winningscore;
	
});
