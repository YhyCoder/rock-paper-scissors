// Check JavaScript work correctly
// console.log("Hello World");

const userChoice = prompt("Please enter your move").toLowerCase();
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3);

  switch(randomNumber) {
    case 0:
      return "Rock";
    case 1:
      return "Paper";
    default:
      return "Scissors";
  }
}

function getHumanChoice(userChoice) {
  switch (userChoice) {
    case "rock":
      return "Rock";
    case "paper":
      return "Paper";
    case "scissors":
      return "Scissors";
    default:
      alert("Please enter a valid move");
      return userChoice;
  }
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice === "Rock") {
    switch (computerChoice) {
      case "Scissors":
        console.log("Congratulations, You win! Rock beats Scissors");
        humanScore++;
        break;
      case "Paper":
        console.log("You lose! Paper beats Rock");
        computerScore++;
        break;
      default:
        console.log("Draw!");
    }
  } else if (humanChoice === "Paper") {
    switch (computerChoice) {
      case "Rock":
        console.log("Congratulations, You win! Paper beats Rock");
        humanScore++;
        break;
      case "Scissors":
        console.log("You lose! Scissors beats Paper");
        computerScore++;
        break;
      default:
        console.log("Draw!");
    }
  } else if (humanChoice === "Scissors") {
    switch (computerChoice) {
      case "Paper":
        console.log("Congratulations, You win! Scissors beats Paper");
        humanScore++;
        break;
      case "Rock":
        console.log("You lose! Rock beats Scissors");
        computerScore++;
        break;
      default:
        console.log("Draw!");
    }
  } else {
    console.log(`${humanChoice} is not valid choice, Please use Rock, Paper or Scissors!`);
  }
}

const humanSelection = getHumanChoice(userChoice);
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);