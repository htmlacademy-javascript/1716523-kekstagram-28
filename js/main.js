import { addsPicturesTemplates } from './random-user-pictures.js';
import { opensBigPictureModal } from './big-picture-modal-open.js';
import { closeBigPicture, closeBigPictureByKey } from './big-picure-modal-close.js';
import { openImageForm, setUserFormSubmit, closeImageOverlay } from './form.js';
import { onEffectsChange } from './slider.js';
import { getData } from './api.js';

closeBigPicture();
closeBigPictureByKey();
openImageForm();
onEffectsChange();
setUserFormSubmit(closeImageOverlay);

getData()
  .then((photoes) => {
    addsPicturesTemplates(photoes);
    opensBigPictureModal(photoes);
  });

