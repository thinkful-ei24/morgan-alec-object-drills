function makeStudentsReport(data) {

  return data.map((student) => {
    return `${student.name}: ${student.grade}`;
  });
}
// const testData = [
//   { name: 'Jane Doe', grade: 'A' },
//   { name: 'John Dough', grade: 'B' },
//   { name: 'Jill Do', grade: 'A' },
// ];
// console.log(makeStudentsReport(testData));


const enrollInSummerSchool = function(students) {
  return students.map((student) => {
    student.status = 'In Summer School';
    return student;
  });
};

// const testData = [{
//     name: 'Tim',
//     status: 'In Summer school',
//     course: 'Biology'
//   },
//   {
//     name: 'Sue',
//     status: 'In Summer school',
//     course: 'Mathematics'
//   },
// ];

// console.log(enrollInSummerSchool(testData));

const scratchData = [
  { id: 22, foo: 'bar' },
  { id: 28, foo: 'bizz' },
  { id: 19, foo: 'bazz' },
];

function findById(items, idNum) {
  return items.find(obj => obj.id === idNum);
}

// console.log(findById(scratchData, 22));
