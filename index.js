var inquirer = require("inquirer");
var Word = require("./word.js");

var testWord = new Word("cat");

var questions = [
    {
        message: "Guess a letter?",
        type: "input",
        name: "letter"
    }];
    
    function askQue(){
        displayWord();
        inquirer.prompt(questions).then(function(answer){
            // console.log(answer);
            // console.log(testWord);
            for (var i = 0; i < testWord.wordArray.length; i++){
                if(answer.letter === testWord.wordArray[i].char){
                    testWord.wordArray[i].showLetter = true;
                }
            }
        askQue()
        })
    }

    function displayWord(){
        var cleanStr = "";
        console.log(testWord)
        for (var i = 0; i < testWord.wordArray.length; i++){
            if (testWord.wordArray[i].showLetter === true){
                cleanStr += testWord.wordArray[i].char; 
            }
            else {
                cleanStr += "_ ";
            }
        }
        console.log(cleanStr);
    }

    askQue();