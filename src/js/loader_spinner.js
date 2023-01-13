import logo_white from '../images/logo_white.png';

const loader = `<div class="loader"><img
  class="loader__img"
  src="${logo_white}"
  alt="logo loader spinner"
/>
</div>`;
const gallery = document.querySelector('.film-cards');
import { paginationPlace } from './movie_search';

{
  /* <svg class="loader__icon" width="38" height="38">
  <path d="M16 11h-8v-8h8zM8 13h8v8h-8zM6 6h-3v-1.82c0-0.326 0.131-0.62 0.346-0.834s0.508-0.346 0.834-0.346h1.82zM3 8h3v3h-3zM6 16h-3v-3h3zM3 18h3v3h-1.82c-0.326 0-0.62-0.131-0.834-0.346s-0.346-0.508-0.346-0.834zM21 16h-3v-3h3zM18 18h3v1.82c0 0.326-0.131 0.62-0.346 0.834s-0.508 0.346-0.834 0.346h-1.82zM21 6h-3v-3h1.82c0.326 0 0.62 0.131 0.834 0.346s0.346 0.508 0.346 0.834zM23 7v-2.82c0-0.878-0.357-1.674-0.931-2.249s-1.371-0.931-2.249-0.931h-15.64c-0.878 0-1.674 0.357-2.249 0.931s-0.931 1.371-0.931 2.249v15.64c0 0.878 0.357 1.674 0.931 2.249s1.371 0.931 2.249 0.931h15.64c0.878 0 1.674-0.357 2.249-0.931s0.931-1.371 0.931-2.249zM18 8h3v3h-3z"></path>
</svg>; */
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
