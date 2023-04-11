
function addsPicturesTemplates(descriptions, cb) {
  const picturesContainer = document.querySelector('.pictures');
  const picturesFragment = document.createDocumentFragment();


  const pictureTemplate = document.querySelector('#picture')
    .content
    .querySelector('.picture');

  cb(descriptions)
    .forEach(({ url, likes, comments, description, id }) => {
      const pictureElement = pictureTemplate.cloneNode(true);
      pictureElement.querySelector('.picture__img').src = url;
      pictureElement.querySelector('.picture__likes').textContent = likes;
      pictureElement.querySelector('.picture__comments').textContent = comments.length;
      pictureElement.querySelector('.picture__img').alt = description;
      pictureElement.dataset.pictureElementId = id;
      picturesFragment.appendChild(pictureElement);
    });
  picturesContainer.querySelectorAll('.picture').forEach((element) => element.remove());
  return picturesContainer.append(picturesFragment);
}

export {addsPicturesTemplates};
