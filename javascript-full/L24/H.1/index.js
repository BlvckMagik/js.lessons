const getDiff = (startDate, endDate) => {
  let totalSec = '';
  if (startDate < endDate) {
    totalSec = new Date(endDate - startDate) / 1000;
  } else {
    totalSec = new Date(startDate - endDate) / 1000;
  }

  const days = Math.floor(totalSec / 3600 / 24);
  const hours = Math.floor(totalSec / 3600) % 24;
  const mins = Math.floor(totalSec / 60) % 60;
  const sec = Math.floor(totalSec) % 60;

  return `${days}d ${hours}h ${mins}m ${sec}s`;
};

console.log(getDiff(new Date(2020, 1, 14), new Date(2021, 3, 4)));
console.log(getDiff(new Date(2021, 3, 4), new Date(2020, 1, 14)));
