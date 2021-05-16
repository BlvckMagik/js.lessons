function sendEmailList(count) {
  let i = 0;
  while (i < count) {
    sendEmail();
    i += 1;
  }
}

function sendEmail() {
  console.log("Gromcode party invitation was sent!");
}

sendEmailList(30);
