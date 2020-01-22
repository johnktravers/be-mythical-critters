class Wizard {
  constructor(params) {
    this.name = params.name;
    this.bearded = params.bearded === false ? false : true;
    this.isRested = true;
    this.spellCount = 0;
  }

  incantation(spell) {
    return spell.toUpperCase();
  }

  cast() {
    this.spellCount++;

    if (this.spellCount < 3) {
      return 'MAGIC BULLET';
    } else {
      this.isRested = false;
      return 'I SHALL NOT CAST!';
    }
  }
}

module.exports = Wizard;
