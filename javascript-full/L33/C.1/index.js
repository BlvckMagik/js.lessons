const userAvatarEl = document.querySelector('.user__avatar');
const userNameEl = document.querySelector('.user__name');
const userLocationEl = document.querySelector('.user__location');
const nameInput = document.querySelector('.name-form__input');
const searchBtnEl = document.querySelector('.name-form__btn');

const fetchUser = userName =>
  fetch(`https://api.github.com/users/${userName}`).then(response =>
    response.json()
  );

const onBtnClick = () => {
  fetchUser(nameInput.value).then(res => {
    userAvatarEl.src = res.avatar_url;
    userNameEl.textContent = res.name;
    userLocationEl.textContent = res.location ? `from ${res.location}` : '';
  });
};

searchBtnEl.addEventListener('click', onBtnClick);
