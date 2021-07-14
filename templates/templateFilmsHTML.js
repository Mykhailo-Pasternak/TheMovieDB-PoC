
export function templateFilmsHTML(data) {
    const arrFilmsHTML = [];
    data.forEach((elem) => {
        const localFilms = window.localStorage.getItem("films");
        const localStorage = JSON.parse(localFilms);
        let isLiked = false;
        if (localStorage) {
            isLiked = localStorage.find((film) => film.id === elem.id);
        };

        const newElem = document.createElement("li");
        newElem.dataset.movie_id = elem.id;
        newElem.innerHTML = `  <div class="blockOneFilm">
            <img class="poster" src="https://image.tmdb.org/t/p/w500${elem.poster_path}" alt="">
            <span href="#" class="like-button ${isLiked ? "like-button-active" : ""}">
            <i class="fas fa-heart"></i>
            </span>
            <div class="title"> <span>${elem.original_title}</span></div>
            </div>
            `;
        arrFilmsHTML.push(newElem);
    });
    return arrFilmsHTML;
};
