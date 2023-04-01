import { image } from './scale.js';

const slider = document.querySelector('.effect-level__slider');
const sliderBackground = document.querySelector('.img-upload__effect-level');
const effectLevelInput = document.querySelector('.effect-level__value');
const effectsList = document.querySelector('.effects__list');

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

let activeFilter;

const effects = [chrome, sepia, marvin, phobos, heat, original];

noUiSlider.create(slider, {
  range: {
    min: 0,
    max: 1,
  },
  start: 1,
  step: 0.1,
});

function changeEffectDeep (filterName) {
  if (filterName === 'blur') {
    image.style.filter = `${filterName}(${effectLevelInput.value}px)`;
  } else if (filterName === 'invert') {
    image.style.filter = `${filterName}(${effectLevelInput.value}%)`;
  } else {
    image.style.filter = `${filterName}(${effectLevelInput.value})`;
  }
}

const onAvatarChange = function (imageSettings) {
  if (imageSettings.imageClass === 'none') {
    sliderBackground.classList.add('hidden');
    image.className = `effects__preview--${imageSettings.imageClass}`;
    image.style.filter = '';
  } else {
    sliderBackground.classList.remove('hidden');
    slider.noUiSlider.updateOptions(imageSettings.sliderSettings);
    image.className = `effects__preview--${imageSettings.imageClass}`;
    image.style.filter = '';
  }

};

slider.noUiSlider.on('update', (evt) => {
  effectLevelInput.value = slider.noUiSlider.get();
  changeEffectDeep(activeFilter);
});

effectsList.addEventListener('click', (evt) => {
  for (let i = 0; i < effects.length; i++) {
    if (evt.target.value === effects[i].imageClass) {
      onAvatarChange(effects[i]);
      activeFilter = effects[i].filter;
    }
  }
});

export {slider};
