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
}
