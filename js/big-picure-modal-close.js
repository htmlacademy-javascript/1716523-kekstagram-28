import { bigPictureModal } from './big-picture-modal-open.js';

const bigPictureCloseButton = bigPictureModal.querySelector('.big-picture__cancel');

function closeBigPicture () {
  bigPictureCloseButton.addEventListener('click', () => {
    bigPictureModal.classList.add('hidden');
  });
}

export {closeBigPicture};

