
const COMMENT_PER_PORTION = 5;
const ALERT_SHOW_TIME = 5000;

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

export { COMMENT_PER_PORTION, effects, imageSizeStep, imageDefaultSize, ALERT_SHOW_TIME };
