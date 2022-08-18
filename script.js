function game() {
    for (let i = 0; i < 5; i++) {
        playRound(i);
    }
}

function playerChoice () {
    let input = prompt("Type rock, paper, or scissors");
    while (input == null) {
        input = prompt("Type rock, paper, or scissors");
    }
    input = input.toUpperCase();
    console.log(`Player choice: ${input}`);
    return input;
}

function getComputerChoice () {
    //comp random
    const choicesArray = ["ROCK", "PAPER", "SCISSORS"];
    const randomChoices = Math.floor(Math.random() * choicesArray.length);
    console.log(`Computer choice: ${choicesArray[randomChoices]}`);
    return choicesArray[randomChoices];
}

function checkWinner (choiceP, choiceC) {
    if (choiceP === choiceC) {
        return "Result: Tie";
    } else if ((choiceP === "ROCK" && choiceC == "SCISSORS") || (choiceP === "PAPER" && choiceC == "ROCK") || (choiceP === "SCISSORS" && choiceC == "PAPER")) {
        return "Result: Player Won";
    } else {
        return "Result: Computer Won";
    }
    }

function playRound (round) {
    const playerSelection = playerChoice();
    const computerSelection = getComputerChoice();
    const winner = checkWinner(playerSelection, computerSelection);
    console.log(winner);
}


game();