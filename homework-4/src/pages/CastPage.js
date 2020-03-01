import React, { Component } from "react";
import movieAPI from "../components/movieAPI";
import Cast from "../components/Cast";

export default class CastPage extends Component {
  state = { actors: null };

  componentDidMount() {
    this.fetchCast();
  }

  fetchCast = async () => {
    const filmId = this.props.match.params.movieId;
    const filmActors = await movieAPI.getActors(filmId);
    this.setState({ actors: filmActors });
    console.log(filmActors);
  };

  render() {
    const { actors } = this.state;
    return <>{actors && <Cast actors={actors} />}</>;
  }
}
