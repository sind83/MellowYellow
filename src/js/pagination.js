//import {gallery} from'./cards_rendering';
import { renderMovies, renderModalMovie } from './cards_rendering.js';

import { popularMovies } from './main_fetch';


export const paginationPlace = document.querySelector('.film-cards__pagination');

const dots = `. . .`;

export const pagination = (total_pages = 1, pageNo = 1) => {
    pagination.innerHTML = '';
    if ((total_pages >= 2)) {
        paginationPlace.innerHTML += `<div value="arrow_l" class = "pagination__arrow left pagination__button"></div>`;
        paginationPlace.innerHTML += `<div value="page" class="pagination__button">${1}</div>`;
        if ((total_pages <= 9) && (total_pages >= 2)) {
            for (let i = 0; i < total_pages; i++) {
                paginationPlace.innerHTML += `<div value="page" class="pagination__number pagination__button">${i + 1}</div>`
            }
        }
        else {
            let initI = 0 + pageNo;
            for (let i = initI; i < initI + 6; i++) {

                if ((i == pageNo)) {
                    paginationPlace.innerHTML += `<div value ="dots_l" class = "pagination__button" >${dots}</div>`
                }
                if (i == 5 + pageNo) {
                    paginationPlace.innerHTML += `<div value ="dots_r" class = "pagination__button" >${dots}</div>`
                }
                else {
                    paginationPlace.innerHTML += `<div value="page" class="pagination__button">${i + 1}</div>`
                }
            }

        }
        paginationPlace.innerHTML += `<div value="page" class="pagination__button">${total_pages}</div>`;
        paginationPlace.innerHTML += `<div value="arrow_r" class = "pagination__arrow right pagination__button"></div>`
    }
    if (total_pages == 1) {
        paginationPlace.innerHTML += `<div value="page" class="pagination__button">${1}</div>`
    }
}

let pageForURL = '';

let allPages = 1;

const page = (pageNo = 1, renderOk = true) => {
    popularMovies(pageNo)
        .then(elem => {
            const movies = elem.movies.results;
            const totalPages = elem.movies.total_pages;
            allPages = totalPages;
            const genresIds = elem.genreIds.genres
            console.log("filmy", movies, "tatl pages: ", totalPages, genresIds);
            if (renderOk) {
                if (pageNo >= allPages - 5) {
                    pagination(totalPages, pageNo - 5)
                } else {
                    pagination(totalPages, pageNo);
                }
            }
            renderMovies(0, movies);
        }).catch(console.warn);
}
page(allPages, true);

const paginatinSequence = paginationPlace.addEventListener("click", ev => {
    let prevPage = 0;
    let nextPage = 0;
    const pagBtn = ev.target;
    let pageNum = parseInt(pagBtn.textContent);

    const valueTemp = pagBtn.getAttribute('value');
    if (valueTemp == 'page') {
        console.log("page", pagBtn.textContent);
        if ((pageNum == 1) || (pageNum == allPages)) {
            paginationPlace.innerHTML = '';
            page(pageNum, true);
        }
        else {
            page(pageNum, false);
        }
        // pageForURL = `&page=${pageNum}`
    }
    else {
        if (valueTemp == 'dots_r') {

            prevPage = parseInt(pagBtn.previousElementSibling.textContent);
            pageNum = prevPage;
            paginationPlace.innerHTML = '';
            if (pageNum > allPages) {
                page(allPages - 5, true);
            } else {
                page(pageNum, true);
            }
        }
        if (valueTemp == 'dots_l') {
            console.log("next: ", pagBtn.nextElementSibling.textContent);
            nextPage = parseInt(pagBtn.nextElementSibling.textContent);
            pageNum = nextPage - 6;
            paginationPlace.innerHTML = '';
            if (pageNum < 5) {
                page(1, true);
            } else {
                page(pageNum, true);
            }
        }
        if (valueTemp == 'arrow_r') {
            if (pageNum.toString() == 'NaN') {
                pageNum = 1;
            }
            pageNum += 1;
            console.log("Czy to jest Nan:", pageNum)
            
            if (pageNum > allPages) {
                page(allPages - 5, true);
            } else {
                paginationPlace.innerHTML = '';
                page(pageNum, true);
            }
        }
        if (valueTemp == 'arrow_l') {
         if (pageNum.toString() == 'NaN'){
            pageNum=1;
         }
            paginationPlace.innerHTML = '';
            if (pageNum < 5) {
                page(1, true);
            } else {
                page(pageNum-1, true);
            }
        }
    }
    console.log("akutalna strona: ", pageNum);
})

