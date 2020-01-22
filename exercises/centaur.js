class Centaur {
  constructor(name, breed) {
    this.name = name;
    this.breed = breed;
    this.cranky = false;
    this.crankiness = 0;
    this.standUp();
  }

  shoot() {
    this.increase_crankiness();
    var response = (this.cranky || this.layingDown) ? 'NO!' : 'Twang!!!';
    return response;
  }

  run() {
    this.increase_crankiness();
    var response = this.layingDown ? 'NO!' : 'Clop clop clop clop!!!';
    return response;
  }

  sleep() {
    this.reset_crankiness();
    var response = this.layingDown ? 'ZZZZ' : 'NO!';
    return response;
  }

  drinkPotion() {
    if (this.standing && this.cranky) {
      this.reset_crankiness();
    } else if (this.standing && !this.cranky) {
      this.cranky = true;
    } else {
      return 'Not while I\'m laying down!'
    }
  }

  layDown() {
    this.standing = false;
    this.layingDown = true;
  }

  standUp() {
    this.standing = true;
    this.layingDown = false;
  }

  increase_crankiness() {
    this.crankiness++;
    if (this.crankiness >= 3) {
      this.cranky = true;
    }
  }

  reset_crankiness() {
    this.crankiness = 0;
    this.cranky = false;
  }
}

module.exports = Centaur;
