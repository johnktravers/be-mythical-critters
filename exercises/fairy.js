class Fairy {
  constructor (name) {
    this.name = name;
    this.dust = 10;
    this.clothes = {dresses: ['Iris']};
    this.disposition = 'Good natured';
    this.humanWards = [];
  }

  receiveBelief() {
    this.dust++;
  }

  believe() {
    this.dust += 10;
  }

  makeDresses(flowers) {
    this.clothes.dresses.push(...flowers);
  }

  provoke() {
    this.disposition = 'Vengeful';
  }

  replaceInfant(infant) {
    if (this.disposition === 'Vengeful') {
      this.humanWards.push(infant);
      infant.disposition = 'Malicious';
      this.changeDisposition();
    }
    return infant;
  }

  changeDisposition() {
    if (this.humanWards.length >= 3) {
      this.disposition = 'Good natured';
    }
  }
}

module.exports = Fairy;
