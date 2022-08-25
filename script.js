//global variables
const winners = [];
const choicesArray = ["rock", "paper", "scissors"];

//player input
function playerChoice () {
    let input = prompt("Type rock, paper, or scissors");
    while (input == null) {
        input = prompt("Type rock, paper, or scissors");
    }
    input = input.toLowerCase();
    console.log(`Player choice: ${input}`);
    return input;
}

//computer input random
function getComputerChoice () {
    const randomChoices = Math.floor(Math.random() * choicesArray.length);
    console.log(`Computer choice: ${choicesArray[randomChoices]}`);
    return choicesArray[randomChoices];
}

//connect computer random input with user input
function checkWinner (choiceP, choiceC) {
    if (choiceP === choiceC) {
        return "Tie, no win no lose";
    } else if ((choiceP === "rock" && choiceC == "scissors") || 
    (choiceP === "paper" && choiceC == "rock") || 
    (choiceP === "scissors" && choiceC == "paper")) {
        return "You won this round";
    } else {
        return "Computer won this round";
    }
    }

//results
function logWin () {
     let playerWins = winners.filter((winner) => winner == "You won this round").length;
     let compWins = winners.filter((winner) => winner == "Computer won this round").length;
     let tie = winners.filter((winner) => winner == "Tie, no win no lose").length;
     console.log('Results:');
     console.log('Player wins: ', playerWins);
     console.log('Computer wins: ', compWins);
     console.log('Ties', tie);
}

function playRound (round) {
    console.log('Round: ', round);
    const playerSelection = playerChoice();
    const computerSelection = getComputerChoice();
    const winner = checkWinner(playerSelection, computerSelection);
    console.log(winner);
    winners.push(winner);
    console.log("-----------------------------------------------");
}

// 5 game rounds

function game() {
    for (let i = 1; i <= 5; i++) {
      playRound(i);
    }
    return logWin();
}