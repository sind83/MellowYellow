import { popularMovies } from './main_fetch';
import { hideModalLoader } from './loader_spinner';

export const gallery = document.querySelector('.film-cards');

export function renderMovies(page, results = [], genres) {
  gallery.innerHTML = '';
  const markup = results
    .map(
      ({ poster_path, title, genre_ids, vote_average, release_date, id }) => {
        const genresId = genres.map(genre => genre.id);
        const genreNames = genres.map(genre => genre.name);
        const genresNames = [];
        genre_ids.forEach(id => {
          genresNames.push(genresId.indexOf(id));
          return genresNames;
        });
        let namesOfGenre = 'unknown';
        if (genre_ids) {
          namesOfGenre = genresNames
            .map(idik => genreNames[idik])
            .slice(0, 3)
            .join(', ');
        }

        //funkcja Marty
        // const genresArray = {};
        // genres.forEach(genre => {
        //   genresArray[genre.id] = genre.name;
        // });
        // const genreName = [];
        // genre_ids.forEach(genreId => {
        //   genreName.push(genresArray[genreId]);
        // });
        // const namesOfGenre = genreName.slice(0, 3).join(', ');
        //funkcja Szymona
        //     const markup = results
        // .map(
        //   ({ poster_path, title, genre_ids, vote_average, release_date, id }) => {
        //     const gen = [];
        //     let genreNames = '';
        //     const genresIDS = genre_ids.map(item => {
        //       genres.forEach(element => {
        //         if (item === element.id) {
        //           gen.push(element.name);
        //         }
        //       }
        //       )
        //       genreNames = gen.join(", ");
        //     });
        const dots = '...';
        const cuttedTitle = title.slice(0, 35) + dots;
        const cuttedAlt = title.slice(0, 15);
        const homePageTitle = title.length >= 40 ? cuttedTitle : title;

        let posterImage = `wmyYQbahIy4SF2Qo6qNBBkJFg7z.jpg`;
        if (poster_path) {
          posterImage = poster_path;
        }
        let releaseYear = 'unknown';
        if (release_date) {
          releaseYear = release_date.slice(0, 4);
        }
        return `<div class='movie-card' data-movieId='${id}'>       
          <img class='movie-card__image' src='https://image.tmdb.org/t/p/w500/${posterImage}' alt='${cuttedAlt}' data-movieId='${id}' loading='lazy' />
  <div class='movie-card__info'>
   <p class='info__title'>${homePageTitle}</p>
   <p class='info__adds'>${namesOfGenre} | ${releaseYear}</p>
   <p class='info__adds info__adds--vote'>${vote_average}</p>   
        </div></div>`;
      }
    )
    .join('');
  gallery.insertAdjacentHTML('afterbegin', markup);
}

export function renderModalMovie({
  poster_path,
  title,
  original_title,
  genres,
  vote_average,
  vote_count,
  popularity,
  overview,
  id,
}) {
  const genreNames = genres
    .map(genre => genre.name)
    .slice(0, 3)
    .join(', ');

  let posterImage = `wmyYQbahIy4SF2Qo6qNBBkJFg7z.jpg`;
  if (poster_path) {
    posterImage = poster_path;
  }
  const markup =
    //   `<div class='movie-card movie-card--modal' data-movieId='${id}'>
    //         <img class='movie-card__image--modal' src='https://image.tmdb.org/t/p/w500/${poster_path}' alt='${title}' loading='lazy' />
    // <div class='movie-card__info movie-card__info--modal'>
    //  <p class='info--modal__title'>${title}</p>
    //  <ul class='info--modal__adds'>
    //  <li class='adds__description'> Vote / Votes</li>
    //  <li class='adds__description'> Popularity</li>
    //  <li class='adds__description'> Original Title</li>
    //  <li class='adds__description'> Genre</li></ul>
    //  <ul>
    //  <li class='adds__value'> <span class='library'> ${vote_average}</span> / ${vote_count}</li>
    //  <li class='adds__value'> ${popularity}</li>
    //  <li class='adds__value adds__value--title'> ${original_title}</li>
    //  <li class='adds__value'> ${genreNames}</li></ul>

    //  <p class='adds__about'><span class='adds__value--title'>About</span> ${overview}</p>
    // <div class='adds__buttons'>
    //  <button class='button button--inactive button--watched' type='button'>Add to watched</button>
    //  <button class='button button--inactive button--queue' type='button'>Add to queue</button>
    //       </div></div></div>`
    `<div class="modal-container-film">
                <img class="modal-img" src='https://image.tmdb.org/t/p/w500/${poster_path}' alt='${title}' loading='lazy'/>
                <div class="film-details">
                    <h2 class="film-details__main-title" >${title}</h2>
                    <ul class="details-list list">
                        <li class="details-list__item">
                            <p class="details-list_title">Vote / Votes</p>
                            <span class="details-list__info1">${vote_average}</span>&nbsp/&nbsp<span
                                class="details-list__info2">${vote_count}</span>
                        </li>
                        <li class="details-list__item">
                            <p class="details-list_title">Popularity</p>
                            <span class="details-list__info2">${popularity}</span>
                        </li>
                        <li class="details-list__item">
                            <p class="details-list_title">Original Title</p>
                            <span class="details-list__info2 ">${original_title}</span>
                        </li>
                        <li class="details-list__item">
                            <p class="details-list_title">Genre</p>
                            <span class="details-list__info2">${genreNames}</span>
                        </li>
                    </ul>
                    <h3 class="film-details__secondary-title">About</h3>
                    <p class="film-details__about">${overview}</p>
                    <ul class="buttons-list list">
                    </ul>
                    <div class='adds__buttons'>
    <button class='button button--modal button--inactive button--watched' type='button'>Add to watched</button>
    <button class='button button--modal button--inactive button--queue' type='button'>Add to queue</button>
    </div>
                </div>
            </div>`;
  hideModalLoader();
  const modalContent = document.querySelector('.modal-content');
  modalContent.innerHTML = markup;
}
