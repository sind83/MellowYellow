//import {gallery} from'./cards_rendering';
import { renderMovies } from './cards_rendering.js';

import { popularMovies } from './main_fetch';

const paginationPlace = document.querySelector('.film-cards__pagination');

const dots = `...`;

export const pagination = (total_pages = 1, pageNo = 1, arrowClicked = false) => {
    paginationPlace.innerHTML = '';
    if ((total_pages >= 2)) {
        if (pageNo != 1) {
            paginationPlace.innerHTML += `<div value="arrow_l" class="pagination__arrow left pagination__button"></div>`;
            if (pageNo != 3) {
                paginationPlace.innerHTML += `<div value="page" class="pagination__button">${1}</div>`;
            }
        }
        if ((total_pages <= 8) && (total_pages >= 2)) {
            for (let i = 0; i < total_pages; i++) {
                paginationPlace.innerHTML += `<div value="page" class="pagination__number pagination__button">${i + 1}</div>`
            }
        }
        else {
            let initI = 0 + pageNo;
            if (arrowClicked) {

                for (let i = initI; i < initI + 6; i++) {
                    if ((i == initI)) {
                        if (pageNo > 3) {
                            paginationPlace.innerHTML += `<div value ="dots_l" class = "pagination__button" >${dots}</div>`
                        }
                    }
                    if (i == 5 + initI) {
                        if (pageNo != total_pages - 5) {
                            paginationPlace.innerHTML += `<div value ="dots_r" class = "pagination__button" >${dots}</div>`
                        }
                    }
                    else {
                        switch (pageNo + 1) {
                            case 1 - 3:
                                // paginationPlace.innerHTML += `<div value="page" class="pagination__button">${i}</div>`
                                // break;
                                // case 2:
                                // case 1:
                                paginationPlace.innerHTML += `<div value="page" class="pagination__button">${i}</div>`
                                break;
                            default:
                                paginationPlace.innerHTML += `<div value="page" class="pagination__button">${i - 2}</div>`
                        }
                    }
                }
            } else {
                for (let i = initI; i < initI + 6; i++) {
                    if ((i == initI)) {
                        if (pageNo > 5) {
                            paginationPlace.innerHTML += `<div value ="dots_l" class = "pagination__button" >${dots}</div>`
                        }
                    }
                    if (i == 5 + initI) {
                        if (pageNo != total_pages - 5) {
                            paginationPlace.innerHTML += `<div value ="dots_r" class = "pagination__button" >${dots}</div>`
                        }
                    }
                    else {
                        paginationPlace.innerHTML += `<div value="page" class="pagination__button">${i}</div>`
                    }
                }

            }
        }

        paginationPlace.innerHTML += `<div value="page" class="pagination__button">${total_pages}</div>`;
        if (pageNo !== total_pages - 5) {
            paginationPlace.innerHTML += `<div value="arrow_r" class = "pagination__arrow right pagination__button"></div>`
        }
    }

    if (total_pages == 1) {
        paginationPlace.innerHTML += `<div value="page" class="pagination__button">${1}</div>`
    }
}


let allPages = 1;
let setSelect = false;
let pageActualNum = 1;

export const selectBtn = (colect, btnNumber) => {
    let val;
    let table = [...colect]
    let element = 0;

    table.map((elem) => {
        val = elem.getAttribute('value')

        if (val === 'page') {
            if (elem.textContent === btnNumber.toString()) {
                element = elem.classList.add('selected');
            }
        }

    })
}

export const clearFocus = () => {
    let table = [...paginationPlace.children]
    table.map((elem) => {
        elem.classList.remove("selected");
    })
}

export const page = (pageNo = 1, renderOk = true, arrowClicked = false) => {
    popularMovies(pageNo)
        .then(elem => {
            const movies = elem.movies.results;
            const totalPages = elem.movies.total_pages;
            allPages = totalPages;
            const genresIds = elem.genreIds.genres;
            if (renderOk) {
                if (pageNo >= allPages - 5) {
                    pagination(totalPages, pageNo - 5, arrowClicked);
                } else {
                    pagination(totalPages, pageNo, arrowClicked);
                }
            }
            renderMovies(0, movies, genresIds);
            clearFocus();
            selectBtn(paginationPlace.children, pageActualNum)
        })
        .catch(console.warn);
}
page(allPages, true);


paginationPlace.addEventListener("click", ev => {

    let prevPage = 0;
    let nextPage = 0;
    const pagBtn = ev.target;

    let pageNum = parseInt(pagBtn.textContent);

    const valueTemp = pagBtn.getAttribute('value');
    if (valueTemp == 'page') {
        switch (pageNum) {
            case 1:
            case allPages:
                page(pageNum, true)
            default:
                page(pageNum, false);
        }
        pageActualNum = pageNum;
    }
    else {
        switch (valueTemp) {
            case 'dots_r':
                {
                    prevPage = parseInt(pagBtn.previousElementSibling.textContent);
                    pageNum = prevPage + 1;
                    paginationPlace.innerHTML = '';
                    if (pageNum >= allPages) {
                        page(allPages - 4, true);
                    } else {
                        page(pageNum, true);
                    }
                    pageActualNum = pageNum;
                    break;
                }
            case 'dots_l':
                {

                    nextPage = parseInt(pagBtn.nextElementSibling.textContent);
                    pageNum = nextPage - 5;
                    paginationPlace.innerHTML = '';
                    if (pageNum < 5) {
                        page(1, true);
                    } else {
                        page(pageNum, true);
                    }
                    pageActualNum = pageNum;
                    break;
                }
            case 'arrow_r':
                {
                    pageActualNum += 1;
                    pageNum = pageActualNum;
                    if (pageNum > allPages) {
                        paginationPlace.innerHTML = '';
                        page(allPages - 5, true);
                    }
                    if (pageNum < 4) {
                        page(pageNum, false, true);
                    }
                    else {
                        paginationPlace.innerHTML = '';
                        page(pageNum, true, true);
                    }
                    arrowClicked = false;
                    break;
                }
            case 'arrow_l':
                {
                    pageActualNum -= 1;
                    pageNum = pageActualNum;
                    paginationPlace.innerHTML = '';
                    if (pageNum > 1) {
                        page(pageNum, true, true);
                    } else {
                        page(1, true, true);
                    }
                    break;
                }
        }
    }
})

