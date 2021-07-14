
import { navBookmarks } from "../helper/listeners.js";
import { navPopular } from "../helper/listeners.js";
import { navSearch } from "../helper/listeners.js";
const app = document.getElementById("app");

export function header() {
    const itExist = document.querySelector("header");
    if (itExist) {
        return;
    }
    const newElem = document.createElement("header");
    newElem.innerHTML = `  <h1 class="header-title">TheMovieDB PoC </h1>
   
    <nav>
        <button id="popular" class="button-nav">
            <i class="fas fa-home">
        </i></button>
        <button id="bookmarks" class="button-nav">Bookmarks
        </button>
        <input name="text" 
        id="input" 
        placeholder="Search...">           
    </nav>
    `;
    app.append(newElem);
    navPopular();
    navBookmarks();
    navSearch();
}
