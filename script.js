const rock = "rock";
const paper = "paper";
const scissors = "scissors";

getComputerChoice();

function getComputerChoice() {
    let choiceNumber = Math.floor(Math.random() * 3);
    let computerChoice = "";

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