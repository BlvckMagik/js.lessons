export const timer = {
  secondsPassed: 0,
  minsPassed: 0,

  startTimer() {
    this.interval = setInterval(() => {
      this.secondsPassed += 1;
      if (this.secondsPassed === 60) {
        this.secondsPassed = 0;
        this.minsPassed += 1;
      }
      console.log(this.secondsPassed);
    }, 1000);
  },

  getTime() {
    if (this.secondsPassed < 10) {
      return `${this.minsPassed}:0${this.secondsPassed}`;
    }
    return `${this.minsPassed}:${this.secondsPassed}`;
  },

  stopTimer() {
    clearInterval(this.interval);
  },

  resetTimer() {
    this.secondsPassed = 0;
    this.minsPassed = 0;
  },
};
