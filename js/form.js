import { body } from './big-picture-modal-open.js';
import { isEscapeKey } from './util.js';
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

const successTemplate = document.querySelector('#success')
  .content
  .querySelector('.success');
const successElement = successTemplate.cloneNode(true);
const successButton = successElement.querySelector('.success__button');
const hideSuccessElement = () => {
  successElement.classList.add('hidden');
};

const createSuccessModal = () => {
  document.body.append(successElement);
  hideSuccessElement();
};

const showSuccessModal = () => {
  successElement.classList.remove('hidden');
  successButton.addEventListener('click', hideSuccessElement);
  document.addEventListener('click', (evt) => {
    if (evt.target !== successElement.querySelector('.success__inner')) {
      hideSuccessElement();
    }
  });
  document.addEventListener('keydown', (evt) => {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      hideSuccessElement();
    }
  });
};

const errorTemplate = document.querySelector('#error')
  .content
  .querySelector('.error');
const errorElement = errorTemplate.cloneNode(true);
const errorButton = errorElement.querySelector('.error__button');
const hideErrorElement = () => {
  errorElement.classList.add('hidden');
};

const createErrorModal = () => {
  document.body.append(errorElement);
  hideErrorElement();
};

const closeModalByKey = () => {
  document.addEventListener('keydown', (evt) => {
    if (isEscapeKey(evt) && !errorElement.classList.contains('hidden')) {
      evt.preventDefault();
      hideErrorElement();
      evt.stopImmediatePropagation();
    } else if (isEscapeKey(evt) && errorElement.classList.contains('hidden')) {
      evt.preventDefault();
      closeImageOverlay();
    }
  });
};

const showErrorModal = () => {
  errorElement.classList.remove('hidden');
  errorButton.addEventListener('click', hideErrorElement);
  document.addEventListener('click', (evt) => {
    if (evt.target !== errorElement.querySelector('.error__inner')) {
      hideErrorElement();
    }
  });
  closeModalByKey();
};

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

const validateTags = function (value) {
  const tags = value.trim().split(' ').filter((tag) => tag.trim().length);
  return isUniqueTags(tags) && tags.length <= MAX_HASHTAG_QUANTITY && tags.every(isValidTag);
};

const validateCommentField = function (value) {
  return value.length <= 140;
};

function closeImageOverlay () {
  image.className = 'effects__preview--none';
  imageOverlay.classList.add('hidden');
  body.classList.remove('modal-open');
  uploadButton.removeEventListener('change', showImageOverlay);
  form.reset();
  pristine.reset();
  image.style.transform = `scale(${(imageDefaultSize) / 100})`;
  image.style.filter = 'none';
  imageSizeInput.value = `${imageDefaultSize}%`;
}

function showImageOverlay () {
  closeModalByKey();
  const file = uploadButton.files[0];
  const fileName = file.name.toLowerCase();
  const matches = FILE_TYPES.some((it) => fileName.endsWith(it));
  if (matches) {
    imageOverlay.classList.remove('hidden');
    body.classList.add('modal-open');
    sliderBackground.classList.add('hidden');
    image.src = URL.createObjectURL(file);
    smallPhotoes.forEach((photo) => {
      photo.style.backgroundImage = `url(${image.src})`;
    });
  }
}

pristine.addValidator(hashTagField, validateTags, ERROR_TEXT);
pristine.addValidator(commentField, validateCommentField, ERROR_TEXT);

const setUserFormSubmit = function (onSuccess) {
  form.addEventListener('submit', (evt) => {
    evt.preventDefault();
    if (pristine.validate(hashTagField) && pristine.validate(commentField)) {
      blockSubmitButton();
      sendData(new FormData(evt.target))
        .then(showSuccessModal)
        .then(onSuccess)
        .catch(() => {
          showErrorModal();
        })
        .finally(unBlockSubmitButton);
    }
  });
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

export { openImageForm, setUserFormSubmit, closeImageOverlay, createSuccessModal, createErrorModal };

