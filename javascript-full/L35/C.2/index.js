const successRequest = Promise.resolve({ name: 'Tom' });

successRequest
  .then(data => {
    return Promise.reject(new Error('Error with data'));
  })
  .catch(error => {
    console.error('onError1', error.message);
  });

const failRequest = Promise.reject(new Error('Something went wrong'));

failRequest
  .catch(error => {
    console.error('onError2', error.message);
    return Promise.reject(new Error('Server error'));
  })
  .then(data => {
    console.log('onSuccess2', data);
  })
  .catch(error => {
    console.error('onError3', error.message);
  });
