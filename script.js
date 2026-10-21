// Function to randomly select rock, paper, or scissors for the computer's play

function  computerPlay(){
    const choices = ["rock", "paper", "scissors"];

    const randomIndex=  Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}


// Function to play a single round of Rock, Paper, Scissors

function playRound (playerSelection, computerSelection)
{
    if (!playerSelection || !computerSelection) {
        return "Invalid input";
    }

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
        return `You win! ${player} beats ${computer}`;
    } else {
        return `You lose! ${computer} beats ${player}`;
    }


}


// Main game loop for player input and round execution

function game() {
    let playerScore = 0;
    let computerScore = 0;

    while (playerScore < 3 && computerScore < 3) {
        // Get player selection from prompt
        let playerSelection = prompt("Choose Rock, Paper, or Scissors:");

        // Cancel safely without changing score
        if (playerSelection === null) {
            console.log("Game cancelled.");
            return;
        }

        // Get computer selection
        const computerSelection = computerPlay();

        // Play the round
        const result = playRound(playerSelection, computerSelection);

        // Update scores based on result
        if (result.includes("You win!")) {
            playerScore++;
            console.log(result);
        } else if (result.includes("You lose!")) {
            computerScore++;
            console.log(result);
        } else if (result.includes("tie")) {
            console.log(result);
        }

        // Display current score
        console.log(`Score: Player ${playerScore} - Computer ${computerScore}`);
    }

    // Announce final winner
    if (playerScore === 3) {
        console.log("🎉 You win the game! 🎉");
    } else if (computerScore === 3) {
        console.log("💻 Computer wins the game! 💻");
    }
}

game();