//Randomly returns a value between rock, paper and scissors for the computer
function getComputerChoice(){
    const computerChoice = Math.floor(Math.random() * 1000)
    if (computerChoice % 3 === 0){
        return "Rock";
    } else if (computerChoice % 3 === 1){
        return "Paper";
    } else {
        return "Scissors";
    }
}

//Compares the choice of the player with the random one from the computer
//and returns the one that a message for the one that won.
function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();
    computerSelection = getComputerChoice().toLowerCase();
    if(playerSelection === computerSelection){
        return "It's a tie"
    } else if (
        (playerSelection == "rock" && computerSelection == "paper") ||
        (playerSelection == "paper" && computerSelection == "scissors") ||
        (playerSelection == "scissors" && computerSelection == "rock")
    ){
        return "You lose this round!";
    } else {
        return "You win this round!";
    }
}

//For testing to see if everything works
const playerSelection = prompt("Rock, paper or scissors?", "rock");
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));