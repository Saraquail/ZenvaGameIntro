class GameCharacter {
  constructor(name, xPos, health) {
    this.name = name,
    this.xPos = xPos,
    this.health = health
  }

  move(x) {
    this.xPos += x
  }
}

let char1 = new GameCharacter("Faux", 0, 100, 'Wizard') 
let char2 = new GameCharacter("Skull", 0, 100, "Ranger")

console.log( char1.health)

class HumanCharacter extends GameCharacter { 
  constructor(name, xPos, health) {
    super(name, xPos, health)
    this.charClass = "Human"
  }
}

let human1 = new HumanCharacter("Skull", 1, 100)

console.log(char1)