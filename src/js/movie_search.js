import { renderMovies, renderModalMovie } from './cards_rendering.js';
import { pagination } from './pagination';
const API_KEY = `bf9c4d58b7779ca7f547438ec065a7d2`;
const API_URL = `https://api.themoviedb.org/3/trending/`;
const GENRE_URL = `https://api.themoviedb.org/3/genre/movie/list?api_key=`;
const SEARCH_URL = `https://api.themoviedb.org/3/search/movie?api_key=`;

const form = document.querySelector('.search-form');
const input = document.querySelector('.search-form__input');
export const gallery = document.querySelector('.film-cards');
const paginationPlace = document.querySelector('.film-cards__pagination');
//const searchValue = input.value;
export const searchFetch = async searchValue => {
  const movies = await (
    await fetch(`${SEARCH_URL}${API_KEY}&query=${searchValue}`)
  ).json();
  const genreIds = await (await fetch(`${GENRE_URL}${API_KEY}`)).json();
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

export const searchMovie = searchValue => {
  const parsedName = searchValue.trim();
  //   const reg = new RegExp('^[a-zA-Z s]*$');
  if (parsedName.length === 0) {
    paginationPlace.innerHTML = '';
    return warningMarkup(emptySearch);
  }
  searchFetch(searchValue)
    .then(elem => {
      const page = elem.movies.page;
      const movies = elem.movies.results;
      const totalPages = elem.movies.total_pages;
      const totalResults = elem.movies.total_results;
      allPages = totalPages;
      const genresIds = elem.genreIds.genres;
      //   if (page >= allPages - 5) {
      //     pagination(totalPages, page - 5, arrowClicked);
      //   } else {
      //     pagination(totalPages, page, arrowClicked);
      //   }

      if (totalResults === 0) {
        input.value = '';
        return warningMarkup(failedSearch);
      }
      if (totalResults < 20) {
        paginationPlace.innerHTML = '';
      }
      renderMovies(0, movies, genresIds);
    })
    .catch(error => console.log(error));
};
form.addEventListener('submit', event => {
  event.preventDefault();
  const searchValue = input.value;
  searchMovie(searchValue);
});
