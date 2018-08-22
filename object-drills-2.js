function makeStudentsReport(data) {

  return data.map((student) => {
    return `${student.name}: ${student.grade}`;
  });
}



const enrollInSummerSchool = function(students) {
  return students.map((student) => {
    student.status = 'In Summer School';
    return student;
  });
};



const scratchData = [
  { id: 22, foo: 'bar' },
  { id: 28, foo: 'bizz' },
  { id: 19, foo: 'bazz' },
];

function findById(items, idNum) {
  return items.find(obj => obj.id === idNum);
}

// console.log(findById(scratchData, 22));
const validateKeys = function(obj, expectedKeys){
  const keys = Object.keys(obj);
  for(let key of keys){
    if(!expectedKeys.includes(key)){
      return false;
    }
  }
  return true;
}
const objectA = {
  id: 2,
  name: 'Jane Doe',
  age: 34,
  city: 'Chicago',
};

const expected = ['id', 'name', 'age', 'city'];
console.log(validateKeys(objectA, expected));
