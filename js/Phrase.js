 /*
  * "Phrase" is used to handle the creation of phrases.
 */
class Phrase {
     constructor(phrase) {
       this.phrase = phrase.toLowerCase();

     }
     /**
     * Display phrase on game board
     */
     addPhraseToDisplay(phrase) {
       const ul = document.querySelector('[id=phrase] ul');
       for (let i=0; i < this.phrase.length; i++){
         let li = document.createElement('li');
         if (this.phrase[i] === ' '){
           li.textContent = ' ';
           li.className = "hide space";
         } else {
           li.textContent = `${this.phrase[i]}`;
           li.className = `hide letter ${this.phrase[i]}`;
         }
         ul.appendChild(li);
       }
     };

     checkLetter(letter){
       if(this.phrase.includes(letter)){
         return true;
       } else {
         return false;
       }
     };

     showMatchedLetter(letter){
       let selection = document.querySelectorAll(`li.hide.letter`);
       for (let i=0; i < selection.length; i++){
         if (selection[i].textContent === letter) {
           selection[i].className = `show letter ${letter}`;
         }
       }
     };
}
