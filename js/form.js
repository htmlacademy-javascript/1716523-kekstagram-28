import { body } from './big-picture-modal-open.js';
import { isEscapeKey } from './util.js';

const uploadButton = document.querySelector('#upload-file');
const imageOverlay = document.querySelector('.img-upload__overlay');
const closeButton = document.querySelector('#upload-cancel');
const commentField = document.querySelector('.text__description');
const hashTagField = document.querySelector('text__hashtags');

const showImageOverlay = function () {
  imageOverlay.classList.remove('hidden');
  body.classList.add('modal-open');
  document.addEventListener('keydown', (evt) => {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      imageOverlay.classList.add('hidden');
      body.classList.remove('modal-open');
    }
  });
};

const closeImageOverlay = function () {
  imageOverlay.classList.add('hidden');
  body.classList.remove('modal-open');
  // uploadButton.removeEventListener('change', showImageOverlay);
  // form.reset();
  // resetScale();
  // resetEffects();
  // pristine.reset();
};

// function stopEvtPropagation (field1) {
//   field1.addEventListener('keydown', (evt) => {
//     if (isEscapeKey(evt)) {
//       evt.stopPropagation();
//     }
//   });
// }

// stopEvtPropagation(hashTagField);

commentField.addEventListener('keydown', (evt) => {
  if (isEscapeKey(evt)) {
    evt.stopPropagation();
  }
});

// hashTagField.addEventListener('keydown', (evt) => {
//   if (isEscapeKey(evt)) {
//     evt.stopPropagation();
//   }
// });

closeButton.addEventListener('click', closeImageOverlay);
uploadButton.addEventListener('change', showImageOverlay);

export {uploadButton, closeButton};

