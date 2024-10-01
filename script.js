// Function that generates computer choice as either rock, paper or scissors

function getComputerChoice() {
    let computer = Math.floor(Math.random() * 3)
    if (computer === 0) {
        return "rock";
    } else if (computer === 1) {
        return "paper";
    } return "scissors";
}

const rockChoice = document.querySelector("#rockButton")
const paperChoice = document.querySelector("#paperButton")
const scissorsChoice = document.querySelector("#scissorsButton")

rockChoice.addEventListener("click", () =>
    playRound("rock", getComputerChoice())
)
paperChoice.addEventListener("click", () =>
    playRound("paper", getComputerChoice())
)
scissorsChoice.addEventListener("click", () =>
    playRound("scissors", getComputerChoice())
)

const description = document.querySelector("#descriptionBox")


// Function that uses prompt to get rock, paper, scissor input from user


// defined variables to determine score and current round

let humanScore = 0;
let computerScore = 0;
let currentRound = 1;

const roundCard = document.querySelector("#roundCard")
const humanScoreCard = document.querySelector("#humanScoreCard")
const computerScoreCard = document.querySelector("#computerScoreCard")
roundCard.textContent = `${currentRound}`
humanScoreCard.textContent = `${humanScore}`
computerScoreCard.textContent = `${computerScore}`

// rock-paper-scissor game that takes round parameter and runs playRound recursively. Round, result and scores are logged into console. Game result is looged into console after 5 rounds.

function playRound(humanChoice, computerChoice) {

    if ((humanChoice === "rock" && computerChoice === "scissors") || 
        (humanChoice === "paper" && computerChoice === "rock") || 
        (humanChoice === "scissors" && computerChoice === "paper")) {
        humanScore = humanScore + 1;
        description.textContent = `You win! ${humanChoice.slice(0,1).toUpperCase()}${humanChoice.slice(1)} beats ${computerChoice}!`;
    } 
    
    else if ((humanChoice === "rock" && computerChoice === "paper") || 
        (humanChoice === "paper" && computerChoice === "scissors") || 
        (humanChoice === "scissors" && computerChoice === "rock")) {
        computerScore = computerScore + 1;
        description.textContent = `You lose! ${computerChoice.slice(0,1).toUpperCase()}${computerChoice.slice(1)} beats ${humanChoice}!`;
    } 
    
    else description.textContent = `It's a tie! Computer also chose ${computerChoice}.`

    currentRound = currentRound + 1;

    roundCard.textContent = `${currentRound}`
    humanScoreCard.textContent = `${humanScore}`
    computerScoreCard.textContent = `${computerScore}`

    if (currentRound === 10) {
        if (humanScore > computerScore) {
            alert(`CONGRATULAIONS! YOU WIN!`)
        } else if (humanScore === computerScore) {
            alert('EVEN SCORE! TIE GAME.')
        } else alert("GAME OVER. YOU LOSE.")
    }
      
}
