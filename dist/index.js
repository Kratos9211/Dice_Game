var randomNumber=Math.floor((Math.random()*6))+1;

var randomDice="dice"+randomNumber +".png"

var image1=document.querySelectorAll("img")[0];

image1.setAttribute("src",randomDice);

var randomNumber1=Math.floor((Math.random()*6))+1;

var randomDice1="dice"+randomNumber1 +".png";

var image2=document.querySelectorAll("img")[1];


image2.setAttribute("src",randomDice1);

if (randomNumber>randomNumber1){
    document.querySelector("h1").innerHTML="PLAYER 1 WINS";
}

else if (randomNumber1>randomNumber){
    document.querySelector("h1").innerHTML="PLAYER 2 WINS";
}

else{
    document.querySelector("h1").innerHTML="THE MATCH IS DRAW ,PLEASE TRY AGAIN";
}