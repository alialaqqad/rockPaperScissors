//plan
//random comp select //(computerSelect function) = done
// connect comp select with player select //(checkWinner function) = done
// start the game //the game starts once player select // done
//take the max between player wins and computer wins // done
//play round // done
// what each round will display // done
//show score // function tallyWins// done
//end game // displayEnd function// done
//reset the game

//global variables
let whoWins = [];
let cArray = ["rock", "paper", "scissors"];

//computer input random
function computerSelect () {
    const randomChoices = Math.floor(Math.random() * cArray.length);
    return cArray[randomChoices];
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

//the game starts once player select
function startGame() {
    let buttons = document.querySelectorAll('button');
    buttons.forEach((button) => 
    button.addEventListener('click', () => {
        if(button.id) {
            playRound(button.id);
        }
    }))
}

function checkWins() {
    let playerWins = whoWins.filter((winner) => winner == "You won this round").length;
    let compWins = whoWins.filter((winner) => winner == "Computer won this round").length;
    let tie = whoWins.filter((winner) => winner == "Tie, no win no lose").length;
    return Math.max(playerWins, compWins, tie);
}

function playRound (playerChoice) {
    let wins = checkWins();
    if(wins >= 5) {
        return
    }
    const computerChoice = computerSelect();
    const winner = checkWinner(playerChoice, computerChoice);
    whoWins.push(winner);
    displayRound(playerChoice, computerChoice, winner);
    tallyWins();
    wins=checkWins();
    if (wins ==5 ){
        displayEnd();
    }
}

function displayRound(playerChoice, computerChoice, winner) {
    document.querySelector('.playerChoice').textContent = `You chose: ${playerChoice}`;
    document.querySelector('.computerChoice').textContent = `Computer chose: ${computerChoice}`;
    document.querySelector('.winner').textContent = `Round winner: ${winner}`;
}

function tallyWins() {
    let playerWins = whoWins.filter((winner) => winner == "You won this round").length;
    let compWins = whoWins.filter((winner) => winner == "Computer won this round").length;
    let tie = whoWins.filter((winner) => winner == "Tie, no win no lose").length;
    document.querySelector('.playerScore').textContent = `Score: ${playerWins}`;
    document.querySelector('.computerScore').textContent = `Score: ${compWins}`;
    document.querySelector('.ties').textContent = `Ties: ${tie}`;
}

function displayEnd() {
    let playerWins = whoWins.filter((winner) => winner == "You won this round").length;
    if (playerWins == 5) {
        document.querySelector('.winner').textContent = 'Congrats, you won 5 rounds';
    } else {
        document.querySelector('.winner').textContent = 'Sorry, Computer won 5 rounds';
    }
    document.querySelector('.reset').style.display = ("flex");
    document.querySelector('.reset').textContent = 'Play Again?';
    document.querySelector('.end').textContent = 'Game Over';
}

function resetGame () {
    whoWins = [];
    document.querySelector('.playerScore').textContent = 'Score: 0';
    document.querySelector('.computerScore').textContent = 'Score: 0';
    document.querySelector('.ties').textContent = 'Ties: 0';
    document.querySelector('.winner').textContent = '';
    document.querySelector('.playerChoice').textContent = '';
    document.querySelector('.computerChoice').textContent = '';
    document.querySelector('.reset').textContent = 'Play Again?';
    document.querySelector('.reset').style.display = "none";
    document.querySelector('.end').style.display = "none";
}

startGame();