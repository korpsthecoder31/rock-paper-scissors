const main = document.querySelector("#main")

// FUNCTION that generates computer choice as either rock, paper or scissors

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

// Event listeners that uses BUTTONS to get rock, paper, scissor input from user

const rockChoice = document.querySelector("#rockButton")
const paperChoice = document.querySelector("#paperButton")
const scissorsChoice = document.querySelector("#scissorsButton")

const humanResult = document.querySelector("#humanResult")
const computerResult = document.querySelector("#computerResult")

rockChoice.addEventListener("click", () => { 
    humanResult.textContent = "✊"
    playRound("rock", getComputerChoice())
})

paperChoice.addEventListener("click", () => { 
    humanResult.textContent = "✋"
    playRound("paper", getComputerChoice())
})

scissorsChoice.addEventListener("click", () => {
    humanResult.textContent = "✌️"
    playRound("scissors", getComputerChoice())
})



// defined variables to determine score and current round

let humanScore = 0;
let computerScore = 0;
let roundsRemaining = 12;


// defined variables to modify current information of the game (round, score & result)

const roundCard = document.querySelector("#roundCard")
const humanScoreCard = document.querySelector("#humanScoreCard")
const computerScoreCard = document.querySelector("#computerScoreCard")
const description = document.querySelector("#descriptionBox")


roundCard.textContent = `${roundsRemaining}`
humanScoreCard.textContent = `${humanScore}`
computerScoreCard.textContent = `${computerScore}`

// FUNCTION that plays rock-paper-scissor game comparing USER INPUT and COMPUTER CHOICE. Updates information per ROUND

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

// FUNCTION that shows modal reflecting game result. RESET BUTTON appended to restart game

function gameOverAlert() {
    const gameOverBox = document.createElement("dialog")

    const gameOverText = document.createElement("div")

    const resetButton = document.createElement("button")
    resetButton.textContent = "Play again?"
    
    if (humanScore > computerScore) {
        gameOverText.textContent = "CONGRATULATIONS! YOU WIN!"
    } else if (humanScore === computerScore) {
            gameOverText.textContent = "EVEN SCORE! TIE GAME."
    } else gameOverText.textContent = "GAME OVER. YOU LOSE."

    gameOverBox.appendChild(gameOverText)
    gameOverBox.appendChild(resetButton)
    main.appendChild(gameOverBox)

    gameOverBox.showModal()

    resetButton.addEventListener("click", resetGame)
    resetButton.addEventListener("click", () =>
        gameOverBox.close()
    )
}

// FUNCTION that resets game and information back to default settings

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
