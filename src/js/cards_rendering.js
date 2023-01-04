import { popularMovies } from './main_fetch';

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
          console.log('index:', genresNames);
          return genresNames;
        });
        const namesOfGenre = `${genreNames[genresNames[0]]}, ${
          genreNames[genresNames[1]]
        }, ${genreNames[genresNames[2]]}`;
        const releaseYear = release_date.slice(0, 4);
        return `<div class='movie-card'>
          <img class='movie-card__image' src='https://image.tmdb.org/t/p/w500/${poster_path}' alt='${title}' loading='lazy' />
  <div class='movie-card__info'>
   <p class='info__title'>${title}</p>
   <p class='info__adds'>${namesOfGenre} | ${releaseYear}</p>
   <p class='info__adds info__adds--vote'>${vote_average}</p>   
        </div></div>`;
      }
    )
    .join('');
  gallery.insertAdjacentHTML('afterbegin', markup);
}

export function renderModalMovie(page, results = [], genres) {
  const markup = results
    .map(
      ({
        poster_path,
        title,
        original_title,
        genres,
        vote_average,
        vote_count,
        popularity,
        overview,
        id,
      }) => {
        const genresId = genres.map(genre => genre.id);
        const genreNames = genres.map(genre => genre.name);
        const genresNames = [];
        genre_ids.forEach(id => {
          genresNames.push(genresId.indexOf(id));
          console.log('index:', genresNames);
          return genresNames;
        });
        const namesOfGenre = `${genreNames[genresNames[0]]}, ${
          genreNames[genresNames[1]]
        }, ${genreNames[genresNames[2]]}`;
        return `<div class='movie-card movie-card--modal'>
          <img class='movie-card__image--modal' src='https://image.tmdb.org/t/p/w500/${poster_path}' alt='${title}' loading='lazy' />
  <div class='movie-card__info movie-card__info--modal'>
   <p class='info--modal__title'>${title}</p>
   <div class='info--modal__adds'>
   <p class='adds__description'> Vote / Votes</p>
   <p class='adds__description'> Popularity</p>
   <p class='adds__description'> Original Title</p>
   <p class='adds__description'> Genre</p></div> 
   <p class='adds__value'> <span class='library'> ${vote_average}</span> / ${vote_count}</p>
   <p class='adds__value'> ${popularity}</p>
   <p class='adds__value adds__value--title'> ${original_title}</p>
   <p class='adds__value'> ${namesOfGenre}</p></div>
   <p class='adds__about'><span class='adds__value--title'>About</span> ${overview}</p>
  <div class='adds__buttons>
   <button class='button button--inactive' type='button'>Add to watched</button>
   <button class='button button--inactive' type='button'>Add to queue</button>     
        </div></div></div></div>`;
      }
    )
    .join('');
  //gallery.insertAdjacentHTML('afterbegin', markup);
}
