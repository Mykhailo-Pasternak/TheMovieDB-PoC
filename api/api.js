const urlPopular = "https://api.themoviedb.org/3/movie/popular?api_key=0e6e5d074eed695b9506235c8586e1be&language=en-US&page=1";

class Api {
    async fetchPopularMovies() {
        try {
            const response = await fetch(urlPopular);
            if (!response.ok) {
                throw new Error(`"Fetch API", ${response.status} `);
            }
            return response.json();
        } catch (error) {
            console.log("Err", error);
        }
    }

    async fetchMovieDetails(id) {
        try {
            const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=0e6e5d074eed695b9506235c8586e1be&language=en-US`);
            if (!response.ok) {
                throw new Error(`"Fetch API", ${response.status} `);
            }
            return response.json();
        } catch (error) {
            console.log("Err", error);
        }
    }

    async fetchMoviesBySearchText(query) {
        try {
            const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=0e6e5d074eed695b9506235c8586e1be&language=en-US&query=${query}&page=1&include_adult=false`);
            if (!response.ok) {
                throw new Error(`"Fetch API", ${response.status} `);
            }

            return response.json();
        } catch (error) {
            console.log("Err: -->", error);
        }
    }

    async fetchMovieRecommendations(id) {
        try {
            const response = await fetch(`https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=0e6e5d074eed695b9506235c8586e1be&language=en-US&page=1`);
            if (!response.ok) {
                throw new Error(`"Fetch API", ${response.status} `);
            }
            return response.json();
        } catch (error) {
            console.log("Err", error);
        }
    }
}

export default new Api();
