const createMyObject = function() {
  return {
    foo: 'bar',
    answerToUniverse: 42,
    'olly olly': 'oxen free',
    sayHello: function() { return 'hello'; }
  };
};

const updateObject = function(obj){
  obj.foo = 'foot';
  obj.bar = 'bar';
  obj.bizz = 'bizz';
  obj.bang = 'bang';
  return obj;
};

function personMaker() {
  var person = {
    firstName: 'Paul',
    lastName: 'Jones',
    // replace `null` with a function that uses self reference to return
    // full name
    fullName: function() {
      return `${this.firstName} ${this.lastName}`;
    }
  };
  return person;
}

let person = personMaker();

console.log(person.fullName());

const keyDeleter = function(obj){
  delete obj.foo;
  delete obj.bar;
  return obj;
};