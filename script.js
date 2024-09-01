// Create function that generates at random rock, paper or scissors

function getComputerChoice() {
    let computer = Math.floor(Math.random() * 3)
    if (computer === 0) {
        return "Rock";
    } else if (computer === 1) {
        return "Paper";
    } return "Scissors";
}
