import React, { Component } from "react";
import FilmList from "../components/FilmList";
import movieAPI from "../components/movieAPI";

export default class HomePage extends Component {
  state = { films: [] };

  componentDidMount() {
    this.fetchFilms();
  }

  fetchFilms = async () => {
    const filmsApi = await movieAPI.getFilms();
    this.setState({ films: filmsApi });
  };

  render() {
    const { films } = this.state;
    return <FilmList films={films} props={{ ...this.props }} />;
  }
}
