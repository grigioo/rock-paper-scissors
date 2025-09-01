// Global constants and variables.
const rock = "rock";
const paper = "paper";
const scissors = "scissors";
let humanScore = 0;
let computerScore = 0;
let humanSelection;
let computerSelection;

playGame();

function getComputerChoice() {
    // Variables for number that represents choice and future string choice.
    let choiceNumber = Math.floor(Math.random() * 3);
    let computerChoice = "";

    // Choosing value for computer choice.
    switch (choiceNumber) {
        case 0:
            computerChoice = rock;
            break;
        case 1:
            computerChoice = paper;
            break;
        case 2:
            computerChoice = scissors;
            break;
    }

    return computerChoice;
}

function getHumanChoice() {
    // Input human choice.
    let humanChoice = prompt("What is your choice? ");
    return humanChoice;
}

function playRound(humanChoice, computerChoice) {
    // Make human choice dosen't depend on case.
    humanChoice = humanChoice.toLowerCase();
    let result = "";

    // Check one by one conditions for victory, draw and loose.
    if(humanChoice == "rock" && computerChoice == "scissors") {
        result = "You win round!";
        humanScore++;
    }
    else if(humanChoice == "rock" && computerChoice == "rock")
        result = "Draw this time.";
    else if(humanChoice == "rock" && computerChoice == "paper") {
        result = "You lose round...";
        computerScore++;
    }

    if(humanChoice == "paper" && computerChoice == "rock") {
        result = "You win round!";
        humanScore++;
    }
    else if(humanChoice == "paper" && computerChoice == "paper")
        result = "Draw this time.";
    else if(humanChoice == "paper" && computerChoice == "scissors") {
        result = "You lose round...";
        computerScore++;
    }

    if(humanChoice == "scissors" && computerChoice == "paper") {
        result = "You win round!";
        humanScore++;
    }
    else if(humanChoice == "scissors" && computerChoice == "scissors")
        result = "Draw this time.";
    else if(humanChoice == "scissors" && computerChoice == "rock") {
        result = "You lose...";
        computerScore++;
    }

    // Create information about current round and write it in result.
    result = "Human choice: " + humanChoice + ", computer choice: " + computerChoice + ". Human score: " + humanScore + ", computer score: " + computerScore + "\n" + result;
    return result;
}

function playGame() {
    // Loop for n rounds.
    let rounds = 5;
    for (let i = 0; i < rounds; i++) {
        humanSelection = getHumanChoice();
        computerSelection = getComputerChoice();
        console.log(playRound(humanSelection, computerSelection));   
    }

    // Compare final score to find winner.
    if (humanScore > computerScore) {
        console.log("You win the game! Total score: " + humanScore + " : " + computerScore);
    }
    else if (humanScore < computerScore) {
        console.log("You lose the game... Total score: " + humanScore + " : " + computerScore);
    }
    else {
        console.log("Draw with computer in this time. Total score: " + humanScore + " : " + computerScore);
    }
}