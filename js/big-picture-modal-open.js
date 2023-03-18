import {pictureObjects} from './random-user-pictures.js';

console.log(pictureObjects);

const bigPictureModal = document.querySelector('.big-picture');

function opensBigPictureModal() {
  const bigPictureOpenElements = document.querySelectorAll('.picture__img');
  bigPictureOpenElements.forEach((picture) => {
    picture.addEventListener('click', ()=> {
      const bigPictureImg = bigPictureModal.querySelector('img');
      bigPictureImg.src = picture.src;
      bigPictureModal.classList.remove('hidden');
      const socialCaption = bigPictureModal.querySelector('.social__caption');
      socialCaption.textContent = picture.alt;
      console.log(picture.closest('[data-picture-element-id]').dataset.pictureElementId);
      const pictureObj = pictureObjects.find((item) => item.id == picture.closest('[data-picture-element-id]').dataset.pictureElementId);
      console.log(pictureObj);
      const likesCount = bigPictureModal.querySelector('.likes-count');
      likesCount.textContent = pictureObj.likes;
      const commentsCount = bigPictureModal.querySelector('.comments-count');
      if (pictureObj.comments.length < 5) {
        bigPictureModal.querySelector('.social__comment-count').textContent = `${pictureObj.comments.length} из ${pictureObj.comments.length} комментариев`;
      }
      commentsCount.textContent = pictureObj.comments.length;
      const socialCommentList = bigPictureModal.querySelector('.social__comments');
      socialCommentList.innerHTML = '';
      for (let i = 0; i < pictureObj.comments.length; i++) {
        const socialCommentListItem = `<li class="social__comment">
        <img
            class="social__picture"
            src="${pictureObj.comments[i].avatar}"
            alt="${pictureObj.comments[i].name}"
            width="35" height="35">
        <p class="social__text">${pictureObj.comments[i].message}</p>
    </li>`;
        socialCommentList.insertAdjacentHTML('beforeend', socialCommentListItem);
      }

    });
    // picture.addEventListener('keydown', (evt) => {
    //   if (evt.key === 'Enter') {
    //     evt.preventDefault();
    //     const bigPictureImg = bigPictureModal.querySelector('img');
    //     bigPictureImg.src = picture.src;
    //     bigPictureModal.classList.remove('hidden');
    //   }
    // });
  });
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

export {opensBigPictureModal, bigPictureModal};
