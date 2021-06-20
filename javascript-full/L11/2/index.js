const sortContacts = (arr, boolean = true) => {
  if (!Array.isArray(arr)) {
    return null;
  }
  const res = [...arr];
  if (boolean === true) {
    return res.sort((a, b) => a.name.localeCompare(b.name));
  }
  if (boolean === false) {
    return res.sort((a, b) => b.name.localeCompare(a.name));
  }
  return null;
};

const arr = 2;
const array = [
  { name: 'Ann', phoneNumber: '777-77-77' },
  { name: 'Bob', phoneNumber: '666-66-66' },
  { name: 'Carl', phoneNumber: '111-11-11' },
  { name: 'Dominic', phoneNumber: '444-44-44' },
  { name: 'Eggsy', phoneNumber: '3-33-33' },
];
console.log(sortContacts(array));
console.log(sortContacts(array, false));
console.log(sortContacts(arr, true));
