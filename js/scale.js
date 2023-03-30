const minusButton = document.querySelector('.scale__control--smaller');
const plusButton = document.querySelector('.scale__control--bigger');
const imageSizeInput = document.querySelector('.scale__control--value');
const image = document.querySelector('.img-upload__preview').children[0];
const imageSizeStep = 25;
const imageDefaultSize = 100;

let sizeValue = imageDefaultSize;
imageSizeInput.value = `${imageDefaultSize} %`;

const changeImageSize = function () {
  image.style.transform = `scale(${sizeValue / 100})`;
  imageSizeInput.value = `${sizeValue} %`;
};

plusButton.addEventListener('click', () => {
  sizeValue += imageSizeStep;
  if (sizeValue > imageDefaultSize) {
    sizeValue = imageDefaultSize;
  }
  changeImageSize();
});

minusButton.addEventListener('click', () => {
  sizeValue -= imageSizeStep;
  if (sizeValue < imageSizeStep) {
    sizeValue = imageSizeStep;
  }
  changeImageSize();
});

export {image};
