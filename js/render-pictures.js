import {showBigPicture} from './big-picture.js';

// Находим список куда вставлять фотки
const pictures = document.querySelector('.pictures');

// Шаблон одной фотки
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');

// Создает пустой фрагмент(контейнер)
const fragment = document.createDocumentFragment();

// Создает одну фотку
const renderPicture = (picture) => {
  const {url, description, likes, comments} = picture;
  const pictureElement = pictureTemplate.cloneNode(true);

  pictureElement.querySelector('.picture__img').src = url;
  pictureElement.querySelector('.picture__img').alt = description;
  pictureElement.querySelector('.picture__comments').textContent = comments.length;
  pictureElement.querySelector('.picture__likes').textContent = likes;

  // Показать большую фотку
  const onPictureElementClick = (evt) => {
    evt.preventDefault();
    showBigPicture(picture); // from './big-picture.js'
  };

  // Навесить обработчик на картинку
  pictureElement.addEventListener('click', onPictureElementClick);

  return pictureElement;
};

// Создает несколько фоток
const renderPictures = (objects) => {
  objects.forEach((item) => {
    fragment.appendChild(renderPicture(item)); //Добавляет фотку во фрагмент(контейнер)
  });

  pictures.appendChild(fragment);
};

export {renderPictures};
