import { photoesDescription } from './data.js';
function addsPicturesTemplates() {
  const picturesContainer = document.querySelector('.pictures');
  const picturesFragment = document.createDocumentFragment();


  const pictureTemplate = document.querySelector('#picture')
    .content
    .querySelector('.picture');

  const pictures = photoesDescription();

  pictures.forEach((picture) => {
    const pictureElement = pictureTemplate.cloneNode(true);
    const img = pictureElement.querySelector('.picture__img');
    img.src = picture.url;
    const likesQuantity = pictureElement.querySelector('.picture__likes');
    likesQuantity.textContent = picture.likes;
    const commentQuantity = pictureElement.querySelector('.picture__comments');
    commentQuantity.textContent = picture.comments.length;
    picturesFragment.appendChild(pictureElement);
  });

  return picturesContainer.append(picturesFragment);
}

export {addsPicturesTemplates};
