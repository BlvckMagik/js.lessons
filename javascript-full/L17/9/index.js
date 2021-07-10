const bind = (func, context, arg1, arg2) => {
  func();
};

function getFullName(firstName, lastName) {
  return `${firstName} ${lastName}`;
}
