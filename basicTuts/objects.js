let gameCharacter = {
  name: 'Faux',
  class: 'Warrior',
  health: 100,
  get title() {
    return this.name + " the " + this.class
  },
  xPos: 0,
  items: ["Knife", "Coconut"],
  set maxHealth(h) {
    this.health = h
  },
  xPos: 0,
  move: function(x) {
    this.xPos += x;
  }
}

gameCharacter.maxHealth = 150 // health = 150

// get performs a computation and outputs the result
// set modifies existing property within an object
//gameCharacter.maxHealth is undefined, it is not a property