const vehicle = {
  name: 'Argo',
  age1: 1420,

  move() {
    console.log(`${this.name} is moving`);
  },

  stop() {
    console.log(`${this.name} stopped`);
  },
};

const ship = {
  name: 'Argo',
  age: 140,

  startMachine() {
    console.log(`${this.name} lifting anchor up`);
    this.move();
  },

  stopMachine() {
    this.stop();
    console.log(`${this.name} lifting anchor down`);
  },
};

Object.setPrototypeOf(ship, vehicle);

function getOwnProps(object) {
  const res = [];
  for (const prop in object) {
    if (
      Object.hasOwnProperty.call(object, prop) &&
      typeof object[prop] !== 'function'
    ) {
      res.push(prop);
    }
  }
  return res;
}

console.log(getOwnProps(ship));
