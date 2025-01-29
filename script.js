// Check JavaScript work correctly
// console.log("Hello World");

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3);

  if (randomNumber === 0) {
    return "Rock";
  } else if (randomNumber === 1) {
    return "Paper";
  } else {
    return "Scissors";
  }
}

function getHumanChoice() {
  const userChoice = prompt("Please enter your move").toLowerCase();
  if (userChoice === "rock") {
    return "Rock";
  } else if (userChoice === "paper") {
    return "Paper";
  } else if (userChoice === "scissors") {
    return "Scissors";
  } else {
    alert("Please enter a valid move");
  }
}

console.log(getComputerChoice());
console.log(getHumanChoice());