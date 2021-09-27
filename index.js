import { popular } from "./pages/popular.js";
import { movie } from "./pages/movie.js";
import { bookmarks } from "./pages/bookmarks.js";
import { search } from "./pages/search.js";

const baseURL = "/TheMovieDB-PoC";
const routes = [
  {
    match: (url) => {
      return url === baseURL + "/";
    },
    renderRoute: popular,
  },
  {
    match: (url) => {
      return url.includes(baseURL + "/movies");
    },
    renderRoute: movie,
  },
  {
    match: (url) => {
      return url.includes(baseURL + "/bookmarks");
    },
    renderRoute: bookmarks,
  },
  {
    match: (url) => {
      return url.includes(baseURL + "/search");
    },
    renderRoute: search,
  },
];

class Router {
  constructor(routes) {
    this._routes = routes;

    this.reroute();

    window.history.pushState = (data, title, url) => {
      History.prototype.pushState.apply(window.history, [data, title, url]);
      this.reroute();
    };

    window.onpopstate = () => {
      this.reroute();
    };
  }

  reroute() {
    const matchedRoute = this._routes.find((route) => {
      const matched = route.match(window.location.pathname);
      return matched;
    });

    matchedRoute.renderRoute();
  }
}

const router = new Router(routes);
