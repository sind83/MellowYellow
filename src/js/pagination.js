//import {gallery} from'./cards_rendering';
import { renderMovies, renderModalMovie } from './cards_rendering.js';

import { popularMovies } from './main_fetch';


export const paginationPlace = document.querySelector('.film-cards__pagination');

const dots = `...`;

export const pagination = (total_pages = 1, pageNo = 1, arrowClicked = false) => {
    pagination.innerHTML = '';
    if ((total_pages >= 2)) {
        if (pageNo != 1) {
            paginationPlace.innerHTML += `<div value="arrow_l" class = "pagination__arrow left pagination__button"></div>`;
            if (pageNo != 3) {
                paginationPlace.innerHTML += `<div value="page" class="pagination__button">${1}</div>`;
            }
        }
        if ((total_pages <= 9) && (total_pages >= 2)) {
            for (let i = 0; i < total_pages; i++) {
                paginationPlace.innerHTML += `<div value="page" class="pagination__number pagination__button">${i + 1}</div>`
            }
        }
        else {
            let initI = 0 + pageNo;
            if (arrowClicked) {

                for (let i = initI; i < initI + 6; i++) {
                    if ((i == initI)) {
                        if (pageNo > 4) {
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
                            case 3:
                                paginationPlace.innerHTML += `<div value="page" class="pagination__button">${i}</div>`
                                break;
                            case 2:
                            case 1:
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
        console.log(total_pages, pageNo)

        paginationPlace.innerHTML += `<div value="page" class="pagination__button">${total_pages}</div>`;
        if (pageNo !== total_pages - 5) {
            paginationPlace.innerHTML += `<div value="arrow_r" class = "pagination__arrow right pagination__button"></div>`
        }
    }
    if (total_pages == 1) {
        paginationPlace.innerHTML += `<div value="page" class="pagination__button">${1}</div>`
    }
}

let pageForURL = '';
let allPages = 1;

const page = (pageNo = 1, renderOk = true, arrowClicked = false) => {
    popularMovies(pageNo)
        .then(elem => {

            const movies = elem.movies.results;
            const totalPages = elem.movies.total_pages;
            allPages = totalPages;
            const genresIds = elem.genreIds.genres;
            console.log("filmy", movies, "tatl pages: ", totalPages, genresIds);
            if (renderOk) {
                if (pageNo >= allPages - 5) {
                    pagination(totalPages, pageNo - 5, arrowClicked)
                } else {
                    pagination(totalPages, pageNo, arrowClicked);
                }
            }
            renderMovies(0, movies, genresIds);


        }).catch(console.warn);
}
page(allPages, true);
let pageActualNum = 1;

paginationPlace.addEventListener("click", ev => {
    const clearFocus = () => {
        let table = [...paginationPlace.children]
        table.map((elem) => {
            elem.classList.remove("selected");
        })
    }
    let prevPage = 0;
    let nextPage = 0;
    const pagBtn = ev.target;
    let pageNum = parseInt(pagBtn.textContent);
    //let arrowClicked = false

    const valueTemp = pagBtn.getAttribute('value');
    console.log("ILOŚĆ DZIECI: ", paginationPlace.children.length);
    if (valueTemp == 'page') {
        //console.log("page", pagBtn.textContent);
        let buttonNo = parseInt(pagBtn.textContent);
        if ((pageNum == 1) || (pageNum == allPages)) {
            paginationPlace.innerHTML = '';
            page(pageNum, true);
        }
        else {
            page(pageNum, false);
        }
        pageActualNum = pageNum;
        clearFocus();
        const focusSelectedBtn = (buttonNo % 6);
        console.log("Button Selected", focusSelectedBtn);
        paginationPlace.children[focusSelectedBtn].classList.add("selected");
        
        // pageForURL = `&page=${pageNum}`
    }
    else {
        if (valueTemp == 'dots_r') {
            clearFocus();
            prevPage = parseInt(pagBtn.previousElementSibling.textContent);
            pageNum = prevPage + 1;
            paginationPlace.innerHTML = '';
            console.log("DOTSSSS R page number: ", pageNum);
            if (pageNum >= allPages) {
                page(allPages - 4, true);
                
            } else {
                page(pageNum, true);
                
            }

            
            pageActualNum = pageNum;
        }
        if (valueTemp == 'dots_l') {
            console.log("next: ", pagBtn.nextElementSibling.textContent);
            nextPage = parseInt(pagBtn.nextElementSibling.textContent);
            pageNum = nextPage - 5;
            paginationPlace.innerHTML = '';
            if (pageNum < 5) {
                page(1, true);
            } else {
                page(pageNum, true);
            }
            pageActualNum = pageNum;
        }
        if (valueTemp == 'arrow_r') {
            console.log("aktualny PAGE No. ", pageNum, pageActualNum);
            pageActualNum += 1;
            pageNum = pageActualNum;
            console.log("Czy to jest Nan:", pageNum)
            arrowClicked = true;
            if (pageNum > allPages) {
                paginationPlace.innerHTML = '';
                page(allPages - 5, true, true);
            }
            if (pageNum < 4) {
                page(pageNum, false, true);
            }
            else {
                paginationPlace.innerHTML = '';
                page(pageNum, true, true);
            }
            arrowClicked = false;

        }
        if (valueTemp == 'arrow_l') {
            pageActualNum -= 1;
            pageNum = pageActualNum;
            console.log("Czy to jest Nan:", pageNum)
            paginationPlace.innerHTML = '';
            //arrowClicked = true;
            if (pageNum > 1) {
                page(pageNum, true, true);
            } else {
                page(1, true, true);
            }
            //arrowClicked = false;

        }
    }
    console.log("akutalna strona: ", pageNum);
})

