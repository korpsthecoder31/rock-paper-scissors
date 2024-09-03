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

// defined variables to determine score and current round

let humanScore = 0;
let computerScore = 0;
let currentRound = 1;

// rock-paper-scissor game that takes round parameter and runs playRound recursively. Round, result and scores are logged into console. Game result is looged into console after 5 rounds.

function playGame(round) {

    if (round > 0) {
        console.log(`ROUND ${currentRound}`);
        playRound(getHumanChoice(), getComputerChoice());
        console.log(`Current Score:`);
        console.log(`Human - ${humanScore}  Computer - ${computerScore}`);
        console.log(`---------------------------------`)
        return playGame(round -1);
    } else if (humanScore > computerScore) {
        return console.log(`CONGRATULAIONS! YOU WIN!`)
    } else if (humanScore === computerScore) {
        return console.log('EVEN SCORE! TIE GAME.')
    }   return console.log("GAME OVER. YOU LOSE.")


    function playRound(humanChoice, computerChoice) {

        currentRound = currentRound + 1;

        if (humanChoice !== "rock" && humanChoice !== "paper" && humanChoice !== "scissors") {  // for invalid inputs i.e. not rock, paper or scissors
            computerScore = computerScore + 1;
            return console.log("Invalid choice. You lose a point.");
        } 

        else if ((humanChoice === "rock" && computerChoice === "scissors") || 
            (humanChoice === "paper" && computerChoice === "rock") || 
            (humanChoice === "scissors" && computerChoice === "paper")) {
            humanScore = humanScore + 1;
            return console.log(`You win! ${humanChoice.slice(0,1).toUpperCase()}${humanChoice.slice(1)} beats ${computerChoice}!`);
        } 
        
        else if ((humanChoice === "rock" && computerChoice === "paper") || 
            (humanChoice === "paper" && computerChoice === "scissors") || 
            (humanChoice === "scissors" && computerChoice === "rock")) {
            computerScore = computerScore + 1;
            return console.log(`You lose! ${computerChoice.slice(0,1).toUpperCase()}${computerChoice.slice(1)} beats ${humanChoice}!`);
        } 
        
        return console.log(`It's a tie! Computer also chose ${computerChoice}.`)
    }
}

playGame(5);  // auto execute game