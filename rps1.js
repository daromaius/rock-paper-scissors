let computerChoice = Math.floor(Math.random() * 3) + 1;

function getComputerChoice(computerChoice) {
    let computerSelection;
        if (computerChoice === 1) {
            computerSelection = "Rock";
        } else if (computerChoice === 2) {
            computerSelection = "Paper";
        } else if (computerChoice === 3) {
            computerSelection = "Scissors";
        } else {
            console.log("You broke something!");
        }
    return computerSelection;
}

getComputerChoice(computerChoice);

let playerChoice = prompt("Please make your selection: Rock, Paper, or Scissors?");

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "Uh oh! It's a tie!";
    } else if (playerSelection == "Rock" && computerSelection == "Scissors") {
        return "You win this round!";
    } else if (playerSelection == "Rock" && computerSelection == "Paper") {
        return "Better luck next time!";
    } else if (playerSelection == "Paper" && computerSelection == "Scissors") {
        return "Better luck next time!";
    } else if (playerSelection == "Paper" && computerSelection == "Rock") {
        return "You win this round!";
    } else if (playerSelection == "Scissors" && computerSelection == "Rock") {
        return "Better luck next time!";
    } else if (playerSelection == "Scissors" && computerSelection == "Paper") {
        return "You win this round!";
    } else {
        return "You broke something AGAIN!";
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
    
        playRound(playerChoice, getComputerChoice(computerChoice));
        console.log(playRound());

    }
}

game();