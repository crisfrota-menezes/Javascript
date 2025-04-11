let randNum;

function startGame() {
  randNum = Math.floor(Math.random() * 100) + 1;
  console.log(randNum);
  document.getElementById("game").style.display = "block";
  document.getElementById("header").style.display = "none";
  document.getElementById("start").style.display = "none";
  document.getElementById("welcome").style.display = "none";
  document.getElementById("guess").value = "";
  document.getElementById("result").innerText = "";
}

function checkGuess() {
  let actualGuess = parseInt(document.getElementById("guess").value);
  let result = document.getElementById("result");

  if (actualGuess === randNum) {
    result.innerText = "Parabéns! Você acertou o número!";
    result.style.color = "green";
    document.getElementById("playAgain").style.display = "block";
  } else if (actualGuess < randNum) {
    result.innerText = "Tente um número maior!";
    result.style.color = "red";
  } else {
    result.innerText = "Tente um número menor!";
    result.style.color = "red";
  }
}

function playAgain() {
  document.getElementById("playAgain").style.display = "none";
  startGame();
}
