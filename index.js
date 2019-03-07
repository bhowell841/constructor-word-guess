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
    // displayWord();
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
            displayWord();
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

   

    console.log("Game Word: ", cleanStr);
    console.log("----------------------------------")
    console.log("")
    getCount(count, cleanStr);
}



function getCount(count, cleanStr){
    // console.log("getCount: " + count);
    // console.log("cleanStr: " + cleanStr);
        if (cleanStr.includes("_ ") && count > 0) {
            // console.log("cleanStr: Yes _  Play");
            askQue();
        } else if (cleanStr.includes("_ ") && count <= 0) {
            // console.log("cleanStr: Yes _  Lose");
            loseGame();
        } else {
            winGame();
        }
};



function winGame() {
    win = true;
    console.log("----------------------------");
    console.log("----------You Win!----------");
    console.log("-----Thanks for Playing-----");
    console.log("----------------------------");
    console.log(" ");

}



function loseGame() {
    play = false;
    console.log("----------------------------");
    console.log("-----------LOSER!-----------");
    console.log("-----Thanks for Playing-----");
    console.log("----------------------------");
    console.log(" ");
}

displayWord();