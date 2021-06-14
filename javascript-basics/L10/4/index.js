/**
 * @param {object[]} players
 * @return {object[]}
 */
function getGoalsStat(players) {
  const res = [];
  for (let i = 0; i < players.length; i += 1) {
    let name = Object.i[name];
    name.push(res);
  }
}

// examples
const players = [
  {
    name: 'Bittencourt Leonardo',
    birthdate: '19.12.1993',
    country: 'Deutschland',
    number: '21',
    team: 'Manchester United',
    position: 'MF',
    goals: 4,
  },
  {
    name: 'Bittencourt Leonardo',
    birthdate: '01.01.2001',
    country: 'Deutschland',
    number: '16',
    team: 'Manchester United',
    position: 'MF',
    goals: 0,
  },
  {
    name: 'Finne Bard',
    birthdate: '13.02.1995',
    country: 'Norwegen',
    number: '26',
    position: 'FW',
    team: 'Fulham United',
    goals: 1,
  },
  {
    name: 'Gerhardt Yannick',
    birthdate: '13.03.1994',
    country: 'Deutschland',
    number: 31,
    position: 'MF',
    team: 'Liverpool',
    goals: 8,
  },
];

console.log(getGoalsStat(players));
// ===>
// [
//   { name: 'Bittencourt Leonardo', team: 'Manchester United', goals: 4 },
//   { name: 'Bittencourt Leonardo', team: 'Manchester United', goals: 0 },
//   { name: 'Finne Bard', team: 'Fulham United', goals: 1 },
//   { name: 'Gerhardt Yannick', team: 'Liverpool', goals: 8 },
// ];
