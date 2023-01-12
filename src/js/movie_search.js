import { renderMovies, renderModalMovie } from './cards_rendering.js';
import {
  pagination,
  page,
  popularMovies,
  clearFocus,
  selectBtn,
  timeInt,
  pageActualNum,
} from './pagination';
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

export let searchAllPages = 1;
export let findMovie;

export const searchMovie = (
  searchValue,

  searchPage = 1,
  arrowClicked = false
) => {
  // const parsedName = searchValue.trim();
  //   const reg = new RegExp('^[a-zA-Z s]*$');
  // if (parsedName.length === 0) {
  //   paginationPlace.innerHTML = '';
  //   return warningMarkup(emptySearch);
  // }

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

      // if (totalResults === 0) {
      //   input.value = '';
      //   return warningMarkup(failedSearch);
      // }
      // if (totalResults < 20) {
      //   paginationPlace.innerHTML = '';
      // }
      setTimeout(() => {
        hideGalleryLoader();
        renderMovies(0, movies, genresIds);
      }, 2000);
      clearFocus();
      selectBtn(paginationPlace.children, searchPageNo);
    })
    .catch(error => console.log(error));
};

form.addEventListener('submit', event => {
  searchAllPages = 1;
  event.preventDefault();
  pageNum = 1;
  searchValue = input.value;
  searchBtnClicked = true;
  displayGalleryLoader();
  searchMovie(searchValue, 1);

});
// if (window.location.pathname !== './library.html') {
//   form.addEventListener('submit', event => {
//     event.preventDefault();
//     pageNum = 1;
//     searchValue = input.value;
//     if (searchValue.length === 0) {
//       paginationPlace.innerHTML = '';
//       return Notiflix.Notify.info(
//         'Enter any character to search or choose one from popular movies!'
//       );
//     }
//     searchBtnClicked = true;
//     console.log('Szukamy: ', searchValue, allPages, searchAllPages);
//     displayGalleryLoader();
//     searchMovie(searchValue);
//     searchAllPages = allPages;
//     console.log(
//       'Wygenerowane: ',
//       searchValue,
//       allPages,
//       searchAllPages,
//       findMovie
//     );
//     console.log('czy kliknięty button search ', searchBtnClicked);
//   });
//   input.addEventListener(
//     'input',
//     debounce(event => {
//       searchMovie(event.target.value);
//       searchAllPages = allPages;
//     }, 1000)
//   );
// }