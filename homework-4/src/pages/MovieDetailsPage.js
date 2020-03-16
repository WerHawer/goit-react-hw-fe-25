import React, { Component } from "react";
import MovieDetails from "../components/MovieDetails/MovieDetails";
import movieAPI from "../utils/movieAPI";
import FilmList from "../components/FilmList/FilmList";
import queryString from "query-string";

const getCategoryFromLocation = location =>
  queryString.parse(location.search).search;

export default class MovieDetailsPage extends Component {
  state = { query: "", findedFilms: null };

  componentDidMount() {
    const { location } = this.props;
    const { query } = this.state;
    const qsSearch = getCategoryFromLocation(location);
    if (!query && qsSearch) {
      this.fetchByQuery(qsSearch);
    }
  }

  handleChange = e => {
    this.setState({ query: e.target.value });
  };

  fetchByQuery = async query => {
    if (!query) return;

    const findedFilms = await movieAPI.getMoviesByQuery(query);
    this.setState({ findedFilms });
  };

  changeUrl = query => {
    if (query) {
      this.props.history.push({
        pathname: this.props.location.pathname,
        search: `search=${query}`
      });
    }
  };

  handleSubmit = async e => {
    const { query } = this.state;
    e.preventDefault();
    this.changeUrl(query);
    this.fetchByQuery(query);
    this.setState({ query: "" });
  };

  render() {
    const { query, findedFilms } = this.state;

    return (
      <>
        <MovieDetails
          onChange={this.handleChange}
          value={query}
          onSubmit={this.handleSubmit}
          films={findedFilms}
        />
        {findedFilms && <FilmList films={findedFilms} props={this.props} />}
      </>
    );
  }
}
