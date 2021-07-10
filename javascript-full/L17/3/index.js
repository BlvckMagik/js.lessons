function defer(func, ms) {
  return function () {
    setTimeout(() => func.apply(this, arguments), ms);
  };
}

const callbackMessage = {
  message: 'Write your name:',
  showMessage() {
    console.log(`Hi! ${this.message}`);
  },
};

const def = defer(callbackMessage.showMessage);
def();
