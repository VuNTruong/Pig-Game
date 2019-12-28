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
        }
    }
});

document.querySelector('.btn-hold').addEventListener('click', function() {
    if (activePlayer == 1) {
        // Add the current score to the player's score 
        document.querySelector('#score-0').textContent = Number(document.querySelector('#score-0').textContent) + 
        Number(document.querySelector('#current-0').textContent);

        // Set the current score back to 0
        document.querySelector('#current-0').textContent = 0;

        // Switch the active player to 2
        activePlayer = 2;
    }
    else if (activePlayer == 2) {
        // Add the current score to the player's score 
        document.querySelector('#score-1').textContent = Number(document.querySelector('#score-1').textContent) + 
        Number(document.querySelector('#current-1').textContent);

        // Set the current score back to 0
        document.querySelector('#current-1').textContent = 0;

        // Switch the active player to 1
        activePlayer = 1;
    }
});
