import krzysztof from '../images/krzysztof.jpg';
import malgorzata from '../images/malgorzata.jpg';
import szymon from '../images/szymon.jpg';
import dorota from '../images/dorota.jpg';
import marta from '../images/marta.jpg';
import mateusz from '../images/mateusz.jpg';

export function modalTeam() {
  const teamMarkup = `
  <div class="team-details">
    <h2 class="team-details__title"> Mellow Yellow Team </h2>
    <ul class="team-details__list list">
      <li class="team-details__item">
        <figure>
          <img class="team_img" src="${szymon}" loading="lazy" />
          <figcaption>
            <h3 class="team-details__name">Szymon Dymański</h3>
            <p class="team-details_role">Team Lider / Developer</p>
          </figcaption>
        </figure>
      </li>
      <li class="team-details__item">
        <figure>
          <img class="team_img" src="${dorota}" loading="lazy" />
          <figcaption>
            <h3 class="team-details__name">Dorota Domańska</h3>
            <p class="team-details_role">Scrum Master / Developer</p>
          </figcaption>
        </figure>
      </li>
      <li class="team-details__item">
        <figure>
          <img class="team_img" src="${malgorzata}" loading="lazy" />
          <figcaption>
            <h3 class="team-details__name">Małgorzata Marczyńska</h3>
            <p class="team-details_role">Grey Goose / Developer</p>
          </figcaption>
        </figure>
      </li>
      <li class="team-details__item">
        <figure>
          <img class="team_img" src="${marta}" loading="lazy" />
          <figcaption>
            <h3 class="team-details__name">Marta Domżalska</h3>
            <p class="team-details_role">Developer</p>
          </figcaption>
        </figure>
      </li>
      <li class="team-details__item">
        <figure>
          <img class="team_img" src="${mateusz}" loading="lazy" />
          <figcaption>
            <h3 class="team-details__name">Mateusz Martin</h3>
            <p class="team-details_role">Developer</p>
          </figcaption>
        </figure>
      </li>
      <li class="team-details__item">
        <figure>
          <img class="team_img" src="${krzysztof}" loading="lazy" />
          <figcaption>
            <h3 class="team-details__name">Krzysztof Flisikowski</h3>
            <p class="team-details_role">Developer</p>
          </figcaption>
        </figure>
      </li>
    </ul>
  </div>
     `;
  const modalContent = document.querySelector('.modal-content');
  modalContent.insertAdjacentHTML('afterbegin', teamMarkup);
}
