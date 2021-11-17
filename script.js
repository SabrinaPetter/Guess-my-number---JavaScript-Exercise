"use strict";

let number = Math.trunc(Math.random() * 100) + 1;
let score = 10;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

const changeBackgroundColor = function (color) {
  document.querySelector("body").style.backgroundColor = color;
};

const displayNumber = function (number) {
  document.querySelector(".number").textContent = number;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  //no input
  if (!guess) {
    displayMessage("You need to choose a number!");

    //winner pick
  } else if (guess === number) {
    displayMessage("You chose wisely! You win! 👑");
    changeBackgroundColor("#57A357");
    document.querySelector(".number").style.width = "30rem";
    displayNumber(number);

    if (highscore < score) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }

    //wrong number
  } else if (guess !== number) {
    if (score > 1) {
      displayMessage(
        guess > number
          ? "You chose poorly! Your number was too high ⬆️ "
          : "You chose poorly! Your number was too low ⬇️ "
      );

      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "Too bad, you lost 😢";
      changeBackgroundColor("#E05F5F");
      document.querySelector(".score").textContent = "0";
      displayNumber(number);
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  number = Math.trunc(Math.random() * 100) + 1;
  score = 10;
  displayMessage("Start guessing...");
  document.querySelector(".score").textContent = score;
  changeBackgroundColor("#c79f9f");
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
});
