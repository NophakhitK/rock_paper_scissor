let playerSelection;
let computerSelection;
let playerScore = 0;
let computerScore = 0;
let roundNumber = 0;
let i;

const showChoice = document.querySelector('#showChoice');
const playerChoice = document.querySelectorAll('.choiceButton');
const showPlayerChoice = document.querySelector('#playerChoice');
const showComputerChoice = document.querySelector('#computerChoice');
const gameResult = document.querySelector('#gameResult');
const showPlayerScore = document.querySelector('#playerScore');
const showComputerScore = document.querySelector('#computerScore');
const showRoundNumber = document.querySelector('#roundNumber');
const resetGame = document.querySelector('.resetGame');
const winner = document.createElement('p')

resetGame.addEventListener('click', () => {
    gameReset();
})


playerChoice.forEach((button) => {
    button.addEventListener('click', () => {
        playerSelection = button.textContent;
        computerSelection = getComputerChoice()
        showPlayerChoice.textContent = `Player choice is ${playerSelection}`;
        showChoice.appendChild(showPlayerChoice);
        showComputerChoice.textContent = `Computer Choice is ${computerSelection}`;
        showChoice.appendChild(showComputerChoice);
        increaseRoundNumber();
        showRoundNumber.textContent = `Current round is: ${roundNumber}`;
        showChoice.appendChild(showRoundNumber);
        checkWinner();
        gameResult.textContent = `The result is ${checkWinner()}`;
        increaseScore();
        showChoice.appendChild(gameResult);
        showPlayerScore.textContent = `Current player score is: ${playerScore}`;
        showChoice.appendChild(showPlayerScore);
        showComputerScore.textContent = `Current computer score is ${computerScore}`;
        showChoice.appendChild(showComputerScore);
        if (playerScore === 5) {
            gameReset();
            winner.textContent = "Player Wins!";
            showChoice.appendChild(winner);
        } else if (computerScore === 5) {
            gameReset();
            winner.textContent = "Computer Wins!";
            showChoice.appendChild(winner);
        }
    })

});

function getComputerChoice() {
    let randChoice = Math.floor((Math.random() * 3) + 1);
    if (randChoice === 1) {
        return "ROCK";
    } else if (randChoice === 2) {
        return "PAPER";
    } else if (randChoice === 3) {
        return "SCISSOR";
    } else {
        console.log("Something is wrong here")
    }
}

function checkWinner() {
    if (playerSelection === computerSelection) {
        return "Draw!";
    } else if (computerSelection === "ROCK") {
        return (playerSelection === "PAPER") ? "You Win" : "You Lose";
    } else if (computerSelection === "PAPER") {
        return (playerSelection === "SCISSOR") ? "You Win" : "You Lose";
    } else if (computerSelection === "SCISSOR") {
        return (playerSelection === "ROCK") ? "You Win" : "You Lose";
    }
};

function increaseScore() {
    if (checkWinner() === "You Win") {
        playerScore++;
    } else if (checkWinner() === "You Lose") {
        computerScore++;
    }
}

function increaseRoundNumber() {
    roundNumber++;
}

function gameReset() {
    roundNumber = 0;
    playerScore = 0;
    computerScore = 0;
}

// function playRound(playerSelection, computerSelection) {

//     computerSelection = getComputerChoice();
//     console.log(playerSelection);
//     console.log(computerSelection);
//     if (playerSelection == "rock" && computerSelection == "Rock") {
//         console.log(`Draw, no one wins. Player score is ${playerScore}. Computer score is ${computerScore}`);
//     } else if (playerSelection == "rock" && computerSelection == "Paper") {
//         computerScore++;
//         console.log(`Computer wins. Score + 1. Computer score is ${computerScore}`)
//     } else if (playerSelection == "rock" && computerSelection == "Scissor") {
//         playerScore++;
//         console.log(`Player Wins. Score + 1. Player score is ${playerScore}`)
//     } else if (playerSelection == "paper" && computerSelection == "Rock") {
//         playerScore++;
//         console.log(`Player Wins. Score + 1. Player score is ${playerScore}`)
//     } else if (playerSelection == "paper" && computerSelection == "Paper") {
//         console.log(`Draw, no one wins. Player score is ${playerScore}. Computer score is ${computerScore}`);
//     } else if (playerSelection == "paper" && computerSelection == "Scissor") {
//         computerScore++;
//         console.log(`Computer wins. Score + 1. Computer score is ${computerScore}`)
//     } else if (playerSelection == "scissor" && computerSelection == "Rock") {
//         computerScore++;
//         console.log(`Computer wins. Score + 1. Computer score is ${computerScore}`)
//     } else if (playerSelection == "scissor" && computerSelection == "Paper") {
//         playerScore++;
//         console.log(`Player Wins. Score + 1. Player score is ${playerScore}`)
//     } else if (playerSelection == "scissor" && computerSelection == "Scissor") {
//         console.log(`Draw, no one wins. Player score is ${playerScore}. Computer score is ${computerScore}`);
//     } else {
//         console.log(`You put in wrong choice. No score to be gained. Player score is ${playerScore}. Computer score is ${computerScore}.`)
//     }
// }

// function playRound(playerSelection, computerSelection) {
//     playerSelection = prompt("Please Make a selection").toLowerCase();
//     computerSelection = getComputerChoice();
//     if (playerSelection == "rock" && computerSelection == "Rock") {
//         console.log(`Draw, no one wins. Player score is ${playerScore}. Computer score is ${computerScore}`);
//     } else if (playerSelection == "rock" && computerSelection == "Paper") {
//         computerScore++;
//         console.log(`Computer wins. Score + 1. Computer score is ${computerScore}`)
//     } else if (playerSelection == "rock" && computerSelection == "Scissor") {
//         playerScore++;
//         console.log(`Player Wins. Score + 1. Player score is ${playerScore}`)
//     } else if (playerSelection == "paper" && computerSelection == "Rock") {
//         playerScore++;
//         console.log(`Player Wins. Score + 1. Player score is ${playerScore}`)
//     } else if (playerSelection == "paper" && computerSelection == "Paper") {
//         console.log(`Draw, no one wins. Player score is ${playerScore}. Computer score is ${computerScore}`);
//     } else if (playerSelection == "paper" && computerSelection == "Scissor") {
//         computerScore++;
//         console.log(`Computer wins. Score + 1. Computer score is ${computerScore}`)
//     } else if (playerSelection == "scissor" && computerSelection == "Rock") {
//         computerScore++;
//         console.log(`Computer wins. Score + 1. Computer score is ${computerScore}`)
//     } else if (playerSelection == "scissor" && computerSelection == "Paper") {
//         playerScore++;
//         console.log(`Player Wins. Score + 1. Player score is ${playerScore}`)
//     } else if (playerSelection == "scissor" && computerSelection == "Scissor") {
//         console.log(`Draw, no one wins. Player score is ${playerScore}. Computer score is ${computerScore}`);
//     } else {
//         console.log(`You put in wrong choice. No score to be gained. Player score is ${playerScore}. Computer score is ${computerScore}.`)
//     }
// }

// function gameFiveRound() {
//     playerScore = 0;
//     computerScore = 0;
//     console.log(`Game Starts. Wish you best of luck. Current Score is Player: ${playerScore} to Computer: ${computerScore}.`)
//     for (let i = 0; i < 5; i++) {
//         console.log(`Number of round is ${i}`);
//         playRound();
//     }
//     if (playerScore > computerScore) {
//         console.log(`Game ends. Player score is ${playerScore}. Computer score is ${computerScore}. Player Win!!!!`)
//     } else if (playerScore < computerScore) {
//         console.log(`Game ends. Player score is ${playerScore}. Computer score is ${computerScore}. Computer Win!!!!`)
//     } else {
//         console.log(`Game ends. Player score is ${playerScore}. Computer score is ${computerScore}. DRAW!!!!`)
//     }
// }




