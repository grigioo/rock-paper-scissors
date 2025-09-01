const rock = "rock";
const paper = "paper";
const scissors = "scissors";

getComputerChoice();

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