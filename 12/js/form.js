import { body } from './big-picture-modal-open.js';
import { isEscapeKey, showAlert } from './util.js';
import { sliderBackground, image, imageSizeInput } from './slider.js';
import { imageDefaultSize } from './setup.js';
import { sendData } from './api.js';


const uploadButton = document.querySelector('#upload-file');
const imageOverlay = document.querySelector('.img-upload__overlay');
const closeButton = document.querySelector('#upload-cancel');
const commentField = document.querySelector('.text__description');
const form = document.querySelector('.img-upload__form');
const hashTagField = document.querySelector('.text__hashtags');
const MAX_HASHTAG_QUANTITY = 5;
const ERROR_TEXT = 'ПОЛЕ ЗАПОЛНЕНО НЕВЕРНО';
const hashTagRegExp = /^#[a-zа-яё0-9]{1,19}$/i;
const submitButton = document.querySelector('.img-upload__submit');
const SubmitButtonText = {
  IDLE: 'Опубликовать',
  SENDING: 'Публикую...'
};
const FILE_TYPES = ['jpg', 'jpeg', 'png'];
const smallPhotoes = document.querySelectorAll('.effects__preview');

const blockSubmitButton = () => {
  submitButton.disable = true;
  submitButton.textContent = SubmitButtonText.SENDING;
};

const unBlockSubmitButton = () => {
  submitButton.disable = false;
  submitButton.textContent = SubmitButtonText.IDLE;
};

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

function validateCommentField (value) {
  return value.length <= 140;
}

const showImageOverlay = function () {
  imageOverlay.classList.remove('hidden');
  body.classList.add('modal-open');
  sliderBackground.classList.add('hidden');
  const file = uploadButton.files[0];
  const fileName = file.name.toLowerCase();
  const matches = FILE_TYPES.some((it) => fileName.endsWith(it));
  if (matches) {
    image.src = URL.createObjectURL(file);
    smallPhotoes.forEach((photo) => {
      photo.style.backgroundImage = `url(${image.src})`;
    });
  }
};

pristine.addValidator(hashTagField, validateTags, ERROR_TEXT);
pristine.addValidator(commentField, validateCommentField, ERROR_TEXT);

const setUserFormSubmit = function (onSuccess) {
  form.addEventListener('submit', (evt) => {
    evt.preventDefault();
    if (pristine.validate(hashTagField) && pristine.validate(commentField)) {
      blockSubmitButton();
      sendData(new FormData(evt.target))
        .then(onSuccess)
        .catch((err) => {
          showAlert(err.message);
        })
        .finally(unBlockSubmitButton);
    }
  });
};

const closeImageOverlay = function () {
  image.className = 'effects__preview--none';
  imageOverlay.classList.add('hidden');
  body.classList.remove('modal-open');
  uploadButton.removeEventListener('change', showImageOverlay);
  form.reset();
  pristine.reset();
  image.style.transform = `scale(${(imageDefaultSize) / 100})`;
  image.style.filter = 'none';
  imageSizeInput.value = `${imageDefaultSize}%`;
};

document.addEventListener('keydown', (evt) => {
  if (isEscapeKey(evt)) {
    closeImageOverlay();
  }
});

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

export { openImageForm, setUserFormSubmit, closeImageOverlay };

