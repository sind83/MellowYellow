!function(){function e(e){return e&&e.__esModule?e.default:e}var a="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},i={},n=a.parcelRequirefdce;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in i){var a=i[e];delete i[e];var n={id:e,exports:{}};return t[e]=n,a.call(n.exports,n,n.exports),n.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,a){i[e]=a},a.parcelRequirefdce=n),n("iE7OH").register(JSON.parse('{"EVgbq":"index.ec6df243.js","gh2fd":"krzysztof.30b29e2e.jpg","bsHlr":"malgorzata.df1f1bf7.jpg","fidwL":"szymon.b7d9ad61.jpg","469AO":"dorota.b38eb718.jpg","dGfyM":"marta.43c8a483.jpg","dH3JR":"mateusz.640d1e4f.jpg","glktb":"index.c81ffcf9.js"}')),n("ckCCL"),n("jcFG7");var l,o=n("bpxeT"),s=n("2TvXO"),r=n("iGUyU");l=n("aNJCr").getBundleURL("EVgbq")+n("iE7OH").resolve("gh2fd");var c;c=n("aNJCr").getBundleURL("EVgbq")+n("iE7OH").resolve("bsHlr");var d;d=n("aNJCr").getBundleURL("EVgbq")+n("iE7OH").resolve("fidwL");var m;m=n("aNJCr").getBundleURL("EVgbq")+n("iE7OH").resolve("469AO");var u;u=n("aNJCr").getBundleURL("EVgbq")+n("iE7OH").resolve("dGfyM");var g;g=n("aNJCr").getBundleURL("EVgbq")+n("iE7OH").resolve("dH3JR");var f=n("gJQog"),v=n("eizMI"),p={body:document.querySelector("body"),backdropModal:document.querySelector(".backdrop"),modal:document.querySelector(".modal-content")};p.body.addEventListener("click",(function(a){var t,i;a.target.classList.contains("backdrop")&&h();var n=a.target.getAttribute("data-movieId");if(null===(i=null===(t=a.target)||void 0===t?void 0:t.closest("svg"))||void 0===i?void 0:i.classList.contains("modal-close"))h();else{var o,s,f,_;document.addEventListener("keydown",b),(null===(s=null===(o=a.target)||void 0===o?void 0:o.closest("div"))||void 0===s?void 0:s.classList.contains("movie-card"))&&(p.backdropModal.classList.remove("is-hidden"),(0,v.displayModalLoader)(),y(n).then((function(e){setTimeout((function(){(0,r.renderModalMovie)(e)}),1e3)}))),(null===(_=null===(f=a.target)||void 0===f?void 0:f.closest("span"))||void 0===_?void 0:_.classList.contains("team-link"))&&(p.backdropModal.classList.remove("is-hidden"),S='\n  <div class="team-details">\n    <h2 class="team-details__title"> Mellow Yellow Team </h2>\n    <ul class="team-details__list list">\n      <li class="team-details__item">\n        <figure>\n          <img class="team_img" src="'.concat(e(d),'" loading="lazy" />\n          <figcaption>\n            <h3 class="team-details__name">Szymon Dymański</h3>\n            <p class="team-details_role">Team Lider / Developer</p>\n          </figcaption>\n        </figure>\n      </li>\n      <li class="team-details__item">\n        <figure>\n          <img class="team_img" src="').concat(e(m),'" loading="lazy" />\n          <figcaption>\n            <h3 class="team-details__name">Dorota Domańska</h3>\n            <p class="team-details_role">Scrum Master / Developer</p>\n          </figcaption>\n        </figure>\n      </li>\n      <li class="team-details__item">\n        <figure>\n          <img class="team_img" src="').concat(e(c),'" loading="lazy" />\n          <figcaption>\n            <h3 class="team-details__name">Małgorzata Marczyńska</h3>\n            <p class="team-details_role">Grey Goose / Developer</p>\n          </figcaption>\n        </figure>\n      </li>\n      <li class="team-details__item">\n        <figure>\n          <img class="team_img" src="').concat(e(u),'" loading="lazy" />\n          <figcaption>\n            <h3 class="team-details__name">Marta Domżalska</h3>\n            <p class="team-details_role">Developer</p>\n          </figcaption>\n        </figure>\n      </li>\n      <li class="team-details__item">\n        <figure>\n          <img class="team_img" src="').concat(e(g),'" loading="lazy" />\n          <figcaption>\n            <h3 class="team-details__name">Mateusz Martin</h3>\n            <p class="team-details_role">Developer</p>\n          </figcaption>\n        </figure>\n      </li>\n      <li class="team-details__item">\n        <figure>\n          <img class="team_img" src="').concat(e(l),'" loading="lazy" />\n          <figcaption>\n            <h3 class="team-details__name">Krzysztof Flisikowski</h3>\n            <p class="team-details_role">Developer</p>\n          </figcaption>\n        </figure>\n      </li>\n    </ul>\n  </div>\n     '),document.querySelector(".modal-content").insertAdjacentHTML("afterbegin",S))}var S}));var _,y=(_=e(o)(e(s).mark((function a(t){var i,n;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("https://api.themoviedb.org/3/movie/").concat(t,"?api_key=").concat(f.API_KEY));case 2:return i=e.sent,e.next=5,i.json();case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}}),a)}))),function(e){return _.apply(this,arguments)});function h(){p.body.style.overflowY="scroll",p.backdropModal.classList.add("is-hidden"),document.removeEventListener("keydown",b),p.modal.innerHTML=""}function b(e){console.log(e.code),"Escape"===e.code&&h()}var S=n("6JpON"),E=document.querySelector(".modal"),H="movies-watched";E.addEventListener("click",(function(e){var a=e.target;if("BUTTON"==a.nodeName&&a.classList.contains("button--watched")){var t=E.querySelector("div[data-movieid]").dataset.movieid,i=E.querySelector(".film-details__main-title").innerHTML,n=JSON.parse(localStorage.getItem(H));null==n&&(n=[]);var l=[];if(n.forEach((function(e){l.push(e.id)})),l.includes(t))S.Notify.warning("You already added the movie to watched");else{var o=JSON.parse(localStorage.getItem(O));if(o&&o.length>0){var s=[];o.forEach((function(e){s.push(e.id)})),s.includes(t)&&(o.splice(s.indexOf(t),1),localStorage.setItem(O,JSON.stringify(o)))}var r={id:t,title:i};n.push(r),localStorage.setItem(H,JSON.stringify(n))}}}));S=n("6JpON");var L=document.querySelector(".modal"),O="movies-queued";L.addEventListener("click",(function(e){var a=e.target;if("BUTTON"==a.nodeName&&a.classList.contains("button--queue")){var t=L.querySelector("div[data-movieid]").dataset.movieid,i=L.querySelector(".film-details__main-title").innerHTML,n=JSON.parse(localStorage.getItem(O));null==n&&(n=[]);var l=[];if(n.forEach((function(e){l.push(e.id)})),l.includes(t))S.Notify.warning("You already added the movie to queued");else{var o=JSON.parse(localStorage.getItem(H));if(o&&o.length>0){var s=[];o.forEach((function(e){s.push(e.id)})),s.includes(t)&&(o.splice(s.indexOf(t),1),localStorage.setItem(H,JSON.stringify(o)))}var r={id:t,title:i};n.push(r),localStorage.setItem(O,JSON.stringify(n))}}}))}();
//# sourceMappingURL=index.ec6df243.js.map
