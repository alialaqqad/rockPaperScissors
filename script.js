function getComputerChoice () {
    //comp random
    const choicesArray = ["ROCK", "PAPER", "SCISSORS"];
    const randomChoices = Math.floor(Math.random() * choicesArray.length);
    console.log(choicesArray[randomChoices]);
    return choicesArray[randomChoices];
}

function playerChoice () {
    let input = prompt("Type rock, paper, or scissors");
    while (input == null) {
        input = prompt("Type rock, paper, or scissors");
    }
    input = input.toUpperCase();
    return input;
}

function checkWinner (choiceP, choiceC) {
    if (choiceP === choiceC) {
        return "Tie";
    } else if ((choiceP === "ROCK" && choiceC == "SCISSORS") || (choiceP === "PAPER" && choiceC == "ROCK") || (choiceP === "SCISSORS" && choiceC == "PAPER")) {
        return "Player Won";
    } else {
        return "Computer Won";
    }
    }

function playRound () {
    const playerSelection = playerChoice();
    const computerSelection = getComputerChoice();
    const winner = checkWinner(playerSelection, computerSelection);
    console.log(winner);
}
playRound();

