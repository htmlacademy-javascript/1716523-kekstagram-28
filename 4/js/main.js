
const PHOTO_ID_COUNT = 25;
const MIN_LIKES_COUNT = 15;
const MAX_LIKES_COUNT = 200;
const MIN_AVATAR_NUMBER = 1;
const MAX_AVATAR_NUMBER = 6;
const PHOTO_DESCRIPTIONS = [
  'я на отдыхе',
  'я на работе',
  'моё вдохновение',
  'то что я хочу',
  'моя цель'
];

const MESSAGES_ARR = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра.',
  'В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const NAMES = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон',
];

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

function createCommentsDescription() {
  return{
    id: commentId(),
    avatar: `img/avatar-${getRandomInteger(MIN_AVATAR_NUMBER, MAX_AVATAR_NUMBER)}.svg`,
    message: MESSAGES_ARR[getRandomInteger(0, MESSAGES_ARR.length - 1)],
    name: NAMES[getRandomInteger(0, NAMES.length - 1)],
  };
}

function createPhotoesDescription() {
  const id = photoId();
  return {
    id,
    url: `photos/${id}.jpg`,
    description: PHOTO_DESCRIPTIONS[getRandomInteger(0, PHOTO_DESCRIPTIONS.length - 1)],
    likes: getRandomInteger(MIN_LIKES_COUNT, MAX_LIKES_COUNT),
    comments: Array.from({length: getRandomInteger(1, 5)}, createCommentsDescription),
  };
}

const photoesDescription = function() {
  return Array.from({length: PHOTO_ID_COUNT}, createPhotoesDescription);
};

photoesDescription();
