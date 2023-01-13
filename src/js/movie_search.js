import Notiflix, { Notify } from 'notiflix';

const debounce = require('lodash.debounce');
import { renderMovies, renderModalMovie } from './cards_rendering.js';
import { pagination, clearFocus, selectBtn, loadMainPage } from './pagination';

import { API_KEY, GENRE_URL, API_URL } from './main_fetch.js';
import { displayGalleryLoader, hideGalleryLoader } from './loader_spinner.js';

const SEARCH_URL = `https://api.themoviedb.org/3/search/movie?api_key=`;

const form = document.querySelector('.search-form');
export const input = document.querySelector('.search-form__input');
export const gallery = document.querySelector('.film-cards');
export const paginationPlace = document.querySelector(
  '.film-cards__pagination'
);
export let searchValue;
export let searchBtnClicked = false;

export const searchFetch = async (searchValue, searchPage = 1) => {
  const responseMovies = await fetch(
    `${SEARCH_URL}${API_KEY}&query=${searchValue}&page=${searchPage}`
  );
  const responseGenres = await fetch(`${GENRE_URL}${API_KEY}`);
  const movies = await responseMovies.json();
  const genreIds = await responseGenres.json();
  return { movies, genreIds };
};

const emptySearch = 'Enter any character!';
const failedSearch =
  'Search result not successful. Enter the correct movie name or keywords and try again!';
const warningMarkup = message => {
  const warning = document.createElement('p');
  if (warning.classList.contains('warning')) {
    warning.classList.remove('warning');
    warning.textContent = '';
  }
  warning.classList.add('warning');
  warning.textContent = message;
  form.after(warning);
  return warning;
};

export let searchAllPages = 0;

export let findMovie;

export const searchMovie = (
  searchValue,

  searchPage = 1,
  arrowClicked = false
) => {
  searchFetch(searchValue, searchPage)
    .then(elem => {
      const searchPageNo = elem.movies.page;
      const movies = elem.movies.results;
      const totalPages = elem.movies.total_pages;
      const totalResults = elem.movies.total_results;
      searchAllPages = totalPages;
      const genresIds = elem.genreIds.genres;
      if (searchPage >= totalPages) {
        pagination(totalPages, searchPage, false);
      } else {
        pagination(totalPages, searchPage, true);
      }

      if (totalResults === 0) {
        hideGalleryLoader();
        Notiflix.Notify.failure(
          'Sorry, there are no films matching your search query. Please try again.'
        );
        gallery.innerHTML = `<div class="result-not-found"><span class="result-not-found__title">"${input.value}"</span>
        <p class = "result-not-found__text"> UPS... We don't have this title  ...try something different</p>
        <a class = "result-not-found__link" href = "index.html"> <div class = "result-not-found__button">GO BACK TO HOMEPAGE</div></a></div>`;
      } else {
        displayGalleryLoader();

        setTimeout(() => {
          hideGalleryLoader();
          renderMovies(0, movies, genresIds);

          if (totalResults > 1) {
            if (searchBtnClicked) {
              Notiflix.Notify.success(
                `Great! We found ${totalResults} movies for you! We hope you find what you are looking for!`
              );
            }
          }
        }, 1000);
        clearFocus();
        selectBtn(paginationPlace.children, searchPageNo);
      }
    })
    .catch(error => console.log(error));
};

if (form != null) {

  form.addEventListener('submit', event => {
    event.preventDefault();

    readMovie();
  });
  input.addEventListener(
    'input',
    debounce(() => {
      searchBtnClicked = false;
      if (input.value == '') {
        gallery.innerHTML = `<div class="result-not-found">
        <p class = "result-not-found__text"> UPS... Enter any character to search for some movie</p>
        <a class = "result-not-found__link" href = "index.html"> <div class = "result-not-found__button">GO TO MAIN PAGE</div></a></div>`;
      } else {
        readMovie();
      }
    }, 750)
  );
  if (input.value == '') {
    gallery.innerHTML = `<div class="result-not-found">
        <p class = "result-not-found__text"> UPS... Enter any character to search for some movie</p>
        <a class = "result-not-found__link" href = "index.html"> <div class = "result-not-found__button">GO TO MAIN PAGE</div></a></div>`;
  }
}

const readMovie = () => {
  searchBtnClicked = true;
  pageNum = 1;
  searchValue = input.value;
  if (searchValue.length === 0) {
    paginationPlace.innerHTML = '';
    Notiflix.Notify.info(
      'Enter any character to search or choose one from popular movies!'
    );
  }
  displayGalleryLoader();
  searchMovie(searchValue);
};

Notiflix.Notify.init({
  position: 'right-top', // 'right-top' - 'right-bottom' - 'left-top' - 'left-bottom' - 'center-top' - 'center-bottom' - 'center-center'
  timeout: 4000,
  showOnlyTheLastOne: true,

  fontFamily: 'Roboto',
  fontSize: '13px',

  success: {
    background: '#ff6b01',
    textColor: '#fff',
  },
});
