import { pictureObjects } from './random-user-pictures.js';
import { COMMENT_PER_PORTION } from './setup.js';


// TO DO:
// 1. add eveneListener to commentLoader button
// 2. add functionality to count comments quantity
// 3. remove event listeners
// 4.


const picturePreview = document.querySelector('.big-picture__preview');
const body = document.querySelector('body');

const bigPictureModal = picturePreview.parentElement;
console.log(document.querySelector('.big-picture__preview'));
const bigPictureImg = picturePreview.children[0].children[0];
const socialCaption = bigPictureModal.querySelector('.social__caption');
const likesCount = bigPictureModal.querySelector('.likes-count');
const commentsCount = bigPictureModal.querySelector('.comments-count');
const socialCommentList = bigPictureModal.querySelector('.social__comments');
const socialCommentsCount = bigPictureModal.querySelector('.social__comment-count');
const picturesContainer = document.querySelector('.pictures');
const commentLoader = document.querySelector('.comments-loader');

function opensBigPictureModal() {
  picturesContainer.addEventListener('click', (evt) => {
    if (evt.target.classList.contains('picture__img')) {
      const pictureObj = pictureObjects.find((item) => item.id === +evt.target.parentNode.dataset.pictureElementId);
      bigPictureImg.src = pictureObj.url;
      socialCaption.textContent = pictureObj.description;
      likesCount.textContent = pictureObj.likes;
      commentsCount.textContent = pictureObj.comments.length;
      socialCommentList.innerHTML = '';
      insertCommentsList(pictureObj.comments);
      if (pictureObj.comments.length <= COMMENT_PER_PORTION) {
        commentLoader.classList.add('hidden');
      } else {
        commentLoader.classList.remove('hidden');
      }
      socialCommentsCount.textContent = countCommentsQuantity(pictureObj.comments.length);
      bigPictureModal.classList.remove('hidden');
      body.classList.add('.modal-open');
    }
  });
}

function createListItem(avatar, name, message) {
  return `<li class="social__comment">
      <img
          class="social__picture"
          src="${avatar}"
          alt="${name}"
          width="35" height="35">
      <p class="social__text">${message}</p>
  </li>`;
}

function countCommentsQuantity (commentsLength) {
  if (commentsLength >= COMMENT_PER_PORTION) {
    return `${COMMENT_PER_PORTION} из ${commentsLength} комментариев`;
  }
  return `${commentsLength} из ${commentsLength} комментариев`;
}

function insertCommentsList(comments) {

  if (comments.length > 5) {
    let result = '';
    for (let i = 0; i < COMMENT_PER_PORTION; i++) {
      result += createListItem(comments[i].avatar, comments[i].name, comments[i].message);
    }
    socialCommentList.insertAdjacentHTML('beforeend', result);
    // socialCommentsCount.textContent = `${commentShown} из ${comments.length} комментариев`;
    // commentLoader.addEventListener('click', () => {
    //   socialCommentList.innerHTML = '';
    //   commentShown += COMMENT_PER_PORTION;
    //   if (commentShown >= comments.length) {
    //     commentShown = comments.length;
    //     commentLoader.classList.add('hidden');
    //   }
    //   console.log(commentShown, 'qqqqq');
    //   for (let i = 0; i < commentShown; i++) {
    //     const socialCommentListItem = `<li class="social__comment">
    //     <img
    //         class="social__picture"
    //         src="${comments[i].avatar}"
    //         alt="${comments[i].name}"
    //         width="35" height="35">
    //     <p class="social__text">${comments[i].message}</p>
    // </li>`;
    //     socialCommentList.insertAdjacentHTML('beforeend', socialCommentListItem);
    //   }
    //   socialCommentsCount.textContent = `${commentShown} из ${comments.length} комментариев`;
    // });
  } else {
    let result = '';
    for (let i = 0; i < comments.length; i++) {
      result += createListItem(comments[i].avatar, comments[i].name, comments[i].message);
    }
    socialCommentList.insertAdjacentHTML('beforeend', result);
  }
}

// function insertCommentsList(comments) {

//   if (comments.length > 5) {
//     commentLoader.addEventListener('click', () => {
//       socialCommentList.innerHTML = '';
//       commentShown += COMMENT_PER_PORTION;
//       console.log(commentShown, 'qqqqq');
//       for (let i = 0; i < commentShown; i++) {
//         const socialCommentListItem = `<li class="social__comment">
//         <img
//             class="social__picture"
//             src="${comments[i].avatar}"
//             alt="${comments[i].name}"
//             width="35" height="35">
//         <p class="social__text">${comments[i].message}</p>
//     </li>`;
//         socialCommentList.insertAdjacentHTML('beforeend', socialCommentListItem);
//       }
//     });
//   }

//   console.log(comments);
//   console.log(commentShown, 'zzzzz');
// }

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

export { opensBigPictureModal, bigPictureModal, body };
