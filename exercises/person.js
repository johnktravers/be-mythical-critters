class Person {
  constructor(name) {
    this.name = name;
    this.stoned = false;
  }

  stone() {
    this.stoned = true;
  }

  unstone() {
    this.stoned = false;
  }
}

module.exports = Person;
