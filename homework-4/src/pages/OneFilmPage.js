import React, { Component } from "react";
import OneFilm from "../components/OneFilm";
import { Route, Switch } from "react-router-dom";
import movieAPI from "../components/movieAPI";
import CastPage from "./CastPage";
import ReviewsPage from "./ReviewsPage";

export default class OneFilmPage extends Component {
  state = { film: null };

  componentDidMount() {
    this.fetchFilm();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.film !== this.state.film) this.getYear();
  }

  fetchFilm = async () => {
    const filmId = this.props.match.params.movieId;
    const findedFilm = await movieAPI.getOneFilm(filmId);

    this.setState({ film: findedFilm });
  };

  handleGoBack = () => {
    const { history, location } = this.props;
    if (!location.state) {
      history.push("/");
      return;
    }
    history.push(location.state.from);
  };

  getYear = () => {
    const { film } = this.state;

    if (film) {
      return new Date(film.release_date).getFullYear();
    }
  };

  render() {
    const { film } = this.state;
    return (
      <>
        {film && (
          <OneFilm
            film={film}
            onClick={this.handleGoBack}
            date={this.getYear()}
            props={this.props}
          />
        )}

        <Switch>
          <Route path="/movie/:movieId/cast" component={CastPage} />
          <Route path="/movie/:movieId/reviews" component={ReviewsPage} />
        </Switch>
      </>
    );
  }
}
