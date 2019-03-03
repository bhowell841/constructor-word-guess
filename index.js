var inquirer = require("inquirer");
var Word = require("./word.js");

var words = ["cat", "dog", "gerbil", "pig", "horse", "cow", "sheep"];
var randomItem = words[Math.floor(Math.random() * words.length)];
var testWord = new Word(randomItem);
// console.log("testWord:", testWord);
var count = 8;
console.log("")
console.log("Guesses Remaining: ", count);
var letters = [];
var win = false;
var play = true;

var questions = [{
    message: "Guess a letter?",
    type: "input",
    name: "letter"
}];

function askQue() {
    displayWord();
    inquirer.prompt(questions).then(function (answer) {

        count--;

        if (letters.includes(answer.letter)) {
            count++

        } else {
            letters.push(answer.letter);
        }
        console.log("Letters Guessed: ", letters);
        console.log("Guesses Remaining: ", count)


        for (var i = 0; i < testWord.wordArray.length; i++) {
            if (answer.letter === testWord.wordArray[i].char) {
                testWord.wordArray[i].showLetter = true;
            }
        }


        if (win === false && play === true) {
            askQue();
        } else {
            console.log("----------------------------")
            console.log("-----Thanks for Playing-----")
            console.log("----------------------------")
        }
    });
};

function displayWord() {
    var cleanStr = "";
    // console.log(testWord)
    for (var i = 0; i < testWord.wordArray.length; i++) {
        if (testWord.wordArray[i].showLetter === true) {
            cleanStr += testWord.wordArray[i].char;
        } else {
            cleanStr += "_ ";
        }
    }

    if (count < 8) {
        if (cleanStr.includes("_ ") && count > 0) {
            // console.log("cleanStr: Yes _  Play");
        } else if (cleanStr.includes("_ ") && count <= 0) {
            // console.log("cleanStr: Yes _  Lose");
            loseGame();
        } else {
            winGame();
        }
    }

    console.log("Game Word: ", cleanStr);
    console.log("----------------------------------")
    console.log("")
    // return cleanStr;
}



function winGame() {
    win = true;
    console.log("You Win!  Press any key to end the game.")

}



function loseGame() {
    play = false;
    console.log("LOSER!  Press any key to end the game.")
}

askQue();