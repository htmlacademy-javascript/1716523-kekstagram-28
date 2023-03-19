import { pictureObjects } from './random-user-pictures.js';

const picturePreview = document.querySelector('.big-picture__preview');

const bigPictureModal = picturePreview.parentElement;
console.log(document.querySelector('.big-picture__preview'));
const bigPictureImg = picturePreview.children[0].children[0];
const socialCaption = bigPictureModal.querySelector('.social__caption');
const likesCount = bigPictureModal.querySelector('.likes-count');
const commentsCount = bigPictureModal.querySelector('.comments-count');
const socialCommentList = bigPictureModal.querySelector('.social__comments');
const socialCommentsCount = bigPictureModal.querySelector('.social__comment-count');
const picturesContainer = document.querySelector('.pictures');

function opensBigPictureModal() {
  picturesContainer.addEventListener('click', (evt) => {
    if (evt.target.classList.contains('picture__img')) {
      const pictureObj = pictureObjects.find((item) => item.id === +evt.target.parentNode.dataset.pictureElementId);
      bigPictureImg.src = pictureObj.url;
      socialCaption.textContent = pictureObj.description;
      likesCount.textContent = pictureObj.likes;
      if (pictureObj.comments.length < 5) {
        socialCommentsCount.textContent = `${pictureObj.comments.length} из ${pictureObj.comments.length} комментариев`;
      }
      commentsCount.textContent = pictureObj.comments.length;
      socialCommentList.innerHTML = '';
      insertCommentsList(pictureObj.comments);
      bigPictureModal.classList.remove('hidden');
    }
  });
}


// function opensBigPictureModal() {
//   const bigPictureOpenElements = document.querySelectorAll('.picture__img');
//   bigPictureOpenElements.forEach((picture) => {
//     picture.addEventListener('click', () => {
//       bigPictureImg.src = picture.src;
//       bigPictureModal.classList.remove('hidden');
//       socialCaption.textContent = picture.alt;
//       const pictureObj = pictureObjects.find((item) => item.id === +picture.closest('[data-picture-element-id]').dataset.pictureElementId);
//       likesCount.textContent = pictureObj.likes;
//       if (pictureObj.comments.length < 5) {
//         bigPictureModal.querySelector('.social__comment-count').textContent = `${pictureObj.comments.length} из ${pictureObj.comments.length} комментариев`;
//       }
//       commentsCount.textContent = pictureObj.comments.length;
//       socialCommentList.innerHTML = '';
//       insertCommentsList(pictureObj.comments);
//     });
// picture.addEventListener('keydown', (evt) => {
//   if (evt.key === 'Enter') {
//     evt.preventDefault();
//     const bigPictureImg = bigPictureModal.querySelector('img');
//     bigPictureImg.src = picture.src;
//     bigPictureModal.classList.remove('hidden');
//   }
// });
//   });
// }

function insertCommentsList(comments) {
  for (let i = 0; i < comments.length; i++) {
    const socialCommentListItem = `<li class="social__comment">
    <img
        class="social__picture"
        src="${comments[i].avatar}"
        alt="${comments[i].name}"
        width="35" height="35">
    <p class="social__text">${comments[i].message}</p>
</li>`;
    socialCommentList.insertAdjacentHTML('beforeend', socialCommentListItem);
  }
}

// function opensBigPictureByKey() {
//   const bigPictureOpenElements = document.querySelectorAll('.picture__img');
//   bigPictureOpenElements.forEach((picture) => {
//     picture.addEventListener('keydown', (evt) => {
//       if (evt.key === 'Enter') {
//         evt.preventDefault();
//         const bigPictureImg = bigPictureModal.querySelector('img');
//         bigPictureImg.src = picture.src;
//         bigPictureModal.classList.remove('hidden');
//       }
//     });
//   });
// }

export { opensBigPictureModal, bigPictureModal };
