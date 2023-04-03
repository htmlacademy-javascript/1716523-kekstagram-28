
import { effects, imageDefaultSize, imageSizeStep } from './setup.js';

const slider = document.querySelector('.effect-level__slider');
const sliderBackground = document.querySelector('.img-upload__effect-level');
const effectLevelInput = document.querySelector('.effect-level__value');
const effectsList = document.querySelector('.effects__list');
let activeFilter;

const minusButton = document.querySelector('.scale__control--smaller');
const plusButton = document.querySelector('.scale__control--bigger');
const imageSizeInput = document.querySelector('.scale__control--value');
const image = document.querySelector('.img-upload__preview').children[0];
const scale = document.querySelector('.img-upload__scale');

let sizeValue = imageDefaultSize;

const changeImageSize = function (value) {
  imageSizeInput.value = `${value}%`;
  image.style.transform = `scale(${parseInt(imageSizeInput.value, 10) / 100})`;
};

const onScaleChange = function(event) {
  if (event.target === plusButton) {
    sizeValue += imageSizeStep;
    if (sizeValue > imageDefaultSize) {
      sizeValue = imageDefaultSize;
    }
  } else if (event.target === minusButton) {
    sizeValue -= imageSizeStep;
    if (sizeValue < imageSizeStep) {
      sizeValue = imageSizeStep;
    }
  }
  changeImageSize(sizeValue);
};

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
    slider.noUiSlider.reset();
    image.className = `effects__preview--${imageSettings.imageClass}`;
    image.style.filter = '';
  } else {
    sliderBackground.classList.remove('hidden');
    slider.noUiSlider.updateOptions(imageSettings.sliderSettings);
    image.className = `effects__preview--${imageSettings.imageClass}`;
    image.style.filter = '';
  }

};

slider.noUiSlider.on('update', () => {
  effectLevelInput.value = slider.noUiSlider.get();
  changeEffectDeep(activeFilter);
});

const onEffectsChange = function () {
  effectsList.addEventListener('click', (evt) => {
    for (let i = 0; i < effects.length; i++) {
      if (evt.target.value === effects[i].imageClass) {
        imageSizeInput.value = `${imageDefaultSize}%`;
        sizeValue = imageDefaultSize;
        image.style.transform = 'scale(1)';
        onAvatarChange(effects[i]);
        activeFilter = effects[i].filter;
      }
    }
  });
};

export { sliderBackground, onEffectsChange, image, scale, onScaleChange };
