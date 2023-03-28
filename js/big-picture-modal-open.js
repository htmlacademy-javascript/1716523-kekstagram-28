import { pictureObjects } from './random-user-pictures.js';
import { COMMENT_PER_PORTION } from './setup.js';
import { createListItem } from './util.js';

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
const listItems = [];

let comments = [];

function opensBigPictureModal() {
  listItems.length = 0; // TODO rename result
  picturesContainer.addEventListener('click', (evt) => {
    if (evt.target.classList.contains('picture__img')) {
      const pictures = pictureObjects.find((item) => item.id === +evt.target.parentNode.dataset.pictureElementId); // TODO rename
      bigPictureImg.src = pictures.url;
      socialCaption.textContent = pictures.description;
      likesCount.textContent = pictures.likes;
      commentsCount.textContent = pictures.comments.length;
      socialCommentList.innerHTML = '';
      if (pictures.comments.length <= socialCommentList.children.length) {
        commentLoader.classList.add('hidden');
      } else {
        commentLoader.classList.remove('hidden');
      }

      comments = pictures.comments;
      renderComments();
      initCommentLoader();
      bigPictureModal.classList.remove('hidden');
      body.classList.add('.modal-open');
    }
  });
}

function getCommentsQuantity (commentsLength) {
  if (commentsLength >= COMMENT_PER_PORTION) {
    return `${socialCommentList.children.length} из ${commentsLength} комментариев`;
  }
  return `${commentsLength} из ${commentsLength} комментариев`;
}

function renderComments() {
  let commentsToLoad = '';
  for (let i = 0; i < comments.length; i++) {
    listItems.push(createListItem(comments[i].avatar, comments[i].name, comments[i].message));
  }
  if (comments.length <= COMMENT_PER_PORTION) {
    commentLoader.classList.add('hidden');
    for (let i = 0; i < comments.length; i++){
      commentsToLoad += listItems[i];
    }
  } else {
    for (let i = 0; i < COMMENT_PER_PORTION; i++){
      commentsToLoad += listItems[i];
    }
  }
  socialCommentList.insertAdjacentHTML('beforeend', commentsToLoad);
  socialCommentsCount.textContent = getCommentsQuantity(comments.length);
}

function onLoadMoreClick(){
  const loadedComments = comments.slice(socialCommentList.children.length, socialCommentList.children.length + 5)
    .map(({ avatar, message, name }) => createListItem(avatar, name, message)).reduce((prev, cur) => prev + cur, '');
  socialCommentList.insertAdjacentHTML('beforeend', loadedComments);
  socialCommentsCount.textContent = getCommentsQuantity(comments.length);
  if (socialCommentList.children.length >= comments.length) {
    commentLoader.classList.add('hidden');
  }
}

function initCommentLoader () {
  commentLoader.addEventListener('click', onLoadMoreClick);
}

export { opensBigPictureModal, bigPictureModal, body, onLoadMoreClick, commentLoader};
