function getRevenue(sales) {
  let res = 0;
  for (let i = 0; i < sales.length; i += 1) {
    res += sales[i];
  }
  return res;
}

function checkRevenue(sales, plannedRevenue) {
  return getRevenue(sales) >= plannedRevenue;
}

const revenue = [25, 40, 10, 58];
console.log(getRevenue(revenue));
console.log(checkRevenue(revenue, 140));
