import { gallery, renderMovies, renderModalMovie } from './cards_rendering';

const storageKeyQueue = 'movies-queued';

gallery.addEventListener('click', ev => {
  const targetEl = ev.target;
  console.log(targetEl);
  if (targetEl.classList.contains('button--queue')) {
    const movieId = document.querySelector('div[data-movieId]');
    const titleId = document.querySelector('.info--modal__title');

    let queuedList = localStorage.getItem(storageKeyQueue);
    if (queuedList == null) {
      queuedList = [];
    }

    const movieInfo = {
      id: movieId.dataset.movieId,
      title: titleId.innerHTML,
    };
    queuedList.push(movieInfo);

    localStorage.setItem(storageKeyQueue, JSON.stringify(queuedList));
  }
});
