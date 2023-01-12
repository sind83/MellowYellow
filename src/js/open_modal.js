import { renderModalMovie } from './cards_rendering';
import { displayModalLoader } from './loader_spinner';
import { API_KEY, GENRE_URL, API_URL } from './main_fetch.js';

const MOVIE_URL = `https://api.themoviedb.org/3/movie/`;
const refs = {
  body: document.querySelector('body'),
  backdropModal: document.querySelector('.backdrop'),
  modal: document.querySelector('.modal-content'),
};

refs.body.addEventListener('click', openModal);
export const oneMovieFetch = async movieId => {
  const response = await fetch(`${MOVIE_URL}${movieId}?api_key=${API_KEY}`);
  const movie = await response.json();
  return movie;
};
function openModal(e) {
  if (e.target.classList.contains('backdrop')) {
    closeModal();
  }
  if (e.target?.closest('svg')?.classList.contains('modal-close')) {
    closeModal();
  }
  const id = e.target.getAttribute('data-movieId');
  if (e.target.closest('div').classList.contains('movie-card')) {
    refs.backdropModal.classList.remove('is-hidden');

    document.addEventListener('keydown', checkModalKey);
    displayModalLoader();
    oneMovieFetch(id).then(elem => {
      setTimeout(() => {
        renderModalMovie(elem);
      }, 2000);
    });
  }
}

function closeModal() {
  refs.body.style.overflowY = 'scroll';
  refs.backdropModal.classList.add('is-hidden');
  document.removeEventListener('keydown', checkModalKey);

  refs.modal.innerHTML = '';
}

function checkModalKey(e) {
  console.log(e.code);
  if (e.code === 'Escape') {
    closeModal();
  }
}
