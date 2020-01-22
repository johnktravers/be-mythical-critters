class Sphinx {
  constructor() {
    this.riddles = [];
    this.heroesEaten = 0;
    this.countCorrect = 0;
  }

  collectRiddle(riddle) {
    this.riddles.push(riddle);
    if (this.riddles.length > 3) {
      this.riddles.shift();
    }
  }

  attemptAnswer(answer) {
    var riddle = this.riddles.find(riddle => riddle.answer === answer);

    if (riddle === undefined) {
      this.heroesEaten++;
    } else if (this.riddles.length > 1 || this.countCorrect === 0) {
      this.correctAnswer(riddle);
      return 'That wasn\'t that hard, I bet you don\'t get the next one';
    } else {
      this.lastCorrectAnswer(riddle);
      return `PSSSSSSS THIS HAS NEVER HAPPENED, HOW DID YOU KNOW THE ANSWER WAS "${riddle.answer}"???`;
    }
  }

  correctAnswer(riddle) {
    this.countCorrect++;
    this.riddles.splice( this.riddles.indexOf(riddle), 1 );
  }

  lastCorrectAnswer(riddle) {
    this.countCorrect++;
    this.riddles.pop();
  }
}

module.exports = Sphinx;
