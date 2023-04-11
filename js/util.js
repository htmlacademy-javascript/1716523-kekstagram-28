import {PHOTO_ID_COUNT, ALERT_SHOW_TIME} from './setup.js';

const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

function createUniqId (min, max) {
  const uniqIdArr = [];
  return function() {
    while(uniqIdArr.length < max) {
      const currentValue = getRandomInteger(min, max);
      if (!uniqIdArr.includes(currentValue)) {
        uniqIdArr.push(currentValue);
        return currentValue;
      }
    }
  };
}
const photoId = createUniqId(1, PHOTO_ID_COUNT);

function createUniqIdFromGenerator () {
  let uniqId = 1;
  return function () {
    return uniqId++;
  };
}

function createListItem(avatar, name, message) {
  return `<li class="social__comment">
      <img
          class="social__picture"
          src="${avatar}"
          alt="${name}"
          width="35" height="35">
      <p class="social__text">${message}</p>
  </li>`;
}

const commentId = createUniqIdFromGenerator();

const isEscapeKey = (evt) => evt.key === 'Escape';

const showAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = '100';
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = '0';
  alertContainer.style.top = '0';
  alertContainer.style.right = '0';
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'red';

  alertContainer.textContent = message;

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
};

const debounce = (callback, timeoutDelay) => {
  let timeoutId;
  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
};

export {getRandomInteger, photoId, commentId, isEscapeKey, createListItem, showAlert, debounce};

