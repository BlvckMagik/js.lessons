/**
 * @param {number[]} points
 * @param {number} homeTeam
 * @param {number} awayTeam
 * @param {string} result
 * @return {number[]}
 */
function addPoints(points, homeTeam, awayTeam, result) {
  const pointsCopy = points.slice();
  if (result === 'Win') {
    pointsCopy[homeTeam - 1] += 3;
  } else if (result === 'Lose') {
    pointsCopy[awayTeam - 1] += 3;
  } else {
    pointsCopy[homeTeam - 1] += 1;
    pointsCopy[awayTeam - 1] += 1;
  }
  return pointsCopy;
}

const point = [14, 11, 235, 2, 34, 43, 54, 98];

console.log(addPoints(point, 3, 2, 'Win'));
console.log(point);
