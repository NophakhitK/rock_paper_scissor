let computerChoice;
let playerChoice = "Rock";

function getComputerChoice() {
    let randChoice = Math.floor((Math.random() * 3) + 1);
    if (randChoice === 1) {
        computerChoice = "Rock"
        console.log("Rock")
    } else if (randChoice === 2) {
        computerChoice = "Paper"
        console.log("Paper")
    } else if (randChoice === 3) {
        computerChoice = "Scissor"
        console.log("Scissor")
    } else {
        console.log("Something is wrong here")
    }
}

