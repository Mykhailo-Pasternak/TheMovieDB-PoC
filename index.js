import { popular } from "./pages/popular.js";
import { movie } from "./pages/movie.js";
import { bookmarks } from "./pages/bookmarks.js";
import { search } from "./pages/search.js";

const routes = [
  {
    match: (url) => {
      return url === "/";
    },
    renderRoute: popular,
  },
  {
    match: (url) => {
      return url.includes("/movies");
    },
    renderRoute: movie,
  },
  {
    match: (url) => {
      return url.includes("/bookmarks");
    },
    renderRoute: bookmarks,
  },
  {
    match: (url) => {
      return url.includes("/search");
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
    console.log("this._routes", this._routes);

    const matchedRoute = this._routes.find((route) => {
      const matched = route.match(window.location.pathname);
      console.log("find return matched", matched);

      return matched;
    });

    matchedRoute.renderRoute();
    console.log("matchedRoute", matchedRoute);
  }
}

const router = new Router(routes);
