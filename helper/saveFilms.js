import Api from "../api/api.js";
export async function saveFilm(id, type) {
    const localFilms = window.localStorage.getItem("films");
    let isAvailable = false;
    let localStorage = [];
    if (localFilms !== null) {
        localStorage = JSON.parse(localFilms);

        isAvailable = localStorage.find((film) => film.id === Number(id));
    }

    if (isAvailable) {
        const newLocalStorage = localStorage.filter((elem) => elem.id !== Number(id));
        localStorage = newLocalStorage;
        window.localStorage.setItem("films", JSON.stringify(localStorage));
    } if (!isAvailable) {
        const oneFilm = await Api.fetchMovieDetails(id);
        const localFilmsData = window.localStorage.getItem("films");

        if (localFilmsData !== null) {
            localStorage = JSON.parse(localFilmsData);
            localStorage.push(oneFilm);
            window.localStorage.setItem("films", JSON.stringify(localStorage));
            return;
        }

        localStorage.push(oneFilm);

        window.localStorage.setItem("films", JSON.stringify(localStorage));
    }
}
