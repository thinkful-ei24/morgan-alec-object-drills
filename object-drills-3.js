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



for(let human of arr){
    console.log(`${human.jobTitle} ${human.name} ${human.boss ? `reports to ${human.boss.name}` : 'doesn\'t report to anybody'}.`);
}
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
              //hasAKeyOf
  if(letterNum[letter] !== undefined){
    return letterNum[letter];
  } else {
    return 0;
  }
} //letToNum end

console.log('this should be an l: ' + decode('cycle'));
console.log(decodeSentence('craft block argon meter bells brown croon droop'));















//
