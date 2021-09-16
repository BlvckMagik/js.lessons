const fetchUser = async userId => {
  try {
    const response = await fetch(`https://api.github.com/users/${userId}`);
    if (response.status === 404) {
      return null;
    }

    const data = await response.json();
    return data;
  } catch (err) {
    const res = await Promise.reject(new Error(err));
    return res;
  }
};

fetchUser('facebook')
  .then(res => console.log(res))
  .catch(err => {
    alert(err.message);
  });
