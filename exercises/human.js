class Human {
  constructor(name) {
    this.name = name;
    this.encounterCounter = 0;
    this.knockedOut = false;
  }

  logEncounter() {
    this.encounterCounter++;
  }

  noticesOgre() {
    return (this.thirdEncounter()) ? true : false;
  }

  thirdEncounter() {
    return this.encounterCounter > 0 && this.encounterCounter % 3 === 0;
  }

  knockOut() {
    this.knockedOut = true;
  }

  wakeUp() {
    this.knockedOut = false;
  }
}

module.exports = Human;
