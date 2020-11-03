 /*
  * "Game" is used for starting and ending the game, handling interactions, getting a random phrase, checking for a win, and removing a life from the scoreboard.
 */
class Game {
     constructor() {
       this.missed = 0;
       this.phrases = [ new Phrase('Je bent een winnaar'),
                        new Phrase('Ik hou van pepernoten'),
                        new Phrase('Herfstweer'),
                        new Phrase('Boekenwurm'),
                        new Phrase('Gekleurde bladeren')];
       this.activePhrase = null;
     }
     /*
      * Randomly select phrase from array of phrases
     */
     getRandomPhrase(){
       let index = Math.floor(Math.random() * 5);
       return this.phrases[index];
     };
     /*
      * Initiate game with the to be guessed phrase stored as active phrase
     */
     startGame(){
       document.getElementById('overlay').style.display = 'none';
       this.activePhrase = this.getRandomPhrase();
       this.activePhrase.addPhraseToDisplay();
     };
     /*
      * Check to see if there are letters in the phrase which have not been guessed yet.
     */
     checkForWin(){
       let hiddenLetters = document.querySelector('[id=phrase] li.hide.letter');
       if (!hiddenLetters) {
         return true;
       } else {
         return false;
       }
     };
     /*
      * Setting scoreboard
     */
     removeLife(){
       const lives = document.querySelectorAll('[id=scoreboard] img');
       for(let i=0; i < lives.length; i++) {
         if(lives[i].src.includes("images/liveHeart.png")){
           this.missed += 1;
           lives[i].src = "images/lostHeart.png";
           break;
         }
       }
       if (this.missed === 5) {
         this.gameOver(false);
       }
       return true;
     };
     /*
      * End of game (player has either won or lost), game settings are reset.
     */
     gameOver(gameWon){
       const overlay = document.getElementById('overlay')
       overlay.style.display = 'block';
       const message = document.getElementById('game-over-message');
       if (gameWon){
         message.textContent = `Congrats! You guessed the phrase!`;
         overlay.className = 'win';
         this.restartGame();
       } else {
         message.textContent = `Too bad! You did not guess the phrase.`;
         overlay.className = 'lose';
         this.restartGame();
       }
     };
     /*
      * If onscreen keyboard-button is selected, it is disabled (player can only select it once).
      * If player guesses a letter which is not in the phrase, a life is removed from the scoreboard.
     */
     handleInteraction(button){
       button.disabled = true;

       if(!this.checkForWin()){
         if(this.activePhrase.checkLetter(button.textContent)){
           button.className = 'chosen';
           this.activePhrase.showMatchedLetter(button.textContent);
           if(this.checkForWin()){
             this.gameOver(true);
           }
         } else {
           button.className = 'wrong';
           this.removeLife();
         }
       }
     };
     /*
      * Once a game is finished, all game settings are reset as to start a new game.
     */
     restartGame(){
       const ul = document.querySelector('[id=phrase] ul');
       while(ul.firstElementChild){
         ul.removeChild(ul.firstElementChild);
       }
       for(let j=0; j < keyboard.length; j++){
         keyboard[j].disabled = false;
         keyboard[j].className = 'key';
       }
       const lives = document.querySelectorAll('[id=scoreboard] img');
       this.missed = 0;
       for(let k=0; k < lives.length; k++){
         lives[k].src = "images/liveHeart.png";
       }
     };

}
