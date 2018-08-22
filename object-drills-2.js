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