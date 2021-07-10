const createMessenger = () => {
  let message = 'Just learn it';
  let sender = 'Gromcode';

  const sendMessage = name => {
    console.log(`${name}, ${message}! Your ${sender}`);
  };

  const setMessage = mes => {
    message = mes;
  };

  const setSender = senderName => {
    sender = senderName;
  };

  return {
    sendMessage,
    setMessage,
    setSender,
  };
};

export default createMessenger;

const message = createMessenger();
message.sendMessage('Bob');
message.setMessage('Hi');
message.setSender('Ann');
message.sendMessage('Tom');
