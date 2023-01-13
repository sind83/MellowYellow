import { storageKeyWatched } from './add_to_watched';
import { Notify } from 'notiflix';

const modal = document.querySelector('.modal');
export const storageKeyQueue = 'movies-queued';

modal.addEventListener('click', ev => {
  const targetEl = ev.target;
  if (
    targetEl.nodeName == 'BUTTON' &&
    targetEl.classList.contains('button--queue')
  ) {
    // get movie data from DOM
    const movieId = modal.querySelector('div[data-movieid]').dataset.movieid;
    const movieTitle = modal.querySelector(
      '.film-details__main-title'
    ).innerHTML;

    let queuedList = JSON.parse(localStorage.getItem(storageKeyQueue));
    if (queuedList == null) {
      queuedList = [];
    }

    // making a list of ids that are already in localStorage
    let queuedIds = [];
    queuedList.forEach(queuedMovie => {
      queuedIds.push(queuedMovie.id);
    });

    //checking if the film is already in localStorage or not
    if (queuedIds.includes(movieId)) {
      Notify.warning('You already added the movie to queued');
    } else {
      // check if movie is in watched list ...
      let watchedList = JSON.parse(localStorage.getItem(storageKeyWatched));
      if (watchedList) {
        // ... if it even exists ...
        if (watchedList.length > 0) {
          // ... and if it's not an empty array
          let watchedIds = [];
          watchedList.forEach(watchedMovie => {
            watchedIds.push(watchedMovie.id);
          });
          // Remove movie from watched list, if it's in there
          if (watchedIds.includes(movieId)) {
            watchedList.splice(watchedIds.indexOf(movieId), 1);
            localStorage.setItem(
              storageKeyWatched,
              JSON.stringify(watchedList)
            );
          }
        }
      }

      // finally add movie to queued list
      const movieInfo = {
        id: movieId,
        title: movieTitle,
      };
      queuedList.push(movieInfo);
      localStorage.setItem(storageKeyQueue, JSON.stringify(queuedList));
    }
  }
});