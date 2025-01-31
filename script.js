// Check JavaScript work correctly
// console.log("Hello World");

function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3);

  switch (randomNumber) {
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

function playGame() {
  const gameRoundNumber = 5;
  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanChoice, computerChoice) {
    if (
      (humanChoice === "Rock" && computerChoice === "Scissors") ||
      (humanChoice === "Paper" && computerChoice === "Rock") ||
      (humanChoice === "Scissors" && computerChoice === "Paper")
    ) {
      console.log(
        `Congratulations, You win! ${humanChoice} beats ${computerChoice}`
      );
      humanScore++;
    } else if (
      (humanChoice === "Scissors" && computerChoice === "Rock") ||
      (humanChoice === "Rock" && computerChoice === "Paper") ||
      (humanChoice === "Paper" && computerChoice === "Scissors")
    ) {
      console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
      computerScore++;
    } else if (humanChoice === computerChoice) {
      console.log("Draw!");
    } else {
      console.log(
        `${humanChoice} is not valid choice, Please use Rock, Paper or Scissors!`
      );
    }
  }

  for (let i = 0; i < gameRoundNumber; i++) {
    const userChoice = prompt("Please enter your move").toLowerCase();
    const humanSelection = getHumanChoice(userChoice);
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
  }

  console.log(`You ${humanScore}-${computerScore} Computer`);

  if (humanScore > computerScore) {
    console.log("Yay! You win the game");
  } else if (humanScore < computerScore) {
    console.log("Game Over!");
  } else {
    console.log("Tie! You will win next time");
  }
}

playGame();
