function computerPlay() {
    const choices = ["rock", "paper", "scissors"];

    const randomIndex = Math.floor(Math.random() * choices.length);

    return choices[randomIndex];
}

function playRound(playerSelection, computerSelection) {

    const player = playerSelection.trim().toLowerCase();
    const computer = computerSelection.trim().toLowerCase();

    if (player === computer) {
        return "It's a tie!";
    }

    if (
        (player === "rock" && computer === "scissors") ||
        (player === "paper" && computer === "rock") ||
        (player === "scissors" && computer === "paper")
    ) {
        return `You win! ${player} beats ${computer}.`;
    }

    return `You lose! ${computer} beats ${player}.`;
}

let playerScore = 0;
let computerScore = 0;
let gameActive = false;

function displayResult(message) {
    const resultsDiv = document.getElementById("results");
    const p = document.createElement("p");
    p.textContent = message;
    resultsDiv.appendChild(p);
    resultsDiv.scrollTop = resultsDiv.scrollHeight;
}

function updateScore() {
    const scoreDiv = document.getElementById("score");
    scoreDiv.textContent = `Player: ${playerScore} | Computer: ${computerScore}`;
}

function startGame() {
    playerScore = 0;
    computerScore = 0;
    gameActive = true;
    
    const resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = "";
    
    displayResult("Game started! First to 5 points wins!");
    updateScore();
    
    const buttons = document.querySelectorAll(".choice-button");
    buttons.forEach(button => {
        button.disabled = false;
    });
}

function handlePlayerSelection(playerSelection) {
    if (!gameActive) return;
    
    const computerSelection = computerPlay();
    const result = playRound(playerSelection, computerSelection);
    
    displayResult(result);
    
    if (result.startsWith("You win!")) {
        playerScore++;
    } else if (result.startsWith("You lose!")) {
        computerScore++;
    }
    
    updateScore();
    
    if (playerScore === 5) {
        displayResult("🎉 Congratulations! You reached 5 points and win the game! 🎉");
        gameActive = false;
        const buttons = document.querySelectorAll(".choice-button");
        buttons.forEach(button => {
            button.disabled = true;
        });
    } else if (computerScore === 5) {
        displayResult("💻 The computer reached 5 points and wins the game! 💻");
        gameActive = false;
        const buttons = document.querySelectorAll(".choice-button");
        buttons.forEach(button => {
            button.disabled = true;
        });
    }
}