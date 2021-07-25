const week = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'St'];

export const dayOfWeek = (date, days) => {
  const newDate = new Date(date).getDate();
  const inFuture = new Date(date).setDate(newDate + days);
  return week[new Date(inFuture).getDay()];
};

console.log(dayOfWeek(new Date(2021, 0, 1), 14));
