class Direwolf {
  constructor(name, home = 'Beyond the Wall', size = 'Massive') {
    this.name = name;
    this.home = home;
    this.size = size;
    this.starksToProtect = [];
    this.huntsWhiteWalkers = true;
  }

  protect(stark) {
    if (this.home === stark.location && this.starksToProtect.length < 2) {
      this.starksToProtect.push(stark);
      this.huntsWhiteWalkers = false;
      stark.protected();
    }
  }

  leave(stark) {
    if (this.starksToProtect.includes(stark)) {
      if (this.starksToProtect.indexOf(stark) === 0) {
        this.starksToProtect.shift().unprotected();
      } else {
        this.starksToProtect.pop().unprotected();
      }
    }
  }
}

module.exports = Direwolf;
