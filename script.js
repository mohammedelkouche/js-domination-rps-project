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

let playerSelection;

while (true) {
    playerSelection = prompt("Choose Rock, Paper, or Scissors:");

    // Stop safely if the player presses Cancel.
    if (playerSelection === null) {
        console.log("Test cancelled.");
        break;
    }

    // Remove unnecessary spaces and ignore capitalization.
    playerSelection = playerSelection.trim().toLowerCase();

    if (["rock", "paper", "scissors"].includes(playerSelection)) {
        break;
    }

    alert("Invalid choice! Please enter Rock, Paper, or Scissors.");
}

if (playerSelection !== null) {
    const computerSelection = computerPlay();
    const result = playRound(playerSelection, computerSelection);

    console.log("Your choice:", playerSelection);
    console.log("Computer's choice:", computerSelection);
    console.log("Round result:", result);
}

// what i have to write in the commit for all this code :
// Implemented Rock, Paper, Scissors game with computer play, input validation, and round result display.