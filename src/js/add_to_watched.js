import { gallery, renderMovies, renderModalMovie } from './cards_rendering';

const modal = document.querySelector('.modal');
const storageKeyWatched = 'movies-watched';

modal.addEventListener('click', ev => {
  const targetEl = ev.target;
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

    //making an object which will be saved in localStorage
    const movieInfo = {
      id: movieId.dataset.movieid,
      title: titleId.innerHTML,
    };

    // making a list of ids that are already in localStorage
    let watchedIds = [];
    watchedList.forEach(watchedMovie => {
      watchedIds.push(watchedMovie.id);
    });
    
    //checking if the film is already in localStorage or not
    if (watchedIds.includes(movieInfo.id)) {
      alert('You already added the movie to watched');
    } else {
      watchedList.push(movieInfo);
      localStorage.setItem(storageKeyWatched, JSON.stringify(watchedList));
    }
  }
});
