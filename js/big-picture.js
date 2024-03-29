import {isEscapeKey} from './util.js';

const bigPicture = document.querySelector('.big-picture');
const bigPictureImage = document.querySelector('.big-picture__img').querySelector('img');
const likesCount = document.querySelector('.likes-count');
const commentsTotalCount = document.querySelector('.social__comment-total-count');
const pictureCaption = document.querySelector('.social__caption');
const bigPictureCancel = document.querySelector('.big-picture__cancel');

// Показать большую фотку
const showBigPicture = (picture) => {
  const {url, description, likes, comments} = picture;

  bigPicture.classList.remove('hidden');
  document.body.classList.add('modal-open');

  bigPictureImage.src = url;
  likesCount.textContent = likes;
  commentsTotalCount.textContent = comments.length;
  pictureCaption.textContent = description;

  // Закрыть большую фотку на ESCAPE
  document.addEventListener('keydown', (evt) => {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      bigPicture.classList.add('hidden');
    }
  });
};

const closeBigPicture = () => {
  bigPicture.classList.add('hidden');
  document.removeEventListener
};


export {showBigPicture};
