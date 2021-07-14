import { templateFilmsHTML } from "../templates/templateFilmsHTML.js";
import { render } from "../render/render.js";
import { header } from "../templates/header.js";
import { main } from "../templates/main.js";
import { helper } from "../helper/helper.js";
import { likeListener } from "../helper/listeners.js";

export function bookmarks() {
    const localFilms = window.localStorage.getItem("films");
    if (localFilms === null) {
        return;
    }

    const data = JSON.parse(localFilms);
    header();
    main();
    helper();

    likeListener();

    if (localFilms !== null) {
        const arrFilmsHTML = templateFilmsHTML(data);

        render(arrFilmsHTML);
    }
    const listOfFilmsELEM = document.querySelector(".listOfFilms");
    listOfFilmsELEM.addEventListener("click", (evt) => {
        const filmElement = evt.target.closest("li");
        const onImg = evt.target.closest("img");
        if (onImg !== null) {
            window.history.pushState(null, null, `/movies/${filmElement.dataset.movie_id}`);
        }
    });
};
