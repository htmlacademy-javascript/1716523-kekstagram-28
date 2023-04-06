import { photoesDescription } from './data.js';

const pictureObjects = photoesDescription();

function addsPicturesTemplates() {
  const picturesContainer = document.querySelector('.pictures');
  const picturesFragment = document.createDocumentFragment();


  const pictureTemplate = document.querySelector('#picture')
    .content
    .querySelector('.picture');

  pictureObjects.forEach(({url, likes, comments, description, id}) => {
    const pictureElement = pictureTemplate.cloneNode(true);
    pictureElement.querySelector('.picture__img').src = url;
    pictureElement.querySelector('.picture__likes').textContent = likes;
    pictureElement.querySelector('.picture__comments').textContent = comments.length;
    pictureElement.querySelector('.picture__img').alt = description;
    pictureElement.dataset.pictureElementId = id;
    picturesFragment.appendChild(pictureElement);
  });

  return picturesContainer.append(picturesFragment);
}

export {addsPicturesTemplates, pictureObjects};
