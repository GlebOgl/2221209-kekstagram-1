import { createPhotoObjects } from './data.js';
import {openBigPicture} from './bigPicture.js';
import {renderUploadForm} from './form.js';

const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
const pictures = document.querySelector('.pictures');
const picturesFragment = document.createDocumentFragment();

function renderPicture({ url, likes, comments, description }) {
  const pictureElement = pictureTemplate.cloneNode(true);
  pictureElement.querySelector('img').src = url;
  pictureElement.querySelector('.picture__likes').textContent = likes;
  pictureElement.querySelector('.picture__comments').textContent = comments.length;

  pictureElement.addEventListener('click', (evt) => {
    evt.preventDefault();
    openBigPicture({ url, likes, comments, description });
  });

  return pictureElement;
}

const generatedPictures = createPhotoObjects();
generatedPictures.forEach((picture) => {
  const renderedPicture = renderPicture(picture);
  picturesFragment.appendChild(renderedPicture);
});

pictures.appendChild(picturesFragment);
renderUploadForm();
