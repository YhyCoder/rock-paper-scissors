// Check JavaScript work correctly
// console.log("Hello World");

const resultWrapper = document.querySelector(".result-wrapper");
const buttons = document.querySelectorAll(".game-button");
const roundResult = document.createElement("p");
const roundScore = document.createElement("p");
const gameResult = document.createElement("p");

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
  let humanScore = 0;
  let computerScore = 0;

  //run game one round
  function playRound(humanChoice, computerChoice) {
    if (
      (humanChoice === "Rock" && computerChoice === "Scissors") ||
      (humanChoice === "Paper" && computerChoice === "Rock") ||
      (humanChoice === "Scissors" && computerChoice === "Paper")
    ) {
      roundResult.textContent = `Congratulations, You win! ${humanChoice} beats ${computerChoice}`;
      humanScore++;
    } else if (
      (humanChoice === "Scissors" && computerChoice === "Rock") ||
      (humanChoice === "Rock" && computerChoice === "Paper") ||
      (humanChoice === "Paper" && computerChoice === "Scissors")
    ) {
      roundResult.textContent = `You lose! ${computerChoice} beats ${humanChoice}`;
      computerScore++;
    } else if (humanChoice === computerChoice) {
      roundResult.textContent = "Draw!";
    } else {
      roundResult.textContent = `${humanChoice} is not valid choice, Please use Rock, Paper or Scissors!`;
    }

    // show each round result in pgae
    resultWrapper.appendChild(roundResult);

    //show all round score in page
    roundScore.textContent = `You ${humanScore}-${computerScore} Computer`;
    resultWrapper.appendChild(roundScore);

    // when the player or computer reaches 5 points, it displays the winner
    if(humanScore == 5 || computerScore == 5) {
      if (humanScore > computerScore) {
        gameResult.textContent = "Yay! You win the game";
      } else if (humanScore < computerScore) {
        gameResult.textContent = "Game Over!";
      } else {
        gameResult.textContent = "Tie! You will win next time";
      }

      resultWrapper.appendChild(gameResult);
    }
  }

  // click each button play one round in game
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const userChoice = button.textContent.toLowerCase();
      const humanSelection = getHumanChoice(userChoice);
      const computerSelection = getComputerChoice();
      playRound(humanSelection, computerSelection);
    });
  });
}

playGame();
