// let age = 27;
// let money = 50.05;

// age = 28

// let pos = 0
// let end = 5

// while (pos < end) {
//   console.log(pos)
//   pos++
// }

// for (let i = 0; i < 5; i++) {
// //   console.log(i)
// // }

// function move(pos, n) {
//   const newPos = pos + n;
//   return newPos;
// }

// let thing = move(0, 2);
// console.log(thing);

function gameCharacter(name, xPos, health, charClass) {
  return {
    name,
    charClass,
    health,
    get title() {
      return this.name + " the " + this.class;
    },
    xPos,
    items: ["Knife", "Coconut"],
    set maxHealth(h) {
      this.health = h;
    },
  };
}


let char1 = new gameCharacter("Faux", 0, 100, 'Wizard') 

//add new property to constructor
gameCharacter.prototype.race = "Human" //all new gameCharacters are now human?
// doesn't seem to work in ES6
char2 = new gameCharacter("Skull", 0, 100, "Ranger")
console.log(char2)
//better to use class in ES6 I believe


