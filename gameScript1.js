// Global score for player 1 and player 2
var player1Score = 0;
var player2Score = 0;

// Variable to keep track of the actived player (This will be set to 1 initially)
var activePlayer = 1;

// Variable to keep track of number of score each roll
var numberOfScore = 0;

// Variable to keep track of the number of rolled dice
var diceNumber = 0;

// Boolean variable to keep track of if the game is over or not
var isNotEndGame = true;

document.querySelector('#dice-1').style.display = 'none';

// Set up event for the roll button
document.querySelector('.btn-roll').addEventListener('click', function() {
    diceNumber = Math.floor(Math.random() * 6) + 1;

    if (activePlayer == 1) {
        if (diceNumber != 1) {
            // Set up the value for the dice
            var diceObject = document.querySelector('#dice-1');
            diceObject.style.display = 'block';
            diceObject.src = 'dice-' + diceNumber + '.png'; 

            // Increase the number of current score
            document.querySelector('#current-0').textContent = Number(document.querySelector('#current-0').textContent) + diceNumber;
        } else if (diceNumber == 1) {
            // Set up the value for the dice
            var diceObject = document.querySelector('#dice-1');
            diceObject.style.display = 'block';
            diceObject.src = 'dice-' + diceNumber + '.png';

            // Bring the number of current score back to 0
            document.querySelector('#current-0').textContent = 0;

            // Switch the active player to 2
            activePlayer = 2;
            
            // Update the UI to show that the current active player is player 2
            document.querySelector('.player-0-panel').classList.remove('active');
            document.querySelector('.player-1-panel').classList.add('active');
        }
    }
    else if (activePlayer == 2) {
        if (diceNumber != 1) {
            // Set up the value for the dice
            var diceObject = document.querySelector('#dice-1');
            diceObject.style.display = 'block';
            diceObject.src = 'dice-' + diceNumber + '.png'; 

            // Increase the number of current score
            document.querySelector('#current-1').textContent = Number(document.querySelector('#current-1').textContent) + diceNumber;
        } else if (diceNumber == 1) {
            // Set up the value for the dice
            var diceObject = document.querySelector('#dice-1');
            diceObject.style.display = 'block';
            diceObject.src = 'dice-' + diceNumber + '.png';

            // Bring the number of current score back to 0
            document.querySelector('#current-1').textContent = 0;

            // Switch the active player to 1
            activePlayer = 1; 
            
            // Update the UI to show that the current active player is player 1
            document.querySelector('.player-1-panel').classList.remove('active');
            document.querySelector('.player-0-panel').classList.add('active');
        }
    }
});

// Set up event for the hold button
document.querySelector('.btn-hold').addEventListener('click', function() {
    if (activePlayer == 1) {
        // Add the current score to the player's score 
        document.querySelector('#score-0').textContent = Number(document.querySelector('#score-0').textContent) + 
        Number(document.querySelector('#current-0').textContent);
        
        // Add the current score to the player's score and store in a variable
        player1Score += Number(document.querySelector('#current-0').textContent);
        
        // Check if the game is over or not by checking if either player 1 or 2 reaches 100 or not
        if (isGameOver()) {
            console.log('Game is over');
            
            // Check to see who is the winner 
            if (whoHasHigherScore(player1Score, player2Score) == 'Player 1') {
                console.log('Player 1 wins the game');
            }
        }
        
        // Set the current score back to 0
        document.querySelector('#current-0').textContent = 0;

        // Switch the active player to 2
        activePlayer = 2;
        
        // Update the UI to show that the current active player is player 2
        document.querySelector('.player-0-panel').classList.remove('active');
        document.querySelector('.player-1-panel').classList.add('active');
    }
    else if (activePlayer == 2) {
        // Add the current score to the player's score 
        document.querySelector('#score-1').textContent = Number(document.querySelector('#score-1').textContent) + 
        Number(document.querySelector('#current-1').textContent);
        
        // Add the current score to the player's score and store in a variable
        player2Score += Number(document.querySelector('#current-1').textContent);

        // Check if the game is over or not by checking if either player 1 or 2 reaches 100 or not
        if (isGameOver()) {
            console.log('Game is over');
            
            // Check to see who is the winner
            if (whoHasHigherScore(player1Score, player2Score) == 'Player 2') {
                console.log('Player 2 wins the game');
            }
        }
        
        // Set the current score back to 0
        document.querySelector('#current-1').textContent = 0;

        // Switch the active player to 1
        activePlayer = 1;
        
        // Update the UI to show that the current active player is player 1
        document.querySelector('.player-1-panel').classList.remove('active');
        document.querySelector('.player-0-panel').classList.add('active');
    }
});

// Set up event for the new game button
document.querySelector('.btn-new').addEventListener('click', initGame);

// Function to check if the game is end or not
function isGameOver () {
    if (player1Score >= 100 || player2Score >= 100) {
        return true;
    } else {
        return false;
    }
}

// Function to see who has the higher score 
function whoHasHigherScore (player1Score, player2Score) {
    if (player1Score > player2Score) {
        return 'Player 1';
    } else if (player1Score < player2Score) {
        return 'Player 2';
    }
}

// Function to initialize the game which should be called when the game started
function initGame () {
    // Set the initial current score for player 1 to 0
    document.querySelector('#current-0').textContent = 0;
    
    // Set the initial current score for player 2 to 0
    document.querySelector('#current-1').textContent = 0;
    
    // Set the initial entire score of player 1 to 0
    document.querySelector('#score-0').textContent = 0;
    
    // Set the initial entire score of player 2 to 0
    document.querySelector('#score-1').textContent = 0;
    
    // Set the initial entire score of player 1 to 0 for the variable
    player1Score = 0;
    
    // Set the initial entire score of player 2 to 0 for the variable
    player2Score = 0;
}