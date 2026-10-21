// Function to randomly select rock, paper, or scissors for the computer

function computerPlay() {
    const choices = ["rock", "paper", "scissors"];

    const randomIndex = Math.floor(Math.random() * choices.length);

    return choices[randomIndex];
}


// Function to play a single round of Rock, Paper, Scissors

function playRound(playerSelection, computerSelection) {

    // Check for empty or missing input
    if (playerSelection === null || !playerSelection.trim()) {
        return "Invalid input! Please enter rock, paper, or scissors.";
    }

    // Normalize input: remove extra spaces and convert to lowercase
    const player = playerSelection.trim().toLowerCase();
    const computer = computerSelection.trim().toLowerCase();

    // Reject invalid input
    if (!["rock", "paper", "scissors"].includes(player)) {
        return "Invalid input! Please enter rock, paper, or scissors.";
    }

    // Check for a tie
    if (player === computer) {
        return "It's a tie!";
    }

    // Check if the player wins
    if (
        (player === "rock" && computer === "scissors") ||
        (player === "paper" && computer === "rock") ||
        (player === "scissors" && computer === "paper")
    ) {
        return `You win! ${player} beats ${computer}.`;
    }

    // Otherwise, the computer wins
    return `You lose! ${computer} beats ${player}.`;
}


// Main game loop

function game() {
    let playerScore = 0;
    let computerScore = 0;

    console.log("Welcome to Rock, Paper, Scissors!");
    console.log("Rules:");
    console.log("- Rock beats Scissors");
    console.log("- Scissors beats Paper");
    console.log("- Paper beats Rock");
    console.log("The first to reach 3 points wins!");
    console.log("Enter your choice in the prompt.");

    // Continue until one side reaches 3 points
    while (playerScore < 3 && computerScore < 3) {

        // Get player selection
        const playerSelection = prompt(
            "Choose Rock, Paper, or Scissors:\n\n" +
            "Rock beats Scissors\n" +
            "Scissors beats Paper\n" +
            "Paper beats Rock\n\n" +
            `Score: You ${playerScore} - Computer ${computerScore}`
        );

        // Handle cancellation safely
        if (playerSelection === null) {
            console.log("Game cancelled.");
            return;
        }

        // Get computer selection
        const computerSelection = computerPlay();

        // Play one round
        const result = playRound(playerSelection, computerSelection);

        // Handle invalid input without changing the score
        if (result.startsWith("Invalid input!")) {
            console.log(result);
            continue;
        }

        // Update scores
        if (result.startsWith("You win!")) {
            playerScore++;
        } else if (result.startsWith("You lose!")) {
            computerScore++;
        }

        // Display round result
        console.log(result);

        // Display current score
        console.log(
            `Score: Player ${playerScore} - Computer ${computerScore}`
        );
    }

    // Announce the final winner
    if (playerScore === 3) {
        console.log("🎉 Congratulations! You win the game! 🎉");
        alert("Congratulations! You win the game!");
    } else if (computerScore === 3) {
        console.log("💻 The computer wins the game! 💻");
        alert("The computer wins! Better luck next time.");
    }
}


// Start the game
game();
        
