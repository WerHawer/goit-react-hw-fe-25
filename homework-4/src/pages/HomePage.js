import React, { Component } from "react";
import FilmList from "../components/FilmList/FilmList";
import movieAPI from "../utils/movieAPI";

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
