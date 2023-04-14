import { addsPicturesTemplates } from './random-user-pictures.js';
import { opensBigPictureModal } from './big-picture-modal-open.js';
import { closeBigPicture, closeBigPictureByKey } from './big-picure-modal-close.js';
import { openImageForm, setUserFormSubmit, closeImageOverlay, createSuccessModal, createErrorModal } from './form.js';
import { onEffectsChange } from './slider.js';
import { getData } from './api.js';
import { showAlert } from './util.js';
import { showFilter, showDefaultPhotoes} from './photoes-filter.js';


closeBigPicture();
closeBigPictureByKey();
openImageForm();
onEffectsChange();
setUserFormSubmit(closeImageOverlay);
createSuccessModal();
createErrorModal();

getData()
  .then((photoes) => {
    addsPicturesTemplates(photoes, showDefaultPhotoes);
    showFilter(photoes);
    opensBigPictureModal(photoes);
  })
  .catch((err) => {
    showAlert(err.message);
  });

