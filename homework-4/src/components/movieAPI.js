import axios from "axios";

export default {
  BASE_IMG_URL: "https://image.tmdb.org/t/p/w300",
  BASE_URL: "https://api.themoviedb.org/3",
  KEY: "?api_key=4ea05326418d70b65b28646eea8311fb",
  id: "1",
  opions: {
    trends: "trending/movie/week",
    movie: "movie",
    actors: "credits",
    reviews: "reviews",
    search: "search"
  },
  async getFilms() {
    const request = await axios.get(
      `${this.BASE_URL}/${this.opions.trends}${this.KEY}`
    );

    return request.data.results;
  },

  async getOneFilm(filmId) {
    const request = await axios.get(
      `${this.BASE_URL}/${this.opions.movie}/${filmId}${this.KEY}`
    );

    return request.data;
  },

  async getActors(filmId) {
    const request = await axios.get(
      `${this.BASE_URL}/${this.opions.movie}/${filmId}/${this.opions.actors}${this.KEY}`
    );
    return request.data.cast;
  },

  async getReviews(filmId) {
    const request = await axios.get(
      `${this.BASE_URL}/${this.opions.movie}/${filmId}/${this.opions.reviews}${this.KEY}`
    );

    return request.data.results;
  },

  async getMoviesByQuery(query) {
    const request = await axios.get(
      `${this.BASE_URL}/${this.opions.search}/${this.opions.movie}${this.KEY}&query=${query}`
    );

    return request.data.results;
  }
};
