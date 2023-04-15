import { bigPictureModal, body, onLoadMoreClick, commentLoader } from './big-picture-modal-open.js';
import { isEscapeKey } from './util.js';

const bigPictureCloseButton = bigPictureModal.querySelector('.big-picture__cancel');

const closeBigPicture = () => {
  bigPictureModal.classList.add('hidden');
  body.classList.remove('modal-open');
  commentLoader.removeEventListener('click', onLoadMoreClick);
};

function onCloseBigPicture() {
  bigPictureCloseButton.addEventListener('click', closeBigPicture);
}

bigPictureCloseButton.removeEventListener('click', closeBigPicture);

function closeBigPictureByKey() {
  document.addEventListener('keydown', (evt) => {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      bigPictureModal.classList.add('hidden');
      body.classList.remove('modal-open');
    }
  });
}

export { onCloseBigPicture, closeBigPictureByKey };

