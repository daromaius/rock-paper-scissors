let computerChoice = Math.floor(Math.random() * 3) + 1;
let playerChoice;
let result;
let playerWins = 0;
let computerWins = 0;

function getComputerChoice(computerChoice) {
    let computerSelection;
        if (computerChoice === 1) {
            computerSelection = "rock";
        } else if (computerChoice === 2) {
            computerSelection = "paper";
        } else if (computerChoice === 3) {
            computerSelection = "scissors";
        } else {
            console.log("You broke something!");
        }
    return computerSelection;
}

function playRound(playerSelection, computerSelection) {
    playerChoice = prompt("Please make your selection: Rock, Paper, or Scissors?").toLowerCase();
    if (playerChoice === computerSelection) {
        result = "Uh oh! It's a tie!";
        return result;
    } else if (playerChoice == "rock" && computerSelection == "scissors") {
        result = `You chose ${playerChoice}, and the computer chose ${computerSelection}. You win this round!`;
        playerWins++;
        return result;
    } else if (playerChoice == "rock" && computerSelection == "paper") {
        result = `You chose ${playerChoice}, but the computer chose ${computerSelection}. Better luck next time!`;
        computerWins++;
        return result;
    } else if (playerChoice == "paper" && computerSelection == "scissors") {
        result = `You chose ${playerChoice}, but the computer chose ${computerSelection}. Better luck next time!`;
        computerWins++;
        return result;
    } else if (playerChoice == "paper" && computerSelection == "rock") {
        result = `You chose ${playerChoice}, and the computer chose ${computerSelection}. You win this round!`;
        playerWins++;
        return result;
    } else if (playerChoice == "scissors" && computerSelection == "rock") {
        result = `You chose ${playerChoice}, but the computer chose ${computerSelection}. Better luck next time!`;
        computerWins++;
        return result;
    } else if (playerChoice == "scissors" && computerSelection == "paper") {
        result = `You chose ${playerChoice}, and the computer chose ${computerSelection}. You win this round!`;
        playerWins++;
        return result;
    } else {
        result = "You broke something AGAIN!";
        console.log(computerSelection);
        return result;
    }
}


for (let i = 0; i < 5; i++) {
    function game() {
        playRound(playerChoice, getComputerChoice(computerChoice));
        console.log(result);
        }
    
    game();
}
console.log(playerWins);
