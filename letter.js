var Letter = function(char){
    this.letter = char;
    // console.log('this.letter', this.letter)
    this.guessedLetter = false;
}

Letter.prototype.reveal = function() {
    if (this.guessedLetter){
        return this.letter;
    } else{
        return "_";
    }
}

module.exports = Letter;