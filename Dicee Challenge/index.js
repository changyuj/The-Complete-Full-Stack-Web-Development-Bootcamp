var dices = [1,2,3,4,5,6]
var dice1 = dices[Math.floor(Math.random() * 6)];
var dice2 = dices[Math.floor(Math.random() * 6)];
document.querySelector(".img1").setAttribute("src","./images/dice"+dice1+".png");
document.querySelector(".img2").setAttribute("src","./images/dice"+dice2+".png");

if (dice1 > dice2) {
    document.querySelector("h1").textContent = "🚩Player 1 Wins!";
}
else if (dice1 < dice2) {
    document.querySelector("h1").textContent = "Player 2 Wins!🚩";
}
else if (dice1 === dice2) {
    document.querySelector("h1").textContent = "Draw!";
}
