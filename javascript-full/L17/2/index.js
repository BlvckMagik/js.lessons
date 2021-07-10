export const callbackPrompt = {
  message: 'Write your name:',
  showPrompt() {
    console.log(prompt(this.message));
  },
  showDeferredPrompt(ms) {
    setTimeout(this.showPrompt.bind(callbackPrompt), ms);
  },
};

callbackPrompt.showDeferredPrompt(1000);
