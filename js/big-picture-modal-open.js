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
  result.length = 0;
  picturesContainer.addEventListener('click', (evt) => {
    if (evt.target.classList.contains('picture__img')) {
      const pictureObj = pictureObjects.find((item) => item.id === +evt.target.parentNode.dataset.pictureElementId);
      bigPictureImg.src = pictureObj.url;
      socialCaption.textContent = pictureObj.description;
      likesCount.textContent = pictureObj.likes;
      commentsCount.textContent = pictureObj.comments.length;
      socialCommentList.innerHTML = '';
      if (pictureObj.comments.length <= socialCommentList.children.length) {
        commentLoader.classList.add('hidden');
      } else {
        commentLoader.classList.remove('hidden');
      }
      renderComments(pictureObj.comments);
      // commentLoader.onclick (pictureObj.comments);
      initCommentLoader(pictureObj.comments);
      bigPictureModal.classList.remove('hidden');
      body.classList.add('.modal-open');
      console.log(pictureObj);
    }
  });
}

function countCommentsQuantity (commentsLength) {
  if (commentsLength >= COMMENT_PER_PORTION) {
    return `${socialCommentList.children.length} из ${commentsLength} комментариев`;
  }
  return `${commentsLength} из ${commentsLength} комментариев`;
}

function renderComments(comments) {
  let commentsToLoad = '';
  for (let i = 0; i < comments.length; i++) {
    result.push(createListItem(comments[i].avatar, comments[i].name, comments[i].message));
  }
  if (comments.length <= COMMENT_PER_PORTION) {
    commentLoader.classList.add('hidden');
    for (let i = 0; i < comments.length; i++){
      commentsToLoad += result[i];
    }
  } else {
    for (let i = 0; i < COMMENT_PER_PORTION; i++){
      commentsToLoad += result[i];
    }
  }
  socialCommentList.insertAdjacentHTML('beforeend', commentsToLoad);
  socialCommentsCount.textContent = countCommentsQuantity(comments.length);
}

// function onCommentsLoad(comments) {
//   const loadedComments = comments.slice(socialCommentList.children.length, socialCommentList.children.length + 5)
//     .map(({ avatar, message, name }) => createListItem(avatar, name, message)).reduce((prev, cur) => prev + cur, '');
//     socialCommentList.insertAdjacentHTML('beforeend', loadedComments);
// }

// commentLoader.onclick = function (comments) {
//   console.log(comments);
//   const loadedComments = comments.slice(socialCommentList.children.length, socialCommentList.children.length + 5)
//     .map(({ avatar, message, name }) => createListItem(avatar, name, message)).reduce((prev, cur) => prev + cur, '');
//   socialCommentList.insertAdjacentHTML('beforeend', loadedComments);
// };

// function initCommentLoader (comments) {
//   commentLoader.addEventListener('click', () => {
//     const loadedComments = comments.slice(socialCommentList.children.length, socialCommentList.children.length + 5)
//       .map(({ avatar, message, name }) => createListItem(avatar, name, message)).reduce((prev, cur) => prev + cur, '');
//     socialCommentList.insertAdjacentHTML('beforeend', loadedComments);
//     socialCommentsCount.textContent = countCommentsQuantity(comments.length);
//     if (socialCommentList.children.length >= comments.length) {
//       console.log(socialCommentList.children.length);
//       commentLoader.classList.add('hidden');

//     }
//   });
// }
function initCommentLoader (comments) {
  commentLoader.onclick = () => {
    const loadedComments = comments.slice(socialCommentList.children.length, socialCommentList.children.length + 5)
      .map(({ avatar, message, name }) => createListItem(avatar, name, message)).reduce((prev, cur) => prev + cur, '');
    socialCommentList.insertAdjacentHTML('beforeend', loadedComments);
    socialCommentsCount.textContent = countCommentsQuantity(comments.length);
    if (socialCommentList.children.length >= comments.length) {
      console.log(socialCommentList.children.length);
      commentLoader.classList.add('hidden');

    }
  };
}

// function initCommentLoader (comments) {
//   let commentsShown = socialCommentList.children.length;
//   commentLoader.addEventListener('click', () => {
//     socialCommentList.innerHTML = '';
//     commentsShown += COMMENT_PER_PORTION;
//     if (commentsShown >= comments.length) {
//       commentsShown = comments.length;
//       commentLoader.classList.add('hidden');
//     }
//     for (let i = 0; i < commentsShown; i++) {
//       socialCommentList.insertAdjacentHTML('beforeend', result[i]);
//     }
//     socialCommentsCount.textContent = countCommentsQuantity(comments.length);
//   });
// }

export { opensBigPictureModal, bigPictureModal, body};
