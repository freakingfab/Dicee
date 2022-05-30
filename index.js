var randomNumber1 = Math.floor((Math.random() * 6) + 1);
var randomdice1 = "dice" + randomNumber1 + ".png";
var randomdicechange1 = "images/" + randomdice1;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomdicechange1);

var randomNumber2 = Math.floor((Math.random() * 6) + 1);
var randomdice2= "dice" + randomNumber2 + ".png";
var randomdicechange2 = "images/" + randomdice2;
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomdicechange2);

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🎉 Player 1 Win's";
}
else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 Win's 🎉";
}
else {
    document.querySelector("h1").innerHTML = "Tie 😜";
}