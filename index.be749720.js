!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},i={},a=t.parcelRequirefdce;null==a&&((a=function(e){if(e in o)return o[e].exports;if(e in i){var t=i[e];delete i[e];var a={id:e,exports:{}};return o[e]=a,t.call(a.exports,a,a.exports),a.exports}var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){i[e]=t},t.parcelRequirefdce=a),a("ckCCL"),a("jcFG7");var n=a("bpxeT"),r=a("2TvXO"),d=a("iGUyU"),l=a("cfhex"),c=a("gJQog"),s=a("eizMI"),u={body:document.querySelector("body"),backdropModal:document.querySelector(".backdrop"),modal:document.querySelector(".modal-content")};u.body.addEventListener("click",(function(e){var t,o;e.target.classList.contains("backdrop")&&m();var i=e.target.getAttribute("data-movieId");if(null===(o=null===(t=e.target)||void 0===t?void 0:t.closest("svg"))||void 0===o?void 0:o.classList.contains("modal-close"))m();else{var a,n,r,c;document.addEventListener("keydown",p),(null===(n=null===(a=e.target)||void 0===a?void 0:a.closest("div"))||void 0===n?void 0:n.classList.contains("movie-card"))&&(u.backdropModal.classList.remove("is-hidden"),(0,s.displayModalLoader)(),f(i).then((function(e){setTimeout((function(){(0,d.renderModalMovie)(e)}),1e3)}))),(null===(c=null===(r=e.target)||void 0===r?void 0:r.closest("span"))||void 0===c?void 0:c.classList.contains("team-link"))&&(u.backdropModal.classList.remove("is-hidden"),(0,l.modalTeam)())}}));var v,f=(v=e(n)(e(r).mark((function t(o){var i,a;return e(r).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("https://api.themoviedb.org/3/movie/").concat(o,"?api_key=").concat(c.API_KEY));case 2:return i=e.sent,e.next=5,i.json();case 5:return a=e.sent,e.abrupt("return",a);case 7:case"end":return e.stop()}}),t)}))),function(e){return v.apply(this,arguments)});function m(){u.body.style.overflowY="scroll",u.backdropModal.classList.add("is-hidden"),document.removeEventListener("keydown",p),u.modal.innerHTML=""}function p(e){console.log(e.code),"Escape"===e.code&&m()}var g=a("6JpON"),y=document.querySelector(".modal"),h="movies-watched";y.addEventListener("click",(function(e){var t=e.target;if("BUTTON"==t.nodeName&&t.classList.contains("button--watched")){var o=y.querySelector("div[data-movieid]").dataset.movieid,i=y.querySelector(".film-details__main-title").innerHTML,a=JSON.parse(localStorage.getItem(h));null==a&&(a=[]);var n=[];if(a.forEach((function(e){n.push(e.id)})),n.includes(o))g.Notify.warning("You already added the movie to watched");else{var r=JSON.parse(localStorage.getItem(b));if(r&&r.length>0){var d=[];r.forEach((function(e){d.push(e.id)})),d.includes(o)&&(r.splice(d.indexOf(o),1),localStorage.setItem(b,JSON.stringify(r)))}var l={id:o,title:i};a.push(l),localStorage.setItem(h,JSON.stringify(a))}}}));g=a("6JpON");var S=document.querySelector(".modal"),b="movies-queued";S.addEventListener("click",(function(e){var t=e.target;if("BUTTON"==t.nodeName&&t.classList.contains("button--queue")){var o=S.querySelector("div[data-movieid]").dataset.movieid,i=S.querySelector(".film-details__main-title").innerHTML,a=JSON.parse(localStorage.getItem(b));null==a&&(a=[]);var n=[];if(a.forEach((function(e){n.push(e.id)})),n.includes(o))g.Notify.warning("You already added the movie to queued");else{var r=JSON.parse(localStorage.getItem(h));if(r&&r.length>0){var d=[];r.forEach((function(e){d.push(e.id)})),d.includes(o)&&(r.splice(d.indexOf(o),1),localStorage.setItem(h,JSON.stringify(r)))}var l={id:o,title:i};a.push(l),localStorage.setItem(b,JSON.stringify(a))}}}))}();
//# sourceMappingURL=index.be749720.js.map
