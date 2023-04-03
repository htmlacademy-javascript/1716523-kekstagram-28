import { body } from './big-picture-modal-open.js';
import { isEscapeKey } from './util.js';
import { sliderBackground, image, scale, onScaleChange } from './slider.js';
// import { image } from './scale.js';

const uploadButton = document.querySelector('#upload-file');
const imageOverlay = document.querySelector('.img-upload__overlay');
const closeButton = document.querySelector('#upload-cancel');
const commentField = document.querySelector('.text__description');
const form = document.querySelector('.img-upload__form');
const hashTagField = document.querySelector('.text__hashtags');
const MAX_HASHTAG_QUANTITY = 5;
const ERROR_TEXT = 'ПОЛЕ ЗАПОЛНЕНО НЕВЕРНО';
const hashTagRegExp = /^#[a-zа-яё0-9]{1,19}$/i;

const pristine = new Pristine (form, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'img-upload__field-wrapper__error',
});

const isUniqueTags = (tags) => {
  const lowerCaseTags = tags.map((tag) => tag.toLowerCase());
  return lowerCaseTags.length === new Set(lowerCaseTags).size;
};

const isValidTag = function (tag) {
  return hashTagRegExp.test(tag);
};

function validateTags (value) {
  const tags = value.trim().split(' ').filter((tag) => tag.trim().length);
  return isUniqueTags(tags) && tags.length <= MAX_HASHTAG_QUANTITY && tags.every(isValidTag);
}

const showImageOverlay = function () {
  imageOverlay.classList.remove('hidden');
  body.classList.add('modal-open');
  sliderBackground.classList.add('hidden');
  scale.addEventListener('click', onScaleChange);
};

document.addEventListener('keydown', (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    imageOverlay.classList.add('hidden');
    body.classList.remove('modal-open');
    uploadButton.removeEventListener('change', showImageOverlay);
    form.reset();
    pristine.reset();
    scale.removeEventListener('click', onScaleChange);
  }
});
pristine.addValidator(hashTagField, validateTags, ERROR_TEXT);

form.addEventListener('submit', (evt) => {
  if (!pristine.validate(hashTagField) || !pristine.validate(commentField)) {
    evt.preventDefault();
    evt.stopPropagation();
  }
});

const closeImageOverlay = function () {
  image.className = 'effects__preview--none';
  imageOverlay.classList.add('hidden');
  body.classList.remove('modal-open');
  uploadButton.removeEventListener('change', showImageOverlay);
  form.reset();
  pristine.reset();
  scale.removeEventListener('click', onScaleChange);
  image.style.transform = 'scale(1)';
};

commentField.addEventListener('keydown', (evt) => {
  if (isEscapeKey(evt)) {
    evt.stopPropagation();
  }
});

hashTagField.addEventListener('keydown', (evt) => {
  if (isEscapeKey(evt)) {
    evt.stopPropagation();
  }
});

closeButton.addEventListener('click', closeImageOverlay);

const openImageForm = function () {
  uploadButton.addEventListener('input', showImageOverlay);
};


export { openImageForm };

