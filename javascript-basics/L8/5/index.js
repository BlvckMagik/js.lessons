function sendEmail(userName) {
  console.log('Gromcode party invitation was sent to ' + userName + '!');
}

function sendEmailList(userNames) {
  for (let i = 0; i < userNames.length; i += 1) {
    sendEmail(userNames[i]);
  }
}

const names = ['Tom', 'Mike', 'Andrij', 'Alex'];
sendEmailList(names);
