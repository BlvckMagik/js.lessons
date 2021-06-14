const getMessagesForBestStudents = (allStudentsList, studentsForRetake) =>
  allStudentsList
    .filter(arr => !studentsForRetake.includes(arr))
    .map(name => `Good job, ${name}`);

const allStud = ['a', 'b', 'c', 'd'];
const retakeStud = ['b', 'd'];

console.log(getMessagesForBestStudents(allStud, retakeStud));
