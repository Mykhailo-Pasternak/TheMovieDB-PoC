
export function render(htmlForPrint, type) {
    const listOfFilmsELEM = document.querySelector(".listOfFilms");
    if (type === "Recommendation") {
        listOfFilmsELEM.classList.add("column");
        const newEl = document.createElement("ul");
        newEl.classList.add("listOfRecommendations");
        listOfFilmsELEM.append(newEl);
        newEl.append(...htmlForPrint);
    } else {
        listOfFilmsELEM.innerHTML = "";
        listOfFilmsELEM.append(...htmlForPrint);
    }
};
