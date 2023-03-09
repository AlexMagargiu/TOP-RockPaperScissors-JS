//Randomly returns a value between rock, paper and scissors for the computer
function getComputerChoice(){
    const computerChoice = Math.floor(Math.random() * 1000)
    if (computerChoice % 3 === 0){
        return "rock";
    } else if (computerChoice % 3 === 1){
        return "paper";
    } else {
        return "scissors";
    }
}