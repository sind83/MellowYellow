const e=document.querySelector(".film-cards");function o(o,t=[]){console.log("wnetrze",t);const s=t.map((({poster_path:e,title:o,genre_ids:t,vote_average:s,release_date:a,id:n})=>`<div class='movie-card'>\n          <img class='movie-card__image' src='https://image.tmdb.org/t/p/w500/${e}' alt='${o}' loading='lazy' />\n  <div class='movie-card__info'>\n   <p class='info__title'>${o}</p>\n   <p class='info__adds'>${t.map((e=>t)).join(",")}|${a.slice(0,4)}</p>\n   <p class='info__adds info__adds--vote'>${s}</p>   \n        </div></div>`)).join("");e.insertAdjacentHTML("afterbegin",s)}console.log("Hello there");(async()=>{const e=await(await fetch("https://api.themoviedb.org/3/trending/movie/day?api_key=bf9c4d58b7779ca7f547438ec065a7d2")).json();return console.log(e),e})().then((e=>{console.log("to jest to",e.results);const t=e.results;console.log("filmy",t,typeof t),o(0,t)})).catch(console.warn);
//# sourceMappingURL=index.dea082d7.js.map
