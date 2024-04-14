function playRound(playerSelection, computerSelection) {
    // Convert both selections to lowercase for case-insensitive comparison
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    // Check for a tie
    if (playerSelection === computerSelection) {
        return "It's a tie!";
    }

    // Determine the winner
    switch (playerSelection) {
        case 'rock':
            return computerSelection === 'scissors' ? 'You win! Rock beats Scissors.' : 'You lose! Paper beats Rock.';
        case 'paper':
            return computerSelection === 'rock' ? 'You win! Paper beats Rock.' : 'You lose! Scissors beats Paper.';
        case 'scissors':
            return computerSelection === 'paper' ? 'You win! Scissors beats Paper.' : 'You lose! Rock beats Scissors.';
        default:
            return 'Invalid selection. Please choose rock, paper, or scissors.';
    }
}

function computerPlay() {
    // Generate a random number between 0 and 2
    let randomNumber = Math.floor(Math.random() * 3);

    // Map the random number to rock, paper, or scissors
    switch (randomNumber) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt('Choose rock, paper, or scissors:');
        let computerSelection = computerPlay();
        
        console.log(`Round ${i + 1}:`);
        console.log(`Player: ${playerSelection}`);
        console.log(`Computer: ${computerSelection}`);
        
        let result = playRound(playerSelection, computerSelection);
        console.log(result);

        // Update scores
        if (result.includes('win')) {
            playerScore++;
        } else if (result.includes('lose')) {
            computerScore++;
        }
    }

    // Determine the overall winner
    if (playerScore > computerScore) {
        console.log('You win the game!');
    } else if (computerScore > playerScore) {
        console.log('You lose the game.');
    } else {
        console.log("It's a tie!");
    }
}

// Start the game
game();
