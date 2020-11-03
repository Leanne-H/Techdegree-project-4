# Techdegree-project-4

This is a browser-based, word guessing game: "Phrase Hunter." It uses JavaScript and Object-Oriented Programming to select a random, hidden phrase, which a player tries to guess, by clicking letters on an onscreen keyboard. Using JavaScript, I have created two JavaScript classes with specific properties and methods. I have created a Game class for managing the game, and a Phrase class to help with creating an array of Phrase objects.

The code chooses a random phrase, splits the phrase into letters, and puts those letters onto the gameboard. Each time the player guesses a letter, the program compares the letter the player has chosen with the random phrase. If the letter is in the phrase, the gameboard displays the chosen letters on the screen. A player continues to select letters until they guess the phrase (and win), or make five incorrect guesses (and lose). If the player completes the phrase before they run out of guesses, a winning screen appears. If the player guesses incorrectly five times, a losing screen appears. A player can guess a letter only once. After they’ve guessed a letter, the respective letter is disabled on the onscreen keyboard.

Note on Personalized styling:

In styles.css-file:
- Adjusted background color of .wrong
- Adjusted background color of .chosen and .show
- Increased margins of h2
- Added hover-items to #btn__reset
