import { storageKeyQueue } from './add_to_queue';
import { Notify } from 'notiflix';

const modal = document.querySelector('.modal');
export const storageKeyWatched = 'movies-watched';

modal.addEventListener('click', ev => {
  const targetEl = ev.target;
  if (
    targetEl.nodeName == 'BUTTON' &&
    targetEl.classList.contains('button--watched')
  ) {
    // get movie data from DOM
    const movieId = modal.querySelector('div[data-movieid]').dataset.movieid;
    const movieTitle = modal.querySelector(
      '.film-details__main-title'
    ).innerHTML;

    let watchedList = JSON.parse(localStorage.getItem(storageKeyWatched));
    if (watchedList == null) {
      watchedList = [];
    }

    // making a list of ids that are already in localStorage
    let watchedIds = [];
    watchedList.forEach(watchedMovie => {
      watchedIds.push(watchedMovie.id);
    });

    // checking if the film is already in localStorage or not
    if (watchedIds.includes(movieId)) {
      Notify.warning('You already added the movie to watched');
    } else {
      // check if movie is in queue list ...
      let queuedList = JSON.parse(localStorage.getItem(storageKeyQueue));
      if (queuedList) {
        // ... if it even exists ...
        if (queuedList.length > 0) {
          // ... and if it's not an empty array
          let queuedIds = [];
          queuedList.forEach(queuedMovie => {
            queuedIds.push(queuedMovie.id);
          });
          // Remove movie from queue list, if it's in there
          if (queuedIds.includes(movieId)) {
            queuedList.splice(queuedIds.indexOf(movieId), 1);
            localStorage.setItem(storageKeyQueue, JSON.stringify(queuedList));
          }
        }
      }

      // finally add movie to watched list
      const movieInfo = {
        id: movieId,
        title: movieTitle,
      };
      watchedList.push(movieInfo);
      localStorage.setItem(storageKeyWatched, JSON.stringify(watchedList));
    }
  }
});