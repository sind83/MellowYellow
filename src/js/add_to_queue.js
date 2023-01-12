import { gallery, renderMovies, renderModalMovie } from './cards_rendering';

const modal = document.querySelector('.modal');
const storageKeyQueue = 'movies-queued';

modal.addEventListener('click', ev => {
  const targetEl = ev.target;
  if (
    targetEl.nodeName == 'BUTTON' &&
    targetEl.classList.contains('button--queue')
  ) {
    const movieId = modal.querySelector('div[data-movieid]');
    const titleId = modal.querySelector('.film-details__main-title');

    let queuedList = JSON.parse(localStorage.getItem(storageKeyQueue));
    if (queuedList == null) {
      queuedList = [];
    }
    //making an object which will be saved in localStorage
    const movieInfo = {
      id: movieId.dataset.movieid,
      title: titleId.innerHTML,
    };

    // making a list of ids that are already in localStorage
    let queuedIds = [];
    queuedList.forEach(queuedMovie => {
      queuedIds.push(queuedMovie.id);
    });

    //checking if the film is already in localStorage or not
    if (queuedIds.includes(movieInfo.id)) {
      alert('You already added the movie to queued');
    } else {
      queuedList.push(movieInfo);
      localStorage.setItem(storageKeyQueue, JSON.stringify(queuedList));
    }
  }
});
