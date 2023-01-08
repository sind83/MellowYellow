import { renderModalMovie } from './cards_rendering';

const refs = {
    body: document.querySelector('body'),
    backdropModal: document.querySelector('.backdrop'),
    modal: document.querySelector('.modal-content'),
}

refs.body.addEventListener('click', openModal);

function openModal(e) {
    if (
      e.target.classList.contains('backdrop') 
    ) {
      closeModal();
    }
    if (e.target?.closest('svg')?.classList.contains('modal-close')) {
        closeModal();
    }

    let id = e.target?.closest('div')?.dataset.movieId;

    if (e.target.closest('div').classList.contains ('movie-card')) {
        refs.backdropModal.classList.remove('is-hidden');
        document.addEventListener('keydown', checkModalKey);
        renderModalMovie(id);
    }
}

function closeModal() {
  refs.body.style.overflowY = 'scroll';
  refs.backdropModal.classList.add('is-hidden');
  document.removeEventListener('keydown', checkModalKey);

  refs.modal.innerHTML = '';
}

function checkModalKey(e) {
  console.log(e.code);
  if (e.code === 'Escape') {
    closeModal();
  }
}
