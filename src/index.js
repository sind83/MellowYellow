import { renderMovies, rerenderModalMovie } from './js/cards_rendering.js';

import { popularMovies } from './js/main_fetch';
import { pagination } from './js/pagination.js';

console.log("Hello there");

const page = popularMovies()
    .then(cos => {
        const movies = cos.movies.results;
        const total_pages = cos.movies.total_pages;
        const genresIds = cos.genreIds.genres
        console.log("filmy", movies, "tatl pages: ", total_pages, genresIds);
        pagination(total_pages,20);
        renderMovies(0, movies)
    }).catch(console.warn);

