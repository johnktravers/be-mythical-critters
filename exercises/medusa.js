class Medusa {
  constructor(name) {
    this.name = name;
    this.statues = [];
  }

  stare(victim) {
    if (this.statues.length === 3) {
      this.statues.shift().unstone();
    }
    victim.stone();
    this.statues.push(victim);
  }
}

module.exports = Medusa;
