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

while (isNotEndGame) {
    if (activePlayer == 1) {
        var rollOrHold = prompt('Player 1, Roll or Hold');

        console.log('Player 1 turn');

        if (rollOrHold == 'Roll') {
            // Generate a random number between 1 and 6
            diceNumber = Math.floor(Math.random() * 6) + 1;

            if (diceNumber != 1) {
                // Add the number on dice to current score
                numberOfScore += diceNumber;

                console.log('Current score is ' + numberOfScore);
            } else if (diceNumber == 1) {
                // Set the current score to 0
                numberOfScore = 0;

                // Change the active player to 2
                activePlayer = 2;
            }
        } else if (rollOrHold == 'Hold') {
            // Add the current score to player's score
            player1Score += numberOfScore;

            console.log('Player 1 score is ' + player1Score);

            // Set the current score back to 0
            numberOfScore = 0;

            // Change the active player to 2
            activePlayer = 2;
        }
    } else if (activePlayer == 2) {
        var rollOrHold = prompt('Player 2, Roll or Hold');

        if (rollOrHold == 'Roll') {
            // Generate a random number between 1 and 6
            diceNumber = Math.floor(Math.random() * 6) + 1;

            if (diceNumber != 1) {
                // Add the number on dice to current score
                numberOfScore += diceNumber;
                
                console.log('Current score is ' + numberOfScore);
            } else if (diceNumber == 1) {
                // Set the current score to 0
                numberOfScore = 0;

                // Change the active player to 1
                activePlayer = 1;
            }
        } else if (rollOrHold == 'Hold') {
            // Add the current score to player's score
            player2Score += numberOfScore;

            console.log('Player 2 score is ' + player2Score);
            // Set the current score back to 0
            numberOfScore = 0;

            // Change the active player to 2
            activePlayer = 1;
        }
    }
}