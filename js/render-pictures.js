const pictures = document.querySelector('.pictures');

const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');

const fragment = document.createDocumentFragment();

const renderPicture = (picture) => {
  const {url, description, likes, comments} = picture;
  const pictureElement = pictureTemplate.cloneNode(true);

  pictureElement.querySelector('.picture__img').src = url;
  pictureElement.querySelector('.picture__img').alt = description;
  pictureElement.querySelector('.picture__comments').textContent = comments.length;
  pictureElement.querySelector('.picture__likes').textContent = likes;

  return pictureElement;
};

const renderPictures = (objects) => {
  objects.forEach((item) => {
    fragment.appendChild(renderPicture(item));
  });

  pictures.appendChild(fragment);
};

export {renderPictures};
