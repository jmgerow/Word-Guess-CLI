var Word = require("./word.js");

var inquirer = require("inquirer");

var wordChoices = ["frodo", "bilbo", "gandalf", "smaug", "shire", "legolas", "pippin", "sauron", "aragorn", "gollum", "gimli", "thorin"]

var computerGuess = "";
var guessesLeft = 11;
var wins = 0;
var losses = 0;
var won = false;
var wordInPlay;


// start game
function startGame(){
    //reset guesses left and win status
    guessesLeft = 11;
    won = false;
    console.log("Welcome to LOTR Word-Guess: CLI Edition!")
    computerGuess = wordChoices[Math.floor(Math.random() * wordChoices.length)]
    console.log('computerGuess', computerGuess)

    wordInPlay = new Word(computerGuess);
    wordInPlay.addLetters();
}

startGame();



