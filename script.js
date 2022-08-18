let playerSelection = "Paper";
let computerSelection = null;

function getComputerChoice () {
    let randomArray = ["Rock", "Paper", "Scissors"];
    let randomItem = [Math.floor(Math.random() * randomArray.length)]; // length is the number of elements
     if (playerSelection == randomArray[randomItem]) {
    }
}
computerSelection = getComputerChoice();


function playRound(playerSelection, computerSelection) {

    if (playerSelection == "Rock" && computerSelection == "Rock") {
        console.log('Draw!, Rock equal Rock');
        } else if (playerSelection == "Paper" && computerSelection == "Paper") {
        console.log('Draw!, Paper equal Paper');
        } else if (playerSelection == "Scissors" && computerSelection == "Scissors") {
        console.log('Draw!, Scissors equal Scissors');
         } else if (playerSelection == "Rock" && computerSelection == "Scissors") {
        console.log('You won!, Rock beat Scissors');
         } else if (playerSelection == "Paper" && computerSelection == "Scissors") {
        console.log('You lost!, Scissors beat Paper');
        } else if (playerSelection == "Paper" && computerSelection == "Rock") {
        console.log('You won!, Paper beat Rock');
        } else if (playerSelection == "Rock" && computerSelection == "Paper") {
        console.log('You lost!, Paper beat Rock');
        } else if (playerSelection == "Scissors" && computerSelection == "Paper") {
        console.log('You won!, Scissors beat Paper');
        } else if (playerSelection == "Scissors" && computerSelection == "Rock") {
        console.log('You lost!, Rock beat Scissors');
        
        }
}

//console.log(playRound("Rock", "Rock"));


