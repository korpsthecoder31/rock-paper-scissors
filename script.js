const main = document.querySelector("#main")

// Function that generates computer choice as either rock, paper or scissors

function getComputerChoice() {
    let computer = Math.floor(Math.random() * 3)
    if (computer === 0) {
        computerResult.textContent = "✊"
        return "rock";
    } else if (computer === 1) {
        computerResult.textContent = "✋"
        return "paper";
    } else computerResult.textContent = "✌️"
        return "scissors";
}

const rockChoice = document.querySelector("#rockButton")
const paperChoice = document.querySelector("#paperButton")
const scissorsChoice = document.querySelector("#scissorsButton")

const humanResult = document.querySelector("#humanResult")
const computerResult = document.querySelector("#computerResult")

rockChoice.addEventListener("click", () =>
    playRound("rock", getComputerChoice())
)
paperChoice.addEventListener("click", () =>
    playRound("paper", getComputerChoice())
)
scissorsChoice.addEventListener("click", () =>
    playRound("scissors", getComputerChoice())
)

rockChoice.addEventListener("click", () =>
    humanResult.textContent = "✊"
)
paperChoice.addEventListener("click", () =>
    humanResult.textContent = "✋"
)
scissorsChoice.addEventListener("click", () =>
    humanResult.textContent = "✌️"
)


const description = document.querySelector("#descriptionBox")


// Function that uses prompt to get rock, paper, scissor input from user


// defined variables to determine score and current round

let humanScore = 0;
let computerScore = 0;
let roundsRemaining = 12;

const roundCard = document.querySelector("#roundCard")
const humanScoreCard = document.querySelector("#humanScoreCard")
const computerScoreCard = document.querySelector("#computerScoreCard")
roundCard.textContent = `${roundsRemaining}`
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

    roundsRemaining = roundsRemaining - 1;

    roundCard.textContent = `${roundsRemaining}`
    humanScoreCard.textContent = `${humanScore}`
    computerScoreCard.textContent = `${computerScore}`

    if (roundsRemaining === 0) {
        gameOverAlert();
    }
      
}

// GAME OVER ALERT //



function gameOverAlert() {
    const gameOverBox = document.createElement("div")
    gameOverBox.setAttribute("class", "test")

    const resetButton = document.createElement("button")
    
    if (humanScore > computerScore) {
        gameOverBox.textContent = "CONGRATULAIONS! YOU WIN!"
    } else if (humanScore === computerScore) {
            gameOverBox.textContent = "EVEN SCORE! TIE GAME."
    } else gameOverBox.textContent = "GAME OVER. YOU LOSE."

    resetButton.textContent = "Play again?"

    gameOverBox.appendChild(resetButton)
    main.appendChild(gameOverBox)

    resetButton.addEventListener("click", resetGame)
    resetButton.addEventListener("click", () =>
        gameOverBox.remove()
    )
}

function resetGame() {
    humanScore = 0
    computerScore = 0
    roundsRemaining = 12
    roundCard.textContent = `${roundsRemaining}`
    humanScoreCard.textContent = `${humanScore}`
    computerScoreCard.textContent = `${computerScore}`
    description.textContent = "Choose wisely..."
    humanResult.textContent = "❔"
    computerResult.textContent = "❔"
}


// ✊ ✋ ✌️
