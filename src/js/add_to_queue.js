import { gallery, renderMovies, renderModalMovie } from './cards_rendering';

const modal = document.querySelector('.modal');
const storageKeyQueue = 'movies-queued';

modal.addEventListener('click', ev => {
  const targetEl = ev.target;
  console.log(targetEl);
  if (
    targetEl.nodeName == 'BUTTON' &&
    targetEl.classList.contains('button--queue')
  ) {
    const movieId = modal.querySelector('div[data-movieid]');
    const titleId = modal.querySelector('.film-details__main-title');
    console.log(titleId);

    let queuedList = JSON.parse(localStorage.getItem(storageKeyQueue));
    if (queuedList == null) {
      queuedList = [];
    }

    const movieInfo = {
      id: movieId.dataset.movieid,
      title: titleId.innerHTML,
    };
    let queuedIds = [];
    queuedList.forEach(queuedMovie => {
      console.log(queuedMovie.id);
      queuedIds.push(queuedMovie.id);
    });
    console.log(queuedIds);
    if (queuedIds.includes(movieInfo.id)) {
      alert('You already added the movie to queued');
    } else {
      queuedList.push(movieInfo);
      localStorage.setItem(storageKeyQueue, JSON.stringify(queuedList));
    }
  }
});
