//import {gallery} from'./cards_rendering';

export const paginationPlace = document.querySelector('.film-cards__pagination');

const dots = `. . .`;

export const pagination = (total_pages = 1, pageNo = 1) => {
    pagination.innerHTML = '';
    paginationPlace.innerHTML += `<div value="arrow_l" class = "pagination__arrow left pagination__button"></div>`;
    paginationPlace.innerHTML += `<div value="page" class="pagination__button">${1}</div>`;
    if ((total_pages <= 9) && (total_pages >= 2)) {
        for (let i = 0; i < total_pages; i++) {
            paginationPlace.innerHTML += `<div value="page" class="pagination__number pagination__button">${i + 1}</div>`
        }
    }
    else {
        let initI = 0 + pageNo;

        for (let i = initI; i < initI + 7; i++) {

            if ((i ==  pageNo) || (i == 6 + pageNo)) {
                paginationPlace.innerHTML += `<div value ="dots" class = "pagination__button" >${dots}</div>`
            }
            else {
                paginationPlace.innerHTML += `<div value="page" class="pagination__button">${i}</div>`
            }
        }

    }
    paginationPlace.innerHTML += `<div value="page" class="pagination__button">${total_pages}</div>`;
    paginationPlace.innerHTML += `<div value="arrow_r" class = "pagination__arrow right pagination__button"></div>`
}