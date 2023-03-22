import { pictureObjects } from './random-user-pictures.js';
import { COMMENT_PER_PORTION } from './setup.js';
import { createListItem } from './util.js';


// TO DO:
// 1. add eveneListener to commentLoader button
// 2. add functionality to count comments quantity
// 3. remove event listeners
// 4.


const picturePreview = document.querySelector('.big-picture__preview');
const body = document.querySelector('body');

const bigPictureModal = picturePreview.parentElement;
const bigPictureImg = picturePreview.children[0].children[0];
const socialCaption = bigPictureModal.querySelector('.social__caption');
const likesCount = bigPictureModal.querySelector('.likes-count');
const commentsCount = bigPictureModal.querySelector('.comments-count');
const socialCommentList = bigPictureModal.querySelector('.social__comments');
const socialCommentsCount = bigPictureModal.querySelector('.social__comment-count');
const picturesContainer = document.querySelector('.pictures');
const commentLoader = document.querySelector('.comments-loader');
const result = [];

function opensBigPictureModal() {
  picturesContainer.addEventListener('click', (evt) => {
    if (evt.target.classList.contains('picture__img')) {
      const pictureObj = pictureObjects.find((item) => item.id === +evt.target.parentNode.dataset.pictureElementId);
      bigPictureImg.src = pictureObj.url;
      socialCaption.textContent = pictureObj.description;
      likesCount.textContent = pictureObj.likes;
      commentsCount.textContent = pictureObj.comments.length;
      socialCommentList.innerHTML = '';
      if (pictureObj.comments.length <= COMMENT_PER_PORTION) {
        commentLoader.classList.add('hidden');
      } else {
        commentLoader.classList.remove('hidden');
      }
      renderComments(pictureObj.comments);
      onCommentLoader(result, pictureObj.comments);

      socialCommentsCount.textContent = countCommentsQuantity(pictureObj.comments.length);
      bigPictureModal.classList.remove('hidden');
      body.classList.add('.modal-open');
    }
  });
}

function countCommentsQuantity (commentsLength, commentsLoaded) {
  if (commentsLength >= COMMENT_PER_PORTION) {
    return `${commentsLoaded} из ${commentsLength} комментариев`;
  }
  return `${commentsLength} из ${commentsLength} комментариев`;
}

// function renderComments(comments) {
//   let result = '';
//   if (comments.length > COMMENT_PER_PORTION) {
//     for (let i = 0; i < commentShown; i++) {
//       result += createListItem(comments[i].avatar, comments[i].name, comments[i].message);
//     }
//   } else {
//     for (let i = 0; i < comments.length; i++) {
//       result += createListItem(comments[i].avatar, comments[i].name, comments[i].message);
//     }
//   }
//   socialCommentList.insertAdjacentHTML('beforeend', result);
//   console.log(socialCommentList, 'zzz');
// }

function renderComments(comments) {

  for (let i = 0; i < comments.length; i++) {
    result.push(createListItem(comments[i].avatar, comments[i].name, comments[i].message));
  }
  if (comments.length <= COMMENT_PER_PORTION) {
    commentLoader.classList.add('hidden');
    for (let i = 0; i < comments.length; i++){
      socialCommentList.insertAdjacentHTML('beforeend', result[i]);
    }
  } else {
    for (let i = 0; i < COMMENT_PER_PORTION; i++){
      socialCommentList.insertAdjacentHTML('beforeend', result[i]);
    }
    console.log(result);
  }
}

function onCommentLoader (listItemArr, comments) {
  let commentsShown = COMMENT_PER_PORTION;
  commentLoader.addEventListener('click', () => {
    socialCommentList.innerHTML = '';
    commentsShown += COMMENT_PER_PORTION;
    if (commentsShown >= comments.length) {
      commentsShown = comments.length;
      commentLoader.classList.add('hidden');
    }
    for (let i = 0; i < commentsShown; i++) {
      socialCommentList.insertAdjacentHTML('beforeend', listItemArr[i]);
    }
  });
  return commentsShown;
}

// function onCommentLoader (comments) {
//   commentLoader.addEventListener('click', () => {
//     commentShown += COMMENT_PER_PORTION;
//     if (commentShown >= comments.length) {
//       commentShown = comments.length;
//       commentLoader.classList.add('hidden');
//     }
//     socialCommentList.innerHTML = '';
//     renderComments(comments);
//     socialCommentsCount.textContent = countCommentsQuantity(comments.length);
//     console.log(socialCommentList.length, 'qqq');
//   });
// }

export { opensBigPictureModal, bigPictureModal, body};
