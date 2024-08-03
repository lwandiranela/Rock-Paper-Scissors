//function to get the computer choice
const options = ['rock', 'paper', 'scissors']

function getComputerChoice(){

    return options[Math.floor(Math.random() * options.length)]
}

//logic for human choice
function getHumanChoice(){
    let validatedInput = false;
    while (validatedInput == false){
        const choices = prompt('Choose rock, paper, or scissors');
        if (choices == null){
            continue;
        }

        const choicesInLower = choices.toLowerCase();
        if(options.includes(choicesInLower)){
            validatedInput = true;
            return choicesInLower;
        }
    }
}


console.log(getHumanChoice()) //console log the getHumanChoice first
console.log(getComputerChoice())

//Declare the players score variables

let humanScore = 0
let computerScore = 0

//Logic to play a single round

function playRound(humanChoice, computerChoice){

    if (humanChoice === computerChoice){
        return "It's a tie"
    }  else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        humanScore++;
        console.log(`Win! ${humanChoice} beats ${computerChoice}`);
    } else {
        computerScore++;
        console.log(`Lost! ${computerChoice} beats ${humanChoice}`);
    }
}

playRound()

//Logic to play the entire game
function playGame(){
    humanScore = 0
    computerScore = 0

    for (let i = 0; i < 5; i++){
        const humanSelection = getHumanChoice()
        const computerSelection = getComputerChoice()
        playRound(humanSelection, computerSelection)
    }

    console.log(`Final Score - Human: ${humanScore} | Computer: ${computerScore}`)
    if (humanScore > computerScore){
        console.log('You are the Champion!!')
    } else if (humanScore < computerScore){
        console.log('You are the loser!!')
    } else{
        console.log("It's a tie")
    }
    }

    playGame()

    /*function getHumanChoice(){
    let choices = parseInt(prompt("Choose rock, paper or scissors: "))
    return choices*/
