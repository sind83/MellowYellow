import { fetchLibrary } from './library_fetch';


// DOM elements
const myLibraryButton = document.querySelector(
  '.navigation__item:nth-child(2)'
);
const watchedListButton = document.querySelector('[loadWatched]');
const queueListButton = document.querySelector('[loadQueued]');
const moviesContainer = document.querySelector('.film-cards');

// Local storage
const watchedMovies = [JSON.parse(localStorage.getItem('movies-watched'))];
const queuedMovies = [JSON.parse(localStorage.getItem('movies-queued'))];
console.log(watchedMovies, queuedMovies)

export function loadLibrary() {
  loadWatchedList();
}

async function loadWatchedList() {
  // button's visual changes
  watchedListButton.classList.add('button--active');
  watchedListButton.classList.remove('button--inactive');

  queueListButton.classList.add('button--inactive');
  queueListButton.classList.remove('button--active');

  // change showed movies
  moviesContainer.innerHTML = '';
  if (watchedMovies == null || watchedMovies.length == 0) {
    moviesContainer.innerHTML = `<h2>You don't have any watched movies yet!</h2>`;
    return;
  } else {
    console.log(watchedMovies);

    fetchLibrary(watchedMovies[0]);
  }
}
async function loadQueueList() {
  // button's visual changes
  queueListButton.classList.add('button--active');
  queueListButton.classList.remove('button--inactive');

  watchedListButton.classList.add('button--inactive');
  watchedListButton.classList.remove('button--active');

  // change showed movies
  moviesContainer.innerHTML = '';
  if (queuedMovies == null || queuedMovies.length == 0) {
    moviesContainer.innerHTML = `<h2>You don't have any queued movies yet!</h2>`;
    return;
  } else {
    console.log(queuedMovies[0]);
    fetchLibrary(queuedMovies[0]);
  }
}


myLibraryButton.addEventListener('click',loadLibrary());

watchedListButton.addEventListener('click', loadWatchedList);
queueListButton.addEventListener('click', loadQueueList);
