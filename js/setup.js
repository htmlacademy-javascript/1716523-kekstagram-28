const PHOTO_ID_COUNT = 25;
const MIN_LIKES_COUNT = 15;
const MAX_LIKES_COUNT = 200;
const MIN_AVATAR_NUMBER = 1;
const MAX_AVATAR_NUMBER = 6;
const COMMENT_PER_PORTION = 5;
const ALERT_SHOW_TIME = 5000;
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

const imageSizeStep = 25;
const imageDefaultSize = 100;

const chrome = {
  sliderSettings: {
    range: {
      min: 0,
      max: 1
    },
    start: 1,
    step: 0.1,
  },
  filter: 'grayscale',
  imageClass: 'chrome',
};

const sepia = {
  sliderSettings: {
    range: {
      min: 0,
      max: 1,
    },
    start: 1,
    step: 0.1,
  },
  filter: 'sepia',
  imageClass: 'sepia',
};

const marvin = {
  sliderSettings: {
    range: {
      min: 0,
      max: 100,
    },
    start: 100,
    step: 1,
  },
  filter: 'invert',
  imageClass: 'marvin',
};

const phobos = {
  sliderSettings: {
    range: {
      min: 0,
      max: 3
    },
    start: 3,
    step: 0.1,
  },
  filter: 'blur',
  imageClass: 'phobos',
};

const heat = {
  sliderSettings : {
    range: {
      min: 0,
      max: 3
    },
    start: 3,
    step: 0.1,
  },
  filter: 'brightness',
  imageClass: 'heat',
};

const original = {
  sliderSettings : {
    range: {
      min: 0,
      max: 0
    },
    start: 0,
    step: 0,
  },
  filter: '',
  imageClass: 'none'
};

const effects = [chrome, sepia, marvin, phobos, heat, original];

export {NAMES, MESSAGES_ARR, PHOTO_DESCRIPTIONS, MAX_AVATAR_NUMBER, MIN_AVATAR_NUMBER,
  MAX_LIKES_COUNT, MIN_LIKES_COUNT, PHOTO_ID_COUNT, COMMENT_PER_PORTION, effects, imageSizeStep, imageDefaultSize, ALERT_SHOW_TIME};
