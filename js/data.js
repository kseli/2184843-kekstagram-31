import {getRandomInteger} from './util.js';
import {getRandomArrayElement} from './util.js';

const COUNT = 25;

const DESCRIPTIONS = [
  'Волшебный закат на фоне горизонта',
  'Цветущие сакуры в парке',
  'Загадочный туман над озером',
  'Сияющие звезды на ночном небе',
  'Пышные цветы в ярком солнечном свете',
  'Мистический лес с облаками над головой',
  'Расцветающее поле под лучами заката',
  'Морской бриз и песчаные дюны',
  'Абстрактное искусство в городском пейзаже',
  'Игра света и тени на старом здании'
];

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const NAMES = [
  'Антон',
  'Мария',
  'Игорь',
  'Екатерина',
  'Дмитрий',
  'Александра',
  'Сергей',
  'Ольга',
  'Никита',
  'Елена',
];

const Likes = {
  MIN: 15,
  MAX: 200,
};

const Comments = {
  MIN : 0,
  MAX: 30,
};

const Avatar = {
  MIN: 1,
  MAX: 6,
};

// Comments

const addComment = (id) => ({
  id: id,
  avatar: `img/avatar-${getRandomInteger(Avatar.MIN, Avatar.MAX)}.svg`,
  message: getRandomArrayElement(MESSAGES),
  name: getRandomArrayElement(NAMES),
});

const addComments = () => {
  const comments = [];

  for (let i = 1; i <= getRandomInteger(Comments.MIN, Comments.MAX); i++) {
    comments.push(addComment(i));
  }

  return comments;
};

// Photos

const photos = [];

const addPhoto = (id) => ({
  id: id,
  url: `photos/${id}.jpg`,
  description: getRandomArrayElement(DESCRIPTIONS),
  likes: getRandomInteger(Likes.MIN, Likes.MAX),
  comments: addComments(),
});

const addPhotos = () => {
  for (let i = 1; i <= COUNT; i++) {
    photos.push(addPhoto(i));
  }
};

export {addPhotos};
