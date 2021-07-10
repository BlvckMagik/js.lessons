let message = "Just learn it"

export const sendMessage = (name) => {
    console.log(`${name}, ${message}! Your Gromcode`)
}

export const setMessage = mes => {
    message = mes
}

sendMessage('Ann');

setMessage("Hi");
sendMessage('Tom');