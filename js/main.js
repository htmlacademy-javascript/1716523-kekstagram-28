// Функция, которая создаёт массив из объектов (25шт)
// Объект массива - это описание фотографии.
// Структура объекта:
// {
//   id: 1-25,
//   url: photos/1-25.jpg,
//   description: someDescription,
//   likes: 15-200,
//   comment: [{
//     id: randomNumber,
//     avatar:img/avatar-{{случайное число от 1 до 6}}.svg,
//     message: 'string',
//     name: 'Артем',
//   }, {}, {}]
// }

const photoDescriptions = [
  'я на отдыхе',
  'я на работе',
  'моё вдохновение',
  'то что я хочу',
  'моя цель'
];

const messagesArr = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра.',
  'В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const names = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон',
];

const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

function createPhotoObj() {
  const id = getRandomInteger(0, 25);
  return {
    id,
    url: `photos/${id}.jpg`,
    description: photoDescriptions[getRandomInteger(0, photoDescriptions.length - 1)],
    likes: getRandomInteger(15, 200),
    comment: [{
      id: getRandomInteger(1, 1000),
      avatar: `img/avatar-${getRandomInteger(0, 6)}.svg`,
      message: messagesArr[getRandomInteger(0, messagesArr.length - 1)],
      name: names[getRandomInteger(0, names.length - 1)],
    }]
  };
}

const photoObjArr = Array.from({length: 25}, createPhotoObj);


