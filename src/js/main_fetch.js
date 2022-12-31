const API_KEY = `bf9c4d58b7779ca7f547438ec065a7d2`;
const API_URL = `https://api.themoviedb.org/3/trending/`


export const popularMovies = async () =>{
    // media_type, time_window
const movies = await (await fetch(`${API_URL}movie/day?api_key=${API_KEY}`)).json();
console.log(movies);
return movies;
}

