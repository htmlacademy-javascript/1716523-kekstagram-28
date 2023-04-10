// import {getRandomInteger, photoId, commentId} from './util.js';
// import {NAMES, MESSAGES_ARR, PHOTO_DESCRIPTIONS, MAX_AVATAR_NUMBER, MIN_AVATAR_NUMBER, MAX_LIKES_COUNT, MIN_LIKES_COUNT, PHOTO_ID_COUNT} from './setup.js';

// function createCommentsDescription() {
//   return{
//     id: commentId(),
//     avatar: `img/avatar-${getRandomInteger(MIN_AVATAR_NUMBER, MAX_AVATAR_NUMBER)}.svg`,
//     message: MESSAGES_ARR[getRandomInteger(0, MESSAGES_ARR.length - 1)],
//     name: NAMES[getRandomInteger(0, NAMES.length - 1)],
//   };
// }

// function createPhotoesDescription() {
//   const id = photoId();
//   return {
//     id,
//     url: `photos/${id}.jpg`,
//     description: PHOTO_DESCRIPTIONS[getRandomInteger(0, PHOTO_DESCRIPTIONS.length - 1)],
//     likes: getRandomInteger(MIN_LIKES_COUNT, MAX_LIKES_COUNT),
//     comments: Array.from({length: getRandomInteger(1, 20)}, createCommentsDescription),
//   };
// }
