import React, { Component, lazy, Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Nav from "./components/Nav/Nav";

const asyncHome = lazy(() => import("./pages/HomePage"));
const asyncOneFilmPage = lazy(() => import("./pages/OneFilmPage"));
const asyncMovieDetails = lazy(() => import("./pages/MovieDetailsPage"));

export default class App extends Component {
  state = {};

  render() {
    return (
      <>
        <Nav />
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route path="/" exact component={asyncHome} />
            <Route path="/movie/:movieId" component={asyncOneFilmPage} />
            <Route path="/movie" component={asyncMovieDetails} />
            <Redirect to="/" />
          </Switch>
        </Suspense>
      </>
    );
  }
}
