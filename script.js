var name1 = "Player 1";
var name2 = "Player 2";

document.querySelector(".btn").onclick = function () {
  name1 = prompt("Enter player 1 Name");
  name2 = prompt("Enter player 2 Name");
  document.querySelector(".player1").textContent = name1;
  document.querySelector(".player2").textContent = name2;
  diceroll();
};
function diceroll() {
  /* for first dice */
  var randomnumber1 = Math.random();
  randomnumber1 = Math.floor(randomnumber1 * 6) + 1;
  document
    .querySelector(".img1")
    .setAttribute("src", "images/dice" + randomnumber1 + ".png");

  /* for second dice */
  var randomnumber2 = Math.random();
  randomnumber2 = Math.floor(randomnumber2 * 6) + 1;
  document
    .querySelector(".img2")
    .setAttribute("src", "images/dice" + randomnumber2 + ".png");

  if (randomnumber1 === randomnumber2) {
    document.querySelector("h1").textContent = "Draw";
  }
  if (randomnumber1 > randomnumber2) {
    document.querySelector("h1").textContent = name1 + " wins";
  }

  if (randomnumber1 < randomnumber2) {
    document.querySelector("h1").textContent = name2 + " wins ";
  }
}

document.querySelector(".btn2").onclick = function () {
  diceroll();
};
