import React, { Component } from "react";
import HomePage from "./pages/HomePage";
import { Route, Switch, Redirect } from "react-router-dom";
import OneFilmPage from "./pages/OneFilmPage";
import MovieDetailsPage from "./pages/MovieDetailsPage";
import Nav from "./components/Nav";

export default class App extends Component {
  state = {};

  render() {
    return (
      <>
        <Nav />

        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/movie/:movieId" component={OneFilmPage} />
          <Route path="/movie" component={MovieDetailsPage} />
          <Redirect to="/" />
        </Switch>
      </>
    );
  }
}
