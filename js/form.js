const uploadButton = document.querySelector('#upload-file');
const imageOverlay = document.querySelector('.img-upload__overlay');
const closeButton = document.querySelector('#upload-cancel');

uploadButton.oninput = function () {
  imageOverlay.classList.remove('hidden');
};

closeButton.onclick = function () {
  imageOverlay.classList.add('hidden');
};

export {uploadButton, closeButton};
