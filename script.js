// Function that generates computer choice as either rock, paper or scissors

function getComputerChoice() {
    let computer = Math.floor(Math.random() * 3)
    if (computer === 0) {
        return "rock";
    } else if (computer === 1) {
        return "paper";
    } return "scissors";
}

// Function that uses prompt to get rock, paper, scissor input from user

function getHumanChoice() {
    return prompt("Rock, paper or scissors?").toLowerCase();
}

// Variable that assigns default score of user and computer at 0

let humanScore = 0;
let computerScore = 0;

// Function that compares humanChoice and computerChoice to determine winner. Adds score.

function playRound(humanChoice, computerChoice) {

    if (humanChoice !== "rock" && humanChoice !== "paper" && humanChoice !== "scissors") {  // for invalid inputs i.e. not rock, paper or scissors
        return console.log("Invalid choice. Please try again.");
    } 
    
    else if ((humanChoice === "rock" && computerChoice === "scissors") || 
        (humanChoice === "paper" && computerChoice === "rock") || 
        (humanChoice === "scissors" && computerChoice === "paper")) {
        console.log(`You win! ${humanChoice.slice(0,1).toUpperCase()}${humanChoice.slice(1)} beats ${computerChoice}!`);
        return humanScore += 1;
    } 
    
    else if ((humanChoice === "rock" && computerChoice === "paper") || 
        (humanChoice === "paper" && computerChoice === "scissors") || 
        (humanChoice === "scissors" && computerChoice === "rock")) {
        console.log(`You lose! ${computerChoice.slice(0,1).toUpperCase()}${computerChoice.slice(1)} beats ${humanChoice}!`);
        return computerScore += 1;
    } 
    
    return console.log(`It's a tie! Computer also chose ${computerChoice}.`)
}

// create variables to be used as arguments for playRound function

const humanSelector = getHumanChoice();
const computerSelector = getComputerChoice();

//invoke playRound function

playRound(humanSelector, computerSelector)

// console.log score to test if the above functions are working

let currentScore = `Human: ${humanScore} & Computer: ${computerScore}`

console.log(currentScore)

