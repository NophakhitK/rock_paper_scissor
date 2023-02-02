let playerSelection;
let computerSelection;
let playerScore;
let computerScore;

function getComputerChoice() {
    let randChoice = Math.floor((Math.random() * 3) + 1);
    if (randChoice === 1) {
        return "Rock";
    } else if (randChoice === 2) {
        return "Paper";
    } else if (randChoice === 3) {
        return "Scissor";
    } else {
        console.log("Something is wrong here")
    }
}

function playRound(playerSelection, computerSelection) {
    playerSelection = prompt("Please Make a selection").toLowerCase();
    computerSelection = getComputerChoice();
    if (playerSelection == "rock" && computerSelection == "Rock") {
        console.log(`Draw, no one wins. Player score is ${playerScore}. Computer score is ${computerScore}`);
    } else if (playerSelection == "rock" && computerSelection == "Paper") {
        computerScore++;
        console.log(`Computer wins. Score + 1. Computer score is ${computerScore}`)
    } else if (playerSelection == "rock" && computerSelection == "Scissor") {
        playerScore++;
        console.log(`Player Wins. Score + 1. Player score is ${playerScore}`)
    } else if (playerSelection == "paper" && computerSelection == "Rock") {
        playerScore++;
        console.log(`Player Wins. Score + 1. Player score is ${playerScore}`)
    } else if (playerSelection == "paper" && computerSelection == "Paper") {
        console.log(`Draw, no one wins. Player score is ${playerScore}. Computer score is ${computerScore}`);
    } else if (playerSelection == "paper" && computerSelection == "Scissor") {
        computerScore++;
        console.log(`Computer wins. Score + 1. Computer score is ${computerScore}`)
    } else if (playerSelection == "scissor" && computerSelection == "Rock") {
        computerScore++;
        console.log(`Computer wins. Score + 1. Computer score is ${computerScore}`)
    } else if (playerSelection == "scissor" && computerSelection == "Paper") {
        playerScore++;
        console.log(`Player Wins. Score + 1. Player score is ${playerScore}`)
    } else if (playerSelection == "scissor" && computerSelection == "Scissor") {
        console.log(`Draw, no one wins. Player score is ${playerScore}. Computer score is ${computerScore}`);
    } else {
        console.log(`You put in wrong choice. No score to be gained. Player score is ${playerScore}. Computer score is ${computerScore}.`)
    }
}

function gameFiveRound() {
    playerScore = 0;
    computerScore = 0;
    console.log(`Game Starts. Wish you best of luck. Current Score is Player: ${playerScore} to Computer: ${computerScore}.`)
    for (let i = 0; i < 5; i++) {
        console.log(`Number of round is ${i}`);
        playRound();
    }
    if (playerScore > computerScore) {
        console.log(`Game ends. Player score is ${playerScore}. Computer score is ${computerScore}. Player Win!!!!`)
    } else if (playerScore < computerScore) {
        console.log(`Game ends. Player score is ${playerScore}. Computer score is ${computerScore}. Computer Win!!!!`)
    } else {
        console.log(`Game ends. Player score is ${playerScore}. Computer score is ${computerScore}. DRAW!!!!`)
    }
}

function gameFirstToThree() {
    playerScore = 0;
    computerScore = 0;
    console.log(`Game Starts. Wish you best of luck. Current Score is Player: ${playerScore} to Computer: ${computerScore}.`)
    for (let i = 0; i < 25; i++) {
        console.log(`Number of round is ${i}`);
        playRound();
        if (playerScore || computerScore === 3) {
            { break; }
        }
    }
    if (playerScore > computerScore) {
        console.log(`Game ends. Player score is ${playerScore}. Computer score is ${computerScore}. Player Win!!!!`)
    } else if (playerScore < computerScore) {
        console.log(`Game ends. Player score is ${playerScore}. Computer score is ${computerScore}. Computer Win!!!!`)
    } else {
        console.log(`Game ends. Player score is ${playerScore}. Computer score is ${computerScore}. DRAW!!!!`)
    }
}



