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
function startGame() {
    //reset guesses left and win status
    guessesLeft = 11;
    won = false;
    console.log("Welcome to Middle Earth Word-Guess: CLI Edition!")
    computerGuess = wordChoices[Math.floor(Math.random() * wordChoices.length)]
    // console.log('computerGuess', computerGuess)

    wordInPlay = new Word(computerGuess);
    wordInPlay.addLetters();
}

startGame();

function gameLogic() {

    if ((guessesLeft > 0) && (won === false)) {

        inquirer
            .prompt([
                {
                    type: "input",
                    message: "Select a letter",
                    name: "letter"
                }
            ])
            .then(function (inquirerResponse) {

                var letterPresent = false;
                for (var i = 0; i < wordInPlay.letterArray.length; i++) {

                    if (wordInPlay.letterArray[i].letter == inquirerResponse.letter) {

                        wordInPlay.letterArray[i].guessedLetter = true;

                        letterPresent = true;
                    }
                }

                wordInPlay.displayWord();

                if (letterPresent) {
                    console.log("Correct!");
                } else {
                    guessesLeft--;
                    if (guessesLeft === 0) {
                        console.log(computerGuess + " has eluded you!");
                    } else {
                        console.log("Incorrect! You have " + guessesLeft + " guesses remaining")
                    }
                }

                if (wordInPlay.display.indexOf("_") == -1) {
                    won = true;
                    console.log("Good guess!")
                }
                gameLogic();
            }

            );

    } else {
        inquirer.prompt([
            {
                type: "confirm",
                message: "Start over?",
                name: "resetGame"
            }
        ]).then(function (playAgain) {
            if (playAgain.resetGame) {
                startGame();
                gameLogic();
            }
        });
    }
}

gameLogic();



