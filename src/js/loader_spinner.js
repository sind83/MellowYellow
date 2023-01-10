const loader = `<div class="loader">
<img class="loader__img" src="./images/logo_white.png" alt="logo loader spinner"/>
</div>`;
const gallery = document.querySelector('.film-cards');
import { paginationPlace } from './movie_search';

export const displayGalleryLoader = () => {
  gallery.classList.add('film-cards--loader');
  paginationPlace.style.display = 'none';
  gallery.innerHTML = loader;
};

export const hideGalleryLoader = () => {
  gallery.classList.remove('film-cards--loader');
  paginationPlace.style.display = 'flex';
};

const modalContent = document.querySelector('.modal-content');

export const displayModalLoader = () => {
  modalContent.classList.add('modal-content--loader');
  modalContent.innerHTML = loader;
};

export const hideModalLoader = () => {
  modalContent.classList.remove('modal-content--loader');
};
