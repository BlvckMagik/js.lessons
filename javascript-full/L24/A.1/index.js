const months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

const studentsList = [
  { name: 'Tom', birthDate: '01/15/2010' },
  { name: 'Ben', birthDate: '01/17/2008' },
  { name: 'Sam', birthDate: '03/15/2010' },
];

const studentsBirthDays = students => {
  const res = {};
  students
    .sort(
      (a, b) =>
        new Date(a.birthDate).getDate() - new Date(b.birthDate).getDate()
    )
    .forEach(element => {
      const numOfMonth = new Date(element.birthDate).getMonth();
      if (!res[months[numOfMonth]]) {
        res[months[numOfMonth]] = [];
      }
      res[months[numOfMonth]].push(element.name);
    });
  console.log(res);
  return res;
};

studentsBirthDays(studentsList);
