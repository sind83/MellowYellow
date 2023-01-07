const loader = `<div class="loader">
<img class="loader__img" src="./images/logo_white.png" alt="logo loader spinner"/>
</div>`;
const gallery = document.querySelector('.film-cards');

export const displayLoader = () => {
  gallery.classList.add('film-cards--loader');
  gallery.innerHTML = loader;
};

export const hideLoader = () => {
  gallery.classList.remove('film-cards--loader');
  loader.remove();
};
