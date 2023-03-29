import { addsPicturesTemplates } from './random-user-pictures.js';
import { opensBigPictureModal } from './big-picture-modal-open.js';
import { closeBigPicture, closeBigPictureByKey } from './big-picure-modal-close.js';
import { uploadButton, closeButton } from './form.js';


addsPicturesTemplates();
opensBigPictureModal();
closeBigPicture();
closeBigPictureByKey();

// const bigPictureContainer = document.querySelector('.big-picture');

// const smallPicture = document.querySelector('.picture__img');
// smallPicture.addEventListener('click', () => {
//   bigPictureContainer.classList.remove('hidden');
// });


