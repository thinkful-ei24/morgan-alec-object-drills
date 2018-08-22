const loaf = {
  flour: 300,
  water: 210,
  hydration: function() {
    return (this.water / this.flour) * 100;
  }
};

// console.log(loaf.flour);
// console.log(loaf.water);
// console.log(loaf.hydration()); // 70

let obj = {};
obj.firstName = 'aFirstName';
obj.lastName = 'aLastName';
obj.job = 'aJob';
obj.car = 'aCar';

// for(let item in obj){
//   console.log(item);
// }


let meals = {
  meals: ['breakfast', 'second breakfast', 'elevenses', 'lunch', 'afternoon tea', 'dinner', 'supper']
};

// console.log(meals.meals[3]);

let Person = function(name, jobTitle, boss = false){
  this.name = name;
  this.jobTitle = jobTitle;
  this.boss = boss;
};

let arr = [];
let Jim = new Person('Jim', 'Founder');
arr.push(Jim);
let Tim = new Person('Tim', 'engineer', Jim);
arr.push(Tim);
let Mark = new Person('Mark', 'Chef', Jim);
arr.push(Mark);
let Susan = new Person('Susan', 'Accountant', Jim);
arr.push(Susan);



// for(let human of arr){
//     console.log(`${human.jobTitle} ${human.name} ${human.boss ? `reports to ${human.boss.name}` : 'doesn\'t report to anybody'}.`);
// }
///////////////////////////////////////////////
const decodeSentence = function(str){
  const words = str.split(" ");
  console.log(words);
  let newStr = '';
  for(let word of words){
    newStr+=decode(word);
  }
  return newStr;
}


const decode = function(word){
  let countTo = letToNum(word[0]);
  if(countTo === 0){
    return ' ';
  }
  return word[countTo-1];
}


const letToNum = function(letter){
  const letterNum = {};
  letterNum['a'] = 2;
  letterNum['b'] = 3;
  letterNum['c'] = 4;
  letterNum['d'] = 5;
  if(letterNum[letter] !== undefined){
    return letterNum[letter];
  } else {
    return 0;
  }
} //letToNum end

// console.log('this should be an l: ' + decode('cycle'));
// console.log(decodeSentence('craft block argon meter bells brown croon droop'));


const createCharacter = function(characterObject) {
  return {
    name: characterObject.name,
    nickname: characterObject.nickname,
    race: characterObject.race,
    origin: characterObject.origin,
    attack: characterObject.attack,
    defense: characterObject.defense,
    describe: function() {
      return `${this.name} is a ${this.race} from ${this.origin}.`;
    },
    evaluateFight: function(opponent) {
      // Defense power: Our defense - their attack (if this > 0, our defense is stronger)
      // Attack power: Our attack - their defense (if this > 0, our attack is stronger)
      const defensePower = this.defense - opponent.attack;
      const attackPower = this.attack - opponent.defense;

      if (attackPower > 0) { // We are the stronger attacker
        return `Your opponent takes ${attackPower} damage and you receive ${defensePower > 0 ? 0 : Math.abs(defensePower)} damage`;
      }
      else { // We are the weaker attack
        return `Your bloodline is weak! You deal 0 damage and take ${defensePower > 0 ? 0 : Math.abs(defensePower)} damage.`;
      }

      // Attack a weaker enemy: Attack > defense
        // We damage them by our attack - their defense
        // They damage us by our defense - their attack

      // Attack a stronger enemy: Attack < defense
        // They damage us by our their attack - our defense
        // We damage them by our attack - their defense
    }
  };
};

let characterAttributes = [
  {
    name: 'Gandalf the White',
    nickname: 'gandalf',
    race: 'Wizard',
    origin: 'Middle Earth',
    attack: 10,
    defense: 6
  },
  {
  name: 'Bilbo Baggins',
    nickname: 'bilbo',
    race: 'Hobbit',
    origin: 'The Shire',
    attack: 2,
    defense: 1
  },
  {
  name: 'Frodo Baggins',
    nickname: 'frodo',
    race: 'Hobbit',
    origin: 'The Shire',
    attack: 3,
    defense: 2
  },
  {
  name: 'Aragorn son of Arathorn',
    nickname: 'aragorn',
    race: 'Man',
    origin: 'Dunnedain',
    attack: 6,
    defense: 8
  },
  {
  name: 'Legolas',
    nickname: 'legolas',
    race: 'Elf',
    origin: 'Woodland Realm',
    attack: 8,
    defense: 5 
  }
];

let characters = characterAttributes
  .map(character => new createCharacter(character));

// console.log(characters[0].evaluateFight(characters[2]));
// console.log(characters[2].evaluateFight(characters[4]));