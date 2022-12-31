//import {gallery} from'./cards_rendering';

const paginationPlace = document.querySelector('.film-cards__pagination');
const leftArrow = `<svg class="pagination_icon" width=40px height=40px ><use href="./images/icons_optimalised.svg#icon-arrow-left2"</use></svg>`
const dots = `. . .`;
export const pagination = (total_pages = 1, pageNo = 1) => {
    pagination.innerHTML = '';
    if ((total_pages <= 9) && (total_pages >= 2)) {
        for (let i = 0; i < total_pages; i++) {
            paginationPlace.innerHTML += `<button type="button">${i + 1}</button>`
        }
    }
    else {
        let initI = 0 + pageNo;
        paginationPlace.innerHTML += `<button class = "pagination_icon__left" type="button"></button>`;
        for (let i = initI; i < initI + 8; i++) {

            if ((i == 1 + pageNo) || (i == 6 + pageNo)) {
                paginationPlace.innerHTML += `<button class = "pagination_icon" type="button">${dots}</button>`
            }
            else {
                paginationPlace.innerHTML += `<button class="pagination_number" type="button">${i}</button>`
            }
        }
        paginationPlace.innerHTML += `<button class = "pagination_icon__right" type="button"></button>`
    }
}