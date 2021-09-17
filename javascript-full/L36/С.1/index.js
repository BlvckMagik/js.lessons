const fetchUser = async userId => {
  try {
    const response = await fetch(`https://api.github.com/users/${userId}`);
    if (response.status === 404) {
      return null;
    }

    const data = await response.json();
    return data;
  } catch (err) {
    throw new Error('Failed to fetch');
  }
};
