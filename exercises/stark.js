class Stark {
  constructor (name, location = 'Winterfell') {
    this.name = name;
    this.location = location;
    this.safe = false;
  }

  houseWords() {
    var words = this.safe ? 'The North Remembers' : 'Winter is Coming';
    return words;
  }

  protected() {
    this.safe = true;
  }

  unprotected() {
    this.safe = false;
  }
}

module.exports = Stark;
