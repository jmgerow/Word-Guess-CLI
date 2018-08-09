var Letter = require("./letter.js");

var Word = function (word) {
    this.letterArray = [];
    this.word = word;
    console.log('this.word', this.word)
    this.display = "";
    this.splitWord = function () {
        return this.word.split("");
    };
    this.addLetters = function (num) {
        var newLetterArray = this.splitWord();

        for (var i = 0; i < newLetterArray.length; i++) {
            var letter = new Letter(newLetterArray[i]);

            this.letterArray.push(letter);
        }


        this.displayWord();

    }

}

Word.prototype.displayWord = function () {

    this.display = ""

    for (var i = 0; i < this.letterArray.length; i++) {
        this.display += this.letterArray[i].reveal() + " "
    }
    console.log("\n" + this.display + "\n");
};

module.exports = Word;