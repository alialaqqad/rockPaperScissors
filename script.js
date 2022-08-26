//global variables
const winners = [];
const choicesArray = ["rock", "paper", "scissors"];

const rock = document.querySelector('#rock');
rock.addEventListener('click', playRoundRock);

const paper = document.querySelector('#paper');
paper.addEventListener('click', playRoundPaper);

const scissors = document.querySelector('#scissors');
scissors.addEventListener('click', playRoundScissors);

//player input
function playerChoiceRock () {
    let input = 'rock';
    console.log(`Player choice: ${input}`);
    return input;
}

function playerChoicePaper () {
    let input = 'paper';
    console.log(`Player choice: ${input}`);
    return input;
}

function playerChoiceScissors () {
    let input = 'scissors';
    console.log(`Player choice: ${input}`);
    return input;
}

function playRoundRock () {
    const playerSelection = playerChoiceRock();
    const computerSelection = getComputerChoice();
    const winner = checkWinner(playerSelection, computerSelection);
    console.log(winner);
    winners.push(winner);
    console.log("-----------------------------------------------");
}

function playRoundPaper () {
    const playerSelection = playerChoicePaper();
    const computerSelection = getComputerChoice();
    const winner = checkWinner(playerSelection, computerSelection);
    console.log(winner);
    winners.push(winner);
    console.log("-----------------------------------------------");
}

function playRoundScissors () {
    const playerSelection = playerChoiceScissors();
    const computerSelection = getComputerChoice();
    const winner = checkWinner(playerSelection, computerSelection);
    console.log(winner);
    winners.push(winner);
    console.log("-----------------------------------------------");
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





//------------
// 5 game rounds

//function game() {
   // for (let i = 1; i <= 5; i++) {
    //  playRound(i);
   // }
   // return logWin();
//}
//playRound();
//logWin();