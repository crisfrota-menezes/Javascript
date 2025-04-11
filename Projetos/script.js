let startButton = document.getElementById("start");
let guessButton = document.getElementById("guessButton");
let playAgainButton = document.getElementById("playAgain");
let randNum;

function startGame() {
  randNum = Math.floor(Math.random() * 100) + 1;
  document.getElementById("game").style.display = "block";
  document.getElementById("header").style.display = "none";
  document.getElementById("welcome").style.display = "none";
  startButton.style.display = "none";
  document.getElementById("guess").value = "";
  document.getElementById("result").innerText = "";
}

startButton.onclick = function () {
  startGame();
};

guessButton.onclick = function () {
  let actualGuess = parseInt(document.getElementById("guess").value);
  let result = document.getElementById("result");

  if (isNaN(actualGuess) || actualGuess < 1 || actualGuess > 100) {
    result.innerText = "Por favor, insira um número entre 1 e 100.";
    result.style.color = "red";
    return;
  }

  if (actualGuess === randNum) {
    result.innerText = "Parabéns! Você acertou o número!";
    result.style.color = "green";
    playAgainButton.style.display = "block";
  } else if (actualGuess < randNum) {
    result.innerText = "Tente um número maior!";
    result.style.color = "red";
  } else {
    result.innerText = "Tente um número menor!";
    result.style.color = "red";
  }
};

playAgainButton.onclick = function () {
  playAgainButton.style.display = "none";
  startGame();
};
