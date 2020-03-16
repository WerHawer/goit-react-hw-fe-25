import React, { Component, lazy, Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import OneFilm from "../components/OneFilm/OneFilm";
import movieAPI from "../utils/movieAPI";

const asyncCast = lazy(() => import("./CastPage"));
const asyncReiews = lazy(() => import("./ReviewsPage"));

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
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route path="/movie/:movieId/cast" component={asyncCast} />
            <Route path="/movie/:movieId/reviews" component={asyncReiews} />
          </Switch>
        </Suspense>
      </>
    );
  }
}
