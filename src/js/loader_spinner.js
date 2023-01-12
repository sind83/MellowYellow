const loader = `<div class="loader"><svg class="loader__icon" width="38" height="38">
              <use href="./images/icons_optimalised.svg#icon-film"></use>
            </svg>
</div>`;
const gallery = document.querySelector('.film-cards');
import { paginationPlace } from './movie_search';

{
  /* <img
  class="loader__img"
  src="./images/logo_white.png"
  alt="logo loader spinner"
/>; */
}

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
