import { gallery, renderMovies, renderModalMovie } from './cards_rendering';

const modal = document.querySelector('.modal');
const storageKeyWatched = 'movies-watched';

modal.addEventListener('click', ev => {
  const targetEl = ev.target;
  console.log(targetEl);
  if (
    targetEl.nodeName == 'BUTTON' &&
    targetEl.classList.contains('button--watched')
  ) {
    const movieId = modal.querySelector('div[data-movieid]');
    const titleId = modal.querySelector('.film-details__main-title');

    let watchedList = JSON.parse(localStorage.getItem(storageKeyWatched));
    if (watchedList == null) {
      watchedList = [];
    }
    let watchedIds = [];
    watchedList.forEach(watchedMovie => {
      console.log(watchedMovie.id);
      watchedIds.push(watchedMovie.id);
    });
    const movieInfo = {
      id: movieId.dataset.movieId,
      title: titleId.innerHTML,
    };
    if (watchedIds.includes(movieInfo.id)) {
      alert('You already added the movie to watched');
    } else {
      watchedList.push(movieInfo);
      localStorage.setItem(storageKeyWatched, JSON.stringify(watchedList));
    }
  }
});
