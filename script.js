// Global constants and variables.
const rock = "rock";
const paper = "paper";
const scissors = "scissors";
let humanScore = 0;
let computerScore = 0;
let humanSelection;
let computerSelection;

const buttons = document.querySelectorAll('button');
const output = document.querySelector('.output');
const final = document.querySelector('.result');

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
    result = humanChoice + " : " + computerChoice + " - " + humanScore + " : " + computerScore;
    return result;
}

function checkStatus() {
    // Compare final score to find winner.
    if (humanScore > computerScore) {
        return "You win the game! Total score: " + humanScore + " : " + computerScore;
    }
    else if (humanScore < computerScore) {
        return "You lose the game... Total score: " + humanScore + " : " + computerScore;
    }
    else {
        return "Draw with computer in this time. Total score: " + humanScore + " : " + computerScore;
    }
}

function buttonClick(event) {
    humanSelection = event.target.getAttribute('class');
    computerSelection = getComputerChoice();
    output.textContent =  playRound(humanSelection, computerSelection);

    if (humanScore === 5) {
        final.textContent = checkStatus();
        buttons.forEach( button => {
            button.removeEventListener('click', buttonClick);
        });
    }
}

buttons.forEach( button => {
    button.addEventListener('click', buttonClick);
});