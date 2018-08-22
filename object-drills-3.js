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
