import { renderMovies, rerenderModalMovie } from './js/cards_rendering.js';

import { popularMovies } from './js/main_fetch';
import { pagination, paginationPlace } from './js/pagination.js';

let pageForURL = ''; 

const page = (pageNo=1) => {
    popularMovies(pageNo)
    .then(elem => {
        const movies = elem.movies.results;
        const total_pages = elem.movies.total_pages;
        const genresIds = elem.genreIds.genres
        console.log("filmy", movies, "tatl pages: ", total_pages, genresIds);
        pagination(total_pages, pageNo);
        renderMovies(0, movies)
    }).catch(console.warn);
}
page();

paginationPlace.addEventListener("click", ev => {
    const pagBtn = ev.target;
    const pageNum = parseInt(pagBtn.textContent);
    const valueTemp = pagBtn.getAttribute('value');
    if (valueTemp == 'page') {
        console.log("page", pagBtn.textContent);
        paginationPlace.innerHTML = '';
        page(pageNum);
        pageForURL = `&page=${pageNum}`
    }
    else {
        if (valueTemp == 'dots') {
            console.log("wcisnieto kropeczki")
        }
        if (valueTemp == 'arrow_r') {
            console.log("Wciśnięto strzałeczkę w prawo")
        }
        if (valueTemp =='arrow_l') {
            console.log("wciśnięto strzałeczkę w lewo")
        }
    }
})
