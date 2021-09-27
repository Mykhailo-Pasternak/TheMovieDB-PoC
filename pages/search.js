import Api from "../api/api.js";
import { header } from "../templates/header.js";
import { main } from "../templates/main.js";
import { likeListener } from "../helper/listeners.js";
import { helper } from "../helper/helper.js";
import { templateFilmsHTML } from "../templates/templateFilmsHTML.js";
import { render } from "../render/render.js";
import { spinner } from "../templates/spinner.js";
export async function search() {
  const { pathname } = window.location;
  const [, query] = pathname.split("search/");
  header();
  main();
  spinner();

  const data = await Api.fetchMoviesBySearchText(query);
  if (data) {
    const spinner = document.querySelector(".spinner");
    spinner.remove();
  }

  helper();

  const listOfFilmsELEM = document.querySelector(".listOfFilms");
  likeListener();
  const arrFilmsHTML = templateFilmsHTML(data.results);

  render(arrFilmsHTML);

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
