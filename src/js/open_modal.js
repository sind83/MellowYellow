import { renderModalMovie } from './cards_rendering';
import {
  pagination,
  page,
  popularMovies,
  clearFocus,
  selectBtn,
  timeInt,
} from './pagination';
import { API_KEY, GENRE_URL, API_URL } from './main_fetch.js';
const gallery = document.querySelector('.film-cards');

const MOVIE_URL = `https://api.themoviedb.org/3/movie/`;
const refs = {
  body: document.querySelector('body'),
  backdropModal: document.querySelector('.backdrop'),
  modal: document.querySelector('.modal-content'),
};

refs.body.addEventListener('click', openModal);
export const oneMovieFetch = async movieId => {
  const movie = await (
    await fetch(`${MOVIE_URL}${movieId}?api_key=${API_KEY}`)
  ).json();
  return movie;
};
function openModal(e) {
  if (e.target.classList.contains('backdrop')) {
    closeModal();
  }
  if (e.target?.closest('svg')?.classList.contains('modal-close')) {
    closeModal();
  }
  // const card = document.querySelector('.movie-card');
  // const cardId = document.querySelector('div[data-movieId="id"]');
  // console.log('idik2', card.dataset.movieId);
  // let id = e.target.closest('cardId').dataset.movieId;
  // console.log('idik', id);

  if (e.target.closest('div').classList.contains('movie-card')) {
    refs.backdropModal.classList.remove('is-hidden');

    document.addEventListener('keydown', checkModalKey);
    oneMovieFetch(550).then(elem => {
      renderModalMovie(elem);
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
