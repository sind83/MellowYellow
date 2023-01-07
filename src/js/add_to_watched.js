import { gallery, renderMovies, renderModalMovie } from './cards_rendering';

const storageKeyWatched = 'movies-watched';

gallery.addEventListener('click', ev => {
  const targetEl = ev.target;
  console.log(targetEl);
  if (targetEl.classList.contains('button--watched')) {
    const movieId = document.querySelector('div[data-movieId]');
    const titleId = document.querySelector('.info--modal__title');

    let watchedList = localStorage.getItem(storageKeyWatched);
    if (watchedList == null) {
      watchedList = [];
    }

    const movieInfo = {
      id: movieId.dataset.movieId,
      title: titleId.innerHTML,
    };
    watchedList.push(movieInfo);

    localStorage.setItem(storageKeyWatched, JSON.stringify(watchedList));
  }
});
