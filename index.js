//store usable options for the game
const options = ["rock", "paper", "scissors"];

//grab the buttons on the document
const buttons = document.querySelectorAll('i');

//add an event listener to each button and play a round when a button is pressed
buttons.forEach((button) => {
    button.addEventListener("click", (value) => {
        const playerChoice = value.target.id;
        playRound(playerChoice, computerPlay())
    });
});

//get the random choice from the computer
function computerPlay() {
    const randomNum = Math.floor((Math.random() * options.length));
    const computerSelection = options[randomNum];
    return computerSelection;
}



//keep track of score
let playerScore = 0;
let computerScore = 0;
const result = document.getElementById("result");
const endRoundScore = document.getElementById("score");
const gameOverText = document.getElementById("game-over");



//play a round of the game
function playRound(playerChoice, computerChoice) {

    gameOverText.textContent = ("");


    if (playerChoice === computerChoice) {

        result.textContent = "It's a tie!";
        playerScore++;
        computerScore++;

    } else if ((playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")) {

        result.textContent = ("Player wins! " + playerChoice + " beats " + computerChoice);
        playerScore++;

    } else {

        result.textContent = ("Computer wins! " + computerChoice + " beats " + playerChoice);
        computerScore++;
    }

    //display the results each round
    endRoundScore.textContent = (" Player: " + playerScore + " Computer: " + computerScore);

    //check win conditions and reset the game
    if (playerScore === 5) {
        result.textContent = ("");
        endRoundScore.textContent = ("");
        gameOverText.textContent = "Player Wins! Press a button to play again";
        playerScore = 0;
        computerScore = 0;
    } else if (computerScore === 5) {
        result.textContent = ("");
        endRoundScore.textContent = ("");
        gameOverText.textContent = "Computer Wins! Press a button to play again";
        playerScore = 0;
        computerScore = 0;
    } else if (playerScore === 5 && computerScore === 5) {
        result.textContent = ("");
        endRoundScore.textContent = ("");
        gameOverText.textContent = "It's a Tie! Press a button to play again";
        playerScore = 0;
        computerScore = 0;
    }
}