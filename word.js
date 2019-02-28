var Letters = require("./letters.js");
// console.log(Letters);
function Word(gameWord){
    this.gameWord = gameWord;
    this.wordArray = [];
    for (var i = 0; i < gameWord.length; i++){
        // console.log(gameWord[i]);
        var newLetter = new Letters(gameWord[i])
        this.wordArray.push(newLetter)
    }
}


module.exports = Word;