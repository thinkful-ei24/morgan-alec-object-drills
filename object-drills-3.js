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

for(let item in obj){
  console.log(item);
}
