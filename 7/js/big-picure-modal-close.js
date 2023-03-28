import { bigPictureModal, body, onLoadMoreClick, commentLoader } from './big-picture-modal-open.js';
import { isEscapeKey } from './util.js';

const bigPictureCloseButton = bigPictureModal.querySelector('.big-picture__cancel');
const onClose = () => {
  bigPictureModal.classList.add('hidden');
  body.classList.remove('modal-open');
  commentLoader.removeEventListener('click', onLoadMoreClick);
};

function closeBigPicture() {
  bigPictureCloseButton.addEventListener('click', onClose);
}

bigPictureCloseButton.removeEventListener('click', onClose);

function closeBigPictureByKey() {
  document.addEventListener('keydown', (evt) => {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      bigPictureModal.classList.add('hidden');
      body.classList.remove('modal-open');
    }
  });
}

export { closeBigPicture, closeBigPictureByKey };

