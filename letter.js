var userInput = process.argv[2];

var Letter = function(letter) {
    this.letter = letter;
    this.isGuessed = true;
    this.displayLetters = function () {
        if (this.isGuessed === true) {
            console.log(this.letter);
        } else {
            console.log("_");
        };
    };
    this.checkLetter = function () {
        if (userInput === this.letter){
            this.isGuessed = true;
        } 
    }; 
};

var test = new Letter("m");

test.displayLetters();
test.checkLetter();

module.exports = Letter;
