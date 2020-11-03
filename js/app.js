 /*
  * Initialize a new game
 */
let game;
document.getElementById('btn__reset').addEventListener('click', () => {
  game = new Game;
  game.startGame();
});
/*
 * Add functionality to the onscreen keyboard buttons.
*/
const keyboard = document.querySelectorAll('[id=qwerty] button');
for (const key of keyboard) {
  key.addEventListener('click', (e) => {
    if(e.target.className === 'key'){
      game.handleInteraction(e.target);
    }
  });
}
/*
 * Add functionality to the offscreen keyboard buttons.
 * Once an offscreen button's value matches an onscreen buttons content,
 * it follows the logic of the onscreen buttons.
*/
document.addEventListener('keydown', (e) => {
  if(document.getElementById('overlay').style.display === 'none') {
    for(let i=0; i < keyboard.length; i++){
      if(keyboard[i].textContent === e.key){
        game.handleInteraction(keyboard[i]);
      }
    }
  }
});
