var randomNumber1 = Math.floor(Math.random() * 6) + 1;
document
  .querySelectorAll("img")[0]
  .setAttribute("src", "images/dice" + randomNumber1 + ".png");

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
document
  .querySelectorAll("img")[1]
  .setAttribute("src", "images/dice" + randomNumber2 + ".png");
// comparison
if (randomNumber1 > randomNumber2) {
  document.querySelector(".refresh").innerHTML = "Player 1 Wins";
}
if (randomNumber2 > randomNumber1) {
  document.querySelector(".refresh").innerHTML = "Player 2 Wins";
}
if (randomNumber1 === randomNumber2) {
  document.querySelector(".refresh").innerHTML = "Draw";
}
