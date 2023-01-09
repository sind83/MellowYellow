//import {gallery} from'./cards_rendering';
import { renderMovies } from './cards_rendering.js';
import { popularMovies } from './main_fetch';
import { searchBtnClicked, input, searchMovie, searchValue, searchFetch, searchAllPages } from './movie_search.js';

export const paginationPlace = document.querySelector('.film-cards__pagination');

const dots = `...`;

export const pagination = (total_pages = 1, pageNo = 1, arrowClicked = false) => {
    paginationPlace.innerHTML = '';
    if (searchBtnClicked) {
        //-------------------------------------------------------
        // console.log("Hurray", searchBtnClicked, "page no:", pageNo)
        // if ((total_pages >= 2)) {
        //     if (pageNo > 1) {
        //         paginationPlace.innerHTML += `<div value="arrow_l" class="pagination__arrow left pagination__button"></div>`;
        //         if (pageNo > 3) {
        //             paginationPlace.innerHTML += `<div value="page" class="pagination__button">${1}</div>`;
        //         }
        //     }
        //     if ((total_pages <= 8)) {
        //         for (let i = 0; i < total_pages; i++) {
        //             paginationPlace.innerHTML += `<div value="page" class="pagination__number pagination__button">${i + 1}</div>`
        //         }
        //     }

        //     else {
        //         console.log("Hurray2", searchBtnClicked, "page no:", pageNo)
        //         let initI = 0 + pageNo;
        //         if (arrowClicked) {

        //             for (let i = initI; i < initI + 6; i++) {
        //                 if ((i == initI)) {
        //                     if (pageNo > 3) {
        //                         paginationPlace.innerHTML += `<div value ="dots_l" class = "pagination__button" >${dots}</div>`
        //                     }
        //                 }
        //                 if (i == 5 + initI) {
        //                     if (pageNo != total_pages - 5) {
        //                         paginationPlace.innerHTML += `<div value ="dots_r" class = "pagination__button" >${dots}</div>`
        //                     }
        //                 }
        //                 else {
        //                     console.log('PRZED SWITCH: ', pageNo)
        //                     switch (pageNo+1) {

        //                         case 1:
        //                             console.log("WHAT IS THE PAGE NO in 1: ", pageNo, "and +1")
        //                             break;
        //                         case 2:
        //                             paginationPlace.innerHTML += `<div value="page" class="pagination__button">${i}</div>`
        //                             console.log("WHAT IS THE PAGE NO in 2: ", pageNo, "and +1")
        //                             break;
        //                         case 3:
        //                             paginationPlace.innerHTML += `<div value="page" class="pagination__button">${i-1}</div>`
        //                             break;
        //                         // case 4:
        //                         //     console.log("WHAT IS THE PAGE NO: ", pageNo, "and +1")
        //                         //     paginationPlace.innerHTML += `<div value="page" class="pagination__button">${i-2}</div>`
        //                         //     break;
        //                         default:
        //                             console.log("WHAT IS THE PAGE NO in DEFAULT: ", pageNo, "and +1")
        //                             paginationPlace.innerHTML += `<div value="page" class="pagination__button">${i - 2}</div>`
        //                     }
        //                 }
        //             }
        //         } else {
        //             for (let i = initI; i < initI + 6; i++) {
        //                 if ((i == initI)) {
        //                     if (pageNo > 3) {
        //                         paginationPlace.innerHTML += `<div value ="dots_l" class = "pagination__button" >${dots}</div>`
        //                     }
        //                 }
        //                 if (i == 5 + initI) {
        //                     if (pageNo != total_pages - 5) {
        //                         paginationPlace.innerHTML += `<div value ="dots_r" class = "pagination__button" >${dots}</div>`
        //                     }
        //                 }
        //                 else {
        //                     paginationPlace.innerHTML += `<div value="page" class="pagination__button">${i}</div>`
        //                 }
        //             }

        //         }
        //     }

        //     paginationPlace.innerHTML += `<div value="page" class="pagination__button">${total_pages}</div>`;
        //     if (pageNo !== total_pages - 5) {
        //         paginationPlace.innerHTML += `<div value="arrow_r" class = "pagination__arrow right pagination__button"></div>`
        //     }
        // }

        // if (total_pages == 1) {
        //     paginationPlace.innerHTML += `<div value="page" class="pagination__button">${1}</div>`
        // }
        //------------------------------------------------------------------------
    }
    else {
        if ((total_pages >= 2)) {
            console.log("Hurray Old", searchBtnClicked, "page no:", pageNo)
            if (pageNo > 1) {
                paginationPlace.innerHTML += `<div value="arrow_l" class="pagination__arrow left pagination__button"></div>`;
                if (pageNo > 3) {
                    paginationPlace.innerHTML += `<div value="page" class="pagination__button">${1}</div>`;
                }
            }
            if ((total_pages <= 8) && (total_pages >= 2)) {
                for (let i = 0; i < total_pages - 1; i++) {
                    paginationPlace.innerHTML += `<div value="page" class="pagination__number pagination__button">${i + 1}</div>`
                }
            }
            else {
                let initI = pageNo;
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
                            if (pageNo < total_pages) {
                                switch (pageNo) {
                                    case 2:
                                        paginationPlace.innerHTML += `<div value="page" class="pagination__button">${i - 1}</div>`
                                        break;
                                    case 1:
                                        //case 4:
                                        paginationPlace.innerHTML += `<div value="page" class="pagination__button">${i}</div>`
                                        break;
                                    default:
                                        paginationPlace.innerHTML += `<div value="page" class="pagination__button">${i - 2}</div>`
                                }
                            }
                            else {
                                paginationPlace.innerHTML += `<div value="page" class="pagination__button">${i - 4}</div>`
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
                            if (pageNo < total_pages) {
                                paginationPlace.innerHTML += `<div value ="dots_r" class = "pagination__button" >${dots}</div>`
                            }
                        }
                        if (pageNo >= total_pages) {
                            paginationPlace.innerHTML += `<div value="page" class="pagination__button">${i - 5}</div>`
                        }
                        else {
                            paginationPlace.innerHTML += `<div value="page" class="pagination__button">${i}</div>`
                        }
                    }

                }
            }
            if (pageNo < total_pages) {
                paginationPlace.innerHTML += `<div value="page" class="pagination__button">${total_pages}</div>`;
            }
            if (pageNo < total_pages) {
                paginationPlace.innerHTML += `<div value="arrow_r" class = "pagination__arrow right pagination__button"></div>`
            }
        }

        if (total_pages == 1) {
            paginationPlace.innerHTML += `<div value="page" class="pagination__button">${1}</div>`
        }
    }
}


let allPages = 1;
let setSelect = false;
export let pageActualNum = 1;

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


export const page = (fetchFunc, pageNo = 1, renderOk = true, arrowClicked = false, searchVal = '') => {
    fetchFunc(pageNo, searchVal)
        .then(elem => {
            const movies = elem.movies.results;
            const totalPages = elem.movies.total_pages;
            allPages = totalPages;
            const genresIds = elem.genreIds.genres;
            // if (searchBtnClicked) {
            //     if (renderOk) {
            //         if (pageNo >= searchAllPages) {
            //             pagination(totalPages, pageNo, false);
            //         } else {
            //             pagination(totalPages, pageNo, arrowClicked);
            //         }
            //     }
            // } else {
            if (renderOk) {
                if (pageNo >= allPages) {
                    pagination(totalPages, pageNo, arrowClicked);
                } else {
                    pagination(totalPages, pageNo, arrowClicked);
                }
            }
            // }
            renderMovies(0, movies, genresIds);
            clearFocus();
            selectBtn(paginationPlace.children, pageActualNum)
        })
        .catch(console.warn);
}
page(popularMovies, allPages, true);

export const paginationRender = (ev, mainCallback, fetchCallback, pages) => {
    //ev - event, mainCallback-function doing read, fetchcallback - func geting fetch from url
    let prevPage = 0;
    let nextPage = 0;
    const pagBtn = ev.target;
    console.log("Pagination button render", pagBtn);
    let pageNum = parseInt(pagBtn.textContent);

    const valueTemp = pagBtn.getAttribute('value');
    if (valueTemp == 'page') {
        if (searchBtnClicked) {
            switch (pageNum) {
                case 1:
                case pages:
                    mainCallback(searchValue, pageNum)
                default:
                    mainCallback(searchValue, pageNum)
            }
        } else {
            switch (pageNum) {
                case 1:
                case pages:
                    mainCallback(fetchCallback, pageNum, true)
                default:
                    mainCallback(fetchCallback, pageNum, false);
            }
        }
        pageActualNum = pageNum;
    }
    else {
        switch (valueTemp) {
            case 'dots_r':
                {
                    prevPage = parseInt(pagBtn.previousElementSibling.textContent);
                    pageNum = prevPage + 5;
                    paginationPlace.innerHTML = '';
                    if (searchBtnClicked) {
                        if (pageNum >= pages) {
                            mainCallback(searchValue, pageNum)
                        } else {
                            mainCallback(searchValue, pageNum)
                        }
                    } else {
                        if (pageNum >= pages) {
                            mainCallback(fetchCallback, pages - 4, true);
                        } else {
                            mainCallback(fetchCallback, pageNum, true);
                        }
                    }
                    pageActualNum = pageNum;
                    break;
                }
            case 'dots_l':
                {
                    nextPage = parseInt(pagBtn.nextElementSibling.textContent);
                    pageNum = nextPage - 5;
                    paginationPlace.innerHTML = '';
                    if (searchBtnClicked) {
                        if (pageNum < 5) {
                            mainCallback(searchValue, 1)
                        } else {
                            mainCallback(searchValue, pageNum)
                        }
                    } else {
                        if (pageNum < 5) {
                            mainCallback(fetchCallback, 1, true);
                        } else {
                            mainCallback(fetchCallback, pageNum, true);
                        }
                    }
                    pageActualNum = pageNum;
                    break;
                }
            case 'arrow_r':
                {
                    pageActualNum += 1;
                    pageNum = pageActualNum;
                    if (searchBtnClicked) {
                        if (pageNum > pages) {
                            paginationPlace.innerHTML = '';
                            mainCallback(searchValue, pages - 5, true);
                        }
                        if (pageNum < 2) {
                            mainCallback(searchValue, pageNum, true);
                        }
                        else {
                            paginationPlace.innerHTML = '';
                            mainCallback(searchValue, pageNum, true);
                        }
                    } else {
                        if (pageNum > pages) {
                            paginationPlace.innerHTML = '';
                            mainCallback(fetchCallback, pageNum, true);
                        }
                        if (pageNum < 2) {
                            mainCallback(fetchCallback, pageNum, true, true);
                        }
                        else {
                            paginationPlace.innerHTML = '';
                            mainCallback(fetchCallback, pageNum, true, true);
                        }
                    }
                    arrowClicked = false;
                    break;
                }
            case 'arrow_l':
                {
                    pageActualNum -= 1;
                    pageNum = pageActualNum;
                    paginationPlace.innerHTML = '';
                    if (searchBtnClicked) {
                        if (pageNum > 1) {
                            mainCallback(searchValue, pageNum, true);
                        } else {
                            mainCallback(searchValue, 1, true);
                        }
                    } else {
                        if (pageNum > 0) {
                            mainCallback(fetchCallback, pageNum, true, true);
                        }

                        else {
                            mainCallback(fetchCallback, 1, true, true);
                        }
                    }
                    break;
                }
        }
    }
}

paginationPlace.addEventListener("click", ev => {
    ev.preventDefault();

    if (searchBtnClicked) {
        paginationRender(ev, searchMovie, searchFetch, searchAllPages);
        console.log("click click", pageActualNum)
    } else {
        paginationRender(ev, page, popularMovies, allPages);
    }
})


