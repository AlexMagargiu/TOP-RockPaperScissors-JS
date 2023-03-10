let computerScore = 0;
let playerScore = 0; 
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
        return computerScore++;
    } else {
        return playerScore++;
    }
}


//Compares how many points the player has to the computer and returns the result of the game
function game(){
    for (let i = 0; i < 5; i++){
        const playerSelection = prompt("Rock, paper or scissors?", "rock");
        const computerSelection = getComputerChoice().toLowerCase();
        playRound(playerSelection, computerSelection);
    }
    if (playerScore > computerScore){
        return "You won the game!";
    } else if (playerScore < computerScore){
        return "You lost the game!";
    } else {
        return "You tied!";
    }
}

//Displays game result in the console
console.log(game());
console.log(`Your score is ${playerScore}`);
console.log(`Computer's score is ${computerScore}`);


