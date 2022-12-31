import {renderMovies, rerenderModalMovie} from './js/cards_rendering.js';

import { popularMovies } from './js/main_fetch';

console.log ("Hello there");

const page = popularMovies()
.then(cos => {
    console.log("to jest to", cos.results)
    const movies = cos.results;
    console.log("filmy", movies, typeof(movies))
renderMovies(0,movies)}).catch(console.warn);

