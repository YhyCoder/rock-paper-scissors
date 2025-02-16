// Check JavaScript work correctly
// console.log("Hello World");

const buttons = document.querySelectorAll(".game-button");

//computer move
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

//user move
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

//run game five round
function playGame() {
  const gameRoundNumber = 5;
  let humanScore = 0;
  let computerScore = 0;

  //run game one round
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

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const userChoice = button.textContent.toLowerCase();
      const humanSelection = getHumanChoice(userChoice);
      const computerSelection = getComputerChoice();
      playRound(humanSelection, computerSelection);
    });
  });

  //log game result in console
  console.log(`You ${humanScore}-${computerScore} Computer`);

  //check score and declare winner in console
  if (humanScore > computerScore) {
    console.log("Yay! You win the game");
  } else if (humanScore < computerScore) {
    console.log("Game Over!");
  } else {
    console.log("Tie! You will win next time");
  }
}

playGame();
