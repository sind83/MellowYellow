import { renderMovies } from './cards_rendering';
const api_key = `bf9c4d58b7779ca7f547438ec065a7d2`;
const api_url = `https://api.themoviedb.org/3/movie/`;

export async function fetchLibrary(ids) {
  let watchedMoviesURL = [];
  // finding movie
  for (const movieId of ids) {
    watchedMoviesURL.push(api_url + `${movieId.id}?api_key=${api_key}`);
  }
  console.log('Movies in this library (URL): ', watchedMoviesURL);
  const movies = [];

  for (const movie of watchedMoviesURL) {
    let res = await (await fetch(movie)).json();
    let genres = res[`genres`];
    let genresIds = [];
    for (const genre of genres) {
      genresIds.push(genre.id);
    }
    res['genre_ids'] = genresIds;
    movies.push(res);
  }
  console.log('This library:', movies);
  renderMovies(0, movies, movies[0]['genres']);
}
