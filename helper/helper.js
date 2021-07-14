
export function helper() {
    const root = document.querySelector("#root");
    const listOfFilmsEl = document.querySelector(".listOfFilms");
    if (listOfFilmsEl) {
        listOfFilmsEl.remove();
    }
    const newElFilms = document.createElement("ul");
    newElFilms.classList.add("listOfFilms");
    root.append(newElFilms);
}
