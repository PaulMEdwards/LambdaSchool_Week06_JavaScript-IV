/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/

console.log("======================");
console.log("prototypes-refactor.js");
console.log("======================");

/*
  Object oriented design is commonly used in video games.  For this part of the assignment you will be implementing several constructor functions with their correct inheritance hierarchy.

  In this file you will be creating three constructor functions: GameObject, CharacterStats, Humanoid.  

  At the bottom of this file are 3 objects that all end up inheriting from Humanoid.  Use the objects at the bottom of the page to test your constructor functions.
  
  Each constructor function has unique properties and methods that are defined in their block comments below:
*/

console.log("\n");  //Double blank line

/*
  === GameObject ===
  * createdAt
  * name
  * dimensions (These represent the character's size in the video game)
  * destroy() // prototype method that returns: `${this.name} was removed from the game.`
*/
class GameObject {
  constructor(attributes) {
    this.name = attributes.name;
    this.createdAt = attributes.createdAt;
    this.dimensions = attributes.dimensions;
  }
  destroy() {
    return `${this.name} was removed from the game.`;
  }
}

/*
  === CharacterStats ===
  * healthPoints
  * takeDamage() // prototype method -> returns the string '<object name> took damage.'
  * should inherit destroy() from GameObject's prototype
*/
class CharacterStats extends GameObject {
  constructor(attributes) {
    super(attributes);
    this.healthPoints = attributes.healthPoints;
    this.alignment = { LawVsChaos: 0, GoodVsEvil: 0 } | attributes.alignment;  // Default: Neutral
  }
  takeDamage(points=0) {
    if (points === undefined) points = 0;
    this.healthPoints -= points;
    // if (this.healthPoints <= 0) {
    //   this.healthPoints = 0;
    // }
    return `${this.name} took ${points} points of damage!`;
  }
  receiveHealth(points=0) {
    if (points === undefined) points = 0;
    this.healthPoints += points;
    return `${this.name} received ${points} points of health.`;
  }
}

/*
  === Humanoid (Having an appearance or character resembling that of a human.) ===
  * team
  * weapons
  * language
  * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
  * should inherit destroy() from GameObject through CharacterStats
  * should inherit takeDamage() from CharacterStats
*/
class Humanoid extends CharacterStats {
  constructor(attributes) {
    super(attributes);
    this.team = attributes.team;
    this.weapons = attributes.weapons;
    this.language = attributes.language;
  }
  greet() {
    return `${this.name} offers a greeting in ${this.language}.`;
  }
}

/*
  * Inheritance chain: GameObject -> CharacterStats -> Humanoid
  * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
  * Instances of CharacterStats should have all of the same properties as GameObject.
*/

function getObjName(unknownVariableInAHash) {
  n = Object.keys(unknownVariableInAHash)[0];
  n = n[0].toUpperCase()+n.substring(1).toLowerCase();
  return n;
}

function creationDateTime(obj) {
  return `${obj.createdAt.toLocaleDateString("en-US")} @ ${mage.createdAt.toLocaleTimeString("en-US")}`;
}

function logGameObj(obj) {
  return `named ${obj.name} created at ${creationDateTime(obj)} with dimensions H:${obj.dimensions.height},W:${obj.dimensions.width},L:${obj.dimensions.length}, weapons:${obj.weapons}, and is a member of the ${obj.team} team who speaks ${obj.language}.`;
}

// Test you work by un-commenting these 3 objects and the list of console logs below:

const mage = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 1,
    height: 1,
  },
  healthPoints: 5,
  name: 'Bruce',
  team: 'Mage Guild',
  weapons: [
    'Staff of Shamalama',
  ],
  language: 'Common Tongue',
});

const swordsman = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 2,
    height: 2,
  },
  healthPoints: 15,
  name: 'Sir Mustachio',
  team: 'The Round Table',
  weapons: [
    'Giant Sword',
    'Shield',
  ],
  language: 'Common Tongue',
});

const archer = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 1,
    width: 2,
    height: 4,
  },
  healthPoints: 10,
  name: 'Lilith',
  team: 'Forest Kingdom',
  weapons: [
    'Bow',
    'Dagger',
  ],
  language: 'Elvish',
});

console.log(`${getObjName({mage})} ${logGameObj(mage)}`);
console.log(`${getObjName({archer})} ${logGameObj(archer)}`);
console.log(`${getObjName({swordsman})} ${logGameObj(swordsman)}`);
console.log('================================================');
console.log('mage.createdAt:',mage.createdAt); // Today's date
console.log('archer.dimensions:',archer.dimensions); // { length: 1, width: 2, height: 4 }
console.log('swordsman.healthPoints:',swordsman.healthPoints); // 15
console.log('mage.name:',mage.name); // Bruce
console.log('swordsman.team:',swordsman.team); // The Round Table
console.log('mage.weapons:',mage.weapons); // Staff of Shamalama
console.log('archer.language:',archer.language); // Elvish
console.log('archer.greet():',archer.greet()); // Lilith offers a greeting in Elvish.
console.log('mage.takeDamage():',mage.takeDamage()); // Bruce took damage.
console.log('swordsman.destroy():',swordsman.destroy()); // Sir Mustachio was removed from the game.

console.log("\n");  //Double blank line

// Stretch task: 
// * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.

class MainCharacter extends Humanoid {
  constructor(attributes) {
    super(attributes);
    this.defenses = attributes.defenses;
  }
  attack(target,weapon) {
    let p = random(weapon.min, weapon.max);
    let buff = random(0,this.alignment.LawVsChaos*5) + random(0,this.alignment.GoodVsEvil*10);
    p = p + buff;
    console.log(`${this.name} attacks ${target.name} using ${weapon.name} for -${p} points (after ${buff} buff).`);
    return p;
  }
  defend(target,defense) {
    let p = random(defense.min, defense.max);
    let buff = random(0,this.alignment.LawVsChaos*10) + random(0,this.alignment.GoodVsEvil*5);
    p = p + buff;
    console.log(`${this.name} defends against ${target.name} using ${defense.name} for +${p} points (after ${buff} buff).`);
    return p;
  }
}

class Hero extends MainCharacter {
  constructor(attributes) {
    super(attributes);
    this.alignment = { LawVsChaos: 1, GoodVsEvil: 1 };
  }
}

class Villain extends MainCharacter {
  constructor(attributes) {
    super(attributes);
    this.alignment = { LawVsChaos: -1, GoodVsEvil: -1 };
  }
}

// * Give the Hero and Villain different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;


// * Create two new objects, one a villain and one a hero and fight it out with methods!

const darthVader = new Villain({
  createdAt: new Date(),
  dimensions: {
    length: 3,
    width: 2,
    height: 5,
  },
  healthPoints: 150,
  name: 'Darth Vader',
  team: 'Galactic Empire',
  weapons: [
    { name: 'Force Choke', min: 45, max: 60 },
    { name: 'Light Saber', min: 50, max: 70}
  ],
  defenses: [
    { name: 'Force Repel', min: 20, max: 35},
    { name: 'Force Shield', min: 25, max: 40}
  ],
  language: 'Sith',
});

const lukeSkywalker = new Hero({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 1,
    height: 4,
  },
  healthPoints: 115,
  name: 'Luke Skywalker',
  team: 'Rebel Alliance',
  weapons: [
    { name: 'Blaster Pistol', min: 20, max: 35},
    { name: 'Light Saber', min: 25, max: 45}
  ],
  defenses: [
    { name: 'Force Repel', min: 15, max: 30},
    { name: 'Force Deflect', min: 30, max: 45}
  ],
  language: 'Jedi',
});

function logMainCharObj(obj) {
  return `named ${obj.name} created at ${creationDateTime(obj)} with dimensions H:${obj.dimensions.height},W:${obj.dimensions.width},L:${obj.dimensions.length}, health:${obj.healthPoints}, weapons:${obj.weapons[0].name}+${obj.weapons[1].name} defenses:${obj.defenses[0].name}+${obj.defenses[1].name}, and is a member of the ${obj.team} who speaks ${obj.language}.`;
}

console.log(`Hero ${logMainCharObj(lukeSkywalker)}`);
console.log(`Villain ${logMainCharObj(darthVader)}`);
console.log('================================================');

function random(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

while (lukeSkywalker.healthPoints > 0 && darthVader.healthPoints > 0) {
  console.log(lukeSkywalker.takeDamage(darthVader.attack(lukeSkywalker, darthVader.weapons[random(0,1)])));
  console.log(lukeSkywalker.receiveHealth(lukeSkywalker.defend(darthVader, lukeSkywalker.defenses[random(0,1)])));
  console.log('------------------------------------------------');
  console.log(darthVader.takeDamage(lukeSkywalker.attack(darthVader, lukeSkywalker.weapons[random(0,1)])));
  console.log(darthVader.receiveHealth(darthVader.defend(lukeSkywalker, darthVader.defenses[random(0,1)])));
  console.log('------------------------------------------------');
  console.log(`lukeSkywalker.healthPoints:`,lukeSkywalker.healthPoints);
  console.log(`darthVader.healthPoints:`,darthVader.healthPoints);
  if (lukeSkywalker.healthPoints <= 0 || darthVader.healthPoints <= 0) console.log('------------------------------------------------');
  if (lukeSkywalker.healthPoints<=0) console.log(lukeSkywalker.destroy());
  if (darthVader.healthPoints<=0) console.log(darthVader.destroy());
  console.log('================================================');
}