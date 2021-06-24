const playerOneInput = document.getElementById("playerOneInput");
const gameResult = document.getElementById("gameResult");
// const gameOptions = ["pedra", "papel", "tesoura"];
const startGame = document.getElementById("startGame");

function iniciarJokenpo() {
  let playerOneInputVar = playerOneInput.value;
  let userInput = playerOneInputVar.toLowerCase();
  let computerChoice = Math.floor(Math.random() * 3);

  if (
    userInput === "" ||
    (userInput !== "pedra" && userInput !== "papel" && userInput !== "tesoura")
  ) {
    alert("Por favor, insira uma opção válida");
    playerOneInput.focus();
    return;
  }

  if (userInput === "tesoura" && computerChoice === 0) {
    console.log(computerChoice);
    gameResult.textContent = "O computador venceu";
  } else if (userInput === "tesoura" && computerChoice === 1) {
    gameResult.textContent = "Parabéns! Você ganhou";
    console.log(computerChoice);
  } else if (userInput === "pedra" && computerChoice === 1) {
    gameResult.textContent = "O computador venceu";
    console.log(computerChoice);
  } else if (userInput === "pedra" && computerChoice === 2) {
    gameResult.textContent = "Parabéns! Você ganhou";
    console.log(computerChoice);
  } else if (userInput === "papel" && computerChoice === 2) {
    gameResult.textContent = "O computador venceu";
    console.log(computerChoice);
  } else if (userInput === "papel" && computerChoice === 1) {
    gameResult.textContent = "Parabéns! Você ganhou";
    console.log(computerChoice);
  } else {
    gameResult.textContent = "Empate!";
    console.log(computerChoice);
  }
}

startGame.addEventListener("click", iniciarJokenpo);
