
var x=Math.floor(Math.random()*6)+1
document.firstElementChild.lastElementChild.firstElementChild.lastElementChild.lastElementChild.src="images/dice"+x+".png"
var y = Math.floor(Math.random()*6)+1
document.firstElementChild.lastElementChild.firstElementChild.getElementsByClassName("dice")[0].lastElementChild.src="images/dice"+y+".png"
if(x>y)
    document.querySelector("h1").textContent="Player 1 WON!"
else if(y==x)
    document.querySelector("h1").textContent="TIE!!"
else
    document.querySelector("h1").textContent="Player 2 WON!"

