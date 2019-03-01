/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/

class GameObject {
  constructor(params) {
    this.createdAt = params.createdAt;
    this.name = params.name;
    this.dimensions = params.dimensions;
  }

  destroy() {
    return `${this.name} was removed from the game.`;
  }
}


class CharacterStats extends GameObject {
  constructor(params) {
    super(params);
    this.healthPoints = params.healthPoints;
  }

  takeDamage() {
    return `${this.name} took damage.`;
  }
}

class Humanoid extends CharacterStats {
  constructor(params) {
    super(params)
    this.team = params.team;
    this.weapons = params.weapons;
    this.language = params.language;
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

// console.log(mage.createdAt); // Today's date
// console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
// console.log(swordsman.healthPoints); // 15
// console.log(mage.name); // Bruce
// console.log(swordsman.team); // The Round Table
// console.log(mage.weapons); // Staff of Shamalama
// console.log(archer.language); // Elvish
// console.log(archer.greet()); // Lilith offers a greeting in Elvish.
// console.log(mage.takeDamage()); // Bruce took damage.
// console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.


// Stretch task: 
// * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.  
// * Give the Hero and Villains different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
// * Create two new objects, one a villain and one a hero and fight it out with methods!

class Villain extends Humanoid {
  constructor(params) {
    super(params);
  }

  nuclearBomb(target) {
    if (target.healthPoints <= 0) {
      console.log(`${target.name} is already dead. :\\`);
      return;
    }
    const attackDamage = 5;
    console.log(`${target.name} was attacked by ${this.name} for ${attackDamage} health.`);
    target.healthPoints -= 5;
    if (target.healthPoints <= 0) {
      console.log(target.destroy())
      target.destroy();
    }

    return target;
  }
}

class Hero extends Humanoid {
  constructor(params) {
    super(params);
  }

  guidedMissiles(target) {

    if (target.healthPoints <= 0) {
      console.log(`${target.name} is already dead. :\\`);
      return;
    }
    const attackDamage = 5;
    console.log(`${target.name} was attacked by ${this.name} for ${attackDamage} health.`);
    target.healthPoints -= attackDamage;

    if (target.healthPoints <= 0) {
      console.log(target.destroy())
      target.destroy();
    }

    return target;
  }
}

const american = new Hero({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 2,
    height: 2
  },
  healthPoints: 10,
  name: 'America!',
  team: 'The West',
  weapons: [
    'Guided Missiles'
  ],
  language: 'English',
});



const terrorist = new Villain({
  createdAt: new Date(),
  dimensions: {
    length: 1,
    width: 2,
    height: 4
  },
  healthPoints: 10,
  name: 'Terrorist',
  team: 'ISIS',
  weapons: [
    'Nuclear Bomb'
  ],
  language: 'Arabic',
});



window.onload = function () {

  let heroInfo = document.querySelector('.hero-info');
  Object.keys(american).forEach(key => {
    heroInfo.textContent += `${key}: ${american[key]}
      `;
  });

  heroInfo.innerHTML = heroInfo.innerHTML.replace(/\n\r?/g, '<br/>');


  let VillainInfo = document.querySelector('.villain-info');
  Object.keys(terrorist).forEach(key => {
    VillainInfo.textContent += `${key}: ${terrorist[key]}
        `;
  });

  VillainInfo.innerHTML = VillainInfo.innerHTML.replace(/\n\r?/g, '<br/>');

  let villainAttack = document.querySelector('.villain-attack');
  let heroAttack = document.querySelector('.hero-attack');

  villainAttack.addEventListener("click", _ => {
    terrorist.nuclearBomb(american);

    if (american.healthPoints <= 0) {
      heroInfo.style.background = 'red';
    }
  });

  heroAttack.addEventListener("click", _ => {
    american.guidedMissiles(terrorist);

    if (terrorist.healthPoints <= 0) {
      VillainInfo.style.background = 'red';
    } else {
      VillainInfo.style.background = 'red';
      setTimeout(
        () => {
          VillainInfo.style.background = 'white';
        }, 50
      )
    }
  });
}