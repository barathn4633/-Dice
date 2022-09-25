var ranNum1=Math.floor(Math.random()*6)+1;
var ImgNam="images/dice"+ranNum1+".png";

document.querySelectorAll("img")[0].setAttribute("src", ImgNam);


var ranNum2=Math.floor(Math.random()*6)+1;
var ImgNam="images/dice"+ranNum2+".png";
document.querySelectorAll("img")[1].setAttribute("src",ImgNam);

if(ranNum1>ranNum2){
    document.querySelectorAll("h1")[0].innerHTML = "⛳ Player 1 wins!";
}
else if(ranNum1<ranNum2){
    document.querySelectorAll("h1")[0].innerHTML = "Player 2 wins! ⛳";
}
else document.querySelectorAll("h1")[0].innerHTML =" ⛳ Draw ⛳!!";