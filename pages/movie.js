import Api from "../api/api.js";
import { header } from "../templates/header.js";
import { main } from "../templates/main.js";
import { likeListener } from "../helper/listeners.js";
import { render } from "../render/render.js";
import { helper } from "../helper/helper.js";
import { templateFilmsHTML } from "../templates/templateFilmsHTML.js";
import { spinner } from "../templates/spinner.js";

export async function movie() {
  const { pathname } = window.location;
  const [, idMovie] = pathname.split("movies/");

  const data = await Api.fetchMovieDetails(idMovie);

  const { id, original_title, poster_path, vote_average, genres, overview } =
    data;

  const arrFilms = [];
  header();
  main();
  helper();
  likeListener();
  const newElem = document.createElement("li");
  newElem.dataset.movie_id = id;
  let genresString = "";
  genres.forEach((genre, ind) => {
    genresString +=
      genres.length !== ind + 1 ? `${genre.name}, ` : `${genre.name}.`;
  });
  const localFilms = window.localStorage.getItem("films");
  const localStorage = JSON.parse(localFilms);
  const isLiked = localStorage.find((film) => film.id === id);

  newElem.innerHTML = `  <div class="block-Movie-details">
         
            <img  src="https://image.tmdb.org/t/p/w500${poster_path}" alt=""><span href="#" class="like-button ${
    isLiked ? "like-button-active" : ""
  }">
            <i class="fas fa-heart"></i>
            </span>
            <div class="boxDetail">
                <div class="title-box"><h2>${original_title}</h2>
                </div>
            <ul class="ulDetail">
                <li>Rating: <span class="boxDetail-content"> ${vote_average}/10 </span> </li>
                <li>Genres:<span class="boxDetail-content"> ${genresString}</span></li>
                <li>Overview:<span class="boxDetail-content"> ${overview}</span></li>
            </ul>
            </div>
            
            </div>
            `;

  arrFilms.push(newElem);
  render(arrFilms);
  spinner();

  const data2 = await Api.fetchMovieRecommendations(idMovie);
  if (data2) {
    const spinner = document.querySelector(".spinner");
    spinner.remove();
  }
  const arrFilmsHTML = templateFilmsHTML(data2.results);
  const type = "Recommendation";
  render(arrFilmsHTML, type);

  const listOfFilmsELEM = document.querySelector(".listOfFilms");

  listOfFilmsELEM.addEventListener("click", (evt) => {
    const filmElement = evt.target.closest("li");
    const onImg = evt.target.closest("img");

    if (onImg !== null) {
      window.history.pushState(
        null,
        null,
        `/TheMovieDB-PoC/movies/${filmElement.dataset.movie_id}`
      );
    }
  });
}
