import {PHOTO_ID_COUNT} from './setup.js';

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

const commentId = createUniqIdFromGenerator();

const isEscapeKey = (evt) => {
  return evt.key === 'Escape';
}

export {getRandomInteger, photoId, commentId, isEscapeKey};
