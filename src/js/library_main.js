import { fetchLibrary } from './library_fetch';
import { paginationPlace } from './pagination';
import { gallery } from './cards_rendering';


// DOM elements
const myLibraryButton = document.querySelector(
  '.navigation__item:nth-child(2)'
);
const watchedListButton = document.querySelector('[loadWatched]');
const queueListButton = document.querySelector('[loadQueued]');
const moviesContainer = document.querySelector('.film-cards');

// Local storage
let watchedMovies = [JSON.parse(localStorage.getItem('movies-watched'))];
let queuedMovies = [JSON.parse(localStorage.getItem('movies-queued'))];
// console.log(watchedMovies, queuedMovies)
gallery.innerHTML = "";
paginationPlace.innerHTML = '';

setTimeout(() => {
  
  loadLibrary();
  loadWatchedList();
}, 1000)


export function loadLibrary() {
  gallery.innerHTML = "";
  paginationPlace.innerHTML = '';
  loadWatchedList();
}

async function loadWatchedList() {
  // button's visual changes
  watchedListButton.classList.add('button--active');
  watchedListButton.classList.remove('button--inactive');
  paginationPlace.innerHTML = '';
  queueListButton.classList.add('button--inactive');
  queueListButton.classList.remove('button--active');

  // change showed movies

  if (watchedMovies[0] == null || watchedMovies.length == 0) {
    paginationPlace.innerHTML = '';
    moviesContainer.innerHTML = `<h2>You don't have any watched movies yet!</h2>`;
    return;
  } else {
    paginationPlace.innerHTML = '';
    // console.log(watchedMovies);

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
  if (queuedMovies[0] == null || queuedMovies.length == 0) {
    moviesContainer.innerHTML = `<h2>You don't have any queued movies yet!</h2>`;
    // return;
  } else {
    // console.log(queuedMovies[0]);
    fetchLibrary(queuedMovies[0]);
  }
}

// loadLibrary();
// loadWatchedList();


myLibraryButton.addEventListener('click', loadLibrary);

watchedListButton.addEventListener('click', loadWatchedList);
queueListButton.addEventListener('click', loadQueueList);

