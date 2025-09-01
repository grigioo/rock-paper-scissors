// Global constants and variables.
const rock = "rock";
const paper = "paper";
const scissors = "scissors";
let humanScore = 0;
let computerScore = 0;

console.log(getComputerChoice());
console.log(getHumanChoice());

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