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
  
  switch(userChoice) {
    case "rock":
      return "Rock";
    case "paper":
      return "Paper";
    case "scissors":
      return "Scissors";
    default:
      alert("Please enter a valid move");
  }
}

console.log(getComputerChoice());
console.log(getHumanChoice());