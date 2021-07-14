import { saveFilm } from "../helper/saveFilms.js";
export function likeListener() {
    const listOfFilmsEl = document.querySelector(".listOfFilms");
    listOfFilmsEl.addEventListener("click", (evt) => {
        const buttonElement = evt.target.closest("span.like-button");

        if (buttonElement !== null) {
            buttonElement.classList.toggle("like-button-active");
            const filmElement = buttonElement.closest("li");

            saveFilm(filmElement.dataset.movie_id);
        }
    });
};
const activeStyle = "color: orange; border: 2px solid rgb(167, 166, 166)";

export function navBookmarks() {
    const buttonBookmarks = document.querySelector("#bookmarks");
    const buttonPopular = document.querySelector("#popular");
    buttonBookmarks.addEventListener("click", (evt) => {
        if (buttonBookmarks !== null) {
            window.history.pushState(null, null, "/bookmarks/");
        }
        buttonPopular.style = "";
        buttonBookmarks.style = activeStyle;
    });
}
export function navPopular() {
    const buttonBookmarks = document.querySelector("#bookmarks");
    const buttonPopular = document.querySelector("#popular");
    buttonPopular.addEventListener("click", (evt) => {
        if (buttonPopular !== null) {
            window.history.pushState(null, null, "/");
        }
        buttonBookmarks.style = "";
        buttonPopular.style = activeStyle;
    });
}

export function navSearch() {
    const input = document.querySelector("#input");
    let textForSearch = "";

    input.addEventListener("keypress", (evt) => {
        textForSearch = evt.target.value;

        if ((evt.key === "Enter") && textForSearch.length > 0) {
            window.history.pushState(null, null, `/search/${textForSearch}`);

            input.value = "";
        }
    });
}
